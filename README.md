# Lens & Light — Photography Portfolio

A modern, minimal, and visually stunning photographer portfolio built with **React + Vite + Tailwind CSS**.

## Features

- 🎞️ Full-screen hero slideshow with Ken Burns effect
- 🗂️ Portfolio with 4 filterable categories (Landscape, Portraits, Event, Wildlife)
- 🖼️ Masonry grid layout with smooth hover animations
- 🔍 Lightbox full-screen viewer with zoom support
- 📱 Fully responsive (mobile-first)
- ⚡ Lazy loading for all images
- 🎨 Minimal black/white/gold design system
- 📬 Contact form with validation
- 🔗 Sticky navbar with active state

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- React Router DOM 6
- yet-another-react-lightbox
- Lucide React (icons)

## Getting Started

### Prerequisites

Install Node.js (v18+): https://nodejs.org

### Run Locally

```bash
cd photographer-portfolio
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky responsive navbar
│   ├── HeroSlideshow.jsx   # Full-screen hero with auto-advance
│   ├── CategoryCard.jsx    # Portfolio category thumbnail
│   ├── ImageCard.jsx       # Individual image with hover effects
│   ├── LazyImage.jsx       # IntersectionObserver lazy loader
│   └── Footer.jsx          # Footer with social links
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Portfolio.jsx       # Gallery with lightbox
│   ├── About.jsx           # Bio + stats
│   └── Contact.jsx         # Contact form
├── data/
│   └── images.js           # All Unsplash image URLs + metadata
└── index.css               # Tailwind + custom styles
```

## Customization

- **Images**: Replace Unsplash URLs in `src/data/images.js` with your own
- **Photographer name/bio**: Edit `src/pages/About.jsx`
- **Contact email**: Edit `src/pages/Contact.jsx`
- **Brand name**: Search for "Lens & Light" across components
- **Accent color**: Change `accent` in `tailwind.config.js`
