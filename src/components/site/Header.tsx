import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/edinwood-logo.png";

const links = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY); 
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <header className={`sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border transition-transform duration-300 ${!show && !open ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Edinwood Logo" className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-ink/80 hover:text-burgundy transition-colors">
                {l.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-burgundy hover:bg-burgundy-deep text-primary-foreground rounded-full px-6">
              <Link to="/contact">Contact</Link>
            </Button>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden p-2 text-ink" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-ink/20 backdrop-blur-sm z-[45] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setOpen(false)} 
      />
      
      {/* Mobile menu drawer */}
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 h-[100svh] w-[85vw] max-w-sm bg-background border-l border-border z-50 p-6 flex flex-col transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
            <img src={logo} alt="Edinwood Logo" className="h-8 w-auto" />
          </Link>
          <button onClick={() => setOpen(false)} className="p-2 -mr-2 text-ink" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-5 overflow-y-auto pb-6">
          {links.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-ink text-lg font-medium py-2 border-b border-border/50">
              {l.label}
            </Link>
          ))}
          <Button asChild className="bg-burgundy hover:bg-burgundy-deep text-primary-foreground rounded-full mt-6 h-12 text-base">
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Header;
