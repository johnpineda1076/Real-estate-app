import { useState } from 'react';
import { Button } from '../ui';

/**
 * Componente PropertyFilter con paleta Warm Neutral
 * @param {Object} props
 * @param {Function} props.onFilter - Callback cuando se aplican filtros
 * @param {Object} props.options - Opciones disponibles para filtros
 */
const PropertyFilter = ({ onFilter, options = {} }) => {
  const [filters, setFilters] = useState({
    type: '',
    city: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({
      type: filters.type || undefined,
      city: filters.city || undefined,
      minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
      bedrooms: filters.bedrooms ? Number(filters.bedrooms) : undefined,
    });
  };

  const handleClear = () => {
    setFilters({
      type: '',
      city: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
    });
    onFilter({});
  };

  const selectStyles = `
    w-full px-4 py-2.5 bg-white border border-primary/20 rounded-lg
    text-primary placeholder:text-muted
    focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
    hover:border-primary/40 transition-all duration-200
    appearance-none cursor-pointer
  `.trim().replace(/\s+/g, ' ');

  const inputStyles = `
    w-full px-4 py-2.5 bg-white border border-primary/20 rounded-lg
    text-primary placeholder:text-muted
    focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
    hover:border-primary/40 transition-all duration-200
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="bg-white rounded-xl shadow-warm p-6 mb-8 border border-primary/5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-primary">Filtrar Propiedades</h3>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden w-10 h-10 rounded-lg bg-lightGray flex items-center justify-center text-primary hover:bg-accent/10 hover:text-accent transition-colors"
          aria-label={isExpanded ? 'Contraer filtros' : 'Expandir filtros'}
        >
          <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Property Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-primary mb-1.5">
              Tipo de Propiedad
            </label>
            <div className="relative">
              <select
                id="type"
                name="type"
                value={filters.type}
                onChange={handleChange}
                className={selectStyles}
              >
                <option value="">Todos</option>
                {(options.types || ['Apartamento', 'Casa', 'Villa', 'Penthouse']).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-primary mb-1.5">
              Ciudad
            </label>
            <div className="relative">
              <select
                id="city"
                name="city"
                value={filters.city}
                onChange={handleChange}
                className={selectStyles}
              >
                <option value="">Todas</option>
                {(options.cities || ['Bogotá', 'Medellín', 'Cartagena', 'Cali']).map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Min Price */}
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-primary mb-1.5">
              Precio Mínimo
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="$0"
              className={inputStyles}
            />
          </div>

          {/* Max Price */}
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-primary mb-1.5">
              Precio Máximo
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Sin límite"
              className={inputStyles}
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-primary mb-1.5">
              Habitaciones
            </label>
            <div className="relative">
              <select
                id="bedrooms"
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleChange}
                className={selectStyles}
              >
                <option value="">Cualquiera</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-primary/10">
          <Button type="submit" size="sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Aplicar Filtros
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={handleClear}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Limpiar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;
