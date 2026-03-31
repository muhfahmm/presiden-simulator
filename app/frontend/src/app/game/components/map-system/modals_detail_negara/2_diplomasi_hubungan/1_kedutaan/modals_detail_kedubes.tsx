"use client"

import React from "react";
import { 
  Landmark, X, ShieldCheck, Zap, Globe, Coins, Info, Trash2, 
  ArrowUpCircle, Users, BarChart3, ShieldAlert, Activity 
} from "lucide-react";
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
  const [activeTab, setActiveTab] = React.useState<"overview" | "upgrade" | "staff" | "intel">("overview");
  
  React.useEffect(() => {
    if (isOpen) {
      window.dispatchEvent(new CustomEvent('hide_strategy_modal'));
    }
    
    return () => {
      if (isOpen) {
        window.dispatchEvent(new CustomEvent('show_strategy_modal'));
      }
    };
  }, [isOpen]);

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

  const tabs = [
    { id: "overview", label: "Ikhtisar", icon: Info },
    { id: "upgrade", label: "Upgrade", icon: ArrowUpCircle },
    { id: "staff", label: "Staf", icon: Users },
    { id: "intel", label: "Intelijen", icon: BarChart3 },
  ];

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className={`bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.6)] relative animate-in zoom-in-95 duration-300 transition-all ${
        isConfirmModalOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
      }`}>
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
            className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800/60 rounded-xl cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Custom Tab Navigation */}
        <div className="px-8 flex items-center gap-2 border-b border-zinc-800/50 bg-zinc-900/40">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all relative group cursor-pointer ${
                activeTab === tab.id ? "text-emerald-500" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <tab.icon size={14} className={activeTab === tab.id ? "animate-pulse" : ""} />
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8 pt-6 min-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              {/* Status Overview Card */}
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-zinc-950/40 p-4 rounded-2xl border border-zinc-800/60 flex flex-col gap-1">
                   <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Level Fasilitas</span>
                   <div className="flex items-center gap-2">
                     <Zap className="h-3 w-3 text-emerald-400" />
                     <span className="text-sm font-black text-zinc-200 uppercase tracking-tighter">Konsulat Utama</span>
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
                    className="w-full py-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white font-black rounded-2xl transition-all border border-red-500/20 active:scale-[0.98] shadow-lg text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer"
                 >
                    <Trash2 size={16} />
                    Hancurkan Kedutaan Besar
                 </button>
              </div>
            </div>
          )}

          {activeTab === "upgrade" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
               <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-2xl">
                  <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-widest mb-2 italic">Level Selanjutnya: Kedutaan Besar</h4>
                  <p className="text-[10px] text-zinc-400 leading-relaxed font-medium">Meningkatkan fasilitas ini akan membuka slot Atase Perdagangan dan meningkatkan perolehan poin relasi menjadi +12/bulan.</p>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Persyaratan Material</span>
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest italic">Dana Mencukupi</span>
                  </div>
                  <div className="p-4 bg-zinc-950/40 border border-zinc-800/60 rounded-2xl space-y-3">
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">Biaya Konstruksi</span>
                        <span className="text-xs font-black text-white">$450.000</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">Waktu Pengerjaan</span>
                        <span className="text-xs font-black text-white">45 Hari</span>
                     </div>
                  </div>
               </div>

               <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all border border-emerald-400/20 active:scale-[0.98] shadow-lg text-xs uppercase tracking-[0.2em] shadow-emerald-900/20 cursor-pointer flex items-center justify-center gap-2">
                 <ArrowUpCircle size={16} />
                 Mulai Ekspansi Bangunan
               </button>
            </div>
          )}

          {activeTab === "staff" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
               <div className="flex items-center gap-2 px-1 mb-2">
                  <Users size={14} className="text-blue-400" />
                  <h3 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">Penempatan Atase</h3>
               </div>

               {[
                 { role: "Atase Militer", icon: ShieldAlert, color: "text-red-400", bg: "bg-red-400/5", border: "border-red-400/20", status: "Sudah Terisi", name: "Kolonel Arya Wijaya", bonus: "+5% Intel Pertahanan" },
                 { role: "Atase Perdagangan", icon: Coins, color: "text-amber-400", bg: "bg-amber-400/5", border: "border-amber-400/20", status: "Terkunci", name: "Butuh Fasilitas Level 2", bonus: "+10% Efisiensi Dagang" },
                 { role: "Atase Kebudayaan", icon: Globe, color: "text-blue-400", bg: "bg-blue-400/5", border: "border-blue-400/20", status: "Kosong", name: "Pilih Personel", bonus: "+3 Pts Pengaruh Global" }
               ].map((staff, i) => (
                 <div key={i} className={`${staff.bg} border ${staff.border} rounded-2xl p-4 flex items-center justify-between group transition-all hover:scale-[1.02]`}>
                    <div className="flex items-center gap-4">
                       <div className={`p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 ${staff.color}`}>
                          <staff.icon size={18} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-tight text-white mb-0.5">{staff.role}</span>
                          <span className={`text-[9px] font-bold uppercase tracking-widest ${staff.status === 'Terkunci' ? 'text-zinc-600' : 'text-zinc-400'}`}>{staff.name}</span>
                       </div>
                    </div>
                    <div className="text-right">
                       <span className="text-[9px] font-black text-emerald-500 block">{staff.bonus}</span>
                       <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-tighter cursor-pointer hover:text-white transition-colors">Kelola</span>
                    </div>
                 </div>
               ))}
            </div>
          )}

          {activeTab === "intel" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-950 p-5 rounded-3xl border border-zinc-800/80 space-y-4">
                     <div className="flex items-center justify-between">
                        <Activity size={16} className="text-emerald-500" />
                        <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Optimal</span>
                     </div>
                     <div className="space-y-1">
                        <span className="text-[10px] font-black text-white uppercase tracking-tight">Stabilitas</span>
                        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                           <div className="h-full w-[85%] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-zinc-950 p-5 rounded-3xl border border-zinc-800/80 space-y-4">
                     <div className="flex items-center justify-between">
                        <BarChart3 size={16} className="text-blue-500" />
                        <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Positif</span>
                     </div>
                     <div className="space-y-1">
                        <span className="text-[10px] font-black text-white uppercase tracking-tight">Sentimen</span>
                        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                           <div className="h-full w-[65%] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-2">
                     <ShieldAlert size={14} className="text-amber-500" />
                     <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Log Intelijen Terbaru</h4>
                  </div>
                  <div className="space-y-3">
                     {[
                       "Peningkatan anggaran militer di perbatasan (3 hari lalu)",
                       "Sentimen publik perlahan membaik pasca perjanjian dagang",
                       "Isu kerusuhan kecil di distrik pusat teratasi"
                     ].map((log, i) => (
                       <div key={i} className="flex gap-3 items-start">
                          <div className="w-1 h-1 bg-zinc-700 rounded-full mt-1.5 shrink-0"></div>
                          <p className="text-[9px] text-zinc-500 font-medium leading-relaxed">{log}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          )}
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
