/**
 * Datos centralizados de propiedades
 * Single source of truth para toda la aplicación
 */

export const properties = [
  {
    id: 1,
    title: 'Modern Apartment',
    location: 'Downtown',
    price: 250000,
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    type: 'Apartment',
    image: '/images/apartamento-de-lujo.jpg',
    images: [
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg',
      '/images/casa-de-campo.jpg',
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg'
    ],
    description: 'Hermoso apartamento moderno en el corazón de la ciudad. Cuenta con acabados de lujo, amplias ventanas que permiten entrada de luz natural, cocina integral con isla, sala comedor amplia y excelente ubicación cerca de centros comerciales, restaurantes y transporte público.',
    city: 'Bogotá',
    neighborhood: 'Chapinero',
    state: 'Nuevo',
    landArea: 150,
    privateArea: 1200,
    features: ['Gimnasio', 'Piscina', 'Parqueadero', 'Seguridad 24h']
  },
  {
    id: 2,
    title: 'Luxury Villa',
    location: 'Beachfront',
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    type: 'Villa',
    image: '/images/luxury-villa.jpg',
    images: [
      '/images/luxury-villa.jpg',
      '/images/casa-de-campo.jpg',
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg',
      '/images/casa-de-campo.jpg'
    ],
    description: 'Exclusiva villa frente al mar con diseño arquitectónico de lujo. Incluye piscina privada, jardín tropical, terraza con vista al océano, cocina gourmet, sala de cine, bodega y garaje para 3 vehículos. Perfecta para disfrutar del estilo de vida costero.',
    city: 'Cartagena',
    neighborhood: 'Bocagrande',
    state: 'Nuevo',
    landArea: 800,
    privateArea: 3500,
    features: ['Piscina privada', 'Vista al mar', 'Jardín', 'Sala de cine', 'Bodega']
  },
  {
    id: 3,
    title: 'Cozy Townhouse',
    location: 'Suburbs',
    price: 320000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: 'Townhouse',
    image: '/images/casa-de-campo.jpg',
    images: [
      '/images/casa-de-campo.jpg',
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg',
      '/images/casa-de-campo.jpg'
    ],
    description: 'Acogedora casa campestre en zona residencial tranquila. Ideal para familias, cuenta con patio trasero amplio, zona de parrilla, estudio independiente, y está ubicada en un barrio seguro con excelentes colegios y parques cercanos.',
    city: 'Medellín',
    neighborhood: 'El Poblado',
    state: 'Usado',
    landArea: 300,
    privateArea: 1800,
    features: ['Patio trasero', 'Zona BBQ', 'Estudio', 'Parqueadero doble']
  },
  {
    id: 4,
    title: 'Penthouse con Terraza',
    location: 'Zona Rosa',
    price: 580000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    type: 'Apartment',
    image: '/images/apartamento-de-lujo.jpg',
    images: [
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg',
      '/images/casa-de-campo.jpg'
    ],
    description: 'Espectacular penthouse en la mejor zona de la ciudad. Terraza de 80m² con jacuzzi, vista panorámica de 360°, doble altura en sala, chimenea, cocina abierta con electrodomésticos de alta gama y dos parqueaderos cubiertos.',
    city: 'Bogotá',
    neighborhood: 'Zona T',
    state: 'Nuevo',
    landArea: 0,
    privateArea: 2200,
    features: ['Terraza 80m²', 'Jacuzzi', 'Vista 360°', 'Chimenea', 'Doble altura']
  },
  {
    id: 5,
    title: 'Casa Campestre',
    location: 'Countryside',
    price: 420000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: 'House',
    image: '/images/casa-de-campo.jpg',
    images: [
      '/images/casa-de-campo.jpg',
      '/images/luxury-villa.jpg',
      '/images/apartamento-de-lujo.jpg'
    ],
    description: 'Hermosa casa campestre a solo 30 minutos de la ciudad. Rodeada de naturaleza, cuenta con huerta orgánica, establos, lago artificial, casa de huéspedes independiente y amplias zonas verdes. Ideal para quienes buscan tranquilidad.',
    city: 'Cali',
    neighborhood: 'La Buitrera',
    state: 'Usado',
    landArea: 5000,
    privateArea: 2800,
    features: ['Huerta orgánica', 'Establos', 'Lago', 'Casa de huéspedes', 'Zonas verdes']
  },
  {
    id: 6,
    title: 'Loft Industrial',
    location: 'Art District',
    price: 195000,
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    type: 'Apartment',
    image: '/images/apartamento-de-lujo.jpg',
    images: [
      '/images/apartamento-de-lujo.jpg',
      '/images/casa-de-campo.jpg',
      '/images/luxury-villa.jpg'
    ],
    description: 'Loft estilo industrial en antiguo edificio restaurado. Techos de 4 metros, ladrillo expuesto, grandes ventanales, cocina abierta con isla de concreto. Ubicado en la zona más trendy de la ciudad, rodeado de galerías y cafés.',
    city: 'Medellín',
    neighborhood: 'Provenza',
    state: 'Nuevo',
    landArea: 0,
    privateArea: 850,
    features: ['Techos altos', 'Ladrillo expuesto', 'Estilo industrial', 'Zona trendy']
  },
  {
    id: 7,
    title: 'Villa Frente al Mar',
    location: 'Oceanfront',
    price: 1200000,
    bedrooms: 5,
    bathrooms: 5,
    area: 4500,
    type: 'Villa',
    image: '/images/luxury-villa.jpg',
    images: [
      '/images/luxury-villa.jpg',
      '/images/apartamento-de-lujo.jpg',
      '/images/casa-de-campo.jpg'
    ],
    description: 'Mansión de lujo con acceso directo a playa privada. Diseño contemporáneo con materiales importados, piscina infinity, spa completo, cancha de tenis, muelle privado y helipuerto. La máxima expresión del lujo costero.',
    city: 'Cartagena',
    neighborhood: 'Barú',
    state: 'Nuevo',
    landArea: 2000,
    privateArea: 4500,
    features: ['Playa privada', 'Piscina infinity', 'Spa', 'Cancha de tenis', 'Helipuerto']
  },
  {
    id: 8,
    title: 'Apartamento Familiar',
    location: 'Residential',
    price: 180000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1100,
    type: 'Apartment',
    image: '/images/apartamento-de-lujo.jpg',
    images: [
      '/images/apartamento-de-lujo.jpg',
      '/images/casa-de-campo.jpg',
      '/images/luxury-villa.jpg'
    ],
    description: 'Apartamento ideal para familias en conjunto cerrado con amplias zonas comunes. Parque infantil, cancha múltiple, salón social, vigilancia 24 horas. Cerca de colegios, supermercados y transporte público.',
    city: 'Bogotá',
    neighborhood: 'Cedritos',
    state: 'Usado',
    landArea: 0,
    privateArea: 1100,
    features: ['Conjunto cerrado', 'Parque infantil', 'Cancha múltiple', 'Salón social']
  },
  {
    id: 9,
    title: 'Casa en Condominio',
    location: 'Gated Community',
    price: 485000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    type: 'House',
    image: '/images/casa-de-campo.jpg',
    images: [
      '/images/casa-de-campo.jpg',
      '/images/luxury-villa.jpg',
      '/images/apartamento-de-lujo.jpg'
    ],
    description: 'Elegante casa en exclusivo condominio con campo de golf. Arquitectura clásica renovada, jardín inglés, piscina compartida, club house con restaurante. Perfecta combinación de privacidad y vida social.',
    city: 'Cali',
    neighborhood: 'Ciudad Jardín',
    state: 'Usado',
    landArea: 600,
    privateArea: 2400,
    features: ['Campo de golf', 'Club house', 'Jardín inglés', 'Seguridad premium']
  },
  {
    id: 10,
    title: 'Studio Moderno',
    location: 'University District',
    price: 95000,
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    type: 'Apartment',
    image: '/images/apartamento-de-lujo.jpg',
    images: [
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg',
      '/images/casa-de-campo.jpg'
    ],
    description: 'Studio perfectamente diseñado para maximizar cada metro cuadrado. Ideal para estudiantes o profesionales jóvenes. Amoblado, cocina equipada, internet de alta velocidad incluido. A pasos de universidades y centros comerciales.',
    city: 'Medellín',
    neighborhood: 'Laureles',
    state: 'Nuevo',
    landArea: 0,
    privateArea: 450,
    features: ['Amoblado', 'Internet incluido', 'Cocina equipada', 'Cerca a universidades']
  },
  {
    id: 11,
    title: 'Townhouse Moderno',
    location: 'New Development',
    price: 290000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    type: 'Townhouse',
    image: '/images/casa-de-campo.jpg',
    images: [
      '/images/casa-de-campo.jpg',
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg'
    ],
    description: 'Townhouse de diseño contemporáneo en nuevo desarrollo urbanístico. Espacios abiertos, iluminación natural, terraza en azotea, paneles solares, sistema de domótica. Proyecto sostenible con certificación LEED.',
    city: 'Bogotá',
    neighborhood: 'Usaquén',
    state: 'Nuevo',
    landArea: 200,
    privateArea: 1600,
    features: ['Paneles solares', 'Domótica', 'Terraza rooftop', 'Certificación LEED']
  },
  {
    id: 12,
    title: 'Apartamento Vista Ciudad',
    location: 'High Rise',
    price: 340000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    type: 'Apartment',
    image: '/images/apartamento-de-lujo.jpg',
    images: [
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg',
      '/images/casa-de-campo.jpg'
    ],
    description: 'Apartamento en piso 25 con impresionante vista a la ciudad y las montañas. Ventanales de piso a techo, balcón amplio, acabados premium. Edificio con amenities de lujo: rooftop bar, coworking, gimnasio panorámico.',
    city: 'Medellín',
    neighborhood: 'Las Palmas',
    state: 'Nuevo',
    landArea: 0,
    privateArea: 1050,
    features: ['Vista panorámica', 'Piso 25', 'Rooftop bar', 'Coworking', 'Gimnasio']
  },
  {
    id: 13,
    title: 'Finca de Recreo',
    location: 'Lake District',
    price: 520000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    type: 'House',
    image: '/images/casa-de-campo.jpg',
    images: [
      '/images/casa-de-campo.jpg',
      '/images/luxury-villa.jpg',
      '/images/apartamento-de-lujo.jpg'
    ],
    description: 'Espectacular finca con orilla de lago privada. Casa principal más cabaña de huéspedes, muelle con botes incluidos, kiosco con cocina exterior, senderos ecológicos. El escape perfecto a solo 1 hora de la ciudad.',
    city: 'Guatapé',
    neighborhood: 'Embalse',
    state: 'Usado',
    landArea: 8000,
    privateArea: 3200,
    features: ['Orilla de lago', 'Muelle privado', 'Botes incluidos', 'Cabaña de huéspedes']
  },
  {
    id: 14,
    title: 'Duplex Renovado',
    location: 'Historic Center',
    price: 275000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    type: 'Apartment',
    image: '/images/apartamento-de-lujo.jpg',
    images: [
      '/images/apartamento-de-lujo.jpg',
      '/images/casa-de-campo.jpg',
      '/images/luxury-villa.jpg'
    ],
    description: 'Duplex en edificio patrimonial completamente restaurado. Conserva elementos históricos como pisos de madera original y molduras, combinados con cocina moderna y baños de diseño. Ubicación privilegiada en el centro histórico.',
    city: 'Cartagena',
    neighborhood: 'Centro Amurallado',
    state: 'Usado',
    landArea: 0,
    privateArea: 1400,
    features: ['Edificio patrimonial', 'Pisos originales', 'Centro histórico', 'Restaurado']
  },
  {
    id: 15,
    title: 'Casa Esquinera',
    location: 'Traditional',
    price: 365000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2100,
    type: 'House',
    image: '/images/casa-de-campo.jpg',
    images: [
      '/images/casa-de-campo.jpg',
      '/images/apartamento-de-lujo.jpg',
      '/images/luxury-villa.jpg'
    ],
    description: 'Amplia casa esquinera con excelente iluminación natural. Dos plantas, jardín frontal y trasero, garaje para 2 carros, cuarto de servicio. Barrio tradicional y consolidado con todos los servicios a la mano.',
    city: 'Cali',
    neighborhood: 'San Fernando',
    state: 'Usado',
    landArea: 400,
    privateArea: 2100,
    features: ['Esquinera', 'Jardín frontal y trasero', 'Garaje doble', 'Cuarto de servicio']
  },
];

/**
 * Obtener una propiedad por ID
 * @param {number} id - ID de la propiedad
 * @returns {Object|undefined} - Propiedad encontrada o undefined
 */
export const getPropertyById = (id) => {
  return properties.find(p => p.id === parseInt(id));
};

/**
 * Obtener propiedades destacadas (para la home)
 * @param {number} limit - Número máximo de propiedades a retornar
 * @returns {Array} - Lista de propiedades
 */
export const getFeaturedProperties = (limit = 3) => {
  return properties.slice(0, limit);
};

/**
 * Filtrar propiedades por criterios
 * @param {Object} filters - Filtros a aplicar
 * @returns {Array} - Lista de propiedades filtradas
 */
export const filterProperties = (filters = {}) => {
  return properties.filter(property => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.city && property.city !== filters.city) return false;
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) return false;
    return true;
  });
};

/**
 * Obtener todas las ciudades únicas
 * @returns {Array} - Lista de ciudades
 */
export const getCities = () => {
  return [...new Set(properties.map(p => p.city))];
};

/**
 * Obtener todos los tipos de propiedad únicos
 * @returns {Array} - Lista de tipos
 */
export const getPropertyTypes = () => {
  return [...new Set(properties.map(p => p.type))];
};

/**
 * Obtener rango de precios
 * @returns {Object} - { min, max }
 */
export const getPriceRange = () => {
  const prices = properties.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

export default properties;
