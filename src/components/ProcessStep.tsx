interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative flex gap-6">
      {/* Number */}
      <div className="shrink-0">
        <div className="w-14 h-14 rounded-full bg-terracotta text-cream flex items-center justify-center font-serif text-xl font-bold shadow-lg shadow-terracotta/20">
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="font-serif text-xl font-semibold text-brown mb-2">{title}</h3>
        <p className="text-brown/70 leading-relaxed">{description}</p>
      </div>

      {/* Connecting line */}
      <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gradient-to-b from-terracotta/30 to-transparent" />
    </div>
  );
}
