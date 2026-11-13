import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Mail, Phone, MapPin, Droplets } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenAuditModal: () => void;
  onOpenInquiryModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuditModal, onOpenInquiryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Quality & Sustainability", href: "#quality-sustainability" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Pre-Header Utility Bar */}
      <div className="bg-[#141618] text-stone-300 text-[11px] px-4 py-2 border-b border-stone-800/80 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Coordinates & Credentials */}
          <div className="flex items-center space-x-5">
            <span className="flex items-center space-x-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C81E1E]" />
              <span className="font-medium tracking-wide">Tiruppur, Tamil Nadu, India</span>
              <span className="text-stone-500 font-mono text-[10px]">({FACTORY_INFO.geoCoordinates.formatted})</span>
            </span>

            <span className="text-stone-700">|</span>

            <button 
              onClick={onOpenAuditModal}
              className="flex items-center space-x-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SMETA 4-Pillar Audited by LRQA</span>
              <span className="text-stone-500 font-mono text-[10px]">({FACTORY_INFO.sedexSiteRef})</span>
            </button>

            <span className="text-stone-700">|</span>

            <span className="flex items-center space-x-1.5 text-stone-300">
              <Droplets className="w-3.5 h-3.5 text-cyan-400" />
              <span>Zero Liquid Discharge (ZLD)</span>
            </span>
          </div>

          {/* Right Direct Merchandising Line */}
          <div className="flex items-center space-x-6">
            <a 
              href={`mailto:${FACTORY_INFO.email}`} 
              className="flex items-center space-x-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-stone-400" />
              <span>{FACTORY_INFO.email}</span>
            </a>

            <span className="text-stone-700">|</span>

            <a 
              href={`tel:${FACTORY_INFO.phoneRaw}`} 
              className="flex items-center space-x-1.5 text-stone-200 hover:text-[#C81E1E] transition-colors font-medium font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[#C81E1E]" />
              <span>{FACTORY_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-stone-300/80 py-3.5' 
          : 'bg-[#FAF9F6] border-b border-stone-200 py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Bullet Impex Logo with AUTHENTIC WEAR */}
          <a href="#hero" className="flex items-center">
            <BrandLogo variant="light" />
          </a>

          {/* Right Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-xs font-bold text-stone-700 uppercase tracking-wider">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="relative py-1 hover:text-[#C81E1E] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C81E1E] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Button: ENQUIRE NOW */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenInquiryModal}
              className="px-5 py-2.5 text-xs font-bold tracking-[0.14em] uppercase text-white bg-[#C81E1E] hover:bg-[#A81818] rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenInquiryModal}
              className="sm:hidden px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#C81E1E] rounded-md"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-800 hover:bg-stone-200/60 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-stone-300 shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5 border-b border-stone-200 pb-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-bold text-stone-800 hover:text-[#C81E1E] transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-2 text-xs text-stone-600">
            <div className="flex items-center space-x-2 text-stone-700 font-medium">
              <Phone className="w-4 h-4 text-[#C81E1E]" />
              <a href={`tel:${FACTORY_INFO.phoneRaw}`}>{FACTORY_INFO.phone}</a>
            </div>
            <div className="flex items-center space-x-2 text-stone-700 font-medium">
              <Mail className="w-4 h-4 text-stone-500" />
              <a href={`mailto:${FACTORY_INFO.email}`}>{FACTORY_INFO.email}</a>
            </div>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiryModal();
                }}
                className="w-full py-3 rounded-xl bg-[#C81E1E] text-white font-bold text-xs uppercase tracking-widest text-center shadow-md"
              >
                ENQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
