import { Navigate } from "react-router";
import { useUser } from "../store/authUser";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoutes = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { name, role } = useUser((state) => state);

  console.log("ProtectedRoutes check: ", { name, role, allowedRoles });

  const isAuthenticated = !!name && !!role;
  const isAuthorized = allowedRoles
    ? allowedRoles.map(r => r.toLowerCase()).includes(role?.toLowerCase() || "")
    : true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
