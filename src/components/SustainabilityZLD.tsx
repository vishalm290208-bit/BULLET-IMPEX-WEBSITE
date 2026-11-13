import React from 'react';
import { Droplets, CheckCircle2, RotateCcw, ShieldCheck, Activity, ArrowRight } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';

export const SustainabilityZLD: React.FC = () => {
  return (
    <section id="sustainability" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E]">
            Environmental Stewardship
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.12]">
              Creating Better Apparel. <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">With Greater</span> Responsibility.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md leading-relaxed">
            Sustainability is deeply embedded in our operations. Our own dedicated wet processing unit, <strong>Akshera Knit Dyers Processes</strong>, follows a closed-loop Zero Liquid Discharge model.
          </p>
        </div>

        {/* ZLD Deep Dive Split Card */}
        <div className="bg-[#141618] text-white rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-2xl overflow-hidden relative">
          {/* Subtle water-weave texture */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Narrative from Company Profile */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-mono font-semibold">
                <Droplets className="w-4 h-4 text-cyan-400" />
                <span>Zero Liquid Discharge (ZLD) Facility</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Akshera Knit Dyers Processes: <br />
                <span className="text-emerald-400">100% Water Purified, Recovered & Reused</span>
              </h3>

              <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong>Bullet Impex Private Limited</strong>, we have our own wet processing unit in the name of <strong>Akshera Knit Dyers Processes</strong>. Sustainability is at the core of our operations.
                </p>
                <p>
                  Our dyeing units follow the <strong>Zero Liquid Discharge (ZLD)</strong> process, which ensures that <strong>not a single drop of wastewater is released into the environment</strong>. Through advanced multi-stage treatment systems, every drop of process water is purified, recovered, and reused within our facility.
                </p>
                <p className="text-stone-400 text-xs sm:text-sm">
                  This eco-conscious approach not only drastically reduces fresh water consumption but also eliminates environmental impact, aligning with our commitment to ethical and sustainable apparel manufacturing.
                </p>
              </div>

              {/* 3 Technical Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-serif text-2xl font-bold text-emerald-400 font-mono">100%</div>
                  <div className="text-xs font-semibold text-white">Water Recovery</div>
                  <p className="text-[10px] text-stone-400">Zero discharge into rivers or ground.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-serif text-2xl font-bold text-cyan-400 font-mono">Closed</div>
                  <div className="text-xs font-semibold text-white">Loop Cycle</div>
                  <p className="text-[10px] text-stone-400">Continuous biological & RO recycling.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-serif text-2xl font-bold text-white font-mono">Safe</div>
                  <div className="text-xs font-semibold text-white">Non-Azo Dyes</div>
                  <p className="text-[10px] text-stone-400">Low-temperature reactive chemistry.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Authentic Wet Processing Photo & System Metrics */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-700 aspect-[4/3] bg-stone-900 shadow-xl group">
                <img
                  src="/images/factory/dyeing-unit.jpg"
                  alt="Akshera Knit Dyers wet processing dyeing vessel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 block">
                    Own Wet Processing Unit
                  </span>
                  <span className="text-sm font-bold">
                    Akshera Knit Dyers Processes (ZLD)
                  </span>
                </div>
              </div>

              {/* Process Stages Box */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-stone-300">
                <div className="flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-wider">
                  <RotateCcw className="w-4 h-4 text-emerald-400" />
                  <span>The ZLD Recovery Loop</span>
                </div>
                <div className="space-y-1.5 pl-6 text-[11px] text-stone-400">
                  <div>1. High-efficiency soft-flow dyeing with low liquor ratio</div>
                  <div>2. Primary & secondary biological effluent clarification</div>
                  <div>3. Multi-stage high-rejection Reverse Osmosis (RO) membranes</div>
                  <div>4. Mechanical vapor recompression & crystal recovery</div>
                  <div>5. 100% purified condensate returned back to dyeing boilers</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
