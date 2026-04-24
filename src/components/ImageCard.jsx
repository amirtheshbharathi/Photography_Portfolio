import { useState } from 'react';
import { ZoomIn } from 'lucide-react';

/**
 * Single image card with hover zoom + overlay effect.
 * onClick receives the image index for lightbox.
 */
export default function ImageCard({ image, index, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden bg-neutral-900 cursor-pointer"
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(index)}
      aria-label={`View ${image.alt}`}
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
      )}

      <img
        src={image.thumb}
        alt={image.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col items-center gap-2">
          <ZoomIn size={28} className="text-white" />
          <span className="text-white text-xs tracking-widest uppercase font-medium">
            View
          </span>
        </div>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
        <p className="text-white/80 text-xs font-light truncate">{image.alt}</p>
      </div>
    </div>
  );
}
