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
  { year: "1981", title: "Foundation", desc: "Edinwood Academy is established with just 50 students." },
  { year: "1995", title: "Campus Expansion", desc: "Opening of the new Science & Arts block." },
  { year: "2010", title: "Global Recognition", desc: "Awarded top accolades for holistic education." },
  { year: "2024", title: "Modern Era", desc: "Launch of our new Innovation & Tech Hub." },
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
                To provide an inquiry-led education that deeply engages students, honors their unique potential, and inspires them to pursue lifelong learning.
              </p>
            </div>
            <div className="bg-white rounded-[1.75rem] p-10 shadow-sm border border-border/50 text-center hover:-translate-y-2 transition-transform duration-300">
              <Target className="h-12 w-12 text-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl text-burgundy mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-[1.6]">
                To cultivate courageous, thoughtful leaders capable of navigating and shaping an ever-changing world with empathy and innovation.
              </p>
            </div>
            <div className="bg-burgundy text-white rounded-[1.75rem] p-10 shadow-card text-center hover:-translate-y-2 transition-transform duration-300">
              <Heart className="h-12 w-12 text-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl mb-4">Our Values</h3>
              <p className="text-white/80 leading-[1.6]">
                Integrity, Curiosity, Compassion, and Resilience form the cornerstone of everything we do at Edinwood.
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
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our History</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">A Journey of Excellence</h2>
              <div className="space-y-4 text-muted-foreground leading-[1.7]">
                <p>
                  Since our doors first opened in 1981, Edinwood Academy has been driven by a singular purpose: to redefine education by putting the child at the center of the learning experience.
                </p>
                <p>
                  What started as a modest campus has blossomed into a thriving community. Throughout the decades, we have embraced innovation while staying true to our foundational belief that education is about building character, not just delivering curriculum.
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

      {/* 3. Our Culture & Approach */}
      <section className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-5xl mb-12">Our Culture & Approach</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Lightbulb className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Inquiry-Based Learning</h4>
              <p className="text-white/70 leading-[1.6]">We encourage students to ask questions, explore deeply, and connect their learning to real-world scenarios.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <Users className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Inclusive Community</h4>
              <p className="text-white/70 leading-[1.6]">Every student is seen, heard, and valued. We celebrate diversity and foster a deeply supportive environment.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <BookOpen className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Holistic Development</h4>
              <p className="text-white/70 leading-[1.6]">Beyond academics, we prioritize emotional intelligence, physical well-being, and ethical leadership.</p>
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
              <div className="text-4xl md:text-6xl font-display text-gold mb-2">40+</div>
              <div className="text-burgundy font-semibold">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display text-gold mb-2">15:1</div>
              <div className="text-burgundy font-semibold">Student to Teacher Ratio</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display text-gold mb-2">100%</div>
              <div className="text-burgundy font-semibold">University Acceptance</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display text-gold mb-2">50+</div>
              <div className="text-burgundy font-semibold">Extracurricular Clubs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Community & Parents */}
      <section className="py-16 md:py-24 text-center max-w-4xl mx-auto px-4">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">A True Partnership</span>
        <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">Community & Parents</h2>
        <p className="text-lg text-muted-foreground leading-[1.7]">
          At Edinwood, we firmly believe that education is a collaborative effort. Our vibrant Parent-Teacher Association and active alumni network ensure that the school remains deeply connected to its community. We host regular workshops, coffee mornings, and collaborative events to keep parents actively engaged in their child's educational journey.
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
