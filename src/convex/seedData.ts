import { mutation } from "./_generated/server";

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    // Seed services
    const services = [
      {
        title: "Super Heavy Transport",
        slug: "super-heavy-transport",
        description: "Specialized transport solutions for super heavy and oversized loads",
        fullDescription: "We specialize in the safe and efficient transport of super heavy and oversized loads. Our team of professionals and advanced equipment ensure that your cargo arrives at its destination in perfect condition.",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
        galleryImages: [
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200",
          "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200",
          "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200"
        ],
        capabilities: [
          "Heavy-duty trailers and specialized equipment",
          "Route surveys and permit acquisition",
          "Professional escort and pilot car services",
          "24/7 monitoring and tracking",
          "Experienced team of logistics specialists"
        ],
        order: 1,
        isActive: true,
      },
      {
        title: "Oversized Air Cargo",
        slug: "oversized-air-cargo",
        description: "Expert handling of oversized air freight worldwide",
        fullDescription: "Our oversized air cargo services provide fast, reliable transportation for large and heavy items that require air freight solutions.",
        imageUrl: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800",
        galleryImages: [
          "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200",
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
          "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200"
        ],
        capabilities: [
          "Charter flight arrangements",
          "Cargo consolidation services",
          "Customs clearance coordination",
          "Door-to-door delivery options",
          "Real-time shipment tracking"
        ],
        order: 2,
        isActive: true,
      },
      {
        title: "Heavy Lift & Crane Hire",
        slug: "heavy-lift-crane-hire",
        description: "Professional heavy lifting solutions with modern crane equipment",
        fullDescription: "We offer comprehensive heavy lift and crane hire services with state-of-the-art equipment and certified operators.",
        imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800",
        galleryImages: [
          "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200",
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200",
          "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200"
        ],
        capabilities: [
          "Mobile and crawler cranes up to 500 tons",
          "Certified crane operators",
          "Lift planning and engineering",
          "Rigging and specialized equipment",
          "Safety compliance and insurance"
        ],
        order: 3,
        isActive: true,
      },
      {
        title: "Oversized Marine Cargo",
        slug: "oversized-marine-cargo",
        description: "Comprehensive marine cargo solutions for oversized shipments",
        fullDescription: "Our marine cargo services handle the complexities of shipping oversized equipment via sea freight with expertise and precision.",
        imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800",
        galleryImages: [
          "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200",
          "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200"
        ],
        capabilities: [
          "Break bulk and project cargo handling",
          "Port-to-port and door-to-door services",
          "Vessel chartering and booking",
          "Marine insurance coordination",
          "Port handling and stevedoring"
        ],
        order: 4,
        isActive: true,
      },
      {
        title: "Warehouse & Open Yard Facilities",
        slug: "warehouse-open-yard-facilities",
        description: "Secure storage solutions for your cargo and equipment",
        fullDescription: "Our warehouse and open yard facilities provide secure, accessible storage for equipment, materials, and cargo of all sizes.",
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800",
        galleryImages: [
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200",
          "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200"
        ],
        capabilities: [
          "Covered warehouse space",
          "Open yard storage for large equipment",
          "24/7 security and surveillance",
          "Loading and unloading services",
          "Inventory management systems"
        ],
        order: 5,
        isActive: true,
      },
      {
        title: "Customs Clearance & OGA Permit Application",
        slug: "customs-clearance-oga-permit",
        description: "Expert customs and regulatory compliance services",
        fullDescription: "Navigate complex customs regulations with our expert clearance and permit application services.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        galleryImages: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200"
        ],
        capabilities: [
          "Import and export documentation",
          "OGA permit applications",
          "Duty and tax calculation",
          "Regulatory compliance consulting",
          "Fast-track clearance services"
        ],
        order: 6,
        isActive: true,
      },
      {
        title: "Other Products & Services",
        slug: "other-products-services",
        description: "Additional logistics and equipment solutions",
        fullDescription: "We offer a range of additional products and services including heavy equipment sales, rental, leasing, and steel & metal products.",
        imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
        galleryImages: [
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200",
          "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200",
          "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200"
        ],
        capabilities: [
          "Heavy equipment sales and rental",
          "Equipment leasing programs",
          "Steel and metal products supply",
          "Maintenance and repair services",
          "Consulting and project management"
        ],
        order: 7,
        isActive: true,
      },
    ];

    for (const service of services) {
      await ctx.db.insert("services", service);
    }

    // Seed industries
    const industries = [
      {
        name: "Heavy Machinery & Industrial Equipment",
        slug: "heavy-machinery",
        description: "Specialized logistics for heavy machinery and industrial equipment",
        imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600",
        order: 1,
        isActive: true,
      },
      {
        name: "Oil & Gas Industry",
        slug: "oil-gas",
        description: "Comprehensive logistics solutions for the oil and gas sector",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
        order: 2,
        isActive: true,
      },
      {
        name: "Construction Industry",
        slug: "construction",
        description: "Reliable transport for construction materials and equipment",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600",
        order: 3,
        isActive: true,
      },
      {
        name: "Aviation Industry",
        slug: "aviation",
        description: "Specialized handling for aviation equipment and components",
        imageUrl: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600",
        order: 4,
        isActive: true,
      },
      {
        name: "Marine Industry",
        slug: "marine",
        description: "Expert marine cargo and equipment logistics",
        imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600",
        order: 5,
        isActive: true,
      },
      {
        name: "Manufacturing Industry",
        slug: "manufacturing",
        description: "End-to-end logistics for manufacturing operations",
        imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600",
        order: 6,
        isActive: true,
      },
      {
        name: "Local & MNCs / Importers & Exporters",
        slug: "importers-exporters",
        description: "Comprehensive import/export logistics solutions",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
        order: 7,
        isActive: true,
      },
    ];

    for (const industry of industries) {
      await ctx.db.insert("industries", industry);
    }

    // Seed downloadable asset
    await ctx.db.insert("downloadableAssets", {
      title: "Company Profile",
      description: "Download our comprehensive company profile to learn more about Asia Infinity Solutions",
      fileUrl: "/assets/Asia-Infinity-Solutions-Corporate-Profile.pdf",
      fileType: "PDF",
      isActive: true,
    });

    return { success: true, message: "Database seeded successfully" };
  },
});
