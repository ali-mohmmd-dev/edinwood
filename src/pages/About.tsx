import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import Testimonials from "@/components/site/Testimonials";
import Gallery from "@/components/site/Gallery";
import { Target, Globe2, Heart, BookOpen, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import storyImg from "@/assets/gallery-2.jpg";
import p1 from "@/assets/avatar-1.jpg";
import p2 from "@/assets/avatar-2.jpg";
import p3 from "@/assets/avatar-3.jpg";

const leaders = [
  {
    name: "Dr. Eleanor Vance",
    role: "Principal",
    bio: "With over 25 years of experience in international education, Dr. Vance has led Edinwood's transition into a modern, inquiry-based academy.",
    img: p1,
  },
  {
    name: "James Sterling",
    role: "Head of Senior School",
    bio: "A passionate advocate for student leadership, James ensures our senior students are deeply prepared for university and beyond.",
    img: p2,
  },
  {
    name: "Maya Patel",
    role: "Director of Academics",
    bio: "Maya oversees the continuous development of our CBSE curriculum, ensuring it remains rigorous, relevant, and engaging.",
    img: p3,
  },
];

const timeline = [
  { year: "2023", title: "The Vision", desc: "Passionate educators set out to build a modern, inquiry-led academy." },
  { year: "2024", title: "Groundbreaking", desc: "Construction begins on our state-of-the-art campus." },
  { year: "2025", title: "Assembling the Team", desc: "Recruiting world-class faculty from around the globe." },
  { year: "2026", title: "Doors Open", desc: "Edinwood Academy welcomes its founding class of students." },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <PageHero 
        title="Edinwood Academy — About Our School" 
        subtitle="We shape thoughtful, courageous learners through rigorous academics, creative expression, and a community that genuinely cares." 
      />

      {/* 1. Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our Philosophy</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">Mission, Vision & Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[1.75rem] p-10 shadow-sm border border-border/50 text-center hover:-translate-y-2 transition-transform duration-300">
              <Globe2 className="h-12 w-12 text-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl text-burgundy mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-[1.6]">
                To provide an engaging and dynamic learning environment where academics, sports, and values work together to develop confident, compassionate, and capable leaders.
              </p>
            </div>
            <div className="bg-white rounded-[1.75rem] p-10 shadow-sm border border-border/50 text-center hover:-translate-y-2 transition-transform duration-300">
              <Target className="h-12 w-12 text-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl text-burgundy mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-[1.6]">
                To shape healthy, skilled, and confident lifelong learners ready to lead and succeed in an ever-changing world.
              </p>
            </div>
            <div className="bg-burgundy text-white rounded-[1.75rem] p-10 shadow-card text-center hover:-translate-y-2 transition-transform duration-300">
              <Heart className="h-12 w-12 text-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl mb-4">Our Values</h3>
              <p className="text-white/80 leading-[1.6]">
                Integrity, empathy, responsibility, and purposeful action form the cornerstone of everything we do at Edinwood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Journey / History */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our Foundation</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">The Founding Vision</h2>
              <div className="space-y-4 text-muted-foreground leading-[1.7]">
                <p>
                  Edinwood Academy was born from a singular, powerful vision: to build a school for the future, right from the ground up. We saw the need for an education that goes beyond rote learning and puts the child at the absolute center of the experience.
                </p>
                <p>
                  As we open our doors for our inaugural year, we are not bound by outdated traditions. Instead, we have the unique opportunity to implement the very best modern educational practices in a custom-built, state-of-the-art environment.
                </p>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border"></div>
              
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : ''}`}>
                    <div className="hidden md:block w-1/2"></div>
                    <div className="absolute left-[-37px] md:left-[50%] md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-background"></div>
                    <div className="w-full md:w-1/2 bg-secondary/50 p-6 rounded-2xl">
                      <span className="text-gold font-bold font-display text-xl">{item.year}</span>
                      <h4 className="font-display text-xl text-burgundy mt-1 mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quality & Discipline Philosophy */}
      <section className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-5xl mb-12">Quality & Discipline Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Heart className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Restorative Discipline</h4>
              <p className="text-white/70 leading-[1.6]">Discipline is restorative and educative—fostering responsibility and self-awareness. Fear-based or punitive practices have no place here.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Target className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Continuous Assessment</h4>
              <p className="text-white/70 leading-[1.6]">Assessment is continuous and supportive, guiding progress rather than comparison. We emphasize understanding, application, and expression.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Globe2 className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">SDG Integration</h4>
              <p className="text-white/70 leading-[1.6]">Sustainable Development Goals (SDGs) are integrated into everyday learning through discussions, projects, and clubs to prepare purposeful citizens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infrastructure & Facilities */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-[1.75rem] overflow-hidden">
              <img src={storyImg} alt="Campus facilities" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Infrastructure</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">Designed for Growth</h2>
              <p className="text-muted-foreground leading-[1.7] mb-6">
                Our campus is a carefully curated environment that blends nature with cutting-edge technology. From our advanced STEM labs and expansive library to our sprawling sports complex, every facility is designed to provide students with the resources they need to excel.
              </p>
              <Button asChild variant="outline" className="rounded-full px-8 h-12">
                <Link to="/facilities">Explore Facilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership & Faculty */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our Mentors</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">Leadership & Faculty</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {leaders.map((leader, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-background group-hover:ring-gold transition-colors duration-300">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-2xl text-burgundy mb-1">{leader.name}</h3>
                <p className="text-gold font-medium text-sm tracking-wide uppercase mb-4">{leader.role}</p>
                <p className="text-muted-foreground leading-[1.6] max-w-sm mx-auto">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Button asChild variant="outline" className="rounded-full px-8 h-12">
                <Link to="/faculty">Meet All Faculty</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* 6. Achievements & Milestones */}
      <section className="py-16 md:py-20 border-y border-border">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-display text-gold mb-2">15+</div>
              <div className="text-burgundy font-semibold">Acres of Green Campus</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display text-gold mb-2">15:1</div>
              <div className="text-burgundy font-semibold">Student to Teacher Ratio</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display text-gold mb-2">100%</div>
              <div className="text-burgundy font-semibold">Future-Ready Curriculum</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display text-gold mb-2">30+</div>
              <div className="text-burgundy font-semibold">Global Expert Faculty</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Community & Parents */}
      <section className="py-16 md:py-24 text-center max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">A True Partnership</span>
        <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">Community & Parents</h2>
        <p className="text-lg text-muted-foreground leading-[1.7]">
          At Edinwood, we firmly believe that education is a collaborative effort. As a founding family, you play a crucial role in shaping our community. Our Parent-Teacher Association ensures that the school remains deeply connected to its community from day one. We host regular workshops, coffee mornings, and collaborative events to keep parents actively engaged in their child's educational journey.
        </p>
      </section>

      {/* 8. Testimonials + Gallery */}
      <div className="mb-24">
        <Testimonials />
        <Gallery />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
