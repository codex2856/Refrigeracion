import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Problems } from './components/Problems';
import { WhyUs } from './components/WhyUs';
import { HowItWorks } from './components/HowItWorks';
import { ServiceArea } from './components/ServiceArea';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Problems />
        <WhyUs />
        <HowItWorks />
        <ServiceArea />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
