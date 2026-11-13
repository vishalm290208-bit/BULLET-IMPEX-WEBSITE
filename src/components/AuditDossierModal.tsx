import React from 'react';
import { X, ShieldCheck, Printer, CheckCircle2, Download, ExternalLink, Droplets, Award, FileText } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';

interface AuditDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditDossierModal: React.FC<AuditDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-stone-300 max-w-3xl w-full rounded-3xl shadow-2xl relative my-8 overflow-hidden text-stone-800">
        
        {/* Modal Header */}
        <div className="bg-[#141618] px-6 sm:px-8 py-5 border-b border-stone-800 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                Ethical Audit Dossier
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                Sedex SMETA 4-Pillar Verification
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Dossier</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
          
          {/* Company & Verification Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
            <div>
              <h4 className="font-serif text-xl font-bold text-stone-900">
                {FACTORY_INFO.name}
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                {FACTORY_INFO.fullAddress}
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                Closed & Verified Status
              </span>
            </div>
          </div>

          {/* Audit Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
            <div>
              <span className="text-stone-400 font-mono text-[10px] uppercase block">Sedex Site Ref:</span>
              <strong className="text-stone-900 font-mono text-sm">{FACTORY_INFO.sedexSiteRef}</strong>
            </div>

            <div>
              <span className="text-stone-400 font-mono text-[10px] uppercase block">Sedex Company Ref:</span>
              <strong className="text-stone-900 font-mono text-sm">{FACTORY_INFO.sedexCompanyRef}</strong>
            </div>

            <div>
              <span className="text-stone-400 font-mono text-[10px] uppercase block">Audit Agency:</span>
              <strong className="text-stone-900 font-medium">LRQA (Lloyd's Register)</strong>
            </div>

            <div>
              <span className="text-stone-400 font-mono text-[10px] uppercase block">Audit Reference:</span>
              <strong className="text-stone-900 font-mono">{FACTORY_INFO.auditCompany} / {FACTORY_INFO.auditDate}</strong>
            </div>
          </div>

          {/* The 4 Pillars Audited */}
          <div className="space-y-3">
            <h5 className="font-bold text-stone-900 text-xs uppercase tracking-wider">
              SMETA 4-Pillar Scope & Standards
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-stone-200 bg-white space-y-1">
                <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1. Labour Standards</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed pl-6">
                  Freely chosen employment, living wages, regulated working hours, non-discrimination, and freedom of association.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-stone-200 bg-white space-y-1">
                <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2. Health & Safety</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed pl-6">
                  Ergonomic workstations, machine safety guards, fire safety, calibrated needle detection, and regular PPE training.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-stone-200 bg-white space-y-1">
                <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3. Environment 4-Pillar</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed pl-6">
                  Zero Liquid Discharge (ZLD) wet processing at Akshera Knit Dyers. 100% water recovery with zero effluent.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-stone-200 bg-white space-y-1">
                <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>4. Business Ethics</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed pl-6">
                  Transparent accounting, anti-bribery policies, legal compliance, and established Internal Complaints Committee (ICC).
                </p>
              </div>
            </div>
          </div>

          {/* Akshera ZLD Callout */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1.5">
            <div className="flex items-center space-x-2 font-bold">
              <Droplets className="w-4 h-4 text-emerald-700" />
              <span>Own Wet Processing Unit: Akshera Knit Dyers Processes</span>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              Equipped with state-of-the-art biological treatment, ultrafiltration, reverse osmosis, and thermal evaporators. 100% of process water is returned to dyeing operations.
            </p>
          </div>

          {/* Official Sign-Off Details */}
          <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-2">
            <div>
              <span>Authorised Representative: </span>
              <strong className="text-stone-800">Mr. K. Makhesh Kumar / Director</strong>
            </div>
            <div className="font-mono">
              Lead Auditor: Dinesh Kumar (APSCA 21701357)
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-stone-50 px-6 sm:px-8 py-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <a
              href="/documents/bullet-impex-smeta-audit-report.pdf"
              target="_blank"
              rel="noreferrer"
              download="Bullet_Impex_LRQA_SMETA_CAPR.pdf"
              className="px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full LRQA Report (PDF)</span>
            </a>

            <a
              href="/documents/bullet-impex-company-profile.pdf"
              target="_blank"
              rel="noreferrer"
              download="Bullet_Impex_Profile.pdf"
              className="px-4 py-2 rounded-lg bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-stone-500" />
              <span>Download Company Profile (PDF)</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
