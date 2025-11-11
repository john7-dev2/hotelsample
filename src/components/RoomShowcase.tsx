import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bed, Maximize, Users, Wifi, Coffee, Tv, Wind, ShowerHead } from "lucide-react";

interface Room {
  name: string;
  description: string;
  price: string;
  features: string[];
  imageUrl: string;
}

const RoomShowcase = ({ onBookNow }: { onBookNow: (roomName: string, price: string) => void }) => {
  const [activeRoom, setActiveRoom] = useState(0);

  const rooms: Room[] = [
    {
      name: "Executive Suite",
      description: "Luxurious suite with separate living area, premium amenities, and executive lounge access. Perfect for the discerning traveler seeking ultimate comfort.",
      price: "₹18,500",
      features: ["65 m²", "King Bed + Sofa", "4 Guests", "City View"],
      imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Deluxe Room",
      description: "Spacious room with elegant furnishings, modern amenities, and stunning views. Ideal for both business and leisure travelers.",
      price: "₹12,000",
      features: ["45 m²", "King/Twin Bed", "2 Guests", "Premium"],
      imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Standard Room",
      description: "Comfortable and well-appointed room with all essential amenities. Perfect for guests seeking quality accommodation at great value.",
      price: "₹8,500",
      features: ["32 m²", "King/Twin Bed", "2 Guests", "Cozy"],
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const roomAmenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Coffee, label: "Coffee Maker" },
    { icon: Tv, label: "Smart TV" },
    { icon: Wind, label: "Climate Control" },
    { icon: ShowerHead, label: "Rain Shower" },
    { icon: Bed, label: "Premium Bedding" },
  ];

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-gold rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Discover Our Rooms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide the ultimate comfort and luxury
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 space-y-6 animate-slide-right">
              <div className="flex gap-2 mb-6">
                {rooms.map((room, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveRoom(index)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeRoom === index
                        ? "bg-gold text-white shadow-lg scale-105"
                        : "bg-card text-muted-foreground hover:bg-gold/10"
                    }`}
                  >
                    {room.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 hover-lift">
                <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                  {rooms[activeRoom].name}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {rooms[activeRoom].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {rooms[activeRoom].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Room Amenities
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {roomAmenities.map((amenity, index) => (
                      <div key={index} className="flex flex-col items-center text-center gap-2 group">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                          <amenity.icon className="w-5 h-5 text-gold" />
                        </div>
                        <span className="text-xs text-muted-foreground">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="text-3xl font-display font-bold text-gold">
                      {rooms[activeRoom].price}
                      <span className="text-base text-muted-foreground font-normal">/night</span>
                    </p>
                  </div>
                  <Button
                    variant="gold"
                    size="lg"
                    onClick={() => onBookNow(rooms[activeRoom].name, rooms[activeRoom].price)}
                    className="animate-glow"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 to-transparent z-10"></div>
                <img 
                  src={rooms[activeRoom].imageUrl} 
                  alt={rooms[activeRoom].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <p className="text-sm font-medium mb-1 opacity-80">Room Type</p>
                  <h4 className="text-2xl font-display font-bold">{rooms[activeRoom].name}</h4>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                {rooms.map((room, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveRoom(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeRoom === index
                        ? "border-gold scale-105 shadow-lg"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={room.imageUrl} 
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;
