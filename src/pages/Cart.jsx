import React from "react";
import { useCart } from "../context/CartContext";
import "../Css/Cart.css"; // Add your cart styles here

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <section className="cart-grid">
      {cartItems.map((game) => (
        <div key={game.id} className="cart-card">
          <img src={game.cover} alt={game.title} className="cart-img" />
          <h3>{game.title}</h3>
          {game.rating && <p>Rating: {game.rating}</p>}
          <p>Price: {game.price}</p>
          <button onClick={() => removeFromCart(game.id)}>Remove</button>
        </div>
      ))}
    </section>
  );
}

export default Cart;
