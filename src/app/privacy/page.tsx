import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Panificio a Mattra",
  description: "Informativa sulla privacy del Panificio a Mattra. Come trattiamo i tuoi dati personali.",
};

export default function Privacy() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-8">
          Privacy Policy
        </h1>
        <p className="text-brown/60 mb-12">Ultimo aggiornamento: Gennaio 2025</p>

        <div className="prose prose-lg max-w-none text-brown/80">
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">1. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento dei dati  Panificio a Mattra, con sede in Via Piano 15,
              87020 Santa Domenica Talao (CS), P.IVA 02867750784.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">2. Dati Raccolti</h2>
            <p className="mb-4">Raccogliamo i seguenti tipi di dati personali:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dati di navigazione (indirizzo IP, browser, sistema operativo)</li>
              <li>Dati forniti volontariamente (nome, email, telefono tramite modulo di contatto)</li>
              <li>Cookie tecnici e di terze parti</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">3. Finalit del Trattamento</h2>
            <p className="mb-4">I dati vengono trattati per le seguenti finalit:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rispondere alle richieste inviate tramite il modulo di contatto</li>
              <li>Migliorare la navigazione e l&apos;esperienza utente sul sito</li>
              <li>Adempiere ad obblighi di legge</li>
              <li>Analisi statistiche anonime</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">4. Base Giuridica</h2>
            <p>
              Il trattamento dei dati si basa sul consenso dell&apos;interessato e/o sull&apos;esecuzione
              di misure precontrattuali adottate su richiesta dello stesso.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">5. Conservazione dei Dati</h2>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario a conseguire
              gli scopi per cui sono stati raccolti e comunque non oltre i termini di legge.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">6. Diritti dell&apos;Interessato</h2>
            <p className="mb-4">L&apos;interessato ha diritto di:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accedere ai propri dati personali</li>
              <li>Chiederne la rettifica o la cancellazione</li>
              <li>Opporsi al trattamento</li>
              <li>Chiedere la limitazione del trattamento</li>
              <li>Richiedere la portabilit dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-brown mb-4">7. Contatti</h2>
            <p>
              Per esercitare i propri diritti o per qualsiasi informazione relativa al trattamento
              dei dati personali,  possibile contattarci all&apos;indirizzo email:{" "}
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
