import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prodotti | Panificio a Mattra",
  description: "Scopri tutti i prodotti del Panificio a Mattra: Pane Mattrasau classico, mais, farro, curcuma, cereali e altre specialit artigianali calabresi.",
};

const mattrasauProducts = [
  {
    name: "Pane Mattrasau",
    description: "Il nostro prodotto iconico: croccante, aromatico e altamente digeribile. Realizzato con grani antichi del Mediterraneo e lievitazione naturale.",
    features: ["Lievitazione 24 ore", "Grani antichi", "Senza conservanti"],
    image: "/images/products/classico.jpg",
  },
  {
    name: "Mattrasau al Mais",
    description: "La dolcezza naturale del mais si fonde con la croccantezza del Mattrasau. Un gusto delicato e avvolgente.",
    features: ["Farina di mais", "Colore dorato", "Gusto delicato"],
    image: "/images/products/mais.jpg",
  },
  {
    name: "Mattrasau al Farro",
    description: "Arricchito con farina di farro, cereale antico dalle eccezionali propriet nutritive.",
    features: ["Farro biologico", "Ricco di nutrienti", "Sapore rustico"],
    image: "/images/products/farro.jpg",
  },
  {
    name: "Mattrasau alla Curcuma",
    description: "Il colore dorato e le propriet benefiche della curcuma in un pane dal gusto speziato e originale.",
    features: ["Curcuma naturale", "Propriet antiossidanti", "Colore brillante"],
    image: "/images/products/curcuma.jpg",
  },
  {
    name: "Mattrasau Etnico",
    description: "Un mix di spezie e aromi che richiamano le tradizioni culinarie del Mediterraneo orientale.",
    features: ["Mix di spezie", "Aroma intenso", "Gusto esotico"],
    image: "/images/products/etnico.jpg",
  },
  {
    name: "Mattrasau alla Soia",
    description: "Arricchito con farina di soia per un apporto proteico extra. Ideale per chi cerca un'alimentazione bilanciata.",
    features: ["Proteine vegetali", "Alta digeribilit", "Gusto equilibrato"],
    image: "/images/products/soia.jpg",
  },
  {
    name: "Mattrasau ai Cereali",
    description: "Un mix selezionato di cereali per un sapore unico e una texture irresistibile.",
    features: ["Mix 5 cereali", "Croccantezza extra", "Gusto intenso"],
    image: "/images/products/cereali.jpg",
  },
];


const processSteps = [
  "Selezione delle farine da grani antichi",
  "Preparazione del lievito madre",
  "Prima impastatura a mano",
  "Riposo dell'impasto (4 ore)",
  "Seconda impastatura",
  "Porzionatura manuale",
  "Formatura delle sfoglie",
  "Lievitazione naturale (12 ore)",
  "Stesura finale",
  "Prima cottura",
  "Separazione delle sfoglie",
  "Seconda cottura e doratura",
];

export default function Prodotti() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">I Nostri Prodotti</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown mt-4 mb-6">
              Pane Mattrasau
            </h1>
            <p className="text-brown/70 text-xl leading-relaxed">
              Scopri la nostra gamma di pane artigianale, realizzato con passione
              utilizzando solo ingredienti selezionati e tecniche tradizionali.
            </p>
          </div>
        </div>
      </section>

      {/* Mattrasau Products */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-brown">Linea Mattrasau</h2>
            <p className="text-brown/70 mt-2">I nostri pani croccanti ispirati alla tradizione mediterranea</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mattrasauProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Il Processo</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4 mb-6">
              12 fasi per la perfezione
            </h2>
            <p className="max-w-2xl mx-auto text-brown/70 text-lg">
              Ogni pane Mattrasau attraversa un rigoroso processo in 12 fasi,
              ognuna fondamentale per garantire qualit e sapore unici.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 bg-cream rounded-xl p-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-terracotta text-cream flex items-center justify-center font-serif font-bold">
                  {index + 1}
                </div>
                <p className="text-brown text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
