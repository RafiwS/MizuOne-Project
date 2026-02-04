import { Link } from 'react-router-dom';
import { ASSETS } from '../constants/assets';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#E4E4E0] pt-16 pb-8 border-t border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
                <img src={ASSETS.logo} alt="MizuOne Logo" className="h-12" />
                <div className="flex gap-8 text-black font-medium">
                    <Link to="/" onClick={scrollToTop} className="hover:text-mizu-blue cursor-pointer">Dashboard</Link>
                    <a href="#about" className="hover:text-mizu-blue">Tentang</a>
                    <Link to="/contact" className="hover:text-mizu-blue">Contact Us</Link>
                </div>
            </div>
            <div className="text-center text-sm text-gray-500">
             © {new Date().getFullYear()} MizuOne Project. All rights reserved.
            </div>
        </div>
      </footer>

      <a
        href="https://wa.me/6282140300730?text=Halo%20MizuOne,%20saya%20tertarik%20menjadi%20mitra."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition duration-300 flex items-center justify-center group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-8 h-8" fill="white" />
        <span className="absolute right-16 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap pointer-events-none">
          Chat Nanda
        </span>
      </a>
    </>
  );
};

export default Footer;
