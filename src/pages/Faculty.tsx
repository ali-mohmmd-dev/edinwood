import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import p1 from "@/assets/avatar-1.jpg";
import p2 from "@/assets/avatar-2.jpg";
import p3 from "@/assets/avatar-3.jpg";
import { BookOpen, Target, Users, Sparkles } from "lucide-react";

const facultyData = [
  {
    name: "Dr. Eleanor Vance",
    role: "Principal",
    dept: "Leadership",
    degrees: "Ph.D. Education, Harvard University",
    img: p1,
    bio: "With over 25 years of global experience, Dr. Vance is a visionary leader dedicated to inquiry-based, holistic education."
  },
  {
    name: "James Sterling",
    role: "Head of Senior School",
    dept: "Leadership",
    degrees: "M.Ed. Educational Leadership",
    img: p2,
    bio: "James specializes in university counseling and developing student leadership programs."
  },
  {
    name: "Maya Patel",
    role: "Director of Academics",
    dept: "Leadership",
    degrees: "M.Sc. Curriculum Design",
    img: p3,
    bio: "Maya ensures our CBSE curriculum remains rigorous, engaging, and globally relevant."
  },
  {
    name: "Dr. Arthur Pendelton",
    role: "Head of Sciences",
    dept: "Sciences",
    degrees: "Ph.D. Physics, MIT",
    img: p2,
    bio: "A former research physicist, Arthur brings real-world scientific rigor to the classroom."
  },
  {
    name: "Sarah Jenkins",
    role: "Biology Lead",
    dept: "Sciences",
    degrees: "M.Sc. Biology, B.Ed.",
    img: p1,
    bio: "Sarah's hands-on biology labs are legendary among the student body."
  },
  {
    name: "David Chen",
    role: "Senior Mathematics",
    dept: "Sciences",
    degrees: "M.A. Applied Mathematics",
    img: p3,
    bio: "David's unique pedagogical approach makes complex calculus accessible and fun."
  },
  {
    name: "Elena Rostova",
    role: "Head of Humanities",
    dept: "Humanities",
    degrees: "M.A. History, Oxford",
    img: p1,
    bio: "Elena's history classes are immersive journeys into the past, fostering deep critical analysis."
  },
  {
    name: "Marcus Reed",
    role: "English Literature",
    dept: "Humanities",
    degrees: "M.A. English Literature",
    img: p2,
    bio: "Marcus inspires a profound love for reading and expressive, creative writing."
  },
  {
    name: "Priya Sharma",
    role: "Director of Fine Arts",
    dept: "Arts & Sports",
    degrees: "B.F.A. Fine Arts",
    img: p3,
    bio: "An accomplished painter, Priya helps students unlock their creative potential."
  },
  {
    name: "Coach Michael Vance",
    role: "Head of Athletics",
    dept: "Arts & Sports",
    degrees: "B.Sc. Sports Science",
    img: p2,
    bio: "Coach Vance focuses on discipline, teamwork, and building resilience on the field."
  },
];

const categories = ["All", "Leadership", "Sciences", "Humanities", "Arts & Sports"];

const Faculty = () => {
  const [filter, setFilter] = useState("All");

  const filteredFaculty = facultyData.filter(
    (member) => filter === "All" || member.dept === filter
  );

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <PageHero 
        title="Our Faculty" 
        subtitle="Meet the world-class educators, mentors, and leaders who shape the Edinwood experience." 
      />

      {/* NEW SECTION: Message from the Principal */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="bg-secondary rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-soft">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-[2rem] overflow-hidden shadow-card border-4 border-white">
                  <img src={p1} alt="Dr. Eleanor Vance" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <span className="text-gold font-semibold tracking-[0.2em] uppercase text-sm">A Message From The Principal</span>
                <h2 className="font-display text-3xl md:text-5xl text-burgundy leading-tight">
                  "A school is only as extraordinary as the people who teach within its walls."
                </h2>
                <div className="text-muted-foreground leading-[1.8] text-lg space-y-4">
                  <p>
                    When we set out to build Edinwood Academy, our first priority wasn't the architecture or the technology—it was assembling the greatest team of educators possible. We searched globally to find teachers who don't just know their subjects, but who possess the rare ability to ignite a lifelong passion for learning in others.
                  </p>
                  <p>
                    Our faculty members are published authors, former research scientists, practicing artists, and seasoned educational leaders. They bring real-world experience into the classroom, bridging the gap between textbook theory and practical application. Most importantly, they are profoundly empathetic mentors who dedicate themselves entirely to the success and well-being of every single student.
                  </p>
                </div>
                <div className="pt-4">
                  <h4 className="font-display text-2xl text-burgundy">Dr. Eleanor Vance</h4>
                  <p className="text-gold font-medium">Founding Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Hiring Philosophy */}
      <section className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container-x text-center ">
          <h2 className="font-display text-3xl md:text-5xl mb-6">The Edinwood Standard</h2>
          <p className="text-white/80 text-lg leading-[1.8] mb-16">
            We maintain an incredibly rigorous hiring process. Out of hundreds of applicants, only a select few are chosen to join our founding faculty. We look for three defining traits in every educator we hire.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
              <Sparkles className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Subject Mastery</h4>
              <p className="text-white/70 leading-[1.7]">Our teachers hold advanced degrees in their respective fields, ensuring they can challenge even the brightest students.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
              <Users className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Deep Empathy</h4>
              <p className="text-white/70 leading-[1.7]">A great teacher must first be a great listener. We prioritize educators who build strong, supportive relationships with their students.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
              <BookOpen className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Growth Mindset</h4>
              <p className="text-white/70 leading-[1.7]">We hire lifelong learners. Our faculty is deeply committed to continuous professional development and modern pedagogical research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 md:py-32">
        <div className="container-x">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mb-6">Faculty Directory</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Browse our directory to meet the incredible individuals who will be guiding your child's educational journey.
            </p>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === cat 
                    ? "bg-burgundy text-white shadow-lg" 
                    : "bg-secondary text-ink/70 hover:bg-gold/20 hover:text-burgundy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredFaculty.map((member, i) => (
              <div 
                key={`${member.name}-${i}`} 
                className="group flex flex-col bg-white border border-border/50 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="relative aspect-[4/5] w-full rounded-[1.5rem] overflow-hidden mb-6 bg-secondary">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold tracking-wide uppercase text-burgundy shadow-sm border border-white">
                      {member.dept}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display text-2xl text-burgundy mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-sm font-bold tracking-wide uppercase text-ink/50 mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {member.bio}
                </p>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-bold text-ink/70 block mb-1">Credentials:</span> 
                    {member.degrees}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredFaculty.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No faculty members found in this department.
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Faculty;
