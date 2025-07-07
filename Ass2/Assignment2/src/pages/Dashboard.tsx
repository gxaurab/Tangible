// pages/Dashboard.tsx
import { signOut } from 'firebase/auth';
import { auth } from '../../auth/firebaseConfig';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../store/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Failed to sign out. Please try again.');
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Welcome to the Admin Dashboard {user?.displayName || 'Admin'}
          </h1>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p>This is your protected dashboard content.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;