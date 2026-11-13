import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ChevronLeft, ArrowRight, Layers, Cpu, Scissors, FlaskConical, Award } from 'lucide-react';
import { MANUFACTURING_STAGES, ManufacturingStageItem } from '../data/factoryData';

export const ManufacturingCapabilities: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(1); // Default to B (Knitting)
  const stage = MANUFACTURING_STAGES[currentStageIndex];

  return (
    <section id="manufacturing" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E]">
            End-To-End Infrastructure
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.12]">
              From Yarn to <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">Finished Garment.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md leading-relaxed">
            Nine synchronized manufacturing departments under one roof in Tiruppur. Powered by German Mayer & Cie knitting, Shima Seiki collars, Barudan/Tajima embroidery, and 50+ computerized stitching stations.
          </p>
        </div>

        {/* Horizontal Visual Process Flow Bar (A to I) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {MANUFACTURING_STAGES.map((item, idx) => (
            <button
              key={item.letter}
              onClick={() => setCurrentStageIndex(idx)}
              className={`px-4 py-3 rounded-2xl text-left whitespace-nowrap transition-all cursor-pointer flex items-center space-x-3 border ${
                currentStageIndex === idx
                  ? 'bg-[#141618] text-white border-[#141618] shadow-lg scale-102'
                  : 'bg-white text-stone-700 hover:text-stone-900 hover:bg-stone-100 border-stone-300'
              }`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                currentStageIndex === idx ? 'bg-[#C81E1E] text-white' : 'bg-stone-100 text-stone-800'
              }`}>
                {item.letter}
              </span>
              <div className="text-left">
                <div className="text-xs font-bold leading-none">{item.title}</div>
                {item.capacity && (
                  <div className={`text-[10px] font-mono mt-0.5 ${
                    currentStageIndex === idx ? 'text-red-300' : 'text-[#C81E1E]'
                  }`}>
                    {item.capacity.split(' ')[0]} Pcs/Day
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Editorial Walkthrough Card */}
        <div className="bg-white rounded-3xl border border-stone-300 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Authentic Machine & Department Photography */}
            <div className="lg:col-span-6 relative bg-stone-100 min-h-[380px] sm:min-h-[480px]">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

              {/* Machinery Brand Tag */}
              <div className="absolute top-5 left-5 bg-[#141618]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-xl border border-white/20 shadow-xs">
                <span className="text-[10px] font-mono text-stone-300 uppercase tracking-widest block font-semibold">
                  Machinery Setup
                </span>
                <span className="text-xs font-bold font-mono">
                  {stage.title} Department
                </span>
              </div>

              {/* Daily Capacity Badge (Cutting: 5,000, Sewing: 4,500, Finishing: 4,500) */}
              {stage.capacity && (
                <div className="absolute bottom-5 left-5 bg-[#C81E1E] text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-200 block font-semibold">
                    Stated Daily Capacity
                  </span>
                  <span className="text-base font-bold font-mono">
                    {stage.capacity}
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Detailed Department Specifications */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Header Metadata */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-[#C81E1E] bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
                      STAGE {stage.letter} • {currentStageIndex + 1} OF 9
                    </span>
                    <span className="text-xs text-stone-500 font-medium">Vertical Pipeline</span>
                  </div>

                  <span className="text-xs font-mono text-stone-400">
                    Bullet Impex Factory
                  </span>
                </div>

                {/* Stage Title */}
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141618] leading-tight">
                    {stage.title}
                  </h3>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#C81E1E] mt-1">
                    {stage.subtitle}
                  </div>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {stage.description}
                </p>

                {/* Installed Equipment Box */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="text-[10px] font-mono uppercase text-stone-400 font-semibold block">
                    Equipment Fleet:
                  </span>
                  <strong className="text-stone-900 block mt-0.5 font-mono text-xs sm:text-sm">
                    {stage.equipment}
                  </strong>
                </div>

                {/* Specific Capabilities List */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold block">
                    Operational Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stage.bulletPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Navigation Controls Between Stages */}
              <div className="pt-8 mt-8 border-t border-stone-200 flex items-center justify-between">
                <button
                  disabled={currentStageIndex === 0}
                  onClick={() => setCurrentStageIndex(prev => Math.max(0, prev - 1))}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-colors flex items-center space-x-1 ${
                    currentStageIndex === 0
                      ? 'text-stone-300 cursor-not-allowed'
                      : 'text-stone-700 hover:bg-stone-100 cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center space-x-1.5">
                  {MANUFACTURING_STAGES.map((s, i) => (
                    <button
                      key={s.letter}
                      onClick={() => setCurrentStageIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentStageIndex === i ? 'w-6 bg-[#C81E1E]' : 'bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Jump to stage ${s.letter}`}
                    />
                  ))}
                </div>

                <button
                  disabled={currentStageIndex === MANUFACTURING_STAGES.length - 1}
                  onClick={() => setCurrentStageIndex(prev => Math.min(MANUFACTURING_STAGES.length - 1, prev + 1))}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-colors flex items-center space-x-1 ${
                    currentStageIndex === MANUFACTURING_STAGES.length - 1
                      ? 'text-stone-300 cursor-not-allowed'
                      : 'text-white bg-[#C81E1E] hover:bg-[#A81818] cursor-pointer shadow-xs'
                  }`}
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
