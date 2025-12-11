import React, { useState, useEffect, useMemo } from 'react';
import { 
  Tent, Flame, Droplet, Waves, Mountain, 
  Truck, Plane, ArrowUpDown, Ship, Warehouse,
  Package, Container, Loader, Boxes,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Option {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface Service {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug?: string;
}

interface InteractiveSelectorProps {
  services?: Service[];
  options?: Option[];
  title?: string;
  subtitle?: string;
}

// Helper function to get icon based on service title
const getIconForService = (title: string): React.ReactNode => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('heavy') || titleLower.includes('transport') || titleLower.includes('truck')) {
    return <Truck size={24} className="text-foreground" />;
  }
  if (titleLower.includes('air') || (titleLower.includes('cargo') && titleLower.includes('air'))) {
    return <Plane size={24} className="text-foreground" />;
  }
  if (titleLower.includes('crane') || titleLower.includes('lift')) {
    return <ArrowUpDown size={24} className="text-foreground" />;
  }
  if (titleLower.includes('marine') || titleLower.includes('ship') || titleLower.includes('sea')) {
    return <Ship size={24} className="text-foreground" />;
  }
  if (titleLower.includes('warehouse') || titleLower.includes('storage') || titleLower.includes('yard')) {
    return <Warehouse size={24} className="text-foreground" />;
  }
  if (titleLower.includes('container')) {
    return <Container size={24} className="text-foreground" />;
  }
  if (titleLower.includes('package') || titleLower.includes('packaging')) {
    return <Package size={24} className="text-foreground" />;
  }
  if (titleLower.includes('loader') || titleLower.includes('loading')) {
    return <Loader size={24} className="text-foreground" />;
  }
  if (titleLower.includes('boxes') || titleLower.includes('cargo')) {
    return <Boxes size={24} className="text-foreground" />;
  }
  
  // Default icon
  return <Package size={24} className="text-foreground" />;
};

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({ 
  services,
  options: propOptions,
  title = "What We Can Do",
  subtitle = "Our Capabilities"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Convert services to options format
  const options: Option[] = useMemo(() => {
    if (propOptions) {
      return propOptions;
    }
    
    if (services && services.length > 0) {
      return services.map(service => ({
        title: service.title,
        description: service.description,
        image: service.imageUrl,
        icon: getIconForService(service.title)
      }));
    }

    // Default fallback options
    return [
      {
        title: "Luxury Tent",
        description: "Cozy glamping under the stars",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        icon: <Tent size={24} className="text-foreground" />
      },
      {
        title: "Campfire Feast",
        description: "Gourmet s'mores & stories",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
        icon: <Flame size={24} className="text-foreground" />
      },
      {
        title: "Lakeside Retreat",
        description: "Private dock & canoe rides",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        icon: <Droplet size={24} className="text-foreground" />
      },
      {
        title: "Mountain Spa",
        description: "Outdoor sauna & hot tub",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
        icon: <Waves size={24} className="text-foreground" />
      },
      {
        title: "Guided Adventure",
        description: "Expert-led nature tours",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
        icon: <Mountain size={24} className="text-foreground" />
      }
    ];
  }, [services, propOptions]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
  };

  // Swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options.length]);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-[600px] py-12"> 
        {/* Header Section */}
        <div className="container mx-auto px-4">
          <div className="w-full max-w-2xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 tracking-tight animate-fadeInTop delay-300">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto animate-fadeInTop delay-600">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Options Container */}
        <div className="container mx-auto px-4">
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Mobile Navigation Arrows */}
            <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-2 z-20">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm border-border shadow-lg hover:bg-background h-10 w-10"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>
            <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-2 z-20">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm border-border shadow-lg hover:bg-background h-10 w-10"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            {/* Desktop: Expanding Cards | Mobile: Single Card Carousel */}
            <div 
              className="options flex w-full h-[300px] md:h-[400px] mx-auto items-stretch overflow-hidden relative gap-2"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
            {options.map((option, index) => (
            <div
              key={index}
              className={`
                option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
                ${activeIndex === index ? 'active' : ''}
                ${isMobile && activeIndex !== index ? 'hidden' : ''}
                ${isMobile && activeIndex === index ? 'w-full' : ''}
              `}
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backfaceVisibility: 'hidden',
                opacity: animatedOptions.includes(index) ? 1 : 0,
                transform: animatedOptions.includes(index) 
                  ? 'translateX(0)' 
                  : 'translateX(-60px)',
                minWidth: isMobile 
                  ? (activeIndex === index ? '100%' : '0')
                  : '60px',
                minHeight: '100px',
                margin: 0,
                borderRadius: '0.75rem',
                borderWidth: '0',
                borderStyle: 'none',
                borderColor: 'transparent',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                boxShadow: activeIndex === index 
                  ? '0 20px 60px rgba(0,0,0,0.15)' 
                  : '0 4px 12px rgba(0,0,0,0.08)',
                flex: isMobile
                  ? (activeIndex === index ? '1 1 100%' : '0 0 0%')
                  : (activeIndex === index ? '7 1 0%' : '1 1 0%'),
                zIndex: activeIndex === index ? 10 : 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                willChange: 'flex-grow, box-shadow, background-size, background-position'
              }}
              onClick={() => handleOptionClick(index)}
            >
              {/* Shadow effect */}
              <div 
                className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
                style={{
                  bottom: activeIndex === index ? '0' : '-40px',
                  height: '120px',
                  boxShadow: activeIndex === index 
                    ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                    : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
                }}
              ></div>
              
              {/* Label with icon and info */}
              <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
                <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border-2 border-white/50 dark:border-slate-700/50 flex-shrink-0 flex-grow-0 transition-all duration-200">
                  {option.icon}
                </div>
                <div className="info text-white whitespace-pre relative">
                  <div 
                    className="main font-bold text-lg transition-all duration-700 ease-in-out drop-shadow-lg"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {option.title}
                  </div>
                  <div 
                    className="sub text-base text-white/90 transition-all duration-700 ease-in-out drop-shadow-md"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {option.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Mobile Indicator Dots */}
          {isMobile && (
            <div className="flex justify-center gap-2 mt-4">
              {options.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-8 bg-foreground' 
                      : 'w-2 bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveSelector;

