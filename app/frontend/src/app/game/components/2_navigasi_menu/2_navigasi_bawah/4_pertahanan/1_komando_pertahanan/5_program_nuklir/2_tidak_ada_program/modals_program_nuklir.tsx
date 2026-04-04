"use client"

import { useState, useEffect } from "react";
import { X, Radiation, Rocket, Bomb, Shield, Zap, AlertTriangle, Lock, ArrowRight } from "lucide-react";
import { CountryData } from "@/app/database/data/types/index";
import ModalsHargaProgramNuklir from "./modals_harga_program_nuklir";
import ModalsBerhasilMembuatProgramNuklir from "./modals_berhasil_membuat_program_nuklir";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { nuclearStorage } from "../nuclearStorage";

// Sub-modules
import ProgramNuklirRiset from "../1_ada_program/1_program_nuklir/ProgramNuklirRiset";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function ModalsProgramNuklir({ isOpen, onClose, data }: Props) {
  const [view, setView] = useState<'main' | 'riset'>('main');
  const [status, setStatus] = useState(nuclearStorage.getStatus());
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentBudget, setCurrentBudget] = useState(budgetStorage.getBudget());

  useEffect(() => {
    const handleUpdate = () => {
      setCurrentBudget(budgetStorage.getBudget());
      setStatus(nuclearStorage.getStatus());
    };
    window.addEventListener('budget_storage_updated', handleUpdate);
    window.addEventListener('nuclear_storage_updated', handleUpdate);
    return () => {
      window.removeEventListener('budget_storage_updated', handleUpdate);
      window.removeEventListener('nuclear_storage_updated', handleUpdate);
    };
  }, []);

  if (!isOpen || !data) return null;

  const cards = [
    {
      id: "program",
      title: "Program Nuklir",
      subtitle: "Pusat Riset & Pengembangan",
      desc: "Inisiasi penelitian hulu ledak nuklir strategis untuk memperkuat kedaulatan nasional.",
      icon: Radiation,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      isLocked: false,
      btnLabel: status === 'active' ? "Kelola Riset" : "Akses Modul"
    },
    {
      id: "icbm",
      title: "ICBM",
      subtitle: "Sistem Peluncuran Antarbenua",
      desc: "Kembangkan teknologi rudal balistik antarbenua untuk mencapai jangkauan target global.",
      icon: Rocket,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      isLocked: status !== 'active',
      btnLabel: "Akses Modul"
    },
    {
      id: "perang",
      title: "Perang Nuklir",
      subtitle: "Protokol Serangan & Pertahanan",
      desc: "Siapkan pusat komando untuk eksekusi serangan balasan dan pertahanan nuklir darurat.",
      icon: Bomb,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      isLocked: status !== 'active',
      btnLabel: "Akses Modul"
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="bg-zinc-950 border border-yellow-500/20 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-[0_0_100px_rgba(234,179,8,0.1)] flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <div className="px-10 py-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-900/20 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
              <Radiation className="h-8 w-8 text-yellow-500 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Strategi Nuklir Nasional</h2>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.3em] mt-1">Strategic Deterrence & Global Security Protocol</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar relative z-10">
          {view === 'riset' ? (
            <ProgramNuklirRiset 
              data={data} 
              onBack={() => setView('main')} 
            />
          ) : (
            <div className="flex flex-col gap-8">
              <div className={`${status === 'active' ? 'bg-emerald-500/5 border-emerald-500/10' : 'bg-yellow-500/5 border-yellow-500/10'} border rounded-3xl p-6 flex items-center gap-4`}>
                <AlertTriangle className={`h-6 w-6 ${status === 'active' ? 'text-emerald-500' : 'text-yellow-500'}`} />
                <p className={`text-xs font-bold ${status === 'active' ? 'text-emerald-500/80' : 'text-yellow-500/80'} uppercase tracking-widest leading-relaxed`}>
                  {status === 'active' 
                     ? <>Status: Program nuklir <span className="text-white underline">aktif & operasional</span>. Seluruh modul strategis kini dapat diakses sepenuhnya.</>
                     : <>Peringatan: Program nuklir saat ini <span className="text-white underline">belum diinisiasi</span>. Pilihlah salah satu sektor di bawah ini untuk memulai pengembangan strategis.</>
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                  <div 
                    key={card.id} 
                    onClick={() => {
                      if (!card.isLocked && card.id === "program") {
                        if (status === 'active') setView('riset');
                        else setShowPriceModal(true);
                      }
                    }}
                    className={`bg-zinc-950/40 border border-zinc-800/80 rounded-[36px] p-8 ${!card.isLocked ? "group hover:border-zinc-700 cursor-pointer shadow-lg hover:shadow-yellow-500/5" : "opacity-70 grayscale-[0.5]"} transition-all flex flex-col items-center text-center relative overflow-hidden h-[420px]`}
                  >
                    {/* Icon Area */}
                    <div className={`w-24 h-24 ${card.bg} rounded-[28px] border ${card.border} flex items-center justify-center mb-6 ${!card.isLocked ? "group-hover:scale-110" : ""} transition-transform duration-500 shadow-xl relative z-10`}>
                      <card.icon className={`h-10 w-10 ${card.color}`} />
                      <div className="absolute -top-2 -right-2 p-1.5 bg-zinc-950 border border-zinc-800 rounded-full">
                         <Lock size={12} className={card.isLocked ? "text-yellow-500" : "text-zinc-600"} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-2">{card.subtitle}</span>
                      <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-4">{card.title}</h3>
                      <p className="text-xs font-medium text-zinc-300 leading-relaxed max-w-[220px] mx-auto">
                        {card.desc}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 w-full relative z-10">
                      {card.isLocked ? (
                        <div className="w-full py-4 rounded-2xl bg-zinc-950/50 border border-zinc-900 text-zinc-600 font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 italic">
                          <Lock size={14} /> Terkunci Sementara
                        </div>
                      ) : (
                        <button 
                          onClick={() => {
                            if (card.id === "program") {
                              if (status === 'active') setView('riset');
                              else setShowPriceModal(true);
                            }
                          }}
                          className="w-full py-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:bg-zinc-900 group-hover:border-zinc-700 font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {card.btnLabel} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </button>
                      )}
                    </div>

                    {/* Background Aura */}
                    {!card.isLocked && (
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 ${card.bg} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] italic text-zinc-400">
          <span>Otoritas Level Supreme Diperlukan</span>
          {status !== 'active' && (
            <div className="flex items-center gap-2">
              <span>Inisiasi Program:</span>
              <span className={`${currentBudget >= 50000000 ? 'text-emerald-500' : 'text-rose-500'}`}>50.000.000</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-300">{Math.round(currentBudget).toLocaleString('id-ID')}</span>
              <span className={currentBudget >= 50000000 ? 'text-emerald-600' : 'text-yellow-600/50'}>GOLD</span>
            </div>
          )}
        </div>
      </div>

      <ModalsHargaProgramNuklir 
        isOpen={showPriceModal} 
        onClose={() => setShowPriceModal(false)} 
        data={data}
        onConfirm={() => {
          setShowPriceModal(false);
          setShowSuccessModal(true);
        }}
      />

      <ModalsBerhasilMembuatProgramNuklir
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          onClose(); // Close the main modal too to refresh the view
        }}
        data={data}
      />
    </div>
  );
}
