import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const items = [
  { name: "Priya Menon", role: "Parent of Grade 8 student", img: a1, quote: "Edinwood has given my daughter the confidence to think for herself. The teachers know her, see her, and stretch her every single day." },
  { name: "Daniel Whitaker", role: "Parent · Alumni Class of '92", img: a2, quote: "Three generations of our family have walked these halls. The values are timeless — curiosity, kindness, and a quiet pursuit of excellence." },
  { name: "Aisha Kapoor", role: "Alumna · Class of 2023", img: a3, quote: "I left Edinwood not just prepared for university, but prepared for life. I still call my Grade 11 mentor before every big decision." },
];

const Testimonials = () => {
  const [ref, api] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 2000 })]);
  const prev = useCallback(() => api?.scrollPrev(), [api]);
  const next = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section id="testimonials" className="py-16 md:py-28 bg-secondary overflow-hidden">
      <div className="container-x">
        <div className=" mb-[40px] md:mb-[60px]">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Voices of Edinwood</span>
          <h2 className="font-display max-w-[270px] md:max-w-[400px]  text-3xl md:text-5xl text-burgundy mt-3">What our community says</h2>
        </div>

        <div className="relative">
          <div className="" ref={ref}>
            <div className="flex">
              {items.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_60%] min-w-0 px-2">
                  <article className="rounded-card bg-background mx-auto h-full  ">
                    <Quote className=" h-10 w-10 text-gold" />
                    <p className="font-display italic text-xl md:text-2xl text-ink leading-[1.5] mt-10">
                      “{t.quote}”
                    </p>
                    <div className="mt-10 flex  items-center gap-3">
                      <img src={t.img} alt={t.name} loading="lazy" width={80} height={80} className="h-20 w-20 rounded-full object-cover ring-4 ring-gold/30" />
                      <div>
                        <div className="font-semibold text-burgundy">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* <button onClick={prev} aria-label="Previous" className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-burgundy text-primary-foreground hover:bg-burgundy-deep transition">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Next" className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-burgundy text-primary-foreground hover:bg-burgundy-deep transition">
            <ChevronRight className="h-5 w-5" />
          </button> */}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
