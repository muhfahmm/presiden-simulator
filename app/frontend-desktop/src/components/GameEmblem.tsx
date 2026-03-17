export default function GameEmblem({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`filter drop-shadow-[0_0_20px_rgba(239,68,68,0.4)] ${className}`}
    >
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        
        <linearGradient id="red" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.25)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      
      {/* Ambient background glow behind the logo */}
      <circle cx="50" cy="50" r="48" fill="url(#glow)" />
      
      {/* Outer futuristic shield */}
      <path 
        d="M50 12 L82 22 L75 68 L50 88 L25 68 L18 22 Z" 
        fill="rgba(10, 10, 15, 0.85)" 
        stroke="url(#gold)" 
        strokeWidth="2" 
      />
      
      {/* Upper Red accents like Garuda wings / Flag */}
      <path 
        d="M50 22 L76 29 L70 63 L50 80 L30 63 L24 29 Z" 
        fill="url(#red)" 
      />

      {/* Modern Low-poly Crystal Core (representing power/presidency) */}
      <path 
        d="M50 32 L66 40 L50 72 L34 40 Z" 
        fill="url(#gold)" 
        opacity="0.9"
      />
      
      {/* Center line dividing facet */}
      <path 
        d="M50 32 L50 72 L34 40 Z" 
        fill="rgba(0,0,0,0.15)" 
      />
      
      {/* Technical framing lines */}
      <path 
        d="M50 12 L50 88" 
        stroke="rgba(251, 191, 36, 0.4)" 
        strokeWidth="0.75" 
        strokeDasharray="2 2" 
      />
      
      {/* Left-Right balancing details */}
      <circle cx="28" cy="24" r="1.5" fill="#FBBF24" />
      <circle cx="72" cy="24" r="1.5" fill="#FBBF24" />
      <circle cx="50" cy="85" r="1.5" fill="#EF4444" />

      {/* Glowing Floating Core Sphere */}
      <circle cx="50" cy="48" r="4.5" fill="#FFFFFF" filter="drop-shadow(0 0 5px #FBBF24)" />
    </svg>
  );
}
