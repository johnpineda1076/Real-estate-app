import { useParams, Link } from 'react-router-dom';
import { ImageCarousel } from '../components/property';
import { getPropertyById } from '../data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = getPropertyById(id);

  if (!property) {
    return (
      <div className="min-h-screen bg-lightGray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Propiedad no encontrada</h1>
            <p className="text-accent mb-6">La propiedad que buscas no existe.</p>
            <Link
              to="/properties"
              className="bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300 inline-block"
            >
              Ver todas las propiedades
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lightGray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-accent">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-primary transition-colors">Propiedades</Link>
            <span>/</span>
            <span className="text-primary">{property.title}</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="bg-secondary rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative">
            <ImageCarousel 
              images={property.images || [property.image]} 
              title={property.title}
            />
            <div className="absolute top-4 right-4 z-40">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                property.state === 'Nuevo' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-blue-500 text-white'
              }`}>
                {property.state}
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-8">
            {/* Title and Price */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-primary mb-2">{property.title}</h1>
              <div className="flex items-center gap-4 text-accent mb-4">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.city}, {property.neighborhood}
                </span>
              </div>
              <div className="text-4xl font-bold text-primary">
                ${property.price.toLocaleString()}
              </div>
            </div>

            {/* Property Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-lightGray rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{property.bedrooms}</div>
                <div className="text-sm text-accent mt-1">Alcobas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{property.bathrooms}</div>
                <div className="text-sm text-accent mt-1">Baños</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{property.landArea}</div>
                <div className="text-sm text-accent mt-1">Área Terreno (m²)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{property.privateArea}</div>
                <div className="text-sm text-accent mt-1">Área Privada (m²)</div>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Descripción</h2>
              <p className="text-accent leading-relaxed text-lg">{property.description}</p>
            </div>

            {/* Property Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Detalles del Inmueble</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                    <span className="text-accent">Tipo de Inmueble:</span>
                    <span className="font-semibold text-primary">{property.type}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                    <span className="text-accent">Estado:</span>
                    <span className="font-semibold text-primary">{property.state}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                    <span className="text-accent">Ciudad:</span>
                    <span className="font-semibold text-primary">{property.city}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                    <span className="text-accent">Barrio:</span>
                    <span className="font-semibold text-primary">{property.neighborhood}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                    <span className="text-accent">Número de Alcobas:</span>
                    <span className="font-semibold text-primary">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                    <span className="text-accent">Número de Baños:</span>
                    <span className="font-semibold text-primary">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                    <span className="text-accent">Área del Terreno:</span>
                    <span className="font-semibold text-primary">{property.landArea} m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-accent">Área Privada:</span>
                    <span className="font-semibold text-primary">{property.privateArea} m²</span>
                  </div>
                </div>
              </div>

              <div className="bg-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Información de Precio</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-accent/20 pb-2">
                    <span className="text-accent">Precio:</span>
                    <span className="font-semibold text-primary text-2xl">${property.price.toLocaleString()}</span>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300 font-semibold text-lg">
                      Contactar Agente
                    </button>
                    <button className="w-full mt-3 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-secondary transition-colors duration-300 font-semibold">
                      Agendar Visita
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-6 border-t border-accent/20">
              <Link
                to="/properties"
                className="inline-flex items-center text-primary hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a Propiedades
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
