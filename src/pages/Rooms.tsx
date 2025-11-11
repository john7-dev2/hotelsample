import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bed, Maximize, Users, Wifi } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      name: "Deluxe Room",
      description: "Elegant room with king-size bed, modern amenities, and city views",
      price: "$299",
      features: ["King Bed", "40 m²", "2 Guests", "Free Wi-Fi"],
      icons: [Bed, Maximize, Users, Wifi],
    },
    {
      name: "Executive Suite",
      description: "Spacious suite with separate living area and premium furnishings",
      price: "$499",
      features: ["King Bed", "65 m²", "4 Guests", "Free Wi-Fi"],
      icons: [Bed, Maximize, Users, Wifi],
    },
    {
      name: "Presidential Suite",
      description: "Ultimate luxury with panoramic views, private terrace, and butler service",
      price: "$899",
      features: ["2 King Beds", "120 m²", "6 Guests", "Free Wi-Fi"],
      icons: [Bed, Maximize, Users, Wifi],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <Hero 
          title="OUR ROOMS"
          subtitle="Luxury Accommodations"
          showCTA={false}
          height="h-[400px]"
        />

        {/* Rooms Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {rooms.map((room, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {/* Room Image Placeholder */}
                    <div className="h-80 bg-muted rounded-xl flex items-center justify-center">
                      <Bed className="w-24 h-24 text-gold/30" />
                    </div>

                    {/* Room Details */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-3xl font-display font-semibold mb-4 text-foreground">
                        {room.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {room.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {room.features.map((feature, fIndex) => {
                          const Icon = room.icons[fIndex];
                          return (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <Icon className="w-5 h-5 text-gold" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                          <p className="text-3xl font-display font-semibold text-gold">
                            {room.price}
                            <span className="text-base text-muted-foreground font-normal">/night</span>
                          </p>
                        </div>
                        <Button variant="gold" size="lg">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-6 text-foreground">
                All Rooms Include
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["24/7 Room Service", "Complimentary Breakfast", "Daily Housekeeping", "Premium Toiletries"].map((item, index) => (
                  <div key={index} className="p-4">
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rooms;
