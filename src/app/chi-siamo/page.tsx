import TeamMember from "@/components/TeamMember";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo | Panificio a Mattra",
  description: "Scopri la storia del Panificio a Mattra e del Pane Mattrasau. Dal 1980 a Santa Domenica Talao, una tradizione che unisce culture araba, sarda e calabrese.",
};

const teamMembers = [
  {
    name: "Salvatore",
    role: "Amministrazione",
    description: "Gestione degli impianti e coordinamento delle attivit aziendali.",
    image: "/images/team/salvatore-admin.jpg",
  },
  {
    name: "Michela",
    role: "Vendite",
    description: "Responsabile del punto vendita di San Nicola Arcella.",
    image: "/images/team/michela.jpg",
  },
  {
    name: "Iolanda",
    role: "Controllo Qualit",
    description: "Supervisione amministrativa e controllo qualit dei prodotti.",
    image: "/images/team/iolanda.jpg",
  },
  {
    name: "Salvatore",
    role: "Produzione",
    description: "Maestro fornaio, responsabile della produzione artigianale.",
    image: "/images/team/salvatore-prod.jpg",
  },
  {
    name: "Ornella",
    role: "Marketing",
    description: "Gestione marketing, comunicazione e vendite.",
    image: "/images/team/ornella.jpg",
  },
];

const values = [
  {
    title: "Tradizione",
    description: "Rispettiamo e preserviamo le tecniche artigianali tramandate di generazione in generazione.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Qualit",
    description: "Selezioniamo solo le migliori materie prime e controlliamo ogni fase della produzione.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Passione",
    description: "Ogni pane che produciamo  il risultato dell'amore per il nostro lavoro e il nostro territorio.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Innovazione",
    description: "Uniamo la tradizione all'innovazione per offrire prodotti unici e di alta qualit.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function ChiSiamo() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Chi Siamo</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown mt-4 mb-6">
              La nostra storia
            </h1>
            <p className="text-brown/70 text-xl leading-relaxed">
              Dal 1980, il Panificio a Mattra porta avanti una tradizione unica nel cuore
              della Calabria, a Santa Domenica Talao.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brown mb-6">
                Una fusione di culture mediterranee
              </h2>
              <div className="space-y-6 text-brown/70 text-lg leading-relaxed">
                <p>
                  Il <strong className="text-brown">Pane Mattrasau</strong>  un prodotto unico al mondo,
                  nato dalla fusione di tre grandi tradizioni del Mediterraneo: quella araba, quella sarda
                  e quella calabrese.
                </p>
                <p>
                  Ispirato al pane arabo per la sua leggerezza e croccantezza, realizzato seguendo le
                  rigorose procedure del pane sardo per garantire una perfetta conservazione, e arricchito
                  con gli elementi distintivi della tradizione calabrese.
                </p>
                <p>
                  Il risultato  un pane straordinario: <strong className="text-brown">croccante</strong>,
                  <strong className="text-brown"> aromatico</strong> e <strong className="text-brown">altamente
                  digeribile</strong>, grazie all'utilizzo di grani antichi del Mediterraneo e a un processo
                  di lievitazione naturale che dura oltre 24 ore.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero/chi-siamo.jpg"
                  alt="Panificio a Mattra - Il nostro laboratorio"
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
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">I Nostri Valori</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4">
              Cosa ci guida
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Il Nostro Team</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4 mb-6">
              Le persone dietro il pane
            </h2>
            <p className="max-w-2xl mx-auto text-brown/70 text-lg">
              Un team affiatato di professionisti che condivide la stessa passione
              per la qualit e la tradizione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
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
                Nel cuore della Calabria
              </h2>
              <p className="text-cream/80 text-lg leading-relaxed mb-8">
                Il nostro panificio si trova a Santa Domenica Talao, un piccolo comune
                in provincia di Cosenza, circondato dalle montagne del Pollino e
                affacciato sul Mar Tirreno. Un luogo dove la natura incontaminata
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
            <div className="aspect-video rounded-2xl bg-cream/10 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto text-cream/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-cream/50">Mappa interattiva</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
