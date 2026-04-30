import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Panificio a Mattra",
  description: "Informativa sui cookie del sito Panificio a Mattra. Scopri come utilizziamo i cookie.",
};

export default function Cookie() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-8">
          Cookie Policy
        </h1>
        <p className="text-brown/60 mb-12">Ultimo aggiornamento: Gennaio 2025</p>

        <div className="prose prose-lg max-w-none text-brown/80">
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo
              quando visiti un sito web. Vengono utilizzati per migliorare l&apos;esperienza di
              navigazione e per raccogliere informazioni sull&apos;utilizzo del sito.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">Tipi di Cookie Utilizzati</h2>

            <h3 className="font-serif text-xl font-semibold text-brown mt-6 mb-3">Cookie Tecnici</h3>
            <p className="mb-4">
              Sono necessari per il corretto funzionamento del sito e non possono essere disattivati.
              Includono cookie di sessione e cookie per le preferenze dell&apos;utente.
            </p>

            <h3 className="font-serif text-xl font-semibold text-brown mt-6 mb-3">Cookie Analitici</h3>
            <p className="mb-4">
              Ci aiutano a capire come i visitatori interagiscono con il sito, raccogliendo
              informazioni in forma anonima. Utilizziamo questi dati per migliorare il sito.
            </p>

            <h3 className="font-serif text-xl font-semibold text-brown mt-6 mb-3">Cookie di Terze Parti</h3>
            <p>
              Alcuni cookie sono impostati da servizi di terze parti che appaiono sulle nostre
              pagine, come i pulsanti di condivisione social o le mappe integrate.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">Gestione dei Cookie</h2>
            <p className="mb-4">
              Puoi gestire le tue preferenze sui cookie in qualsiasi momento attraverso le
              impostazioni del tuo browser. Ecco come fare nei browser pi comuni:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Impostazioni &gt; Privacy e sicurezza &gt; Cookie</li>
              <li><strong>Firefox:</strong> Opzioni &gt; Privacy e sicurezza &gt; Cookie</li>
              <li><strong>Safari:</strong> Preferenze &gt; Privacy &gt; Cookie</li>
              <li><strong>Edge:</strong> Impostazioni &gt; Privacy &gt; Cookie</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">Cookie Utilizzati su Questo Sito</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-brown/10">
                    <th className="text-left py-3 px-4 font-semibold text-brown">Nome</th>
                    <th className="text-left py-3 px-4 font-semibold text-brown">Tipo</th>
                    <th className="text-left py-3 px-4 font-semibold text-brown">Durata</th>
                    <th className="text-left py-3 px-4 font-semibold text-brown">Finalit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brown/5">
                    <td className="py-3 px-4">session_id</td>
                    <td className="py-3 px-4">Tecnico</td>
                    <td className="py-3 px-4">Sessione</td>
                    <td className="py-3 px-4">Gestione sessione utente</td>
                  </tr>
                  <tr className="border-b border-brown/5">
                    <td className="py-3 px-4">cookie_consent</td>
                    <td className="py-3 px-4">Tecnico</td>
                    <td className="py-3 px-4">1 anno</td>
                    <td className="py-3 px-4">Memorizza preferenze cookie</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">_ga</td>
                    <td className="py-3 px-4">Analitico</td>
                    <td className="py-3 px-4">2 anni</td>
                    <td className="py-3 px-4">Google Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">Contatti</h2>
            <p>
              Per ulteriori informazioni sulla nostra Cookie Policy, contattaci all&apos;indirizzo:{" "}
              <a href="mailto:privacy@panemattrasau.it" className="text-terracotta hover:underline">
                privacy@panemattrasau.it
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
