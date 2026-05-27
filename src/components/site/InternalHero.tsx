"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface InternalHeroProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumb?: { label: string; href: string }[];
}

const InternalHero = ({ title, subtitle, image, breadcrumb }: InternalHeroProps) => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/95 via-burgundy-deep/80 to-transparent" />
      
      <div className="container-x relative z-10 w-full text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl animate-fade-up">
          {breadcrumb && (
            <nav className="flex items-center gap-2 mb-8 text-sm font-semibold tracking-wider text-gold uppercase">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              {breadcrumb.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                  <Link 
                    href={b.href} 
                    className="hover:text-gold transition-colors last:text-gold last:pointer-events-none"
                  >
                    {b.label}
                  </Link>
                </div>
              ))}
            </nav>
          )}
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-white font-semibold leading-[1.1] tracking-tight">
            {title}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          
          <div className="mt-10 h-1 w-20 bg-gold" />
        </div>
      </div>
    </section>
  );
};

export default InternalHero;
