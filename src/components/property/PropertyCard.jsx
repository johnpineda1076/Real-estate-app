import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="group bg-white rounded-xl shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* State Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            property.state === 'Nuevo'
              ? 'bg-green-500 text-white'
              : 'bg-primary text-white'
          }`}>
            {property.state}
          </span>
        </div>
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
          {property.city}, {property.neighborhood}
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
            <span className="text-sm">{property.bedrooms} hab</span>
          </div>
          <div className="flex items-center text-muted">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            <span className="text-sm">{property.bathrooms} baños</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/properties/${property.id}`}
          className="mt-4 w-full inline-flex items-center justify-center bg-accent text-white px-4 py-2.5 rounded-lg font-medium hover:bg-accent-dark transition-colors duration-300"
        >
          Ver Detalles
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
