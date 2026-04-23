import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="relative px-4 md:px-6 pt-6">
      {/* Rounded card OUTSIDE the container — full-bleed-ish */}
      <div className="relative mx-auto max-w-[1600px] rounded-card pb-16 overflow-hidden min-h-[78vh] flex items-end">
        <img
          src={hero}
          alt="Edinwood Academy campus at golden hour"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 via-burgundy/50 to-transparent" />

        <div className="relative z-10  md:p-16 max-w-3xl sm:max-w-lg sm:mx-auto md:mx-0 md:max-w-4xl text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-xs font-semibold tracking-wide uppercase ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Admissions open · 2026
          </span>
          <h1 className="font-display mt-6 text-[50px] md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Where curiosity <span className="text-gold italic">becomes</span> excellence.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-[1.3]">
            At Edinwood Academy we shape thoughtful, courageous learners through rigorous academics,
            creative expression, and a community that genuinely cares.
          </p>
          <div className="mt-[40px] flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-ink rounded-full px-7 h-12 font-semibold">
              <a href="#contact">Schedule a Visit <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 bg-transparent border-white/40 text-white hover:bg-white hover:text-burgundy">
              <a href="#about">Discover Edinwood</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
