import { Link } from 'react-router-dom';

/**
 * Componente Button - Paleta Luxury Copper optimizada para conversiones
 * @param {Object} props
 * @param {'primary'|'secondary'|'outline'|'ghost'|'gold'} props.variant - Estilo del botón
 * @param {'sm'|'md'|'lg'} props.size - Tamaño del botón
 * @param {string} props.to - Si se proporciona, renderiza como Link
 * @param {boolean} props.fullWidth - Si ocupa todo el ancho
 * @param {React.ReactNode} props.children - Contenido del botón
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    // Primary: Cobre - CTA principal que convierte
    primary: `
      bg-accent text-white
      hover:bg-accent-dark hover:shadow-accent-lg
      focus:ring-accent
      active:scale-[0.98]
    `,
    // Secondary: Azul profundo - Acciones secundarias de confianza
    secondary: `
      bg-primary text-white
      hover:bg-primary-light hover:shadow-warm-lg
      focus:ring-primary
      active:scale-[0.98]
    `,
    // Outline: Borde cobre - Alternativa elegante
    outline: `
      border-2 border-accent text-accent bg-transparent
      hover:bg-accent hover:text-white hover:shadow-accent
      focus:ring-accent
      active:scale-[0.98]
    `,
    // Ghost: Sin fondo - Navegación sutil
    ghost: `
      text-primary bg-transparent
      hover:bg-primary/5 hover:text-accent
      focus:ring-primary/20
    `,
    // Gold: Dorado - Para precios y ofertas especiales
    gold: `
      bg-gold text-white
      hover:bg-gold/90 hover:shadow-gold
      focus:ring-gold
      active:scale-[0.98]
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
