import { useState, useMemo } from 'react';
import { PropertyGrid, PropertyFilter } from '../components/property';
import { properties, filterProperties } from '../data/properties';

const Properties = () => {
  const [filters, setFilters] = useState({});

  // Calcular propiedades filtradas
  const filteredProperties = useMemo(() => {
    return filterProperties(filters);
  }, [filters]);

  // Extraer opciones únicas de las propiedades para los filtros
  const filterOptions = useMemo(() => ({
    types: [...new Set(properties.map(p => p.type))],
    cities: [...new Set(properties.map(p => p.city))],
  }), []);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-lightGray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Properties</h1>

        <PropertyFilter onFilter={handleFilter} options={filterOptions} />

        {filteredProperties.length > 0 ? (
          <>
            <p className="text-accent mb-4">
              Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
            </p>
            <PropertyGrid properties={filteredProperties} columns={3} />
          </>
        ) : (
          <div className="text-center py-12 bg-secondary rounded-lg">
            <svg className="w-16 h-16 mx-auto text-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-primary mb-2">No properties found</h3>
            <p className="text-accent">Try adjusting your filters to find more properties.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
