import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    name: "Pane Mattrasau Classico",
    description: "Equilibrato, fragrante, versatile. Il nostro prodotto iconico: croccante, aromatico e altamente digeribile grazie alla lievitazione naturale e ai grani antichi.",
    features: ["Alta croccantezza", "Grani antichi", "Senza conservanti"],
    image: "/images/products/classico.jpg",
  },
  {
    name: "Mattrasau al Farro",
    description: "Ricco di fibre e gusto antico. Arricchito con farina di farro, cereale dalle eccezionali proprietà nutritive.",
    features: ["Farro biologico", "Ricco di nutrienti", "Sapore rustico"],
    image: "/images/products/farro.jpg",
  },
  {
    name: "Mattrasau ai Cereali",
    description: "Multicereale, intenso e nutriente. Un mix selezionato di cereali per un sapore unico e una texture irresistibile.",
    features: ["Mix 5 cereali", "Croccantezza extra", "Gusto intenso"],
    image: "/images/products/cereali.jpg",
  },
];

const philosophyItems = [
  "Rispetto delle tradizioni",
  "Innovazione consapevole",
  "Selezione delle materie prime",
  "Produzione artigianale controllata",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Il Nostro Mondo */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Il Panificio A Mattra</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4 mb-6">
                Il nostro mondo
              </h2>
              <p className="text-brown/70 text-lg leading-relaxed mb-4">
                Nel cuore della Calabria, il Panificio A Mattra custodisce la cultura del pane e la trasforma in innovazione.
              </p>
              <p className="text-brown/70 text-lg leading-relaxed mb-6">
                Ogni giorno impastiamo tradizione, territorio e visione contemporanea per creare prodotti che raccontano il Mediterraneo.
              </p>
              <p className="text-brown font-semibold text-xl mb-1">
                Non produciamo solo pane.
              </p>
              <p className="text-brown font-semibold text-xl mb-8">
                Creiamo identità da condividere.
              </p>
              <Link
                href="/il-panificio"
                className="inline-flex items-center gap-2 text-terracotta font-semibold hover:gap-4 transition-all"
              >
                Scopri il Panificio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/slides/slide-1.jpg"
                  alt="Pane Mattrasau artigianale"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-terracotta/10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-wheat/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Il Nostro Prodotto Distintivo */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/slides/slide-2.jpg"
                  alt="Pane Mattrasau"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Il Prodotto</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4 mb-6">
                Il nostro prodotto distintivo
              </h2>
              <p className="text-brown/70 text-lg leading-relaxed mb-6">
                Il Pane Mattrasau® è il risultato di un&apos;idea semplice e rivoluzionaria: unire più tradizioni mediterranee in un&apos;unica esperienza di gusto.
              </p>
              <p className="text-brown font-semibold text-xl mb-1">
                Croccante, leggero, versatile.
              </p>
              <p className="text-brown/70 text-lg leading-relaxed mb-8">
                Perfetto per la tavola quotidiana, ideale per la ristorazione moderna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Le Referenze</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4 mb-6">
              Scopri il Pane Mattrasau
            </h2>
            <p className="max-w-2xl mx-auto text-brown/70 text-lg">
              Ogni prodotto è realizzato con cura artigianale, utilizzando solo ingredienti
              selezionati e tecniche tramandate di generazione in generazione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pane-mattrasau"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brown text-cream rounded-full font-semibold hover:bg-terracotta transition-colors"
            >
              Vedi tutte le referenze
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* La Nostra Filosofia */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Chi Siamo</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4 mb-8">
                La nostra filosofia
              </h2>
              <ul className="space-y-4 mb-8">
                {philosophyItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brown/80 text-lg">
                    <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-brown/70 text-lg italic">
                Crediamo che il pane non debba solo nutrire, ma raccontare una storia.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/slides/slide-3.jpg"
                  alt="Produzione artigianale"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
