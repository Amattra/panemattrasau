import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Il Panificio | A Mattra",
  description: "Il Panificio A Mattra nasce a Santa Domenica di Talao, piccolo borgo calabrese nel Parco Nazionale del Pollino. Artigianalità, ricerca e innovazione mediterranea.",
};

const values = [
  {
    title: "Artigianalità",
    description: "Ogni impasto nasce dalla conoscenza artigianale tramandata nel tempo, con uno sguardo sempre rivolto al futuro.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Ricerca",
    description: "Continua ricerca di materie prime di qualità e grani locali antichi macinati a pietra per prodotti gustosi e salutari.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Innovazione mediterranea",
    description: "Tecniche di panificazione mediterranea reinterpretate attraverso l'esperienza artigianale per creare prodotti adatti alle esigenze moderne.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function IlPanificio() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Il Panificio</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown mt-4 mb-6">
              A Mattra
            </h1>
            <p className="text-brown/70 text-xl leading-relaxed">
              Dove il pane è cultura, rito e condivisione.
            </p>
          </div>
        </div>
      </section>

      {/* Storia */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brown mb-6">
                Un nome, una storia
              </h2>
              <div className="space-y-6 text-brown/70 text-lg leading-relaxed">
                <p>
                  Il Panificio A Mattra nasce a <strong className="text-brown">Santa Domenica di Talao</strong>, piccolo borgo calabrese situato nel Parco Nazionale del Pollino dove il pane è cultura, rito e condivisione.
                </p>
                <p>
                  La <strong className="text-brown">Mattra</strong> è la parola che in dialetto locale indica l&apos;antico contenitore in cui si impastava manualmente il pane; nome perfetto per un panificio in cui ogni impasto nasce dalla conoscenza artigianale tramandata nel tempo, ma con uno sguardo sempre rivolto al futuro.
                </p>
                <p>Il panificio A Mattra infatti unisce:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                    artigianalità
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                    ricerca
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                    innovazione mediterranea
                  </li>
                </ul>
                <p>
                  A Mattra srl è impegnata nella continua ricerca di materie prime di qualità e grani locali antichi macinati a pietra che assicurano la realizzazione di prodotti gustosi e salutari. Segue un sistema produttivo che assicura standard di qualità. Il panificio artigianale, sviluppando una profonda curiosità nella riscoperta di antiche materie prime e tecniche di lavorazione, è specializzato nella produzione del <strong className="text-brown">Pane Mattrasau</strong>, risultato di anni di sperimentazione che ha unito la ricerca sui grani antichi e con l&apos;applicazione delle tecniche tradizionali mediterranee per la creazione di un prodotto adatto alle esigenze moderne.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero/chi-siamo.jpg"
                  alt="Panificio a Mattra - Il laboratorio"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-brown/5 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">La Nostra Identità</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4">
              Il Panificio A Mattra unisce
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-brown mb-3">{value.title}</h3>
                <p className="text-brown/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-brown text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-wheat font-medium tracking-wider uppercase text-sm">Dove Siamo</span>
              <h2 className="font-serif text-4xl font-bold mt-4 mb-6">
                Nel cuore del Pollino
              </h2>
              <p className="text-cream/80 text-lg leading-relaxed mb-8">
                Il nostro panificio si trova a Santa Domenica di Talao, piccolo borgo calabrese
                situato nel Parco Nazionale del Pollino. Un luogo dove la natura incontaminata
                e le tradizioni secolari si fondono per creare prodotti unici.
              </p>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-lg">Via Piano, 15</p>
                  <p className="text-cream/70">87020 Santa Domenica Talao (CS)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
