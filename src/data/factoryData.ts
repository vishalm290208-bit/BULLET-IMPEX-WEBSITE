export interface ProductCategoryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fabricSpecs: string;
  gsmRange: string;
  keyFeatures: string[];
  image: string;
  proportion: 'portrait' | 'landscape' | 'square';
}

export interface FabricTypeItem {
  id: string;
  name: string;
  structure: string;
  gsmRange: string;
  description: string;
  applications: string;
  image: string;
}

export interface MaterialBlendItem {
  name: string;
  characteristics: string;
  benefit: string;
  sustainability: string;
}

export interface ManufacturingStageItem {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  equipment: string;
  capacity?: string;
  bulletPoints: string[];
  image: string;
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Garments' | 'Knitting & Dyeing' | 'Printing & Detailing' | 'Sewing & Finishing' | 'Quality Lab' | 'Facility';
  image: string;
  caption: string;
}

export const FACTORY_INFO = {
  name: "BULLET IMPEX PRIVATE LIMITED",
  legalEntity: "Bullet Impex Private Limited",
  brandName: "BULLET",
  brandTagline: "AUTHENTIC WEAR",
  location: "Tiruppur, Tamil Nadu, India",
  fullAddress: "No. 3D, Nather Thottam, Kuthus Puram, Anna Nagar Extension, Tiruppur – 641607, Tamil Nadu, India.",
  pinCode: "641607",
  state: "Tamil Nadu",
  country: "India",
  geoCoordinates: {
    lat: 11.115944,
    lng: 77.359889,
    formatted: '11.115944, 77.359889'
  },
  contactPerson: "K. Makhesh Kumar",
  designation: "Managing Partner",
  email: "mail@bulletimpex.in",
  phone: "+91 9994 20 20 64",
  phoneRaw: "+919994202064",
  experience: "18+ Years",

  // Wet processing & sustainability
  dyeingUnit: "Akshera Knit Dyers Processes",
  processType: "Zero Liquid Discharge (ZLD)",
  waterRecovery: "100% Water Recovered, Purified & Reused",

  // Sedex / SMETA Audit (LRQA)
  sedexSiteRef: "ZS1000107137",
  sedexCompanyRef: "ZC5000090173",
  auditCompany: "LRQA",
  auditDate: "19 May 2026",
  auditType: "Full Initial",
  auditScope: "Labour Standards, Health and Safety, Environment (4-Pillar), and Business Ethics",
  auditStatus: "All listed corrective-action findings closed in July 2026",
  qualityStandard: "AQL 1.5 Inspection Standards",

  // Capacities
  cuttingCapacity: "5,000 pieces per day",
  sewingCapacity: "4,500 pieces per day",
  finishingCapacity: "4,500 pieces per day",
};

// 7 ACTUAL PRODUCT CATEGORIES
export const PRODUCT_CATEGORIES: ProductCategoryItem[] = [
  {
    id: "newborn-wear",
    name: "Newborn Wear",
    tagline: "Pure Comfort for Delicate First Days",
    description: "Engineered specifically for sensitive newborn skin using super-combed organic cotton, ultra-flat seams, and nickel-free Japanese snap fasteners.",
    fabricSpecs: "100% Combed Cotton Interlock / 1x1 Rib",
    gsmRange: "180 - 220 GSM",
    keyFeatures: [
      "Fold-over scratch mittens",
      "Nickel-free, rust-resistant snaps",
      "Tagless, skin-safe neck labelling",
      "Oeko-Tex Standard certified non-toxic dyes"
    ],
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1000&q=80",
    proportion: "portrait"
  },
  {
    id: "infant-wear",
    name: "Infant Wear",
    tagline: "Ergonomic & Breathable Daily Essentials",
    description: "Thoughtfully tailored rompers, bodysuits, and daytime playwear providing ease of movement for crawling and active exploration.",
    fabricSpecs: "100% Cotton Single Jersey & Soft Rib Knit",
    gsmRange: "170 - 210 GSM",
    keyFeatures: [
      "Expandable lap-neck construction",
      "Reinforced gussets and seams",
      "Non-toxic water-based screen prints",
      "Gentle bio-polished soft wash"
    ],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80",
    proportion: "landscape"
  },
  {
    id: "toddler-wear",
    name: "Toddler Wear",
    tagline: "Durable Playwear for Growing Explorers",
    description: "Vibrant t-shirts, French terry shorts sets, and pullover coordinates built with robust bar-tacking to withstand rigorous play.",
    fabricSpecs: "100% Combed Cotton / Cotton-Spandex Blends",
    gsmRange: "190 - 260 GSM",
    keyFeatures: [
      "Elasticated waistbands without hazardous cords",
      "High color-fastness to machine washing",
      "High-density & puff placement printing",
      "Bar-tacked stress points"
    ],
    image: "",
    proportion: "portrait"
  },
  {
    id: "womens-wear",
    name: "Women's Wear",
    tagline: "Modern Silhouettes in Luxurious Knits",
    description: "Form-flattering ribbed tops, modal relaxed tees, drop-shoulder casuals, and cozy knit leisurewear designed with drape and tactile finesse.",
    fabricSpecs: "Cotton-Modal, 2x2 Rib & Cotton-Lyocell Blends",
    gsmRange: "160 - 240 GSM",
    keyFeatures: [
      "Silky soft-drape cellulosic handfeel",
      "Resilient 4-way elastane stretch recovery",
      "Clean double-stitched sleeve and bottom hems",
      "Enzyme & silicone wash finishes"
    ],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
    proportion: "portrait"
  },
  {
    id: "mens-wear",
    name: "Men's Wear",
    tagline: "Contemporary Classics & Heavyweight Streetwear",
    description: "Substantial heavyweight crewneck tees, Shima Seiki flat-collar pique polos, loopback hoodies, and tailored casual joggers.",
    fabricSpecs: "Compact Heavyweight Single Jersey & Loopback Terry",
    gsmRange: "220 - 360 GSM",
    keyFeatures: [
      "Double-needle chain-stitched hems",
      "Shima Seiki flat-knit engineered collars",
      "Pre-shrunk with tight residual shrinkage control",
      "Custom embroidery & placement prints"
    ],
    image: "",
    proportion: "landscape"
  },
  {
    id: "sleepwear",
    name: "Sleepwear",
    tagline: "Unrivalled Breathability for Restful Nights",
    description: "Yarn-dyed nautical stripe pyjamas, lightweight nightshirts, and relaxed lounge trousers designed for skin-level nocturnal comfort.",
    fabricSpecs: "100% Combed Cotton Yarn-Dyed Knits & Interlock",
    gsmRange: "160 - 200 GSM",
    keyFeatures: [
      "Yarn-dyed striping knitted directly on machine",
      "Flat interior comfort seams",
      "Soft cotton-drawstring elastic waistbands",
      "Deep side pockets and relaxed cut"
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    proportion: "square"
  },
  {
    id: "sportswear",
    name: "Sportswear",
    tagline: "Engineered Mobility & Thermal Balance",
    description: "Technical athletic quarter-zips, active training tops, and moisture-wicking athleisure apparel engineered for flexibility and breathability.",
    fabricSpecs: "Poly-Micro Spandex Mesh & Cotton-Elastane Interlock",
    gsmRange: "190 - 240 GSM",
    keyFeatures: [
      "Hydrophilic rapid-evaporation treatments",
      "Flat-lock anti-chafing active seams",
      "Reflective heat-transfer logos & details",
      "High dimensional recovery after perspiration"
    ],
    image: "https://images.unsplash.com/photo-1483721074577-838bc87863d0?auto=format&fit=crop&w=1000&q=80",
    proportion: "portrait"
  }
];

// 8 FABRIC TYPES
export const FABRIC_TYPES: FabricTypeItem[] = [
  {
    id: "single-jersey",
    name: "Single Jersey",
    structure: "Fine Single Knit Weft",
    gsmRange: "140 – 240 GSM",
    description: "Lightweight, soft, and naturally flexible. The quintessential fabric for luxury tees, infant bodysuits, and summer loungewear.",
    applications: "T-shirts, Baby Rompers, Henleys, Fashion Tops",
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rib",
    name: "Rib Knit (1x1 & 2x2)",
    structure: "Interspaced Ribbed Knit",
    gsmRange: "180 – 280 GSM",
    description: "High natural elasticity with excellent crosswise stretch and shape recovery. Ideal for form-fitting garments, neckbands, and cuffs.",
    applications: "Collars, Cuffs, Ribbed Baby Tees, Tank Tops",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "interlock",
    name: "Interlock",
    structure: "Double-Knit Smooth Face",
    gsmRange: "190 – 300 GSM",
    description: "Composed of two interlocked ribbed knits, creating a smooth finish on both sides. Heavy, stable, and completely non-curling.",
    applications: "Premium Newborn Wear, Polo Shirts, Track Tops",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fleece",
    name: "Fleece (Brushed)",
    structure: "Brushed Back Heavyweight Knit",
    gsmRange: "260 – 380 GSM",
    description: "A plush, napped interior that traps air for thermal warmth without excessive bulk. Non-pilling face for sharp exterior printing.",
    applications: "Winter Hoodies, Sweatpants, Kids Warmers",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "twill",
    name: "Twill Knit",
    structure: "Diagonal Ribbed Texture",
    gsmRange: "220 – 320 GSM",
    description: "Distinct diagonal ribbing that provides structural weight and surface texture with the comfortable elasticity of a knit.",
    applications: "Casual Over-Shirts, Utility Trousers, Jackets",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "french-terry",
    name: "French Terry",
    structure: "Loop-Back Unbrushed Knit",
    gsmRange: "220 – 350 GSM",
    description: "Smooth exterior with moisture-absorbent soft loops on the reverse. Highly breathable for year-round casual and athleisure wear.",
    applications: "Crewneck Sweaters, Casual Shorts, Co-ord Sets",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "yarn-dyed",
    name: "Yarn-Dyed Stripes",
    structure: "Machine-Feeder Patterned Knit",
    gsmRange: "160 – 240 GSM",
    description: "Stripes created by feeding pre-dyed yarns directly into circular knitting cylinders, providing rich color depth and zero print stiffness.",
    applications: "Breton Striped Tees, Nautical Sleepwear, Polo Trims",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "specialised-washes",
    name: "Specialised Washes",
    structure: "Chemical & Enzyme Surface Treatments",
    gsmRange: "Variable",
    description: "State-of-the-art garment finishes including silicone softening, bio-polishing (fuzz removal), vintage garment dyes, and peach skin tactile brushing.",
    applications: "Vintage Washed Tees, Ultra-Soft Loungewear",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
  }
];

// 6 MATERIAL BLENDS
export const MATERIAL_BLENDS: MaterialBlendItem[] = [
  {
    name: "100% Combed Cotton",
    characteristics: "Pure natural fiber, extra-long staple, ringspun and combed for zero impurities.",
    benefit: "Unrivalled breathability, soft handfeel, hypoallergenic for infant skin.",
    sustainability: "Biodegradable natural cellulosic fiber."
  },
  {
    name: "Cotton - Spandex (Elastane)",
    characteristics: "Core-spun elastane filament wrapped in combed cotton fibers.",
    benefit: "Exceptional 4-way stretch with instantaneous contour recovery.",
    sustainability: "Durable longevity reducing garment turnover."
  },
  {
    name: "Cotton - Polyester Blends",
    characteristics: "Intimate fiber blend combining cotton softness with high polyester tenacity.",
    benefit: "Resistant to shrinkage, wrinkle-free, fast drying, and heightened tear strength.",
    sustainability: "Recycled poly (rPET) blend compatibility."
  },
  {
    name: "Cotton - Viscose",
    characteristics: "Regenerated cellulose combined with cotton for high luster and fluid motion.",
    benefit: "Cool silk-like drape, vibrant dye absorption, and lightweight summer feel.",
    sustainability: "Sourced from sustainably managed wood pulp."
  },
  {
    name: "Cotton - Modal (Lenzing)",
    characteristics: "Beechwood cellulose fiber blended with fine combed cotton.",
    benefit: "Enduring softness that stays silky wash after wash without calcification.",
    sustainability: "Eco-soft technology with low chemical consumption."
  },
  {
    name: "Lyocell (Tencel) Blends",
    characteristics: "Eucalyptus cellulosic fiber with smooth nano-fibril microscopic structure.",
    benefit: "Sublime cool skin sensation, moisture regulation, and gentle drape.",
    sustainability: "Closed-loop solvent spinning process with 99.5% solvent recovery."
  }
];

// 9 ACTUAL MANUFACTURING CAPABILITIES (A to I)
export const MANUFACTURING_STAGES: ManufacturingStageItem[] = [
  {
    letter: "A",
    title: "Yarn Selection",
    subtitle: "Fiber Purity & Eco-Conscious Sourcing",
    description: "Every garment begins with the yarn. At Bullet Impex Private Limited, we carefully select and test yarn for color consistency, softness, durability, and eco-friendliness. This ensures fabrics that are skin-friendly, comfortable, and built for lasting quality.",
    equipment: "Calibrated electronic tensile strength testers and twist testers",
    bulletPoints: [
      "Strict incoming yarn lot inspection",
      "Color consistency & hairiness testing",
      "Skin-friendly, comfortable, eco-conscious yarn selection",
      "Combed cotton, modal, lyocell, and elastane yarn varieties"
    ],
    image: "/images/factory/yarn-cones.jpg"
  },
  {
    letter: "B",
    title: "Knitting",
    subtitle: "German & Japanese Precision Fleet",
    description: "We transform yarn into premium fabrics using 30 MAYER & CIE German machines and 7 SHIMA SEIKI flat collar machines. From basic jerseys to complex jacquards, our skilled team ensures precision, consistency, and a wide variety of textures and finishes to meet every client's need.",
    equipment: "30 MAYER & CIE (Germany) Circular Machines + 7 SHIMA SEIKI (Japan) Flat Collar Machines",
    bulletPoints: [
      "30 MAYER & CIE German circular knitting machines",
      "7 SHIMA SEIKI computerized flat collar machines",
      "Basic jerseys, ribs, interlocks, French terry, and complex jacquards",
      "Unwavering tension consistency across full knitting roll lots"
    ],
    image: "/images/factory/knitting-machines.jpg"
  },
  {
    letter: "C",
    title: "Dyeing",
    subtitle: "Akshera Knit Dyers Processes (ZLD)",
    description: "Adding color to fabric is not just about appearance—it's about sustainability and performance. At Bullet Impex, we carry out eco-friendly dyeing processes through our own wet processing unit in the name of Akshera Knit Dyers Processes. With a wide palette of shades to choose from, each fabric is dyed to enhance strength and longevity while minimizing environmental impact.",
    equipment: "Soft-flow eco-dyeing vessels with automated multi-stage ZLD reverse osmosis & thermal recovery",
    bulletPoints: [
      "Akshera Knit Dyers Processes wet processing unit",
      "Zero Liquid Discharge (ZLD) closed-loop water treatment",
      "100% of process water purified, recovered, and reused",
      "High color-fastness to washing, light, and perspiration"
    ],
    image: "/images/factory/dyeing-unit.jpg"
  },
  {
    letter: "D",
    title: "Embroidery",
    subtitle: "BARUDAN & TAJIMA 40-Head Unit",
    description: "Our embroidery unit features BARUDAN and TAJIMA machines with 40 heads and dedicated sampling units. From logos to intricate motifs, our expert team delivers embroidery that is precise, durable, and visually striking. With the ability to manage both bulk production and small custom runs, each design adds elegance and lasting identity to the garment.",
    equipment: "BARUDAN & TAJIMA Machines (40 Heads) + Dedicated Sampling Units",
    bulletPoints: [
      "BARUDAN and TAJIMA machines with 40 heads",
      "Dedicated sampling units for fast prototype approval",
      "Appliqué, 3D puff embroidery, and delicate babywear backing",
      "Flexibility for both volume production runs and small custom orders"
    ],
    image: "/images/factory/embroidery-unit.jpg"
  },
  {
    letter: "E",
    title: "Printing",
    subtitle: "18-Colour Automatic Oval Printing Machine",
    description: "Our printing unit houses an 18 Colour Automatic Oval Print Machine along with 14 Colour, 12 Colour, and 10 Colours head print machines. This comprehensive setup delivers a complete solution for placement print and embroidery with pristine registration and rapid strike-off development.",
    equipment: "18 Colour Automatic Oval Print Machine + 14 / 12 / 10 Colours Head Print Machines",
    bulletPoints: [
      "18 Colour Automatic Oval Print Machine",
      "14 Colour, 12 Colour & 10 Colours auxiliary head print machines",
      "Water-based pigment, discharge, puff, plastisol, and metallic prints",
      "The complete solution for Print and Embroidery"
    ],
    image: "/images/factory/printing-unit.jpg"
  },
  {
    letter: "F",
    title: "Cutting",
    subtitle: "Surgical Accuracy & Wastage Optimization",
    description: "Accuracy in cutting is vital to ensuring a garment's proper fit and finish. We maintain consistency across large volumes without compromising quality. Each fabric piece is cut to perfection, minimizing wastage and ensuring maximum efficiency.",
    equipment: "Precision high-speed band-knife cutting units with safety glove protocols",
    capacity: "5,000 pieces per day",
    bulletPoints: [
      "CAPACITY: 5,000 PCS PER DAY",
      "Strict grain-line alignment and marker plotting",
      "Cut-piece bundle numbering and segregation",
      "Zero distortion across stacked fabric layers"
    ],
    image: "/images/factory/cutting-floor.jpg"
  },
  {
    letter: "G",
    title: "Sewing",
    subtitle: "50+ Computerized Machine Fleet",
    description: "We have a fleet of 50+ computerized stitching machines including YAMATO, BROTHER, JUKI, and TYPICAL. These machines allow us to carry out a wide range of stitching operations, from simple single-needle stitches to advanced fancy patterns. Our highly trained tailors and operators ensure every garment is stitched with accuracy and durability.",
    equipment: "Fleet of 50+ computerized stitching machines (YAMATO, BROTHER, JUKI, TYPICAL)",
    capacity: "4,500 pieces per day",
    bulletPoints: [
      "CAPACITY: 4,500 PCS PER DAY",
      "50+ computerized stitching stations (Yamato, Brother, Juki, Typical)",
      "Single-needle, overlock, flat-lock, and specialty chain stitching",
      "In-line roving inspectors at sewing stations"
    ],
    image: "/images/factory/sewing-floor.jpg"
  },
  {
    letter: "H",
    title: "Finishing",
    subtitle: "NAOMOTO, MACPI & BELLA Equipment",
    description: "Perfection is achieved in the final touches. Our finishing section is equipped with NAOMOTO, MACPI, and BELLA machines, which help in removing excess threads, eliminating stains, and ensuring garments are properly pressed and shaped. This ensures that every garment leaving our facility is neat, polished, and ready for retail.",
    equipment: "NAOMOTO, MACPI, and BELLA Finishing Machines + Hashima Needle Detection",
    capacity: "4,500 pieces per day",
    bulletPoints: [
      "CAPACITY: 4,500 PCS PER DAY",
      "NAOMOTO, MACPI, and BELLA vacuum steam pressing machines",
      "Excess thread trimming and automated stain suction",
      "Calibrated conveyor needle detection for 100% metal-free packaging"
    ],
    image: "/images/factory/finishing-pressing.jpg"
  },
  {
    letter: "I",
    title: "Laboratory",
    subtitle: "In-House Physical & Chemical Testing",
    description: "We have an internal lab in our factory premises. From fabric to finishing the garment we do test as per buyer requirement. Our dedicated QC team monitors garments at every stage and follows strict AQL 1.5 standards.",
    equipment: "In-house lab wash-wheels, conditioning tumblers, GSM balances, and Crockmeters",
    bulletPoints: [
      "In-house internal lab right inside our Factory premises",
      "From Fabric to Finishing the garment we test as per buyer requirement",
      "Strict AQL 1.5 Standards monitored by dedicated QC team",
      "Tests for GSM, shrinkage, Spirality, color fastness, and more"
    ],
    image: "/images/factory/testing-laboratory.jpg"
  }
];

// SECTION 10: 8 ACTUAL DIFFERENTIATORS
export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    number: "01",
    title: "18+ Years Manufacturing Expertise",
    headline: "Proven Knitted Heritage in Tiruppur",
    description: "Over 18 years of technical mastery producing knitwear for newborns, infants, toddlers, women, and men with lasting global partner relationships.",
    metric: "18+",
    metricLabel: "Years Industry Experience"
  },
  {
    number: "02",
    title: "Integrated Vertical Capabilities",
    headline: "Total Quality Control Under One Roof",
    description: "Yarn sourcing, circular knitting, eco-dyeing, cutting, placement printing, embroidery, stitching, and finishing managed end-to-end.",
    metric: "100%",
    metricLabel: "In-House Process Control"
  },
  {
    number: "03",
    title: "Advanced Knitting Infrastructure",
    headline: "German & Japanese Engineered Fleet",
    description: "Equipped with 30 MAYER & CIE German circular knitting machines and 7 SHIMA SEIKI flat collar machines for basic to complex jacquard structures.",
    metric: "37",
    metricLabel: "Mayer & Cie / Shima Seiki Units"
  },
  {
    number: "04",
    title: "In-House Printing & Embroidery",
    headline: "High-Volume Detailing Versatility",
    description: "18-colour automatic oval printing machine (with 14/12/10 colour machines) and BARUDAN & TAJIMA 40-head embroidery with dedicated sampling units.",
    metric: "18-Col",
    metricLabel: "Oval Automatic Printing"
  },
  {
    number: "05",
    title: "Dedicated Testing Laboratory",
    headline: "Fabric-to-Finishing Testing in Factory",
    description: "Internal lab within factory premises testing GSM, shrinkage, spirality, and wash-fastness strictly conforming to international buyer specifications.",
    metric: "Lab",
    metricLabel: "Internal Testing Facility"
  },
  {
    number: "06",
    title: "Quality-Focused Production",
    headline: "Strict AQL 1.5 International Benchmark",
    description: "Dedicated QC team monitoring garments across every operational phase, backed by 50+ computerized sewing machines and NAOMOTO finishing.",
    metric: "AQL 1.5",
    metricLabel: "Export Standard Audits"
  },
  {
    number: "07",
    title: "Zero Liquid Discharge (ZLD) Process",
    headline: "100% Water Recovery at Akshera Knit Dyers",
    description: "Our own wet processing unit operates Zero Liquid Discharge, purifying and recycling 100% of wastewater with not a single drop discharged into nature.",
    metric: "100%",
    metricLabel: "Water Purified & Reused"
  },
  {
    number: "08",
    title: "SMETA 4-Pillar Audited Facility",
    headline: "Verified Compliance Audited by LRQA",
    description: "Audited across Labour Standards, Health & Safety, Environment 4-Pillar, and Business Ethics by LRQA with all corrective actions closed on Sedex.",
    metric: "4-Pillar",
    metricLabel: "SMETA LRQA Audited"
  }
];

// SECTION 11: GALLERY ITEMS
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Bullet Impex Factory Facility",
    category: "Facility",
    image: "/images/factory/factory-building.jpg",
    caption: "Multi-floor integrated garment manufacturing plant in Mannarai, Tiruppur."
  },
  {
    id: "g2",
    title: "30 Mayer & Cie German Knitting Machines",
    category: "Knitting & Dyeing",
    image: "/images/factory/knitting-machines.jpg",
    caption: "German precision circular knitting fleet ensuring uniform fabric density."
  },
  {
    id: "g3",
    title: "Akshera Knit Dyers Wet Processing",
    category: "Knitting & Dyeing",
    image: "/images/factory/dyeing-unit.jpg",
    caption: "Eco wet processing facility operating Zero Liquid Discharge (ZLD) with 100% water recycling."
  },
  {
    id: "g4",
    title: "BARUDAN & TAJIMA 40-Head Embroidery",
    category: "Printing & Detailing",
    image: "/images/factory/embroidery-unit.jpg",
    caption: "Automated multi-head embroidery unit with dedicated sampling stations."
  },
  {
    id: "g5",
    title: "18-Colour Automatic Oval Printing",
    category: "Printing & Detailing",
    image: "/images/factory/printing-unit.jpg",
    caption: "High-capacity 18-colour automatic oval printing machine with precision strike-offs."
  },
  {
    id: "g6",
    title: "Precision Band-Knife Cutting Floor",
    category: "Sewing & Finishing",
    image: "/images/factory/cutting-floor.jpg",
    caption: "Capacity of 5,000 pieces per day maintaining strict dimensional accuracy."
  },
  {
    id: "g7",
    title: "Computerized Sewing Stations",
    category: "Sewing & Finishing",
    image: "/images/factory/sewing-floor.jpg",
    caption: "Fleet of 50+ Yamato, Brother, Juki, and Typical computerized stitching stations."
  },
  {
    id: "g8",
    title: "NAOMOTO Vacuum Steam Finishing",
    category: "Sewing & Finishing",
    image: "/images/factory/finishing-pressing.jpg",
    caption: "Naomoto, Macpi, and Bella finishing machines shaping retail-ready apparel."
  },
  {
    id: "g9",
    title: "In-House Fabric & Garment Testing Lab",
    category: "Quality Lab",
    image: "/images/factory/testing-laboratory.jpg",
    caption: "Factory testing lab verifying GSM, shrinkage, spirality, and fastness."
  },
  {
    id: "g10",
    title: "Strict AQL 1.5 Quality Inspection",
    category: "Quality Lab",
    image: "/images/factory/quality-inspection.jpg",
    caption: "Dedicated quality supervisors conducting end-of-line measurement audits."
  },
  {
    id: "g11",
    title: "Tested & Calibrated Yarn Cones",
    category: "Knitting & Dyeing",
    image: "/images/factory/yarn-cones.jpg",
    caption: "Carefully selected and tested combed cotton yarn cones for softness and durability."
  },
  {
    id: "g12",
    title: "Finished Organic Infant Knitwear",
    category: "Garments",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1200&q=80",
    caption: "Delicate babywear crafted with nickel-free snaps and baby-safe dyes."
  },
  {
    id: "g13",
    title: "Premium Heavyweight Cotton Knits",
    category: "Garments",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    caption: "Finished combed cotton casuals produced according to international buyer specifications."
  }
];
