import { Navigate, Outlet } from "react-router";
import { useAuth } from "../application/auth/useAuth";

const ProtectedRoute = () => {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;