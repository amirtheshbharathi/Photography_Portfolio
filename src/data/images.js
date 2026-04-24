// ============================================================
//  PHOTOGRAPHER PORTFOLIO — IMAGE CONFIGURATION
// ============================================================
//
//  HOW TO ADD YOUR OWN PHOTOS:
//
//  1. Drop your image files into the matching folder inside
//     /public/images/<category>/
//
//  2. Update the arrays below with the correct filenames.
//
//  3. All paths start with /images/... (no need to write "public/")
//
//  Supported formats: .jpg  .jpeg  .png  .webp
// ============================================================


// ------------------------------------------------------------
//  HERO SLIDESHOW  (homepage full-screen slides)
//  Folder: /public/images/hero/
//  Recommended size: 1920x1080px or larger, landscape
// ------------------------------------------------------------
export const heroSlides = [
  {
    id: 1,
    url: '/images/hero/hero-1.jpg',
    alt: 'Hero slide 1',
  },
  {
    id: 2,
    url: '/images/hero/hero-2.jpg',
    alt: 'Hero slide 2',
  },
  {
    id: 3,
    url: '/images/hero/hero-3.jpg',
    alt: 'Hero slide 3',
  },
  {
    id: 4,
    url: '/images/hero/hero-4.jpg',
    alt: 'Hero slide 4',
  },
  // Add more slides by copying a block above
];


// ------------------------------------------------------------
//  CATEGORY THUMBNAILS  (shown on Portfolio overview page)
//  Use one representative image per category.
// ------------------------------------------------------------
export const categories = [
  {
    id: 'landscape',
    label: 'Landscape',
    thumbnail: '/images/landscape/landscape-1.jpg',
    description: "Nature's grandeur captured in every frame",
  },
  {
    id: 'portraits',
    label: 'Portraits',
    thumbnail: '/images/portraits/portrait-1.jpg',
    description: 'Human stories told through light and shadow',
  },
  {
    id: 'event',
    label: 'Event',
    thumbnail: '/images/event/event-1.jpg',
    description: 'Moments that define celebrations',
  },
  {
    id: 'wildlife',
    label: 'Wildlife',
    thumbnail: '/images/wildlife/wildlife-1.jpg',
    description: 'The wild world through a patient lens',
  },
];


// ------------------------------------------------------------
//  PORTFOLIO IMAGES  (shown inside each category gallery)
//  Folder: /public/images/<category>/
//
//  Each entry needs:
//    src   — full-res image shown in lightbox
//    thumb — same path is fine for local files
//    alt   — describe the photo (accessibility + SEO)
// ------------------------------------------------------------
export const portfolioImages = {

  // ----------------------------------------------------------
  //  LANDSCAPE  →  /public/images/landscape/
  // ----------------------------------------------------------
  landscape: [
    {
      id: 'l1',
      src:   '/images/landscape/landscape-1.jpg',
      thumb: '/images/landscape/landscape-1.jpg',
      alt:   'Landscape photo 1',
    },
    {
      id: 'l2',
      src:   '/images/landscape/landscape-2.jpg',
      thumb: '/images/landscape/landscape-2.jpg',
      alt:   'Landscape photo 2',
    },
    {
      id: 'l3',
      src:   '/images/landscape/landscape-3.jpg',
      thumb: '/images/landscape/landscape-3.jpg',
      alt:   'Landscape photo 3',
    },
    {
      id: 'l4',
      src:   '/images/landscape/landscape-4.jpg',
      thumb: '/images/landscape/landscape-4.jpg',
      alt:   'Landscape photo 4',
    },
    {
      id: 'l5',
      src:   '/images/landscape/landscape-5.jpg',
      thumb: '/images/landscape/landscape-5.jpg',
      alt:   'Landscape photo 5',
    },
    {
      id: 'l6',
      src:   '/images/landscape/landscape-6.jpg',
      thumb: '/images/landscape/landscape-6.jpg',
      alt:   'Landscape photo 6',
    },
    {
      id: 'l7',
      src:   '/images/landscape/landscape-7.jpg',
      thumb: '/images/landscape/landscape-7.jpg',
      alt:   'Landscape photo 7',
    },
    {
      id: 'l8',
      src:   '/images/landscape/landscape-8.jpg',
      thumb: '/images/landscape/landscape-8.jpg',
      alt:   'Landscape photo 8',
    },
    {
      id: 'l9',
      src:   '/images/landscape/landscape-9.jpg',
      thumb: '/images/landscape/landscape-9.jpg',
      alt:   'Landscape photo 9',
    },
    // Add more: copy a block above and increment the number
  ],

  // ----------------------------------------------------------
  //  PORTRAITS  →  /public/images/portraits/
  // ----------------------------------------------------------
  portraits: [
    {
      id: 'p1',
      src:   '/images/portraits/portrait-1.jpg',
      thumb: '/images/portraits/portrait-1.jpg',
      alt:   'Portrait photo 1',
    },
    {
      id: 'p2',
      src:   '/images/portraits/portrait-2.jpg',
      thumb: '/images/portraits/portrait-2.jpg',
      alt:   'Portrait photo 2',
    },
    {
      id: 'p3',
      src:   '/images/portraits/portrait-3.jpg',
      thumb: '/images/portraits/portrait-3.jpg',
      alt:   'Portrait photo 3',
    },
    // Add more: copy a block above and increment the number
  ],

  // ----------------------------------------------------------
  //  EVENT  →  /public/images/event/
  // ----------------------------------------------------------
  event: [
    {
      id: 'e1',
      src:   '/images/event/event-1.jpg',
      thumb: '/images/event/event-1.jpg',
      alt:   'Event photo 1',
    },
    {
      id: 'e2',
      src:   '/images/event/event-2.jpg',
      thumb: '/images/event/event-2.jpg',
      alt:   'Event photo 2',
    },
    {
      id: 'e3',
      src:   '/images/event/event-3.jpg',
      thumb: '/images/event/event-3.jpg',
      alt:   'Event photo 3',
    },
    {
      id: 'e4',
      src:   '/images/event/event-4.jpg',
      thumb: '/images/event/event-4.jpg',
      alt:   'Event photo 4',
    },
    {
      id: 'e5',
      src:   '/images/event/event-5.jpg',
      thumb: '/images/event/event-5.jpg',
      alt:   'Event photo 5',
    },
    // Add more: copy a block above and increment the number
  ],

  // ----------------------------------------------------------
  //  WILDLIFE  →  /public/images/wildlife/
  // ----------------------------------------------------------
  wildlife: [
    {
      id: 'w1',
      src:   '/images/wildlife/wildlife-1.jpg',
      thumb: '/images/wildlife/wildlife-1.jpg',
      alt:   'Wildlife photo 1',
    },
    {
      id: 'w2',
      src:   '/images/wildlife/wildlife-2.jpg',
      thumb: '/images/wildlife/wildlife-2.jpg',
      alt:   'Wildlife photo 2',
    },
    {
      id: 'w3',
      src:   '/images/wildlife/wildlife-3.jpg',
      thumb: '/images/wildlife/wildlife-3.jpg',
      alt:   'Wildlife photo 3',
    },
    {
      id: 'w4',
      src:   '/images/wildlife/wildlife-4.jpg',
      thumb: '/images/wildlife/wildlife-4.jpg',
      alt:   'Wildlife photo 4',
    },
    {
      id: 'w5',
      src:   '/images/wildlife/wildlife-5.jpg',
      thumb: '/images/wildlife/wildlife-5.jpg',
      alt:   'Wildlife photo 5',
    },
    {
      id: 'w6',
      src:   '/images/wildlife/wildlife-6.jpg',
      thumb: '/images/wildlife/wildlife-6.jpg',
      alt:   'Wildlife photo 6',
    },
    {
      id: 'w7',
      src:   '/images/wildlife/wildlife-7.jpg',
      thumb: '/images/wildlife/wildlife-7.jpg',
      alt:   'Wildlife photo 7',
    },
    {
      id: 'w8',
      src:   '/images/wildlife/wildlife-8.jpg',
      thumb: '/images/wildlife/wildlife-8.jpg',
      alt:   'Wildlife photo 8',
    },
    {
      id: 'w9',
      src:   '/images/wildlife/wildlife-9.jpg',
      thumb: '/images/wildlife/wildlife-9.jpg',
      alt:   'Wildlife photo 9',
    },
    {
      id: 'w10',
      src:   '/images/wildlife/wildlife-10.jpg',
      thumb: '/images/wildlife/wildlife-10.jpg',
      alt:   'Wildlife photo 10',
    },
    {
      id: 'w11',
      src:   '/images/wildlife/wildlife-11.jpg',
      thumb: '/images/wildlife/wildlife-11.jpg',
      alt:   'Wildlife photo 11',
    },
    {
      id: 'w12',
      src:   '/images/wildlife/wildlife-12.jpg',
      thumb: '/images/wildlife/wildlife-12.jpg',
      alt:   'Wildlife photo 12',
    },
    {
      id: 'w13',
      src:   '/images/wildlife/wildlife-13.jpg',
      thumb: '/images/wildlife/wildlife-13.jpg',
      alt:   'Wildlife photo 13',
    },
    // Add more: copy a block above and increment the number
  ],

}; // ← end of portfolioImages


// ------------------------------------------------------------
//  ABOUT PAGE PHOTO
//  Folder: /public/images/about/
//  Name your file: profile.jpg  (or update the path below)
// ------------------------------------------------------------
export const aboutPhoto = {
  src: '/images/about/profile.jpg',
  alt: 'Photographer portrait',
};
