import { Button } from "@/components/ui/button";
import logo from "../assets/logo2.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      // Changed background to an Ultramarine Blue (#1e3a8a) to White gradient
      // 'from-70%' keeps the blue section dominant behind the text before fading to white
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-[#fffaf3] from-30% to-[#360f5a]"
    >
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          
          {/* Centered Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Sanskriti Junction Logo" 
              className="h-32 md:h-48 w-auto object-contain drop-shadow-2xl" 
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-playfair leading-tight drop-shadow-lg">
            Sanskriti Junction
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 font-medium drop-shadow-md">
            Bringing Culture, Wellness & Community Together
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            Experience the joy of movement, music, and mindfulness — where simplicity becomes 
            strength and culture becomes connection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-[#1e3a8a] hover:bg-gray-100 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all font-semibold"
              onClick={() => scrollToSection("programs")}
            >
              Explore Our Programs
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              // Updated outline button to be visible against the potentially lighter bottom gradient
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;