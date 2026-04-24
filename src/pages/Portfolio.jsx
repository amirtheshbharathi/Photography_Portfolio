import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import { ArrowLeft } from 'lucide-react';
import { categories, portfolioImages } from '../data/images';
import CategoryCard from '../components/CategoryCard';
import ImageCard from '../components/ImageCard';

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Sync category from URL param
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && portfolioImages[cat]) {
      setActiveCategory(cat);
    } else {
      setActiveCategory(null);
    }
  }, [searchParams]);

  const handleCategoryClick = (id) => {
    setSearchParams({ category: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentImages = activeCategory ? portfolioImages[activeCategory] : [];
  const currentCategory = categories.find((c) => c.id === activeCategory);

  // Lightbox slides
  const slides = currentImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.alt,
  }));

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {!activeCategory ? (
          <>
            <p className="section-subtitle text-white/40 mb-4">My Work</p>
            <h1 className="section-title text-white">Portfolio</h1>
            <p className="text-white/40 mt-4 max-w-lg font-light">
              Select a category to explore the collection.
            </p>
          </>
        ) : (
          <div className="flex items-start gap-6">
            <button
              onClick={handleBack}
              className="mt-1 text-white/50 hover:text-accent transition-colors flex items-center gap-2 text-sm tracking-wide"
              aria-label="Back to categories"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">All Categories</span>
            </button>
            <div>
              <p className="section-subtitle text-white/40 mb-2">{currentCategory?.description}</p>
              <h1 className="section-title text-white">{currentCategory?.label}</h1>
            </div>
          </div>
        )}
      </div>

      {/* Category grid */}
      {!activeCategory && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </section>
      )}

      {/* Image masonry grid */}
      {activeCategory && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
          {currentImages.length === 0 ? (
            <p className="text-white/40 text-center py-20">No images in this category yet.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
              {currentImages.map((image, index) => (
                <div key={image.id} className="break-inside-avoid">
                  <ImageCard
                    image={image}
                    index={index}
                    onClick={(i) => setLightboxIndex(i)}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Captions]}
        zoom={{ maxZoomPixelRatio: 3 }}
        styles={{
          container: { backgroundColor: 'rgba(0,0,0,0.97)' },
        }}
        carousel={{ finite: false }}
      />
    </main>
  );
}
