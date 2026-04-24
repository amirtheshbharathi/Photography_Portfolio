import { Camera, Heart, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutPhoto } from '../data/images';

const stats = [
  { icon: Clock,  value: '1+',  label: 'Year of Experience' },
  { icon: Camera, value: '6+',  label: 'Private Events' },
  { icon: Heart,  value: '∞',   label: 'Passion for the Craft' },
  { icon: MapPin, value: 'Chennai', label: 'Tamil Nadu, India' },
];

export default function About() {
  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-subtitle text-white/40 mb-5">About Me</p>
            <h1 className="font-display text-5xl md:text-6xl text-white font-normal leading-tight mb-8">
              I capture the world
              <br />
              <span className="italic text-accent">as I see it.</span>
            </h1>
            <div className="space-y-5 text-white/60 font-light leading-relaxed text-base">
              <p>
                Hi, I'm{' '}
                <span className="text-white font-medium">Amirthesh Bharathi</span> — a first-year
                student with a deep passion for capturing the moments of life. I find genuine
                happiness in seeing the world through the lens.
              </p>
              <p>
                With 1 year of experience, endless learning, and a heart full of passion, I've had
                the privilege of capturing moments across{' '}
                <span className="text-white/80">6+ private events</span>. Every frame I take is
                driven by a belief that ordinary moments deserve to be remembered extraordinarily.
              </p>
              <p>
                Based in Chennai, Tamil Nadu, I'm always looking for the next story worth telling —
                one photograph at a time.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary">
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 text-white/60 text-sm tracking-widest uppercase font-medium hover:text-white transition-colors border border-white/10 hover:border-white/30"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[3/4] max-w-sm mx-auto md:mx-0 md:ml-auto">
              <img
                src={aboutPhoto.src}
                alt={aboutPhoto.alt}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
              />
              {/* Accent border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/40 -z-10" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 -left-4 md:-left-8 bg-black border border-white/10 px-5 py-4 shadow-2xl">
              <p className="text-accent text-2xl font-display font-semibold">1+</p>
              <p className="text-white/50 text-xs tracking-widest uppercase mt-0.5">Year of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-neutral-950 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center group">
              <Icon size={22} className="text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-display text-3xl text-white font-normal">{value}</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-2 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center">
        <p className="section-subtitle text-white/40 mb-6">My Philosophy</p>
        <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-relaxed mb-8">
          "I find happiness in seeing the world through the lens."
        </h2>
        <p className="text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
          Photography isn't just a skill for me — it's the way I connect with the world. Every
          shoot is a new lesson, every frame a new story. I'm just getting started, and I'm
          excited for every moment yet to be captured.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-neutral-950 border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-subtitle text-white/40 mb-4">Specializations</p>
            <h2 className="section-title text-white">What I Do Best</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Landscape',  desc: 'Finding beauty in nature — from golden sunsets to quiet mornings.' },
              { title: 'Portraits',  desc: 'Capturing authentic expressions and the stories behind every face.' },
              { title: 'Events',     desc: 'Preserving the energy and emotion of private celebrations and gatherings.' },
              { title: 'Wildlife',   desc: 'Patient, curious, and always in awe of the natural world around us.' },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/5 p-6 hover:border-accent/30 transition-colors duration-300 group"
              >
                <h3 className="font-display text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
