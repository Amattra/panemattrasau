import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pane Mattrasau | A Mattra",
  description: "Il Pane Mattrasau: croccante, leggero, versatile. Fusione di tradizioni mediterranee. Scopri tutte le referenze: Classico, Curcuma, Mais, Farro, Soia, Cereali.",
};

const mattrasauProducts = [
  {
    name: "Pane Mattrasau Classico",
    description: "Equilibrato, fragrante, versatile. Il nostro prodotto iconico: croccante, aromatico e altamente digeribile grazie alla lievitazione naturale e ai grani antichi.",
    features: ["Alta croccantezza", "Grani antichi", "Senza conservanti"],
    image: "/images/products/classico.jpg",
  },
  {
    name: "Mattrasau alla Curcuma",
    description: "Profumato, dorato, speziato. Il colore dorato e le proprietà benefiche della curcuma in un pane dal gusto originale.",
    features: ["Curcuma naturale", "Proprietà antiossidanti", "Colore brillante"],
    image: "/images/products/curcuma.jpg",
  },
  {
    name: "Mattrasau al Mais",
    description: "Rustico e dolce al palato. La dolcezza naturale del mais si fonde con la croccantezza del Mattrasau.",
    features: ["Farina di mais", "Colore dorato", "Gusto delicato"],
    image: "/images/products/mais.jpg",
  },
  {
    name: "Mattrasau al Farro",
    description: "Ricco di fibre e gusto antico. Arricchito con farina di farro, cereale dalle eccezionali proprietà nutritive.",
    features: ["Farro", "Ricco di nutrienti", "Sapore rustico"],
    image: "/images/products/farro.jpg",
  },
  {
    name: "Mattrasau alla Soia",
    description: "Fonte di proteine, leggero. Arricchito con farina di soia per un apporto proteico extra e un'alimentazione bilanciata.",
    features: ["Proteine vegetali", "Alta digeribilità", "Gusto equilibrato"],
    image: "/images/products/soia.jpg",
  },
  {
    name: "Mattrasau ai Cereali",
    description: "Multicereale, intenso e nutriente. Un mix selezionato di cereali per un sapore unico e una texture irresistibile.",
    features: ["Mix 5 cereali", "Croccantezza extra", "Gusto intenso"],
    image: "/images/products/cereali.jpg",
  },
];


const processSteps = [
  { label: "Selezione delle farine da grani antichi", image: "/images/process/step-1.jpg" },
  { label: "Preparazione del lievito madre", image: "/images/process/step-2.jpg" },
  { label: "Prima impastatura a mano", image: "/images/process/step-3.jpg" },
  { label: "Riposo dell'impasto (4 ore)", image: "/images/process/step-4.jpg" },
  { label: "Seconda impastatura", image: "/images/process/step-5.jpg" },
  { label: "Porzionatura manuale", image: "/images/process/step-6.jpg" },
  { label: "Formatura delle sfoglie", image: "/images/process/step-7.jpg" },
  { label: "Lievitazione naturale (12 ore)", image: "/images/process/step-8.jpg" },
  { label: "Stesura a mano", image: "/images/process/step-9.jpg" },
  { label: "Prima cottura", image: "/images/process/step-10.jpg" },
  { label: "Separazione delle sfoglie", image: "/images/process/step-11.jpg" },
  { label: "Seconda cottura e doratura", image: "/images/process/step-12.jpg" },
];

const characteristics = [
  "Alta croccantezza",
  "Grande leggerezza",
  "Lunga conservabilità",
  "Versatilità di utilizzo",
  "Ideale per retail e Horeca",
];

export default function PaneMattrasau() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Il Prodotto</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown mt-4 mb-6">
              Pane Mattrasau
            </h1>
            <p className="text-brown/70 text-xl leading-relaxed">
              Un prodotto innovativo nato dalla fusione di più culture mediterranee.
              Croccante, leggero, versatile.
            </p>
          </div>
        </div>
      </section>

      {/* L'Idea */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brown mt-4 mb-6">
                L&apos;idea
              </h2>
              <div className="space-y-4 text-brown/70 text-lg leading-relaxed mb-8">
                <p>
                  Il Pane Mattrasau è un prodotto innovativo nato dalla fusione di più culture mediterranee.
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2.5 shrink-0" />
                    La leggerezza del pane arabo
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2.5 shrink-0" />
                    La croccantezza del pane carasau
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2.5 shrink-0" />
                    L&apos;anima autentica delle fresine calabresi
                  </li>
                </ul>
                <p>
                  Il risultato è un prodotto unico nel panorama bakery italiano.
                </p>
                <p>
                  Un prodotto completamente artigianale, lavorato con antichi grani mediterranei che ne rendono il sapore inconfondibile.
                </p>
                <p>
                  Ogni fase della lavorazione richiede ben 12 passaggi, tra cui la stesura a mano con il matterello.
                </p>
                <p>
                  Croccante, profumato e perfetto per accompagnare qualsiasi pietanza, il Pane Mattrasau grazie alla sua lievitazione naturale è altamente leggero e digeribile. Il gusto, la genuinità e la digeribilità lo rendono il protagonista indiscusso della tavola e adatto a tutte le età.
                </p>
                <p className="font-semibold text-brown text-xl">
                  Il Pane Mattrasau non accompagna il piatto.
                </p>
                <p className="font-semibold text-brown text-xl">
                  Lo valorizza.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-brown mb-6">Caratteristiche distintive</h3>
              <div className="space-y-3">
                {characteristics.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-cream rounded-xl p-4">
                    <div className="w-6 h-6 rounded-full bg-terracotta flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-brown font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linea Mattrasau */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Le Referenze</span>
            <h2 className="font-serif text-3xl font-bold text-brown mt-2">Linea Mattrasau</h2>
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
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Il Processo</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4 mb-6">
              12 fasi per la perfezione
            </h2>
            <p className="max-w-2xl mx-auto text-brown/70 text-lg">
              Ogni pane Mattrasau attraversa un rigoroso processo artigianale in 12 fasi,
              ognuna fondamentale per garantire qualità e sapore unici.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image
                    src={step.image}
                    alt={step.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-terracotta text-cream flex items-center justify-center font-serif font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-brown text-sm font-medium">{step.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
