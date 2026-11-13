import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Copy, Sparkles, Building2, User, Mail, Phone } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';
import confetti from 'canvas-confetti';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  initialProduct = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    styleInterest: initialProduct,
    quantity: '1,000 - 3,000 Pcs (Initial Run)',
    message: '',
    requestSwatches: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refId, setRefId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, styleInterest: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generated = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefId(generated);
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Mr. Makhesh Kumar,\n\nI would like to inquire about: ${formData.styleInterest || 'Garment Manufacturing'}\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Estimated Volume: ${formData.quantity}\n` +
      `Notes: ${formData.message || 'Please send counter-sampling details and swatches.'}`
    );
    window.open(`https://wa.me/919994202064?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-stone-300 max-w-xl w-full rounded-3xl shadow-2xl relative my-8 overflow-hidden text-stone-800">
        
        {/* Header */}
        <div className="bg-[#141618] px-6 sm:px-8 py-5 border-b border-stone-800 flex items-center justify-between text-white">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C81E1E] font-bold block">
              Direct Factory Merchandising
            </span>
            <h3 className="font-serif text-xl font-bold tracking-tight mt-0.5">
              {formData.styleInterest ? `Inquire: ${formData.styleInterest}` : 'Request Sampling & Quotation'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                Log Ref: {refId}
              </span>
              <h4 className="font-serif text-2xl font-bold text-stone-900 mt-2">
                Inquiry Successfully Logged
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Managing Partner <strong>Mr. K. Makhesh Kumar</strong> will review your garment tech specs for <strong>{formData.company}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs font-mono space-y-1.5 text-stone-700">
              <div><span className="text-stone-400">Style / Focus:</span> {formData.styleInterest || 'Knitted Apparel'}</div>
              <div><span className="text-stone-400">Estimated Volume:</span> {formData.quantity}</div>
              <div><span className="text-stone-400">Contact:</span> {formData.email} • {formData.phone}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wide uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </button>
              
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm">
            
            {/* Style Interest (if pre-selected) */}
            {formData.styleInterest && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-[#C81E1E] flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold block text-red-400">Selected Product Style</span>
                  <span className="font-bold text-sm text-[#C81E1E]">{formData.styleInterest}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, styleInterest: '' })}
                  className="text-xs text-red-500 hover:underline"
                >
                  Change
                </button>
              </div>
            )}

            {/* Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Green"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:bg-white focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Brand / Buying House *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aurora Retail"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:bg-white focus:border-stone-900 focus:outline-none"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="merchandising@aurora.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:bg-white focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7911 123456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:bg-white focus:border-stone-900 focus:outline-none"
                />
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Target Order Volume
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:bg-white focus:border-stone-900 focus:outline-none"
              >
                <option value="1,000 - 3,000 Pcs (Initial Run)">1,000 - 3,000 Pcs (Initial Run)</option>
                <option value="3,000 - 10,000 Pcs">3,000 - 10,000 Pcs</option>
                <option value="10,000 - 25,000 Pcs">10,000 - 25,000 Pcs</option>
                <option value="25,000+ Pcs (Bulk Container)">25,000+ Pcs (Bulk Container)</option>
                <option value="Rapid Counter-Sampling Only (7-10 Days)">Rapid Counter-Sampling Only (7-10 Days)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Tech-Pack & Material Notes
              </label>
              <textarea
                rows={3}
                placeholder="Mention required GSM, yarn blend, target delivery window, or any custom placement print / embroidery requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs text-stone-900 focus:bg-white focus:border-stone-900 focus:outline-none"
              />
            </div>

            {/* Swatch Checkbox */}
            <div className="flex items-center space-x-2 pt-1">
              <input
                type="checkbox"
                id="rfqSwatches"
                checked={formData.requestSwatches}
                onChange={(e) => setFormData({ ...formData, requestSwatches: e.target.checked })}
                className="w-4 h-4 rounded text-[#C81E1E] focus:ring-[#C81E1E] border-stone-300 cursor-pointer"
              />
              <label htmlFor="rfqSwatches" className="text-xs text-stone-700 cursor-pointer">
                Include physical swatch booklet (Single Jersey, Interlock, French Terry)
              </label>
            </div>

            {/* Actions */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-[#C81E1E] hover:bg-[#A81818] text-white font-medium text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Logging Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
