import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logof.png";

const REGISTER_URL = "https://form.jotform.com/";

interface NavItem {
  label: string;
  id: string;
}

const programItems: NavItem[] = [
  { label: "Yoga & Meditation", id: "program-yoga" },
  { label: "Indian Folk Dance & Movement", id: "program-folk-dance" },
  { label: "Traditional Art Workshop", id: "program-traditional-art" },
  { label: "Traditional Games & Social Connection", id: "program-traditional-games" },
  { label: "Drama & Cultural Storytelling", id: "program-drama" },
  { label: "Aged Care Programs", id: "age-care" },
  { label: "Programs Categories", id: "school" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Switch to the solid frosted bar once the user leaves the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!isProgramsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProgramsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsProgramsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isProgramsOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
  };

  // Light text while transparent over the hero; dark text once frosted.
  const onLight = scrolled;
  const linkColor = onLight
    ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
    : "text-white/90 hover:text-white hover:bg-white/10";
  const iconColor = onLight
    ? "text-foreground/70 hover:text-primary"
    : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Junction — back to top"
          >
            <img
              src={logo}
              alt="Junction logo"
              className="h-11 w-auto object-contain"
            />
            <span
              className={`hidden font-playfair text-lg font-bold tracking-tight sm:block md:text-xl ${
                onLight ? "text-primary" : "text-white"
              }`}
            >
              Junction
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className={linkColor}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className={linkColor}
            >
              About Us
            </Button>

            {/* Programs dropdown */}
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="ghost"
                onClick={() => setIsProgramsOpen((o) => !o)}
                className={`flex items-center gap-1 ${linkColor}`}
                aria-haspopup="true"
                aria-expanded={isProgramsOpen}
              >
                Our Programs
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isProgramsOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              <div
                role="menu"
                aria-label="Programs"
                className={`absolute left-0 mt-2 w-60 origin-top overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-hover transition-all duration-200 ${
                  isProgramsOpen
                    ? "visible scale-100 opacity-100"
                    : "invisible scale-95 opacity-0"
                }`}
              >
                <button
                  role="menuitem"
                  onClick={() => scrollToSection("programs")}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                >
                  All Programs
                </button>
                <div className="my-1 h-px bg-border" />
                {programItems.map((item) => (
                  <button
                    key={item.id}
                    role="menuitem"
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm text-popover-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("founder")}
              className={linkColor}
            >
              Meet Founder
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className={linkColor}
            >
              Contact
            </Button>
          </nav>

          {/* Right cluster */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+61430201625"
              aria-label="Call Sanskriti Junction"
              className={`transition-colors ${iconColor}`}
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:sanskritijunction@gmail.com"
              aria-label="Email Sanskriti Junction"
              className={`transition-colors ${iconColor}`}
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button
              onClick={() => window.open(REGISTER_URL, "_blank", "noopener")}
              className="bg-gradient-gold font-semibold text-brand-purple-deep shadow-gold transition-all duration-300 hover:brightness-105"
            >
              Register
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${onLight ? "text-foreground" : "text-white hover:bg-white/10"}`}
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="animate-slide-in border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav
            className="container mx-auto space-y-1 px-4 py-4"
            aria-label="Mobile"
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="w-full justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="w-full justify-start"
            >
              About Us
            </Button>

            <Button
              variant="ghost"
              onClick={() => setIsProgramsOpen((o) => !o)}
              className="w-full justify-between"
              aria-expanded={isProgramsOpen}
            >
              Our Programs
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isProgramsOpen ? "rotate-180" : ""
                }`}
              />
            </Button>

            {isProgramsOpen && (
              <div className="ml-3 space-y-1 border-l-2 border-brand-lavender/40 pl-3">
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("programs")}
                  className="w-full justify-start font-semibold text-primary"
                >
                  All Programs
                </Button>
                {programItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className="w-full justify-start text-muted-foreground"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            )}

            <Button
              variant="ghost"
              onClick={() => scrollToSection("founder")}
              className="w-full justify-start"
            >
              Meet Founder
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="w-full justify-start"
            >
              Contact
            </Button>

            <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
              <a
                href="tel:+614......"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                04xxxxxxxx
              </a>
              <a
                href="mailto:.....@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <Button
                onClick={() => window.open(REGISTER_URL, "_blank", "noopener")}
                className="ml-auto bg-gradient-gold font-semibold text-brand-purple-deep shadow-gold hover:brightness-105"
              >
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
