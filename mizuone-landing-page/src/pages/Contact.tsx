import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen bg-[#E4E4E0] flex items-center">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-black mb-6">
              HUBUNGI KAMI
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tertarik menjadi mitra MizuOne atau ingin memasang mesin di lokasi Anda? Tim kami siap membantu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://wa.me/6282140300730" target="_blank" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 transition">
                <Phone className="w-8 h-8 text-green-600 group-hover:text-white transition" />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp / Telepon</h3>
              <p className="text-mizu-blue font-bold text-xl">082-140-300-730</p>
              <p className="text-gray-400 text-sm mt-1">CP : PT Surya Joyo Agung</p>
            </a>

            <a href="mailto:mizuone.info@gmail.com" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition">
                <Mail className="w-8 h-8 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-mizu-blue font-bold text-lg break-all">mizuone.info@gmail.com</p>
              <p className="text-gray-400 text-sm mt-1">Layanan 24 Jam</p>
            </a>

            <a href="https://bit.ly/FormPengajuanMIZUONE" target="_blank" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500 transition">
                <FileText className="w-8 h-8 text-purple-600 group-hover:text-white transition" />
              </div>
              <h3 className="font-bold text-lg mb-2">Formulir Mitra</h3>
              <p className="text-mizu-blue font-bold text-lg">Isi Pengajuan</p>
              <p className="text-gray-400 text-sm mt-1">via Google Form</p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
