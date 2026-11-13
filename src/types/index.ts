export type ProductCategory = 'all' | 'newborn-kids' | 'mens' | 'womens' | 'sleepwear' | 'sportswear';

export interface ProductItem {
  id: string;
  name: string;
  category: 'newborn-kids' | 'mens' | 'womens' | 'sleepwear' | 'sportswear';
  categoryLabel: string;
  fabric: string;
  gsm: string;
  description: string;
  specs: string[];
  image: string;
}

export interface ManufacturingStep {
  id: string;
  stepNumber: string;
  title: string;
  headline: string;
  description: string;
  machinery: string;
  capacity?: string;
  image: string;
  specs: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Facility' | 'Knitting & Dyeing' | 'Craft & Detailing' | 'Quality & Testing' | 'Garments';
  image: string;
  caption: string;
}

export interface RFQFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  productCategory: string;
  estimatedQuantity: string;
  message: string;
  requestSwatches: boolean;
  fileName?: string;
}
