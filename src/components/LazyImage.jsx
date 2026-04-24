import { useEffect, useRef, useState } from 'react';

/**
 * Lazy-loading image with fade-in effect using IntersectionObserver.
 */
export default function LazyImage({ src, alt, className = '', style = {}, ...props }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`overflow-hidden ${className}`} style={style}>
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
      {/* Skeleton placeholder */}
      {(!inView || !loaded) && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
      )}
    </div>
  );
}
