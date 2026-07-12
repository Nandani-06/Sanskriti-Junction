import { Card, CardContent } from "@/components/ui/card";

const SchoolPrograms = () => {
  const categories = [
    {
      number: "1",
      title: "Schools & Early Learning Wellbeing Programs",
      emoji: "🎓",
      items: ["Creative Wellness", "Yoga", "Meditation", "Rangoli", "Traditional Games", "Dance"],
    },
    {
      number: "2",
      title: "Community & Council Programs",
      emoji: "🏛️",
      items: ["Festival Experiences", "Family Wellbeing", "Cultural Connection", "Seniors Wellness"],
    },
    {
      number: "3",
      title: "Corporate Wellbeing",
      emoji: "💼",
      items: ["Team Building", "Stress Management", "Mindfulness", "Cultural Diversity Workshops"],
    },
    {
      number: "4",
      title: "Special Events & Cultural Experiences",
      emoji: "🎉",
      items: [
        "Diwali",
        "Holi",
        "NAIDOC Week Collaborations",
        "Harmony Week",
        "Children's Festivals",
        "Library & Museum Programs",
      ],
    },
  ];

  return (
    <section id="school" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-5xl mb-4">🌏</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair">
              Program Categories
            </h2>
            <p className="text-xl font-medium text-primary mb-2">
              Tailored Experiences for Every Setting
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From classrooms to community halls, corporate offices to cultural festivals — we design
              wellbeing and cultural experiences that fit your group, goals, and setting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-border hover:border-secondary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold text-secondary border-2 border-secondary">
                        {category.number}
                      </div>
                    </div>
                    <div className="flex-1 flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground font-playfair flex-1">
                        {category.title}
                      </h3>
                      <div className="text-3xl ml-4">{category.emoji}</div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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
