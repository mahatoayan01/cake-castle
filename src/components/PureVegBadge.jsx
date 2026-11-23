import React from 'react';

/**
 * Standard FSSAI Pure Veg Emblem (Green dot inside a green square)
 */
export default function PureVegBadge({ showText = true, className = "" }) {
  return (
    <div
      className={`inline-flex items-center space-x-1.5 ${className}`}
      title="100% Pure Vegetarian & Eggless"
    >
      <div className="w-4 h-4 rounded-sm border-2 border-emerald-600 flex items-center justify-center p-0.5 bg-white">
        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
      </div>
      {showText && (
        <span className="text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          Pure Veg
        </span>
      )}
    </div>
  );
}
