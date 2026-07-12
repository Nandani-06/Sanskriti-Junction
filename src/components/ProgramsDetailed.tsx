import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";
import yoga from "@/assets/yoga.jpg";
import music from "@/assets/music.jpg";
import chess from "@/assets/chess_h.png";
import snakeandladder from "@/assets/snl_h.png";
import rangoli from "@/assets/rangoli1.jpg";
import heena from "@/assets/mehndi.jpg";
import yog from "@/assets/med.png";
import drama from "@/assets/hindi.jpg"

interface Craft {
  image: string;
  title: string;
  description: string;
}

interface Program {
  slug: string;
  emoji: string;
  title: string;
  image?: string;
  issues: string[];
  intro: string;
  crafts?: Craft[];
  games?: Craft[];
  benefits: string[];
  duration: string;
  recommendedAge?: string;
  cost: string[];
}

const programs: Program[] = [
  {
    slug: "yoga",
    emoji: "🧘",
    title: "Yoga for Schools & Community",
    image: yoga,
    issues: [
      "Stress",
      "Anxiety",
      "Poor posture",
      "Sleep difficulties",
      "Emotional dysregulation",
    ],
    intro:
      "Age-appropriate yoga sessions combining gentle movement, breathing techniques and relaxation to support physical and emotional wellbeing.",
    benefits: [
      "Reduces stress and anxiety",
      "Improves concentration",
      "Enhances flexibility",
      "Supports emotional regulation",
      "Builds resilience",
    ],
    duration: "45–60 minutes",
    cost: ["AUD $250–$500 per session"],
  },
  {
    slug: "meditation",
    emoji: "🪷",
    title: "Meditation & Mindfulness",
    image: yog,
    issues: [
      "Increasing anxiety",
      "Poor emotional regulation",
      "Digital overload",
      "Difficulty focusing",
    ],
    intro:
      "Guided meditation sessions introducing practical breathing techniques, mindfulness exercises and relaxation practices suitable for children, families and adults.",
    benefits: [
      "Improves focus",
      "Builds resilience",
      "Supports mental wellbeing",
      "Reduces stress",
      "Improves sleep quality",
    ],
    duration: "30–45 minutes",
    cost: ["AUD $250–$450 per session"],
  },
  {
    slug: "folk-dance",
    emoji: "💃",
    title: "Indian Folk Dance & Movement",
    image: music,
    issues: [
      "Physical inactivity",
      "Childhood obesity",
      "Low confidence",
      "Limited cultural inclusion",
    ],
    intro:
      "An energetic movement session introducing participants to Indian folk dances such as Garba, Bhangra and Bollywood-inspired routines in a fun, inclusive environment.",
    benefits: [
      "Promotes physical fitness",
      "Improves coordination and balance",
      "Builds confidence",
      "Encourages teamwork",
      "Celebrates multicultural diversity",
    ],
    duration: "45–60 minutes",
    cost: ["AUD $300–$550 per session"],
  },
  {
    slug: "traditional-art",
    emoji: "🎨",
    title: "Traditional Art Workshop",
    issues: [
      "Children spend increasing amounts of time on screens",
      "Reduced opportunities for creative expression",
      "Rising anxiety and reduced concentration",
      "Limited exposure to multicultural arts",
    ],
    intro:
      "A hands-on creative workshop where participants explore two ancient Indian art forms — Rangoli and Heena (Mehndi) — using coloured powders, flowers, natural materials, and reusable eco-friendly resources. The session combines creativity, mindfulness and cultural storytelling.",
    crafts: [
      {
        image: rangoli,
        title: "Rangoli",
        description:
          "Colourful floor art made with powders, flowers and natural materials, traditionally created to welcome guests and celebrate festivals.",
      },
      {
        image: heena,
        title: "Heena (Mehndi)",
        description:
          "Intricate henna designs applied to the hands, a celebrated Indian art form linked to festivals, ceremonies and self-expression.",
      },
    ],
    benefits: [
      "Improves creativity and imagination",
      "Enhances fine motor skills",
      "Encourages mindfulness and emotional regulation",
      "Builds cultural appreciation",
      "Strengthens teamwork and communication",
    ],
    duration: "60–90 minutes",
    recommendedAge: "4 years to Adults",
    cost: [
      "Schools: AUD $350–$600 per session",
      "Community groups: AUD $400–$650",
      "Corporate/team building: AUD $700–$1,200",
    ],
  },
  {
    slug: "traditional-games",
    emoji: "🎲",
    title: "Traditional Games & Social Connection",
    issues: [
      "Screen addiction",
      "Social isolation",
      "Reduced outdoor play",
      "Poor teamwork skills",
    ],
    intro:
      "Participants enjoy traditional Indian games designed to promote movement, communication, laughter and meaningful social interaction — including Chess and Snakes & Ladders.",
    games: [
      {
        image: chess,
        title: "Chess (Chaturanga)",
        description:
          "Learn strategy, patience, and problem-solving inspired by the ancient Indian game of kings.",
      },
      {
        image: snakeandladder,
        title: "Snakes & Ladders (Moksha Patam)",
        description:
          "Explore the moral roots of this fun game, where good deeds lift you up and poor choices bring you down.",
      },
    ],
    benefits: [
      "Builds friendships",
      "Encourages physical activity",
      "Develops teamwork",
      "Improves problem-solving",
      "Creates positive social experiences",
    ],
    duration: "60–90 minutes",
    cost: ["AUD $350–$600 per session"],
  },
  {
    slug: "drama",
    emoji: "🎭",
    title: "Drama & Cultural Storytelling",
    image: drama,
    issues: [
      "Limited understanding of cultural diversity",
      "Reduced empathy",
      "Declining family and community connection",
    ],
    intro:
      "Interactive storytelling sessions inspired by Indian culture and universal values, including kindness, courage, respect, gratitude and compassion.",
    benefits: [
      "Improves listening skills",
      "Develops empathy",
      "Encourages positive behaviour",
      "Supports literacy",
      "Promotes cultural understanding",
    ],
    duration: "45–60 minutes",
    cost: ["AUD $250–$450 per session"],
  },
];

const ProgramsDetailed = () => {
  return (
    <section id="programs-detailed" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">

          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-playfair">
              Our Programs
            </h2>
          </div>

          {programs.map((program, index) => (
            <div
              className="animate-fade-in scroll-mt-24"
              key={program.slug}
              id={`program-${program.slug}`}
            >
              <Card className="border-border hover:border-primary transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{program.emoji}</div>
                    <h3 className="text-2xl font-bold text-foreground font-playfair">
                       {program.title}
                    </h3>
                  </div>

                  {program.image && (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-72 object-cover rounded-xl shadow-md mb-8"
                    />
                  )}

                  {/* Current Issues */}
                  <div className="bg-destructive/5 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Current Issues</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {program.issues.map((issue, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Introduction */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Program Introduction</h4>
                    <p className="text-muted-foreground leading-relaxed">{program.intro}</p>
                  </div>

                  {/* Crafts (Rangoli + Heena) */}
                  {program.crafts && (
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {program.crafts.map((craft, idx) => (
                        <div key={idx} className="bg-muted/30 rounded-lg p-6">
                          <img
                            src={craft.image}
                            alt={craft.title}
                            className="w-full h-44 object-cover rounded-lg mb-3"
                          />
                          <h4 className="font-bold text-foreground mb-2">{craft.title}</h4>
                          <p className="text-sm text-muted-foreground">{craft.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Games (Chess + Snakes & Ladders) */}
                  {program.games && (
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {program.games.map((game, idx) => (
                        <div key={idx} className="bg-muted/30 rounded-lg p-6">
                          <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-44 object-cover rounded-lg mb-3"
                          />
                          <h4 className="font-bold text-foreground mb-2">{game.title}</h4>
                          <p className="text-sm text-muted-foreground">{game.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Benefits */}
                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {program.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration / Age / Cost */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-border">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Duration</p>
                      <p className="text-sm text-muted-foreground">{program.duration}</p>
                    </div>
                    {program.recommendedAge && (
                      <div>
                        <p className="text-sm font-semibold text-foreground">Recommended Age</p>
                        <p className="text-sm text-muted-foreground">{program.recommendedAge}</p>
                      </div>
                    )}
                    <div className="sm:col-span-2">
                      <p className="text-sm font-semibold text-foreground mb-1">Suggested Cost</p>
                      {program.cost.map((line, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProgramsDetailed;
