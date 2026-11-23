import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Crown, ExternalLink, Heart } from 'lucide-react';
import { businessData } from '../data/business';
import PureVegBadge from './PureVegBadge';

export default function Footer() {
  return (
    <footer className="bg-[#2D1606] text-amber-100/90 pt-16 pb-12 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-900/60">
          
          {/* Col 1: Brand & Pure Veg Promise */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500 text-[#2D1606] flex items-center justify-center font-bold shadow-md">
                <Crown className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  Cake Castle
                </h3>
                <p className="text-xs text-gold-400 font-medium uppercase tracking-wider">
                  Pure Veg Bakery
                </p>
              </div>
            </div>
            
            <p className="text-sm text-amber-200/80 leading-relaxed">
              Yerawada’s trusted destination for 100% pure vegetarian & eggless cakes, custom birthday bakes, rich mawa cakes, and artisan pastries. Baked fresh every day with pure devotion.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-lg">
                <PureVegBadge showText={false} />
                <span className="text-xs font-semibold text-emerald-300">
                  100% Certified Pure Veg & Eggless
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide flex items-center space-x-2">
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-amber-200/80 hover:text-gold-400 transition-colors">
                  Home & Overview
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-amber-200/80 hover:text-gold-400 transition-colors">
                  Full Bakery Menu & Prices
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-amber-200/80 hover:text-gold-400 transition-colors">
                  Store Location & Directions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200/80 hover:text-gold-400 transition-colors">
                  Contact & Custom Cake Pre-Order
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-amber-200/80 hover:text-gold-400 transition-colors">
                  View Cart & Demo Checkout
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-amber-200/80 hover:text-gold-400 transition-colors">
                  Owner Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gold-400" />
              <span>Opening Hours</span>
            </h4>
            <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-900/50 space-y-2 text-xs">
              <div className="flex justify-between items-center text-amber-200/90 font-medium">
                <span>Monday – Sunday</span>
                <span className="text-emerald-400 font-semibold">8:00 AM – 11:00 PM</span>
              </div>
              <p className="text-[11px] text-amber-300/70 pt-1 border-t border-amber-900/40">
                Fresh morning bakes ready by 8:00 AM. Late-night celebration cake pickups available until 11:00 PM.
              </p>
            </div>
            
            <div className="pt-1">
              <span className="text-xs text-amber-300/80 font-medium block mb-2">Connect with us:</span>
              <div className="flex items-center space-x-3">
                <a
                  href={businessData.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-amber-900/50 hover:bg-gold-500 hover:text-[#2D1606] transition-colors flex items-center justify-center text-amber-200"
                  title="Instagram [ADD INSTAGRAM HANDLE]"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-amber-900/50 hover:bg-gold-500 hover:text-[#2D1606] transition-colors flex items-center justify-center text-amber-200"
                  title="Facebook [ADD FACEBOOK LINK]"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={businessData.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-amber-900/50 hover:bg-gold-500 hover:text-[#2D1606] transition-colors flex items-center justify-center text-amber-200"
                  title="View on Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Store Address & Phone */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gold-400" />
              <span>Bakery Address</span>
            </h4>
            <div className="text-sm space-y-2.5 text-amber-200/80">
              <p className="leading-snug">
                <strong className="text-white font-medium">{businessData.address.line1}</strong>
                <br />
                {businessData.address.landmark}, {businessData.address.area}
                <br />
                {businessData.address.city}, {businessData.address.state} - {businessData.address.pincode}
              </p>
              <p className="text-xs font-mono text-gold-400">
                Plus Code: {businessData.address.plusCode}
              </p>

              <div className="pt-2 space-y-1.5">
                <a
                  href={`tel:${businessData.phoneRaw}`}
                  className="flex items-center space-x-2 text-white hover:text-gold-400 transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>{businessData.phone}</span>
                </a>
                <p className="text-xs text-amber-300/70 flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Email: {businessData.email}</span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={businessData.socials.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 underline"
                >
                  <span>Open Directions in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/60 space-y-3 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} {businessData.name}. All rights reserved. Pure Veg & Eggless Bakery.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-amber-300/40">Demo Website</span>
            <Link to="/login" className="hover:text-gold-400 underline">
              Owner Dashboard Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
