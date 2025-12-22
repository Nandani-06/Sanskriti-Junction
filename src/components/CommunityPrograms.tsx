import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import cultural from "@/assets/cultural.jpg";
import hindi from "@/assets/hindi.jpg";


const CommunityPrograms = () => {
  const programs = [
    {
      emoji: "🎆",
      title: "Cultural Events & Festivals",
      subtitle: "Bring Your Event to Life with Sanskriti Junction!",
      description: "Whether it's Harmony Day, Cultural Week, or an Indian Festival, we create unforgettable experiences that blend music, dance, and storytelling to celebrate diversity and unity.",
      highlight: "✨ Custom performances and workshops available for schools, communities, and events. ✨",
      image: cultural
    },
    {
      emoji: "🎭",
      title: "Learn Hindi Through Dance & Drama",
      subtitle: "Make language learning fun and meaningful!",
      description: "Our interactive programs teach Hindi through storytelling, drama, and performance, helping children naturally absorb vocabulary and pronunciation while connecting with Indian culture.",
      highlight: "🎶 Includes devotional songs and bhajans to deepen understanding and engagement.",
      image: hindi
    },
    {
      emoji: "💃",
      title: "Garba & Private Cultural Dance Choreography",
      subtitle: "Celebrating Life Through Dance",
      description: "Born in 2021, Sanskriti Junction began with a vision to help children in Australia experience the vibrant joy of Garba — a dance of devotion, unity, and joy. Our sessions bring together families and generations, celebrating the rhythm of togetherness and the spirit of community.",
      highlight: null,
      image: heroImage 
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-5xl mb-4">🪔</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair">
              Community Programs
            </h2>
          </div>

          <div className="space-y-6">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{program.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 font-playfair">
                        {program.title}
                      </h3>
                      <p className="text-lg font-medium text-primary mb-3">
                        {program.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {program.description}
                      </p>
                      {program.highlight && (
                        <div className="bg-primary/10 rounded-lg p-4 mt-4">
                          <p className="text-center text-foreground font-medium">
                            {program.highlight}
                          </p>
                        </div>
                      )}
                      {program.image && (
                        <div className="mt-4">
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-64 object-cover rounded-xl shadow-md"
                          />
                        </div>
                      )}
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

export default CommunityPrograms;
