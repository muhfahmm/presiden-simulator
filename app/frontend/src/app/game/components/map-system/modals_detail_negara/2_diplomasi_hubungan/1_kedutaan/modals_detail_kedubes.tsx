"use client"

import React from "react";
import { Landmark, X, ShieldCheck, Zap, Globe, Coins, Info, Trash2 } from "lucide-react";
import { allRelations } from "@/app/database/data/negara/hubungan";
import { relationStorage } from "./logic/relationStorage";
import { embassyStorage } from "./logic/embassyStorage";
import ModalKonfirmasiHancurkan from "./modals_konfirmasi_hancurkan";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

interface ModalDetailKedubesProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

export default function ModalDetailKedubes({
  isOpen,
  onClose,
  targetCountry
}: ModalDetailKedubesProps) {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = React.useState(false);

  const sendNotification = async (type: string, extra?: string) => {
    try {
      const res = await fetch("/api/game/diplomacy/kedutaan/notifikasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_type: type,
          target_country: targetCountry,
          extra_info: extra || ""
        })
      });
      const data = await res.json();
      if (!data.error) {
        inboxStorage.addMessage({
          source: data.source,
          subject: data.subject,
          priority: data.priority,
          content: data.content,
          time: timeStorage.getState().gameDate.toLocaleDateString('id-ID', { 
            day: 'numeric', month: 'long', year: 'numeric' 
          })
        });
      }
    } catch (err) {
      console.error("Gagal mengirim notifikasi:", err);
    }
  };

  const handleDestroy = () => {
    // 1. Get current score
    const relationEntry = (allRelations as any)["Malaysia"]?.[targetCountry];
    const baseScore = relationEntry?.score || 50;
    const currentScore = relationStorage.getRelationScore(targetCountry, baseScore);

    // 2. Call Penalty API
    fetch("/api/game/diplomacy/kedutaan/destroy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ current_score: currentScore })
    })
    .then(res => res.json())
    .then(data => {
      // 3. Update Relation
      const penalty = data.penalty || -30;
      relationStorage.updateRelationScore(targetCountry, penalty, baseScore);
      
      // 4. Update Embassy Status
      embassyStorage.updateEmbassyStatus(targetCountry, 'none');
      
      // 5. Success Feedback & Close
      sendNotification("DESTRUCTION", Math.abs(penalty).toString());
      setIsConfirmModalOpen(false);
      onClose();
    })
    .catch(err => {
      console.error("Gagal menghancurkan kedutaan:", err);
      // Fallback if API fails
      relationStorage.updateRelationScore(targetCountry, -30, baseScore);
      embassyStorage.updateEmbassyStatus(targetCountry, 'none');
      setIsConfirmModalOpen(false);
      onClose();
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.6)] relative animate-in zoom-in-95 duration-300">
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div>

        {/* Header */}
        <div className="p-8 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <Landmark className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic leading-none mb-1">
                Kedutaan Besar
              </h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">
                Fasilitas Diplomatik • {targetCountry}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800/60 rounded-xl"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 pt-6 space-y-6">
          {/* Status Overview Card */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-zinc-950/40 p-4 rounded-2xl border border-zinc-800/60 flex flex-col gap-1">
               <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Level Fasilitas</span>
               <div className="flex items-center gap-2">
                 <Zap className="h-3 w-3 text-emerald-400" />
                 <span className="text-sm font-black text-zinc-200">LEVEL 1</span>
               </div>
             </div>
             <div className="bg-zinc-950/40 p-4 rounded-2xl border border-zinc-800/60 flex flex-col gap-1">
               <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Status Hubungan</span>
               <div className="flex items-center gap-2">
                 <ShieldCheck className="h-3 w-3 text-emerald-400" />
                 <span className="text-sm font-black text-emerald-500 uppercase tracking-tighter">TERJALIN</span>
               </div>
             </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-3">
             <div className="flex items-center gap-2 mb-1 px-1">
                <Info size={14} className="text-emerald-500" />
                <h3 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">Manfaat Diplomatik</h3>
             </div>
             <div className="bg-zinc-950/20 border border-zinc-800/40 rounded-2xl p-5 space-y-4">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/5 flex items-center justify-center border border-blue-500/10">
                        <Globe className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-400">Poin Relasi</span>
                   </div>
                   <span className="text-sm font-black text-emerald-400">+5 / Bulan</span>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/5 flex items-center justify-center border border-amber-500/10">
                        <Coins className="h-4 w-4 text-amber-400" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-400">Biaya Perawatan</span>
                   </div>
                   <span className="text-sm font-black text-red-400">-120 / Bulan</span>
                </div>
             </div>
          </div>

          {/* Action Area */}
          <div className="pt-6 border-t border-zinc-800/60 space-y-3">
             <button 
                onClick={() => setIsConfirmModalOpen(true)}
                className="w-full py-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white font-black rounded-2xl transition-all border border-red-500/20 active:scale-[0.98] shadow-lg text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3"
             >
                <Trash2 size={16} />
                Hancurkan Kedutaan Besar
             </button>

             <button 
                onClick={onClose}
                className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-black rounded-2xl transition-all border border-zinc-700/50 active:scale-[0.98] shadow-lg text-xs uppercase tracking-[0.2em]"
             >
                Tutup Detail
             </button>
          </div>
        </div>
      </div>

      <ModalKonfirmasiHancurkan 
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleDestroy}
        targetCountry={targetCountry}
      />
    </div>
  );
}
