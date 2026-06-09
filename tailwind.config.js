/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Copper Palette - Optimizada para Ventas
        primary: '#0f172a',           // Azul profundo - Confianza y autoridad
        secondary: '#1e3a5f',         // Navy elegante - Profesionalismo
        accent: '#b87333',            // Cobre/Bronce - CTA que convierte
        lightGray: '#faf8f5',         // Crema suave - Fondo cálido
        muted: '#57534e',             // Gris piedra - Texto secundario
        dark: '#1c1917',              // Negro suave - Texto principal

        // Variaciones para estados
        'primary-light': '#1e293b',   // Primary hover
        'primary-dark': '#020617',    // Primary más oscuro
        'accent-light': '#cd8d4a',    // Cobre claro
        'accent-dark': '#a36429',     // Cobre intenso - CTA hover
        'warm-gray': '#f5f5f4',       // Gris cálido alternativo

        // Colores adicionales para UI
        'surface': '#ffffff',         // Superficies blancas
        'border': '#e7e5e4',          // Bordes sutiles
        'gold': '#ca8a04',            // Dorado para precios/destacados
        'success': '#166534',         // Verde premium
        'error': '#dc2626',           // Rojo elegante
        'warning': '#d97706',         // Ámbar
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(15, 23, 42, 0.08)',
        'warm-lg': '0 10px 40px -3px rgba(15, 23, 42, 0.12)',
        'accent': '0 4px 20px -2px rgba(184, 115, 51, 0.25)',
        'accent-lg': '0 10px 40px -3px rgba(184, 115, 51, 0.3)',
        'gold': '0 4px 20px -2px rgba(202, 138, 4, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        'gradient-copper': 'linear-gradient(135deg, #b87333 0%, #a36429 100%)',
      },
    },
  },
  plugins: [],
}
