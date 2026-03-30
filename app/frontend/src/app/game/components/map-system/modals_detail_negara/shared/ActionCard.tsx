"use client"

import React from "react";

interface ActionCardProps {
  icon: React.ReactNode;
  label: string;
  bg: string;
  onClick?: () => void;
}

export default function ActionCard({ icon, label, bg, onClick }: ActionCardProps) {
  return (
    <button 
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br border border-zinc-800/80 hover:border-zinc-700/80 transition-all cursor-pointer min-h-[75px] ${bg} hover:brightness-110 shadow-lg`}
    >
      <div className="text-zinc-300 mb-1.5 p-1 bg-zinc-900/50 rounded-lg border border-zinc-800/40">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-center text-zinc-200 leading-tight">{label}</span>
    </button>
  );
}
