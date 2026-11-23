import React from 'react';

/**
 * Small badge indicating a sample image that can be replaced with real customer/store photo
 */
export default function SampleImageBadge({ className = "" }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase bg-black/60 backdrop-blur-sm text-white/90 rounded border border-white/20 shadow-sm ${className}`}
      title="Sample illustration photo - replace with authentic photo"
    >
      Sample image
    </span>
  );
}
