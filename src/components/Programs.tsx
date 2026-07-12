import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Music, Brain, School, Users, User, Heart, ChessRook } from "lucide-react";
import { useCallback } from "react";



const Programs = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const programs = [
    {
      icon: Brain,
      title: "Yog & Meditation",
      description: "Unite your mind, body, and soul through ancient wisdom",
      features: ["Improves flexibility & immunity", "Reduces stress & anxiety", "Vipassana meditation", "All ages welcome"],
      color: "text-accent",
      id: "program-yoga"
    },
    {
      icon: Music,
      title: "Indian Folk Dance & Movement",
      description: "Celebrate creativity through classical and folk traditions",
      features: ["Classical & folk forms", "Musical drama", "Cultural storytelling", "Garba choreography"],
      color: "text-secondary",
      id: "program-folk-dance"
    },
    {
      icon: Atom,
      title: "Traditional Art Workshop",
      description: "Express yourself through Henna, Rangoli, and more",
      features: ["Henna (Mehndi) art", "Rangoli workshops", "Cultural crafts", "Wall art & design"],
      color: "text-accent",
      id: "program-traditional-art"
    },
    {
      icon: ChessRook,
      title: "Traditional Games & Social Connection",
      description: "Learn life lessons through traditional Indian games",
      features: ["Chess (Chaturanga)", "Snakes & Ladders", "Strategy & teamwork", "Moral education"],
      color: "text-primary",
      id: "program-traditional-games"
    },
    {
      icon: Users,
      title: "Drama & Cultural Storytelling ",
      description: "Cultural events, festivals, and language learning",
      features: ["Festival celebrations", "Hindi through Bhajan", "Gujarati through Garba", "Event choreography"],
      color: "text-secondary",
      id: "program-drama"
    },
    {
      icon: User,
      title: "Aged Care Programs",
      description: "Wellness and connection for seniors",
      features: ["Gentle yoga", "Cultural activities", "Social connection", "Expert discussions"],
      color: "text-primary",
      id: "age-care"
    },
    {
      icon: School,
      title: "Programs Categories",
      description: "Wellbeing & cultural experiences for every setting",
      features: ["Schools & early learning", "Community & council", "Corporate wellbeing", "Special events & festivals"],
      color: "text-accent",
      id: "school"
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover engaging cultural, wellness, and educational experiences designed to inspire learning and connection. 
            Our programs are affordable and flexible, with most sessions ranging from $5–$20 per participant and group bookings typically between $200–$375. Whether you're planning a one-off workshop, a school incursion, or an ongoing program, we can tailor an experience that fits your goals, schedule, and budget.
          </p>
        </div>
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              onClick={() => scrollToSection(program.id)}
              className="cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4 ${program.color}`}>
                  <program.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground font-playfair">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;
