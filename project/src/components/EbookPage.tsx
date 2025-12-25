import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function EbookPage() {
  return (
    <>
      <Helmet>
        <title>7 Trikov pre váš telefón - Fixanto</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="description" content="Exkluzívny e-book pre registrovaných užívateľov Fixanto." />
        <link rel="canonical" href="https://fixanto.sk/" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .ebook-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .page {
          background: white;
          border-radius: 20px;
          padding: 60px;
          margin-bottom: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        }

        /* COVER PAGE */
        .cover {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
          color: white;
          text-align: center;
          padding: 80px 60px;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cover::before {
          display: none;
        }

        .secret-badge {
          display: inline-block;
          background: rgba(255, 215, 0, 0.15);
          border: 2px solid rgba(255, 215, 0, 0.4);
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          color: #FFD700;
          margin-bottom: 40px;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
        }

        .cover h1 {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 20px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          letter-spacing: -1px;
        }

        .subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 50px;
          font-weight: 500;
        }

        .warning-box {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 16px;
          padding: 30px;
          margin: 40px 0;
        }

        .warning-box p {
          margin: 10px 0;
          font-size: 18px;
        }

        .warning-box p:first-child {
          font-size: 24px;
          font-weight: 700;
        }

        .warning-box p:last-child {
          color: #FFD700;
          font-size: 20px;
          font-weight: 800;
          margin-top: 20px;
        }

        .author {
          margin-top: 60px;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
        }

        .author strong {
          font-size: 20px;
          display: block;
          margin-bottom: 5px;
        }

        /* TYPOGRAPHY */
        h2 {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 30px;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }

        h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #2d3748;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        p {
          margin-bottom: 16px;
          color: #4a5568;
          font-size: 16px;
          line-height: 1.7;
        }

        strong {
          color: #1a1a1a;
          font-weight: 600;
        }

        /* TIP BOXES */
        .tip-box {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 16px;
          padding: 35px;
          margin-bottom: 30px;
          border-left: 5px solid #667eea;
          position: relative;
        }

        .tip-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          font-size: 24px;
          font-weight: 900;
          flex-shrink: 0;
        }

        /* LISTS */
        ul, ol {
          margin: 20px 0;
          padding-left: 25px;
        }

        li {
          margin-bottom: 12px;
          color: #4a5568;
          line-height: 1.7;
        }

        li strong {
          color: #667eea;
        }

        /* ALERT BOXES */
        .warning {
          background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
          border-left: 4px solid #f56565;
          padding: 20px 25px;
          border-radius: 12px;
          margin: 25px 0;
        }

        .warning p {
          color: #742a2a;
          margin: 0;
        }

        .success {
          background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
          border-left: 4px solid #48bb78;
          padding: 20px 25px;
          border-radius: 12px;
          margin: 25px 0;
        }

        .success p {
          color: #22543d;
          margin: 0;
          font-weight: 600;
        }

        /* STATS BOX */
        .stats-box {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 25px;
          margin: 40px 0;
        }

        .stat {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          color: white;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .stat-number {
          display: block;
          font-size: 36px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .stat-label {
          display: block;
          font-size: 14px;
          opacity: 0.9;
          font-weight: 500;
        }

        /* UPSELL */
        .upsell {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          padding: 50px;
          border-radius: 20px;
          margin: 40px 0;
          text-align: center;
        }

        .upsell h2 {
          color: white;
          font-size: 32px;
          margin: 20px 0;
        }

        .upsell .success {
          background: rgba(255, 255, 255, 0.15);
          border-left: 4px solid #FFD700;
          backdrop-filter: blur(10px);
        }

        .upsell .success p,
        .upsell .success ul,
        .upsell .success li {
          color: white;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #1a1a1a;
          padding: 20px 50px;
          border-radius: 50px;
          font-size: 20px;
          font-weight: 800;
          text-decoration: none;
          margin: 30px 0;
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5);
        }

        .contact-box {
          background: rgba(255, 255, 255, 0.15);
          padding: 25px;
          border-radius: 12px;
          margin-top: 30px;
          backdrop-filter: blur(10px);
        }

        .contact-box p {
          color: white;
          margin: 8px 0;
        }

        /* FOOTER */
        .footer {
          text-align: center;
          padding: 40px 0 20px;
        }

        .footer hr {
          border: none;
          border-top: 2px solid #e2e8f0;
          margin: 30px 0;
        }

        .footer p {
          color: #718096;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .page {
            padding: 40px 30px;
            border-radius: 16px;
          }

          .cover {
            padding: 60px 30px;
            min-height: 500px;
          }

          .cover h1 {
            font-size: 32px;
          }

          h2 {
            font-size: 28px;
          }

          h3 {
            font-size: 20px;
          }

          .tip-box {
            padding: 25px;
          }

          .stats-box {
            grid-template-columns: 1fr;
          }

          .upsell {
            padding: 35px 25px;
          }
        }

        /* PRINT STYLES - CRITICAL FOR PDF */
        @media print {
          /* Remove all browser margins and use our own */
          @page {
            margin: 0;
            size: A4 portrait;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            width: 210mm;
            height: 297mm;
          }

          body {
            background: white !important;
          }

          .ebook-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }

          .page {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 15mm 20mm !important;
            page-break-after: always;
            page-break-inside: avoid;
            background: white !important;
            border-radius: 0 !important;
            width: 210mm;
            min-height: 277mm;
            position: relative;
          }

          .page::before {
            display: none !important;
          }

          .page::after {
            display: none !important;
          }

          /* Cover page specific */
          .cover {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%) !important;
            color: white !important;
            padding: 40mm 20mm !important;
          }

          /* Preserve all background colors and gradients */
          .tip-box {
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%) !important;
            page-break-inside: avoid;
          }

          .warning {
            background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%) !important;
            page-break-inside: avoid;
          }

          .success {
            background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%) !important;
            page-break-inside: avoid;
          }

          .stat {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            color: white !important;
          }

          .upsell {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
            color: white !important;
          }

          .warning-box {
            background: rgba(255, 255, 255, 0.2) !important;
            border: 2px solid rgba(255, 215, 0, 0.5) !important;
          }

          .contact-box {
            background: rgba(255, 255, 255, 0.2) !important;
          }

          .secret-badge {
            background: rgba(255, 215, 0, 0.2) !important;
            border: 2px solid rgba(255, 215, 0, 0.5) !important;
          }

          .tip-number {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            color: white !important;
          }

          .cta-button {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%) !important;
            color: #1a1a1a !important;
            text-decoration: none !important;
            display: inline-block !important;
          }

          /* Hide shadows for cleaner print */
          * {
            box-shadow: none !important;
            text-shadow: none !important;
          }

          .cover h1 {
            text-shadow: none !important;
          }

          /* Ensure good text contrast */
          .cover, .cover * {
            color: white !important;
          }

          .upsell, .upsell h2, .upsell p {
            color: white !important;
          }

          /* Better page breaks */
          h2, h3 {
            page-break-after: avoid;
          }

          .tip-box, .warning, .success {
            page-break-inside: avoid;
          }
        }
      `}</style>

      <div className="ebook-container">
        {/* STRANA 1: COVER */}
        <div className="page cover">
          <div className="secret-badge">
            🔒 Tajné informácie servisných technikov
          </div>

          <h1>7 TRIKOV, KTORÉ PREDĹŽIA ŽIVOT TELEFÓNU O 3+ ROKY</h1>
          <p className="subtitle">Informácie, ktoré žiadny konkurenčný servis nechce, aby ste poznali</p>

          <div className="warning-box">
            <p><strong>💡 540+ ľudí už vie:</strong></p>
            <p>Ako ušetriť €100-€500 ročne na opravách a predĺžiť životnosť telefónu bez drahých nákladov.</p>
            <p>NEBUĎTE POSLEDNÝ, KTO TO ZISTÍ.</p>
          </div>

          <p className="author">
            <strong>Štefan Hupčík | Fixanto Servis</strong>
            Certifikovaný technik • 5+ rokov skúseností
          </p>
        </div>

        {/* STRANA 2: INTRO */}
        <div className="page">
          <h2>🔥 Prečo 70% opráv by sa nikdy nemalo stať?</h2>

          <p>Volám sa Štefan a každý deň vidím v servise ten istý scenár: <strong>Ľudia platia stovky eur za opravy, ktorým sa dalo zabrániť.</strong></p>

          <div className="warning">
            <p><strong>Pravda:</strong> Väčšina servisov zarába práve na opravách, ktoré by sa nikdy nemali stať. Prečo by vám radili, ako im predísť?</p>
          </div>

          <p>V tomto e-booku sa s vami delím o know-how z tisícok opráv. <strong>Aplikujte týchto 7 trikov a ušetríte minimálne €200-€500 ročne.</strong></p>
        </div>

        {/* STRANA 3: TIP 1-2 */}
        <div className="page">
          <h2>💡 7 Trikov Servisných Technikov</h2>

          <div className="tip-box">
            <h3><span className="tip-number">1</span> Batéria: Nabíjajte inteligentne</h3>

            <p><strong>Problém:</strong> Batéria drží rok, potom náhle vydrží len 3 hodiny → výmena €70-€90.</p>

            <p><strong>Riešenie (predĺži životnosť batérie o 2x):</strong></p>
            <ul>
              <li><strong>Nabíjajte medzi 20-80%</strong> (nie 0-100%). iPhone: Nastavenia → Batéria → Optimalizované nabíjanie. Android: AccuBattery app</li>
              <li><strong>NIE cez noc!</strong> Telefón "trickle charge" ničí kapacitu o 15-25% rýchlejšie</li>
              <li><strong>Vyhnite sa horúčave</strong> – nabíjanie v aute na slnku (&gt;30°C) = 3x rýchlejšia degradácia</li>
              <li><strong>Používajte originálne nabíjačky</strong> (alebo Anker/Belkin) – lacné z Aliexpress = prepäťové poškodenie</li>
            </ul>

            <div className="success">
              <p><strong>💰 Ušetríte:</strong> €70-€90 každé 2-3 roky + telefón vydrží dlhšie</p>
            </div>
          </div>

          <div className="tip-box">
            <h3><span className="tip-number">2</span> Displej: 3-vrstvová ochrana</h3>

            <p><strong>Problém:</strong> Rozbitý displej = €80-€350 (najčastejšia oprava).</p>

            <p><strong>Riešenie (zníži riziko poškodenia o 90%):</strong></p>
            <ul>
              <li><strong>KVALITNÉ ochranné sklo</strong> (€15-€25) – Spigen, ESR, Nillkin. NIE čínske za €3 – neprenášajú náraz správne</li>
              <li><strong>Obal s "raised edges"</strong> – ochrana pri páde na rovinu (okraje vyčnievajú 1-2mm nad displej)</li>
              <li><strong>Výmena skla každých 6-12 mesiacov</strong> – aj keď nie je viditeľne poškodené, strácalo ochranné vlastnosti</li>
            </ul>

            <div className="warning">
              <p><strong>🚩 Test kvality skla:</strong> Zľahka poklopte prstom – nekvalitné sklo "duní", kvalitné je pevne prilepené bez medzery.</p>
            </div>

            <div className="success">
              <p><strong>💰 Ušetríte:</strong> €80-€350 na výmene displeja</p>
            </div>
          </div>
        </div>

        {/* STRANA 4: TIP 3-4 */}
        <div className="page">
          <div className="tip-box">
            <h3><span className="tip-number">3</span> Konektor: Prach = €80 oprava</h3>

            <p><strong>Problém:</strong> Telefón sa nabíja pomaly/vôbec → myslíte si že konektor/batéria → €40-€90 oprava. <strong>V 60% prípadov je to len prach.</strong></p>

            <p><strong>Riešenie (2 minúty práce):</strong></p>
            <ol>
              <li>Osviťte konektor baterkou – vidíte prach?</li>
              <li><strong>DREVENÝ špáradlo</strong> (NIE kovové špendlíky!) – jemne vyškrabte prach</li>
              <li>Ofúknite alebo vysajte (suchý vysávač na najnižšiu)</li>
              <li>Opakujte každé 2 mesiace</li>
            </ol>

            <div className="warning">
              <p><strong>⚠️ POZOR:</strong> Kovové predmety = skrat a poškodenie kontaktov!</p>
            </div>

            <div className="success">
              <p><strong>💰 Ušetríte:</strong> €40-€90 na výmene konektora + batéria vydrží dlhšie (lepšie nabíjanie)</p>
            </div>
          </div>

          <div className="tip-box">
            <h3><span className="tip-number">4</span> Softvér: 90% problémov vyriešite ZADARMO</h3>

            <p><strong>Problém:</strong> Telefón sa zasekáva/spomaľuje → myslíte si že matičná doska (€150-€300). <strong>V 70% prípadov je to len softvér.</strong></p>

            <p><strong>Vyskúšajte PRED návštevou servisu:</strong></p>
            <ol>
              <li><strong>Vynútený reštart:</strong> iPhone (Vol↑ → Vol↓ → držte Power), Android (Power + Vol↓ 10s)</li>
              <li><strong>Vyčistite úložisko:</strong> Zálohujte fotky do Google Photos/iCloud, vymažte cache (Nastavenia → Úložisko)</li>
              <li><strong>Aktualizujte systém:</strong> iOS/Android updaty opravujú 70% "záhadných" chýb</li>
              <li><strong>Továrne nastavenia</strong> (až ako posledná možnosť – ZÁLOHUJTE DÁTA!)</li>
            </ol>

            <div className="warning">
              <p><strong>🚩 Červená vlajka:</strong> Servis navrhuje výmenu matičnej dosky BEZ diagnostiky? Podozrivé. Vyžiadajte si diagnostický report!</p>
            </div>

            <div className="success">
              <p><strong>💰 Ušetríte:</strong> €80-€300 na zbytočných opravách</p>
            </div>
          </div>
        </div>

        {/* STRANA 5: TIP 5-6 */}
        <div className="page">
          <div className="tip-box">
            <h3><span className="tip-number">5</span> Vlhkosť: Neviditeľný zabijak</h3>

            <p><strong>Problém:</strong> Nejde len o "spadol do vody". Pára z kúpeľne, potenie v lete, kondenzácia = postupné poškodenie (€150-€400).</p>

            <p><strong>Varovné signály:</strong></p>
            <ul>
              <li>Hmla pod kamerou (iPhone častý problém)</li>
              <li>Skreslený zvuk z reproduktora</li>
              <li>Varovanie "Konektor mokrý" aj keď je suchý</li>
            </ul>

            <p><strong>Prevencia:</strong></p>
            <ul>
              <li><strong>NIE do kúpeľne pri sprche</strong> – para prenikne aj cez IP68 (vodotesnosť platí len na čistú vodu, nie paru)</li>
              <li><strong>Nikdy nenabíjajte</strong> ak vidíte varovanie "Liquid detected" – počkajte 3-4 hodiny</li>
              <li>Rosenie (zima→teplo)? Nechajte telefón vypnutý 30 min pred použitím</li>
            </ul>

            <div className="warning">
              <p><strong>⚠️ Mýtus:</strong> "Ryža vysušuje telefón" – NIE! Používajte silikagél (malé vrecúška) alebo ventilátor 24h.</p>
            </div>

            <div className="success">
              <p><strong>💰 Ušetríte:</strong> €150-€400 na opravách po kontakte s vodou</p>
            </div>
          </div>

          <div className="tip-box">
            <h3><span className="tip-number">6</span> Aplikácie: Vyčistite digitálny bordel</h3>

            <p><strong>Problém:</strong> Batéria drží 3 hodiny, telefón sa prehreje → myslíte si batéria/hardvér. <strong>V 50% prípadov sú to "zombie" aplikácie.</strong></p>

            <p><strong>Aplikácie, ktoré vysávajú batériu (vypnite/vymažte):</strong></p>
            <ul>
              <li><strong>Facebook app</strong> – používajte web verziu (3x menšia spotreba)</li>
              <li><strong>Messenger</strong> – konštantne beží v pozadí</li>
              <li><strong>TikTok/Instagram</strong> – auto-play videá aj keď je app v pozadí</li>
              <li><strong>Antivírusy</strong> (na iPhone zbytočné, Android stačí Google Play Protect)</li>
            </ul>

            <p><strong>Kontrola:</strong> Nastavenia → Batéria → Battery Usage. Vidíte appku nad 20%? Vypnite "Background App Refresh".</p>

            <div className="success">
              <p><strong>💰 Ušetríte:</strong> Predĺžite životnosť batérie o 30-50% BEZ výmeny</p>
            </div>
          </div>
        </div>

        {/* STRANA 6: TIP 7 + KEDY DO SERVISU */}
        <div className="page">
          <div className="tip-box">
            <h3><span className="tip-number">7</span> Updaty: Bezpečnosť = dlhšia životnosť</h3>

            <p><strong>Problém:</strong> Ignorujete updaty → malware/spyware → ukradnuté dáta/pomalý telefón → myslíte si že telefón je starý → kupujete nový.</p>

            <p><strong>Riešenie (1x za 2 týždne):</strong></p>
            <ul>
              <li><strong>iOS:</strong> Nastavenia → Všeobecné → Aktualizácia softvéru</li>
              <li><strong>Android:</strong> Nastavenia → Systém → Aktualizácia systému</li>
              <li><strong>Aplikácie:</strong> Zapnite auto-update (Google Play / App Store)</li>
            </ul>

            <div className="success">
              <p><strong>💰 Ušetríte:</strong> Predĺžite životnosť telefónu o 1-2 roky + bezpečnosť dát</p>
            </div>
          </div>

          <h2>📌 Kedy NAOZAJ potrebujete servis?</h2>

          <div className="warning">
            <p><strong>ÁNO, choďte do servisu:</strong></p>
            <ul>
              <li>Batéria &lt;50% kapacity (Settings → Battery Health)</li>
              <li>Fyzické poškodenie (praskliny, mrtvé pixely)</li>
              <li>Prehrievanie nad 45°C bez záťaže</li>
              <li>Mechanické poškodenie (pád do vody, rozbitý konektor)</li>
            </ul>
          </div>

          <div className="success">
            <p><strong>NIE, skúste najprv vyššie tipy:</strong></p>
            <ul>
              <li>Telefón len spomalil</li>
              <li>Aplikácie crashujú</li>
              <li>Slabý signál (98% = problém operátora)</li>
              <li>Rýchle vybíjanie (najprv vypnite background apps)</li>
            </ul>
          </div>
        </div>

        {/* STRANA 7: ZHRNUTIE + PONUKA */}
        <div className="page">
          <h2>🎯 Zhrnutie: Koľko ušetríte?</h2>

          <div className="stats-box">
            <div className="stat">
              <span className="stat-number">€300-€500</span>
              <span className="stat-label">ročne na opravách</span>
            </div>
            <div className="stat">
              <span className="stat-number">2-3 roky</span>
              <span className="stat-label">dlhšia životnosť telefónu</span>
            </div>
            <div className="stat">
              <span className="stat-number">7 trikov</span>
              <span className="stat-label">ktoré môžete použiť DNES</span>
            </div>
          </div>

          <h2>💬 Zdieľajte tieto informácie!</h2>

          <p>Pomohli vám tieto tipy? <strong>Zdieľajte tento odkaz s priateľmi a rodinou.</strong> Pomôžete im ušetriť stovky eur.</p>

          <div className="upsell">
            <div className="secret-badge">
              🎁 BONUS pre čitateľov e-booku
            </div>

            <h2>KOMPLETNÁ DIAGNOSTIKA + ČISTENIE</h2>

            <p style={{fontSize: '2.5em', margin: '20px 0', fontWeight: '900', color: '#FFD700'}}>
              LEN €15
            </p>
            <p style={{fontSize: '1.2em', marginBottom: '20px', opacity: 0.9}}>
              (Bežná cena: €30 | Ušetríte 50%)
            </p>

            <div className="success">
              <p><strong>✅ Čo zahŕňa:</strong></p>
              <ul style={{textAlign: 'left', maxWidth: '500px', margin: '20px auto'}}>
                <li>Kontrola stavu batérie (kapacita, cykly nabíjania)</li>
                <li>Profesionálne čistenie konektora ultrazvukom</li>
                <li>Test nabíjania a reproduktorov</li>
                <li>Kontrola displejových pixelov</li>
                <li>Odborné odporúčanie (oprava áno/nie?)</li>
              </ul>
            </div>

            <p style={{fontSize: '1.2em', marginTop: '25px', fontWeight: '600'}}>
              Trvanie: 15-20 minút | Záruka: 30 dní
            </p>

            <a href="https://fixanto.sk/kontakt" className="cta-button">
              📅 OBJEDNAŤ ZA €15
            </a>

            <p style={{fontSize: '1.1em', color: '#FFD700', marginTop: '20px', fontWeight: '600'}}>
              ⏰ Ponuka platí 30 dní od stiahnutia e-booku
            </p>

            <div className="contact-box">
              <p><strong>📍 FIXANTO Servis</strong></p>
              <p>Dolná Súča 877, 913 26</p>
              <p><strong>📞 0949 344 600</strong></p>
              <p>⏰ Po-Pia 9:00-17:00 | So 9:00-12:00</p>
            </div>
          </div>

          <div className="footer">
            <p><strong>S pozdravom,</strong></p>
            <p style={{fontSize: '1.3em', margin: '15px 0', color: '#1a1a1a'}}><strong>Štefan Hupčík | Fixanto Servis</strong></p>
            <p style={{fontStyle: 'italic'}}>"Férové ceny = spokojní zákazníci"</p>
            <p style={{marginTop: '25px', fontSize: '0.95em'}}>
              <strong>P.S.</strong> Diagnostika za €15 platí len 30 dní – využite ju kým je čas! ⏳
            </p>

            <hr />

            <p style={{fontSize: '0.85em'}}>
              © 2025 Fixanto - Servis mobilov<br/>
              Dolná Súča 877, 913 26 | 📞 0949 344 600<br/>
              E-book len na osobné použitie. Všetky práva vyhradené.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}