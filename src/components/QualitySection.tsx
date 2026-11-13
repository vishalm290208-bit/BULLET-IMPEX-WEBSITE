import React from 'react';
import { 
  ShieldCheck, 
  FlaskConical, 
  CheckCircle2, 
  Scale, 
  Search, 
  Sparkles, 
  Activity,
  Layers
} from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';

export const QualitySection: React.FC = () => {
  const labParameters = [
    { title: "GSM Tolerance", desc: "Digital balance verification across fabric rolls to ensure uniform weight." },
    { title: "Dimensional Stability", desc: "Washing and drying test cycles measuring lengthwise and widthwise shrinkage." },
    { title: "Spirality & Torque", desc: "Measurement of side-seam twist after wash to prevent garment distortion." },
    { title: "Color Fastness", desc: "Testing resistance to washing, wet/dry rubbing (Crockmeter), and perspiration." },
    { title: "Seam Strength", desc: "Tensile verification of stitch tension across stress points and hems." },
    { title: "Metal & Needle Detection", desc: "100% conveyor pass-through ensuring zero broken needle fragments." }
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C81E1E]">
            Quality Assurance Protocols
          </span>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-6 border-b border-stone-200">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.15]">
              Quality Is Woven Into <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">Every Detail.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm text-stone-600 leading-relaxed">
            Our dedicated Quality Control team monitors garments across every stage—from raw yarn testing and greige inspection to computerized sewing and final packaging under strict AQL 1.5 standards.
          </div>
        </div>

        {/* Main Split: Lab & QC Floor Photography + Technical Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left: Authentic In-House Lab & Inspection Photos */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Photo 1: Physical QC Inspection with measuring tape */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300 bg-stone-100 aspect-[3/4]">
                <img
                  src="/images/factory/quality-inspection.jpg"
                  alt="Quality inspector measuring garment dimensions at Bullet Impex"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300 block">
                    Inspection Stage
                  </span>
                  <span className="text-xs font-bold">
                    Strict AQL 1.5 Standard Audit
                  </span>
                </div>
              </div>

              {/* Photo 2: Testing Lab washing machines */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300 bg-stone-100 aspect-[3/4]">
                <img
                  src="/images/factory/testing-laboratory.jpg"
                  alt="In-house internal fabric testing lab at Bullet Impex factory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300 block">
                    In-House Laboratory
                  </span>
                  <span className="text-xs font-bold">
                    Fabric-to-Finishing Testing
                  </span>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
              <span className="font-semibold text-stone-800">
                Factory Premises Laboratory:
              </span>
              <span className="font-mono text-[#C81E1E] font-bold">
                Tested As Per Buyer Requirements
              </span>
            </div>
          </div>

          {/* Right: The 4 Quality Checkpoints */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#C81E1E] flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  AQL 1.5 International Inspection Standard
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                We enforce the globally recognized Acceptable Quality Limit (AQL) 1.5 benchmark for major and minor defects. Sampling plans are executed systematically before any batch is cleared for export packaging.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#C81E1E] flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  Internal Factory Testing Laboratory
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                Equipped with conditioning wash machines, tumblers, and precision scales to conduct dimensional stability, shrinkage, spirality, and wash-fastness tests from grey fabric through to the finished piece.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#C81E1E] flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  Calibrated Conveyor Needle Detection
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                Zero compromise on end-user safety. Every single infant, toddler, and adult garment passes through automated conveyor metal detectors to ensure complete 100% ferrous-free shipment.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#C81E1E] flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  Naomoto & Macpi Finishing Polish
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                Our finishing floor utilizes Naomoto, Macpi, and Bella vacuum steam pressing machines to remove excess threads, eliminate potential stains, and shape garments to retail-ready perfection.
              </p>
            </div>

          </div>

        </div>

        {/* 6 Lab Parameter Cards */}
        <div className="bg-stone-100 rounded-3xl p-8 sm:p-10 border border-stone-200">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                In-House Laboratory Testing Parameters
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Conducted systematically inside our factory premises for every production lot.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white text-stone-700 border border-stone-300">
              Lab Standard: ISO / ASTM / Buyer Manual
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {labParameters.map((param, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#C81E1E] shrink-0" />
                  <span>{param.title}</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  {param.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
