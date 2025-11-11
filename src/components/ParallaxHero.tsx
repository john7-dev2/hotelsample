import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Using high-quality hotel image from Unsplash
const heroImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

interface ParallaxHeroProps {
  onCtaClick: () => void;
}

const ParallaxHero = ({ onCtaClick }: ParallaxHeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const fadeOpacity = Math.max(1 - scrollY / 600, 0);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${parallaxOffset}px) scale(${1 + scrollY * 0.0001})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/70 via-slate-dark/50 to-slate-dark/80"></div>
      </div>

      <div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity: fadeOpacity }}
      >
        <div className="mb-6 animate-slide-up">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
                Since 1998
              </span>
              <div className="h-px w-12 bg-gold"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight animate-slide-up leading-tight">
          GRAND PALACE
          <br />
          <span className="text-gold">HOTEL</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up font-light tracking-wide" style={{ animationDelay: "200ms" }}>
          Where Luxury Meets Tradition in the Heart of Mumbai
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "400ms" }}>
          <Button
            variant="hero"
            size="lg"
            onClick={onCtaClick}
            className="text-base px-10 py-7 h-auto rounded-full font-semibold tracking-wide animate-glow hover:scale-105 transition-transform"
          >
            RESERVE YOUR STAY
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-10 py-7 h-auto rounded-full font-semibold border-white/30 text-white hover:bg-white/10 hover:border-gold hover:text-gold backdrop-blur-sm"
            onClick={() => {
              document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            EXPLORE MORE
          </Button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default ParallaxHero;
