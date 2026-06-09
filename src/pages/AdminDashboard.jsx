import { useAuth } from '../context/AuthContext.jsx';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-lightGray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Admin Dashboard</h1>
        <div className="bg-secondary rounded-lg shadow-lg p-6">
          <p className="text-primary mb-4">Welcome, {user?.username}!</p>
          <p className="text-accent">
            This is the admin dashboard. You can manage properties, users, and other settings here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
