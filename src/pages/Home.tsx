import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Waves, Dumbbell, Wifi, Car, MapPin, Plane } from "lucide-react";
import hotelExterior from "@/assets/hotel-exterior.png";

const Home = () => {
  const features = [
    {
      icon: Waves,
      title: "Outdoor Pool & Spa",
      description: "Outdoor swimming pool, spa and wellness centre for ultimate relaxation",
    },
    {
      icon: Dumbbell,
      title: "Fitness Centre",
      description: "State-of-the-art fitness facilities to maintain your wellness routine",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Complimentary high-speed WiFi throughout the property",
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Complimentary parking with valet service available",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <Hero 
          title="ASHOK HOTELS"
          subtitle="WELCOME TO ASHOK HOTELS"
        />

        {/* Welcome Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-foreground">
                The Ashok, New Delhi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Located in the capital city of India, The Ashok offers a host of facilities such as an outdoor swimming pool, 
                spa and wellness centre and a fitness centre. Free WiFi access is available.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Experience luxury accommodations with modern amenities including air conditioning, minibar, electric kettle, 
                and premium toiletries. Enjoy world-class dining at our multiple restaurants, shared lounge, ticket service, 
                and tour desk facilities.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>2 km from Rashtrapati Bhavan</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>5 km from India Gate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-gold" />
                  <span>15 km from Airport</span>
                </div>
              </div>
              <Button variant="gold" size="lg">
                Explore Our Rooms
              </Button>
            </div>
          </div>
        </section>

        {/* Hotel Image Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <img 
                src={hotelExterior} 
                alt="Ashok Hotels Exterior" 
                className="w-full rounded-2xl shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display font-semibold text-center mb-16 text-foreground">
              Our Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-lg hover:bg-card transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Ready for an Unforgettable Stay?
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
              Book your luxury accommodation today and experience the finest hospitality
            </p>
            <Button variant="gold" size="lg" className="text-base px-12 py-6 h-auto">
              BOOK YOUR STAY
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
