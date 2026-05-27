const SDG_IMAGE = "/assets/sdgpoints.png";

const SDGStatic = () => (
  <section id="sdg" className="py-16 md:py-28 md:pb-28 bg-secondary">
    <div className="container-x">
      {/* First Row: Text Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
        <div className="w-full lg:w-[55%]">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Global Citizens in the Making
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 leading-tight">
            Edinwood &amp; the UN Sustainable Development Goals
          </h2>
        </div>
        <div className="w-full lg:w-[30%]">
          <p className="text-muted-foreground leading-[1.7] text-base md:text-lg">
            At Edinwood, the UN&apos;s 17 SDGs guide our teaching and shape globally aware students.
          </p>
        </div>
      </div>

      {/* Second Row: Image */}
      <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 p-4 md:p-8">
        <img
          src={SDG_IMAGE}
          alt="United Nations 17 Sustainable Development Goals integrated at Edinwood"
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  </section>
);

export default SDGStatic;
