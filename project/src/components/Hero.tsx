import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Facebook, Instagram, Wrench, Euro, X, Menu } from 'lucide-react';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CookieBanner from '../components/CookieBanner';
import uvodna1 from '../assets/images/uvodna1.jpg';
import uvodna2 from '../assets/images/uvodna2.jpg';
import uvodna3 from '../assets/images/uvodna3.jpg';
import uvodna4 from '../assets/images/uvodna4.jpg';
import uvodna5 from '../assets/images/uvodna5.jpg';
import rozobraty from '../assets/images/rozobraty.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      id: 'sluzby', 
      label: 'Služby', 
      icon: <Wrench className="w-5 h-5" />, 
      highlight: false, 
      highlightColor: '', 
      href: '/#sluzby', 
      external: false 
    },
    { 
      id: 'how-it-works', 
      label: 'Ako to funguje', 
      icon: <Euro className="w-5 h-5" />, 
      highlight: false, 
      highlightColor: '', 
      href: '/#how-it-works', 
      external: false 
    },
    { 
      id: 'tipy', 
      label: '🎁 7 TRIKOV ZADARMO', 
      icon: null, 
      highlight: true, 
      highlightColor: 'yellow',
      href: '/tipy', 
      external: true 
    },
    { 
      id: 'vykup-apple', 
      label: '🍎 VÝKUP APPLE', 
      icon: null, 
      highlight: true, 
      highlightColor: 'orange',
      href: '/vykup-apple', 
      external: true 
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  const getButtonClasses = (highlight: boolean, color: string) => {
    if (!highlight) {
      return 'bg-blue-700 hover:bg-blue-600 text-white hover:scale-105';
    }
    
    if (color === 'yellow') {
      const shouldPulse = location.pathname !== '/tipy';
      return `bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-300 hover:to-yellow-400 hover:scale-110 font-black shadow-lg shadow-yellow-500/50 ${shouldPulse ? 'animate-pulse' : ''}`;
    }
    
    if (color === 'orange') {
      const shouldBounce = location.pathname !== '/vykup-apple';
      return `bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-400 hover:to-red-500 hover:scale-110 font-black shadow-lg shadow-orange-500/50 ${shouldBounce ? 'animate-bounce' : ''}`;
    }
    
    return 'bg-blue-700 hover:bg-blue-600 text-white';
  };

  const getMobileButtonClasses = (highlight: boolean, color: string) => {
    if (!highlight) {
      return 'bg-blue-800 hover:bg-blue-700 text-white';
    }
    
    if (color === 'yellow') {
      return 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-300 hover:to-yellow-400 font-black shadow-md';
    }
    
    if (color === 'orange') {
      return 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-400 hover:to-red-500 font-black shadow-md';
    }
    
    return 'bg-blue-800 hover:bg-blue-700 text-white';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-blue-900/95 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div
            className="text-white font-bold text-xl sm:text-2xl cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-3xl">🔧</span>
            Fixanto
          </div>

          <div className="md:hidden">
            <Link
              to="/tipy"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-3 py-2 rounded-lg font-black text-xs hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-md hover:scale-105 whitespace-nowrap"
            >
              🎁 7 TRIKOV
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            {navItems.map(({ id, label, icon, highlight, highlightColor, href, external }) => (
              external ? (
                <Link
                  key={id}
                  to={href}
                  className={`
                    flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300
                    ${getButtonClasses(highlight, highlightColor)}
                  `}
                >
                  {icon}
                  {label}
                </Link>
              ) : (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`
                    flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300
                    ${getButtonClasses(highlight, highlightColor)}
                  `}
                >
                  {icon}
                  {label}
                </button>
              )
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none hover:bg-blue-700 p-2 rounded-lg transition ml-2"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-900 to-blue-950 border-t border-blue-700 shadow-xl">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {navItems.map(({ id, label, icon, highlight, highlightColor, href, external }) => {
              if (id === 'tipy') return null;
              
              return external ? (
                <Link
                  key={id}
                  to={href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 w-full px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105
                    ${getMobileButtonClasses(highlight, highlightColor)}
                  `}
                >
                  {icon}
                  {label}
                </Link>
              ) : (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`
                    flex items-center gap-3 w-full px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105
                    ${getMobileButtonClasses(highlight, highlightColor)}
                  `}
                >
                  {icon}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [uvodna2, uvodna3, uvodna4, uvodna5, rozobraty];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 w-[320px] h-[400px] rounded-2xl overflow-hidden shadow-2xl border-3 border-white/30">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Servis ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1.5 rounded-full">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-6' : 'bg-white/50 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

export default function Hero() {
  return (
    <>
      <GoogleAnalytics />
      <ScrollToTop />
      <Navbar />
      
      <section
        id="hero"
        className="min-h-screen relative text-white overflow-hidden pt-16 pb-12 flex items-center"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${uvodna1})`,
            filter: 'brightness(0.4) blur(1px)',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-950/85" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

        <ImageCarousel />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-center mx-auto max-w-5xl">
            
            <h1 className="mb-3 sm:mb-4 drop-shadow-2xl" style={{fontFamily: '"Inter", "Helvetica Neue", system-ui, -apple-system, sans-serif'}}>
              <span className="block text-yellow-400 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
                Servis mobilov a elektroniky
              </span>
              <span className="block text-white mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Trenčín
              </span>
            </h1>

            <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 drop-shadow-lg">
              iPhone | Samsung | Xiaomi | TV | Notebooky
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 text-white font-semibold max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              Rozbitý displej? Pokazená TV? Pomalý notebook?<br className="hidden sm:block"/>
              Napíšte a poradíme vám rýchlo online.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 max-w-2xl mx-auto">
              <Link
                to="/tipy"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-5 sm:px-6 py-4 sm:py-5 rounded-xl font-black text-base sm:text-lg shadow-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-105"
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <span className="text-2xl sm:text-3xl">🎁</span>
                  <span className="text-sm sm:text-base md:text-lg">7 TRIKOV ZADARMO</span>
                  <span className="text-xs font-normal text-blue-800">Predĺžte životnosť telefónu o 3 roky</span>
                </div>
              </Link>

              <Link
                to="/vykup-apple"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 sm:px-6 py-4 sm:py-5 rounded-xl font-black text-base sm:text-lg shadow-2xl hover:from-orange-400 hover:to-red-500 transition-all transform hover:scale-105"
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <span className="text-2xl sm:text-3xl">🍎</span>
                  <span className="text-sm sm:text-base md:text-lg">VÝKUP APPLE</span>
                  <span className="text-xs font-normal text-orange-100">iPhone, MacBook, iPad - aj poškodené!</span>
                </div>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-5 max-w-3xl mx-auto sm:grid sm:grid-cols-3">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 sm:p-4 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2 sm:block">
                <span className="text-yellow-400 font-bold text-base sm:text-2xl">2 roky</span>
                <span className="text-blue-100 text-xs sm:text-sm sm:block">Záruka na diely</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 sm:p-4 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2 sm:block">
                <span className="text-yellow-400 font-bold text-base sm:text-2xl">VÝKUP</span>
                <span className="text-blue-100 text-xs sm:text-sm sm:block sm:text-center">Férová cena za starý mobil</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 sm:p-4 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2 sm:block">
                <span className="text-yellow-400 font-bold text-base sm:text-2xl">ZADARMO</span>
                <span className="text-blue-100 text-xs sm:text-sm sm:block">Mobil počas opravy</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-blue-100 mb-4 sm:mb-5 bg-black/40 backdrop-blur-sm inline-block px-3 sm:px-4 py-2 rounded-lg leading-relaxed">
              📍 <strong className="text-white text-sm sm:text-base">Trenčín</strong> a okolie<br className="sm:hidden"/>
              <span className="text-xs text-blue-100 block sm:inline mt-1 sm:mt-0">
                (Dubnica nad Váhom, Ilava, Nemšová, Dolná Súča, Horná Súča a ďalšie)
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
              <a
                href="https://wa.me/421949344600"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:bg-green-600 transition transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Napísať na WhatsApp
              </a>

              <a
                href="tel:0949344600"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-2xl hover:bg-gray-100 transition transform hover:scale-105"
              >
                📞 Zavolať: 0949 344 600
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com/fixanto/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600/70 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm shadow transition hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>

              <a
                href="https://www.instagram.com/opravamobilov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm shadow transition hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <CookieBanner />
    </>
  );
}
