import { ArrowRight } from 'lucide-react';

/**
 * Category thumbnail card shown on the Portfolio page overview.
 */
export default function CategoryCard({ category, onClick }) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer aspect-[4/3] bg-neutral-900"
      onClick={() => onClick(category.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(category.id)}
      aria-label={`View ${category.label} gallery`}
    >
      <img
        src={category.thumbnail}
        alt={category.label}
        loading="lazy"
        onError={(e) => { e.currentTarget.style.opacity = '0'; }}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover tint */}
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-400" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-white/50 text-xs tracking-widest uppercase mb-1 font-medium">
          {category.description}
        </p>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl text-white font-normal">
            {category.label}
          </h3>
          <ArrowRight
            size={18}
            className="text-accent opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
          />
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </div>
  );
}
