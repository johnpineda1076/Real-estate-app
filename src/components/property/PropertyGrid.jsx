import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';

/**
 * Componente PropertyGrid - Grid de propiedades reutilizable
 * @param {Object} props
 * @param {Array} props.properties - Lista de propiedades
 * @param {number} props.columns - Número de columnas en desktop (2 o 3)
 */
const PropertyGrid = ({ properties, columns = 3 }) => {
  const gridCols = columns === 2
    ? 'grid-cols-1 md:grid-cols-2'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {properties.map((property) => (
        <Link key={property.id} to={`/properties/${property.id}`}>
          <PropertyCard property={property} />
        </Link>
      ))}
    </div>
  );
};

export default PropertyGrid;
