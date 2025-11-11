import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hotel-hero.png";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  ctaText?: string;
  height?: string;
  onCtaClick?: () => void;
}

const Hero = ({ 
  title, 
  subtitle, 
  showCTA = true, 
  ctaText = "CHECK AVAILABILITY",
  height = "h-[600px]",
  onCtaClick
}: HeroProps) => {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-slate-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 tracking-wider">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <Button 
            variant="hero" 
            size="lg" 
            className="text-base px-12 py-6 h-auto"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;
