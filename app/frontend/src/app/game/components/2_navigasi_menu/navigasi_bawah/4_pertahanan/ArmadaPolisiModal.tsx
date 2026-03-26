"use client"

import { X, ShieldAlert, Car, Search, Phone, UserCheck, MapPin, Radio, Shield, Zap } from "lucide-react"
import { CountryData } from "@/app/database/data/types/index";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function ArmadaPolisiModal({ isOpen, onClose, data }: ModalProps) {
  if (!isOpen) return null;

  const pol = data.armada_kepolisian.armada_polisi;

  const policeAssets = [
    {
      title: "Unit Patroli & Lantas",
      icon: Car,
      color: "text-emerald-500",
      items: [
        { name: "Mobil Patroli Standar", count: pol.patroli_lantas.mobil_patroli, active: Math.floor(pol.patroli_lantas.mobil_patroli * 0.73) },
        { name: "Sepeda Motor Polantas", count: pol.patroli_lantas.sepeda_motor, active: Math.floor(pol.patroli_lantas.sepeda_motor * 0.79) },
        { name: "Unit K-9", count: pol.patroli_lantas.unit_k9, active: Math.floor(pol.patroli_lantas.unit_k9 * 0.3) },
      ]
    },
    {
      title: "Unit Taktis & Khusus",
      icon: Shield,
      color: "text-blue-500",
      items: [
        { name: "Kendaraan Taktis (SWAT)", count: pol.taktis_khusus.swat, active: Math.floor(pol.taktis_khusus.swat * 0.23) },
        { name: "Helikopter Polisi", count: pol.taktis_khusus.helikopter_polisi, active: Math.floor(pol.taktis_khusus.helikopter_polisi * 0.37) },
        { name: "Unit Anti-Huru Hara", count: pol.taktis_khusus.anti_huru_hara, active: Math.floor(pol.taktis_khusus.anti_huru_hara * 0.3) },
      ]
    },
    {
      title: "Pusat Komando (110)",
      icon: Radio,
      color: "text-cyan-500",
      items: [
        { name: "Stasiun Polisi Regional", count: pol.pusat_komando.kantor_polisi, active: pol.pusat_komando.kantor_polisi },
        { name: "Kamera Surveillance", count: pol.pusat_komando.kamera_pengawas, active: Math.floor(pol.pusat_komando.kamera_pengawas * 0.93) },
        { name: "Pusat Forensik Digital", count: pol.pusat_komando.pusat_forensik, active: pol.pusat_komando.pusat_forensik },
      ]
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-2xl">
              <ShieldAlert className="h-7 w-7 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight uppercase">Armada Kepolisian</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mt-1">Law Enforcement & Public Security</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.05)_0%,_transparent_100%)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {policeAssets.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 px-2">
                  <cat.icon className={`h-4 w-4 ${cat.color}`} />
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest">{cat.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-2xl hover:border-emerald-500/30 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-colors">{item.name}</h4>
                        <span className="text-lg font-black text-white">{item.count.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className={`h-1.5 w-1.5 rounded-full ${item.active > 0 ? 'bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]' : 'bg-red-500'} animate-pulse`}></div>
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Dalam Tugas: {item.active.toLocaleString()}</span>
                        </div>
                        <span className="text-[9px] font-black text-emerald-400">{Math.round((item.active/item.count)*100)}% Cap.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="px-8 py-3 bg-zinc-900/50 border-t border-zinc-800/50 flex gap-8">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-zinc-550 uppercase">Security Index</span>
            <span className="text-sm font-bold text-white">{data.sektor_sosial.hukum.indeks_keamanan}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
