"use client";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import InternalHero from "@/components/site/InternalHero";
import { Leaf, Shield, Wifi } from "lucide-react";
import advancedSTEMLaboratories from "@/assets/facilities/Advanced STEM Laboratories.jpg";
import library from "@/assets/facilities/The Grand Library & Media Center.jpg";
import studentCafeteriaAndLounge from "@/assets/facilities/Student Cafeteria & Lounge.png";
import performingAndVisualArtsCenter from "@/assets/facilities/Performing & Visual Arts Center.png";
import technologyAndInnovationHub from "@/assets/facilities/Technology & Innovation Hub.jpg";
import heroSchool from "@/assets/hero-school.jpg";
import footballGround from "@/assets/juventus_football_academy_ground_1777091548081.png";
import teachersCollaborating from "@/assets/teachers-collaborating.png";

const facilities = [
  {
    title: "Technology & Innovation Hub",
    desc: "Our tech hub is not a traditional computer lab. It is a maker-space equipped with high-end workstations, 3D printers, laser cutters, and advanced robotics kits. Students are encouraged to drop in during free periods to code, build prototypes, and bring their digital creations into the physical world.",
    image: technologyAndInnovationHub.src,
    imageAlt: "Students collaborating with technology in the innovation hub",
  },
  {
    title: "Advanced STEM Laboratories",
    desc: "We house dedicated, university-grade Physics, Chemistry, and Biology laboratories. These spaces are fully equipped with fume hoods, advanced microscopes, and safety gear, allowing our senior students to conduct high-level, independent scientific research safely.",
    image: advancedSTEMLaboratories.src,
    imageAlt: "STEM laboratory facilities",
  },
  {
    title: "The Grand Library & Media Center",
    desc: "The intellectual heart of the campus. Spanning two floors, it houses a vast collection of physical books, quiet study pods, collaborative reading zones, and access to massive digital academic archives. It is a beautifully lit sanctuary designed for deep focus and collaborative research.",
    image: library.src,
    imageAlt: "Grand library and media center",
  },
  {
    title: "The Edinwood Signature Field FIFA-affiliated Arena",
    desc: "Home to our elite football programme, our campus features a professional, Edinwood Signature Field FIFA-affiliated artificial turf ground. Managed in partnership with the Juventus Football Academy, this facility provides an international-standard training environment for our aspiring athletes.",
    image: footballGround.src,
    imageAlt: "FIFA-affiliated football arena",
  },
  {
    title: "Performing & Visual Arts Center",
    desc: "Creativity requires space to breathe. Our arts center includes a state-of-the-art 500-seat auditorium with professional rigging and acoustics, sound-proofed music rehearsal rooms, and spacious visual art studios complete with pottery kilns and digital drawing tablets.",
    image: performingAndVisualArtsCenter.src,
    imageAlt: "Performing and visual arts center",
  },
  {
    title: "Student Cafeteria & Lounge",
    desc: "Designed to feel like a modern university commons rather than a traditional school cafeteria. It is a bright, collaborative space where students can enjoy highly nutritious, chef-prepared meals sourced from local organic farms, or simply relax with friends between classes.",
    image: studentCafeteriaAndLounge.src,
    imageAlt: "Student cafeteria and lounge",
  },
];

export default function Facilities() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InternalHero 
        title="Campus Facilities" 
        subtitle="Explore our 15-acre, purpose-built campus. Every brick, laboratory, and playing field has been meticulously designed to inspire growth, safety, and creativity." 
        image={heroSchool.src}
        breadcrumb={[{ label: "Facilities", href: "/facilities" }]}
      />

    

      {/* Details Grid (Expanded) */}
      <section id="breakdown" className="py-16 md:py-28 bg-secondary">
        <div className="container-x">
          <div className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Infrastructure Breakdown</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">A State-of-the-Art Environment</h2>
          </div>
          
          <div className="flex flex-col gap-[10px]">
            {facilities.map((fac, idx) => (
              <article
                key={idx}
                className="group relative w-full min-h-[320px] md:min-h-[400px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={fac.image}
                  alt={fac.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/95 via-burgundy-deep/60 to-burgundy-deep/25 md:bg-gradient-to-l md:from-burgundy-deep/95 md:via-burgundy-deep/65 md:to-transparent"
                  aria-hidden
                />
                <div className="relative z-10 flex min-h-[320px] md:min-h-[400px] justify-end">
                  <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-14 text-white">
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-4">{fac.title}</h3>
                    <p className="text-white/85 leading-[1.7] text-base md:text-lg">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Campus Features (Security, Eco, Tech) */}
      <section id="features" className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6 md:gap-[10px] text-center">
            <div className="p-6">
              <Shield className="h-14 w-14 text-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl mb-4">Uncompromising Security</h3>
              <p className="text-white/70 leading-[1.7]">
                The campus features a 3-tier security perimeter, 24/7 high-definition CCTV monitoring, biometric access points for staff, and heavily vetted protocols for visitors and student pickups.
              </p>
            </div>
            <div className="p-6">
              <Leaf className="h-14 w-14 text-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl mb-4">Sustainable & Green</h3>
              <p className="text-white/70 leading-[1.7]">
                Built with the future in mind, our campus operates entirely on solar power, utilizes rainwater harvesting systems, and maintains a zero-plastic policy in our cafeteria.
              </p>
            </div>
            <div className="p-6">
              <Wifi className="h-14 w-14 text-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl mb-4">Campus-Wide Connectivity</h3>
              <p className="text-white/70 leading-[1.7]">
                High-speed, heavily filtered WiFi blankets the entire 15-acre campus, ensuring seamless digital integration in classrooms while protecting students from unsafe content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
