import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import { auth, db } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const hasLoadedCart = useRef(false); // Track first Firestore fetch

  // Track auth user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Save cart locally on logout
  useEffect(() => {
    if (!user) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCartItems([]);
      hasLoadedCart.current = false;
    }
  }, [user]);

  // Load cart from Firestore and merge with localStorage
  useEffect(() => {
    if (!user) {
      setCartItems([]);
      hasLoadedCart.current = false;
      return;
    }

    const cartRef = doc(db, "carts", user.uid);

    const unsubscribe = onSnapshot(cartRef, (docSnap) => {
      const firestoreCart = docSnap.exists() ? docSnap.data().items || [] : [];
      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Merge localCart items not in Firestore cart
      const mergedCart = [
        ...firestoreCart,
        ...localCart.filter(
          (localItem) =>
            !firestoreCart.some((fItem) => fItem.id === localItem.id)
        ),
      ];

      setCartItems(mergedCart);
      hasLoadedCart.current = true;

      // Clear localStorage after merging
      localStorage.removeItem("cart");
    });

    return () => unsubscribe();
  }, [user]);

  // Save cart to Firestore after initial load, with error handling
  useEffect(() => {
    async function saveCart() {
      if (user && hasLoadedCart.current) {
        const cartRef = doc(db, "carts", user.uid);
        try {
          await setDoc(cartRef, { items: cartItems }, { merge: true });
        } catch (error) {
          console.error("Failed to save cart to Firestore:", error);
        }
      }
    }
    saveCart();
  }, [cartItems, user]);

  function addToCart(game) {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === game.id)) return prevItems;
      return [...prevItems, game];
    });
  }

  function removeFromCart(gameId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== gameId));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
