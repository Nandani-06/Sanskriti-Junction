import { Card, CardContent } from "@/components/ui/card";
import { Flower2, Sparkles, Users, BookOpen, Calendar } from "lucide-react";
import mehndi from "@/assets/mehndi.jpg";
import rangoli from "@/assets/rangoli1.jpg";

const ArtDesign = () => {
  const hennaFeatures = [
    "Experience the soothing process of applying natural henna",
    "Learn about its cultural significance and symbolism",
    "Enjoy a personalised design created just for you"
  ];

  const rangoliMaterials = [
    "Coloured sand",
    "Rice flour or chalk",
    "Flower petals and natural powders"
  ];

  const whyJoin = [
    {
      icon: Users,
      title: "Inclusive & Interactive",
      description: "Suitable for all ages and skill levels"
    },
    {
      icon: BookOpen,
      title: "Cultural Learning",
      description: "Understand the meaning behind each design and motif"
    },
    {
      icon: Sparkles,
      title: "Mindful Creativity",
      description: "Focus, relax, and connect through artistic expression"
    },
    {
      icon: Calendar,
      title: "Perfect for Events",
      description: "Add a vibrant cultural touch to festivals, schools, or community celebrations"
    }
  ];

  return (
    <section id="art" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-5xl mb-4">🏵️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair">
              Art & Design
            </h2>
            <p className="text-xl font-medium text-primary mb-2">
              Celebrating Creativity, Colour & Cultural Expression
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              At Sanskriti Junction, art is more than decoration — it's a living expression of culture, 
              emotion, and community. Our Art & Design workshops invite participants to explore traditional 
              Indian art forms like Henna (Mehndi) and Rangoli, blending history, symbolism, and hands-on creativity.
            </p>
          </div>

          <div className="space-y-8">
            {/* Henna Art */}
            <Card className="border-border hover:border-accent transition-all duration-300 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">⚛</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-playfair">
                      Henna (Mehndi) Art
                    </h3>
                    <p className="text-lg font-medium text-accent">The Ancient Art of Adornment</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Henna, or Mehndi, is a centuries-old art form that originated in warm regions like North 
                  Africa, the Middle East, and India. Originally valued for its cooling and healing properties, 
                  it evolved into a beloved tradition used to adorn hands and feet with beautiful, intricate 
                  designs for weddings, festivals, and celebrations.
                </p>

                <div className="bg-accent/10 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">Our Henna Sessions</h4>
                  <p className="text-muted-foreground mb-4">
                    At our customised Henna (Mehndi) sessions, you can:
                  </p>
                  <ul className="space-y-2">
                    {hennaFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 text-center py-3 bg-background rounded-lg">
                    <p className="text-foreground font-medium">
                      💫 A beautiful fusion of art, culture, and mindfulness.
                    </p>
                  </div>
                  </div>
                  <img
                  src={mehndi}
                  alt="Mehndi Design"
                  className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
                />
                
              </CardContent>
            </Card>

            {/* Rangoli Art */}
            <Card className="border-border hover:border-primary transition-all duration-300 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🌈</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-playfair">
                      Rangoli Art
                    </h3>
                    <p className="text-lg font-medium text-primary">The Colours of Tradition</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rangoli is an ancient Indian folk-art form that transforms floors into canvases of colour 
                  and beauty. The word Rangoli comes from the Sanskrit "Rangavali" — meaning "row of colours." 
                  Traditionally created during festivals and celebrations, Rangoli welcomes good luck, prosperity, 
                  and the goddess Lakshmi into the home.
                </p>

                <div className="bg-primary/10 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">Our Rangoli Workshops</h4>
                  <p className="text-muted-foreground mb-4">
                    In our interactive Rangoli sessions, participants learn how to design stunning patterns using:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-4">
                    {rangoliMaterials.map((material, index) => (
                      <div key={index} className="bg-background rounded-lg px-4 py-3 text-center">
                        <span className="text-sm text-muted-foreground font-medium">{material}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We'll guide you through symbolic patterns and the stories they tell — representing harmony, 
                    beauty, and the triumph of positivity.
                  </p>
                  <div className="text-center py-3 bg-background rounded-lg">
                    <p className="text-foreground font-medium">
                      🌸 A joyful, hands-on experience that brings colour, mindfulness, and community together.
                    </p>
                  </div>
                </div>
                <img
                  src={rangoli}
                  alt="Beautiful Rangoli making"
                  className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
                />
              </CardContent>
            </Card>

            {/* Why Join */}
            <Card className="border-border bg-gradient-to-br from-accent/5 to-primary/5 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  {/* <Palette className="h-8 w-8 text-primary" /> */}
                  <Flower2 className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground font-playfair">
                    Why Join Our Art & Design Sessions?
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {whyJoin.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center py-4 bg-background rounded-lg">
                  <p className="text-foreground font-medium">
                    ✨ Unleash your creativity while experiencing the beauty and symbolism of India's timeless art traditions. ✨
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDesign;
