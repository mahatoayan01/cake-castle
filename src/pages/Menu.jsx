import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Filter, Crown, Sparkles, CheckCircle2 } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';
import PureVegBadge from '../components/PureVegBadge';
import SampleImageBadge from '../components/SampleImageBadge';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
          <PureVegBadge showText={false} />
          <span>100% Pure Vegetarian & Eggless Menu</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D1C00]">
          Cake Castle Bakery Menu
        </h1>
        <p className="text-sm sm:text-base text-amber-950/80">
          Handcrafted daily with fresh dairy cream, pure ingredients, and zero eggs. Verified local prices from our Yerawada shop.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-900/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cakes, pastries, mawa cake, cookies..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-amber-900/50 hover:text-amber-900"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#7B3F00] text-white shadow-xs'
                    : 'bg-white text-amber-950/80 hover:bg-amber-50 border border-amber-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-amber-200/80 p-8 space-y-3">
          <Crown className="w-12 h-12 text-gold-400 mx-auto" />
          <h2 className="font-serif text-xl font-bold text-[#3D1C00]">No matching baked goods found</h2>
          <p className="text-xs text-amber-900/60 max-w-md mx-auto">
            Try clearing your search query or selecting "All Items" to explore our full selection of celebration cakes and pastries.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-5 py-2 rounded-xl bg-[#7B3F00] text-white text-xs font-bold hover:bg-[#5F2F00]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#F1E5D5] shadow-xs hover:shadow-warm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
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

                {/* Body Details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-serif font-bold text-base text-[#3D1C00] group-hover:text-[#7B3F00] transition-colors">
                      {item.name}
                    </h2>
                  </div>
                  <p className="text-xs text-amber-950/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Add to Cart Action */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-amber-900/60 block">Price</span>
                    <span className="text-base sm:text-lg font-bold text-[#7B3F00]">
                      {item.priceDisplay}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(item, 1)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-xs active:scale-95 transition-all"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-gold-400" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pure Veg Note */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-6 text-center text-xs text-emerald-900 space-y-1">
        <span className="font-bold block text-sm text-emerald-950">
          🌱 100% Pure Vegetarian Assurance
        </span>
        <p className="text-emerald-800/80 max-w-xl mx-auto">
          Every item listed above is baked without eggs, gelatin, or animal rennet. Clean, hygienic, and prepared fresh daily at Ram Society, Yerawada.
        </p>
      </div>

    </div>
  );
}
