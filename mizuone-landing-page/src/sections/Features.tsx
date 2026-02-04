import { Share2, CloudSun, Droplet, Shield, CloudUpload } from 'lucide-react';

const featuresList = [
  {
    title: "DIGITALISASI TERINTEGRASI",
    desc: "Pemantauan transaksi dan status mesin secara real-time",
    Icon: Share2,
    align: "left"
  },
  {
    title: "STERILISASI UV & OZON",
    desc: "Memastikan air bebas bakteri dan aman diminum.",
    Icon: CloudSun,
    align: "right"
  },
  {
    title: "9 TAHAP FILTERISASI",
    desc: "Menghasilkan air dengan kualitas premium.",
    Icon: Droplet,
    align: "left"
  },
  {
    title: "PINTU STAINLESS PREMIUM",
    desc: "Tampilan elegan dan daya tahan tinggi.",
    Icon: Shield,
    align: "right"
  },
  {
    title: "MONITORING DIGITAL CLOUD",
    desc: "Mendukung analitik penjualan dan performa mesin.",
    Icon: CloudUpload,
    align: "center"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-24 bg-[#1E4EA6] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-5xl font-black text-center mb-16 md:mb-24 uppercase"
          data-aos="fade-down"
        >
          Keunggulan Teknologi
        </h2>

        <div className="grid md:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-12">
          {featuresList.map((item, index) => {
            const isCenter = item.align === 'center';
            const isRight = item.align === 'right';

            return (
              <div
                key={index}
                className={`
                  flex items-center gap-6
                  flex-row text-left
                  ${isCenter ? 'md:col-span-2 md:flex-col md:text-center md:mx-auto md:max-w-2xl' : ''}
                  ${isRight ? 'md:flex-row-reverse md:text-right' : ''}
                  ${!isCenter && !isRight ? 'md:flex-row md:text-left' : ''}
                `}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`flex-shrink-0 ${isCenter ? 'md:mb-6' : ''}`}>
                   <item.Icon className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold mb-2 uppercase">{item.title}</h3>
                  <p className="font-medium text-blue-100 leading-relaxed text-base md:text-lg">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
