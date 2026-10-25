import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const logginUser = localStorage.getItem("loginValue");
  if (logginUser === "1") {
    
    return logginUser ? <Outlet /> : <Navigate to="/login-page" replace />;
  }
};

export default ProtectedRoute;
