import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CookieBanner from '../components/CookieBanner';
import { ChevronUp, ChevronDown, Download, Shield, Zap, ArrowRight } from 'lucide-react';
import rozopraty from '../assets/images/rozobraty.jpg';
import foto from '../assets/images/foto.png';

export default function TipyPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToForm = useCallback(() => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <GoogleAnalytics />

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-xl backdrop-blur-md bg-opacity-95">
        <div className="px-4 py-3">
          <Link
            to="/"
            className="text-white font-bold text-xl flex items-center gap-2 hover:scale-105 transition-all duration-300 w-full justify-center sm:justify-start"
          >
            <span className="text-3xl">🔧</span> Fixanto
          </Link>
        </div>
      </div>

      <div className="hidden lg:block">
        <Navbar />
      </div>

      <div className="min-h-screen">
        
        {/* HERO - S ROZOBRATÝM TELEFÓNOM */}
        <section
          id="hero-section"
          className="pt-16 sm:pt-20 pb-8 lg:pt-28 lg:pb-16 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(30,58,138,0.9) 0%, rgba(59,130,246,0.85) 50%, rgba(147,51,234,0.9) 100%), url(${rozopraty})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/30 to-indigo-900/40 backdrop-blur-sm"></div>
          
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 border-2 border-white/20 backdrop-blur-xl px-8 py-6 sm:py-7 rounded-2xl shadow-2xl mb-6 max-w-lg mx-auto group hover:scale-105 transition-all duration-300">
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">📱</span>
              <span className="text-lg sm:text-xl text-blue-50 font-semibold tracking-wide leading-tight">
                Exkluzívne tajomstvá servisných majstrov
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 mb-8 px-2 sm:px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight tracking-tight">
                7 TRIKOV
                <br className="sm:hidden" />
                <span className="block text-5xl sm:text-6xl lg:text-[4rem]">SERVISNÝCH TECHNIKOV</span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2 drop-shadow-lg">
                Tajomstvá, ktoré vám môžu{' '}
                <span className="font-bold text-white block text-2xl sm:text-3xl lg:text-4xl drop-shadow-2xl">UŠETRIŤ STOVKY EUR</span>
              </p>
            </div>

            {/* CTA */}
            <div className="w-full max-w-lg mx-auto px-4 sm:px-6">
              <button
                onClick={scrollToForm}
                className="group w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 hover:from-yellow-500 hover:via-orange-500 hover:to-red-600 text-slate-900 font-black text-lg sm:text-xl py-6 sm:py-7 px-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all flex items-center justify-center gap-3 backdrop-blur-md border-4 border-yellow-300/50"
              >
                <Download className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                <span>Získať 7 trikov ZADARMO</span>
                <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-y-1 transition-transform flex-shrink-0 ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* NOVÁ SEKCIA - ČO ZÍSKATE V E-BOOKU */}
        <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-blue-200/50 shadow-2xl">
              
              <div className="max-w-3xl mx-auto space-y-5 text-center">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight mb-4">
                  Čo získate v tomto e-booku?
                </h2>
                
                <div className="bg-gradient-to-r from-slate-900/5 to-blue-900/5 backdrop-blur-xl border-2 border-indigo-200/50 rounded-2xl p-6 sm:p-10 shadow-xl">
                  <p className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-5 leading-tight drop-shadow-lg">
                    "Informácie, ktoré žiadny servis nechce, aby ste poznali"
                  </p>
                  
                  <p className="text-base sm:text-2xl text-slate-800 font-semibold mb-6 leading-relaxed">
                    Tento guide vám dáva všetky <strong className="text-indigo-600">POSTUPY a NÁSTROJE</strong> na ochranu telefónu. Krátka ochutnávka:
                  </p>

                  {/* ZOZNAM S HOVER EFEKTMI */}
                  <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto text-left">
                    <div className="group flex items-start gap-3 p-4 bg-gradient-to-r from-white via-blue-50/50 to-indigo-50/50 rounded-xl border-l-4 border-indigo-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <span className="text-xl font-black text-indigo-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">✓</span>
                      <span className="text-base sm:text-lg leading-snug text-slate-800 group-hover:text-slate-900 transition-colors">Najčastejšia zbytočná oprava - vyriešite za 3 minúty</span>
                    </div>
                    <div className="group flex items-start gap-3 p-4 bg-gradient-to-r from-white via-blue-50/50 to-indigo-50/50 rounded-xl border-l-4 border-indigo-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <span className="text-xl font-black text-indigo-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">✓</span>
                      <span className="text-base sm:text-lg leading-snug text-slate-800 group-hover:text-slate-900 transition-colors">Batéria vydrží 2x dlhšie jednoduchou zmenou</span>
                    </div>
                    <div className="group flex items-start gap-3 p-4 bg-gradient-to-r from-white via-blue-50/50 to-indigo-50/50 rounded-xl border-l-4 border-indigo-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <span className="text-xl font-black text-indigo-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">✓</span>
                      <span className="text-base sm:text-lg leading-snug text-slate-800 group-hover:text-slate-900 transition-colors">70% "porúch" nie je vôbec porucha</span>
                    </div>
                    <div className="group flex items-start gap-3 p-4 bg-gradient-to-r from-white via-blue-50/50 to-indigo-50/50 rounded-xl border-l-4 border-indigo-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <span className="text-xl font-black text-indigo-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">✓</span>
                      <span className="text-base sm:text-lg leading-snug text-slate-800 group-hover:text-slate-900 transition-colors">Prečo sa pokazí aj vodoodolný telefón</span>
                    </div>
                    <div className="group flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-xl border-l-4 border-yellow-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <span className="text-xl font-black text-yellow-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">⚡</span>
                      <span className="text-base sm:text-lg font-bold leading-snug text-slate-900 group-hover:text-slate-950 transition-colors">TAJOMSTVO KONEKTORA - prečo nabíja 5h namiesto 2h?</span>
                    </div>
                  </div>

                  {/* ZELENÝ BOX */}
                  <div className="mt-6 bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-emerald-400/50 hover:scale-105 transition-all duration-300 group">
                    <p className="font-black text-xl sm:text-2xl lg:text-3xl mb-3 leading-tight group-hover:scale-105 transition-transform">
                      Praktické rady pre každého
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                      Ušetria vám zbytočné <span className="text-yellow-400 text-lg sm:text-xl font-black drop-shadow-lg">desiatky až stovky eur</span> na opravách.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ŠTEFAN - UPRAVENÝ TEXT */}
        <section className="py-8 sm:py-10 lg:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-6 sm:mb-8 leading-tight text-center">
              Prečo Vás to učím práve ja?
            </h2>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-slate-700">
              
              {/* Hook */}
              <p className="italic text-slate-600 border-l-4 border-slate-300 pl-4">
                Neučte sa opravovať mobily od niekoho, kto sa telefónu dotkol len raz…
              </p>

              {/* Upravený text */}
              <p className="border-l-4 border-blue-400 pl-4">
                Ahoj, volám sa <strong className="text-blue-600 font-bold">Štefan Hupčík</strong>. Som zakladateľ servisu Fixanto a je dosť možné, že ste o mne ešte nepočuli. Nemám billboardy ani veľké reklamy, radšej venujem čas zákazníkom.
              </p>

              <p className="border-l-4 border-purple-400 pl-4">
                Vybudoval som servis, ktorý denne rieši desiatky problémov s mobilmi, TV a elektronikou. Rýchlo, spoľahlivo a za férové ceny.
              </p>

              <p className="border-l-4 border-emerald-400 pl-4">
                Testoval som desiatky zariadení, učil sa na vlastných chybách a zapisoval si, čo funguje. Vďaka tomu som vytvoril <strong>systém preventívnej údržby a efektívnych opráv</strong>.
              </p>

              <p className="border-l-4 border-teal-400 pl-4">
                Dnes pomáham každému kto potrebuje ušetriť peniaze a ukazujem, <strong>ako s obyčajným mobilom predĺžiť životnosť.</strong>
              </p>

              <p className="text-center text-xl sm:text-2xl font-black text-slate-900 pt-3">
                A presne tieto triky chcem dať VÁM.
              </p>
            </div>

            {/* FOTKA VO ŠTVORCI - IBA MOBIL */}
            <div className="lg:hidden flex justify-center mt-8">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-110 group-hover:border-yellow-400 p-3">
                  <img 
                    src={foto} 
                    alt="Štefan Hupčík - Fixanto" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ORANŽOVÝ BOX - VYCENTROVANÝ */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-4 border-orange-300/60 mt-8 backdrop-blur-md group hover:scale-105 transition-all duration-300 text-center">
              <p className="font-black text-xl sm:text-2xl lg:text-3xl mb-3 leading-tight">
                7 trikov = koniec zbytočných opráv
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Väčšina ľudí zaplatí za problém ktorý by vyriešili za 5 minút. Vy nie.
              </p>
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section
          id="form-section"
          className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
          style={{
            backgroundImage: `url(${rozopraty})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70 sm:bg-slate-900/65 lg:bg-slate-900/55"></div>

          {/* MOBILNÁ VERZIA */}
          <div className="lg:hidden relative z-10">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6 sm:space-y-8 text-white">
              
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl font-black leading-tight bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Zadaj email a dostaneš 7 trikov ZADARMO
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8 text-center">
                <div className="bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="flex flex-col items-center gap-4 mb-6 sm:mb-8">
                    <span className="text-5xl sm:text-6xl">👇</span>
                    <div>
                      <p className="font-black text-2xl sm:text-3xl text-yellow-400 mb-2 sm:mb-3 leading-tight drop-shadow-lg">
                        Vyplň formulár nižšie
                      </p>
                      <p className="text-xl sm:text-2xl font-semibold leading-tight drop-shadow-md">
                        Triky prídú na tvoj email do 60 sekúnd
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/20">
                    <div className="flex flex-col items-center p-4 bg-white/20 rounded-2xl backdrop-blur hover:bg-white/30 hover:scale-110 group-hover:scale-105 transition-all duration-300">
                      <Zap className="w-10 h-10 text-yellow-400 mb-2 drop-shadow-lg group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-white text-base text-center drop-shadow-md">60 sekúnd</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white/20 rounded-2xl backdrop-blur hover:bg-white/30 hover:scale-110 group-hover:scale-105 transition-all duration-300">
                      <Shield className="w-10 h-10 text-yellow-400 mb-2 drop-shadow-lg group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-white text-base text-center drop-shadow-md">Bez spamu</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white/20 rounded-2xl backdrop-blur hover:bg-white/30 hover:scale-110 group-hover:scale-105 transition-all duration-300">
                      <span className="text-3xl mb-2 drop-shadow-lg group-hover:scale-110 transition-transform">✓</span>
                      <span className="font-bold text-white text-base text-center drop-shadow-md">1 klik</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/60 to-violet-600/60 backdrop-blur-xl border-2 border-purple-400/70 rounded-2xl p-6 sm:p-8 text-center drop-shadow-2xl hover:scale-105 transition-all duration-300">
                  <p className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 flex items-center justify-center gap-2">
                    <span className="text-2xl sm:text-3xl">🛡️</span> 100% GARANCIA
                  </p>
                  <p className="text-lg sm:text-xl text-purple-100 leading-relaxed drop-shadow-md">
                    Nie si spokojný? Odhlás sa jedným klikom. <strong>Nič nestratíš!</strong>
                  </p>
                </div>

                <p className="text-base sm:text-lg text-center drop-shadow-md">
                  <Link
                    to="/ochrana-osobnych-udajov"
                    className="underline hover:text-yellow-300 font-bold hover:no-underline transition-all"
                  >
                    Ochrana osobných údajov →
                  </Link>
                </p>
              </div>

              {/* FORMULÁR */}
              <div className="w-full">
                <div className="relative">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-3xl text-base sm:text-lg font-black shadow-2xl z-10 w-full max-w-md mx-auto drop-shadow-2xl">
                    🔓 Odomkni 7 trikov zadarmo
                  </div>
                  
                  <div className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white/60 p-1 sm:p-2 overflow-hidden w-full drop-shadow-2xl">
                    <div className="pt-12 sm:pt-16 pb-8 px-4 sm:px-8 bg-gradient-to-br from-slate-50 via-white to-emerald-50/50 rounded-xl sm:rounded-2xl">
                      <iframe
                        src="https://preview.mailerlite.io/forms/1953614/172475491924575429/share"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        style={{ border: 'none', display: 'block', minHeight: '500px' }}
                        title="E-book formulár"
                        className="w-full rounded-xl shadow-inner"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* VÝKUP MOBILOV - PLNÁ ŠÍRKA */}
              <div className="w-full">
                <Link
                  to="/vykup-apple"
                  className="group block bg-gradient-to-br from-orange-500 via-red-500/90 to-orange-600 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] border border-orange-400/50"
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-4 text-4xl sm:text-6xl animate-pulse">🍎</div>
                    <div className="absolute bottom-2 left-4 text-4xl sm:text-6xl animate-pulse" style={{ animationDelay: '1s' }}>
                      🍎
                    </div>
                  </div>

                  <div className="relative p-6 sm:p-8">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-6 mx-auto max-w-max shadow-lg hover:scale-105 transition-all group-hover:scale-105">
                      <span className="text-yellow-400 text-lg sm:text-xl drop-shadow-lg">💰</span>
                      <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wide drop-shadow-md">
                        Férové výkupné ceny
                      </span>
                    </div>

                    <h3 className="text-white font-black text-lg sm:text-xl lg:text-2xl mb-4 leading-tight text-center drop-shadow-2xl">
                      Prečo hádzať prachy do koša? <br className="sm:hidden"/>Váš starý iPhone má hodnotu!
                    </h3>

                    <p className="text-orange-100 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-center drop-shadow-lg">
                      Vykúpime aj rozbité Apple zariadenia. <strong>Hotovosť OKAMŽITE!</strong>
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-md hover:scale-105 transition-all">
                        <span className="text-yellow-400 text-lg sm:text-xl drop-shadow-lg">💰</span>
                        <span className="text-white font-bold text-sm sm:text-base drop-shadow-md">Hotovosť ihneď</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-md hover:scale-105 transition-all">
                        <span className="text-yellow-400 text-lg sm:text-xl drop-shadow-lg">✓</span>
                        <span className="text-white font-bold text-sm sm:text-base drop-shadow-md">Aj poškodené</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-md hover:scale-105 transition-all">
                        <span className="text-yellow-400 text-lg sm:text-xl drop-shadow-lg">⚡</span>
                        <span className="text-white font-bold text-sm sm:text-base drop-shadow-md">Do 24h</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-xl rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-md hover:scale-105 transition-all">
                        <span className="text-yellow-400 text-lg sm:text-xl drop-shadow-lg">🔒</span>
                        <span className="text-white font-bold text-sm sm:text-base drop-shadow-md">Diskrétne</span>
                      </div>
                    </div>

                    <button className="w-full block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 py-4 px-6 rounded-2xl font-black text-base sm:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all border-2 border-yellow-300/50 drop-shadow-xl">
                      💰 Koľko stojí môj Apple?
                    </button>
                    
                    <p className="text-orange-100 text-xs sm:text-sm text-center font-semibold mt-4 drop-shadow-md">
                      iPhone MacBook iPad AirPods
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* DESKTOP VERZIA */}
          <div className="hidden lg:block relative z-10">
            <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 gap-16 items-start text-white">
              
              <div className="sticky top-20 space-y-6">
                <h2 className="text-5xl xl:text-6xl font-black leading-tight mb-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Zadaj email a dostaneš 7 trikov ZADARMO
                </h2>

                <div className="bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-10 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex-1">
                      <p className="font-black text-3xl text-yellow-400 mb-3 leading-tight drop-shadow-lg">
                        Vyplň formulár vedľa
                      </p>
                      <p className="text-2xl font-semibold leading-tight drop-shadow-md">
                        Triky prídú na tvoj email do 60 sekúnd
                      </p>
                    </div>
                    <ArrowRight className="w-14 h-14 text-yellow-400 drop-shadow-2xl shrink-0 group-hover:translate-x-2 transition-transform" />
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                    <div className="flex flex-col items-center p-5 bg-white/20 rounded-2xl backdrop-blur hover:bg-white/30 hover:scale-110 group-hover:scale-105 transition-all duration-300">
                      <Zap className="w-12 h-12 text-yellow-400 mb-3 drop-shadow-lg group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-white text-lg text-center drop-shadow-md">60 sekúnd</span>
                    </div>
                    <div className="flex flex-col items-center p-5 bg-white/20 rounded-2xl backdrop-blur hover:bg-white/30 hover:scale-110 group-hover:scale-105 transition-all duration-300">
                      <Shield className="w-12 h-12 text-yellow-400 mb-3 drop-shadow-lg group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-white text-lg text-center drop-shadow-md">Bez spamu</span>
                    </div>
                    <div className="flex flex-col items-center p-5 bg-white/20 rounded-2xl backdrop-blur hover:bg-white/30 hover:scale-110 group-hover:scale-105 transition-all duration-300">
                      <span className="text-4xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform">✓</span>
                      <span className="font-bold text-white text-lg text-center drop-shadow-md">1 klik</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/60 to-violet-600/60 backdrop-blur-xl border-2 border-purple-400/70 rounded-3xl p-8 text-center drop-shadow-2xl hover:scale-105 transition-all duration-300">
                  <p className="font-bold text-2xl mb-4 flex items-center justify-center gap-3">
                    <span className="text-3xl">🛡️</span> 100% GARANCIA
                  </p>
                  <p className="text-xl text-purple-100 leading-relaxed drop-shadow-md">
                    Nie si spokojný? Odhlás sa jedným klikom. <strong>Nič nestratíš!</strong>
                  </p>
                </div>

                <p className="text-lg drop-shadow-md">
                  <Link
                    to="/ochrana-osobnych-udajov"
                    className="underline hover:text-yellow-300 font-bold hover:no-underline transition-all"
                  >
                    Ochrana osobných údajov →
                  </Link>
                </p>

                {/* FOTKA VO ŠTVORCI - DESKTOP */}
                <div className="flex justify-center py-6">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="relative w-96 h-96 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-110 group-hover:border-yellow-400 p-3">
                      <img 
                        src={foto} 
                        alt="Štefan Hupčík - Fixanto" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="w-full">
                  <div className="relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white px-12 py-6 rounded-3xl text-xl font-black shadow-2xl z-10 w-full max-w-lg mx-auto drop-shadow-2xl">
                      🔓 Odomkni 7 trikov zadarmo
                    </div>
                    
                    <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border-4 border-white/60 p-3 overflow-hidden w-full drop-shadow-2xl">
                      <div className="pt-20 pb-10 px-10 bg-gradient-to-br from-slate-50 via-white to-emerald-50/50 rounded-3xl">
                        <iframe
                          src="https://preview.mailerlite.io/forms/1953614/172475491924575429/share"
                          width="100%"
                          height="600"
                          frameBorder="0"
                          style={{ border: 'none', display: 'block', minHeight: '500px' }}
                          title="E-book formulár"
                          className="w-full rounded-3xl shadow-inner"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* VÝKUP MOBILOV - PLNÁ ŠÍRKA DESKTOP */}
                <div className="w-full">
                  <Link
                    to="/vykup-apple"
                    className="group block bg-gradient-to-br from-orange-500 via-red-500/90 to-orange-600 rounded-3xl shadow-2xl overflow-hidden relative hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] border border-orange-400/50"
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 right-4 text-6xl animate-pulse">🍎</div>
                      <div className="absolute bottom-2 left-4 text-6xl animate-pulse" style={{ animationDelay: '1s' }}>
                        🍎
                      </div>
                    </div>

                    <div className="relative p-10">
                      <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-8 py-3 rounded-full mb-8 mx-auto max-w-max shadow-lg hover:scale-105 transition-all group-hover:scale-105">
                        <span className="text-yellow-400 text-2xl drop-shadow-lg">💰</span>
                        <span className="text-white text-base font-bold uppercase tracking-wide drop-shadow-md">
                          Férové výkupné ceny
                        </span>
                      </div>

                      <h3 className="text-white font-black text-3xl mb-8 leading-tight text-center drop-shadow-2xl">
                        Prečo hádzať prachy do koša? <br />Váš starý iPhone má hodnotu!
                      </h3>

                      <p className="text-orange-100 text-xl mb-10 leading-relaxed text-center drop-shadow-lg">
                        Vykúpime aj rozbité Apple zariadenia. <strong>Hotovosť OKAMŽITE!</strong>
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="flex items-center gap-4 bg-white/20 backdrop-blur-xl rounded-xl px-6 py-4 shadow-md hover:scale-105 transition-all">
                          <span className="text-yellow-400 text-2xl drop-shadow-lg">💰</span>
                          <span className="text-white font-bold text-lg drop-shadow-md">Hotovosť ihneď</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/20 backdrop-blur-xl rounded-xl px-6 py-4 shadow-md hover:scale-105 transition-all">
                          <span className="text-yellow-400 text-2xl drop-shadow-lg">✓</span>
                          <span className="text-white font-bold text-lg drop-shadow-md">Aj poškodené</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/20 backdrop-blur-xl rounded-xl px-6 py-4 shadow-md hover:scale-105 transition-all">
                          <span className="text-yellow-400 text-2xl drop-shadow-lg">⚡</span>
                          <span className="text-white font-bold text-lg drop-shadow-md">Do 24h</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/20 backdrop-blur-xl rounded-xl px-6 py-4 shadow-md hover:scale-105 transition-all">
                          <span className="text-yellow-400 text-2xl drop-shadow-lg">🔒</span>
                          <span className="text-white font-bold text-lg drop-shadow-md">Diskrétne</span>
                        </div>
                      </div>

                      <button className="w-full block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 py-5 px-8 rounded-3xl font-black text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all border-2 border-yellow-300/50 drop-shadow-xl">
                        💰 Koľko stojí môj Apple?
                      </button>
                      
                      <p className="text-orange-100 text-base text-center font-semibold mt-6 drop-shadow-md">
                        iPhone MacBook iPad AirPods
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <CookieBanner />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 hover:from-slate-800 hover:via-blue-800 hover:to-indigo-800 text-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl z-50 hover:scale-110 transition-all backdrop-blur-xl border border-white/30 drop-shadow-2xl"
          aria-label="Späť hore"
        >
          <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}
    </>
  );
}
