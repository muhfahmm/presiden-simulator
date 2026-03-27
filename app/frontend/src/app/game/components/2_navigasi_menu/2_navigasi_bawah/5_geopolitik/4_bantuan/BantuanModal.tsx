"use client"

import { useState, useEffect } from "react";
import { X, HandHelping, Coins, Building2, Landmark, GraduationCap, Heart, HelpCircle, Info, Clock, CheckCircle2, AlertCircle, TrendingUp, TrendingDown, DollarSign } from "lucide-react"
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/countries/region/index";

export default function BantuanModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentData, setCurrentData] = useState<any>(null);

  useEffect(() => {
    const session = gameStorage.getSession();
    if (session) {
      const countryName = session.country || localStorage.getItem("selectedCountry") || "Indonesia";
      const data = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
      setCurrentData(data);
    }
  }, [isOpen]);

  if (!isOpen || !currentData) return null;

  const aidGroups = [
    {
       id: "program_bantuan",
       title: "Program Bantuan Luar Negeri",
       icon: Coins,
       color: "text-amber-400",
       items: [
         { label: "Bantuan Kemanusiaan", type: "Hibah", value: "$50M", status: "Aktif", icon: Heart },
         { label: "Beasiswa Internasional", type: "Pendidikan", value: "2,500 Pax", status: "Berjalan", icon: GraduationCap },
         { label: "Kredit Lunak Infrastruktur", type: "Pinjaman", value: "$1.2B", status: "Verifikasi", icon: Building2 }
       ]
    },
    {
       id: "status_finansial",
       title: "Status Finansial Strategis",
       icon: Landmark,
       color: "text-blue-400",
       isStatusOnly: true,
       items: [
         { label: "Total Pinjaman Aktif", value: "$4.5B", desc: "Jangka Panjang", icon: DollarSign },
         { label: "Sisa Dana Hibah", value: "$150M", desc: "Tahun Berjalan", icon: TrendingUp },
         { label: "Peringkat Kredit", value: "AA+", desc: "Stabilitas Ekonomi", icon: CheckCircle2 }
       ]
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative">
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl">
              <HandHelping className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Dana & Bantuan Luar Negeri</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Aid & Global Assistance Management</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {aidGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}><group.icon className={`h-4 w-4 ${group.color}`} /></div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title}</h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item: any, idx) => (
                    <div key={idx} className="bg-zinc-900/40 border border-zinc-800/60 p-5 rounded-2xl group hover:border-amber-500/30 transition-all flex flex-col gap-4">
                       <div className="flex justify-between items-start">
                          <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
                            <item.icon className="h-5 w-5 text-amber-400" />
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black text-zinc-400 italic uppercase">
                             {item.type || item.desc}
                          </span>
                       </div>
                       <div>
                          <h4 className="text-lg font-black text-white uppercase italic leading-tight mb-1">{item.label}</h4>
                          <div className="flex items-center gap-2">
                             <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest ${item.status === 'Aktif' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-800 text-zinc-500'}`}>{item.status || "Stabil"}</span>
                          </div>
                       </div>
                       <div className="mt-auto pt-4 border-t border-zinc-800/30 flex justify-between items-center">
                          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Total Alokasi</span>
                          <span className="text-sm font-black text-amber-400">{item.value}</span>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
