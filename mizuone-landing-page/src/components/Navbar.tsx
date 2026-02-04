import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants/assets';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled || isOpen
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-gray-100 py-0'
          : 'bg-white py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          <div className="flex-shrink-0 flex items-center">
            <div onClick={scrollToTop} className="cursor-pointer">
              <img
                src={ASSETS.logo}
                alt="MizuOne Logo"
                className="h-10 md:h-12 w-auto object-contain hover:opacity-80 transition duration-300"
              />
            </div>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            <button
              onClick={scrollToTop}
              className="text-slate-600 font-bold hover:text-mizu-blue transition text-sm uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              Dashboard
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="text-slate-600 font-bold hover:text-mizu-blue transition text-sm uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              Tentang
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="text-slate-600 font-bold hover:text-mizu-blue transition text-sm uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              Keunggulan
            </button>
            <button
              onClick={() => handleNavClick('specs')}
              className="text-slate-600 font-bold hover:text-mizu-blue transition text-sm uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              Spesifikasi
            </button>

            <Link
              to="/contact"
              className="bg-mizu-blue text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-blue-600 hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
              Hubungi Kami
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-mizu-blue focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
             <button
              className="block w-full text-left px-3 py-3 text-base font-bold text-slate-700 hover:text-mizu-blue hover:bg-blue-50 rounded-lg transition"
              onClick={scrollToTop}
            >
              Dashboard
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-3 text-base font-bold text-slate-700 hover:text-mizu-blue hover:bg-blue-50 rounded-lg transition"
            >
              Tentang
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="block w-full text-left px-3 py-3 text-base font-bold text-slate-700 hover:text-mizu-blue hover:bg-blue-50 rounded-lg transition"
            >
              Keunggulan
            </button>
            <button
              onClick={() => handleNavClick('specs')}
              className="block w-full text-left px-3 py-3 text-base font-bold text-slate-700 hover:text-mizu-blue hover:bg-blue-50 rounded-lg transition"
            >
              Spesifikasi
            </button>
            <Link
              to="/contact"
              className="block px-3 py-3 text-base font-bold text-mizu-blue bg-blue-50 rounded-lg mt-2 text-center"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
