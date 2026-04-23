import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import { BookOpen, Globe2, ShieldCheck, Target } from "lucide-react";
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

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="About Edinwood" 
        subtitle="A legacy of curiosity, kindness, and excellence since 1981." 
      />

      {/* Section 1: Our Story */}
      <section className="py-16 md:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our History</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">Built on a foundation of deep inquiry.</h2>
              <div className="space-y-4 text-muted-foreground leading-[1.7]">
                <p>
                  Founded in 1981, Edinwood Academy began as a small, pioneering institution with a simple but radical belief: education should not just fill a child's mind with facts, but ignite a lifelong fire for learning.
                </p>
                <p>
                  Over the past four decades, we have grown into one of the region's premier K-12 institutions. While our campus has expanded and our facilities have modernized, our core ethos remains untouched. We still believe in small class sizes, individualized mentorship, and the profound importance of character education alongside rigorous academics.
                </p>
                <p>
                  Today, Edinwood is home to a diverse, vibrant community of learners who are taught to ask difficult questions, challenge assumptions, and approach the world with radical empathy.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[1.75rem] overflow-hidden shadow-soft">
              <img src={storyImg} alt="Edinwood historical campus" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section className="py-16 md:py-28 bg-secondary">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-[1.75rem] p-10 md:p-14 shadow-sm border border-border/50">
              <Target className="h-10 w-10 text-gold mb-6" />
              <h3 className="font-display text-3xl text-burgundy mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-[1.7] text-lg">
                To be a globally recognized center of excellence that cultivates courageous, thoughtful, and compassionate leaders capable of navigating and shaping an ever-changing world.
              </p>
            </div>
            <div className="bg-burgundy text-white rounded-[1.75rem] p-10 md:p-14 shadow-card">
              <Globe2 className="h-10 w-10 text-gold mb-6" />
              <h3 className="font-display text-3xl mb-4 text-white">Our Mission</h3>
              <p className="text-white/80 leading-[1.7] text-lg">
                To provide a holistic, inquiry-led education that deeply engages students, honors their unique potential, and inspires them to pursue lifelong learning, ethical integrity, and meaningful service to their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Leadership */}
      <section className="py-16 md:py-28">
        <div className="container-x">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">The People Behind the Vision</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">Meet Our Leaders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {leaders.map((leader, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-secondary group-hover:ring-gold transition-colors duration-300">
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
        </div>
      </section>

      {/* Section 4: Affiliations */}
      <section className="py-16 bg-burgundy-deep text-white overflow-hidden">
        <div className="container-x text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-8">Accreditations & Affiliations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
            {/* Dummy Logos using text and icons for now */}
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
              <BookOpen className="h-8 w-8 text-gold" />
              <span className="font-display text-2xl font-bold tracking-tight">CBSE</span>
            </div>
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
              <Globe2 className="h-8 w-8 text-gold" />
              <span className="font-display text-xl font-bold tracking-tight">International Baccalaureate</span>
            </div>
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
              <ShieldCheck className="h-8 w-8 text-gold" />
              <span className="font-display text-xl font-bold tracking-tight">Council of Int'l Schools</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
