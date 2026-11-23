import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessData } from '../data/business';

/**
 * Floating Quick Action Call & WhatsApp Buttons for mobile / tablet
 */
export default function FloatingCTA() {
  const whatsappUrl = `https://wa.me/${businessData.whatsappRaw}?text=${encodeURIComponent(
    "Hello Cake Castle! I would like to inquire about fresh celebration cakes and pre-orders."
  )}`;

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col space-y-3 sm:hidden">
      {/* Direct Call Button */}
      <a
        href={`tel:${businessData.phoneRaw}`}
        aria-label="Call Cake Castle Bakery"
        className="w-12 h-12 rounded-full bg-[#7B3F00] text-gold-400 shadow-warm-lg flex items-center justify-center border-2 border-gold-400/80 active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Cake Castle on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-600 text-white shadow-warm-lg flex items-center justify-center border-2 border-white/80 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
