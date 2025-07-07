// pages/Login.tsx
import { useNavigate } from 'react-router';
import { signOut, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../auth/firebaseConfig';
import { useEffect } from 'react';
import { useAuthStore } from '../store/auth';

const Login = () => {
  const navigate = useNavigate();
  const { user,  isLoading } = useAuthStore();

  useEffect(() => {
    
      if (user) navigate('/dashboard'); 
    
  }, [user]);

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Failed to sign in. Please try again.');
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Failed to sign out. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Login</h1>
        {user ? (
          <>
            <p className="mb-4">Welcome, {user.displayName}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={logOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={signIn}
          >
            Login with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;