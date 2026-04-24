import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/edinwood-logo.png";

const links = [
  { label: "Home", href: "/" }, // Added Home
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Student Life", href: "/student-life" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  // Desktop active styles
  const getActiveLinkClass = ({ isActive }) => 
    `text-sm font-medium transition-colors whitespace-nowrap py-2 border-b-2 ${
      isActive 
        ? "text-burgundy border-burgundy" 
        : "text-ink/80 border-transparent hover:text-burgundy"
    }`;

  // Mobile active styles
  const getMobileActiveLinkClass = ({ isActive }) => 
    `text-lg font-medium py-3 border-b border-border/50 transition-colors ${
      isActive ? "text-burgundy bg-burgundy/5 px-2 -mx-2 rounded-t-md" : "text-ink"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border transition-transform duration-300 
        ${!show && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Edinwood Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {links.map((l) => (
              <NavLink 
                key={l.href} 
                to={l.href} 
                // "end" prevents Home (/) from being active on every sub-route
                end={l.href === "/"}
                className={getActiveLinkClass}
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="bg-burgundy hover:bg-burgundy-deep text-white rounded-full px-6">
              <Link to="/contact">Contact</Link>
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
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={logo} alt="Edinwood Logo" className="h-8 w-auto" />
          </Link>
          <button onClick={() => setOpen(false)} className="p-2 -mr-2"><X /></button>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto">
          {links.map((l) => (
            <NavLink 
              key={l.href} 
              to={l.href} 
              end={l.href === "/"}
              onClick={() => setOpen(false)} 
              className={getMobileActiveLinkClass}
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="bg-burgundy text-white rounded-full mt-6 h-12">
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Header;