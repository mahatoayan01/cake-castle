/**
 * Cake Castle | Pure Veg Bakery - Central Business Data Configuration
 * 
 * Single source of truth for all business facts, contact numbers, hours,
 * address, social links, and placeholders.
 * 
 * Verified against Google Maps listing:
 * Coordinates: 18.5565682, 73.8782926
 * CID / Place ID: 0x3bc2c0dd6badcbdb:0x5610708bd60216d8
 */

export const businessData = {
  name: "Cake Castle | Pure Veg Bakery",
  shortName: "Cake Castle",
  tagline: "100% Pure Veg & Eggless Delights in Yerawada, Pune",
  description: "Yerawada's beloved bakery dedicated to 100% pure vegetarian and eggless cakes, pastries, celebration desserts, and freshly baked confectionery. Prepared with premium ingredients and unmatched love.",
  category: "Bakery and Cake Shop",
  isPureVeg: true,
  vegClaim: "100% Pure Veg & Eggless Bakery",
  
  // Contact details
  phone: "+91 98220 11735", // Verified on Google Maps listing
  phoneRaw: "+919822011735",
  whatsapp: "+91 98220 11735", // Verified contact for orders
  whatsappRaw: "919822011735",
  email: "[ADD EMAIL]", // Missing placeholder
  
  // Address & Geo
  address: {
    line1: "120B/2, Ram Society",
    landmark: "Near Hariganga Society",
    area: "Yerawada",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411006",
    country: "India",
    fullAddress: "120B/2, Ram Society, Near Hariganga Society, Yerawada, Pune, Maharashtra 411006",
    plusCode: "HV4H+J8 Pune, Maharashtra",
    coordinates: {
      lat: 18.5565682,
      lng: 73.8782926
    }
  },

  // Operating Hours (Verified daily 8:00 AM – 11:00 PM)
  hours: {
    monday: { open: "08:00", close: "23:00", label: "8:00 AM – 11:00 PM" },
    tuesday: { open: "08:00", close: "23:00", label: "8:00 AM – 11:00 PM" },
    wednesday: { open: "08:00", close: "23:00", label: "8:00 AM – 11:00 PM" },
    thursday: { open: "08:00", close: "23:00", label: "8:00 AM – 11:00 PM" },
    friday: { open: "08:00", close: "23:00", label: "8:00 AM – 11:00 PM" },
    saturday: { open: "08:00", close: "23:00", label: "8:00 AM – 11:00 PM" },
    sunday: { open: "08:00", close: "23:00", label: "8:00 AM – 11:00 PM" }
  },

  // Ratings & Metrics (Verified Google Maps facts)
  rating: 4.8,
  reviewCount: 12,
  priceRange: "₹₹ (Approx ₹200 for two)",
  
  // Service Options
  services: {
    inStoreShopping: true,
    takeaway: true,
    localDelivery: true,
    customCakePreOrder: true,
    dineIn: false // Takeaway / counter pickup shop
  },

  // Social Links & Placeholders
  socials: {
    instagram: "[ADD INSTAGRAM HANDLE]", // Placeholder
    instagramUrl: "https://instagram.com/",
    facebook: "[ADD FACEBOOK LINK]",     // Placeholder
    googleMaps: "https://www.google.com/maps/place/Cake+Castle+%7C+Pure+Veg+Bakery/@18.5565682,73.8782926,17z/data=!4m6!3m5!1s0x3bc2c0dd6badcbdb:0x5610708bd60216d8!8m2!3d18.5565682!4d73.8782926!16s%2Fg%2F11f00nm5_j",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=18.5565682,73.8782926"
  },

  // Promotional Offers (Clearly labeled sample offers)
  offers: [
    {
      id: "OFFER-SAMPLE-1",
      code: "SAMPLE-SWEET10",
      title: "10% Off First Custom Cake Pre-Order",
      description: "[SAMPLE PROMOTION] Valid on half kg & above celebration cakes ordered 24 hours in advance.",
      isSample: true,
      tag: "Sample Offer"
    },
    {
      id: "OFFER-SAMPLE-2",
      code: "SAMPLE-PASTRY3",
      title: "Buy 3 Pastries, Get 1 Free",
      description: "[SAMPLE PROMOTION] Applicable on weekday pastry selections between 12 PM - 5 PM.",
      isSample: true,
      tag: "Sample Offer"
    }
  ]
};
