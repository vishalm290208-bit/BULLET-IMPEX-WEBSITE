import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Layers, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/factoryData';

export const VisualGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Garments',
    'Knitting & Dyeing',
    'Printing & Detailing',
    'Sewing & Finishing',
    'Quality Lab',
    'Facility'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex(i => i.id === item.id);
    setActiveLightboxIndex(idx);
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E]">
            Editorial Archive
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.12]">
              Garment & <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">Factory Gallery.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md leading-relaxed">
            An editorial glimpse into our Tiruppur operations: finished knitwear, German circular knitting, ZLD wet processing, automated printing, embroidery, sewing, and AQL 1.5 inspection.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#141618] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Apply subtle asymmetric spans for a high-fashion look
            const isSpan = index === 0 || index === 5;

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative rounded-3xl overflow-hidden bg-stone-200 cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-300 border border-stone-300 ${
                  isSpan ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-[#141618]/90 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                  {item.category}
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Content */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight group-hover:text-red-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Lightbox Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C81E1E] bg-white/10 px-3 py-1 rounded-full font-bold">
                {GALLERY_ITEMS[activeLightboxIndex].category}
              </span>
              <span className="text-xs font-mono text-stone-400">
                {activeLightboxIndex + 1} of {GALLERY_ITEMS.length}
              </span>
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Center Content */}
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative max-h-[68vh] rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border border-stone-800">
              <img
                src={GALLERY_ITEMS[activeLightboxIndex].image}
                alt={GALLERY_ITEMS[activeLightboxIndex].title}
                className="max-h-[68vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center max-w-2xl px-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                {GALLERY_ITEMS[activeLightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}
    </section>
  );
};
