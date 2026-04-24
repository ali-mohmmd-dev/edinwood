import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import { ClipboardList, Map, GraduationCap, CheckCircle, Download, Send, Search, Users, Calendar, HelpCircle } from "lucide-react";
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

const Admissions = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <PageHero 
        title="Admissions" 
        subtitle="We are currently accepting applications for our inaugural 2026-2027 academic year. Join the founding family of Edinwood Academy." 
      />

      {/* NEW SECTION: What We Look For */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Admissions Philosophy</span>
              <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3 mb-6">What We Look For</h2>
              <div className="space-y-4 text-muted-foreground leading-[1.7] text-lg">
                <p>
                  At Edinwood Academy, we do not believe in selecting students based purely on their ability to pass a standardized test. We are building a vibrant, diverse, and dynamic community of learners.
                </p>
                <p>
                  When assessing an application, our admissions committee looks for the <em>whole</em> child. We seek out students who demonstrate natural curiosity, a willingness to collaborate with others, resilience in the face of challenges, and a genuine enthusiasm for learning.
                </p>
                <p>
                  We are also deeply committed to partnering with parents who share our educational philosophy. We look for families who believe in holistic education and are eager to be actively involved in the school community.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[1.5rem] shadow-sm text-center">
                <HelpCircle className="h-10 w-10 text-burgundy mx-auto mb-4" />
                <h4 className="font-display text-xl text-burgundy mb-2">Curiosity</h4>
                <p className="text-sm text-muted-foreground">A desire to ask questions and seek deeper understanding.</p>
              </div>
              <div className="bg-white p-8 rounded-[1.5rem] shadow-sm text-center">
                <Users className="h-10 w-10 text-burgundy mx-auto mb-4" />
                <h4 className="font-display text-xl text-burgundy mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">The ability to work empathetically and effectively with peers.</p>
              </div>  
              <div className="bg-white p-8 rounded-[1.5rem] shadow-sm text-center">
                <CheckCircle className="h-10 w-10 text-burgundy mx-auto mb-4" />
                <h4 className="font-display text-xl text-burgundy mb-2">Resilience</h4>
                <p className="text-sm text-muted-foreground">The grit to learn from mistakes and keep trying.</p>
              </div>
              <div className="bg-white p-8 rounded-[1.5rem] shadow-sm text-center">
                <Calendar className="h-10 w-10 text-burgundy mx-auto mb-4" />
                <h4 className="font-display text-xl text-burgundy mb-2">Commitment</h4>
                <p className="text-sm text-muted-foreground">A willingness to engage fully in academic and campus life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. The Admissions Process */}
      <section className="py-16 md:py-28">
        <div className="container-x">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Step by Step</span>
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mt-3">The Admissions Process</h2>
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-lg">
              We understand that applying to a new school can be a daunting process. We have meticulously designed a transparent, supportive, and straightforward admissions journey to ensure that Edinwood is the perfect fit for your child.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-border z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white rounded-[2rem] p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
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
      <section className="py-16 md:py-20 border-y border-border">
        <div className="container-x max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-burgundy">Working Hours & Academic Calendar</h2>
          </div>
          <div className="bg-secondary rounded-[1.5rem] p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-l-4 border-gold pl-6">
                <h4 className="font-semibold text-burgundy text-xl mb-2">School Timings</h4>
                <p className="text-muted-foreground">9:15 AM – 3:30 PM</p>
                <p className="text-sm text-muted-foreground mt-1">Late Entry Gate Closure: 9:10 AM sharp</p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h4 className="font-semibold text-burgundy text-xl mb-2">Office Hours</h4>
                <p className="text-muted-foreground">8:45 AM – 4:30 PM</p>
                <p className="text-sm text-muted-foreground mt-1">Monday to Friday + first Saturday of month</p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h4 className="font-semibold text-burgundy text-xl mb-2">Academic Year</h4>
                <p className="text-muted-foreground">June 2026 – March 2027</p>
                <p className="text-sm text-muted-foreground mt-1">Total Working Days: 211</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-10 italic">
              * The Parent Handbook covers school policies, transport, uniform, communication protocols and serves as the primary reference guide for families.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Eligibility & Fees */}
      <section className="py-16 md:py-28 bg-burgundy text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Age Criteria */}
            <div>
              <h3 className="font-display text-3xl md:text-5xl mb-6">Age Eligibility</h3>
              <p className="text-white/80 leading-[1.7] text-lg mb-8">
                To ensure students are placed in the developmentally appropriate grade level, we strictly adhere to the following age criteria. Ages are calculated as of <strong>March 31st</strong> of the academic year of entry.
              </p>
              <div className="bg-white/5 rounded-[1.5rem] overflow-hidden border border-white/10 shadow-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/10 text-gold font-display text-xl">
                      <th className="py-5 px-8 font-semibold">Grade</th>
                      <th className="py-5 px-8 font-semibold">Age Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/90 text-lg">
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
                    <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-5 px-8">Grade 9 (Senior School)</td>
                      <td className="py-5 px-8 font-medium">13+ Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fee Structure */}
            <div>
              <h3 className="font-display text-3xl md:text-5xl mb-6">Fee Structure</h3>
              <p className="text-white/80 leading-[1.7] text-lg mb-8">
                As a founding family joining us in our inaugural year, you will benefit from our special <strong>"Founders' Fee Structure"</strong>. This unique tier completely locks in your tuition rates against inflation for the first three consecutive years.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 rounded-[1.5rem] p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-2xl font-display text-gold mb-3">1. Registration Fee</h4>
                  <p className="text-white/70 leading-[1.6]">A one-time, non-refundable administrative fee payable only at the time of submitting the formal application form, post-tour.</p>
                </div>
                <div className="bg-white/5 rounded-[1.5rem] p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-2xl font-display text-gold mb-3">2. Annual Tuition</h4>
                  <p className="text-white/70 leading-[1.6]">A comprehensive fee that covers all academic instruction, standard laboratory access, library access, and use of the sports complex. Billed bi-annually.</p>
                </div>
                <div className="bg-white/5 rounded-[1.5rem] p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-2xl font-display text-gold mb-3">3. Optional Services</h4>
                  <p className="text-white/70 leading-[1.6]">GPS-tracked transportation, daily chef-catered meals, and specialized external after-school clubs are billed entirely separately based on usage.</p>
                </div>
              </div>

              <Button size="lg" className="mt-10 bg-gold hover:bg-gold/90 text-ink rounded-full px-10 h-16 text-lg font-semibold w-full sm:w-auto shadow-lg transition-transform hover:scale-105">
                <Download className="mr-3 h-6 w-6" /> Download Full Fee Schedule (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Enquiry Form */}
      <section className="py-20 md:py-32 bg-secondary relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-burgundy/5"></div>
        <div className="container-x max-w-5xl relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-border/50 p-8 md:p-16 lg:p-20">
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
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full h-14 rounded-xl border border-border px-5 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="grade" className="text-sm font-semibold text-burgundy uppercase tracking-wide">Grade Applying For *</label>
                  <select 
                    id="grade" 
                    className="w-full h-14 rounded-xl border border-border px-5 bg-secondary/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select a grade</option>
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
};

export default Admissions;
