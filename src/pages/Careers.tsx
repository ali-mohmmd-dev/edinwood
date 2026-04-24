import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import { ArrowRight, GraduationCap, Users, Heart, Star, Briefcase, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teachersImg from "@/assets/teachers-collaborating.png";
import mentoringImg from "@/assets/teacher-mentoring.png";
import staffRoomImg from "@/assets/staff-room.png";

const vacancies = [
  {
    title: "Primary Years Teacher",
    type: "Full-time",
    department: "Academics",
    location: "Palakkad Campus",
  },
  {
    title: "Sports Coach (Football/Swimming)",
    type: "Full-time",
    department: "Athletics",
    location: "Palakkad Campus",
  },
  {
    title: "Administrative Assistant",
    type: "Full-time",
    department: "Administration",
    location: "Palakkad Campus",
  },
  {
    title: "Language Teacher (Arabic/French)",
    type: "Part-time/Full-time",
    department: "Languages",
    location: "Palakkad Campus",
  },
];

const Careers = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Join Our Team" 
        subtitle="Shape healthy, skilled, and confident lifelong learners. Discover what it's like to build the future of education at Edinwood." 
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Work With Us</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-8">Careers at Edinwood</h2>
            <p className="text-muted-foreground text-lg leading-[1.8] mb-6">
              At Edinwood International School, we believe that the quality of our education is defined by the passion and expertise of our faculty. We are more than just a school; we are a community of dedicated educators and professionals committed to the three pillars of Mind, Body, and Values.
            </p>
            <p className="text-muted-foreground text-lg leading-[1.8]">
              We seek visionary learners who are ready to lead and succeed in an ever-changing world. If you are compassionate, capable, and driven to make a difference, we invite you to explore our current opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Joining Section (Mirroring GEMS "Joining GEMS") */}
      <section className="py-16 md:py-24 bg-burgundy text-white overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={teachersImg} alt="Joining Edinwood" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gold rounded-full flex items-center justify-center text-burgundy shadow-xl hidden md:flex">
                <Users className="h-12 w-12" />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">Joining Edinwood</h2>
              <p className="text-white/80 text-lg leading-[1.7] mb-8">
                Joining our team means becoming part of a culture that values restorative discipline, continuous assessment, and meaningful collaboration. We provide an environment where your voice is heard and your professional growth is prioritized.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gold/20 rounded-full flex items-center justify-center text-gold"><CheckCircle className="h-5 w-5" /></div>
                  <span className="text-white/90">A culture of mutual respect and integrity</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gold/20 rounded-full flex items-center justify-center text-gold"><CheckCircle className="h-5 w-5" /></div>
                  <span className="text-white/90">Purposeful action guided by core values</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gold/20 rounded-full flex items-center justify-center text-gold"><CheckCircle className="h-5 w-5" /></div>
                  <span className="text-white/90">Focus on student-centered innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section (Mirroring GEMS "Career Growth & Recognition") */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy mb-6">Professional Growth & Recognition</h2>
              <p className="text-muted-foreground text-lg leading-[1.7] mb-8">
                We believe that educators are lifelong learners. Edinwood provides regular workshops, peer mentoring, and opportunities to lead school-wide initiatives. We recognize and celebrate the milestones and achievements of our staff.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-secondary rounded-xl flex items-center justify-center text-burgundy">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-xl mb-1">Continuous Learning</h4>
                    <p className="text-muted-foreground">Access to advanced teaching certifications and pedagogical workshops.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-secondary rounded-xl flex items-center justify-center text-burgundy">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-xl mb-1">Recognition Programs</h4>
                    <p className="text-muted-foreground">Monthly awards celebrating innovation and exceptional dedication.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl">
                <img src={mentoringImg} alt="Teacher Mentoring" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section (Mirroring GEMS "Relocating to the UAE" content but localized) */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl">
                <img src={staffRoomImg} alt="Staff Community" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-burgundy mb-6">Our Community & Campus</h2>
              <p className="text-muted-foreground text-lg leading-[1.7] mb-8">
                Located in the serene landscape of Thozhookkara, Palakkad, our campus offers a peaceful and inspiring environment for both work and life. Our staff community is built on collaboration, empathy, and shared purpose.
              </p>
              <p className="text-muted-foreground text-lg leading-[1.7] mb-8">
                We provide modern facilities, wellness support, and a work-life balance that allows our team to thrive both professionally and personally.
              </p>
              <Button asChild variant="outline" className="rounded-full border-burgundy text-burgundy hover:bg-burgundy hover:text-white">
                <Link to="/facilities">Explore Campus Facilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section (Mirroring GEMS "Current Vacancies") */}
      <section className="py-16 md:py-28">
        <div className="container-x">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Opportunities</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">Current Vacancies</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {vacancies.map((job, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-[2rem] border border-border/50 hover:border-burgundy/20 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 bg-secondary rounded-[1.25rem] flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-burgundy/5 text-burgundy rounded-full">{job.type}</span>
                </div>
                <h3 className="font-display text-2xl text-burgundy mb-2">{job.title}</h3>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <span className="text-sm">{job.department}</span>
                  <span className="h-1 w-1 bg-border rounded-full" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <Button variant="ghost" className="p-0 h-auto text-burgundy hover:bg-transparent hover:text-burgundy-deep font-semibold flex items-center group/btn">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section (Mirroring GEMS footer CTA) */}
      <section className="py-24 bg-burgundy text-white text-center">
        <div className="container-x max-w-4xl">
          <Mail className="h-14 w-14 text-gold mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-6xl mb-6">How to Apply</h2>
          <p className="text-white/80 leading-[1.7] mb-12 text-xl">
            Interested candidates are invited to send their detailed resume and a cover letter explaining their teaching philosophy and suitability for the role.
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="text-gold font-semibold text-lg">Send your application to:</span>
            <a href="mailto:admin@edinwood.com" className="font-display text-2xl md:text-4xl text-white hover:text-gold transition-colors">
              admin@edinwood.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
