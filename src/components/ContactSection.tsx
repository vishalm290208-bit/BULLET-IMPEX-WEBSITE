import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink, 
  User, 
  Building2, 
  Layers, 
  Copy, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenAuditModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAuditModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    productInterest: "Men's Wear",
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.companyName.trim()) errs.companyName = "Company Name is required.";
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = "Business Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = "Please enter a valid email address.";
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = "Phone Number is required.";
    } else if (formData.phoneNumber.replace(/[^0-9]/g, '').length < 8) {
      errs.phoneNumber = "Please enter a valid phone number with country code.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please include your project specifications or sampling requirements (min 10 characters).";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `BI-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setSubmittedData({ ...formData });
      setIsSubmitting(false);

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 500);
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `Enquiry Ref: ${referenceId}\nName: ${submittedData.name}\nCompany: ${submittedData.companyName}\nEmail: ${submittedData.businessEmail}\nPhone: ${submittedData.phoneNumber}\nInterest: ${submittedData.productInterest}\nMessage: ${submittedData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Mr. K. Makhesh Kumar,\n\nI am contacting you from the Bullet Impex website.\n` +
      `Name: ${formData.name || 'Buyer'}\n` +
      `Company: ${formData.companyName || 'Brand'}\n` +
      `Product Interest: ${formData.productInterest}\n` +
      `Message: ${formData.message || 'We would like to request manufacturing terms and counter-sampling.'}`
    );
    window.open(`https://wa.me/919994202064?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4F2EC] border-b border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#C81E1E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C81E1E]">
            Get In Touch
          </span>
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-6 border-b border-stone-300">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141618] tracking-tight leading-[1.12]">
              Let's Create <br />
              <span className="italic font-normal font-serif text-[#C81E1E]">Something Together.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm text-stone-600 leading-relaxed font-normal">
            We work closely with our partners to understand their requirements and deliver tailored apparel manufacturing solutions.
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Official Contact Coordinates & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Managing Partner Information Card */}
            <div className="bg-white rounded-3xl p-7 border border-stone-300 shadow-sm space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C81E1E] font-bold block">
                  Direct Factory Contact
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  {FACTORY_INFO.contactPerson}
                </h3>
                <p className="text-xs text-stone-600 font-medium">
                  {FACTORY_INFO.designation} • {FACTORY_INFO.name}
                </p>
              </div>

              <div className="space-y-3.5 pt-3 border-t border-stone-200 text-xs text-stone-700">
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C81E1E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-mono">Phone Number:</span>
                    <a 
                      href={`tel:${FACTORY_INFO.phoneRaw}`} 
                      className="font-mono font-bold text-stone-900 hover:text-[#C81E1E] text-sm tracking-wide"
                    >
                      {FACTORY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C81E1E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-mono">Business Email:</span>
                    <a 
                      href={`mailto:${FACTORY_INFO.email}`} 
                      className="font-semibold text-stone-900 hover:text-[#C81E1E] text-sm underline"
                    >
                      {FACTORY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C81E1E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-mono">Factory Address:</span>
                    <span className="text-stone-800 leading-relaxed block font-medium">
                      Bullet Impex Private Limited<br />
                      No. 3D, Nather Thottam,<br />
                      Kuthus Puram, Anna Nagar Extension,<br />
                      Tiruppur – 641607, Tamil Nadu, India.
                    </span>
                    <span className="text-stone-500 text-[11px] font-mono mt-1 block">
                      Coordinates: {FACTORY_INFO.geoCoordinates.formatted}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Messaging Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Managing Partner on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="bg-white rounded-3xl p-5 border border-stone-300 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#C81E1E]" />
                  <span className="text-xs font-bold text-stone-900">Google Maps Geolocation</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${FACTORY_INFO.geoCoordinates.lat},${FACTORY_INFO.geoCoordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-bold text-[#C81E1E] hover:underline flex items-center space-x-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-48 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100">
                <iframe
                  title="Bullet Impex Google Maps Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${FACTORY_INFO.geoCoordinates.lat},${FACTORY_INFO.geoCoordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                <span>Lat: 11.115944</span>
                <span>Lng: 77.359889</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-300 shadow-xl relative">
              
              {!submittedData ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C81E1E] font-bold block">
                      B2B Sourcing Enquiry
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                      Send a Manufacturing Enquiry
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Provide your product requirements below. Managing Partner K. Makhesh Kumar will review and respond with counter-sampling details.
                    </p>
                  </div>

                  {/* Field 1: Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Name <span className="text-[#C81E1E]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-stone-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-stone-900'
                        }`}
                      />
                    </div>
                    {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Field 2: Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Company Name <span className="text-[#C81E1E]">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Your apparel brand or buying house"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-stone-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.companyName ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-stone-900'
                        }`}
                      />
                    </div>
                    {errors.companyName && <span className="text-[11px] text-red-500 mt-1 block">{errors.companyName}</span>}
                  </div>

                  {/* Fields 3 & 4: Business Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-800 mb-1">
                        Business Email <span className="text-[#C81E1E]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                        <input
                          type="email"
                          value={formData.businessEmail}
                          onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                          placeholder="procurement@company.com"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-stone-50 focus:bg-white focus:outline-none transition-colors ${
                            errors.businessEmail ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-stone-900'
                          }`}
                        />
                      </div>
                      {errors.businessEmail && <span className="text-[11px] text-red-500 mt-1 block">{errors.businessEmail}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-800 mb-1">
                        Phone Number <span className="text-[#C81E1E]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="+91 / +44 / +1..."
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-stone-50 focus:bg-white focus:outline-none transition-colors ${
                            errors.phoneNumber ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-stone-900'
                          }`}
                        />
                      </div>
                      {errors.phoneNumber && <span className="text-[11px] text-red-500 mt-1 block">{errors.phoneNumber}</span>}
                    </div>
                  </div>

                  {/* Field 5: Product Interest */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Product Interest
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-stone-50 focus:bg-white focus:outline-none focus:border-stone-900"
                    >
                      <option value="Newborn Wear">Newborn Wear (Rompers, Bodysuits, Kimonos)</option>
                      <option value="Infant Wear">Infant Wear (Daywear, Crawlers, Sets)</option>
                      <option value="Toddler Wear">Toddler Wear (T-Shirts, Fleece Hoodies, Shorts)</option>
                      <option value="Women's Wear">Women's Wear (Ribbed Tops, Modal Tees, Casuals)</option>
                      <option value="Men's Wear">Men's Wear (Heavyweight Tees, Pique Polos, Loopback Hoodies)</option>
                      <option value="Sleepwear">Sleepwear (Yarn-Dyed Striped Pyjamas, Lounge Sets)</option>
                      <option value="Sportswear">Sportswear (Technical Knits, Athleisure Tops)</option>
                      <option value="Specialized Job-Work">Specialized Processing (Tajima Embroidery / Screen Printing)</option>
                    </select>
                  </div>

                  {/* Field 6: Message */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Message <span className="text-[#C81E1E]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify fabric requirements (e.g., 220 GSM combed single jersey), estimated volume, placement print/embroidery artwork requirements, or sampling queries..."
                      className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm bg-stone-50 focus:bg-white focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-stone-900'
                      }`}
                    />
                    {errors.message && <span className="text-[11px] text-red-500 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Backend Integration Clear Disclaimer */}
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-start space-x-2 text-[11px] text-stone-500">
                    <AlertCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>
                      Enquiries are logged client-side with a copyable summary and direct WhatsApp forward to Managing Partner K. Makhesh Kumar. Production email dispatch requires SMTP/REST API configuration.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#C81E1E] hover:bg-[#A81818] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer active:scale-98 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SUBMIT BUSINESS ENQUIRY</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation */
                <div className="py-6 space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Enquiry Logged: {referenceId}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-stone-900 mt-2">
                      Enquiry Form Validated
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                      Thank you, <strong>{submittedData.name}</strong>. Your enquiry for <strong>{submittedData.companyName}</strong> has been structured.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 text-left text-xs font-mono space-y-2 text-stone-800">
                    <div className="flex justify-between border-b border-stone-200 pb-1.5">
                      <span className="text-stone-400">Reference:</span>
                      <strong className="text-stone-900">{referenceId}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Company:</span>
                      <span>{submittedData.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Product Interest:</span>
                      <span>{submittedData.productInterest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Email:</span>
                      <span>{submittedData.businessEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Phone:</span>
                      <span>{submittedData.phoneNumber}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-stone-500" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Enquiry Summary'}</span>
                    </button>

                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmittedData(null)}
                      className="text-xs text-stone-500 hover:text-stone-800 underline ml-2 cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
