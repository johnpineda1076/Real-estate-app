/**
 * Componente Badge - Paleta Luxury Copper
 * @param {Object} props
 * @param {'default'|'primary'|'accent'|'success'|'gold'|'new'|'premium'} props.variant
 * @param {'sm'|'md'} props.size - Tamaño del badge
 * @param {React.ReactNode} props.children - Contenido del badge
 */
const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium transition-colors';

  const variants = {
    default: 'bg-lightGray text-primary border border-border',
    primary: 'bg-primary text-white',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    success: 'bg-success/10 text-success border border-success/20',
    gold: 'bg-gold/10 text-gold border border-gold/20',
    new: 'bg-success text-white',
    premium: 'bg-gradient-copper text-white',
    used: 'bg-secondary text-white',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
