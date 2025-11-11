import { MapPin, Navigation, Clock, Plane, Train, Car as CarIcon } from "lucide-react";

const LocationMap = () => {
  const landmarks = [
    {
      name: "Marine Drive",
      distance: "1 km",
      time: "5 min drive",
      icon: MapPin,
      description: "Iconic seafront promenade",
    },
    {
      name: "Gateway of India",
      distance: "3 km",
      time: "10 min drive",
      icon: MapPin,
      description: "Historic monument",
    },
    {
      name: "Mumbai Airport",
      distance: "12 km",
      time: "25 min drive",
      icon: Plane,
      description: "International airport",
    },
    {
      name: "CST Railway Station",
      distance: "8 km",
      time: "15 min drive",
      icon: Train,
      description: "UNESCO World Heritage Site",
    },
  ];

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold via-transparent to-gold"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Prime Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfectly situated in the heart of Mumbai with easy access to major attractions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/90 via-slate-dark/40 to-transparent z-10"></div>

              <div className="w-full h-full bg-gradient-to-br from-slate to-slate-dark flex items-center justify-center">
                <Navigation className="w-32 h-32 text-gold/20" />
              </div>

              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-20 h-20 text-gold mx-auto mb-4 animate-bounce-slow" />
                  <h3 className="text-2xl font-display font-bold mb-2">123 Marine Drive</h3>
                  <p className="text-lg opacity-90">Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 z-30 bg-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-glow">
                Perfect Location
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-card rounded-xl p-4 text-center hover-lift border border-border/50">
                <CarIcon className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Valet Parking</p>
                <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center hover-lift border border-border/50">
                <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">24/7 Access</p>
                <p className="text-xs text-muted-foreground mt-1">Round the clock</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center hover-lift border border-border/50">
                <Navigation className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Easy Access</p>
                <p className="text-xs text-muted-foreground mt-1">All routes</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-slide-left">
            {landmarks.map((landmark, index) => {
              const Icon = landmark.icon;

              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg hover-lift border border-border/50 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors group-hover:scale-110 duration-300">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-display font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
                        {landmark.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {landmark.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="inline-flex items-center gap-1 text-gold font-medium">
                          <MapPin className="w-4 h-4" />
                          {landmark.distance}
                        </span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {landmark.time}
                        </span>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12">
                      <Navigation className="w-5 h-5 text-gold" />
                    </div>
                  </div>

                  <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
