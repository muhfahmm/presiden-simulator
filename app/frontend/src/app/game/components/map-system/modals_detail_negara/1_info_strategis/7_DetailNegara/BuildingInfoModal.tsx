"use client"

import React from "react";
import { X, Info, Users, Activity, Zap, Box } from "lucide-react";
import { BuildingInfo } from "./BuildingInfoData";

interface BuildingInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: BuildingInfo;
}

export default function BuildingInfoModal({ isOpen, onClose, info }: BuildingInfoModalProps) {
  if (!isOpen) return null;

  const Icon = info.icon || Box;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[3000] flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div 
        className="bg-zinc-950 border border-zinc-800 rounded-[3rem] w-full max-w-md overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Aesthetic Glow Background */}
        <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${info.color.replace('text-', 'from-')}/20 to-transparent opacity-30`} />
        
        {/* Header */}
        <div className="relative px-8 pt-10 pb-6 flex flex-col items-center text-center">
          <div className="p-6 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 mb-6 shadow-2xl group hover:scale-105 transition-transform duration-500">
             <Icon size={64} className={info.color} />
          </div>
          
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">
            {info.label}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              Informasi Teknis Bangunan
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-10 space-y-6">
          {/* Capacity Card */}
          <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-[2rem] relative overflow-hidden group">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Kapasitas per Unit</span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${info.color} tracking-tighter`}>
                    {info.capacity}
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    {info.unitLabel || "Jiwa"}
                  </span>
                </div>
              </div>
              <div className={`p-4 ${info.color.replace('text-', 'bg-')}/10 rounded-2xl`}>
                <Users size={24} className={info.color} />
              </div>
            </div>
            {/* Background Icon */}
            <Icon size={100} className={`absolute -right-4 -bottom-4 ${info.color} opacity-[0.03] group-hover:scale-110 transition-transform duration-700`} />
          </div>

          {/* Description */}
          <div className="space-y-3">
             <div className="flex items-center gap-3">
               <Info size={14} className="text-amber-500" />
               <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Deskripsi Operasional</span>
             </div>
             <p className="text-sm text-zinc-300 leading-relaxed italic font-medium">
               "{info.description}"
             </p>
          </div>

          {/* Actions */}
          <button 
            onClick={onClose}
            className="w-full py-4 bg-zinc-100 hover:bg-white text-black rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all active:scale-95 shadow-xl"
          >
            Tutup Informasi
          </button>
        </div>

        {/* Close Button Top Right */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
