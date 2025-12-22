import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import yoga from "@/assets/yoga.jpg";
import music from "@/assets/music.jpg";
import chess from "@/assets/chess_h.png";
import snakeandladder from "@/assets/snl_h.png";

const ProgramsDetailed = () => {
  return (
    <section id="programs-detailed" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Yog & Meditation */}
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🧘</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-playfair">
                Yog & Meditation
              </h2>
            </div>

            <img
              src={yoga}
              alt="Yog & Meditation"
              className="w-full h-72 object-cover rounded-xl shadow-md mb-8"
            />

            <div className="space-y-8">
              <Card className="border-border hover:border-primary transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-playfair">
                    Yog – Union of Mind, Body & Soul
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Rooted in the Sanskrit word <span className="font-semibold italic">Yuj</span> (to unite), 
                    our Yoga sessions blend ancient wisdom with modern awareness. Designed for all ages, our 
                    classes enhance flexibility, calm the mind, and build inner resilience.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 mt-4">
                    <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Improves posture, immunity, and metabolism",
                        "Reduces stress and anxiety",
                        "Strengthens emotional and physical balance",
                        "Promotes overall well-being"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-accent transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-playfair">
                    Meditation – A Journey Within
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <span className="font-semibold italic">Vipassana</span>, meaning "to see things as they are," 
                    helps you quiet the mind and connect with stillness. Through breath awareness and mindfulness, 
                    our sessions guide you toward peace, compassion, and inner clarity.
                  </p>
                  <div className="text-center py-6 bg-accent/10 rounded-lg">
                    <p className="text-lg font-medium text-foreground">
                      🪷 Experience the calm joy of simply being.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Music, Dance & Drama */}
          <div className="animate-fade-in" id="music">
            <Card className="border-border bg-gradient-to-br from-secondary/5 to-primary/5">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">🎭</div>
                  <h3 className="text-2xl font-bold text-foreground font-playfair">
                    Music, Dance & Drama
                  </h3>
                </div>

                <img
                  src={music}
                  alt="Music, Dance & Drama"
                  className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
                />

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Celebrate creativity and cultural storytelling through Indian classical and folk forms. 
                  Music and dance enhance cognitive agility, coordination, and emotional expression — while 
                  connecting participants with timeless traditions.
                </p>

                <div className="bg-background rounded-lg p-6 mt-4">
                  <h4 className="font-semibold text-foreground mb-3">🎭 Musical Drama</h4>
                  <p className="text-muted-foreground text-sm">
                    Our theatre-based workshops draw from ancient Indian tales that inspire moral courage, 
                    kindness, and integrity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cultural Games & Learning */}
          <div className="animate-fade-in" id="games">
            <Card className="border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">🎲</div>
                  <h3 className="text-2xl font-bold text-foreground font-playfair">
                    Traditional Games & Learning
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Discover India's gift to the world — games that teach life lessons through play.
                  </p>
                </div>

                {/* Chess + Snakes & Ladders in same row */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">

                  {/* Chess */}
                  <div className="bg-muted/30 rounded-lg p-6">
                    <img
                      src={chess}
                      alt="Chess"
                      className="w-full h-44 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-bold text-foreground mb-2">Chess (Chaturanga)</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn strategy, patience, and problem-solving inspired by the ancient Indian game of kings.
                    </p>
                  </div>

                  {/* Snakes & Ladders */}
                  <div className="bg-muted/30 rounded-lg p-6">
                    <img
                      src={snakeandladder}
                      alt="Snakes and Ladders"
                      className="w-full h-44 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-bold text-foreground mb-2">Snakes & Ladders (Moksha Patam)</h4>
                    <p className="text-sm text-muted-foreground">
                      Explore the moral roots of this fun game, where good deeds lift you up and poor choices bring you down.
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramsDetailed;
