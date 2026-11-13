import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2, Layers, Eye, X, Send } from 'lucide-react';
import { PRODUCT_CATEGORIES, ProductCategoryItem } from '../data/factoryData';

interface ProductCollectionsProps {
  onSelectProductForInquiry: (productName: string) => void;
}

export const ProductCollections: React.FC<ProductCollectionsProps> = ({ onSelectProductForInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryItem | null>(null);

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E]">
            Product Collections
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.12]">
              Apparel for Every Stage. <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">Crafted</span> with Purpose.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md leading-relaxed">
            Seven dedicated garment categories engineered across pure combed cotton, stretch elastane, modal, and lyocell blends. Tailored to international retail buyer benchmarks.
          </p>
        </div>

        {/* Editorial Asymmetric Fashion Catalogue Grid (Varying Proportions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7">
          {PRODUCT_CATEGORIES.map((cat, index) => {
            // Asymmetrical grid column spans to create varied layout
            let colSpan = "lg:col-span-4";
            if (index === 0) colSpan = "lg:col-span-7"; // Large hero feature for Newborn Wear
            else if (index === 1) colSpan = "lg:col-span-5"; // Infant Wear
            else if (index === 2) colSpan = "lg:col-span-4"; // Toddler Wear
            else if (index === 3) colSpan = "lg:col-span-4"; // Women's Wear
            else if (index === 4) colSpan = "lg:col-span-4"; // Men's Wear
            else if (index === 5) colSpan = "lg:col-span-6"; // Sleepwear
            else if (index === 6) colSpan = "lg:col-span-6"; // Sportswear

            return (
              <div
                key={cat.id}
                className={`${colSpan} group bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-2xl hover:border-stone-400 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Image Container with Editorial Zoom & Details */}
                  <div className={`relative w-full overflow-hidden bg-stone-100 ${
                    index === 0 ? 'aspect-[16/10]' : (cat.proportion === 'landscape' ? 'aspect-[16/11]' : 'aspect-[4/3]')
                  }`}>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                    {/* Category Label Pill */}
                    <div className="absolute top-4 left-4 bg-[#141618]/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold">
                      {cat.name}
                    </div>

                    {/* GSM Range Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-[#141618] font-mono font-bold text-xs px-2.5 py-1 rounded-lg shadow-xs border border-stone-200">
                      {cat.gsmRange}
                    </div>

                    {/* Title inside image for editorial feel */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[11px] font-mono text-stone-300 uppercase tracking-widest">
                        {cat.tagline}
                      </div>
                      <h3 className="font-serif text-2xl font-bold mt-0.5 leading-snug">
                        {cat.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                        Primary Fabric Composition:
                      </span>
                      <span className="font-bold text-stone-900 mt-0.5 block">
                        {cat.fabricSpecs}
                      </span>
                    </div>

                    {/* 3 Key Spec Bullet Points */}
                    <div className="space-y-1.5 pt-1">
                      {cat.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 sm:p-7 pt-0 grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className="py-2.5 px-3 rounded-lg border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-700 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specs</span>
                  </button>

                  <button
                    onClick={() => onSelectProductForInquiry(cat.name)}
                    className="py-2.5 px-3 rounded-lg bg-[#C81E1E] hover:bg-[#A81818] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center space-x-1 cursor-pointer active:scale-95"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Expandable Category Detail Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-300 relative my-8">
            
            {/* Modal Header Image */}
            <div className="relative h-64 bg-stone-100 overflow-hidden">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C81E1E] font-bold bg-white px-2 py-0.5 rounded">
                  {selectedCategory.tagline}
                </span>
                <h3 className="font-serif text-3xl font-bold mt-2">
                  {selectedCategory.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-5 text-stone-700 text-xs sm:text-sm">
              <p className="text-stone-600 leading-relaxed">
                {selectedCategory.description}
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-400 block font-semibold">Fabric Specification:</span>
                  <strong className="text-stone-900 block mt-0.5">{selectedCategory.fabricSpecs}</strong>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-400 block font-semibold">GSM Range:</span>
                  <strong className="text-[#C81E1E] font-mono text-sm block mt-0.5">{selectedCategory.gsmRange}</strong>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider">
                  Manufacturing & Construction Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCategory.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-mono">
                  Custom tech-packs accepted
                </span>
                <button
                  onClick={() => {
                    const name = selectedCategory.name;
                    setSelectedCategory(null);
                    onSelectProductForInquiry(name);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#C81E1E] hover:bg-[#A81818] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request Counter-Sample
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
