import Image from 'next/image';

interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  image?: string;
  icon?: React.ReactNode;
}

export default function ProductCard({ name, description, features, image, icon }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brown/5">
      {/* Image */}
      {image && (
        <div className="aspect-square relative overflow-hidden bg-cream">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-8">
        {/* Icon (only if no image) */}
        {!image && (
          <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-terracotta/10 to-wheat/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            {icon || (
              <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            )}
          </div>
        )}

        {/* Name */}
        <h3 className="font-serif text-2xl font-bold text-brown mb-3">{name}</h3>

        {/* Description */}
        <p className="text-brown/70 leading-relaxed mb-6">{description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-brown/80">
              <svg className="w-4 h-4 text-olive shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
