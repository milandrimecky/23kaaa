import { Link } from 'react-router-dom';

const benefits = [
  {
    emoji: '⚡',
    title: 'Rýchla oprava',
    description: 'Väčšina opráv v ten istý deň, displej za 1–2 hodiny.',
  },
  {
    emoji: '🛡️',
    title: '2 roky záruka',
    description: '2 roky na diely, 3 mesiace na prácu.',
  },
  {
    emoji: '📱',
    title: 'Náhradný telefón',
    description: 'Telefón zadarmo počas opravy.',
  },
  {
    emoji: '🍎',
    title: 'Výkup Apple',
    description: 'Vykúpime iPhone, MacBook, iPad, Apple Watch.',
    link: '/vykup-apple',
  },
];

export default function Benefits() {
  return (
    <section id="vyhody" className="py-14 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nadpis – krátky */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Prečo Fixanto?
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Rýchly servis mobilov a elektroniky v Trenčíne – opravy, záruka a výkup Apple zariadení.
          </p>
        </div>

        {/* 4 benefity – veľmi jednoduché, mobile friendly */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {benefits.map((benefit, index) => {
            const content = (
              <>
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <span className="text-3xl sm:text-4xl">{benefit.emoji}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 text-center">
                  {benefit.title}
                </h3>
                <p className="text-[11px] sm:text-sm text-gray-600 leading-snug text-center">
                  {benefit.description}
                </p>
              </>
            );

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-4 shadow-md transition-all duration-300 transform 
                           hover:-translate-y-1 hover:shadow-xl hover:scale-105 flex flex-col justify-between"
              >
                {benefit.link ? (
                  <Link to={benefit.link} className="block h-full">
                    {content}
                    <div className="mt-2 text-center text-[11px] sm:text-xs text-blue-700 font-semibold">
                      Zistiť viac →
                    </div>
                  </Link>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
