"use client";

import { ArrowRight } from "lucide-react";
import imgP from "@/assets/primary.png";

const Programs = () => {
  return (
    <section 
      id="programs" 
      className="py-16 md:py-24 bg-white overflow-visible relative z-20"
    >
      <div className="container-x">
        
        {/* Header Block Element */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Our Academic Journey
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">
            Discover our programs
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch lg:min-h-[500px]">
          {/* Column 1: Foundation */}
          <div className="bg-secondary p-8 md:p-12 flex flex-col justify-center border border-border/50 shadow-sm hover:shadow-md transition-all">
            <span className="text-gold font-semibold text-xs md:text-sm mb-2 block uppercase tracking-[0.2em]">
              Grades PRE KG - GRADE 2 
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 text-black leading-tight">
              Foundation
            </h3>
            <p className="text-muted-foreground leading-[1.6] text-sm md:text-base lg:text-lg mb-8">
              A nurturing environment where curiosity blooms and foundational skills take root through play and discovery.
            </p>
            <div className="mt-auto">
              <button className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-gold group hover:text-burgundy transition-colors">
                Learn More{" "}
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="overflow-hidden shadow-sm border border-border/50 relative min-h-[300px] lg:min-h-full group">
            <img
              src={imgP.src}
              alt="Our Academic Journey"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Column 3: Preparatory */}
          <div className="bg-secondary p-8 md:p-12 flex flex-col justify-center border border-border/50 shadow-sm hover:shadow-md transition-all">
            <span className="text-gold font-semibold text-xs md:text-sm mb-2 block uppercase tracking-[0.2em]">
              Grades 3-6
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 text-black leading-tight">
              Preparatory
            </h3>
            <p className="text-muted-foreground leading-[1.6] text-sm md:text-base lg:text-lg mb-8">
              Building confidence and critical thinking in a collaborative setting that celebrates every student's unique potential.
            </p>
            <div className="mt-auto">
              <button className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-gold group hover:text-burgundy transition-colors">
                Learn More{" "}
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;
