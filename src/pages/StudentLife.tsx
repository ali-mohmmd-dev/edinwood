import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import { Music, Trophy, Palette, Code, Globe, Heart, ArrowRight, Clock, Users, Megaphone, CheckCircle, BookOpen } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"

const clubs = [
  { icon: <Globe className="h-8 w-8" />, title: "SpeakWorld Clubs", desc: "Language, Communication, and Global Awareness. Students can choose from Arabic, French, German, or Sanskrit Club." },
  { icon: <Code className="h-8 w-8" />, title: "Think Code Studio", desc: "Focuses on computational thinking and coding basics to prepare students for a tech-driven future." },
  { icon: <Megaphone className="h-8 w-8" />, title: "Young Communicators", desc: "Develops speaking, expression, and confidence. Crucial for budding leaders." },
  { icon: <Music className="h-8 w-8" />, title: "Auralis Club", desc: "Explores sound, rhythm, and musical expression." },
  { icon: <Heart className="h-8 w-8" />, title: "Wellness Circle", desc: "Promotes healthy habits, mindfulness, and emotional wellbeing." },
  { icon: <Globe className="h-8 w-8" />, title: "Global Goals Circle", desc: "Focuses on SDGs, responsibility, and community engagement." },
];

const StudentLife = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Student Life" 
        subtitle="Discover your passions beyond the classroom. We believe that true character is built when students are given the freedom to explore, create, and lead." 
      />

      {/* Intro Section */}
      <section className="py-16 md:py-28">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Beyond Academics</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">A Vibrant, 24/7 Community</h2>
              <div className="space-y-4 text-muted-foreground leading-[1.7] text-lg">
                <p>
                  At Edinwood, learning doesn't stop when the afternoon bell rings. We offer an incredibly diverse array of extracurricular activities designed to uncover hidden talents, build lasting friendships, and foster genuine leadership skills.
                </p>
                <p>
                  We believe that the time students spend on the football field, in the robotics lab, or rehearsing for the school play is just as vital to their development as their time in the chemistry lab. 
                </p>
                <p>
                  Whether your child is an aspiring software engineer, a dedicated athlete, a passionate environmentalist, or someone still searching for their calling—they will find their tribe here.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={g1} alt="Students" className="w-full h-48 md:h-72 object-cover rounded-[1.5rem] shadow-soft hover:scale-105 transition-transform duration-500" />
                <img src={g3} alt="Students" className="w-full h-32 md:h-48 object-cover rounded-[1.5rem] shadow-soft hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-4 pt-8 md:pt-16">
                <img src={g2} alt="Students" className="w-full h-32 md:h-48 object-cover rounded-[1.5rem] shadow-soft hover:scale-105 transition-transform duration-500" />
                <img src={g1} alt="Students" className="w-full h-48 md:h-72 object-cover rounded-[1.5rem] shadow-soft hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Sports & Physical Development */}
      <section className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container-x">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Body & Mind</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3">Sports & Physical Development</h2>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto text-lg">
              Sports at Edinwood are not extracurricular — they are core to the school day. We focus on building strong foundations, discipline, teamwork, and sportsmanship.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-6 items-start bg-white/5 p-6 rounded-[1.5rem] border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-gold text-ink font-display text-xl px-4 py-2 rounded-xl shrink-0 mt-1">Pre-KG to Grade 2</div>
                <div>
                  <h4 className="font-display text-2xl mb-2">Kids Athletics Programme</h4>
                  <p className="text-white/70">Running, jumping, balancing, yoga, breathing, rhythm, and movement. Focus is on body awareness and coordination.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start bg-white/5 p-6 rounded-[1.5rem] border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-gold text-ink font-display text-xl px-4 py-2 rounded-xl shrink-0 mt-1">Grades 3–6</div>
                <div>
                  <h4 className="font-display text-2xl mb-2">Structured Sports</h4>
                  <p className="text-white/70">Football, Badminton, Volleyball, Basketball. Every student receives equal participation opportunities before advanced skills.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start bg-white/5 p-6 rounded-[1.5rem] border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-gold text-ink font-display text-xl px-4 py-2 rounded-xl shrink-0 mt-1">All Grades</div>
                <div>
                  <h4 className="font-display text-2xl mb-2">Life Skills Sports</h4>
                  <p className="text-white/70">Skating (balance, coordination, confidence) and Swimming (water safety, confidence, skills).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-16 md:py-28 bg-secondary">
        <div className="container-x">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Clubs & Societies</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">Find Your Passion</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              With over 50 active clubs, every student has the opportunity to explore new interests or dive deeply into existing ones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, idx) => (
              <div key={idx} className="bg-white rounded-[1.75rem] p-10 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-burgundy mb-6 border border-border">
                  {club.icon}
                </div>
                <h3 className="font-display text-2xl text-burgundy mb-4">{club.title}</h3>
                <p className="text-muted-foreground leading-[1.7]">
                  {club.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Student Diary */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 bg-white border border-border/50 rounded-[2rem] p-10 shadow-sm">
              <BookOpen className="h-12 w-12 text-gold mb-6" />
              <h3 className="font-display text-3xl text-burgundy mb-4">The Edinwood Insights</h3>
              <p className="text-muted-foreground leading-[1.7] text-lg mb-6">
                The student diary (The Edinwood Insights 2026–27) is a mandatory daily companion for every student.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-burgundy/10 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="h-3 w-3 text-burgundy" /></div>
                  <span className="text-ink">Daily Learning Record and Homework pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-burgundy/10 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="h-3 w-3 text-burgundy" /></div>
                  <span className="text-ink">Teacher-to-Parent and Parent-to-Teacher communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-burgundy/10 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="h-3 w-3 text-burgundy" /></div>
                  <span className="text-ink">Student Wellness, Leave, and Infirmary records</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">A Record of Growth</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">A Journey Documented</h2>
              <p className="text-muted-foreground leading-[1.7] text-lg mb-6">
                The diary is not merely an administrative tool — it is a record of each child's journey through the year.
              </p>
              <p className="text-muted-foreground leading-[1.7] text-lg">
                Parents are expected to review the diary regularly, fostering a strong partnership between home and school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-burgundy text-white text-center">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-4xl md:text-6xl mb-6">Experience It For Yourself</h2>
          <p className="text-white/80 leading-[1.7] mb-12 text-xl">
            The best way to truly understand the electric energy of our campus is to walk its halls. Book a personalized tour to see our students and facilities in action.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-ink rounded-full px-10 h-16 text-lg font-semibold transition-transform hover:-translate-y-1">
              <Link to="/contact">Schedule a Campus Tour <ArrowRight className="ml-2 h-6 w-6" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default StudentLife;
