import { Card, CardContent } from "@/components/ui/card";

const SchoolPrograms = () => {
  const packages = [
    {
      number: "1",
      title: "Resilience & Wellbeing Through Dance and Drama",
      description: "Using Indian cultural stories, students explore courage, emotional intelligence, and the ability to bounce back from challenges — all through fun, expressive performance-based learning.",
      highlight: "🎭 Ideal for annual functions, wellbeing weeks, and creative arts programs.",
      emoji: "🎭"
    },
    {
      number: "2",
      title: "Always Make the Right Choice (Snakes & Ladders Workshop)",
      description: "Students discover the origins of Snakes and Ladders (Moksha Patam) and the moral lessons behind it: good actions lift us up, while negative choices pull us down.",
      highlight: "An enjoyable, value-based workshop that blends ethics with fun!",
      emoji: "🎲"
    },
    {
      number: "3",
      title: "From Chaturanga to Chess – The Great Game Journey",
      description: "Explore the fascinating evolution of Chess, born in India as Chaturanga more than 1,400 years ago.",
      features: [
        "Discover the cultural history of chess",
        "Play on traditional-style boards",
        "Learn creative strategies and teamwork skills"
      ],
      highlight: "🕹️ Think like a strategist, play like a champion!",
      emoji: "♟️"
    }
  ];

  return (
    <section id="school" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-5xl mb-4">🎓</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair">
              School Programs
            </h2>
            <p className="text-xl font-medium text-primary mb-2">
              Cultural Incursions & Educational Workshops
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our school workshops combine learning with creativity, helping students explore resilience, 
              ethics, and teamwork through play, movement, and drama.
            </p>
          </div>

          <div className="space-y-6">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className="border-border hover:border-secondary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold text-secondary border-2 border-secondary">
                        {pkg.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground font-playfair flex-1">
                          Package {pkg.number} – {pkg.title}
                        </h3>
                        <div className="text-3xl ml-4">{pkg.emoji}</div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {pkg.description}
                      </p>

                      {pkg.features && (
                        <div className="bg-muted/30 rounded-lg p-4 mb-4">
                          <p className="font-medium text-foreground mb-2">Students will:</p>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-secondary mt-1">•</span>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-primary/10 rounded-lg p-4 mt-4">
                        <p className="text-center text-foreground font-medium">
                          {pkg.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolPrograms;
