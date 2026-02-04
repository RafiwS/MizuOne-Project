import { Link } from 'react-router-dom';
import { ASSETS } from '../constants/assets';

const Specs = () => {
  return (
    <section id="specs" className="py-24 bg-mizu-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center lg:justify-start" data-aos="fade-right">
          <img src={ASSETS.machine} alt="MizuOne Specs" className="w-full max-w-md drop-shadow-2xl" />
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight uppercase">
            MizuOne Water Vending Station
          </h2>

          <div className="space-y-4 text-lg md:text-xl font-semibold">
            <div className="border-b border-white/20 pb-2">
              <span className="opacity-80">Kapasitas Produksi :</span> ±150–180 galon per hari
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="opacity-80">Daya Listrik :</span> 900 watt
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="opacity-80">Sistem Filtrasi :</span> 9 tahap penyaringan, UV & Ozon sterilization
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="opacity-80">Bahan Konstruksi :</span> Stainless steel anti karat
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="opacity-80">Sistem Pembayaran :</span> Uang koin, QRIS, E-money
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="opacity-80">Monitoring :</span> Digital & real-time
            </div>
            <div className="border-b border-white/20 pb-2">
              <span className="opacity-80">Ukuran Mesin :</span> 1m × 1m × 2m
            </div>
            <div>
              <span className="opacity-80">Jenis Wadah :</span> Fleksibel (galon, botol, tumbler)
            </div>
          </div>

          <Link to="/contact" className="mt-12 inline-flex bg-white text-black px-8 py-3 rounded-full font-semibold items-center gap-3 hover:bg-gray-100 transition hover:scale-105 duration-300 shadow-md">
            Jadi Mitra
            <img src={ASSETS.arrowRight} alt="" className="w-4 h-4 rotate-180" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Specs;
