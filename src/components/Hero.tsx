import React from 'react';
import { ArrowRight, ShieldCheck, Download, ChevronDown, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';

interface HeroProps {
  onOpenAuditModal: () => void;
  onOpenInquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onOpenInquiryModal }) => {
  return (
    <section id="hero" className="relative bg-[#FAF9F6] border-b border-stone-200 overflow-hidden">
      {/* Textile Weave Micro Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#141618_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 lg:pb-24">
        
        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-stone-800 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C81E1E] animate-pulse"></span>
            <span className="tracking-wide">Tiruppur, Tamil Nadu, India</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#C81E1E] text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C81E1E]" />
            <span className="tracking-wide">18+ Years of Manufacturing Expertise</span>
          </div>

          <button
            onClick={onOpenAuditModal}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition-colors cursor-pointer shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>SMETA 4-Pillar Audited</span>
          </button>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text / Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E] block">
                {FACTORY_INFO.legalEntity}
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141618] font-bold tracking-tight leading-[1.08]">
                Crafting Quality. <br />
                <span className="italic font-normal font-serif text-[#C81E1E]">Defining</span> Apparel.
              </h1>
            </div>

            <p className="font-mono text-sm sm:text-base font-semibold text-stone-700 tracking-wide">
              18+ Years of Expertise in Knitted Garment Manufacturing.
            </p>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl">
              An established apparel manufacturing and export company based in Tiruppur, India. Combining the visual finesse of a premium international fashion brand with vertically integrated production—from German circular knitting and Zero Liquid Discharge (ZLD) eco-dyeing to automated printing, embroidery, and AQL 1.5 certified CMT export lines.
            </p>

            {/* Core Capability Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-medium text-stone-700">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C81E1E] shrink-0" />
                <span>30 Mayer & Cie German Knitting Machines</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C81E1E] shrink-0" />
                <span>Akshera Knit Dyers (100% ZLD Water Recovery)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C81E1E] shrink-0" />
                <span>Barudan & Tajima 40-Head Embroidery</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C81E1E] shrink-0" />
                <span>In-House Testing Laboratory (AQL 1.5)</span>
              </div>
            </div>

            {/* Section 2 Mandatory Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <a
                href="#products"
                className="px-7 py-3.5 rounded-lg bg-[#C81E1E] hover:bg-[#A81818] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group cursor-pointer active:scale-95"
              >
                <span>EXPLORE OUR PRODUCTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#manufacturing"
                className="px-7 py-3.5 rounded-lg bg-[#141618] hover:bg-stone-900 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>DISCOVER OUR CAPABILITIES</span>
              </a>

              <a
                href="/documents/bullet-impex-company-profile.pdf"
                target="_blank"
                rel="noreferrer"
                download="Bullet_Impex_Company_Profile.pdf"
                className="px-4 py-3.5 rounded-lg border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-700 font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <Download className="w-4 h-4 text-stone-500" />
                <span>Profile (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Main Feature Factory Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-[4/3] group">
                <img
                  src="/images/factory/factory-building.jpg"
                  alt="Bullet Impex factory facility in Mannarai, Tiruppur"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-stone-300">
                    Integrated Production Facility
                  </div>
                  <div className="text-sm font-semibold tracking-wide">
                    Mannarai, Tiruppur, Tamil Nadu
                  </div>
                </div>
              </div>

              {/* Floating Knitwear Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-56 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="relative aspect-[4/3] bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
                    alt="Finished cotton knitwear"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/95 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-stone-800 shadow-xs">
                    240 GSM
                  </div>
                </div>
                <div className="p-2.5 bg-stone-50 text-left">
                  <div className="text-[11px] font-bold text-stone-900 leading-tight">
                    Combed Single Jersey
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    Bio-wash • Silicone Polish
                  </div>
                </div>
              </div>

              {/* Floating Infrastructure Badge */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-xl p-3 shadow-lg flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#C81E1E]/10 flex items-center justify-center text-[#C81E1E]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Mayer & Cie</div>
                  <div className="text-[10px] text-stone-500">German Precision Knits</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Live Metrics Bar */}
      <div className="bg-[#141618] text-white py-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {FACTORY_INFO.experience}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                Knitted Garment Expertise
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C81E1E] tracking-tight">
                5,000 Pcs/Day
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                Cutting Capacity
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                4,500 Pcs/Day
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                Sewing & Stitching Lines
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">
                100% ZLD
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                Akshera Water Recovery
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight">
                AQL 1.5
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                Strict Quality Standard
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
