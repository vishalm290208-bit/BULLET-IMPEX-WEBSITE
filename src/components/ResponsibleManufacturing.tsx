import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, Download, ExternalLink, HeartHandshake, Eye } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';

interface ResponsibleManufacturingProps {
  onOpenAuditModal: () => void;
}

export const ResponsibleManufacturing: React.FC<ResponsibleManufacturingProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="quality-sustainability" className="py-20 lg:py-28 bg-[#F4F2EC] border-b border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E]">
            Ethical Governance & Audits
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-300">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.12]">
              Responsible Practices. <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">Stronger</span> Partnerships.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md leading-relaxed">
            Bullet Impex Private Limited has undergone a rigorous SMETA 4-Pillar social and environmental audit conducted by LRQA, maintaining transparent governance and ethical labour standards.
          </p>
        </div>

        {/* Verified Audit Credential Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-300 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>SMETA 4-PILLAR AUDITED</span>
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  Site Ref: <strong className="text-stone-900">{FACTORY_INFO.sedexSiteRef}</strong>
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-mono">
                  Company Ref: <strong className="text-stone-900">{FACTORY_INFO.sedexCompanyRef}</strong>
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                Audited by LRQA (Lloyd's Register Quality Assurance)
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
                Bullet Impex has undergone a comprehensive full initial SMETA 4-Pillar audit conducted by <strong>LRQA</strong> (Audit Reference: <strong>{FACTORY_INFO.auditCompany} / {FACTORY_INFO.sedexSiteRef}</strong>, Date of Audit: <strong>19 May 2026</strong>). All corrective-action findings listed in the report were formally reviewed, verified, and <strong>closed in July 2026</strong>.
              </p>

              {/* 4 Audit Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-400 font-bold block uppercase">Pillar 1</span>
                  <strong className="text-stone-900 text-xs block mt-0.5">Labour Standards</strong>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-400 font-bold block uppercase">Pillar 2</span>
                  <strong className="text-stone-900 text-xs block mt-0.5">Health & Safety</strong>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-400 font-bold block uppercase">Pillar 3</span>
                  <strong className="text-stone-900 text-xs block mt-0.5">Environment 4-Pillar</strong>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-400 font-bold block uppercase">Pillar 4</span>
                  <strong className="text-stone-900 text-xs block mt-0.5">Business Ethics</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={onOpenAuditModal}
                  className="px-5 py-2.5 rounded-xl bg-[#141618] hover:bg-stone-900 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center space-x-2 cursor-pointer shadow-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Audit Dossier</span>
                </button>

                <a
                  href="/documents/bullet-impex-smeta-audit-report.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download="Bullet_Impex_LRQA_SMETA_Report.pdf"
                  className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-2"
                >
                  <Download className="w-4 h-4 text-stone-500" />
                  <span>Download LRQA CAPR (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right: Official Sedex & SMETA Brand Assets from Certificate */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-stone-50 rounded-2xl border border-stone-200 text-center space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                Social Responsibility Documentation
              </span>

              <div className="p-3 bg-white rounded-2xl border border-stone-200 shadow-sm">
                <img
                  src="/images/factory/sedex-badge.jpg"
                  alt="Sedex official badge"
                  className="h-20 w-auto object-contain mx-auto"
                />
                <span className="text-[11px] font-mono font-bold text-stone-700 mt-1 block">
                  Site Ref: {FACTORY_INFO.sedexSiteRef}
                </span>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-stone-200 shadow-sm w-full">
                <img
                  src="/images/factory/sedex-smeta-pillar.jpg"
                  alt="SMETA 4-Pillar audited"
                  className="h-12 w-auto object-contain mx-auto"
                />
              </div>

              <span className="text-[11px] text-stone-500 leading-tight block">
                Audited by LRQA under SMETA Version 7 methodology
              </span>
            </div>

          </div>
        </div>

        {/* 4 Responsible Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-stone-300 shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Labour Standards</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Freely chosen employment, living wages, statutory benefits (PF & ESI), regular working hours, and zero child labour.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-300 shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Health & Safety</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Clean ventilated workstations, needle detection security, fire evacuation routes, machine guards, and regular safety drills.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-300 shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Environmental Care</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Zero Liquid Discharge (ZLD) at Akshera Knit Dyers ensuring 100% water recovery with zero toxic effluent discharge.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-300 shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Business Ethics</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Transparent corporate governance, anti-bribery protocols, and an established Internal Complaints Committee (ICC).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
