import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar la sección activa cuando estás en Home haciendo scroll
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ['home', 'properties', 'blog', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const isActive = (path, sectionId = null) => {
    if (isHomePage && sectionId) {
      return activeSection === sectionId;
    }
    return location.pathname === path;
  };

  const handleNavClick = (e, sectionId) => {
    if (isHomePage) {
      e.preventDefault();
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveSection('home');
      }, 100);
    } else {
      e.preventDefault();
      setActiveSection('home');
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const NavLink = ({ to, onClick, children, sectionId = null }) => {
    const active = isActive(to, sectionId);
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
          active
            ? 'text-accent'
            : 'text-primary hover:text-accent'
        }`}
      >
        {children}
        {active && (
          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
        )}
      </Link>
    );
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-warm'
        : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                RealEstate
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" onClick={handleHomeClick} sectionId="home">
              Inicio
            </NavLink>
            <NavLink to="/properties" onClick={(e) => handleNavClick(e, 'properties')} sectionId="properties">
              Propiedades
            </NavLink>
            <NavLink to="/blog" onClick={(e) => handleNavClick(e, 'blog')} sectionId="blog">
              Blog
            </NavLink>
            <NavLink to="/about" onClick={(e) => handleNavClick(e, 'about')} sectionId="about">
              Nosotros
            </NavLink>
            <NavLink to="/contact" onClick={(e) => handleNavClick(e, 'contact')} sectionId="contact">
              Contacto
            </NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Salir
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
              >
                Ingresar
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
