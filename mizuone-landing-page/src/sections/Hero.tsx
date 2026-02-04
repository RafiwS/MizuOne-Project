import { Link } from 'react-router-dom';
import { ASSETS } from '../constants/assets';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Droplet */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl opacity-20 pointer-events-none">
        <img src={ASSETS.droplet} alt="Water Droplet" className="w-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <span
          className="inline-block py-1 px-3 rounded-full bg-blue-100 text-mizu-blue font-bold text-xs tracking-wider mb-6 border border-blue-200"
          data-aos="fade-down"
        >
          SOLUSI AIR MINUM MASA DEPAN
        </span>

        <h1
          className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          AIR MINUM ADALAH <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            KEBUTUHAN
          </span> <br />
          BUKAN KEMEWAHAN
        </h1>

        <p
          className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          MizuOne hadir dengan teknologi filtrasi 9-tahap dan monitoring digital.
          Sehat, Higienis, dan Hemat 70% dibanding air kemasan.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to="/contact"
            className="group bg-mizu-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 hover:bg-blue-600 transition hover:scale-105 duration-300"
          >
            Gabung Jadi Mitra
            <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition">
               {/* Arrow Icon SVG */}
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </Link>
          <a
            href="#specs"
            className="bg-white text-slate-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 hover:border-mizu-blue hover:text-mizu-blue transition duration-300"
          >
            Lihat Spesifikasi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
