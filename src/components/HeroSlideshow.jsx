import { useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { heroSlides } from '../data/images';

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 600);
    },
    [transitioning]
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className={`w-full h-full object-cover ${
              i === current ? 'animate-ken-burns' : ''
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
            onError={(e) => {
              // Show a dark placeholder if the image file isn't added yet
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>
      ))}

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <p
          className="section-subtitle text-white/60 mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Photography Portfolio
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-tight mb-6 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Capturing Moments,
          <br />
          <span className="italic text-accent">Telling Stories</span>
        </h1>
        <p
          className="text-white/60 text-base md:text-lg max-w-md font-light tracking-wide animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          Landscape · Portraits · Events · Wildlife
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-1.5 bg-accent'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown
          size={18}
          className="animate-bounce group-hover:text-accent transition-colors"
        />
      </button>
    </section>
  );
}
