import { useState } from "react";
import { Waves, Dumbbell, Wifi, Car, Utensils, Coffee, Wine, Sparkles } from "lucide-react";

interface Amenity {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

const InteractiveAmenities = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const amenities: Amenity[] = [
    {
      icon: Waves,
      title: "Infinity Pool & Spa",
      description: "Rooftop infinity pool with panoramic city views and luxury spa treatments",
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "24/7 state-of-the-art gym with personal training and modern equipment",
      color: "text-red-400",
      gradient: "from-red-500/20 to-red-600/20",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "6 world-class restaurants featuring cuisines from around the globe",
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-orange-600/20",
    },
    {
      icon: Wine,
      title: "Rooftop Bar",
      description: "Premium cocktails and wines with stunning sunset views",
      color: "text-pink-400",
      gradient: "from-pink-500/20 to-pink-600/20",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary ultra-fast internet throughout the entire property",
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-cyan-600/20",
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Premium valet service and secure parking for all guests",
      color: "text-slate-400",
      gradient: "from-slate-500/20 to-slate-600/20",
    },
    {
      icon: Coffee,
      title: "24/7 Room Service",
      description: "Gourmet meals and refreshments delivered to your room anytime",
      color: "text-amber-400",
      gradient: "from-amber-500/20 to-amber-600/20",
    },
    {
      icon: Sparkles,
      title: "Concierge Service",
      description: "Dedicated team to fulfill your every request and recommendation",
      color: "text-gold",
      gradient: "from-gold/20 to-gold/30",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            World-Class Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury at its finest with our premium facilities and services
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group animate-zoom-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`relative p-6 rounded-2xl bg-card border border-border/50 transition-all duration-500 cursor-pointer overflow-hidden ${
                  isHovered ? 'shadow-2xl scale-105' : 'shadow-md hover:shadow-xl'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${amenity.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${amenity.gradient} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                      isHovered ? 'animate-bounce-slow' : ''
                    }`}>
                      <Icon className={`w-8 h-8 ${amenity.color} transition-all duration-500 ${
                        isHovered ? 'scale-110' : ''
                      }`} />
                    </div>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                      {amenity.title}
                    </h3>

                    <p className={`text-sm text-muted-foreground leading-relaxed transition-all duration-500 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-1'
                    }`}>
                      {amenity.description}
                    </p>

                    <div className={`mt-4 h-1 w-0 bg-gradient-to-r from-gold to-gold-dark rounded-full transition-all duration-500 ${
                      isHovered ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>

                  <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${amenity.gradient} blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveAmenities;
