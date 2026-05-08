import type { Metadata } from "next";
import PdfViewerWrapper from "@/components/PdfViewerWrapper";

export const metadata: Metadata = {
  title: "Catalogo 2026 | Panificio a Mattra",
  description: "Scarica il catalogo 2026 del Panificio a Mattra. Scopri tutti i nostri prodotti, i prezzi e le modalità di ordine.",
};

const catalogSections = [
  {
    title: "Pane Mattrasau",
    products: [
      { name: "Mattrasau Classico", weight: "300g" },
      { name: "Mattrasau Integrale", weight: "300g" },
      { name: "Mattrasau ai Cereali", weight: "300g" },
      { name: "Mattrasau al Rosmarino", weight: "300g" },
    ],
  },
];

export default function Catalogo() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Catalogo</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown mt-4 mb-6">
              Catalogo 2026
            </h1>
            <p className="text-brown/70 text-xl leading-relaxed">
              Scopri la nostra gamma completa di prodotti artigianali.
              Scarica il catalogo o sfoglialo online.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brown mb-6">
                Scarica il catalogo completo
              </h2>
              <p className="text-brown/70 text-lg leading-relaxed mb-8">
                Il nostro catalogo 2026 contiene tutte le informazioni sui nostri prodotti:
                descrizioni dettagliate, formati disponibili e molto altro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/catalogo-2026.pdf"
                  download="Catalogo-Mattra-2026.pdf"
                  className="px-8 py-4 bg-terracotta text-cream rounded-full font-semibold text-lg hover:bg-brown transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Scarica PDF
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <PdfViewerWrapper url="/catalogo-2026.pdf" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Anteprima</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4">
              I nostri prodotti
            </h2>
          </div>

          <div className="space-y-12">
            {catalogSections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-bold text-brown mb-6">{section.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-brown/10">
                        <th className="text-left py-3 px-4 font-semibold text-brown">Prodotto</th>
                        <th className="text-left py-3 px-4 font-semibold text-brown">Peso</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.products.map((product, index) => (
                        <tr key={index} className="border-b border-brown/5 last:border-0">
                          <td className="py-4 px-4 text-brown">{product.name}</td>
                          <td className="py-4 px-4 text-brown/70">{product.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Info */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">Informazioni</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mt-4">
              Come ordinare
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-terracotta/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-brown mb-3">Telefono</h3>
              <p className="text-brown/70 mb-4">
                Chiamaci per ordini telefonici o per informazioni sui nostri prodotti.
              </p>
              <a href="tel:0985040115" className="text-terracotta font-semibold hover:underline">
                0985 040115
              </a>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-terracotta/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-brown mb-3">In Negozio</h3>
              <p className="text-brown/70 mb-4">
                Scopri i nostri prodotti nel nostro pop-up store San Nicola Arcella aperto da MAGGIO a SETTEMBRE.
              </p>
              <p className="text-brown/70 mb-4">
                Via Nazionale, 80 - 87020 San Nicola Arcella (CS)
              </p>
              <a href="tel:3318356820" className="text-terracotta font-semibold hover:underline">
                331 8356820
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
