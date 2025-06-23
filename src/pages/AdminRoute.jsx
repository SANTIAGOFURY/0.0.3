import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // or your auth hook/provider

function AdminRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // User not logged in
    return <Navigate to="/login" replace />;
  }

  if (!currentUser.isAdmin) {
    // User logged in but not admin
    return <Navigate to="/" replace />; // or show an Access Denied page
  }

  // User is admin - render children
  return children;
}

export default AdminRoute;
