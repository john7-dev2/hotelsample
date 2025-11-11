import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Award, Heart, Shield, Star, Waves, Dumbbell, Coffee, Users, Wifi, Car, TreePine, Music, Utensils, Wine, Phone, Shield as SecurityIcon, Clock, Briefcase, Globe, Baby, CreditCard, MapPin, Zap, Bed, Bath, Gamepad2, Camera, ShoppingBag } from "lucide-react";

const About = () => {
  const facilities = [
    {
      icon: Waves,
      title: "Pool & Spa",
      description: "Outdoor swimming pool with spa and wellness centre",
    },
    {
      icon: Dumbbell,
      title: "Fitness Centre",
      description: "Modern fitness facilities for your workout needs",
    },
    {
      icon: Coffee,
      title: "Shared Lounge",
      description: "Comfortable lounge area for relaxation and socializing",
    },
    {
      icon: Users,
      title: "Tour Desk",
      description: "Ticket service and tour desk for local attractions",
    },
  ];

  const roomAmenities = [
    "Television with cable channels",
    "Air conditioning for comfort",
    "Minibar with refreshments",
    "Electric kettle for beverages",
    "Private bathroom with shower",
    "Free toiletries provided",
    "Comfortable slippers",
    "Seating area for relaxation",
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
                  Located in the capital city of India, The Ashok, New Delhi stands as a beacon of luxury and refined hospitality. 
                  Our commitment to excellence has made us a preferred destination for discerning travelers from around the world.
                </p>
                <p>
                  Our property features meticulously designed accommodations, each room equipped with TV, air conditioning, 
                  minibar, electric kettle, and private bathroom with shower, free toiletries and slippers. Additional comforts 
                  include a seating area and cable channels for your entertainment.
                </p>
                <p>
                  Beyond luxurious rooms, we offer an outdoor swimming pool, spa and wellness centre, fitness facilities, 
                  shared lounge, ticket service, and tour desk. Our six distinctive restaurants serve cuisines from Indian 
                  to Mediterranean, ensuring every dining experience is memorable.
                </p>
                <p>
                  Conveniently located just 2 km from Rashtrapati Bhavan and 5 km from India Gate, our hotel provides 
                  easy access to New Delhi's iconic landmarks. The New Delhi Railway Station is 9 km away, while Delhi 
                  International Airport is 15 km from the property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-semibold text-center mb-16 text-foreground">
              Our Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {facilities.map((facility, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-card rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                    <facility.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Room Amenities Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-semibold text-center mb-12 text-foreground">
                Room Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {roomAmenities.map((amenity, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></div>
                    <p className="text-muted-foreground">{amenity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-12 text-foreground">
                Prime Location
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-card rounded-lg">
                  <h3 className="font-display font-semibold mb-2 text-foreground">Rashtrapati Bhavan</h3>
                  <p className="text-muted-foreground">2 km away</p>
                </div>
                <div className="p-6 bg-card rounded-lg">
                  <h3 className="font-display font-semibold mb-2 text-foreground">India Gate</h3>
                  <p className="text-muted-foreground">5 km away</p>
                </div>
                <div className="p-6 bg-card rounded-lg">
                  <h3 className="font-display font-semibold mb-2 text-foreground">New Delhi Railway Station</h3>
                  <p className="text-muted-foreground">9 km away</p>
                </div>
                <div className="p-6 bg-card rounded-lg">
                  <h3 className="font-display font-semibold mb-2 text-foreground">Delhi International Airport</h3>
                  <p className="text-muted-foreground">15 km away</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-display font-semibold text-center mb-16 text-foreground">
                Hotel Services & Amenities
              </h2>
              
              {/* Internet & Connectivity */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Wifi className="w-6 h-6 text-gold" />
                  Internet
                </h3>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-muted-foreground">WiFi is available in all areas and is free of charge.</p>
                </div>
              </div>

              {/* Parking */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Car className="w-6 h-6 text-gold" />
                  Parking
                </h3>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-muted-foreground">Valet parking available</p>
                </div>
              </div>

              {/* Outdoors */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <TreePine className="w-6 h-6 text-gold" />
                  Outdoors
                </h3>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-muted-foreground">Garden</p>
                </div>
              </div>

              {/* Activities */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Music className="w-6 h-6 text-gold" />
                  Activities
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• Nightclub/DJ <span className="text-gold">Additional charge</span></p>
                  <p className="text-muted-foreground">• Golf course (within 3 km) <span className="text-gold">Additional charge</span></p>
                </div>
              </div>

              {/* Food & Drink */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Utensils className="w-6 h-6 text-gold" />
                  Food & Drink
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• Bar</p>
                  <p className="text-muted-foreground">• Restaurant</p>
                </div>
              </div>

              {/* Reception Services */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Phone className="w-6 h-6 text-gold" />
                  Reception Services
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• Invoice provided</p>
                  <p className="text-muted-foreground">• Lockers</p>
                  <p className="text-muted-foreground">• Concierge service</p>
                  <p className="text-muted-foreground">• Luggage storage</p>
                  <p className="text-muted-foreground">• Tour desk</p>
                  <p className="text-muted-foreground">• Currency exchange</p>
                  <p className="text-muted-foreground">• 24-hour front desk</p>
                </div>
              </div>

              {/* Cleaning Services */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Bath className="w-6 h-6 text-gold" />
                  Cleaning Services
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• Daily housekeeping</p>
                  <p className="text-muted-foreground">• Trouser press <span className="text-gold">Additional charge</span></p>
                  <p className="text-muted-foreground">• Ironing service <span className="text-gold">Additional charge</span></p>
                  <p className="text-muted-foreground">• Dry cleaning <span className="text-gold">Additional charge</span></p>
                  <p className="text-muted-foreground">• Laundry <span className="text-gold">Additional charge</span></p>
                </div>
              </div>

              {/* Business Facilities */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-gold" />
                  Business Facilities
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• Fax/photocopying <span className="text-gold">Additional charge</span></p>
                  <p className="text-muted-foreground">• Business centre <span className="text-gold">Additional charge</span></p>
                  <p className="text-muted-foreground">• Meeting/banquet facilities <span className="text-gold">Additional charge</span></p>
                </div>
              </div>

              {/* Safety & Security */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <SecurityIcon className="w-6 h-6 text-gold" />
                  Safety & Security
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• Fire extinguishers</p>
                  <p className="text-muted-foreground">• CCTV outside property</p>
                  <p className="text-muted-foreground">• CCTV in common areas</p>
                  <p className="text-muted-foreground">• Smoke alarms</p>
                  <p className="text-muted-foreground">• Security alarm</p>
                  <p className="text-muted-foreground">• Key card access</p>
                  <p className="text-muted-foreground">• 24-hour security</p>
                  <p className="text-muted-foreground">• Safety deposit box</p>
                </div>
              </div>

              {/* General Amenities */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Star className="w-6 h-6 text-gold" />
                  General
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• Designated smoking area</p>
                  <p className="text-muted-foreground">• Air conditioning</p>
                  <p className="text-muted-foreground">• Car hire</p>
                  <p className="text-muted-foreground">• Lift</p>
                  <p className="text-muted-foreground">• Family rooms</p>
                  <p className="text-muted-foreground">• Facilities for disabled guests</p>
                  <p className="text-muted-foreground">• Airport shuttle <span className="text-gold">Additional charge</span></p>
                  <p className="text-muted-foreground">• Non-smoking rooms</p>
                  <p className="text-muted-foreground">• Room service</p>
                </div>
              </div>

              {/* Wellness */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Waves className="w-6 h-6 text-gold" />
                  Wellness
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• Full body massage</p>
                  <p className="text-muted-foreground">• Hand massage</p>
                  <p className="text-muted-foreground">• Head massage</p>
                  <p className="text-muted-foreground">• Foot massage</p>
                  <p className="text-muted-foreground">• Neck massage</p>
                  <p className="text-muted-foreground">• Back massage</p>
                  <p className="text-muted-foreground">• Spa facilities</p>
                  <p className="text-muted-foreground">• Massage <span className="text-gold">Additional charge</span></p>
                </div>
              </div>

              {/* Languages Spoken */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Globe className="w-6 h-6 text-gold" />
                  Languages Spoken
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-2">
                  <p className="text-muted-foreground">• English</p>
                  <p className="text-muted-foreground">• Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
