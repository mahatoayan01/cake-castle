import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Crown, Star, ShoppingBag, Phone, Clock, MapPin, 
  Sparkles, CheckCircle2, ChevronRight, HelpCircle, 
  Instagram, ArrowRight, Calendar, Heart, Shield, Award 
} from 'lucide-react';
import { businessData } from '../data/business';
import { menuItems, galleryImages } from '../data/menu';
import { reviewsData } from '../data/reviews';
import { useCart } from '../context/CartContext';
import PureVegBadge from '../components/PureVegBadge';
import SampleImageBadge from '../components/SampleImageBadge';
import OpenStatusBadge from '../components/OpenStatusBadge';

export default function Home() {
  const { addToCart, showToast } = useCart();
  const popularItems = menuItems.filter(item => item.isPopular);

  // Pre-order form state (demo)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cakeType: 'White Forest Cake',
    weight: '1 kg',
    eventDate: '',
    messageOnCake: '',
    notes: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Lightbox preview for gallery
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    showToast("Cake pre-order request submitted! We will call to confirm.");
  };

  const faqs = [
    {
      q: "Are all cakes and bakes strictly 100% vegetarian / eggless?",
      a: "Yes! Cake Castle is a dedicated 100% pure vegetarian bakery. All our celebration cakes, pastries, cupcakes, and snacks are completely eggless, prepared using fresh dairy cream and premium vegetarian ingredients."
    },
    {
      q: "How early should I place a custom or designer cake order?",
      a: "For standard cakes (White Forest, Chocolate Truffle, Black Forest), same-day walk-in or pickup is available. For multi-tier or custom theme cakes, we recommend pre-ordering at least 24 to 48 hours in advance."
    },
    {
      q: "Where is the bakery located in Pune?",
      a: "We are located at 120B/2, Ram Society, near Hariganga Society, Yerawada, Pune 411006 (Plus Code: HV4H+J8). You can easily reach us via Alandi Road / Yerawada."
    },
    {
      q: "Do you deliver cakes in Pune?",
      a: "Yes, we support local deliveries in and around Yerawada, Tingre Nagar, Vishrantwadi, and nearby Pune neighborhoods. You can also pick up directly from our storefront."
    },
    {
      q: "What payment methods do you accept at the counter?",
      a: "We accept all major UPI apps (Google Pay, PhonePe, Paytm), debit/credit cards, and cash."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-cream-100 to-white pt-10 sm:pt-16 pb-14 sm:pb-20 border-b border-[#F1E5D5]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#7B3F00]/5 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge row: Rating + Status */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  <span>4.8 ★ Google Rated ({businessData.reviewCount} Reviews)</span>
                </div>
                <OpenStatusBadge />
                <PureVegBadge className="bg-white/80 px-2.5 py-1 rounded-full border border-emerald-200" />
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-gold-600 font-semibold text-sm tracking-wider uppercase">
                  <Crown className="w-4 h-4" />
                  <span>Yerawada’s Royal Confectionery</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3D1C00] leading-tight tracking-tight">
                  Cake Castle <br />
                  <span className="text-[#7B3F00] italic font-normal">Pure Veg Bakery</span>
                </h1>
                <p className="text-base sm:text-lg text-amber-950/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Celebrate life's sweetest milestones with 100% pure vegetarian and eggless baked perfection. From signature White Forest cakes to melt-in-mouth Chocolate Mawa treats, freshly baked daily in Yerawada, Pune.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-warm hover:shadow-warm-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ShoppingBag className="w-5 h-5 text-gold-400" />
                  <span>Explore Menu & Order</span>
                </Link>

                <a
                  href={`tel:${businessData.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-[#7B3F00] bg-white hover:bg-amber-50 border-2 border-[#7B3F00]/20 transition-all"
                >
                  <Phone className="w-5 h-5 text-gold-600" />
                  <span>Call {businessData.phone}</span>
                </a>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-200/60 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-[#7B3F00]">100%</div>
                  <div className="text-xs text-amber-900/70 font-medium">Eggless & Pure Veg</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-[#7B3F00]">4.8 ★</div>
                  <div className="text-xs text-amber-900/70 font-medium">Verified Rating</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-[#7B3F00]">8 AM - 11 PM</div>
                  <div className="text-xs text-amber-900/70 font-medium">Open 7 Days a Week</div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Showcase Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gold-500/30 to-[#7B3F00]/20 transform rotate-2 scale-102"></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-warm-lg border-4 border-white bg-white">
                  <img
                    src="/images/gmaps-cake-display-2.webp"
                    alt="Cake Castle refrigerated display cabinet with fresh celebration cakes"
                    width={800}
                    height={600}
                    className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay banner with verified photo badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold-500 text-black inline-block mb-1">
                          Google Maps Photo
                        </span>
                        <h2 className="text-base font-bold font-serif">Fresh Daily Cake Showcase</h2>
                        <p className="text-xs text-amber-100/80">Cake Castle storefront display in Yerawada</p>
                      </div>
                      <PureVegBadge showText={false} className="bg-white p-1 rounded" />
                    </div>
                  </div>
                </div>

                {/* Floating highlight card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-warm border border-amber-100 hidden sm:flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#3D1C00]">100% Pure Vegetarian</div>
                    <div className="text-[11px] text-emerald-700 font-medium">Certified Eggless Bakes</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROMOTIONAL OFFERS (Clearly marked Sample Offers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500/10 via-gold-500/15 to-amber-500/10 rounded-2xl p-6 sm:p-8 border border-gold-400/40 shadow-xs relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 bg-gold-400/30 px-2.5 py-0.5 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                <span>Special Offers & Promotions [Sample]</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#3D1C00]">
                Sweet Deals on Celebration Cakes & Pastries
              </h2>
              <p className="text-sm text-amber-900/80 max-w-xl">
                Pre-order your celebration cake 24 hours in advance and enjoy exclusive in-store treats.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {businessData.offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white px-4 py-3 rounded-xl border border-amber-200 shadow-xs text-center sm:text-left"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {offer.tag}
                  </span>
                  <div className="font-bold text-sm text-[#7B3F00] mt-1">{offer.title}</div>
                  <div className="text-xs text-amber-900/70 font-mono mt-0.5">Code: {offer.code}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US & PURE VEG STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-warm border border-amber-100 relative group">
                  <img
                    src="/images/gmaps-counter-3.webp"
                    alt="Cake Castle sales counter and display shelves"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-medium bg-black/60 text-white px-2 py-0.5 rounded">
                    Google Maps Photo
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-warm border border-amber-100 relative group">
                  <img
                    src="/images/gmaps-baked-goods-4.webp"
                    alt="Fresh baked cakes and confectioneries"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-medium bg-black/60 text-white px-2 py-0.5 rounded">
                    Google Maps Photo
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-warm border border-amber-100 relative group">
                  <img
                    src="/images/gmaps-storefront-1.webp"
                    alt="Cake Castle storefront at Ram Society, Yerawada"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-medium bg-black/60 text-white px-2 py-0.5 rounded">
                    Google Maps Photo
                  </span>
                </div>
                <div className="bg-[#7B3F00] text-amber-100 p-5 rounded-2xl shadow-warm flex flex-col justify-center">
                  <Crown className="w-8 h-8 text-gold-400 mb-2" />
                  <div className="font-serif font-bold text-lg text-white">Yerawada, Pune</div>
                  <p className="text-xs text-amber-200/80 mt-1">
                    Serving pure joy, delicious memories & pristine vegetarian bakes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold-600 font-semibold text-xs tracking-wider uppercase">
              <Award className="w-4 h-4" />
              <span>Our Pure Veg Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D1C00] leading-tight">
              Crafting Pure Vegetarian Confectionery with Castle-Level Care
            </h2>

            <p className="text-base text-amber-950/80 leading-relaxed">
              Located at <strong>Ram Society, Yerawada</strong>, Cake Castle was founded on a simple, uncompromising promise: every family and dessert lover deserves celebration cakes that are <strong>100% vegetarian, eggless, and extraordinarily delicious</strong>.
            </p>

            <p className="text-base text-amber-950/80 leading-relaxed">
              Whether you are craving our verified customer-favorite <em>White Forest Cake</em>, our rich <em>Chocolate Mawa Cake</em> with traditional spices, or an impromptu evening pastry at 11 PM, our bakers prepare each confection with supreme hygiene and pure dairy ingredients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-[#3D1C00]">100% Eggless Guarantee</h3>
                  <p className="text-xs text-amber-900/70">Safe and wholesome for all dietary preferences.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-[#3D1C00]">Fresh Daily Batches</h3>
                  <p className="text-xs text-amber-900/70">Bakes come hot out of the oven every morning.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/location"
                className="inline-flex items-center space-x-2 text-sm font-bold text-[#7B3F00] hover:text-[#5F2F00] group"
              >
                <span>Visit our bakery at Ram Society, Yerawada</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. POPULAR ITEMS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gold-600 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#3D1C00]">
              Popular Pure Veg Creations
            </h2>
            <p className="text-sm text-amber-900/70 mt-1">
              Featuring verified listing favorites like White Forest, Chocolate Mawa & Cupcakes.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#7B3F00] hover:text-[#5F2F00] bg-amber-50 px-4 py-2 rounded-xl border border-amber-200"
          >
            <span>View Full Menu ({menuItems.length} items)</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularItems.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#F1E5D5] shadow-xs hover:shadow-warm transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-48 overflow-hidden bg-cream-200">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5">
                  <PureVegBadge showText={false} className="bg-white/95 p-1 rounded shadow-xs" />
                  {item.isSample && <SampleImageBadge />}
                </div>
                {item.weight && (
                  <span className="absolute bottom-2.5 right-2.5 bg-black/65 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
                    {item.weight}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif font-bold text-base text-[#3D1C00] group-hover:text-[#7B3F00] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-amber-950/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-900/60 block">Price</span>
                    <span className="text-lg font-bold text-[#7B3F00]">
                      {item.priceDisplay}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(item, 1)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-xs active:scale-95 transition-all"
                    aria-label={`Add ${item.name} to order`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-gold-400" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PHOTO GALLERY (Google Maps photos + Menu specials) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
            <Crown className="w-4 h-4" />
            <span>Store & Cake Showcase</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#3D1C00]">
            A Glimpse Inside Cake Castle
          </h2>
          <p className="text-sm text-amber-900/70">
            Authentic photos directly from our Google Maps listing and bakery counter in Yerawada.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-xs hover:shadow-warm border border-amber-100 cursor-pointer group bg-cream-200"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={500}
                height={350}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300">
                  {img.source === "google-maps" ? "Google Maps Verified" : "Bakery Sample"}
                </span>
                <span className="font-serif text-sm font-semibold text-white">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[70vh] object-contain bg-black/5"
              />
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#3D1C00]">
                    {selectedImage.caption}
                  </h3>
                  <p className="text-xs text-amber-900/60">
                    Source: {selectedImage.source === "google-maps" ? "Official Google Maps Photo" : "Sample Image"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-[#7B3F00] font-bold text-xs rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. CAKE PRE-ORDER / BOOKING FORM (Demo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#7B3F00] to-[#4A2600] rounded-3xl p-8 sm:p-12 text-white shadow-warm-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 bg-white/10 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                <span>Pre-Order & Custom Cakes</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Book Your Celebration Cake in Advance
              </h2>

              <p className="text-sm text-amber-100/80 leading-relaxed">
                Planning a birthday, anniversary, or family gathering in Pune? Reserve your customized pure veg cake with your preferred flavor, design theme, and special written message.
              </p>

              <div className="space-y-3 pt-2 text-xs text-amber-200/90">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>100% Eggless with custom message on cake</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Pick up at Ram Society store or request local delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Direct phone confirmation from our bakers</span>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-800/60">
                <p className="text-xs text-amber-200/60">Need immediate assistance?</p>
                <a
                  href={`tel:${businessData.phoneRaw}`}
                  className="text-gold-400 hover:text-gold-300 font-bold text-sm inline-flex items-center space-x-1.5 mt-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {businessData.phone}</span>
                </a>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7 bg-white text-[#2C1810] p-6 sm:p-8 rounded-2xl shadow-xl">
              {bookingSuccess ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#3D1C00]">
                    Pre-Order Request Received!
                  </h3>
                  <p className="text-sm text-amber-950/70 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our bakery team will review your order for {formData.cakeType} ({formData.weight}) and call you at {formData.phone} shortly.
                  </p>
                  <span className="inline-block text-xs bg-amber-100 text-[#7B3F00] font-semibold px-3 py-1 rounded-full">
                    Demo Mode · No real charge
                  </span>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setBookingSuccess(false)}
                      className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-[#7B3F00] hover:bg-[#5F2F00]"
                    >
                      Book Another Cake
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="customer-name" className="block text-xs font-semibold text-amber-950/80 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="customer-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-phone" className="block text-xs font-semibold text-amber-950/80 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="customer-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98220 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cake-flavor" className="block text-xs font-semibold text-amber-950/80 mb-1">
                        Select Cake Flavor
                      </label>
                      <select
                        id="cake-flavor"
                        value={formData.cakeType}
                        onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                      >
                        <option value="White Forest Cake">White Forest Cake (500g ₹399)</option>
                        <option value="Chocolate Truffle Cake">Chocolate Truffle Cake (500g ₹450)</option>
                        <option value="Butterscotch Crunch Cake">Butterscotch Crunch Cake (500g ₹380)</option>
                        <option value="Chocolate Mawa Cake">Chocolate Mawa Cake (₹159)</option>
                        <option value="Custom Theme Birthday Cake">Custom Theme Birthday Cake (1kg ₹850)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cake-weight" className="block text-xs font-semibold text-amber-950/80 mb-1">
                        Cake Size / Weight
                      </label>
                      <select
                        id="cake-weight"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                      >
                        <option value="500 grams (Half kg)">500 grams (Half kg)</option>
                        <option value="1 kg">1 kg (Regular Celebration)</option>
                        <option value="1.5 kg">1.5 kg</option>
                        <option value="2 kg or above">2 kg or above (Party size)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="event-date" className="block text-xs font-semibold text-amber-950/80 mb-1">
                        Pickup / Event Date
                      </label>
                      <input
                        type="date"
                        id="event-date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="cake-message" className="block text-xs font-semibold text-amber-950/80 mb-1">
                        Message on Cake
                      </label>
                      <input
                        type="text"
                        id="cake-message"
                        value={formData.messageOnCake}
                        onChange={(e) => setFormData({ ...formData, messageOnCake: e.target.value })}
                        placeholder="e.g. Happy Birthday Aarav!"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="special-notes" className="block text-xs font-semibold text-amber-950/80 mb-1">
                      Special Design or Dietary Notes
                    </label>
                    <textarea
                      id="special-notes"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Less sugar, extra white chocolate flakes, or specific theme decorations..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-md transition-colors"
                  >
                    Submit Pre-Order Request (Demo)
                  </button>
                  <p className="text-[11px] text-center text-amber-900/60">
                    * This is a demonstration booking form. No actual card charge is processed.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS & VERIFIED GOOGLE RATING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
            <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
            <span>Real Customer Feedback</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#3D1C00]">
            Loved by Pune Dessert Lovers
          </h2>
          <p className="text-sm text-amber-900/70">
            Read verified customer reviews from Google Maps and local patrons.
          </p>
        </div>

        {/* Rating Overview Box */}
        <div className="bg-amber-50/60 rounded-2xl p-6 border border-amber-200/80 mb-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <div className="text-4xl font-extrabold text-[#7B3F00] flex items-center justify-center sm:justify-start space-x-2">
              <span>{reviewsData.aggregate.rating}</span>
              <span className="text-2xl text-amber-800/60">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-1 text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-amber-900/70 font-medium">
              Based on {reviewsData.aggregate.totalReviews} verified Google reviews
            </p>
          </div>

          <div className="border-t sm:border-t-0 sm:border-l border-amber-200 pt-4 sm:pt-0 sm:pl-6 text-center sm:text-left space-y-1">
            <span className="text-xs font-bold text-[#7B3F00] block uppercase tracking-wide">
              Verified Highlights
            </span>
            <ul className="text-xs text-amber-950/80 space-y-1">
              <li>✓ Fresh celebration cakes ready on time</li>
              <li>✓ Delicious 100% pure veg & eggless recipes</li>
              <li>✓ Pocket-friendly and reasonable pricing</li>
            </ul>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#F1E5D5] shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gold-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-amber-900/50 font-medium">
                    {rev.source}
                  </span>
                </div>

                <p className="text-sm text-amber-950/85 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-amber-100">
                <div className="w-8 h-8 rounded-full bg-[#7B3F00] text-gold-400 font-bold text-xs flex items-center justify-center">
                  {rev.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3D1C00] truncate max-w-[200px]">
                    {rev.author}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Review</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INSTAGRAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-200/60 rounded-3xl p-8 border border-amber-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gold-600 mb-1">
                <Instagram className="w-4 h-4" />
                <span>Instagram Feed</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#3D1C00]">
                Follow Us on Social Media
              </h2>
              <p className="text-xs text-amber-900/70">
                Handle: <code className="bg-amber-100 px-2 py-0.5 rounded text-amber-900 font-semibold">{businessData.socials.instagram}</code>
              </p>
            </div>

            <a
              href={businessData.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-xs"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow [ADD INSTAGRAM HANDLE]</span>
            </a>
          </div>

          {/* Local images grid for Instagram posts (no hotlinks) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xs relative group bg-cream-100">
              <img
                src="/images/gmaps-cake-display-2.webp"
                alt="Instagram post preview cake display"
                width={300}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden shadow-xs relative group bg-cream-100">
              <img
                src="/images/white-forest-cake.webp"
                alt="Instagram post preview White Forest Cake"
                width={300}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden shadow-xs relative group bg-cream-100">
              <img
                src="/images/chocolate-mawa-cake.webp"
                alt="Instagram post preview Chocolate Mawa Cake"
                width={300}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden shadow-xs relative group bg-cream-100">
              <img
                src="/images/cupcakes-assorted.webp"
                alt="Instagram post preview Gourmet Cupcakes"
                width={300}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#3D1C00]">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-amber-200/80 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-sm text-[#3D1C00] hover:text-[#7B3F00]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-gold-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-sm text-amber-950/80 leading-relaxed border-t border-amber-100 bg-amber-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. BOTTOM CALLOUT / READY TO ORDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3D1C00] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-gold-500/10 to-transparent pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-3">
            <Crown className="w-10 h-10 text-gold-400 mx-auto" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Ready for Fresh Pure Veg Cake?
            </h2>
            <p className="text-sm text-amber-200/80">
              Browse our complete selection of fresh celebration cakes, pastries, cupcakes, and tea bakes or call us directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-[#3D1C00] bg-gold-400 hover:bg-gold-500 shadow-md transition-colors"
            >
              Browse Full Menu
            </Link>
            <a
              href={`tel:${businessData.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              Call {businessData.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
