import React from "react";

interface HeroSectionProps {
  heroUrl: string;
}

export function HeroImage({ heroUrl }: HeroSectionProps) {
  return (
    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('${heroUrl}')` }}>
      <div className="absolute inset-0 bg-black opacity-25"></div>
    </div>
  );
}
