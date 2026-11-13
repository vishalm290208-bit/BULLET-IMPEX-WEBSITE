import React, { useState } from 'react';
import { Layers, CheckCircle2, ChevronRight, Sparkles, Feather, ShieldCheck } from 'lucide-react';
import { FABRIC_TYPES, MATERIAL_BLENDS, FabricTypeItem } from '../data/factoryData';

interface FabricExpertiseProps {
  onSelectFabricForInquiry: (fabricName: string) => void;
}

export const FabricExpertise: React.FC<FabricExpertiseProps> = ({ onSelectFabricForInquiry }) => {
  const [activeFabric, setActiveFabric] = useState<FabricTypeItem>(FABRIC_TYPES[0]);

  return (
    <section id="fabrics" className="py-20 lg:py-28 bg-[#F4F2EC] border-b border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E]">
            Material Engineering
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-300">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.12]">
              Every Great Garment <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">Begins with</span> the Right Fabric.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md leading-relaxed">
            Knitted on our 30 Mayer & Cie German machines and dyed under Zero Liquid Discharge (ZLD) at Akshera Knit Dyers. Discover our 8 core fabric structures and 6 certified blends.
          </p>
        </div>

        {/* 8 Fabric Structures - Interactive Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-300 shadow-xl mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 mb-8 border-b border-stone-200 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C81E1E] font-bold block">
                Knitted Fabric Structures (8 Varieties)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Precision Knit Textures & Gauges
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono font-semibold border border-stone-200">
              German Circular & Flat Knit Versatility
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Fabric Selector List */}
            <div className="lg:col-span-5 space-y-2">
              {FABRIC_TYPES.map((fabric) => (
                <button
                  key={fabric.id}
                  onClick={() => setActiveFabric(fabric)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    activeFabric.id === fabric.id
                      ? 'bg-[#141618] text-white border-[#141618] shadow-md'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200/80'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-2 h-2 rounded-full ${
                      activeFabric.id === fabric.id ? 'bg-[#C81E1E]' : 'bg-stone-300'
                    }`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">{fabric.name}</div>
                      <div className={`text-[10px] font-mono ${
                        activeFabric.id === fabric.id ? 'text-stone-300' : 'text-stone-500'
                      }`}>
                        {fabric.structure}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                    activeFabric.id === fabric.id ? 'bg-white/10 text-stone-200' : 'bg-stone-200 text-stone-700'
                  }`}>
                    {fabric.gsmRange}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Active Fabric Feature Preview */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-stone-300 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C81E1E] font-bold block">
                    {activeFabric.structure}
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-0.5">
                    {activeFabric.name}
                  </h4>
                </div>
                <div className="bg-[#C81E1E] text-white font-mono text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs self-start">
                  {activeFabric.gsmRange}
                </div>
              </div>

              {/* Macro Fabric Image Frame */}
              <div className="relative h-56 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 shadow-inner">
                <img
                  src={activeFabric.image}
                  alt={activeFabric.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300 block">
                    Macro Knitted Texture
                  </span>
                  <span className="text-xs font-bold">
                    Target Applications: {activeFabric.applications}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {activeFabric.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-[10px] font-mono uppercase text-stone-400 block font-semibold">Production Machinery:</span>
                  <span className="font-bold text-stone-900">Mayer & Cie (Germany)</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-[10px] font-mono uppercase text-stone-400 block font-semibold">Dyeing Standard:</span>
                  <span className="font-bold text-emerald-700">100% ZLD Water Recovery</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectFabricForInquiry(`Fabric Swatch: ${activeFabric.name}`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#141618] hover:bg-[#C81E1E] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                >
                  Request Swatches for {activeFabric.name}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 6 Material Blends Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C81E1E] font-bold block">
                Material Chemistry & Sustainability
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Material Blends We Specialize In
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-stone-500">
              Cotton • Spandex • Poly • Viscose • Modal • Lyocell
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATERIAL_BLENDS.map((blend, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-300 shadow-xs hover:shadow-lg hover:border-stone-400 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-red-50 text-[#C81E1E] flex items-center justify-center font-bold font-mono text-xs">
                      {idx + 1}
                    </span>
                    <Feather className="w-4 h-4 text-stone-400" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    {blend.name}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {blend.characteristics}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-400 font-semibold block">Key Buyer Benefit:</span>
                    <span className="font-semibold text-stone-800">{blend.benefit}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-600 font-semibold block">Eco Characteristic:</span>
                    <span className="text-stone-500 text-[11px]">{blend.sustainability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
