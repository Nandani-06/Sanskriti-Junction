import logo from "../assets/logof.png";
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl"><img 
              src={logo} 
              alt="Sanskriti Junction Logo" 
              className="h-12 w-auto object-contain" 
            /></span>
            <span className="text-xl font-bold font-playfair">Sanskriti Junction Social Enterprise</span>
          </div>
          <p className="text-background/80 max-w-2xl mx-auto">
            Bringing Culture, Wellness & Community Together
          </p>
          <div className="pt-4 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Sanskriti Junction. All rights reserved.
            </p>
            <p className="text-sm text-background/60 mt-2">
              Melbourne, Australia | sanskritijunction@gmail.com | 0430 201 625
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
