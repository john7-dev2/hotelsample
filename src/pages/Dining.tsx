import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Utensils, Coffee, Wine, Clock } from "lucide-react";

const Dining = () => {
  const restaurants = [
    {
      name: "Oudh",
      type: "Indian Cuisine",
      description: "Relish authentic Indian delights with traditional recipes and rich flavors",
      hours: "12:00 PM - 11:00 PM",
      icon: Utensils,
    },
    {
      name: "Frontier",
      type: "North-Western Indian",
      description: "Savor the bold flavors of north-western Indian cuisines with traditional tandoor specialties",
      hours: "12:00 PM - 11:00 PM",
      icon: Utensils,
    },
    {
      name: "Sagar Ratna",
      type: "South Indian",
      description: "Enjoy authentic South Indian delights including dosas, idlis, and traditional preparations",
      hours: "7:00 AM - 10:00 PM",
      icon: Coffee,
    },
    {
      name: "Shraman",
      type: "Jain Food",
      description: "Pure vegetarian Jain food prepared with care following Jain dietary guidelines",
      hours: "12:00 PM - 10:00 PM",
      icon: Utensils,
    },
    {
      name: "Nom-Nom",
      type: "Pan-Asian",
      description: "Discover Pan-Asian delicacies with flavors from across Asia",
      hours: "12:00 PM - 11:00 PM",
      icon: Utensils,
    },
    {
      name: "Zerruco",
      type: "Mediterranean",
      description: "Experience Mediterranean delights with fresh ingredients and authentic flavors",
      hours: "6:00 PM - 11:00 PM",
      icon: Wine,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <Hero 
          title="DINING"
          subtitle="Culinary Excellence"
          showCTA={false}
          height="h-[400px]"
        />

        {/* Intro Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl font-display font-semibold mb-6 text-foreground">
                Exceptional Dining Experiences
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Indulge in world-class cuisine at our diverse restaurants. From authentic Indian delights 
                to Mediterranean flavors, each venue offers a unique culinary journey. Room service is 
                available for in-room dining comforts.
              </p>
            </div>
          </div>
        </section>

        {/* Restaurants Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {restaurants.map((restaurant, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Icon */}
                    <div className="flex justify-center md:justify-start">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/10">
                        <restaurant.icon className="w-12 h-12 text-gold" />
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-gold uppercase tracking-wider">
                          {restaurant.type}
                        </span>
                      </div>
                      <h3 className="text-3xl font-display font-semibold mb-4 text-foreground">
                        {restaurant.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {restaurant.description}
                      </p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-5 h-5 text-gold" />
                        <span>{restaurant.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-semibold text-center mb-12 text-foreground">
                Signature Dishes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Pan-Seared Sea Bass", "Wagyu Beef Tenderloin", "Lobster Thermidor"].map((dish, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-40 bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Utensils className="w-12 h-12 text-gold/30" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {dish}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-semibold mb-6">
              Reserve Your Table
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
              Book your dining experience and savor the finest culinary delights
            </p>
            <Button variant="gold" size="lg" className="text-base px-12 py-6 h-auto">
              MAKE A RESERVATION
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dining;
