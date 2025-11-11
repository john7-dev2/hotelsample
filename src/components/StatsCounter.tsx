import { useEffect, useState, useRef } from "react";
import { Award, Users, Star, Building } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { icon: Users, end: 5000, label: "Happy Guests", suffix: "+" },
    { icon: Star, end: 4.9, label: "Average Rating", prefix: "", suffix: "/5" },
    { icon: Building, end: 150, label: "Luxury Rooms", suffix: "" },
    { icon: Award, end: 25, label: "Years Experience", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 animate-slide-up">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto animate-shimmer"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: StatItem;
  isVisible: boolean;
  delay: number;
}

const StatCard = ({ stat, isVisible, delay }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.end / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(increment * currentStep, stat.end));
      } else {
        setCount(stat.end);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat.end]);

  return (
    <div
      className="text-center group animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12 animate-glow">
        <Icon className="w-10 h-10 md:w-12 md:h-12 text-gold" />
      </div>
      <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
        {stat.prefix}
        {stat.end % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1)}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base text-white/80 font-medium tracking-wide">
        {stat.label}
      </div>
    </div>
  );
};

export default StatsCounter;
