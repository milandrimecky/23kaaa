import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Tipy from './components/Tipy';
import TipyPage from './components/TipyPage';
import VykupApplePage from './components/VykupApplePage';
import Contact from './components/Contact';
import LegalInfoPage from './components/LegalInfoPage';
import PrivacyPage from './components/PrivacyPage';
import VopPage from './components/VopPage';
import ReklamaciePage from './components/ReklamaciePage';
import EbookPage from './components/EbookPage';
import ReviewRedirect from './components/ReviewRedirect';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Benefits />
      <Tipy />
      <Contact />
      <LegalInfoPage />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    const scriptId = 'mailerlite-universal-global';

    if (document.getElementById(scriptId)) {
      console.log('MailerLite already loaded');
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = 'https://assets.mailerlite.com/js/universal.js';

    script.onload = () => {
      console.log('MailerLite loaded globally');
      if ((window as any).ml) {
        (window as any).ml('account', '1953614');
      }
    };

    script.onerror = () => {
      console.error('Failed to load MailerLite');
    };

    document.head.appendChild(script);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tipy" element={<TipyPage />} />
      <Route path="/vykup-apple" element={<VykupApplePage />} />
      <Route path="/ochrana-osobnych-udajov" element={<PrivacyPage />} />
      <Route path="/vseobecne-obchodne-podmienky" element={<VopPage />} />
      <Route path="/reklamacny-poriadok" element={<ReklamaciePage />} />
      <Route path="/ebook-7-trikov" element={<EbookPage />} />
      <Route path="/recenzia" element={<ReviewRedirect />} />
    </Routes>
  );
}

export default App;
