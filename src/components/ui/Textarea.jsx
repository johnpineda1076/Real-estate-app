/**
 * Componente Textarea - Paleta Luxury Copper
 * @param {Object} props
 * @param {string} props.label - Label del textarea
 * @param {string} props.error - Mensaje de error
 * @param {string} props.helperText - Texto de ayuda
 * @param {boolean} props.fullWidth - Si ocupa todo el ancho
 */
const Textarea = ({
  label,
  error,
  helperText,
  fullWidth = true,
  className = '',
  id,
  rows = 5,
  ...props
}) => {
  const inputId = id || props.name;

  const baseStyles = `
    px-4 py-3 rounded-lg bg-white text-dark
    border transition-all duration-200
    placeholder:text-muted resize-none
    focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
  `;

  const stateStyles = error
    ? 'border-error focus:ring-error/20 focus:border-error'
    : 'border-border hover:border-accent/50';

  const textareaStyles = `
    ${baseStyles}
    ${stateStyles}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={inputId} className="block text-primary font-medium mb-2">
          {label}
        </label>
      )}
      <textarea id={inputId} rows={rows} className={textareaStyles} {...props} />
      {error && (
        <p className="text-error text-sm mt-1.5 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="text-muted text-sm mt-1.5">{helperText}</p>
      )}
    </div>
  );
};

export default Textarea;
