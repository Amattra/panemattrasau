import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | A Mattra",
  description: "Novità, aggiornamenti e storie dal Panificio A Mattra.",
};

export default function News() {
  return (
    <>
      <section className="py-24 bg-cream grain-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-terracotta font-medium tracking-wider uppercase text-sm">News</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brown mt-4 mb-6">
              Dal Panificio
            </h1>
            <p className="text-brown/70 text-xl leading-relaxed">
              Novità, eventi e storie dal cuore del Pollino.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl font-bold text-brown mb-4">Presto disponibile</h2>
            <p className="text-brown/70 text-lg max-w-md mx-auto">
              Stiamo preparando contenuti e aggiornamenti per questa sezione.
              Torna presto per le ultime novità dal Panificio A Mattra.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
