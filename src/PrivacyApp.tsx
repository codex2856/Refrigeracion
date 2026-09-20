import { Header } from './components/Header';
import { Privacy } from './components/Privacy';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function PrivacyApp() {
  return (
    <>
      <Header />
      <main>
        <Privacy />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default PrivacyApp;
