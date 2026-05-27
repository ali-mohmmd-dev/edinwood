import heroBg from "@/assets/hero-school.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  const bgImage = image || heroBg.src;
  return (
    <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/95 via-burgundy-deep/80 to-transparent" />
      
      <div className="container-x relative z-10 w-full text-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="mt-8 h-1 w-20 bg-gold" />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
