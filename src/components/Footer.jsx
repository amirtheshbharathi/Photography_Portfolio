import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          to="/"
          className="font-display text-lg tracking-wider text-white/70 hover:text-white transition-colors"
        >
          Lens<span className="text-accent">&</span>Light
        </Link>

        <p className="text-white/30 text-xs tracking-wide text-center">
          © {new Date().getFullYear()} Amirthesh Bharathi. All rights reserved.
        </p>

        <a
          href="mailto:amirtheshbharathi29@gmail.com"
          className="flex items-center gap-2 text-white/40 hover:text-accent transition-colors duration-300 text-sm"
          aria-label="Email"
        >
          <Mail size={16} />
          <span>amirtheshbharathi29@gmail.com</span>
        </a>
      </div>
    </footer>
  );
}
