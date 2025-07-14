import { useUser } from "../store/authUser";
import { Navigate } from "react-router";

export const RedirectIfAuthenticated = ({ children }: { children: React.ReactNode }) => {
  const { name, role } = useUser((state) => state);

  const isAuthenticated = !!name && !!role;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};
