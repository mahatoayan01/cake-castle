import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Crown, ShieldCheck, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { businessData } from '../data/business';
import PureVegBadge from './PureVegBadge';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const { isAuthenticated } = useAuth();
  const itemCount = getItemCount();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F1E5D5] shadow-xs">
      {/* Top micro-bar for Pure Veg Guarantee & Quick Phone */}
      <div className="bg-[#7B3F00] text-amber-100 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium tracking-wide">
              {businessData.vegClaim} in Yerawada, Pune
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-amber-200/80">Daily: 8:00 AM – 11:00 PM</span>
            <span className="text-amber-200/40">|</span>
            <a
              href={`tel:${businessData.phoneRaw}`}
              className="hover:text-white font-medium flex items-center space-x-1"
            >
              <Phone className="w-3 h-3" />
              <span>{businessData.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Castle Motif */}
        <Link
          to="/"
          onClick={closeMobile}
          className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg p-1"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7B3F00] to-[#5F2F00] flex items-center justify-center text-gold-400 shadow-md group-hover:scale-105 transition-transform duration-200 relative border border-gold-500/30">
            <Crown className="w-6 h-6 stroke-[2.2]" />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-600 border-2 border-white rounded-full" title="100% Pure Veg"></div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif font-bold text-xl sm:text-2xl text-[#7B3F00] tracking-tight group-hover:text-[#5F2F00] transition-colors">
                Cake Castle
              </span>
              <PureVegBadge showText={false} className="hidden xs:inline-flex" />
            </div>
            <p className="text-[11px] font-medium text-amber-900/70 tracking-wider uppercase">
              Pure Veg Bakery
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#7B3F00] bg-amber-50/80 font-semibold shadow-xs'
                    : 'text-[#4A2E18] hover:text-[#7B3F00] hover:bg-cream-200'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to={isAuthenticated ? "/dashboard" : "/login"}
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1.5 ${
                isActive
                  ? 'text-gold-700 bg-amber-50 font-semibold'
                  : 'text-amber-900/80 hover:text-gold-600 hover:bg-cream-200'
              }`
            }
          >
            <User className="w-4 h-4" />
            <span>{isAuthenticated ? "Dashboard" : "Owner"}</span>
          </NavLink>
        </nav>

        {/* Action Buttons: Phone & Cart */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href={`tel:${businessData.phoneRaw}`}
            className="hidden sm:inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-[#7B3F00] bg-amber-50 hover:bg-amber-100/80 border border-amber-200 transition-colors focus:ring-2 focus:ring-gold-500"
            aria-label={`Call Cake Castle at ${businessData.phone}`}
          >
            <Phone className="w-4 h-4 text-gold-600" />
            <span>Call Now</span>
          </a>

          <Link
            to="/cart"
            onClick={closeMobile}
            className="relative inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#7B3F00] hover:bg-[#5F2F00] transition-colors shadow-sm focus:ring-2 focus:ring-gold-500"
            aria-label={`Shopping Cart with ${itemCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-gold-400" />
            <span className="hidden xs:inline">Cart</span>
            {itemCount > 0 && (
              <span className="bg-gold-500 text-[#3D1C00] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center -mr-1">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#7B3F00] hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#F1E5D5] bg-cream-50 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <div className="pb-2 mb-2 border-b border-amber-100 flex items-center justify-between">
            <PureVegBadge showText={true} />
            <span className="text-xs text-amber-900/60 font-medium">8 AM – 11 PM Daily</span>
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobile}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-[#7B3F00] font-semibold'
                    : 'text-[#4A2E18] hover:bg-amber-100/60'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to={isAuthenticated ? "/dashboard" : "/login"}
            onClick={closeMobile}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive
                  ? 'text-white bg-gold-600 font-semibold'
                  : 'text-amber-900 hover:bg-amber-100/60'
              }`
            }
          >
            {isAuthenticated ? "Owner Dashboard" : "Owner Login"}
          </NavLink>

          <div className="pt-2">
            <a
              href={`tel:${businessData.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-base font-semibold text-[#7B3F00] bg-amber-100/80 border border-amber-200"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              <span>Call {businessData.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
