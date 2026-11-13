import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/factoryData';

interface WhyBulletImpexProps {
  onOpenInquiryModal: () => void;
}

export const WhyBulletImpex: React.FC<WhyBulletImpexProps> = ({ onOpenInquiryModal }) => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E]">
            Strategic Advantage
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.12]">
              Why Bullet Impex? <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">Eight Pillars</span> of Reliability.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md leading-relaxed">
            International fashion labels require a manufacturing partner combining artisanal textile craft, cutting-edge machine fleets, transparent compliance, and uncompromising timeline delivery.
          </p>
        </div>

        {/* Visual Storytelling Grid (Varying Asymmetric Feature Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => {
            const isFeatured = index === 0 || index === 2 || index === 6;

            return (
              <div
                key={item.number}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-[#141618] text-white border-stone-800 shadow-xl'
                    : 'bg-white text-stone-800 border-stone-300 shadow-xs hover:shadow-lg hover:border-stone-400'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Top Metric & Number Header */}
                  <div className="flex items-start justify-between pb-4 border-b border-stone-200/20">
                    <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                      isFeatured ? 'bg-[#C81E1E] text-white' : 'bg-red-50 text-[#C81E1E] border border-red-200'
                    }`}>
                      {item.number}
                    </span>

                    {item.metric && (
                      <div className="text-right">
                        <div className={`font-serif text-2xl font-bold font-mono ${
                          isFeatured ? 'text-[#C81E1E]' : 'text-stone-900'
                        }`}>
                          {item.metric}
                        </div>
                        <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                          isFeatured ? 'text-stone-400' : 'text-stone-500'
                        }`}>
                          {item.metricLabel}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className={`font-serif text-xl font-bold leading-tight ${
                      isFeatured ? 'text-white' : 'text-stone-900'
                    }`}>
                      {item.title}
                    </h3>
                    <div className={`text-[11px] font-mono uppercase tracking-wider mt-1 ${
                      isFeatured ? 'text-stone-400' : 'text-[#C81E1E] font-semibold'
                    }`}>
                      {item.headline}
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed ${
                    isFeatured ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    {item.description}
                  </p>

                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="pt-6 mt-4 border-t border-stone-200/20 flex items-center space-x-1.5 text-[11px] font-semibold">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isFeatured ? 'bg-emerald-400' : 'bg-[#C81E1E]'
                  }`} />
                  <span className={isFeatured ? 'text-stone-400' : 'text-stone-500'}>
                    Verified Production Standard
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Partnership Callout Banner */}
        <div className="bg-[#FAF9F6] border border-stone-300 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              Looking for a Reliable Knitted Garment Partner in India?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl">
              We provide rapid counter-sampling within 7–10 days with complete strike-off fabric approvals before bulk manufacturing.
            </p>
          </div>

          <button
            onClick={onOpenInquiryModal}
            className="px-6 py-3.5 rounded-xl bg-[#C81E1E] hover:bg-[#A81818] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center space-x-2 cursor-pointer shrink-0"
          >
            <span>START A DISCUSSION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
