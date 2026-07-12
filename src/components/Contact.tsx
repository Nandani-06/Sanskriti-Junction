import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              We'd love to collaborate with you — whether for a school program, cultural event, or wellness workshop
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-border hover:border-primary transition-all duration-300 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                    <a 
                      href="tel:+61430201625" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +61 430 201 625
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:sanskritijunction@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      sanskritijunction@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border shadow-lg mb-8 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Melbourne, Australia</p>
              <p className="text-sm text-muted-foreground mt-2">
                Serving communities across Melbourne and beyond
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-playfair">
                Connect With Us
              </h3>
              <div className="flex justify-center space-x-4 mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                  asChild
                >
                  <a href="https://www.facebook.com/share/1ADSHop4g5/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                {/* <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button> */}
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                  asChild
                >
                  <a href="https://www.youtube.com/@SanskritiJunction" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">
                Ready to bring culture and wellness into your community?
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a href="https://form.jotform.com/260269177685470">
                  Join Us Today
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
