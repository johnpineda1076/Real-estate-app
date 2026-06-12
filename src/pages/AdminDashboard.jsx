import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { getAllPropertiesAdmin, deleteProperty } from '../lib/propertiesService';
import { Button } from '../components/ui';

const STATUS_COLORS = {
  available: 'bg-green-100 text-green-700',
  reserved: 'bg-yellow-100 text-yellow-700',
  sold: 'bg-gray-100 text-gray-600',
};

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    getAllPropertiesAdmin()
      .then(setProperties)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this property? This action cannot be undone.')) return;
    setDeleting(id);
    try {
      await deleteProperty(id);
      setProperties(prev => prev.filter(p => p.id !== id));
    } catch {
      alert('Error deleting property. Please try again.');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="min-h-screen bg-lightGray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-muted mt-1 text-sm">{user?.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button to="/admin/properties/new" size="md">
              + New Property
            </Button>
            <Button variant="outline" size="md" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-warm p-6">
            <div className="text-3xl font-bold text-accent">{properties.length}</div>
            <div className="text-muted mt-1 text-sm">Total Properties</div>
          </div>
          <div className="bg-white rounded-xl shadow-warm p-6">
            <div className="text-3xl font-bold text-green-600">
              {properties.filter(p => p.status === 'available').length}
            </div>
            <div className="text-muted mt-1 text-sm">Available</div>
          </div>
          <div className="bg-white rounded-xl shadow-warm p-6">
            <div className="text-3xl font-bold text-primary">
              {properties.filter(p => p.is_active).length}
            </div>
            <div className="text-muted mt-1 text-sm">Active (public)</div>
          </div>
        </div>

        {/* Properties Table */}
        <div className="bg-white rounded-xl shadow-warm overflow-hidden">
          <div className="px-6 py-4 border-b border-primary/10 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-primary">Properties</h2>
            <span className="text-sm text-muted">{properties.length} total</span>
          </div>

          {loading ? (
            <div className="text-center py-16 text-muted">Loading...</div>
          ) : properties.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-12 h-12 mx-auto text-accent/30 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
              </svg>
              <p className="text-muted mb-4">No properties yet</p>
              <Button to="/admin/properties/new">Add your first property</Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-lightGray text-xs text-muted uppercase tracking-wide">
                  <tr>
                    <th className="px-6 py-3 text-left">Property</th>
                    <th className="px-6 py-3 text-left">Type</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Price</th>
                    <th className="px-6 py-3 text-left">Active</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {properties.map(property => {
                    const thumb = property.property_media?.find(m => m.is_cover && m.type === 'image')?.url
                      ?? property.property_media?.find(m => m.type === 'image')?.url;
                    return (
                      <tr key={property.id} className="hover:bg-lightGray/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {thumb ? (
                              <img src={thumb} alt="" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-lightGray flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
                                </svg>
                              </div>
                            )}
                            <div>
                              <p className="font-medium text-primary text-sm">{property.title}</p>
                              <p className="text-xs text-muted">{[property.city, property.neighborhood].filter(Boolean).join(', ') || '—'}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-dark capitalize">{property.type}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${STATUS_COLORS[property.status] ?? 'bg-gray-100 text-gray-600'}`}>
                            {property.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-primary">
                          ${property.price?.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${property.is_active ? 'bg-green-500' : 'bg-gray-300'}`} />
                            <span className="text-xs text-muted">{property.is_active ? 'Yes' : 'No'}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <Link
                              to={`/admin/properties/${property.id}/edit`}
                              className="text-sm text-accent hover:text-accent-dark font-medium transition-colors"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(property.id)}
                              disabled={deleting === property.id}
                              className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors disabled:opacity-40"
                            >
                              {deleting === property.id ? '...' : 'Delete'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
