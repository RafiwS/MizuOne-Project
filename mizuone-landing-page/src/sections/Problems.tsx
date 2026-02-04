import { ASSETS } from '../constants/assets';
import { TrendingUp, AlertCircle, MapPinOff, CheckCircle2, Wifi, DollarSign } from 'lucide-react';

const Problems = () => {
  return (
    <section className="py-20 md:py-32 relative bg-[#E4E4E0] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-[0.03] pointer-events-none">
        <img src={ASSETS.droplet} alt="" className="w-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20 md:mb-32" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-slate-900 leading-tight">
              Masalah Yang Dihadapi <br className="hidden md:block" /> Masyarakat
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">

                <div
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 border border-white flex flex-col items-center group hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition">
                        <TrendingUp size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-3">Air Galon Semakin Mahal</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                        Harga air minum kemasan terus naik, membebani pengeluaran bulanan keluarga.
                    </p>
                </div>

                <div
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 border border-white flex flex-col items-center group hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition">
                        <AlertCircle size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-3">Kualitas Tidak Konsisten</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                        Air isi ulang biasa seringkali tidak terjamin kebersihan, sterilisasi, & filtrasinya.
                    </p>
                </div>

                <div
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 border border-white flex flex-col items-center group hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition">
                        <MapPinOff size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-3">Akses Belum Merata</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                        Sulit mendapatkan sumber air minum berkualitas tinggi di lokasi strategis.
                    </p>
                </div>
            </div>
        </div>

        <div className="relative mt-20">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 max-w-6xl mx-auto">

                <div
                  className="order-2 md:order-1 flex flex-col gap-8 md:gap-16 w-full md:w-1/3"
                  data-aos="fade-right"
                >
                    <div className="text-center md:text-right group">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4 md:ml-auto group-hover:scale-110 transition">
                            <DollarSign size={24} strokeWidth={3} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                            Terjangkau
                        </h3>
                        <p className="text-slate-500 font-bold text-lg">Hanya Rp5.000 / Galon</p>
                    </div>

                    <div className="text-center md:text-right group hidden md:block">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 md:ml-auto group-hover:scale-110 transition">
                            <CheckCircle2 size={24} strokeWidth={3} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                            Aman
                        </h3>
                        <p className="text-slate-500 font-bold text-lg">Bebas Bakteri & Higienis</p>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex flex-col items-center relative z-10 w-full md:w-1/3" data-aos="zoom-in">
                    <div className="relative w-64 md:w-80 transition hover:scale-105 duration-500">
                        <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-20 rounded-full animate-pulse"></div>
                        <img
                            src={ASSETS.machine}
                            alt="MizuOne Machine"
                            className="w-full relative z-10 drop-shadow-2xl"
                        />
                    </div>
                </div>

                <div
                  className="order-3 flex flex-col gap-8 md:gap-16 w-full md:w-1/3"
                  data-aos="fade-left"
                >
                     <div className="text-center md:text-left group">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4 group-hover:scale-110 transition">
                            <Wifi size={24} strokeWidth={3} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                            Digital
                        </h3>
                         <p className="text-slate-500 font-bold text-lg">Monitoring Real-time</p>
                    </div>

                    <div className="text-center md:text-left group md:hidden">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition">
                            <CheckCircle2 size={24} strokeWidth={3} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                            Aman
                        </h3>
                        <p className="text-slate-500 font-bold text-lg">Bebas Bakteri & Higienis</p>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Problems;
