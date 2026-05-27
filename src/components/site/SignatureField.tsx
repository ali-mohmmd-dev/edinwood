const GROUND_IMAGE = "/assets/ground.png";

const SignatureField = () => (
  <section id="signature-field" className="relative min-h-[500px] md:min-h-[600px] flex items-center py-16 md:py-28">
    {/* Background Image Container */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img
        src={GROUND_IMAGE}
        alt="Edinwood Signature Field FIFA-affiliated football ground"
        loading="lazy"
        className="h-full w-full object-cover"
      />
      {/* Dark overlay for text readability (adjust opacity via bg-black/60 as needed) */}
      <div className="absolute inset-0 bg-black/60" />
    </div>

    {/* Content Container */}
    <div className="container-x relative z-10 w-full">
      {/* Max-w-2xl limits text width so it doesn't stretch awkwardly across the full screen */}
      <div className="max-w-2xl text-white">
        <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">
          Edinwood Signature Field <br /> A FIFA-Affiliated Arena
        </h2>
        <p className="text-white/80 leading-[1.7] text-base md:text-lg mt-6">
          Home to our elite football programme, our campus features a professional, FIFA-affiliated
          artificial turf ground. Managed in partnership with the Juventus Football Academy Kerala,
          this facility provides an international-standard training environment for our aspiring
          athletes.
        </p>
      </div>
    </div>
  </section>
);

export default SignatureField;