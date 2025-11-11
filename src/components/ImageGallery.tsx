import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  title: string;
  category: string;
  imageUrl: string;
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { 
      title: "Presidential Suite", 
      category: "Rooms",
      imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Infinity Pool", 
      category: "Amenities",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Fine Dining Restaurant", 
      category: "Dining",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Luxury Spa", 
      category: "Wellness",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Grand Ballroom", 
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Rooftop Bar", 
      category: "Dining",
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our stunning spaces and world-class facilities
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-white shadow-lg scale-105"
                    : "bg-card text-muted-foreground hover:bg-gold/10 border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer animate-zoom-in hover-lift"
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/90 via-slate-dark/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              <img 
                src={image.imageUrl} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-6">
                <span className="text-xs font-semibold text-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
                <h3 className="text-xl font-display font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-90">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full w-12 h-12 z-50"
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateImage("prev")}
            className="absolute left-4 text-white hover:bg-white/20 rounded-full w-12 h-12 md:w-16 md:h-16"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigateImage("next")}
            className="absolute right-4 text-white hover:bg-white/20 rounded-full w-12 h-12 md:w-16 md:h-16"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="max-w-5xl w-full animate-scale-in">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={filteredImages[selectedImage].imageUrl} 
                alt={filteredImages[selectedImage].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-6 text-white">
              <p className="text-sm text-gold mb-2">{filteredImages[selectedImage].category}</p>
              <h3 className="text-2xl font-display font-bold">{filteredImages[selectedImage].title}</h3>
              <p className="text-sm text-white/60 mt-2">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
