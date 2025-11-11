import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingBookingButtonProps {
  onClick: () => void;
}

const FloatingBookingButton = ({ onClick }: FloatingBookingButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <Button
        onClick={onClick}
        size="lg"
        variant="gold"
        className="rounded-full shadow-2xl hover:shadow-gold/50 w-14 h-14 md:w-auto md:h-auto md:px-8 md:py-6 animate-glow group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Calendar className="w-6 h-6 md:mr-2 relative z-10" />
        <span className="hidden md:inline relative z-10 font-semibold">Quick Book</span>
      </Button>
    </div>
  );
};

export default FloatingBookingButton;
