import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/edinwood-logo.png";

const Footer = () => (
  <footer id="contact" className="bg-ink text-white">
    {/* CTA */}
    <div className="container-x pt-20 pb-16">
      <div className="rounded-card bg-gradient-burgundy text-center text-white">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Begin the Journey</span>
        <h2 className="font-display text-3xl md:text-6xl mt-2 max-w-3xl mx-auto leading-tight">
          Your child's next chapter starts here.
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mt-3 leading-[1.3]">
          Book a personal campus tour and meet the people who will shape their future.
        </p>
        <Button asChild size="lg" className="mt-8 bg-gold hover:bg-gold/90 text-ink rounded-full px-8 h-12 font-semibold">
          <Link to="/admissions">Apply Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>

    {/* Footer body */}
    <div className="container-x pb-12 grid md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
      <div className="md:col-span-2">
        <Link to="/">
          <img src={logo} alt="Edinwood Logo" className="h-10 w-auto brightness-0 invert" />
        </Link>
        <p className="text-white/65 mt-4 max-w-sm leading-[1.3] mb-6">
          A K–12 independent academy nurturing thoughtful, courageous learners since 1981.
        </p>
        
        <div className="space-y-3">
          <p className="text-white/70 flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 shrink-0" /> 14 Edinwood Ave, Boston, MA</p>
          <p className="text-white/70 flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (617) 555-0124</p>
          <p className="text-white/70 flex items-center gap-2"><Mail className="h-4 w-4" /> admissions@edinwood.edu</p>
        </div>
      </div>
      
      <div>
        <h4 className="font-display text-gold mb-4 text-xl">Quick Links</h4>
        <div className="flex flex-col gap-3">
           <Link to="/about" className="text-white/70 hover:text-white transition">About Us</Link>
           <Link to="/academics" className="text-white/70 hover:text-white transition">Academics</Link>
           <Link to="/admissions" className="text-white/70 hover:text-white transition">Admissions</Link>
           <Link to="/faculty" className="text-white/70 hover:text-white transition">Faculty Directory</Link>
           <Link to="/student-life" className="text-white/70 hover:text-white transition">Student Life</Link>
        </div>
      </div>
      
      <div>
        <h4 className="font-display text-gold mb-4 text-xl">Resources</h4>
        <div className="flex flex-col gap-3">
           <Link to="/facilities" className="text-white/70 hover:text-white transition">Facilities</Link>
           <Link to="/gallery" className="text-white/70 hover:text-white transition">Gallery</Link>
           <Link to="/faqs" className="text-white/70 hover:text-white transition">FAQs</Link>
           <Link to="/careers" className="text-white/70 hover:text-white transition">Careers</Link>
           <Link to="/mandatory-disclosure" className="text-white/70 hover:text-white transition">Mandatory Disclosure</Link>
           <Link to="/contact" className="text-white/70 hover:text-white transition">Contact Us</Link>
        </div>
      </div>
    </div>
    
    <div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">
      © {new Date().getFullYear()} Edinwood Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;
