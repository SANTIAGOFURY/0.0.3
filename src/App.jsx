import { Routes, Route } from "react-router-dom";
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
import { CartProvider } from "./context/CartContext"; // Import CartProvider
function App() {
  return (
    <CartProvider>
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
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
