import { Link } from 'react-router-dom';
import HeroSlideshow from '../components/HeroSlideshow';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/images';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    navigate(`/portfolio?category=${id}`);
  };

  return (
    <main>
      {/* Hero */}
      <HeroSlideshow />

      {/* Featured Categories Preview */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subtitle text-white/40 mb-4">Explore the work</p>
            <h2 className="section-title text-white">
              Stories Through the Lens
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onClick={handleCategoryClick}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="bg-neutral-950 py-24 px-6 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-3xl md:text-4xl text-white/80 italic font-normal leading-relaxed">
            "Photography is the art of frozen time — the ability to store emotion and feelings within a frame."
          </p>
          <p className="mt-6 text-white/30 text-sm tracking-widest uppercase">— Meshack Otieno</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-subtitle text-white/40 mb-4">Let's work together</p>
          <h2 className="section-title text-white mb-6">Have a project in mind?</h2>
          <p className="text-white/50 mb-10 font-light leading-relaxed">
            Whether it's a wedding, corporate event, or a personal portrait session — let's create something beautiful together.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
