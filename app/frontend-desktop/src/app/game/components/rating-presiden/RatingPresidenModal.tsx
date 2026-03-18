"use client"

import { X, Star, Heart, TrendingUp, Shield, Globe, Activity } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RatingPresidenModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const indicators = [
    { title: "Kepuasan Rakyat", icon: Heart, items: ["Tingkat Kebahagiaan", "Indeks Biaya Hidup", "Kepercayaan Publik"] },
    { title: "Ekonomi & Pembangunan", icon: TrendingUp, items: ["Pertumbuhan PDB", "Tingkat Pengangguran", "Stabilitas Mata Uang"] },
    { title: "Sosial & Layanan Publik", icon: Activity, items: ["Indeks Kesehatan", "Tingkat Pendidikan", "Aksesibilitas Transportasi"] },
    { title: "Keamanan & Hukum", icon: Shield, items: ["Stabilitas Nasional", "Indeks Penegakan Hukum", "Skor Anti-Korupsi"] },
    { title: "Geopolitik & Militer", icon: Globe, items: ["Kewibawaan Internasional", "Kekuatan Pertahanan"] },
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl">
              <Star className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Rating Presiden</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Presidential Dashboard</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 no-scrollbar">
          {indicators.map((category, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800/80 p-5 rounded-2xl hover:border-zinc-700 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="h-5 w-5 text-cyan-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-tight">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1.5 px-3 py-2 bg-zinc-950/50 rounded-lg border border-zinc-800/30 hover:bg-zinc-800/30 transition-colors cursor-pointer">
                    <span className="text-[11px] font-medium text-zinc-400">{item}</span>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-600 rounded-full w-[65%] shadow-[0_0_8px_rgba(8,145,178,0.5)]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
