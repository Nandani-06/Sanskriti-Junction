import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sparkles, Flower2 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Wellness",
      description: "Nurture your mind, body, and soul through ancient wisdom and modern awareness",
    },
    {
      icon: Users,
      title: "Offline Connection",
      description: "Connect generations through shared cultural experiences and meaningful relationships",
    },
    {
      icon: Sparkles,
      title: "Culture",
      description: "Celebrate the rich traditions of Indian art, music, dance, and storytelling",
    },
    {
      icon: Flower2,
      title: "Mindfulness",
      description: "Find peace, clarity, and purpose through meditation and self-awareness",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
            About Sanskriti Junction
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Sanskriti Junction, we believe wellness is more than fitness, it is about creating a balanced, 
            connected and meaningful life. By bringing together offline culture, mindful practices and strong 
            community connections, we inspire children, families and communities to grow with confidence, 
            resilience and joy. Every experience we create celebrates wellbeing, cultural heritage and the 
            power of belonging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-playfair">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To nurture resilience, harmony, and happiness through the fusion of culture, wellness, 
              and values. We celebrate simplicity as a timeless virtue, a reflection of authenticity 
              and grace; and believe that true well-being begins from within.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-playfair">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create a community where every generation connects with their roots through art, 
              culture, and mindful living, empowering individuals to live with joy, awareness, 
              and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
