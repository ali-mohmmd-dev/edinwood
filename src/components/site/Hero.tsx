import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-[90vh] flex items-center">
        <img
          src={hero.src}
          alt="Edinwood Academy campus at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/90 via-burgundy-deep/60 to-transparent" />

        <div className="container-x relative z-10 w-full text-white animate-fade-up">
          <div className="max-w-4xl">
            <Link
              href="/admissions#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold tracking-wide uppercase ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Admissions open · 2026
            </Link>
            <h1 className="font-display mt-6 text-[50px] md:text-7xl lg:text-8xl font-semibold leading-[1.05]">
              <span className="text-gold italic">Play.</span> Grow. Lead.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
              At Edinwood, education stands on three interconnected pillars: Mind, Body, and Values. We shape healthy, skilled, and confident lifelong learners ready to lead and succeed.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-ink rounded-full px-8 h-14 font-semibold text-base shadow-lg shadow-gold/20">
                <Link href="/contact">Schedule a Visit <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-burgundy transition-all duration-300">
                <Link href="/about">Discover Edinwood</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
