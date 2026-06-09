/**
 * Datos centralizados de posts del blog
 * Single source of truth para toda la aplicación
 */

export const blogPosts = [
  {
    id: 1,
    title: 'Tips for First-Time Home Buyers',
    date: '2024-01-15',
    excerpt: 'Descubre los consejos esenciales que todo comprador primerizo debe conocer antes de adquirir su primera propiedad.',
    content: `
      <h2>1. Define tu presupuesto</h2>
      <p>Antes de comenzar la búsqueda, es crucial conocer cuánto puedes gastar. Considera no solo el precio de la propiedad, sino también los costos adicionales como impuestos, seguros y mantenimiento.</p>

      <h2>2. Investiga el mercado</h2>
      <p>Tómate el tiempo para entender el mercado inmobiliario de tu zona. Conoce los precios promedio, las tendencias y los barrios en crecimiento.</p>

      <h2>3. Obtén pre-aprobación de crédito</h2>
      <p>Tener una pre-aprobación te da una ventaja competitiva y te ayuda a entender exactamente cuánto puedes financiar.</p>

      <h2>4. Trabaja con profesionales</h2>
      <p>Un agente inmobiliario experimentado puede guiarte a través del proceso y ayudarte a encontrar la propiedad perfecta.</p>
    `,
    author: 'María García',
    category: 'Consejos',
    image: '/images/blog-buyers.jpg',
    tags: ['compradores', 'primera vivienda', 'consejos']
  },
  {
    id: 2,
    title: 'Real Estate Market Trends 2024',
    date: '2024-01-10',
    excerpt: 'Análisis completo de las tendencias del mercado inmobiliario para este año y lo que significan para compradores e inversionistas.',
    content: `
      <h2>Panorama General</h2>
      <p>El mercado inmobiliario en 2024 presenta oportunidades interesantes tanto para compradores como para inversionistas. Las tasas de interés se han estabilizado y la demanda sigue siendo fuerte en zonas urbanas.</p>

      <h2>Tendencias Clave</h2>
      <p>Las propiedades sostenibles y con tecnología inteligente están en alta demanda. Los compradores buscan cada vez más espacios que ofrezcan eficiencia energética y conectividad.</p>

      <h2>Zonas en Crecimiento</h2>
      <p>Las áreas suburbanas continúan atrayendo a familias jóvenes, mientras que los centros urbanos se renuevan con desarrollos de uso mixto.</p>

      <h2>Recomendaciones</h2>
      <p>Es un buen momento para invertir en propiedades bien ubicadas que ofrezcan valor a largo plazo.</p>
    `,
    author: 'Carlos Rodríguez',
    category: 'Mercado',
    image: '/images/blog-trends.jpg',
    tags: ['mercado', 'tendencias', '2024', 'inversión']
  },
  {
    id: 3,
    title: 'Cómo Preparar tu Casa para la Venta',
    date: '2024-01-22',
    excerpt: 'Maximiza el valor de tu propiedad con estos consejos de home staging y preparación antes de ponerla en el mercado.',
    content: `
      <h2>La Primera Impresión Cuenta</h2>
      <p>Los compradores potenciales forman una opinión en los primeros 30 segundos. Asegúrate de que la entrada, el jardín frontal y la fachada estén impecables. Una puerta recién pintada y plantas bien cuidadas hacen una gran diferencia.</p>

      <h2>Despersonaliza los Espacios</h2>
      <p>Retira fotos familiares, colecciones personales y objetos muy específicos. Los compradores necesitan visualizarse viviendo en el espacio, y esto es más fácil cuando el ambiente es neutral.</p>

      <h2>Iluminación es Clave</h2>
      <p>Abre todas las cortinas, limpia las ventanas y asegúrate de que todas las bombillas funcionen. Considera añadir lámparas en esquinas oscuras. Un espacio bien iluminado se siente más grande y acogedor.</p>

      <h2>Reparaciones Menores</h2>
      <p>Arregla grifos que gotean, puertas que chirrían y paredes con marcas. Estos pequeños detalles pueden hacer que los compradores cuestionen el mantenimiento general de la propiedad.</p>

      <h2>El Poder del Aroma</h2>
      <p>Evita olores fuertes de comida, mascotas o ambientadores artificiales. Un aroma suave a limpio, café recién hecho o galletas horneadas crea una atmósfera acogedora.</p>
    `,
    author: 'Laura Mendoza',
    category: 'Vendedores',
    image: '/images/blog-staging.jpg',
    tags: ['vender casa', 'home staging', 'preparación', 'consejos']
  },
  {
    id: 4,
    title: 'Invertir en Propiedades para Alquiler: Guía Completa',
    date: '2024-01-28',
    excerpt: 'Todo lo que necesitas saber sobre inversión inmobiliaria para generar ingresos pasivos a través del alquiler.',
    content: `
      <h2>¿Por Qué Invertir en Propiedades?</h2>
      <p>La inversión inmobiliaria ofrece múltiples beneficios: ingresos pasivos mensuales, apreciación del capital a largo plazo, beneficios fiscales y protección contra la inflación. Es una de las formas más probadas de construir riqueza.</p>

      <h2>Calculando el Retorno de Inversión</h2>
      <p>Antes de comprar, calcula el ROI potencial. Considera el precio de compra, costos de cierre, renovaciones necesarias, y compáralos con el ingreso de alquiler esperado menos gastos operativos (mantenimiento, impuestos, seguros, administración).</p>

      <h2>Ubicación, Ubicación, Ubicación</h2>
      <p>Busca zonas con: baja tasa de vacantes, crecimiento poblacional, desarrollo de infraestructura, buenas escuelas y servicios cercanos. La ubicación determina tanto el valor de alquiler como la apreciación futura.</p>

      <h2>Financiamiento Inteligente</h2>
      <p>Explora diferentes opciones de financiamiento. Un crédito con buenas condiciones puede amplificar significativamente tu retorno. Considera el apalancamiento pero mantén reservas para imprevistos.</p>

      <h2>Gestión de la Propiedad</h2>
      <p>Decide si administrarás tú mismo o contratarás una empresa. La autogestión ahorra dinero pero requiere tiempo. Una administradora profesional típicamente cobra 8-12% del alquiler mensual.</p>
    `,
    author: 'Roberto Sánchez',
    category: 'Inversión',
    image: '/images/blog-investment.jpg',
    tags: ['inversión', 'alquiler', 'ingresos pasivos', 'ROI']
  },
  {
    id: 5,
    title: 'Los Mejores Barrios de Bogotá para Vivir en 2024',
    date: '2024-02-05',
    excerpt: 'Análisis detallado de los barrios más atractivos de la capital colombiana según estilo de vida, presupuesto y necesidades.',
    content: `
      <h2>Chapinero: El Corazón Cosmopolita</h2>
      <p>Ideal para jóvenes profesionales y amantes de la vida urbana. Excelente oferta gastronómica, vida nocturna activa y fácil acceso a transporte. Precios moderados a altos dependiendo del sector específico.</p>

      <h2>Usaquén: Encanto y Exclusividad</h2>
      <p>Antiguo pueblo anexado a la ciudad que conserva su arquitectura colonial. Perfecto para familias que buscan tranquilidad sin alejarse de la ciudad. Zona de restaurantes gourmet y mercado de pulgas los domingos.</p>

      <h2>El Poblado (Cedritos/Contador): Familiar y Accesible</h2>
      <p>Excelente relación calidad-precio para familias. Buenos colegios, parques, centros comerciales cercanos. Ambiente residencial tranquilo con fácil acceso al resto de la ciudad.</p>

      <h2>La Candelaria: Historia y Cultura</h2>
      <p>El centro histórico de Bogotá, ideal para amantes del arte y la cultura. Precios accesibles, arquitectura colonial, museos y universidades. Requiere precaución en horarios nocturnos.</p>

      <h2>Chicó/Rosales: Lujo y Conveniencia</h2>
      <p>Zonas de alto estrato con todos los servicios premium. Embajadas, hoteles de lujo, restaurantes exclusivos. Ideal para ejecutivos y familias de alto poder adquisitivo.</p>
    `,
    author: 'Ana Patricia Ruiz',
    category: 'Guías',
    image: '/images/blog-neighborhoods.jpg',
    tags: ['Bogotá', 'barrios', 'vivir', 'guía']
  },
  {
    id: 6,
    title: 'Documentos Necesarios para Comprar Vivienda en Colombia',
    date: '2024-02-12',
    excerpt: 'Lista completa de documentos y trámites legales que necesitas para una compra de vivienda segura y exitosa.',
    content: `
      <h2>Documentos del Comprador</h2>
      <p>Necesitarás: cédula de ciudadanía, certificado de ingresos o declaración de renta, extractos bancarios de los últimos 3-6 meses, carta laboral (si aplica), y referencias comerciales y bancarias.</p>

      <h2>Documentos de la Propiedad</h2>
      <p>Verifica: certificado de tradición y libertad (no mayor a 30 días), escritura pública del inmueble, paz y salvo de impuesto predial, paz y salvo de administración (si aplica), y certificado catastral.</p>

      <h2>Estudio de Títulos</h2>
      <p>Es fundamental contratar un abogado que realice un estudio de títulos completo. Esto verifica que el vendedor es el legítimo propietario, que no hay embargos, hipotecas o limitaciones al dominio.</p>

      <h2>Proceso de Escrituración</h2>
      <p>Una vez acordada la compra, se firma promesa de compraventa, luego escritura pública ante notario. Los costos notariales y de registro típicamente suman entre 1-2% del valor del inmueble.</p>

      <h2>Registro de la Propiedad</h2>
      <p>Después de la escritura, se debe registrar en la Oficina de Instrumentos Públicos. Solo después de este registro eres legalmente el propietario. El proceso toma aproximadamente 15-30 días hábiles.</p>
    `,
    author: 'Dr. Felipe Morales',
    category: 'Legal',
    image: '/images/blog-legal.jpg',
    tags: ['documentos', 'legal', 'escritura', 'trámites']
  },
  {
    id: 7,
    title: 'Tendencias de Diseño Interior para 2024',
    date: '2024-02-18',
    excerpt: 'Las tendencias de decoración que dominarán este año: desde colores hasta materiales y estilos arquitectónicos.',
    content: `
      <h2>Colores Terrosos y Naturales</h2>
      <p>Los tonos tierra, verdes salvia, terracota y beige continúan dominando. Estos colores crean ambientes cálidos y relajantes, conectando los espacios interiores con la naturaleza.</p>

      <h2>Materiales Sostenibles</h2>
      <p>Bambú, corcho, madera reciclada y textiles orgánicos están en auge. Los compradores valoran cada vez más los materiales eco-friendly que reducen el impacto ambiental.</p>

      <h2>Espacios Multifuncionales</h2>
      <p>Post-pandemia, los hogares necesitan adaptarse a múltiples usos. Oficinas en casa que se transforman, muebles modulares y espacios flexibles son esenciales.</p>

      <h2>Tecnología Integrada</h2>
      <p>Domótica, iluminación inteligente, termostatos conectados y sistemas de seguridad smart ya no son lujo sino expectativa. La tecnología debe integrarse de forma invisible en el diseño.</p>

      <h2>Maximalismo Controlado</h2>
      <p>Después de años de minimalismo, vemos un retorno a espacios con más personalidad. Colecciones curadas, arte statement y texturas ricas, pero siempre con coherencia visual.</p>

      <h2>Conexión Interior-Exterior</h2>
      <p>Grandes ventanales, jardines interiores, terrazas integradas y materiales que fluyen entre dentro y fuera. La biofilia sigue siendo una prioridad en el diseño.</p>
    `,
    author: 'Isabella Torres',
    category: 'Decoración',
    image: '/images/blog-design.jpg',
    tags: ['diseño', 'decoración', 'tendencias', 'interior']
  },
  {
    id: 8,
    title: 'Cómo Negociar el Precio de una Propiedad',
    date: '2024-02-25',
    excerpt: 'Estrategias probadas para negociar efectivamente y conseguir el mejor precio en tu próxima compra inmobiliaria.',
    content: `
      <h2>Investiga Antes de Negociar</h2>
      <p>Conoce los precios de propiedades similares en la zona (comparables). Investiga cuánto tiempo lleva la propiedad en el mercado y si ha tenido reducciones de precio. Esta información te da poder negociador.</p>

      <h2>Identifica la Motivación del Vendedor</h2>
      <p>¿Necesita vender rápido por cambio de trabajo? ¿Es una herencia? ¿Está comprando otra propiedad? Conocer las circunstancias del vendedor te ayuda a estructurar una oferta atractiva.</p>

      <h2>No Muestres Demasiado Entusiasmo</h2>
      <p>Por más que ames la propiedad, mantén la calma. Un comprador desesperado pierde poder de negociación. Siempre menciona que tienes otras opciones que estás considerando.</p>

      <h2>Más Allá del Precio</h2>
      <p>Negocia otros aspectos: fecha de entrega flexible, inclusión de electrodomésticos o muebles, reparaciones previas a la venta, o que el vendedor cubra ciertos costos de cierre.</p>

      <h2>Ofertas por Escrito</h2>
      <p>Siempre presenta ofertas formales por escrito con términos claros y fecha de vencimiento. Esto muestra seriedad y crea urgencia para que el vendedor responda.</p>

      <h2>Saber Cuándo Retirarse</h2>
      <p>Define tu límite máximo antes de negociar y respétalo. A veces la mejor negociación es estar dispuesto a abandonar el trato. Siempre habrá otras propiedades.</p>
    `,
    author: 'Carlos Rodríguez',
    category: 'Consejos',
    image: '/images/blog-negotiate.jpg',
    tags: ['negociación', 'compra', 'precio', 'estrategia']
  },
  {
    id: 9,
    title: 'Guía de Créditos Hipotecarios en Colombia',
    date: '2024-03-02',
    excerpt: 'Compara opciones de financiamiento, requisitos y consejos para obtener el mejor crédito hipotecario.',
    content: `
      <h2>Tipos de Crédito Hipotecario</h2>
      <p>En Colombia existen principalmente dos modalidades: crédito en pesos con tasa fija o variable, y crédito en UVR (Unidad de Valor Real) que se ajusta con la inflación. Cada uno tiene ventajas según tu perfil.</p>

      <h2>Requisitos Generales</h2>
      <p>Los bancos típicamente piden: ingresos demostrables mínimos de 2-3 SMMLV, historial crediticio positivo, cuota inicial del 20-30% del valor del inmueble, y que la cuota no supere el 30% de tus ingresos.</p>

      <h2>Comparando Entidades</h2>
      <p>No te quedes con la primera opción. Compara tasas de interés, seguros obligatorios, costos de estudio de crédito, y penalidades por prepago. Las cajas de compensación y cooperativas pueden ofrecer mejores condiciones.</p>

      <h2>Subsidios Disponibles</h2>
      <p>Investiga programas como Mi Casa Ya para vivienda de interés social, subsidios de cajas de compensación, y beneficios para compra de vivienda nueva. Pueden representar ahorros significativos.</p>

      <h2>Consejos para Aprobación</h2>
      <p>Mantén un buen score crediticio, reduce deudas existentes antes de aplicar, ten estabilidad laboral demostrable, y prepara toda la documentación con anticipación para acelerar el proceso.</p>
    `,
    author: 'Andrés Mejía',
    category: 'Financiamiento',
    image: '/images/blog-mortgage.jpg',
    tags: ['crédito', 'hipoteca', 'financiamiento', 'bancos']
  },
  {
    id: 10,
    title: 'Medellín: El Nuevo Destino de Inversión Inmobiliaria',
    date: '2024-03-10',
    excerpt: 'Por qué Medellín se ha convertido en el punto caliente para inversores nacionales e internacionales.',
    content: `
      <h2>La Transformación de Medellín</h2>
      <p>En las últimas dos décadas, Medellín pasó de ser una ciudad estigmatizada a un modelo de innovación urbana reconocido mundialmente. Esta transformación ha impulsado un boom inmobiliario sin precedentes.</p>

      <h2>Atractivo para Extranjeros</h2>
      <p>El clima primaveral permanente, costo de vida competitivo, infraestructura moderna y comunidad de expatriados creciente hacen de Medellín un imán para nómadas digitales e inversionistas extranjeros.</p>

      <h2>Zonas con Mayor Potencial</h2>
      <p>El Poblado sigue siendo el epicentro del lujo, pero zonas como Laureles, Envigado y Sabaneta ofrecen excelente relación calidad-precio. Los proyectos en altura en Bello y Copacabana apuntan a compradores jóvenes.</p>

      <h2>Retorno de Inversión</h2>
      <p>Los rendimientos por alquiler en Medellín oscilan entre 6-10% anual, superiores al promedio latinoamericano. El alquiler a corto plazo (estilo Airbnb) puede generar retornos aún mayores en zonas turísticas.</p>

      <h2>Consideraciones</h2>
      <p>La alta demanda ha elevado los precios significativamente. Es importante hacer due diligence, trabajar con profesionales locales confiables y entender las regulaciones para alquileres turísticos.</p>
    `,
    author: 'Valentina Ochoa',
    category: 'Mercado',
    image: '/images/blog-medellin.jpg',
    tags: ['Medellín', 'inversión', 'extranjeros', 'mercado']
  },
  {
    id: 11,
    title: 'Errores Comunes al Comprar tu Primera Vivienda',
    date: '2024-03-18',
    excerpt: 'Evita estos errores frecuentes que cometen los compradores primerizos y ahorra tiempo, dinero y dolores de cabeza.',
    content: `
      <h2>1. No Calcular Todos los Costos</h2>
      <p>El precio de venta es solo el comienzo. Muchos olvidan incluir: costos de cierre (notaría, registro), impuestos, seguros, mudanza, adecuaciones iniciales y fondo de emergencia para reparaciones.</p>

      <h2>2. Saltarse la Inspección</h2>
      <p>Nunca compres sin una inspección profesional. Problemas estructurales, humedades ocultas, instalaciones eléctricas deficientes o plagas pueden convertir tu sueño en pesadilla financiera.</p>

      <h2>3. Comprar el Máximo Aprobado</h2>
      <p>Que el banco te apruebe cierto monto no significa que debas usarlo todo. Deja margen para imprevistos y para mantener calidad de vida. La regla general: no más del 30% de ingresos en vivienda.</p>

      <h2>4. Ignorar el Barrio</h2>
      <p>Visita la zona en diferentes horarios y días. Habla con vecinos. Investiga planes de desarrollo urbano. Una casa perfecta en mal barrio es mala inversión.</p>

      <h2>5. Decidir Emocionalmente</h2>
      <p>Es fácil enamorarse de una propiedad y pasar por alto defectos. Lleva una lista de must-haves y deal-breakers. Consulta con alguien objetivo antes de decidir.</p>

      <h2>6. No Negociar</h2>
      <p>El precio de lista raramente es el precio final. Todo es negociable: precio, condiciones, fecha de entrega, inclusiones. El peor error es no intentarlo.</p>
    `,
    author: 'María García',
    category: 'Consejos',
    image: '/images/blog-mistakes.jpg',
    tags: ['errores', 'compradores', 'consejos', 'primera vivienda']
  },
  {
    id: 12,
    title: 'Propiedades Sostenibles: El Futuro del Real Estate',
    date: '2024-03-25',
    excerpt: 'Cómo la sostenibilidad está transformando el mercado inmobiliario y por qué deberías considerarla en tu próxima compra.',
    content: `
      <h2>¿Qué es una Propiedad Sostenible?</h2>
      <p>Una construcción sostenible minimiza su impacto ambiental durante todo su ciclo de vida: desde los materiales de construcción hasta el consumo energético durante su uso y su eventual demolición.</p>

      <h2>Beneficios Económicos</h2>
      <p>Aunque pueden costar 5-15% más inicialmente, las propiedades sostenibles generan ahorros significativos: hasta 30% menos en energía, menor consumo de agua, menores costos de mantenimiento y mayor valor de reventa.</p>

      <h2>Certificaciones a Buscar</h2>
      <p>En Colombia, busca proyectos con certificación LEED, EDGE o Casa Colombia. Estas certificaciones garantizan estándares verificados de eficiencia energética, uso de agua y materiales.</p>

      <h2>Características Comunes</h2>
      <p>Paneles solares, sistemas de recolección de agua lluvia, iluminación LED, electrodomésticos eficientes, aislamiento térmico superior, ventilación natural cruzada y materiales de bajo impacto.</p>

      <h2>El Factor Valorización</h2>
      <p>Estudios muestran que las propiedades con certificación verde se valorizan más rápido y tienen menor tiempo en el mercado cuando se venden. Es una inversión que paga dividendos múltiples.</p>
    `,
    author: 'Eco Arquitectos',
    category: 'Tendencias',
    image: '/images/blog-sustainable.jpg',
    tags: ['sostenibilidad', 'verde', 'eficiencia', 'futuro']
  },
];

/**
 * Obtener un post por ID
 * @param {number} id - ID del post
 * @returns {Object|undefined} - Post encontrado o undefined
 */
export const getBlogPostById = (id) => {
  return blogPosts.find(p => p.id === parseInt(id));
};

/**
 * Obtener posts recientes
 * @param {number} limit - Número máximo de posts a retornar
 * @returns {Array} - Lista de posts
 */
export const getRecentPosts = (limit = 2) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

/**
 * Filtrar posts por categoría
 * @param {string} category - Categoría a filtrar
 * @returns {Array} - Lista de posts filtrados
 */
export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

/**
 * Obtener todas las categorías únicas
 * @returns {Array} - Lista de categorías
 */
export const getCategories = () => {
  return [...new Set(blogPosts.map(p => p.category))];
};

/**
 * Obtener todos los tags únicos
 * @returns {Array} - Lista de tags
 */
export const getAllTags = () => {
  const allTags = blogPosts.flatMap(p => p.tags);
  return [...new Set(allTags)];
};

/**
 * Buscar posts por término
 * @param {string} term - Término de búsqueda
 * @returns {Array} - Lista de posts que coinciden
 */
export const searchPosts = (term) => {
  const lowerTerm = term.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowerTerm) ||
    post.excerpt.toLowerCase().includes(lowerTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerTerm))
  );
};

export default blogPosts;
