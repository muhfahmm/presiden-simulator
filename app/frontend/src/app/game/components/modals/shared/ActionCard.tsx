"use client"

import React from "react";
import { Lock } from "lucide-react";

interface ActionCardProps {
  icon: React.ReactNode;
  label: React.ReactNode;
  bg: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function ActionCard({ icon, label, bg, onClick, disabled }: ActionCardProps) {
  return (
    <button 
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`relative flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br border border-zinc-800/80 transition-all min-h-[75px] ${bg} shadow-lg group overflow-hidden
        ${disabled 
          ? 'opacity-40 grayscale-[0.8] cursor-not-allowed border-zinc-900/20' 
          : 'hover:border-zinc-700/80 hover:brightness-110 cursor-pointer'
        }`}
    >
      <div className={`mb-1.5 p-1 rounded-lg border border-zinc-800/40 transition-colors
        ${disabled ? 'bg-zinc-900/10 text-zinc-500' : 'bg-zinc-900/50 text-zinc-300 group-hover:text-amber-400'}
      `}>
        {icon}
      </div>
      <div className={`text-[10px] font-bold text-center leading-tight transition-colors
        ${disabled ? 'text-zinc-500' : 'text-zinc-200'}
      `}>
        {label}
      </div>

      {/* Lock Badge if Disabled */}
      {disabled && (
        <div className="absolute top-1.5 right-1.5 text-zinc-600">
           <Lock size={10} />
        </div>
      )}
    </button>
  );
}
