import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Award, Heart, Shield, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Hospitality",
      description: "Warm, personalized service that exceeds expectations",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Commitment to the highest standards in every detail",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through integrity",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Award-winning service and accommodations",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <Hero 
          title="ABOUT US"
          subtitle="Our Story"
          showCTA={false}
          height="h-[400px]"
        />

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-foreground">
                  A Legacy of Luxury
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
                <p>
                  Ashok Hotels stands as a beacon of luxury and refined hospitality, offering guests 
                  an unparalleled experience that seamlessly blends elegance with contemporary comfort. 
                  Our commitment to excellence has made us a preferred destination for discerning travelers 
                  from around the world.
                </p>
                <p>
                  Nestled in the heart of Paradise City, our property features meticulously designed 
                  accommodations, each thoughtfully appointed with premium amenities and sophisticated 
                  décor. From the moment you arrive, you'll be enveloped in an atmosphere of tranquility 
                  and sophistication.
                </p>
                <p>
                  Our dedication extends beyond luxurious rooms to encompass world-class dining experiences, 
                  state-of-the-art facilities, and personalized service that anticipates your every need. 
                  Whether you're traveling for business or leisure, Ashok Hotels provides the perfect 
                  sanctuary for your stay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-semibold text-center mb-16 text-foreground">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-card rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                    <value.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-12 text-foreground">
                Awards & Recognition
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  "Best Luxury Hotel 2024",
                  "Excellence in Service Award",
                  "5-Star Accommodation Rating"
                ].map((award, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-lg"
                  >
                    <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                    <p className="text-lg font-display font-semibold text-foreground">
                      {award}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-semibold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
              Our dedicated staff is committed to making your stay memorable with exceptional 
              service and attention to detail.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
