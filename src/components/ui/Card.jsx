/**
 * Componente Card - Paleta Luxury Copper
 * @param {Object} props
 * @param {'default'|'elevated'|'bordered'|'accent'|'luxury'} props.variant
 * @param {'none'|'sm'|'md'|'lg'} props.padding - Padding interno
 * @param {boolean} props.hover - Si tiene efecto hover
 * @param {React.ReactNode} props.children - Contenido de la card
 */
const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';

  const variants = {
    default: 'bg-white shadow-warm',
    elevated: 'bg-white shadow-warm-lg',
    bordered: 'bg-white border border-border',
    accent: 'bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20',
    luxury: 'bg-white shadow-warm border-t-4 border-t-accent',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'hover:shadow-warm-lg hover:-translate-y-1 cursor-pointer'
    : '';

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${paddings[padding]}
    ${hoverStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

/**
 * Subcomponente para el header de la card
 */
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`border-b border-border pb-4 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Subcomponente para el body de la card
 */
Card.Body = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

/**
 * Subcomponente para el footer de la card
 */
Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`border-t border-border pt-4 mt-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
