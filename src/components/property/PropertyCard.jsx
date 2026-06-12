import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const STATUS_STYLES = {
  available: 'bg-green-500 text-white',
  reserved: 'bg-yellow-500 text-white',
  sold: 'bg-gray-500 text-white',
};

const PropertyCard = ({ property }) => {
  const { user } = useAuth();
  const coverImage = property.property_media?.find(m => m.is_cover && m.type === 'image')?.url
    ?? property.property_media?.find(m => m.type === 'image')?.url
    ?? null;

  return (
    <div className="group bg-white rounded-xl shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {coverImage ? (
          <img
            src={coverImage}
            alt={property.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-64 bg-lightGray flex items-center justify-center">
            <svg className="w-16 h-16 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21V12h6v9" />
            </svg>
          </div>
        )}
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[property.status] ?? 'bg-primary text-white'}`}>
            {property.status}
          </span>
        </div>

        {/* Admin Edit Button */}
        {user && (
          <Link
            to={`/admin/properties/${property.id}/edit`}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary hover:text-accent hover:bg-white p-1.5 rounded-lg shadow transition-colors"
            title="Edit property"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </Link>
        )}
        {/* Price Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-2xl font-bold">
            ${property.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
          {property.title}
        </h3>
        <p className="text-muted text-sm flex items-center mt-1">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {[property.city, property.neighborhood].filter(Boolean).join(', ') || 'Location not specified'}
        </p>

        {/* Features */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary/10">
          <div className="flex items-center text-muted">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm">{property.area} m²</span>
          </div>
          <div className="flex items-center text-muted">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span className="text-sm">{property.bedrooms ?? '—'} bed</span>
          </div>
          <div className="flex items-center text-muted">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            <span className="text-sm">{property.bathrooms ?? '—'} bath</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/properties/${property.id}`}
          className="mt-4 w-full inline-flex items-center justify-center bg-accent text-white px-4 py-2.5 rounded-lg font-medium hover:bg-accent-dark transition-colors duration-300"
        >
          View Details
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
