import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

/**
 * Dynamic Open / Closed Status Badge
 * Cake Castle is verified open daily from 8:00 AM to 11:00 PM (08:00 to 23:00)
 */
export default function OpenStatusBadge({ className = "" }) {
  const [isOpen, setIsOpen] = useState(true);
  const [statusText, setStatusText] = useState("Open Now · Closes 11 PM");

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Current hours and minutes
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const openMinutes = 8 * 60;   // 8:00 AM = 480
      const closeMinutes = 23 * 60; // 11:00 PM = 1380

      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        setIsOpen(true);
        setStatusText("Open Now · Closes 11:00 PM");
      } else {
        setIsOpen(false);
        setStatusText("Closed · Opens Tomorrow at 8:00 AM");
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Recheck every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border shadow-xs transition-colors ${
        isOpen
          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
          : "bg-amber-50 text-amber-800 border-amber-200"
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOpen ? "bg-emerald-400" : "bg-amber-400"
          }`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isOpen ? "bg-emerald-600" : "bg-amber-600"
          }`}
        ></span>
      </span>
      <Clock className="w-3.5 h-3.5" />
      <span>{statusText}</span>
    </div>
  );
}
