import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import { Monitor, FlaskConical, BookOpen, Dumbbell, Palette, Coffee, Leaf, Shield, Wifi } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import heroSchool from "@/assets/hero-school.jpg";

const facilities = [
  {
    icon: <Monitor className="h-10 w-10 text-gold" />,
    title: "Technology & Innovation Hub",
    desc: "Our tech hub is not a traditional computer lab. It is a maker-space equipped with high-end workstations, 3D printers, laser cutters, and advanced robotics kits. Students are encouraged to drop in during free periods to code, build prototypes, and bring their digital creations into the physical world.",
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-gold" />,
    title: "Advanced STEM Laboratories",
    desc: "We house dedicated, university-grade Physics, Chemistry, and Biology laboratories. These spaces are fully equipped with fume hoods, advanced microscopes, and safety gear, allowing our senior students to conduct high-level, independent scientific research safely.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-gold" />,
    title: "The Grand Library & Media Center",
    desc: "The intellectual heart of the campus. Spanning two floors, it houses a vast collection of physical books, quiet study pods, collaborative reading zones, and access to massive digital academic archives. It is a beautifully lit sanctuary designed for deep focus and collaborative research.",
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-gold" />,
    title: "The Athletic Complex",
    desc: "Physical health is deeply tied to mental acuity. Our complex features a temperature-controlled swimming pool for life skills training, indoor basketball and badminton courts, a skating rink, and sprawling outdoor football turf fields.",
  },
  {
    icon: <Palette className="h-10 w-10 text-gold" />,
    title: "Performing & Visual Arts Center",
    desc: "Creativity requires space to breathe. Our arts center includes a state-of-the-art 500-seat auditorium with professional rigging and acoustics, sound-proofed music rehearsal rooms, and spacious visual art studios complete with pottery kilns and digital drawing tablets.",
  },
  {
    icon: <Coffee className="h-10 w-10 text-gold" />,
    title: "Student Cafeteria & Lounge",
    desc: "Designed to feel like a modern university commons rather than a traditional school cafeteria. It is a bright, collaborative space where students can enjoy highly nutritious, chef-prepared meals sourced from local organic farms, or simply relax with friends between classes.",
  },
];

const Facilities = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Campus Facilities" 
        subtitle="Explore our 15-acre, purpose-built campus. Every brick, laboratory, and playing field has been meticulously designed to inspire growth, safety, and creativity." 
      />

      {/* Feature Image Grid */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mb-6">An Environment That Inspires</h2>
            <p className="text-muted-foreground text-lg leading-[1.7]">
              We believe that architecture and environment play a profound role in a child's education. A cramped, poorly lit room stifles creativity, while open, natural, and technologically integrated spaces invite exploration. Take a visual tour of our newly constructed campus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 md:raw-span-2 relative aspect-[16/9] md:aspect-[1/1] rounded-[2rem] overflow-hidden group">
              <img src={heroSchool} alt="Campus Aerial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 via-burgundy/40 to-transparent" />
              <div className="absolute bottom-8 left-10">
                <span className="text-gold font-semibold tracking-wider text-sm mb-2 block uppercase">The Core</span>
                <h3 className="font-display text-white text-4xl">The Main Academic Quad</h3>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="relative aspect-video md:aspect-square rounded-[2rem] overflow-hidden group">
                <img src={g2} alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-display text-white text-2xl">The Library</h3>
              </div>
              <div className="relative aspect-video md:aspect-square rounded-[2rem] overflow-hidden group">
                <img src={g1} alt="Labs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-display text-white text-2xl">STEM Labs</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid (Expanded) */}
      <section className="py-16 md:py-28 bg-secondary">
        <div className="container-x">
          <div className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Infrastructure Breakdown</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">A State-of-the-Art Environment</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {facilities.map((fac, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-2">
                <div className="h-20 w-20 bg-burgundy rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner">
                  {fac.icon}
                </div>
                <h3 className="font-display text-2xl text-burgundy mb-4">{fac.title}</h3>
                <p className="text-muted-foreground leading-[1.7] text-lg">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Campus Features (Security, Eco, Tech) */}
      <section className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-12 text-center">
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
};

export default Facilities;
