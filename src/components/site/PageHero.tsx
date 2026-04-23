import heroBg from "@/assets/hero-school.jpg";

const PageHero = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <section className="relative px-4 md:px-6 pt-6 mb-8 md:mb-16">
      <div className="relative mx-auto max-w-[1600px] rounded-[1.75rem] overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center justify-center text-center">
        <img
          src={heroBg}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-burgundy-deep/80" />
        
        <div className="relative z-10 p-8 max-w-3xl animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-white/85">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
