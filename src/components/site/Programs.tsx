import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import imgK from "@/assets/kindergarten.jpg";
import imgP from "@/assets/primary.png";
import imgM from "@/assets/middle.png";
import imgS from "@/assets/senior.png";

const programs = [
  {
    title: "Kindergarten",
    age: "Ages 3-5",
    desc: "A nurturing environment where curiosity blooms and foundational skills take root through play and discovery.",
    img: imgK,
  },
  {
    title: "Primary School",
    age: "Grades 1-5",
    desc: "Building confidence and critical thinking in a collaborative setting that celebrates every student's unique potential.",
    img: imgP,
  },
  {
    title: "Middle School",
    age: "Grades 6-8",
    desc: "Guiding young adults through transition with rigorous academics and a focus on character and independence.",
    img: imgM,
  },
  {
    title: "Senior School",
    age: "Grades 9-12",
    desc: "Advanced preparation for university and life, cultivating leadership, resilience, and intellectual passion.",
    img: imgS,
  },
];

const Programs = () => {
  const [ref] = useEmblaCarousel({ loop: false, align: "start" }, [Autoplay({ delay: 2000 })]);

  return (
    <section id="programs" className="py-16 md:py-28 bg-secondary overflow-hidden">
      <div className="container-x">
        <div className="mb-16 md:mb-[60px]  max-w-3xl ">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our Academic Journey</span>
          <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">Discover our programs</h2>
          <p className="text-muted-foreground leading-[1.6] mt-4">
            From the first days of kindergarten to the final steps across the graduation stage,
            we provide a continuous, carefully crafted educational experience.
          </p>
        </div>

        <div className="cursor-grab active:cursor-grabbing" ref={ref}>
          <div className="flex -ml-4 md:-ml-6">
            {programs.map((prog, i) => (
              <div key={i} className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6">
                <article className="group relative rounded-[1.75rem] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[3/4]">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep via-burgundy-deep/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <span className="text-gold font-semibold text-sm mb-2 opacity-0  group-hover:opacity-100  transition-all duration-300">
                      {prog.age}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl mb-3 transform transition-transform duration-300 group-hover:-translate-y-2">
                      {prog.title}
                    </h3>
                    <p className="text-white/80 leading-[1.5] text-sm md:text-base opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                      {prog.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
