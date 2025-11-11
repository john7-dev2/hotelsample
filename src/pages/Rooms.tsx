import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Bed, Maximize, Users, Wifi } from "lucide-react";

const Rooms = () => {
  const [bookingModal, setBookingModal] = useState({
    isOpen: false,
    roomName: "",
    roomPrice: "",
  });

  const handleBookNow = (roomName: string, roomPrice: string) => {
    setBookingModal({
      isOpen: true,
      roomName,
      roomPrice,
    });
  };

  const closeBookingModal = () => {
    setBookingModal({
      isOpen: false,
      roomName: "",
      roomPrice: "",
    });
  };

  const rooms = [
    {
      name: "Standard Room",
      description: "Comfortable room with modern amenities, air conditioning, minibar, and city views. Perfect for business and leisure travelers.",
      price: "₹8,500",
      features: ["King/Twin Bed", "32 m²", "2 Guests", "Free Wi-Fi"],
      icons: [Bed, Maximize, Users, Wifi],
      quantity: 3,
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Executive Room",
      description: "Spacious room with enhanced amenities, premium furnishings, and executive lounge access for the discerning traveler.",
      price: "₹12,000",
      features: ["King Bed", "45 m²", "2 Guests", "Free Wi-Fi"],
      icons: [Bed, Maximize, Users, Wifi],
      quantity: 3,
      imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Executive Suite",
      description: "Luxurious suite with separate living area, premium amenities, and personalized service for an unforgettable stay.",
      price: "₹18,500",
      features: ["King Bed + Sofa", "65 m²", "4 Guests", "Free Wi-Fi"],
      icons: [Bed, Maximize, Users, Wifi],
      quantity: 3,
      imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
                    {/* Room Image */}
                    <div className="h-80 rounded-xl overflow-hidden group">
                      <img 
                        src={room.imageUrl} 
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Room Details */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                          × {room.quantity}
                        </span>
                      </div>
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
                      <div className="pt-6 border-t border-border space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                            <p className="text-3xl font-display font-semibold text-gold">
                              {room.price}
                              <span className="text-base text-muted-foreground font-normal">/night</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="lg" className="flex-1">
                            Details
                          </Button>
                          <Button 
                            variant="gold" 
                            size="lg" 
                            className="flex-1"
                            onClick={() => handleBookNow(room.name, room.price)}
                          >
                            SEE RATES!
                          </Button>
                        </div>
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

      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={closeBookingModal}
        roomName={bookingModal.roomName}
        roomPrice={bookingModal.roomPrice}
      />

      <Footer />
    </div>
  );
};

export default Rooms;
