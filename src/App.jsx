import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import GameDetails from "./pages/Gamedetails";
import Cart from "./pages/Cart";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import Loader from "./components/Loading";
import AdminGames from "./pages/GameAdmin"; // <-- import here

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <CartProvider>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<GameDetails />} />
            <Route path="/support" element={<Support />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminGames />} />{" "}
            {/* <-- new admin route */}
          </Route>
        </Routes>
      )}
    </CartProvider>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import GameDetails from "./pages/Gamedetails";
// import Cart from "./pages/Cart";
// import Support from "./pages/Support";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ResetPassword from "./pages/ResetPassword";
// import ProtectedRoute from "./ProtectedRoute";
// import Layout from "./components/Layout";
// import { CartProvider } from "./context/CartContext"; // Import CartProvider
// function App() {
//   return (
//     <CartProvider>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ResetPassword />} />
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/product/:id" element={<GameDetails />} />
//           <Route path="/support" element={<Support />} />
//           <Route path="/cart" element={<Cart />} />
//         </Route>
//       </Routes>
//     </CartProvider>
//   );
// }

// export default App;
