import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const ADMIN_EMAILS = [
  "alphawar404@gmail.com",
  "admin2@example.com",
  "admin3@example.com",
];

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" replace />;

  if (requireAdmin && !ADMIN_EMAILS.includes(user.email)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
