import Testimonial from "@/components/Testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dicono di Noi | Panificio a Mattra",
  description: "Scopri cosa dicono i nostri clienti del Pane Mattrasau. Recensioni e testimonianze di chi ha scelto la qualit artigianale del Panificio a Mattra.",
};

const testimonials = [
  {
    quote: "Ho scoperto il Pane Mattrasau durante una vacanza in Calabria e da allora non posso pi farne a meno. La croccantezza e il sapore sono unici, impossibili da trovare altrove.",
    author: "Marco B.",
    location: "Milano",
  },
  {
    quote: "Finalmente un pane che si conserva a lungo senza perdere la sua bont! Perfetto con i formaggi calabresi, ma anche da solo  una delizia.",
    author: "Giulia R.",
    location: "Roma",
  },
  {
    quote: "Da quando ho problemi di digestione, ho provato tanti tipi di pane. Il Mattrasau  l'unico che riesco a mangiare senza problemi grazie alla lievitazione naturale.",
    author: "Antonio P.",
    location: "Napoli",
  },
  {
    quote: "Ordino regolarmente online e il pane arriva sempre in perfette condizioni. La qualit  sempre costante, segno di grande professionalit.",
    author: "Francesca M.",
    location: "Firenze",
  },
  {
    quote: "Il sapore dei grani antichi si sente eccome! Un prodotto autentico che mi riporta ai sapori della mia infanzia in Calabria.",
    author: "Giuseppe L.",
    location: "Bologna",
  },
  {
    quote: "Ho portato il Pane Mattrasau a una cena con amici e  stato un successo incredibile. Tutti hanno chiesto dove poterlo acquistare!",
    author: "Chiara S.",
    location: "Torino",
  },
  {
    quote: "Come chef, apprezzo particolarmente la versatilit di questo pane. Lo uso per le mie bruschette gourmet e i clienti lo adorano.",
    author: "Chef Roberto V.",
    location: "Cosenza",
  },
  {
    quote: "La tradizione calabrese incontra la qualit moderna. Il Panificio a Mattra  un'eccellenza del nostro territorio che merita di essere conosciuta.",
    author: "Maria T.",
    location: "Santa Domenica Talao",
  },
];

const pressFeatures = [
  {
    source: "Gambero Rosso",
    quote: "Un esempio virtuoso di come la tradizione possa essere preservata e valorizzata.",
  },
  {
    source: "Slow Food",
    quote: "Presidio del gusto autentico calabrese, il Pane Mattrasau rappresenta l'eccellenza artigianale.",
  },
  {
    source: "La Repubblica",
    quote: "Tra i pani pi particolari d'Italia, una fusione unica di culture mediterranee.",
  },
];

export default function DiconoDiNoi() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Testimonial</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown mt-4 mb-6">
              Dicono di noi
            </h1>
            <p className="text-brown/70 text-xl leading-relaxed">
              Le parole dei nostri clienti sono la nostra pi grande soddisfazione.
              Scopri cosa pensano del Pane Mattrasau.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brown text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-5xl font-bold text-wheat mb-2">40+</div>
              <p className="text-cream/70">Anni di attivit</p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-wheat mb-2">10k+</div>
              <p className="text-cream/70">Clienti soddisfatti</p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-wheat mb-2">4.9</div>
              <p className="text-cream/70">Valutazione media</p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-wheat mb-2">100%</div>
              <p className="text-cream/70">Ingredienti naturali</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Rassegna Stampa</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4">
              Parlano di noi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pressFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center">
                <h3 className="font-serif text-xl font-bold text-terracotta mb-4">{feature.source}</h3>
                <p className="text-brown/70 italic">&ldquo;{feature.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-brown mb-6">
            Hai gi provato il nostro pane?
          </h2>
          <p className="text-brown/70 text-lg mb-10">
            Condividi la tua esperienza con noi! La tua opinione  preziosa.
          </p>
          <a
            href="mailto:info@panemattrasau.it?subject=La%20mia%20recensione"
            className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-cream rounded-full font-semibold hover:bg-brown transition-colors"
          >
            Lascia una Recensione
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
