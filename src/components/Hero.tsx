import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background Pattern */}
      <div className="absolute inset-0 wheat-pattern opacity-50" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-wheat/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-terracotta/10 blur-3xl" />

      {/* Wheat SVG Decorations */}
      <svg className="absolute top-40 right-20 w-24 h-24 text-wheat/30 animate-float" fill="currentColor" viewBox="0 0 100 100">
        <ellipse cx="50" cy="20" rx="8" ry="15" />
        <ellipse cx="35" cy="35" rx="8" ry="15" transform="rotate(-30 35 35)" />
        <ellipse cx="65" cy="35" rx="8" ry="15" transform="rotate(30 65 35)" />
        <ellipse cx="30" cy="55" rx="8" ry="15" transform="rotate(-45 30 55)" />
        <ellipse cx="70" cy="55" rx="8" ry="15" transform="rotate(45 70 55)" />
        <rect x="48" y="20" width="4" height="70" rx="2" />
      </svg>

      <svg className="absolute bottom-40 left-20 w-20 h-20 text-brown/10 animate-float" style={{ animationDelay: '1s' }} fill="currentColor" viewBox="0 0 100 100">
        <ellipse cx="50" cy="20" rx="8" ry="15" />
        <ellipse cx="35" cy="35" rx="8" ry="15" transform="rotate(-30 35 35)" />
        <ellipse cx="65" cy="35" rx="8" ry="15" transform="rotate(30 65 35)" />
        <ellipse cx="30" cy="55" rx="8" ry="15" transform="rotate(-45 30 55)" />
        <ellipse cx="70" cy="55" rx="8" ry="15" transform="rotate(45 70 55)" />
        <rect x="48" y="20" width="4" height="70" rx="2" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brown/10 text-brown text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
          Dal 1980 a Santa Domenica Talao
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brown mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Pane Mattrasau
        </h1>

        <p className="font-serif text-xl md:text-2xl text-brown-light italic mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Il Mediterraneo si fa croccante
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-brown/80 leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          L&apos;innovazione del pane nasce a Santa Domenica di Talao, alle pendici del Pollino.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/pane-mattrasau"
            className="px-8 py-4 bg-terracotta text-cream rounded-full font-semibold text-lg hover:bg-brown transition-colors shadow-lg shadow-terracotta/20"
          >
            Scopri il Pane Mattrasau
          </Link>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-terracotta/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-brown mb-2">Lievitazione Naturale</h3>
            <p className="text-brown/70 text-sm">12 fasi di lavorazione per un prodotto altamente digeribile</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-terracotta/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-brown mb-2">Grani Antichi</h3>
            <p className="text-brown/70 text-sm">Farine selezionate da grani antichi del Mediterraneo</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-terracotta/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-brown mb-2">Fatto a Mano</h3>
            <p className="text-brown/70 text-sm">Produzione artigianale con cura e passione</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-brown/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
