import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Problems from '../sections/Problems';
import About from '../sections/About';
import Features from '../sections/Features';
import Specs from '../sections/Specs';
import Filter from '../sections/Filter';
import Pricing from '../sections/Pricing';
import Locations from '../sections/Locations';
import Footer from '../components/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-[#E4E4E0] bg-grid-pattern">
        <Hero />
        <Problems />
        <About />
        <Features />
        <Specs />
        <Filter />
        <Pricing />
        <Locations />
      </main>
      <Footer />
    </>
  );
};

export default Home;
