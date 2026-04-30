import React from 'react';

export const PesawatSVG = ({ className = "w-6 h-6 text-white", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    {/* Fighter Jet Silhouette */}
    <path d="M13,2.5 L11,2.5 L11,7 L5,13 L5,15 L11,14 L11,19 L8,21 L8,22 L12,21 L16,22 L16,21 L13,19 L13,14 L19,15 L19,13 L13,7 L13,2.5 Z" />
  </svg>
);

export const KapalSVG = ({ className = "w-6 h-6 text-white", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    {/* Battleship Silhouette */}
    <path d="M2,18 L4,21 L20,21 L22,18 L19,18 L18,15 L15,15 L15,11 L13,11 L13,8 L11,8 L11,11 L9,11 L9,15 L6,15 L5,18 L2,18 Z M5,14 L19,14 L19,17 L5,17 L5,14 Z" />
  </svg>
);

export const TankSVG = ({ className = "w-6 h-6 text-white", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    {/* Tank Silhouette */}
    <path d="M19,15 L19,12 L15,12 L14,9 L8,9 L8,11 L4,11 L4,12 L3,12 C2.4,12 2,12.4 2,13 L2,17 C2,17.6 2.4,18 3,18 L21,18 C21.6,18 22,17.6 22,17 L22,15 L19,15 Z M4,14 L20,14 L20,16 L4,16 L4,14 Z M16,10 L16,12 L9,12 L9,10 L16,10 Z M22,11 L10,11 L10,12 L22,12 L22,11 Z" />
  </svg>
);
