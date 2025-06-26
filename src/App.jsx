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
import AdminGames from "./pages/GameAdmin";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import Loader from "./components/Loading";
import AdminGameCodes from "./pages/AdminGameCodes";

// Wrapper to get gameId param from URL and pass to AdminGameCodes component
import { useParams } from "react-router-dom";
function AdminGameCodesWrapper() {
  const { gameId } = useParams();
  return <AdminGameCodes gameId={gameId} />;
}

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

            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminGames />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/codes/:gameId"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminGameCodesWrapper />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </CartProvider>
  );
}

export default App;
