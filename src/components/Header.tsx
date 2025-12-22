import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Programs", id: "programs" },
    { label: "Meet Founder", id: "founder" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Sanskriti Junction Logo" 
              className="h-12 w-auto object-contain" 
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary font-playfair">
                Sanskriti Junction
              </h1>
              
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0430201625" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="mailto:sanskritijunction@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-in">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start text-foreground hover:text-primary hover:bg-muted"
              >
                {item.label}
              </Button>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <a href="tel:0430201625" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">0430 201 625</span>
              </a>
              <a href="mailto:sanskritijunction@gmail.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email Us</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
