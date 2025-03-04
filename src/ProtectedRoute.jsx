import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import useLogin from "./utils/hooks/useLogin";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const isAuthChecked = useLogin(); // Wait for Firebase check

  if (!isAuthChecked) return null; // Prevent redirect before Firebase completes check

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
