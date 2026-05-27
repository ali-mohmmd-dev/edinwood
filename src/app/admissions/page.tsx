"use client";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import InternalHero from "@/components/site/InternalHero";
import { ClipboardList, Map, GraduationCap, CheckCircle, Download, Send, Search, Users, Calendar, HelpCircle, Clock, Sparkles } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: <ClipboardList className="h-8 w-8 text-gold" />,
    title: "1. Initial Enquiry",
    desc: "Start by filling out the comprehensive online enquiry form below. This gives us a preliminary understanding of your child’s background and grade requirements. Our dedicated admissions team will review your submission and contact you within 24 hours to initiate the process.",
  },
  {
    icon: <Map className="h-8 w-8 text-gold" />,
    title: "2. Campus Tour & Meeting",
    desc: "Seeing is believing. We will invite your family for a personalized, guided tour of our state-of-the-art campus. You will have the opportunity to see our classes in action, explore the facilities, and have a one-on-one meeting with the Principal or Head of School.",
  },
  {
    icon: <Search className="h-8 w-8 text-gold" />,
    title: "3. Student Assessment",
    desc: "To ensure Edinwood is the right academic and social fit, we conduct an age-appropriate assessment. For Kindergarten, this is a play-based observation. For older students, it involves a low-stress evaluation in Math and English, followed by a casual interview to understand their interests.",
  },
  {
    icon: <Users className="h-8 w-8 text-gold" />,
    title: "4. Parent Partnership",
    desc: "We look for parents who want to actively partner with us through Parent-Teacher Conferences, Open Days, and our Parent Support & Service Programme (volunteering in teaching cover, talks, workshops).",
  },
];

export default function Admissions() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <InternalHero 
        title="Admissions" 
        subtitle="We are currently accepting applications for our inaugural 2026-2027 academic year. Join the founding family of Edinwood Academy." 
        image={heroSchool.src}
        breadcrumb={[{ label: "Admissions", href: "/admissions" }]}
      />

      {/* NEW SECTION: What We Look For */}
      <section id="philosophy" className="py-16 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Admissions Philosophy</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">What We Look For</h2>
              <div className="space-y-4 text-muted-foreground leading-[1.7] text-lg">
                <p>
                  We are now welcoming applications for our inaugural 2026–2027 academic year. Be part of the founding family of Edinwood International School where every child is invited to play, grow, and lead.
                </p>
                <p>
                 Our admissions process looks beyond academic readiness. We seek children who bring energy to a room, who are willing to try, to fall, and to try again on the field, in the classroom, and in their relationships with others. We are equally committed to welcoming families who believe that education is a shared responsibility, who value Islamic principles alongside academic excellence, and who see school not as a service but as a community.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 shadow-sm text-center">
                <HelpCircle className="h-10 w-10 text-burgundy mx-auto mb-4" />
                <h4 className="font-display text-xl text-burgundy mb-2">Curiosity</h4>
                <p className="text-sm text-muted-foreground">A genuine desire to ask questions, explore ideas, and find wonder in learning inside the classroom and beyond it.</p>
              </div>
              <div className="bg-white p-8 shadow-sm text-center">
                <Users className="h-10 w-10 text-burgundy mx-auto mb-4" />
                <h4 className="font-display text-xl text-burgundy mb-2">Sportsmanship</h4>
                <p className="text-sm text-muted-foreground">The willingness to compete with honour, collaborate with peers, and carry the lessons of the field into everyday life.</p>
              </div>  
              <div className="bg-white p-8 shadow-sm text-center">
                <CheckCircle className="h-10 w-10 text-burgundy mx-auto mb-4" />
                <h4 className="font-display text-xl text-burgundy mb-2">Resilience</h4>
                <p className="text-sm text-muted-foreground">The character to face difficulty with patience, learn from setbacks, and keep moving forward with effort and faith.</p>
              </div>
              <div className="bg-white p-8 shadow-sm text-center">
                <Calendar className="h-10 w-10 text-burgundy mx-auto mb-4" />
                <h4 className="font-display text-xl text-burgundy mb-2">Family Partnership</h4>
                <p className="text-sm text-muted-foreground">A shared commitment between school and home — to raise children who are rooted in values and ready to lead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. The Admissions Process */}
      <section id="process" className="py-16 md:py-28">
        <div className="container-x">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Step by Step</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">The Admissions Process</h2>
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-lg">
              We understand that applying to a new school can be a daunting process. We have meticulously designed a transparent, supportive, and straightforward admissions journey to ensure that Edinwood is the perfect fit for your child.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[10px] relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-border z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="h-20 w-20 mx-auto bg-secondary rounded-full flex items-center justify-center shadow-inner mb-6 border border-white ring-4 ring-background">
                  {step.icon}
                </div>
                <h3 className="font-display text-2xl text-burgundy mb-4 text-center">{step.title}</h3>
                <p className="text-muted-foreground leading-[1.7] text-center">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Key Dates & Hours */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-x">
          <div className="bg-gradient-to-br from-burgundy-deep to-burgundy p-8 md:p-16 lg:p-20 text-white rounded-3xl relative overflow-hidden shadow-xl border border-burgundy/10">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-burgundy/30 rounded-full blur-[100px] -ml-28 -mb-28 pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Title and Handbook Info */}
              <div className="lg:col-span-4 space-y-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Schedule Overview</span>
                <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">Working Hours & Calendar</h2>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  Plan your family's routine around our structured timings and academic schedules designed to maximize learning efficiency.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50 leading-relaxed italic">
                    * The Parent Handbook covers school policies, transport, uniform, communication protocols and serves as the primary reference guide for families.
                  </p>
                </div>
              </div>

              {/* Right Column: Grid of Info Cards */}
              <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
                {/* School Timings */}
                <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 group rounded-2xl">
                  <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">School Timings</h3>
                  <div className="space-y-2">
                    <p className="text-gold font-semibold text-lg">9:15 AM – 3:30 PM</p>
                    <p className="text-sm text-white/60">Late Entry Gate Closure: 9:10 AM sharp</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 group rounded-2xl">
                  <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">Office Hours</h3>
                  <div className="space-y-2">
                    <p className="text-gold font-semibold text-lg">8:45 AM – 4:30 PM</p>
                    <p className="text-sm text-white/60">Monday to Friday + first Saturday of month</p>
                  </div>
                </div>

                {/* Academic Year */}
                <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 group rounded-2xl">
                  <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">Academic Year</h3>
                  <div className="space-y-2">
                    <p className="text-gold font-semibold text-lg">June 2026 – March 2027</p>
                    <p className="text-sm text-white/60">Total Working Days: 211</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Eligibility */}
      <section id="eligibility" className="py-16 md:py-28 bg-burgundy text-white">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center">
            {/* Age Criteria */}
            <div>
              <h3 className="font-display text-3xl md:text-5xl mb-6 text-center">Age Eligibility</h3>
              <p className="text-white/80 leading-[1.7] text-lg mb-8 text-center max-w-2xl mx-auto">
                To ensure students are placed in the developmentally appropriate grade level, we strictly adhere to the following age criteria. Ages are calculated as of <strong>March 31st</strong> of the academic year of entry.
              </p>
              <div className="bg-white/5 overflow-hidden border border-white/10 shadow-lg text-left max-w-2xl mx-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/10 text-gold font-display text-xl">
                      <th className="py-5 px-8 font-semibold">Grade</th>
                      <th className="py-5 px-8 font-semibold">Age Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/90 text-lg">
                    <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8">Pre-KG</td>
                      <td className="py-5 px-8 font-medium"></td>
                    </tr>
                    <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8">Kindergarten 1</td>
                      <td className="py-5 px-8 font-medium">3+ Years</td>
                    </tr>
                    <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8">Kindergarten 2</td>
                      <td className="py-5 px-8 font-medium">4+ Years</td>
                    </tr>
                    <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8">Grade 1</td>
                      <td className="py-5 px-8 font-medium">5+ Years</td>
                    </tr>
                    <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8 text-white/50">Grades 2 - 5</td>
                      <td className="py-5 px-8 text-white/50 text-base">Progressively +1 year</td>
                    </tr>
                    <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8">Grade 6 (Middle School)</td>
                      <td className="py-5 px-8 font-medium">10+ Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-10 text-center">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-ink rounded-full px-10 h-16 text-lg font-semibold w-full sm:w-auto shadow-lg transition-transform hover:scale-105">
                  <Download className="mr-3 h-6 w-6" /> Download Full Fee Schedule (PDF)
                </Button>
              </div>
            </div>

            {/* Fee Structure */}
            {/*
            <div className="mt-16 text-left">
              <h3 className="font-display text-3xl md:text-5xl mb-6">Fee Structure</h3>
              <p className="text-white/80 leading-[1.7] text-lg mb-8">
                As a founding family joining us in our inaugural year, you will benefit from our special <strong>"Founders' Fee Structure"</strong>. This unique tier completely locks in your tuition rates against inflation for the first three consecutive years.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-2xl font-display text-gold mb-3">1. Registration Fee</h4>
                  <p className="text-white/70 leading-[1.6]">A one-time, non-refundable administrative fee payable only at the time of submitting the formal application form, post-tour.</p>
                </div>
                <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-2xl font-display text-gold mb-3">2. Annual Tuition</h4>
                  <p className="text-white/70 leading-[1.6]">A comprehensive fee that covers all academic instruction, standard laboratory access, library access, and use of the sports complex. Billed bi-annually.</p>
                </div>
                <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-2xl font-display text-gold mb-3">3. Optional Services</h4>
                  <p className="text-white/70 leading-[1.6]">GPS-tracked transportation, daily chef-catered meals, and specialized external after-school clubs are billed entirely separately based on usage.</p>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* 3. Centralized Fee Structure */}
      <section id="fee-structure" className="py-16 md:py-28 bg-secondary">
        <div className="container-x">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Financial Details</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">Fee Structure</h2>
            <p className="text-muted-foreground leading-[1.7] text-lg max-w-2xl mx-auto">
              As a founding family joining us in our inaugural year, you will benefit from our special <strong>"Founders' Fee Structure"</strong>. This unique tier completely locks in your tuition rates against inflation for the first three consecutive years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl flex flex-col justify-between text-center group">
              <div>
                <span className="text-gold font-display text-4xl font-bold mb-4 block group-hover:scale-110 transition-transform duration-300">01</span>
                <h4 className="text-2xl font-display text-burgundy mb-3">Registration Fee</h4>
                <p className="text-muted-foreground leading-[1.6]">A one-time, non-refundable administrative fee payable only at the time of submitting the formal application form, post-tour.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl flex flex-col justify-between text-center group">
              <div>
                <span className="text-gold font-display text-4xl font-bold mb-4 block group-hover:scale-110 transition-transform duration-300">02</span>
                <h4 className="text-2xl font-display text-burgundy mb-3">Annual Tuition</h4>
                <p className="text-muted-foreground leading-[1.6]">A comprehensive fee that covers all academic instruction, standard laboratory access, library access, and use of the sports complex. Billed bi-annually.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl flex flex-col justify-between text-center group">
              <div>
                <span className="text-gold font-display text-4xl font-bold mb-4 block group-hover:scale-110 transition-transform duration-300">03</span>
                <h4 className="text-2xl font-display text-burgundy mb-3">Optional Services</h4>
                <p className="text-muted-foreground leading-[1.6]">GPS-tracked transportation, daily chef-catered meals, and specialized external after-school clubs are billed entirely separately based on usage.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-burgundy hover:bg-burgundy-deep text-white rounded-full px-10 h-16 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
              <Download className="mr-3 h-6 w-6" /> Download Full Fee Schedule (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Enquiry Form */}
      <section id="enquiry" className="py-20 md:py-32 bg-secondary relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-burgundy/5"></div>
        <div className="container-x max-w-5xl relative z-10">
          <div className="bg-white shadow-xl border border-border/50 p-8 md:p-16 lg:p-20">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Take the first step</span>
              <h2 className="font-display text-4xl md:text-5xl text-burgundy mt-4 mb-4">Admissions Enquiry</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Please fill out the form below to register your interest. Due to high demand for our founding year, we highly recommend submitting your enquiry as early as possible.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="parentName" className="text-sm font-semibold text-burgundy uppercase tracking-wide">Parent/Guardian Name *</label>
                  <input 
                    type="text" 
                    id="parentName" 
                    className="w-full h-14 rounded-xl border border-border px-5 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-burgundy uppercase tracking-wide">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full h-14 rounded-xl border border-border px-5 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-sm font-semibold text-burgundy uppercase tracking-wide">Phone Number *</label>
                  <div className="flex gap-3">
                    <select
                      id="countryCode"
                      className="h-14 rounded-xl border border-border px-3 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all appearance-none min-w-[10px]"
                      defaultValue="+91"
                    >
                      <option value="+91">+91</option>
                      <option value="+971">+971</option>
                      <option value="+966">+966</option>
                      <option value="+974">+974</option>
                      <option value="+965">+965</option>
                      <option value="+968">+968</option>
                      <option value="+973">+973</option>
                    </select>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full h-14 rounded-xl border border-border px-5 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="grade" className="text-sm font-semibold text-burgundy uppercase tracking-wide">Grade Applying For *</label>
                  <select 
                    id="grade" 
                    className="w-full h-14 rounded-xl border border-border px-5 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a grade</option>
                    <option value="k1">Kindergarten 1</option>
                    <option value="k2">Kindergarten 2</option>
                    <option value="g1">Grade 1</option>
                    <option value="g2">Grade 2</option>
                    <option value="g3">Grade 3</option>
                    <option value="g4">Grade 4</option>
                    <option value="g5">Grade 5</option>
                    <option value="g6">Grade 6 (Middle School)</option>
                    <option value="g7">Grade 7</option>
                    <option value="g8">Grade 8</option>
                    <option value="g9">Grade 9 (Senior School)</option>
                    <option value="g10">Grade 10</option>
                    <option value="g11">Grade 11</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="childName" className="text-sm font-semibold text-burgundy uppercase tracking-wide">Child's Full Name</label>
                <input 
                  type="text" 
                  id="childName" 
                  className="w-full h-14 rounded-xl border border-border px-5 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-burgundy uppercase tracking-wide">Additional Comments / Questions</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full rounded-xl border border-border p-5 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all resize-y"
                  placeholder="Tell us a bit about your child, their interests, or ask any specific questions you may have..."
                ></textarea>
              </div>

              <div className="pt-4">
                <Button size="lg" type="submit" className="w-full h-16 rounded-xl bg-burgundy hover:bg-burgundy-deep text-white font-semibold text-xl shadow-lg transition-transform hover:-translate-y-1">
                  <Send className="mr-3 h-6 w-6" /> Submit Official Enquiry
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  By submitting this form, you agree to our <a href="#" className="underline hover:text-burgundy">privacy policy</a> and consent to being contacted by our admissions office. Your data will be kept strictly confidential.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
