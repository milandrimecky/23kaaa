import { Link } from 'react-router-dom';
import { ChevronDown, Download, Shield, Zap } from 'lucide-react';
import foto from '../assets/images/foto.png';

export default function Tipy() {
  const scrollToForm = () => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="tipy"
      className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden"
      aria-labelledby="tipy-heading"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* HERO SEKCIA */}
        <div className="text-center text-white mb-12 max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 border-2 border-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl mb-6 group hover:scale-105 transition-all duration-300">
            <span className="text-3xl group-hover:scale-110 transition-transform">📱</span>
            <span className="text-base sm:text-lg text-blue-50 font-semibold tracking-wide">
              Exkluzívne tajomstvá servisných majstrov
            </span>
          </div>

          {/* Headline */}
          <h2 id="tipy-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              7 TRIKOV
            </span>
            <br />
            <span className="text-white">SERVISNÝCH TECHNIKOV</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-6 leading-relaxed">
            Tajomstvá, ktoré vám môžu{' '}
            <span className="font-bold text-yellow-300 text-2xl sm:text-3xl">UŠETRIŤ STOVKY EUR</span>
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="group bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 hover:from-yellow-500 hover:via-orange-500 hover:to-red-600 text-slate-900 font-black text-base sm:text-lg py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Získať 7 trikov ZADARMO
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* GRID - ČO ZÍSKATE + FORM */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* ĽAVÁ STRANA - Obsah */}
          <div className="text-white space-y-6">
            
            {/* Čo získate v e-booku */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-200/30 hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 text-yellow-300">
                Čo získate v tomto e-booku?
              </h3>
              
              <p className="text-xl sm:text-2xl font-black mb-4 leading-tight">
                "Informácie, ktoré žiadny servis nechce, aby ste poznali"
              </p>
              
              <p className="text-base sm:text-lg mb-5 leading-relaxed">
                Tento guide vám dáva všetky <strong className="text-yellow-300">POSTUPY a NÁSTROJE</strong> na ochranu telefónu. Krátka ochutnávka:
              </p>

              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="text-lg font-black text-blue-300">✓</span>
                  <span className="text-sm sm:text-base">Najčastejšia zbytočná oprava - vyriešite za 3 minúty</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="text-lg font-black text-blue-300">✓</span>
                  <span className="text-sm sm:text-base">Batéria vydrží 2x dlhšie jednoduchou zmenou</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="text-lg font-black text-blue-300">✓</span>
                  <span className="text-sm sm:text-base">70% "porúch" nie je vôbec porucha</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="text-lg font-black text-blue-300">✓</span>
                  <span className="text-sm sm:text-base">Prečo sa pokazí aj vodoodolný telefón</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-lg border border-yellow-400/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="text-lg font-black text-yellow-400">⚡</span>
                  <span className="text-sm sm:text-base font-bold">TAJOMSTVO KONEKTORA - prečo nabíja 5h namiesto 2h?</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/80 to-teal-600/80 rounded-xl p-4 hover:scale-105 transition-all duration-300">
                <p className="font-black text-lg mb-2">Praktické rady pre každého</p>
                <p className="text-sm leading-relaxed">
                  Ušetria vám zbytočné <span className="text-yellow-300 font-black">desiatky až stovky eur</span> na opravách.
                </p>
              </div>
            </div>

            {/* Prečo ja? */}
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl sm:text-2xl font-black mb-3">Prečo Vás to učím práve ja?</h3>
              
              <p className="text-sm italic text-blue-200 mb-3">
                Neučte sa opravovať mobily od niekoho, kto sa telefónu dotkol len raz…
              </p>

              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  Ahoj, volám sa <strong className="text-yellow-300">Štefan Hupčík</strong>. Som zakladateľ servisu Fixanto. Vybudoval som servis, ktorý denne rieši desiatky problémov s mobilmi, TV a elektronikou.
                </p>
                <p>
                  Testoval som desiatky zariadení a vytvoril som <strong>systém preventívnej údržby</strong>.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-4 mt-4 hover:scale-105 transition-all duration-300">
                <p className="font-black text-lg mb-2">7 trikov = koniec zbytočných opráv</p>
                <p className="text-sm">Väčšina ľudí zaplatí za problém ktorý by vyriešili za 5 minút. Vy nie.</p>
              </div>
            </div>

            {/* FOTKA VO ŠTVORCI - VÄČŠIA */}
            <div className="flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-110 group-hover:border-yellow-400 p-3">
                  <img 
                    src={foto} 
                    alt="Štefan Hupčík - Fixanto" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* PRAVÁ STRANA - FORM + VÝKUP */}
          <div id="form-section" className="space-y-6">

            {/* CTA Box */}
            <div className="bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">👇</span>
                <div>
                  <p className="font-black text-xl text-yellow-300 mb-2">
                    Vyplň formulár nižšie ↓
                  </p>
                  <p className="text-base">Triky prídú na tvoj email do 60 sekúnd</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center p-3 bg-white/20 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                  <span className="font-bold text-sm">60 sekúnd</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white/20 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Shield className="w-8 h-8 text-yellow-400 mb-2" />
                  <span className="font-bold text-sm">Bez spamu</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white/20 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-2xl mb-2">✓</span>
                  <span className="font-bold text-sm">1 klik</span>
                </div>
              </div>

              <div className="bg-purple-600/60 rounded-xl p-4 mt-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                  <span className="text-2xl">🛡️</span> 100% GARANCIA
                </p>
                <p className="text-sm">Nie si spokojný? Odhlás sa jedným klikom. <strong>Nič nestratíš!</strong></p>
              </div>

              <p className="text-xs text-center mt-3">
                <Link to="/ochrana-osobnych-udajov" className="underline hover:text-yellow-300">
                  Ochrana osobných údajov →
                </Link>
              </p>
            </div>

            {/* Formulár - ZVÝŠENÁ VÝŠKA */}
            <div className="bg-white rounded-2xl shadow-2xl relative overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-2xl text-sm font-black shadow-xl z-10">
                🔓 Odomkni 7 trikov zadarmo
              </div>
              
              <div className="pt-8 pb-3 px-3 bg-gradient-to-br from-blue-50 via-white to-emerald-50/50 rounded-2xl">
                <iframe
                  src="https://preview.mailerlite.io/forms/1953614/172475491924575429/share"
                  width="100%"
                  height="750"
                  frameBorder="0"
                  style={{ border: 'none', display: 'block', minHeight: '750px' }}
                  title="E-book formulár"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Výkup Apple */}
            <Link
              to="/vykup-apple"
              className="block bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl overflow-hidden relative hover:shadow-2xl transition-all hover:scale-105 duration-300"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-4 text-5xl animate-pulse">🍎</div>
                <div className="absolute bottom-2 left-4 text-5xl animate-pulse" style={{ animationDelay: '1s' }}>🍎</div>
              </div>

              <div className="relative p-5 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-3">
                  <span className="text-yellow-400 text-lg">💰</span>
                  <span className="text-xs font-bold uppercase">Férové výkupné ceny</span>
                </div>

                <h3 className="font-black text-lg mb-2 leading-tight">
                  Prečo hádzať prachy do koša? Váš starý iPhone má hodnotu!
                </h3>

                <p className="text-orange-100 text-sm mb-4">
                  Vykúpime aj rozbité Apple zariadenia. <strong>Hotovosť OKAMŽITE!</strong>
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-yellow-400">💰</span>
                    <span className="text-xs font-bold">Hotovosť ihneď</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-yellow-400">✓</span>
                    <span className="text-xs font-bold">Aj poškodené</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-yellow-400">⚡</span>
                    <span className="text-xs font-bold">Do 24h</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-yellow-400">🔒</span>
                    <span className="text-xs font-bold">Diskrétne</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 py-3 px-6 rounded-xl font-black text-base text-center">
                  💰 Koľko stojí môj Apple?
                </div>
                
                <p className="text-orange-100 text-xs text-center mt-3">
                  iPhone MacBook iPad AirPods
                </p>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
