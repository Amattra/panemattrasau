import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export default function TeamMember({ name, role, description, image }: TeamMemberProps) {
  return (
    <div className="group text-center">
      {/* Avatar */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terracotta to-brown opacity-10 group-hover:opacity-20 transition-opacity" />
        {image ? (
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="absolute inset-0 w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="absolute inset-2 rounded-full bg-cream-dark flex items-center justify-center">
            <span className="font-serif text-3xl font-bold text-brown/60">
              {name.charAt(0)}
            </span>
          </div>
        )}
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-wheat group-hover:rotate-12 transition-transform" />
      </div>

      {/* Info */}
      <h3 className="font-serif text-xl font-semibold text-brown mb-1">{name}</h3>
      <p className="text-terracotta text-sm font-medium mb-3">{role}</p>
      <p className="text-brown/70 text-sm max-w-xs mx-auto">{description}</p>
    </div>
  );
}
