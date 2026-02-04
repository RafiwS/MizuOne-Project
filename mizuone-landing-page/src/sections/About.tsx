import { ASSETS } from '../constants/assets';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-mizu-blue text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative" data-aos="fade-right" data-aos-duration="1000">
          <img src={ASSETS.machine} alt="MizuOne Machine" className="w-full max-w-md mx-auto drop-shadow-2xl" />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase">
            MIZUONE WATER VENDING STATION
          </h2>
          <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed opacity-90">
            <p>
            MizuOne adalah vending machine air minum modern yang mengolah air PDAM menjadi air siap minum berkualitas, disajikan per liter, dan tersedia dalam pembayaran non-tunai (QRIS/token) serta koin. Dirancang untuk ditempatkan di lokasi publik dan komersial, MizuOne menghadirkan akses air minum yang praktis, terjangkau, dan higienis dengan teknologi.
            </p>
            <p>
              Dengan sistem filtrasi berlapis, kontrol digital, dan monitoring pemakaian real-time, MizuOne bukan sekadar mesin, tetapi solusi layanan air minum siap minum yang cepat diimplementasikan, mudah dimonetisasi, dan mendukung transformasi layanan air minum modern.
            </p>
          </div>

          <a
            href="#specs"
            className="mt-10 inline-flex bg-white text-black px-8 py-4 rounded-full font-bold text-lg items-center gap-3 hover:bg-blue-50 hover:scale-105 transition duration-300 shadow-lg"
          >
            Selengkapnya
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
