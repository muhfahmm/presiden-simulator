"use client"

import { X, TrendingUp, Megaphone, Heart, Users, Construction, Music, HandHelping, Coins } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NaikkanRatingModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const actions = [
    {
      title: "Pidato Kenegaraan",
      description: "Sampaikan visi dan optimisme untuk meningkatkan kepercayaan publik.",
      icon: Megaphone,
      cost: "Rp 5 T",
      benefit: "+2% Rating",
      category: "Komunikasi",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      title: "Bantuan Sosial Khusus",
      description: "Distribusikan paket bantuan langsung untuk rakyat yang membutuhkan.",
      icon: HandHelping,
      cost: "Rp 15 T",
      benefit: "+5% Rating",
      category: "Kebijakan",
      color: "text-green-400",
      bg: "bg-green-500/10"
    },
    {
      title: "Peresmian Proyek Strategis",
      description: "Hadir langsung dalam peresmian infrastruktur besar nasional.",
      icon: Construction,
      cost: "Rp 10 T",
      benefit: "+3% Rating",
      category: "Pembangunan",
      color: "text-amber-400",
      bg: "bg-amber-500/10"
    },
    {
      title: "Festival Kebudayaan",
      description: "Selenggarakan perayaan nasional untuk meningkatkan kebahagiaan rakyat.",
      icon: Music,
      cost: "Rp 8 T",
      benefit: "+2% Rating",
      category: "Sosial",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      title: "Kunjungan Kerja (Blusukan)",
      description: "Turun langsung ke lapangan untuk mendengar aspirasi rakyat.",
      icon: Users,
      cost: "Rp 2 T",
      benefit: "+1.5% Rating",
      category: "Personal",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10"
    },
    {
      title: "Subsidi Bahan Pokok",
      description: "Intervensi harga pasar untuk menekan biaya hidup masyarakat.",
      icon: Coins,
      cost: "Rp 25 T",
      benefit: "+8% Rating",
      category: "Ekonomi",
      color: "text-red-400",
      bg: "bg-red-500/10"
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-500/10 rounded-xl">
              <TrendingUp className="h-6 w-6 text-rose-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Naikkan Rating</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Strategic Actions</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actions.map((action, idx) => (
              <button 
                key={idx} 
                className="flex items-start gap-4 p-5 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl hover:border-zinc-500/50 hover:bg-zinc-800/40 transition-all text-left group relative overflow-hidden"
              >
                <div className={`p-3 rounded-xl ${action.bg} ${action.color} group-hover:scale-110 transition-transform shadow-lg`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-black uppercase tracking-tighter opacity-50">{action.category}</span>
                    <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full">{action.benefit}</span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-100 mb-1">{action.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{action.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 grayscale group-hover:grayscale-0 transition-all">
                      <Coins className="h-3.5 w-3.5 text-yellow-500" />
                      <span className="text-sm font-black text-white">{action.cost}</span>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-widest">Execute Action →</span>
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
