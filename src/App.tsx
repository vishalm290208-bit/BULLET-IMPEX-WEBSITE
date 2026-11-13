import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCollections } from './components/ProductCollections';
import { FabricExpertise } from './components/FabricExpertise';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { QualityAssurance } from './components/QualityAssurance';
import { SustainabilityZLD } from './components/SustainabilityZLD';
import { ResponsibleManufacturing } from './components/ResponsibleManufacturing';
import { WhyBulletImpex } from './components/WhyBulletImpex';
import { VisualGallery } from './components/VisualGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditDossierModal } from './components/AuditDossierModal';
import { RFQModal } from './components/RFQModal';

export function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleOpenInquiryWithProduct = (productName: string) => {
    setSelectedProduct(productName);
    setIsInquiryModalOpen(true);
  };

  const handleGeneralInquiry = () => {
    setSelectedProduct('');
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#191C1E] flex flex-col font-sans selection:bg-[#C81E1E] selection:text-white">
      
      {/* SECTION 1: NAVIGATION */}
      <Header
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenInquiryModal={handleGeneralInquiry}
      />

      {/* MAIN WEBSITE SECTIONS */}
      <main className="flex-1">
        
        {/* SECTION 2: HERO EXPERIENCE */}
        <Hero
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
          onOpenInquiryModal={handleGeneralInquiry}
        />

        {/* SECTION 3: COMPANY INTRODUCTION */}
        <AboutSection />

        {/* SECTION 4: PRODUCT COLLECTIONS */}
        <ProductCollections
          onSelectProductForInquiry={handleOpenInquiryWithProduct}
        />

        {/* SECTION 5: FABRIC EXPERTISE */}
        <FabricExpertise
          onSelectFabricForInquiry={handleOpenInquiryWithProduct}
        />

        {/* SECTION 6: MANUFACTURING CAPABILITIES (A to I) */}
        <ManufacturingCapabilities />

        {/* SECTION 7: QUALITY ASSURANCE */}
        <QualityAssurance />

        {/* SECTION 8: SUSTAINABILITY AND ZERO LIQUID DISCHARGE */}
        <SustainabilityZLD />

        {/* SECTION 9: RESPONSIBLE MANUFACTURING AND SMETA */}
        <ResponsibleManufacturing
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

        {/* SECTION 10: WHY BULLET IMPEX? */}
        <WhyBulletImpex
          onOpenInquiryModal={handleGeneralInquiry}
        />

        {/* SECTION 11: GARMENT AND FACTORY GALLERY */}
        <VisualGallery />

        {/* SECTION 12: CONTACT AND BUSINESS ENQUIRIES */}
        <ContactSection
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

      </main>

      {/* SECTION 13: FOOTER */}
      <Footer
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenInquiryModal={handleGeneralInquiry}
      />

      {/* INTERACTIVE MODALS */}
      <AuditDossierModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      <RFQModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialProduct={selectedProduct}
      />

    </div>
  );
}

export default App;
