import { MessageCircle, CheckCircle, Gift } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* NADPIS */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ako prebieha oprava a cenník
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* ZELENÝ BANNER – DIAGNOSTIKA */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-2xl p-6 sm:p-8 text-white text-center transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Gift className="w-9 h-9 text-yellow-300" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-3">
              Diagnostika ZADARMO pri oprave
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-3">
              Po diagnostike vám povieme cenu a vy sa rozhodnete.
              Ak sa rozhodnete pre opravu u nás, diagnostiku neplatíte –
              platíte <strong>iba za opravu</strong>.
            </p>

            <div className="mt-2 inline-flex items-center gap-3 bg-white/15 rounded-xl px-4 py-2">
              <div className="flex items-center justify-center w-8 h-8 bg-white text-green-600 rounded-lg">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xs sm:text-sm">Férové ceny</div>
              </div>
            </div>
          </div>

          <p className="text-center text-[11px] sm:text-xs text-gray-500 mt-2">
            💡 Ak sa rozhodnete neopravovať, diagnostika stojí 15 € za náš čas a prácu.
          </p>
        </div>

        {/* VARIANT A – 2 KROKY, KOMPAKTNÉ AJ NA MOBILE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* KROK 1 */}
          <div className="bg-white rounded-2xl shadow-lg px-4 py-5 text-center flex items-center sm:items-start sm:text-left gap-3 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full">
              <span className="font-bold text-sm">1</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <MessageCircle className="w-4 h-4 text-blue-600" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  Napíšte alebo zavolajte
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-snug">
                WhatsApp, Facebook alebo telefonicky.
              </p>
            </div>
          </div>

          {/* KROK 2 */}
          <div className="bg-white rounded-2xl shadow-lg px-4 py-5 text-center flex items-center sm:items-start sm:text-left gap-3 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full">
              <span className="font-bold text-sm">2</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  Dohodneme opravu
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-snug">
                Povieme orientačnú cenu a termín. Zariadenie prinesiete,
                vyzdvihneme alebo pošlete.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/421949344600"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:bg-blue-700 transition transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Napíšte nám na WhatsApp
          </a>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Odpovieme čo najskôr a dohodneme ďalší postup.
          </p>
        </div>

      </div>
    </section>
  );
}
