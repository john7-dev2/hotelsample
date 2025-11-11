import { useState } from "react";
import Navigation from "@/components/Navigation";
import ParallaxHero from "@/components/ParallaxHero";
import StatsCounter from "@/components/StatsCounter";
import RoomShowcase from "@/components/RoomShowcase";
import InteractiveAmenities from "@/components/InteractiveAmenities";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import LocationMap from "@/components/LocationMap";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingBookingButton from "@/components/FloatingBookingButton";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Phone, Mail, Award, Heart, Shield } from "lucide-react";

// Using high-quality hotel exterior image from Unsplash
const hotelExterior = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const Home = () => {
  const [bookingModal, setBookingModal] = useState({
    isOpen: false,
    roomName: "Standard Room",
    roomPrice: "₹8,500",
  });

  const handleBookNow = (roomName?: string, roomPrice?: string) => {
    setBookingModal({
      isOpen: true,
      roomName: roomName || "Room Selection",
      roomPrice: roomPrice || "₹8,500",
    });
  };

  const closeBookingModal = () => {
    setBookingModal({
      isOpen: false,
      roomName: "",
      roomPrice: "",
    });
  };

  const whyChooseUs = [
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized globally for exceptional hospitality and guest satisfaction",
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Every stay is tailored to your preferences with dedicated attention",
    },
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your safety and security is our top priority with 24/7 monitoring",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <ParallaxHero onCtaClick={() => handleBookNow()} />

        <section id="explore" className="py-20 bg-background scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Experience True Luxury
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Located in the heart of Mumbai, Grand Palace Hotel offers an unparalleled experience
                  combining timeless elegance with modern sophistication. Our commitment to excellence
                  ensures every moment of your stay is extraordinary.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="animate-slide-right">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={hotelExterior}
                      alt="Grand Palace Hotel Exterior"
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="space-y-8 animate-slide-left">
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 group hover:text-gold transition-colors">
                      <MapPin className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                      <span>1 km from Marine Drive</span>
                    </div>
                    <div className="flex items-center gap-2 group hover:text-gold transition-colors">
                      <MapPin className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                      <span>3 km from Gateway of India</span>
                    </div>
                    <div className="flex items-center gap-2 group hover:text-gold transition-colors">
                      <Plane className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                      <span>12 km from Airport</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Each elegantly appointed room features premium amenities including climate control,
                    minibar, coffee maker, and luxury bath products. Indulge in exceptional dining
                    experiences at our signature restaurants and world-class spa facilities.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="gold"
                      size="lg"
                      onClick={() => handleBookNow()}
                      className="animate-glow"
                    >
                      Book Your Stay
                    </Button>
                    <Button variant="outline" size="lg">
                      Take a Virtual Tour
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card p-8 rounded-2xl border border-border/50 hover-lift text-center animate-zoom-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <StatsCounter />

        <RoomShowcase onBookNow={handleBookNow} />

        <InteractiveAmenities />

        <ImageGallery />

        <TestimonialsCarousel />

        <LocationMap />

        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-slate-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready for an Unforgettable Experience?
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Join thousands of satisfied guests who have experienced the pinnacle of luxury
                and hospitality at Grand Palace Hotel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="gold"
                  size="lg"
                  className="text-base px-12 py-7 h-auto rounded-full font-semibold animate-glow hover:scale-105 transition-transform"
                  onClick={() => handleBookNow()}
                >
                  BOOK YOUR STAY NOW
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-12 py-7 h-auto rounded-full font-semibold border-white/30 text-white hover:bg-white/10 hover:border-gold hover:text-gold backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  CALL US
                </Button>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
                <a href="tel:+912267891234" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 22 6789 1234</span>
                </a>
                <div className="hidden sm:block w-px h-4 bg-white/30"></div>
                <a href="mailto:reservations@grandpalace.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>reservations@grandpalace.com</span>
                </a>
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

      <FloatingBookingButton onClick={() => handleBookNow()} />

      <Footer />
    </div>
  );
};

export default Home;
