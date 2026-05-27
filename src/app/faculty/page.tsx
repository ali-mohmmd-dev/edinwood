"use client";

import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import FacultyCard from "@/components/site/FacultyCard";
import p1 from "@/assets/avatar-1.jpg";
import p2 from "@/assets/avatar-2.jpg";
import p3 from "@/assets/avatar-3.jpg";
import { BookOpen, Target, Users, Sparkles } from "lucide-react";

const facultyData = [
 {
    name: "INDIRA MENON",
    role: "PRINCIPAL",
    dept: "Leadership",
    img: p1,
    bio: "Dedicated educational leader focused on fostering academic excellence, student wellbeing, and a collaborative learning environment for holistic growth."
  },
  {
    name: "MUMDHASE K M",
    role: "JUNIOR PRINCIPAL",
    dept: "Leadership",
    img: p2,
    bio: "25+ years in early childhood education across India and the UAE. Certified life skills trainer and curriculum developer. Shapes Edinwood's youngest learners with expertise and warmth."
  },
  {
    name: "FATHIMA RINSHA",
    role: "ART EDUCATOR",
    dept: "Preparatory",
    img: p3,
    bio: "Passionate art educator inspiring creativity, imagination, and self-expression through engaging visual arts and hands-on learning experiences."
  },
  {
    name: "ANSILA SHERIN EP",
    role: "EARLY YEARS EDUCATOR",
    dept: "Foundation",
    img: p1,
    bio: "Focused on nurturing young minds through joyful learning, interactive activities, and a caring classroom environment that builds confidence."
  },
  {
    name: "CHITHRA K",
    role: "JUNIOR PRINCIPAL",
    dept: "Leadership",
    img: p2,
    bio: "Experienced academic coordinator committed to supporting student development, teacher collaboration, and innovative educational practices."
  },
  {
    name: "ANAS KM",
    role: "LIFEGUARD",
    dept: "Sports",
    img: p3,
    bio: "Ensures student safety and promotes water confidence through professional supervision, discipline, and active sports engagement."
  },
  {
    name: "LUBNA C A",
    role: "PRIMARY EDUCATOR",
    dept: "Preparatory",
    img: p1,
    bio: "Enthusiastic primary educator dedicated to building strong foundational skills through engaging lessons and student-centered teaching methods."
  },
  {
    name: "SAJITHA P",
    role: "PRIMARY EDUCATOR",
    dept: "Preparatory",
    img: p2,
    bio: "Committed to creating a supportive classroom atmosphere where students are encouraged to explore, learn, and grow with confidence."
  },
  {
    name: "SHYMA P M",
    role: "PRIMARY EDUCATOR",
    dept: "Preparatory",
    img: p3,
    bio: "Passionate about helping students develop academically and socially through creative instruction and meaningful classroom interactions."
  },
  {
    name: "NIMMI KRISHNA M",
    role: "PRIMARY EDUCATOR",
    dept: "Preparatory",
    img: p1,
    bio: "Dedicated educator focused on encouraging curiosity, communication, and lifelong learning through interactive and inclusive teaching practices."
  }
];

const categories = ["All", "Leadership", "Foundation", "Preparatory", "Sports"];

export default function Faculty() {
  const [filter, setFilter] = useState("All");

  const filteredFaculty = facultyData.filter(
    (member) => filter === "All" || member.dept.toUpperCase() === filter.toUpperCase()
  );

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHero
        title="Our Faculty"
        subtitle="Meet the world-class educators, mentors, and leaders who shape the Edinwood experience."
      />

      {/* NEW SECTION: Message from the Principal */}
      <section id="message" className="py-16 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="relative overflow-hidden shadow-soft">
            {/* Decorative element */}
            {/* <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div> */}

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden shadow-card">
                  <img src={p1.src} alt="Dr. Eleanor Vance" className="w-full h-full object-cover" />
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
                  <h4 className="font-display text-2xl text-burgundy">Indira Menon</h4>
                  <p className="text-gold font-medium">To be given by the principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Hiring Philosophy */}
      <section id="philosophy" className="py-16 md:py-24 bg-burgundy text-white">
        <div className="container-x text-center ">
          <h2 className="font-display text-3xl md:text-5xl mb-6">The Edinwood Standard</h2>
          <p className="text-white/80 text-lg leading-[1.8] mb-16 max-w-[1000px] m-auto">
            We maintain an incredibly rigorous hiring process. Out of hundreds of applicants, only a select few are chosen to join our founding faculty. We look for three defining traits in every educator we hire.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-[10px] text-left">
            <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Sparkles className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Subject Mastery</h4>
              <p className="text-white/70 leading-[1.7]">Our teachers hold advanced degrees in their respective fields, ensuring they can challenge even the brightest students.</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <Users className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Deep Empathy</h4>
              <p className="text-white/70 leading-[1.7]">A great teacher must first be a great listener. We prioritize educators who build strong, supportive relationships with their students.</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <BookOpen className="h-10 w-10 text-gold mb-6" />
              <h4 className="font-display text-2xl mb-3">Growth Mindset</h4>
              <p className="text-white/70 leading-[1.7]">We hire lifelong learners. Our faculty is deeply committed to continuous professional development and modern pedagogical research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section id="directory" className="py-20 md:py-32">
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
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                      ? "bg-burgundy text-white shadow-lg"
                      : "bg-secondary text-ink/70 hover:bg-gold/20 hover:text-burgundy"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[10px]">
            {filteredFaculty.map((member, i) => (
              <FacultyCard
                key={`${member.name}-${i}`}
                name={member.name}
                role={member.role}
                dept={member.dept}
                img={member.img}
                bio={member.bio}
                delay={i * 50}
              />
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
}
