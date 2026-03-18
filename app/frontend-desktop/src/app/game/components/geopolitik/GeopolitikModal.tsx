"use client"

import { X, Globe, Users, MapPin, Handshake, HelpingHand, Church, Lightbulb, Scale, Shield, Landmark } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GeopolitikModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const sections = [
    {
      title: "Perserikatan Bangsa-Bangsa",
      icon: Globe,
      items: [
        { label: "Resolusi PBB", desc: "Rancangan resolusi & embargo" },
        { label: "Sanksi Internasional", desc: "Ekonomi, militer, & politik" },
        { label: "Dewan Keamanan", desc: "Hak veto & keanggotaan" },
        { label: "Organisasi PBB", desc: "WHO, IMF, Bank Dunia, UNESCO" }
      ]
    },
    {
      title: "Organisasi Regional & Global",
      icon: Users,
      items: [
        { label: "Blok Kawasan", desc: "ASEAN, Uni Eropa, Uni Afrika" },
        { label: "Aliansi Strategis", desc: "NATO, BRICS, QUAD" },
        { label: "Blok Ekonomi", desc: "OPEC, G20, APEC" }
      ]
    },
    {
      title: "Hubungan Diplomatik",
      icon: Handshake,
      items: [
        { label: "Tingkat Hubungan", desc: "Diplomatik, militer, & budaya" },
        { label: "Program Bantuan", desc: "Hibah teknologi & sumber daya" },
        { label: "Sosial Budaya", desc: "Agama & ideologi dunia" }
      ]
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl">
              <Globe className="h-6 w-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Geopolitik & Luar Negeri</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Global Strategic Hub</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_50%_0%,_rgba(79,70,229,0.05),_transparent_50%)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <section.icon className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-sm font-black text-zinc-200 uppercase tracking-tight">{section.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <button key={i} className="w-full flex items-start gap-4 p-4 bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/40 hover:bg-zinc-800/40 rounded-2xl transition-all group text-left cursor-pointer">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500 group-hover:animate-ping"></div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-100 mb-1 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{item.label}</h4>
                        <p className="text-[11px] text-zinc-500 font-medium leading-normal">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats Overlay (Optional decoration) */}
          <div className="mt-12 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl flex items-center justify-around">
            <div className="text-center">
              <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Status Internasional</p>
              <p className="text-xl font-black text-indigo-400">NEGARA BERPENGARUH</p>
            </div>
            <div className="h-10 w-[1px] bg-indigo-500/20"></div>
            <div className="text-center">
              <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Anggota Organisasi</p>
              <p className="text-xl font-black text-indigo-400">12 BLOK</p>
            </div>
            <div className="h-10 w-[1px] bg-indigo-500/20"></div>
            <div className="text-center">
              <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Peringkat Diplomasi</p>
              <p className="text-xl font-black text-indigo-400">TOP 15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
