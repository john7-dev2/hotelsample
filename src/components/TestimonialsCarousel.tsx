import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      location: "Delhi, India",
      rating: 5,
      text: "An absolutely magnificent experience! The attention to detail, impeccable service, and luxurious amenities made our anniversary celebration truly unforgettable. The staff went above and beyond to ensure every moment was perfect.",
      date: "March 2024",
    },
    {
      name: "Rajesh Patel",
      location: "Ahmedabad, India",
      rating: 5,
      text: "Grand Palace Hotel exceeded all expectations. The rooms are stunning, the dining is world-class, and the spa is pure bliss. The location is perfect for exploring Mumbai's attractions. Highly recommended!",
      date: "February 2024",
    },
    {
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      text: "This hotel is a gem in Mumbai! The blend of traditional elegance and modern luxury is exceptional. The rooftop restaurant offers breathtaking views, and the concierge team was incredibly helpful throughout our stay.",
      date: "January 2024",
    },
    {
      name: "Amit Verma",
      location: "Bangalore, India",
      rating: 5,
      text: "Perfect for business and leisure. The conference facilities are top-notch, and after meetings, the spa and pool provided the perfect escape. Will definitely return for our next Mumbai visit.",
      date: "December 2023",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Guest Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what our guests say about their unforgettable stays
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl hover-lift border border-border/50 relative">
                    <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/20" />

                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 relative z-10">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-12 h-3 bg-gold"
                      : "w-3 h-3 bg-muted hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
