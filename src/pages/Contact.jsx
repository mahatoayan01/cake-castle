import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, Crown } from 'lucide-react';
import { businessData } from '../data/business';
import { useCart } from '../context/CartContext';
import PureVegBadge from '../components/PureVegBadge';

export default function Contact() {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Custom Cake Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Thank you! Your message has been sent to Cake Castle.");
  };

  const whatsappUrl = `https://wa.me/${businessData.whatsappRaw}?text=${encodeURIComponent(
    "Hello Cake Castle! I would like to inquire about ordering a pure veg cake."
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
          <Phone className="w-3.5 h-3.5 text-gold-600" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D1C00]">
          Contact Cake Castle
        </h1>
        <p className="text-sm sm:text-base text-amber-950/80">
          Have a question about cake flavors, custom party themes, or pre-orders? Call, WhatsApp, or drop us a message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1E5D5] shadow-xs flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0 border border-amber-200">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1 flex-1">
              <span className="text-xs font-bold text-amber-900/60 uppercase tracking-wider">
                Telephone (Verified)
              </span>
              <div className="font-serif font-bold text-lg text-[#3D1C00]">
                {businessData.phone}
              </div>
              <p className="text-xs text-amber-900/70">
                Call us for immediate orders, daily cake stock, or takeaway pickup.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${businessData.phoneRaw}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#7B3F00] hover:underline"
                >
                  <span>Click to Call Directly</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1E5D5] shadow-xs flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1 flex-1">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                WhatsApp Orders
              </span>
              <div className="font-serif font-bold text-lg text-[#3D1C00]">
                {businessData.whatsapp}
              </div>
              <p className="text-xs text-amber-900/70">
                Send cake reference photos, custom message details, or delivery location.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:underline"
                >
                  <span>Chat on WhatsApp</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Email Placeholder Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1E5D5] shadow-xs flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1 flex-1">
              <span className="text-xs font-bold text-amber-900/60 uppercase tracking-wider">
                Email Address
              </span>
              <div className="font-mono text-sm font-bold text-gold-700 bg-amber-50 px-2 py-0.5 rounded inline-block">
                {businessData.email}
              </div>
              <p className="text-xs text-amber-900/70">
                For corporate bulk inquiries or event catering partnerships.
              </p>
            </div>
          </div>

          {/* Bakery Address Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1E5D5] shadow-xs flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#7B3F00] flex items-center justify-center shrink-0 border border-amber-200">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1 flex-1">
              <span className="text-xs font-bold text-amber-900/60 uppercase tracking-wider">
                Storefront Address
              </span>
              <p className="text-xs text-amber-950/80 leading-relaxed">
                <strong>{businessData.address.line1}</strong>
                <br />
                {businessData.address.landmark}, {businessData.address.area}
                <br />
                {businessData.address.city}, {businessData.address.state} {businessData.address.pincode}
              </p>
              <p className="text-[11px] font-mono text-gold-600">
                {businessData.address.plusCode}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form (Demo) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#F1E5D5] shadow-xs space-y-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-gold-600" />
              <h2 className="font-serif text-2xl font-bold text-[#3D1C00]">
                Send Us a Message
              </h2>
            </div>
            <p className="text-xs text-amber-900/70">
              Fill out this quick form and our team will get in touch with you promptly.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3D1C00]">
                Message Delivered!
              </h3>
              <p className="text-sm text-amber-950/70 max-w-md mx-auto">
                Thank you for reaching out, <strong>{formData.name}</strong>. We have received your inquiry regarding "{formData.subject}" and will respond shortly at {formData.phone}.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-[#7B3F00] hover:bg-[#5F2F00]"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-amber-950/80 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Patil"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-amber-950/80 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98220 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-amber-950/80 mb-1">
                  Subject / Inquiry Type
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                >
                  <option value="Custom Cake Inquiry">Custom Cake Inquiry</option>
                  <option value="Party Bulk Order">Party / Birthday Bulk Order</option>
                  <option value="Dietary & Pure Veg Question">Dietary & Pure Veg Question</option>
                  <option value="Store Pickup / Timing Query">Store Pickup / Timing Query</option>
                  <option value="General Feedback">General Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-amber-950/80 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what kind of cake or baked treats you need, guest count, or any special requests..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-md transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4 text-gold-400" />
                <span>Submit Message (Demo)</span>
              </button>

              <p className="text-[11px] text-center text-amber-900/60">
                * Demo form. No sensitive information or external backend required.
              </p>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
