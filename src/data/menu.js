/**
 * Cake Castle | Pure Veg Bakery - Menu Data
 * 
 * Contains verified prices from listing and clearly designated sample items.
 * Each item has:
 * - source: "google-maps" | "web-sample" | "ai-sample"
 * - isSample: boolean (triggers the "Sample image" badge on site)
 * - isVeg: true (100% Pure Veg & Eggless)
 */

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "cakes", label: "Celebration Cakes" },
  { id: "pastries", label: "Pastries & Cupcakes" },
  { id: "traditional", label: "Traditional & Mawa Cakes" },
  { id: "bakery", label: "Artisan Breads & Cookies" }
];

export const menuItems = [
  // 1. White Forest Cake (Verified on Magicpin / listing: ₹399 for 500g)
  {
    id: "item-white-forest",
    name: "White Forest Cake (500g)",
    category: "cakes",
    description: "Layered eggless sponge layered with fluffy whipped cream, white chocolate curls, and red maraschino cherries.",
    price: 399, // Verified price
    priceDisplay: "₹399",
    isPriceOnRequest: false,
    weight: "500g",
    isVeg: true,
    isPopular: true,
    image: "/images/white-forest-cake.webp",
    imageAlt: "White Forest Cake with white chocolate shavings and fresh cherries",
    source: "web-sample",
    isSample: true
  },
  // 2. Chocolate Mawa Cake (Verified on listing: ₹159)
  {
    id: "item-chocolate-mawa",
    name: "Chocolate Mawa Cake",
    category: "traditional",
    description: "Rich, dense, traditional Parsi-style mawa cake infused with Belgian cocoa and cardamom essence. 100% pure veg.",
    price: 159, // Verified price
    priceDisplay: "₹159",
    isPriceOnRequest: false,
    weight: "Piece / Loaf",
    isVeg: true,
    isPopular: true,
    image: "/images/chocolate-mawa-cake.webp",
    imageAlt: "Freshly baked Chocolate Mawa Cake with cardamom aroma",
    source: "web-sample",
    isSample: true
  },
  // 3. Plum Cake (Verified on listing: ₹149)
  {
    id: "item-plum-cake",
    name: "Traditional Eggless Plum Cake",
    category: "traditional",
    description: "Classic spiced tea cake loaded with candied citrus peel, plump raisins, soaked fruit, and warm spices.",
    price: 149, // Verified price
    priceDisplay: "₹149",
    isPriceOnRequest: false,
    weight: "350g",
    isVeg: true,
    isPopular: false,
    image: "/images/plum-cake.webp",
    imageAlt: "Eggless traditional fruit and plum cake loaf",
    source: "web-sample",
    isSample: true
  },
  // 4. Pastry Cake - Black Forest (Verified base pastry price on listing: ₹39)
  {
    id: "item-pastry-black-forest",
    name: "Black Forest Pastry Slice",
    category: "pastries",
    description: "Individual fresh slice of moist chocolate sponge topped with fresh dairy cream and dark chocolate flakes.",
    price: 39, // Verified price
    priceDisplay: "₹39",
    isPriceOnRequest: false,
    weight: "Per slice",
    isVeg: true,
    isPopular: true,
    image: "/images/black-forest-pastry.webp",
    imageAlt: "Single slice of Black Forest pastry with dark chocolate flakes",
    source: "web-sample",
    isSample: true
  },
  // 5. Cupcake Assortment (Verified on listing: ₹79)
  {
    id: "item-cupcake",
    name: "Gourmet Pure Veg Cupcake",
    category: "pastries",
    description: "Delicate eggless sponge crowned with silky buttercream swirl, sprinkles, and fruit drizzle. Available in chocolate & vanilla.",
    price: 79, // Verified price
    priceDisplay: "₹79",
    isPriceOnRequest: false,
    weight: "Pack of 2",
    isVeg: true,
    isPopular: true,
    image: "/images/cupcakes-assorted.webp",
    imageAlt: "Assorted frosted cupcakes with buttercream rosettes",
    source: "web-sample",
    isSample: true
  },
  // 6. Chocolate Truffle Cake
  {
    id: "item-choco-truffle",
    name: "Dutch Chocolate Truffle Cake (500g)",
    category: "cakes",
    description: "Decadent pure-veg dark chocolate cake cloaked in a glossy dark chocolate ganache glaze. A true crowd favorite.",
    price: 450,
    priceDisplay: "₹450",
    isPriceOnRequest: false,
    weight: "500g",
    isVeg: true,
    isPopular: true,
    image: "/images/chocolate-truffle-cake.webp",
    imageAlt: "Glossy dark chocolate truffle cake with ganache glaze",
    source: "web-sample",
    isSample: true
  },
  // 7. Butterscotch Crunch Cake
  {
    id: "item-butterscotch",
    name: "Butterscotch Crunch Cake (500g)",
    category: "cakes",
    description: "Soft vanilla sponge layered with caramelized butterscotch praline crunch and golden caramel drizzle.",
    price: 380,
    priceDisplay: "₹380",
    isPriceOnRequest: false,
    weight: "500g",
    isVeg: true,
    isPopular: false,
    image: "/images/butterscotch-cake.webp",
    imageAlt: "Golden butterscotch crunch cake with praline topping",
    source: "web-sample",
    isSample: true
  },
  // 8. Pineapple Glaze Pastry (Verified pastry range: ₹39)
  {
    id: "item-pineapple-pastry",
    name: "Pineapple Delight Pastry",
    category: "pastries",
    description: "Light tropical pastry infused with sweet crushed pineapples and fluffy cream icing.",
    price: 39, // Verified base pastry price
    priceDisplay: "₹39",
    weight: "Per slice",
    isVeg: true,
    isPopular: false,
    image: "/images/pineapple-pastry.webp",
    imageAlt: "Fresh pineapple cream pastry slice with candied cherry",
    source: "web-sample",
    isSample: true
  },
  // 9. Red Velvet Pastry
  {
    id: "item-red-velvet-pastry",
    name: "Red Velvet Cream Cheese Pastry",
    category: "pastries",
    description: "Vibrant crimson velvet sponge topped with a rich vanilla cream cheese frosting.",
    price: 65,
    priceDisplay: "₹65",
    weight: "Per slice",
    isVeg: true,
    isPopular: false,
    image: "/images/red-velvet-pastry.webp",
    imageAlt: "Red velvet pastry slice with cream cheese frosting",
    source: "web-sample",
    isSample: true
  },
  // 10. Custom Celebration Birthday Cake
  {
    id: "item-custom-cake",
    name: "Custom Theme Celebration Cake (1kg)",
    category: "cakes",
    description: "Bespoke designer cakes customized for birthdays, anniversaries, and family celebrations. 100% eggless.",
    price: 850,
    priceDisplay: "₹850 (Customizable)",
    isPriceOnRequest: false,
    weight: "1kg (Base)",
    isVeg: true,
    isPopular: true,
    image: "/images/custom-celebration-cake.webp",
    imageAlt: "Decorated tiered celebration birthday cake",
    source: "web-sample",
    isSample: true
  },
  // 11. Traditional Bakery Cookies / Nankhatai
  {
    id: "item-cookies",
    name: "Pista Badam Nankhatai (250g)",
    category: "bakery",
    description: "Melt-in-mouth traditional Indian shortbread cookies baked with desi ghee and garnished with pistachios and almonds.",
    price: 120,
    priceDisplay: "₹120",
    weight: "250g box",
    isVeg: true,
    isPopular: false,
    image: "/images/traditional-cookies.webp",
    imageAlt: "Freshly baked cardamom nankhatai cookies with pistachio garnish",
    source: "web-sample",
    isSample: true
  },
  // 12. Artisan Fresh Bread Loaf
  {
    id: "item-artisan-bread",
    name: "Fresh Wholewheat Bread Loaf",
    category: "bakery",
    description: "Daily baked soft wholewheat bread loaf made without preservatives or artificial improvers.",
    price: 50,
    priceDisplay: "₹50",
    weight: "400g loaf",
    isVeg: true,
    isPopular: false,
    image: "/images/artisan-bread.webp",
    imageAlt: "Fresh wholewheat sandwich bread loaf",
    source: "web-sample",
    isSample: true
  },
  // 13. Bakery Rusks & Toast
  {
    id: "item-bakery-rusks",
    name: "Elaichi Butter Tea Rusks (300g)",
    category: "bakery",
    description: "Crispy twice-baked tea toasts infused with aromatic green cardamom. Perfect accompaniment for evening chai.",
    price: 65,
    priceDisplay: "₹65",
    weight: "300g pack",
    isVeg: true,
    isPopular: false,
    image: "/images/bakery-rusks.webp",
    imageAlt: "Golden crunchy tea rusks with cardamom aroma",
    source: "web-sample",
    isSample: true
  }
];

export const galleryImages = [
  {
    id: "gal-1",
    src: "/images/gmaps-cake-display-2.webp",
    alt: "Cake Castle refrigerated showcase displaying fresh celebration cakes",
    caption: "Fresh Daily Cake Showcase",
    source: "google-maps",
    isSample: false
  },
  {
    id: "gal-2",
    src: "/images/gmaps-counter-3.webp",
    alt: "Cake Castle bakery sales counter and interior shelves",
    caption: "Yerawada Bakery Counter & Store",
    source: "google-maps",
    isSample: false
  },
  {
    id: "gal-3",
    src: "/images/gmaps-storefront-1.webp",
    alt: "Cake Castle storefront at Ram Society, Yerawada",
    caption: "Cake Castle Storefront Exterior",
    source: "google-maps",
    isSample: false
  },
  {
    id: "gal-4",
    src: "/images/gmaps-baked-goods-4.webp",
    alt: "Authentic baked treats and snacks at Cake Castle",
    caption: "Baked Fresh Every Morning",
    source: "google-maps",
    isSample: false
  },
  {
    id: "gal-5",
    src: "/images/white-forest-cake.webp",
    alt: "Signature White Forest Eggless Cake",
    caption: "White Forest Cake (500g)",
    source: "web-sample",
    isSample: true
  },
  {
    id: "gal-6",
    src: "/images/chocolate-mawa-cake.webp",
    alt: "Signature Chocolate Mawa Cake",
    caption: "Rich Chocolate Mawa Cake",
    source: "web-sample",
    isSample: true
  }
];
