import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import GameDetails from "./pages/GameDetails";
import Cart from "./pages/Cart";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ResetPassword />} />{" "}
      {/* Protected Routes with Layout (Header) */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<GameDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
