"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/ground.png";

const slides = [
  { img: g1, title: "The Library", caption: "A sanctuary of stories and study" },
  { img: g2, title: "The Classroom", caption: "Small groups, big conversations" },
  { img: g3, title: "The Lab", caption: "Where questions become discoveries" },
  { img: g4, title: "The Field", caption: "Teamwork, grit, and joy" },
];

const Gallery = () => {
  const [ref, api] = useEmblaCarousel({ loop: false  }, [Autoplay({ delay: 2000 })]);
  const prev = useCallback(() => api?.scrollPrev(), [api]);
  const next = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section id="gallery" className="py-16 md:py-28 overflow-hidden">
      <div className="container-x">
        <div className=" mb-[40px] md:mb-[60px] ">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Life on Campus</span>
          <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 md:max-w-full">A glimpse inside Edinwood</h2>
        </div>

        <div className="relative">
          <div className=" " ref={ref}>
            <div className="flex">
              {slides.map((s, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 mx-1">
                  <div className="relative aspect-[12/9] md:aspect-[19/9]  overflow-hidden">
                    <img src={s.img.src} alt={s.title} loading="lazy" width={1400} height={900} className="h-full w-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
