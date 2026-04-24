import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import { BookOpen, Brain, Download, LineChart, CheckCircle2, Globe, Microscope, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import overviewImg from "@/assets/gallery-3.jpg";
import imgK from "@/assets/kindergarten.jpg";
import imgP from "@/assets/primary.png";
import imgM from "@/assets/middle.png";
import imgS from "@/assets/senior.png";
import g1 from "@/assets/gallery-1.jpg";

const journey = [
  {
    title: "Seeding Stage",
    age: "Pre-KG to UKG",
    desc: "Our early years program is rooted in play-based discovery, focusing on curiosity, confidence, and foundational skills.",
    details: "During these formative years, classrooms are designed as 'third teachers' to spark curiosity. We place a profound emphasis on emotional literacy and physical coordination.",
    features: ["Curiosity & Confidence", "Foundational skills", "Play-based exploration", "Socio-emotional development"],
    img: imgK,
  },
  {
    title: "Exploration Stage",
    age: "Grades 1-2",
    desc: "As students transition into primary, we introduce a structured but highly interactive environment focused on language, thought, and early core subjects.",
    details: "This stage focuses on building core competencies in literacy and numeracy. Mathematics is taught using manipulatives, and language arts cultivate a love for reading.",
    features: ["Language & Thought", "Early core subjects", "Interdisciplinary projects", "Foundational Phonics & Math"],
    img: imgP,
  },
  {
    title: "Expansion Stage",
    age: "Grades 3-4",
    desc: "Our curriculum deepens in complexity. This stage focuses on adding depth to core subjects and introduces optional languages.",
    details: "Students begin to connect concepts across subjects more deeply. We encourage independent study habits and collaborative group work.",
    features: ["Depth in core subjects", "Optional languages introduced", "Collaborative projects", "Environmental awareness"],
    img: imgM,
  },
  {
    title: "Advancement Stage",
    age: "Grades 5-6",
    desc: "In the advancement stage, we focus on structure and direction. Discrete subjects like Science and Social Studies are formally introduced.",
    details: "We pair rigorous academics with robust pastoral care. Students develop advanced problem-solving skills and a strong sense of responsibility.",
    features: ["Science & Social Studies", "Structured learning", "Advanced problem-solving", "Civic engagement"],
    img: imgS,
  },
];

const Academics = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <PageHero 
        title="Academic Excellence" 
        subtitle="A modern, inquiry-led approach to the CBSE curriculum designed to ignite curiosity, foster deep understanding, and prepare students for a rapidly changing world." 
      />

      {/* 1. Curriculum Overview */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-soft">
              <img src={overviewImg} alt="Students studying in library" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">The Edinwood Approach</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">Elevating the CBSE Framework</h2>
              <div className="space-y-4 text-muted-foreground leading-[1.7] text-lg">
                <p>
                  At Edinwood Academy, we follow the globally recognized Central Board of Secondary Education (CBSE) curriculum, but we deliver it in a fundamentally different way. 
                </p>
                <p>
                  We recognize that the world no longer rewards people solely for what they know—search engines know everything. The world rewards people for what they can <em>do</em> with what they know. Therefore, instead of relying on rote memorization and passive lectures, our expert educators bring the syllabus to life through inquiry-based learning, practical experiments, and long-term interdisciplinary projects.
                </p>
                <p>
                  Our goal is to ensure that students do not just memorize facts to pass examinations. We want them to truly deconstruct and understand the underlying concepts so they can confidently apply them in novel, real-world situations. By integrating global pedagogical best practices into a robust national framework, we prepare our students to excel locally while remaining highly competitive on an international stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Core Pillars */}
      <section className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container-x">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Pedagogical Foundation</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 mb-6">The Four Pillars of Learning</h2>
            <p className="text-white/80 leading-[1.7] text-lg">
              Every lesson plan, project, and assessment at Edinwood is built upon these four foundational pillars, ensuring a consistently high-quality educational experience across all grades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 rounded-[1.5rem] p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Lightbulb className="h-10 w-10 text-gold mb-6" />
              <h3 className="font-display text-2xl mb-4">Critical Inquiry</h3>
              <p className="text-white/70 leading-[1.6]">
                Students are taught to question assumptions, analyze sources, and formulate their own evidence-based conclusions rather than accepting information at face value.
              </p>
            </div>
            <div className="bg-white/5 rounded-[1.5rem] p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Microscope className="h-10 w-10 text-gold mb-6" />
              <h3 className="font-display text-2xl mb-4">Experiential Learning</h3>
              <p className="text-white/70 leading-[1.6]">
                Learning happens by doing. Whether it's dissecting specimens in the lab, building robotics prototypes, or performing on stage, students actively experience the curriculum.
              </p>
            </div>
            <div className="bg-white/5 rounded-[1.5rem] p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Globe className="h-10 w-10 text-gold mb-6" />
              <h3 className="font-display text-2xl mb-4">Global Perspective</h3>
              <p className="text-white/70 leading-[1.6]">
                We contextualize local knowledge within global issues. Students study climate change, global economics, and international history to understand their place in the world.
              </p>
            </div>
            <div className="bg-white/5 rounded-[1.5rem] p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Users className="h-10 w-10 text-gold mb-6" />
              <h3 className="font-display text-2xl mb-4">Collaborative Spirit</h3>
              <p className="text-white/70 leading-[1.6]">
                Modern problems are rarely solved alone. We heavily emphasize group work, teaching students how to communicate effectively, delegate, and synthesize diverse viewpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Academic Journey */}
      <section className="py-16 md:py-28 bg-secondary">
        <div className="container-x">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Continuum of Learning</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">The Academic Journey</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Watch how our curriculum evolves alongside your child, gently guiding them from wide-eyed curiosity to confident, independent scholarship.
            </p>
          </div>

          <div className="space-y-20 md:space-y-32">
            {journey.map((phase, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-5/12">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                    <img src={phase.img} alt={phase.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </div>
                <div className="w-full lg:w-7/12">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-burgundy text-sm font-semibold mb-4 border border-gold/30">
                    {phase.age}
                  </span>
                  <h3 className="font-display text-3xl md:text-5xl text-burgundy mb-6">{phase.title}</h3>
                  <div className="space-y-4 text-muted-foreground leading-[1.7] mb-8 text-lg">
                    <p>{phase.desc}</p>
                    <p>{phase.details}</p>
                  </div>
                  
                  <h4 className="font-semibold text-ink text-lg mb-4">Key Focus Areas:</h4>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                    {phase.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-gold shrink-0" />
                        <span className="text-ink font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Languages & Value Education */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Comprehensive Growth</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">Languages & Value Education</h2>
              <div className="space-y-6 text-muted-foreground leading-[1.7] text-lg">
                <p>
                  We offer English, Malayalam, and Hindi as core languages. Starting from Grade 3, students can choose from optional languages including Arabic, Sanskrit, French, and German.
                </p>
                <div className="bg-secondary p-6 rounded-2xl border border-border/50">
                  <h4 className="font-display text-xl text-burgundy mb-2">Islamic Value Education</h4>
                  <p>Rooted in Qur'anic stories and the lives of Prophets, this stream develops good manners, honesty, gratitude, patience, and responsibility.</p>
                </div>
                <div className="bg-secondary p-6 rounded-2xl border border-border/50">
                  <h4 className="font-display text-xl text-burgundy mb-2">Universal Value Education</h4>
                  <p>Through stories, discussions, and activities, we build respect, kindness, empathy, honesty, and self-discipline for all children regardless of background.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[1.75rem] overflow-hidden shadow-soft">
              <img src={g1} alt="Teacher helping a student" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Assessment & Evaluation */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Measuring Success</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-4">Our Assessment Approach</h2>
            <p className="text-muted-foreground leading-[1.6] text-lg">
              We believe assessments should be tools for learning, not sources of anxiety. A single exam score cannot capture the depth of a child's intellect. Our multi-faceted evaluation system provides a comprehensive, 360-degree picture of a student's true capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[1.75rem] p-10 shadow-sm border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-6 border border-border">
                <BookOpen className="h-8 w-8 text-burgundy" />
              </div>
              <h4 className="font-display text-2xl text-burgundy mb-3">Formative Assessment</h4>
              <p className="text-muted-foreground leading-[1.7]">
                Continuous, low-stress evaluations seamlessly integrated into daily lessons. We use interactive quizzes, peer reviews, Socratic seminars, and quick exit-tickets to gauge understanding in real-time, allowing teachers to instantly pivot their lesson plans if a concept isn't clicking.
              </p>
            </div>
            
            <div className="bg-white rounded-[1.75rem] p-10 shadow-sm border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-6 border border-border">
                <LineChart className="h-8 w-8 text-burgundy" />
              </div>
              <h4 className="font-display text-2xl text-burgundy mb-3">Summative Assessment</h4>
              <p className="text-muted-foreground leading-[1.7]">
                Structured term-end examinations designed to measure long-term retention. These are crucial for building the stamina and test-taking strategies required for the final CBSE board exams in Grades 10 and 12. We ensure these exams test application of knowledge, not just memory.
              </p>
            </div>

            <div className="bg-white rounded-[1.75rem] p-10 shadow-sm border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-6 border border-border">
                <Brain className="h-8 w-8 text-burgundy" />
              </div>
              <h4 className="font-display text-2xl text-burgundy mb-3">Holistic Evaluation</h4>
              <p className="text-muted-foreground leading-[1.7]">
                We go far beyond academic grades. Our report cards include detailed narratives on a student's character development, resilience, teamwork, creativity, and participation in extracurricular activities. We celebrate the 'whole' child, recognizing that every student shines in different ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Academic Calendar CTA */}
      <section className="py-24 bg-burgundy text-white text-center relative overflow-hidden">
        {/* Subtle background pattern could go here */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl mb-6">Plan the Year Ahead</h2>
            <p className="text-xl text-white/80 leading-[1.7] mb-12">
              Stay deeply connected to your child's educational journey. Download our comprehensive 2026-2027 Academic Calendar to view crucial term dates, national holidays, examination periods, parent-teacher conferences, and major school events.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-ink rounded-full px-10 h-16 text-xl font-semibold inline-flex items-center gap-3 transition-transform hover:scale-105">
              <Download className="h-6 w-6" /> Download Full Calendar (PDF)
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Academics;
