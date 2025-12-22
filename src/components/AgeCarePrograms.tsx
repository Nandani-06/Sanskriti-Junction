import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import agecare from "@/assets/agecare.jpg";


const AgeCarePrograms = () => {
  const benefits = [
    "Improved immunity, flexibility, and circulation",
    "Reduced stress, tension, and anxiety",
    "Enhanced breathing through Pranayama",
    "Opportunities to make new friends and rediscover joy"
  ];

  return (
    <section id="age-care" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-5xl mb-4">👫</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair">
              Aged Care Programs
            </h2>
            <p className="text-xl font-medium text-primary">
              Wellness & Connection for Seniors
            </p>
          </div>

          <Card className="border-border hover:border-accent transition-all duration-300 shadow-lg animate-fade-in">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Aged Care Programs bring together gentle Yog, Meditation, and Cultural Dance to support 
                both physical health and emotional well-being.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4">Choose from:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Regular weekly sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">One-day wellness or cultural activity sessions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Benefits Include:</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
                <img
                  src={agecare}
                  alt="Aged Care programs"
                  className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
                />
              <p className="text-muted-foreground text-sm leading-relaxed">
                We also host live discussions with Yoga experts — making wellness engaging and accessible for all.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AgeCarePrograms;
