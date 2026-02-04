import { MapPin, CheckCircle2 } from 'lucide-react';

const cities = [
  "Kota Malang",
  "Kota Batu",
  "Kota Bekasi",
  "Bali"
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 mb-4">
            Jangkauan Layanan
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            MizuOne terus memperluas jangkauan untuk menghadirkan akses air minum berkualitas bagi masyarakat Indonesia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100" data-aos="zoom-in">
          <h3 className="text-center font-bold text-slate-400 uppercase tracking-widest text-sm mb-8">
            Kota Yang Telah Bermitra
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border-2 border-slate-100 px-8 py-4 rounded-2xl hover:border-mizu-blue hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-mizu-blue transition duration-300">
                  <MapPin size={20} className="text-mizu-blue group-hover:text-white transition duration-300" />
                </div>
                <span className="font-bold text-lg text-slate-700 group-hover:text-mizu-blue transition duration-300">
                  {city}
                </span>
                <CheckCircle2 size={18} className="text-green-500 ml-2" />
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-10 italic">
            *Segera hadir di kota-kota besar lainnya.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Locations;
