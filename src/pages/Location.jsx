import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { businessData } from '../data/business';
import OpenStatusBadge from '../components/OpenStatusBadge';

export default function Location() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const currentDay = days[new Date().getDay()];

  const daysList = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
  ];

  // Embed iframe URL centered on coordinates 18.5565682, 73.8782926
  const mapEmbedUrl = `https://maps.google.com/maps?q=18.5565682,73.8782926&hl=en&z=17&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
          <MapPin className="w-3.5 h-3.5 text-gold-600" />
          <span>Yerawada Store Location</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D1C00]">
          Find Cake Castle in Pune
        </h1>
        <p className="text-sm sm:text-base text-amber-950/80">
          Visit our storefront at Ram Society, Yerawada to pick up fresh celebration cakes, pastries, or discuss custom designer orders with our master bakers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Location & Hours Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Address Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E5D5] shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gold-700 uppercase tracking-wider bg-gold-400/20 px-2.5 py-1 rounded-md">
                Verified Address
              </span>
              <OpenStatusBadge />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#3D1C00]">
                {businessData.name}
              </h2>
              <p className="text-sm text-amber-950/80 leading-relaxed">
                <strong>{businessData.address.line1}</strong>
                <br />
                {businessData.address.landmark}
                <br />
                {businessData.address.area}, {businessData.address.city}
                <br />
                {businessData.address.state} — {businessData.address.pincode}
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono text-gold-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 inline-block">
                  Plus Code: {businessData.address.plusCode}
                </span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={businessData.socials.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-[#7B3F00] hover:bg-[#5F2F00] shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${businessData.phoneRaw}`}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-bold text-sm text-[#7B3F00] bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call Store</span>
              </a>
            </div>

            <div className="pt-4 border-t border-amber-100 text-xs text-amber-900/70 space-y-1.5">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Convenient roadside pickup available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Accessible from Alandi Road / Tingre Nagar route</span>
              </div>
            </div>
          </div>

          {/* Opening Hours Schedule */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E5D5] shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-[#7B3F00]">
              <Clock className="w-5 h-5 text-gold-600" />
              <h2 className="font-serif text-lg font-bold text-[#3D1C00]">Daily Store Hours</h2>
            </div>
            
            <p className="text-xs text-amber-900/70">
              Cake Castle opens early at 8:00 AM and remains open late until 11:00 PM every day for all your celebration cake emergencies!
            </p>

            <div className="divide-y divide-amber-100 text-xs pt-1">
              {daysList.map((day) => {
                const isToday = currentDay === day.key;
                const hours = businessData.hours[day.key];
                return (
                  <div
                    key={day.key}
                    className={`py-2.5 flex items-center justify-between ${
                      isToday ? 'font-bold text-[#7B3F00] bg-amber-50/80 px-2 rounded-lg' : 'text-amber-950/80'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>{day.label}</span>
                      {isToday && (
                        <span className="text-[10px] uppercase font-bold text-gold-700 bg-gold-400/20 px-1.5 py-0.5 rounded">
                          Today
                        </span>
                      )}
                    </span>
                    <span className={isToday ? "text-emerald-700" : "text-amber-900/70"}>
                      {hours.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Google Maps Embed Iframe */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-[#F1E5D5] shadow-xs space-y-4">
          <div className="flex items-center justify-between px-2">
            <div>
              <h2 className="font-serif font-bold text-lg text-[#3D1C00]">
                Interactive Map Location
              </h2>
              <p className="text-xs text-amber-900/60">Coordinates: 18.5565682, 73.8782926</p>
            </div>
            <a
              href={businessData.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-gold-700 hover:text-gold-600 flex items-center space-x-1"
            >
              <span>View full Google Maps listing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Map */}
          <div className="w-full h-96 sm:h-[480px] rounded-2xl overflow-hidden border border-amber-200 bg-cream-200 relative">
            <iframe
              title="Cake Castle Pure Veg Bakery Google Maps Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="p-3 bg-amber-50/70 rounded-xl text-xs text-amber-900/80 flex items-center justify-between">
            <span>Landmark: Near Hariganga Society / Ram Society, Yerawada</span>
            <a
              href={businessData.socials.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#7B3F00] hover:underline"
            >
              Start Driving Navigation →
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
