// Components/ProtectedRoute.tsx
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const ProtectedRoute = () => {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;