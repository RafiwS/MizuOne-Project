import { Check, Star, Zap } from 'lucide-react';

const facilities = [
  "1 Unit Mesin Isi Ulang Otomatis (Digital & Food Grade)",
  "Garansi 1 Tahun (Komponen Utama)",
  "5 Kartu Pelanggan (Smart Card) Siap Pakai",
  "1 Set Filter Air (Senilai Rp 2.000.000)",
  "Sistem Laporan Digital Harian (Otomatis)",
  "Gratis Desain Stiker & Identitas Usaha",
  "Perangkat Iklan Digital (TV Display & LED)",
  "Sistem Maintenance & Dukungan Teknis"
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">

        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-slate-900">
            Paket Investasi
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-2">
            Solusi bisnis terima beres dengan kepemilikan penuh.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="bg-blue-50/50 p-6 md:p-8 border-b border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-mizu-blue text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider mb-2 uppercase">
                <Star size={10} fill="currentColor" /> Best Seller
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                MizuOne Water Station
              </h3>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="text-4xl md:text-5xl font-black text-mizu-blue leading-none">
                65<span className="text-xl text-slate-400 font-bold">jt</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium mt-1 bg-white px-2 py-0.5 rounded-md border border-slate-100">
                *Belum termasuk PPN & Ongkir
              </span>
            </div>
          </div>

          {/* Body Card: List Fasilitas */}
          <div className="p-6 md:p-8">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
              <Zap size={16} className="text-yellow-500 fill-yellow-500" /> Fasilitas Lengkap:
            </h4>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {facilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                      <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={3} />
                      <span className="text-slate-600 text-sm font-medium leading-snug">{item}</span>
                  </div>
              ))}
            </div>

            <a
              href="https://wa.me/6282140300730?text=Halo%20MizuOne,%20saya%20tertarik%20membeli%20unit%20seharga%2065Jt."
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-mizu-blue text-white text-center py-3.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-sm md:text-base"
            >
              Ambil Paket Ini Sekarang
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
