import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ASSETS } from '../constants/assets';

const SingleLayer = ({ index }: { index: number }) => (
  <div
    className="relative w-48 h-12 flex items-center justify-center mx-auto shadow-md"
    style={{
      clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
      background: "linear-gradient(180deg, #2563EB 0%, #1E40AF 100%)",
    }}
  >
    <div className="absolute inset-0 overflow-hidden opacity-40">
      <div className="absolute top-2 left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-[60%] w-2 h-2 bg-white rounded-full opacity-70"></div>
      <div className="absolute bottom-2 right-[30%] w-1 h-1 bg-white rounded-full"></div>
    </div>
    <span className="relative z-10 text-white/30 font-black text-xl select-none">
      0{index + 1}
    </span>
  </div>
);

const Filter = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const filterStages = [
    {
      title: "Kapas PP 5 mikron",
      description: "Mencegat partikel besar kotoran sedimen butiran seperti sedimen dan karat",
      position: 'right'
    },
    {
      title: "Karbon Terkompresi Tempurung Kelapa",
      description: "Adsorpsi pengotor seperti perubahan warna, bau, sisa klorin dll.",
      position: 'left'
    },
    {
      title: "Karbon Terkompresi Tempurung Kelapa",
      description: "Adsorpsi pengotor seperti perubahan warna, bau, sisa klorin dll.",
      position: 'right'
    },
    {
      title: "Kapas PP 1 mikron",
      description: "Lebih lanjut mencegat partikel besar seperti sedimen dan karet",
      position: 'left'
    },
    {
      title: "RO Osmosis Terbalik",
      description: "Membran filtrasi mendalam antibiotik, logam berat, kerak, dan bahan organik",
      position: 'right'
    },
    {
      title: "T33 Pasca Karbon",
      description: "Lebih meningkatkan rasa menyaring semua senyawa organik yang mudah menguap, melepaskan elemen jejak",
      position: 'left'
    },
    {
      title: "Elemen Filter Mineral",
      description: "Tambahkan elemen jejak yang bermanfaat, sesuaikan nilai pH, buat air alkali lemah, dan tingkatkan rasa",
      position: 'right'
    },
    {
      title: "Elemen Filter Basa Lemah",
      description: "Sesuaikan air murni dengan air yang sedikit basa, manis dan kaya mineral",
      position: 'left'
    },
    {
      title: "Alat Sterilisasi UV",
      description: "Secara langsung menghancurkan DNA/RNA mikroorganisme untuk mencapai efek sterilisasi spektrum luas dengan efisiensi tinggi dan tanpa residu kimia",
      position: 'right'
    }
  ];

  const leftItems = filterStages.filter(s => s.position === 'left');
  const rightItems = filterStages.filter(s => s.position === 'right');

  return (
    <section id="filter" className="py-20 bg-[#E4E4E0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12 lg:mb-20" data-aos="fade-down">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#3f80f7] mb-4 leading-tight">
            9 TAHAP PENYARINGAN
          </h2>
          <p className="text-slate-500 font-bold text-lg md:text-xl">
            Lapisan penyaringan untuk memastikan air <span className="text-black border-b-2 border-black">dapat langsung diminum</span>
          </p>
        </div>

        <div className="block lg:hidden space-y-8">
          {filterStages.map((stage, idx) => (
            <div key={idx} className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="mb-3 transform hover:scale-105 transition-transform duration-300">
                <SingleLayer index={idx} />
              </div>
              <div className="bg-white/50 p-6 rounded-2xl border border-white shadow-sm w-full">
                <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight uppercase">
                  {stage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
              {idx < filterStages.length - 1 && (
                <div className="w-0.5 h-6 bg-blue-300/50 my-2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-0 min-h-[800px]">

          <div className="space-y-16 pt-24 pr-8" data-aos="fade-right">
            {leftItems.map((stage, idx) => (
              <div key={idx} className="text-right relative">
                <div className="absolute top-3 -right-4 w-4 h-[2px] bg-slate-400"></div>
                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase">
                  {stage.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-start pt-10" data-aos="zoom-in">
            <div className="relative w-full h-full">
              <img
                src={ASSETS.group6}
                alt="Filter Stack"
                className="absolute inset-0 w-full h-full object-contain z-10 drop-shadow-2xl"
              />
              <img
                src={ASSETS.group7}
                alt="Bubbles"
                className="absolute inset-0 w-full h-full object-contain z-20 animate-pulse mix-blend-screen"
              />
            </div>
          </div>

          <div className="space-y-16 pt-4 pl-8" data-aos="fade-left">
            {rightItems.map((stage, idx) => (
              <div key={idx} className="text-left relative">
                <div className="absolute top-3 -left-4 w-4 h-[2px] bg-slate-400"></div>
                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase">
                  {stage.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;