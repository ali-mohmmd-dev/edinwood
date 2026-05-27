"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/edinwood-logo.png";

interface NavLink {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { 
    label: "About", 
    href: "/about",
    subLinks: [
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Our Journey", href: "/about#our-journey" },
      { label: "Philosophy", href: "/about#philosophy" },
      { label: "Infrastructure", href: "/about#infrastructure" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Achievements", href: "/about#achievements" },
      { label: "Community", href: "/about#community" },
    ]
  },
  { 
    label: "Academics", 
    href: "/academics",
    subLinks: [
      { label: "Curriculum Overview", href: "/academics#curriculum" },
      { label: "Core Pillars", href: "/academics#pillars" },
      { label: "Academic Journey", href: "/academics#journey" },
      { label: "Languages", href: "/academics#languages" },
      { label: "Assessment", href: "/academics#assessment" },
    ]
  },
  { 
    label: "Admissions", 
    href: "/admissions",
    subLinks: [
      { label: "Our Philosophy", href: "/admissions#philosophy" },
      { label: "Process", href: "/admissions#process" },
      { label: "Eligibility & Fees", href: "/admissions#eligibility-fees" },
      { label: "Enquiry Form", href: "/admissions#enquiry" },
    ]
  },
  { 
    label: "Faculty", 
    href: "/faculty",
    subLinks: [
      { label: "Principal's Message", href: "/faculty#message" },
      { label: "Hiring Philosophy", href: "/faculty#philosophy" },
      { label: "Faculty Directory", href: "/faculty#directory" },
    ]
  },
  { 
    label: "Student Life", 
    href: "/student-life",
    subLinks: [
      { label: "Beyond Academics", href: "/student-life#intro" },
      { label: "Sports", href: "/student-life#sports" },
      { label: "Juventus Academy", href: "/student-life#juventus" },
      { label: "Clubs & Societies", href: "/student-life#clubs" },
      { label: "Student Diary", href: "/student-life#diary" },
    ]
  },
  { 
    label: "Facilities", 
    href: "/facilities",
    subLinks: [
      { label: "Campus Overview", href: "/facilities#overview" },
      { label: "Infrastructure Breakdown", href: "/facilities#breakdown" },
      { label: "Campus Features", href: "/facilities#features" },
    ]
  },
  { label: "Gallery", href: "/gallery" },
  { 
    label: "FAQs", 
    href: "/faqs",
    subLinks: [
      { label: "Admissions", href: "/faqs#admissions-enrollment" },
      { label: "Academics", href: "/faqs#academics-curriculum" },
      { label: "Campus Life", href: "/faqs#campus-life-facilities" },
    ]
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const getActiveLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `text-sm font-medium transition-colors whitespace-nowrap py-2 border-b-2 flex items-center gap-1 ${
      isActive 
        ? "text-burgundy border-burgundy" 
        : "text-ink/80 border-transparent hover:text-burgundy"
    }`;
  };

  const getMobileActiveLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `text-lg font-medium py-3 border-b border-border/50 transition-colors flex items-center justify-between ${
      isActive ? "text-burgundy bg-burgundy/5 px-2 -mx-2 rounded-t-md" : "text-ink"
    }`;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border transition-transform duration-300 
        ${!show && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container-x flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src={logo.src} alt="Edinwood Logo" className="h-12 w-auto fit-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 h-full">
            {links.map((l) => (
              <div 
                key={l.href} 
                className="relative group h-full flex items-center"
              >
                <Link 
                  href={l.href} 
                  className={getActiveLinkClass(l.href)}
                >
                  {l.label}
                  {l.subLinks && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                </Link>

                {/* Dropdown Menu */}
                {l.subLinks && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                    <div className="w-64 bg-white shadow-2xl rounded-2xl border border-border overflow-hidden">
                      <div className="py-3">
                        {l.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-6 py-2.5 text-sm text-ink/70 hover:text-burgundy hover:bg-burgundy/5 transition-colors font-medium"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="bg-burgundy hover:bg-burgundy-deep text-white rounded-full px-6 ml-4">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-ink">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-ink/40 backdrop-blur-sm z-[45] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      
      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed top-0 right-0 bottom-0 h-[100svh] w-[85vw] max-w-sm bg-background border-l border-border z-50 p-6 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" onClick={() => setOpen(false)}>
            <img src={logo.src} alt="Edinwood Logo" className="h-8 w-auto" />
          </Link>
          <button onClick={() => setOpen(false)} className="p-2 -mr-2"><X /></button>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto">
          {links.map((l) => (
            <div key={l.href}>
              <div 
                className={getMobileActiveLinkClass(l.href)}
                onClick={() => l.subLinks && setActiveDropdown(activeDropdown === l.label ? null : l.label)}
              >
                <Link href={l.href} onClick={() => !l.subLinks && setOpen(false)} className="flex-1">
                  {l.label}
                </Link>
                {l.subLinks && (
                  <button className="p-2">
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === l.label ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
              
              {/* Mobile Sublinks */}
              {l.subLinks && (
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === l.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-4 py-2 flex flex-col gap-1 border-l-2 border-burgundy/10 ml-2 mt-1">
                    {l.subLinks.map((sub) => (
                      <Link 
                        key={sub.href} 
                        href={sub.href} 
                        onClick={() => setOpen(false)}
                        className="py-2.5 text-ink/60 font-medium text-base hover:text-burgundy"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button asChild className="bg-burgundy text-white rounded-full mt-6 h-12">
            <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Header;