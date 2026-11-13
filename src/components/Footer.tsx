import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Download, ArrowUp, Droplets, ExternalLink } from 'lucide-react';
import { FACTORY_INFO, PRODUCT_CATEGORIES } from '../data/factoryData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenAuditModal: () => void;
  onOpenInquiryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal, onOpenInquiryModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141618] text-stone-300 border-t border-stone-800">
      
      {/* Top CTA Banner */}
      <div className="border-b border-stone-800 py-12 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to Discuss Your Next Knitted Garment Production?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              18+ Years of expertise in Tiruppur. Rapid counter-sampling in 7–10 days.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenInquiryModal}
              className="px-6 py-3 rounded-xl bg-[#C81E1E] hover:bg-[#A81818] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer"
            >
              REQUEST A QUOTE
            </button>
            <button
              onClick={onOpenAuditModal}
              className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center space-x-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SMETA Audit Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand Logo, Tagline, Introduction */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="dark" />

            <div className="space-y-2 text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              <p>
                <strong>BULLET IMPEX PRIVATE LIMITED</strong> is a premier knitted garment manufacturing and apparel export company based in Tiruppur, India. Over 18 years of technical excellence delivering consistency from concept to completion.
              </p>
              <p className="text-[11px] font-mono text-[#C81E1E] font-bold">
                BULLET • AUTHENTIC WEAR
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-stone-800/90 border border-stone-700 text-[11px] font-mono text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>LRQA Audited ({FACTORY_INFO.sedexSiteRef})</span>
              </span>

              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-stone-800/90 border border-stone-700 text-[11px] font-mono text-cyan-300">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span>Akshera ZLD Unit</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-stone-400 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#fabrics" className="hover:text-white transition-colors">Fabric Expertise</a></li>
              <li><a href="#manufacturing" className="hover:text-white transition-colors">Manufacturing</a></li>
              <li><a href="#quality" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainability (ZLD)</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Bullet Impex</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Factory Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: 7 Product Categories */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Product Collections
            </h4>
            <ul className="space-y-2 text-stone-400">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#products" className="hover:text-[#C81E1E] transition-colors flex items-center space-x-1.5">
                    <span className="text-[#C81E1E]">•</span>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Registered Office & Contact */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Contact & Address
            </h4>
            
            <div className="space-y-3 text-stone-400">
              <div>
                <span className="text-stone-300 font-semibold block">{FACTORY_INFO.contactPerson}</span>
                <span className="text-stone-500 text-[11px] block">{FACTORY_INFO.designation}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C81E1E] shrink-0" />
                <a href={`tel:${FACTORY_INFO.phoneRaw}`} className="text-white hover:text-[#C81E1E] font-mono font-bold tracking-wide">
                  {FACTORY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C81E1E] shrink-0" />
                <a href={`mailto:${FACTORY_INFO.email}`} className="text-stone-300 hover:text-white underline">
                  {FACTORY_INFO.email}
                </a>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#C81E1E] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px]">
                  {FACTORY_INFO.fullAddress}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/documents/bullet-impex-company-profile.pdf"
                target="_blank"
                rel="noreferrer"
                download="Bullet_Impex_Profile.pdf"
                className="inline-flex items-center space-x-1.5 text-[11px] text-[#C81E1E] hover:underline font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Profile PDF (8 Pages)</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-stone-800/80 py-6 text-stone-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            © 2026 {FACTORY_INFO.legalEntity}. All rights reserved. Tiruppur, Tamil Nadu, India.
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span>Sedex Site: {FACTORY_INFO.sedexSiteRef}</span>
            <span>•</span>
            <span>LRQA Audit: {FACTORY_INFO.auditDate}</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
