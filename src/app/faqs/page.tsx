"use client";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    category: "Admissions & Enrollment",
    questions: [
      {
        q: "What is the admission process for the upcoming academic year?",
        a: "The admission process begins with submitting an online enquiry form. Once received, our admissions team will contact you to schedule a campus tour and an informal interactive session for your child. Following a successful interaction, an offer of admission will be made, which must be secured by submitting the required documentation and registration fee."
      },
      {
        q: "Do you offer mid-year admissions?",
        a: "Mid-year admissions are considered strictly subject to the availability of seats in the respective grade. Parents moving from other cities or countries are encouraged to contact the admissions office directly to discuss their specific situation."
      },
      {
        q: "What is the age criteria for Kindergarten?",
        a: "For Kindergarten 1, children must be at least 3 years old by March 31st of the academic year they are entering. For Kindergarten 2, the requirement is 4+ years. We strictly adhere to these guidelines to ensure developmental readiness."
      },
      {
        q: "Are there any entrance exams?",
        a: "For Kindergarten and lower primary grades, we conduct informal, play-based observations to understand the child's social and cognitive development. For Middle and Senior school (Grades 6 and above), students may be required to take a baseline assessment in English and Mathematics to help us understand their academic standing."
      }
    ]
  },
  {
    category: "Academics & Curriculum",
    questions: [
      {
        q: "Which curriculum does Edinwood Academy follow?",
        a: "We follow the Central Board of Secondary Education (CBSE) curriculum. However, we deliver it using modern, inquiry-based pedagogical methods, ensuring that learning is experiential and project-driven rather than purely textbook-based."
      },
      {
        q: "What is the student-to-teacher ratio?",
        a: "We maintain a strict 15:1 student-to-teacher ratio in all our classrooms. This ensures that every child receives personalized attention, mentorship, and support tailored to their unique learning pace."
      },
      {
        q: "How are students assessed?",
        a: "We use a balanced assessment approach. Formative assessments are continuous and low-stress (quizzes, projects, presentations). Summative assessments occur at the end of terms to evaluate long-term retention. We also place a heavy emphasis on holistic evaluation, grading students on teamwork, creativity, and emotional intelligence."
      },
      {
        q: "Do you offer support for students with learning difficulties?",
        a: "Yes. Our Department of Student Support Services is staffed by qualified special educators and counselors who work closely with teachers and parents to create Individualized Education Programs (IEPs) for students requiring additional academic or emotional support."
      }
    ]
  },
  {
    category: "Campus Life & Facilities",
    questions: [
      {
        q: "Does the school provide transportation?",
        a: "Yes, we operate a fleet of modern, air-conditioned buses equipped with GPS tracking and CCTV cameras. Each bus is accompanied by a trained female attendant to ensure student safety. Transportation routes cover a 25km radius around the campus."
      },
      {
        q: "Are meals provided on campus?",
        a: "Yes, our student cafeteria provides highly nutritious, chef-prepared meals. We offer a variety of vegetarian and non-vegetarian options, and all our produce is sourced from local, sustainable farms. We also cater to specific dietary requirements and allergies upon request."
      },
      {
        q: "What extracurricular activities are available?",
        a: "We offer over 50 extracurricular clubs spanning Fine Arts, Performing Arts, STEM, and Athletics. This includes Robotics, Model UN, Symphony Orchestra, Eco-Warriors, Debate Club, and varsity sports like basketball, soccer, and swimming."
      },
      {
        q: "How secure is the campus?",
        a: "Student safety is our highest priority. The campus is a fully enclosed, secure zone with 24/7 CCTV surveillance, biometric access control for staff, and strict entry protocols for visitors. We also conduct regular fire, earthquake, and lockdown drills."
      }
    ]
  }
];

const AccordionItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex items-center justify-between gap-4 focus:outline-none"
      >
        <span className={`font-display text-lg md:text-xl transition-colors ${isOpen ? 'text-gold' : 'text-burgundy'}`}>
          {q}
        </span>
        <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gold text-white rotate-180' : 'bg-secondary text-burgundy'}`}>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-muted-foreground leading-[1.7] pr-12">
          {a}
        </p>
      </div>
    </div>
  );
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Find detailed answers to common questions about admissions, academics, and life at Edinwood." 
      />

      <section className="py-16 md:py-24">
        <div className="container-x max-w-4xl">
          
          <div className="text-center mb-16">
            <MessageCircleQuestion className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl text-burgundy mb-6">How can we help?</h2>
            <p className="text-muted-foreground text-lg leading-[1.7]">
              We have compiled a comprehensive list of questions our admissions team receives most frequently. If you cannot find what you are looking for, please don't hesitate to reach out directly.
            </p>
          </div>

          <div className="space-y-16">
            {faqs.map((section, idx) => (
              <div 
                key={idx} 
                id={section.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")} 
                className="bg-white shadow-sm border border-border/50 p-6 md:p-10"
              >
                <h3 className="font-display text-2xl text-burgundy mb-6 pb-4 border-b-2 border-secondary inline-block">
                  {section.category}
                </h3>
                <div className="flex flex-col">
                  {section.questions.map((faq, fIdx) => (
                    <AccordionItem key={fIdx} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-20 bg-burgundy text-white text-center">
        <div className="container-x max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl mb-6">Still have questions?</h2>
          <p className="text-white/80 leading-[1.7] mb-10 text-lg">
            Our admissions team is available Monday through Friday, from 8:00 AM to 4:00 PM, to assist you with any specific queries you might have.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-ink rounded-full px-8 h-14 font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-burgundy rounded-full px-8 h-14 font-semibold">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
