"use client"

import React, { useEffect, useState } from "react";
import { X, Handshake, Shield, Clock, AlertTriangle, CheckCircle2, Loader2, Info, Swords, Zap, Activity } from "lucide-react";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { relationStorage } from "../1_kedutaan/logic/relationStorage";
import { allRelations } from "@/app/database/data/negara/hubungan/index";
import { aliansiStorage } from "./logic/aliansiStorage";
import { gameStorage } from "@/app/game/gamestorage";
import AliansiBerhasil from "./AliansiBerhasil";
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

interface TandaTanganAliansiProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

const COST_MAP = {
  1: 1000000,
  5: 5000000,
  10: 25000000
};
const REQUIRED_RELATION = 75;

export default function TandaTanganAliansi({ isOpen, onClose, targetCountry }: TandaTanganAliansiProps) {
  const [duration, setDuration] = useState<1 | 5 | 10>(1);
  const currentCost = COST_MAP[duration];
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // States for requirements
  const [currentBudget, setCurrentBudget] = useState(0);
  const [relationScore, setRelationScore] = useState(0);
  const [aliansiStatus, setAliansiStatus] = useState<string>('none');
  const [remainingDays, setRemainingDays] = useState<number | null>(null);

  // Load requirements on mount
  useEffect(() => {
    if (isOpen && targetCountry) {
      const updateDetails = () => {
        // Get Budget
        const budget = budgetStorage.getBudget();
        setCurrentBudget(budget);

        // Get Relation Score
        const userCountry = (typeof window !== 'undefined' ? localStorage.getItem("selectedCountry") : "") || "";
        const userId = userCountry.toLowerCase().trim();
        const targetId = targetCountry.toLowerCase().trim();
        
        const userRelations = (allRelations as any)[userId];
        const relationData = Array.isArray(userRelations) 
          ? userRelations.find((r: any) => r.name?.toLowerCase().trim() === targetId)
          : null;
        const baseScore = relationData?.relation !== undefined ? relationData.relation : 50;
        const score = relationStorage.getRelationScore(targetId, baseScore);
        setRelationScore(score);

        // Get Status
        const status = aliansiStorage.getStatus(targetCountry);
        setAliansiStatus(status);
        setRemainingDays(aliansiStorage.getRemainingDays(targetCountry));
      };

      updateDetails();

      // Real-time Relation Balance Updates
      const handleRelationUpdate = (e: any) => {
        const targetId = targetCountry.toLowerCase().trim();
        if (e.detail?.targetCountry === targetId) {
          setRelationScore(e.detail.newScore);
        }
      };

      window.addEventListener("relation_status_updated", handleRelationUpdate);
      window.addEventListener("relation_storage_updated", updateDetails);
      window.addEventListener("aliansi_updated", updateDetails);

      // Trigger event to hide main modal
      window.dispatchEvent(new CustomEvent('hide_strategy_modal'));

      return () => {
        window.removeEventListener("relation_status_updated", handleRelationUpdate);
        window.removeEventListener("relation_storage_updated", updateDetails);
        window.removeEventListener("aliansi_updated", updateDetails);
        window.dispatchEvent(new CustomEvent('show_strategy_modal'));
      };
    }
  }, [isOpen, targetCountry]);

  const handleSignAlliance = async () => {
    if (currentBudget < currentCost) {
      setError("Anggaran negara tidak mencukupi untuk Aliansi Militer.");
      return;
    }

    if (relationScore < REQUIRED_RELATION) {
      setError(`Butuh kepercayaan lebih tinggi (Minimal ${REQUIRED_RELATION}) untuk Aliansi.`);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/game/diplomacy/aliansi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          relation_score: relationScore,
          duration_years: duration,
          starting_date: getStoredGameDate().toISOString()
        })
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || "Gagal memproses aliansi.");
      }

      if (result.eligible) {
        // Potong anggaran
        budgetStorage.updateBudget(-currentCost);
        
        // Simpan status
        aliansiStorage.updateStatus(targetCountry, result.data);
        
        setShowSuccessModal(true);
      } else {
        setError(result.message);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-[0_0_100px_rgba(20,184,166,0.15)] relative animate-in zoom-in-95 duration-200">
          
          {/* Header Section */}
          <div className="relative h-32 bg-gradient-to-br from-teal-900/40 via-zinc-900 to-zinc-900 flex items-center justify-center border-b border-zinc-800">
            <div className="absolute top-4 right-4">
              <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer text-zinc-500">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-teal-500/10 rounded-2xl border border-teal-500/20 mb-3 shadow-[0_0_30px_rgba(20,184,166,0.1)]">
                <Swords className="h-10 w-10 text-teal-400" />
              </div>
              <h2 className="text-xl font-black text-zinc-100 tracking-tighter italic uppercase flex items-center gap-2">
                ALIANSI PERTAHANAN <Shield className="h-5 w-5 text-teal-500" />
              </h2>
            </div>
          </div>

          <div className="p-8 space-y-6">
            {/* Requirements Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-2xl border transition-all ${relationScore >= REQUIRED_RELATION ? 'bg-zinc-900/50 border-zinc-800' : 'bg-red-500/5 border-red-500/20'}`}>
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1 block">Tingkat Kepercayaan</span>
                <div className="flex items-center justify-between">
                  <span className={`text-xl font-mono font-bold ${relationScore >= REQUIRED_RELATION ? 'text-zinc-100' : 'text-red-400'}`}>
                    {relationScore}/{REQUIRED_RELATION}
                  </span>
                  {relationScore >= REQUIRED_RELATION ? <CheckCircle2 size={16} className="text-teal-500" /> : <AlertTriangle size={16} className="text-red-400" />}
                </div>
              </div>
              <div className={`p-4 rounded-2xl border transition-all ${currentBudget >= currentCost ? 'bg-zinc-900/50 border-zinc-800' : 'bg-red-500/5 border-red-500/20'}`}>
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1 block">Biaya Militer</span>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-mono font-bold ${currentBudget >= currentCost ? 'text-emerald-400' : 'text-red-400'}`}>
                    {currentCost.toLocaleString('id-ID')}
                  </span>
                  {currentBudget >= currentCost ? <CheckCircle2 size={16} className="text-teal-500" /> : <AlertTriangle size={16} className="text-red-400" />}
                </div>
              </div>
            </div>

            {/* Commitment & Duration Section */}
            <div className="space-y-4">
              {aliansiStatus === 'active' ? (
                <div className="bg-teal-500/5 p-6 rounded-2xl border border-teal-500/20 shadow-[0_0_30px_rgba(20,184,166,0.05)] animate-in fade-in duration-500">
                  <h4 className="text-xs font-black text-teal-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Clock size={14} className="animate-pulse" /> Sisa Masa Aliansi
                  </h4>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-black text-zinc-100 italic tracking-tighter">
                      {remainingDays !== null ? remainingDays.toLocaleString('id-ID') : '...'}
                    </span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest pb-1.5 underline decoration-teal-500/30">HARI LAGI</span>
                  </div>
                </div>
              ) : (
                <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/80">
                  <h4 className="text-xs font-black text-teal-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Clock size={14} /> Jangka Waktu Aliansi
                  </h4>
                  <div className="flex gap-3">
                    {[1, 5, 10].map((y) => (
                      <button
                        key={y}
                        onClick={() => setDuration(y as any)}
                        className={`flex-1 py-3 rounded-xl border font-bold transition-all ${
                          duration === y 
                            ? 'bg-teal-500/20 border-teal-500 text-teal-100 shadow-[0_0_20px_rgba(20,184,166,0.2)]' 
                            : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {y} THN
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/80">
                <h4 className="text-xs font-black text-zinc-100 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Zap size={14} className="text-teal-400" /> Manfaat Strategis
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4 p-3 bg-zinc-900/40 rounded-xl border border-zinc-800/40 hover:border-teal-500/30 transition-all group">
                    <div className="h-6 w-6 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0 border border-teal-500/20 group-hover:bg-teal-500/20">
                      <Shield size={12} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-zinc-200 uppercase tracking-tight">Bantuan Pertahanan</p>
                      <p className="text-[10px] text-zinc-500 leading-tight">Sekutu wajib membantu jika Anda diserang oleh negara lain.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-zinc-900/40 rounded-xl border border-zinc-800/40 hover:border-teal-500/30 transition-all group">
                    <div className="h-6 w-6 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0 border border-teal-500/20 group-hover:bg-teal-500/20">
                      <Swords size={12} className="text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-zinc-200 uppercase tracking-tight">Latihan Bersama</p>
                      <p className="text-[10px] text-zinc-500 leading-tight">Meningkatkan kesiapan militer dan efektivitas unit tempur.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl flex items-center gap-3 text-red-400 text-[11px] animate-in slide-in-from-top-2">
                <AlertTriangle size={14} />
                {error}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button 
                onClick={onClose}
                className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-xs font-black rounded-xl transition-all uppercase tracking-widest"
              >
                Tutup
              </button>
              <button 
                onClick={handleSignAlliance}
                disabled={isLoading || relationScore < REQUIRED_RELATION || currentBudget < currentCost || aliansiStatus === 'active'}
                className="flex-1 py-4 bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:hover:bg-teal-600 text-white text-xs font-black rounded-xl transition-all shadow-lg shadow-teal-500/20 uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : aliansiStatus === 'active' ? (
                  "ALIANSI SEDANG AKTIF"
                ) : (
                  "Bentuk Aliansi Militer"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AliansiBerhasil 
        isOpen={showSuccessModal} 
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
        targetCountry={targetCountry}
        duration={duration}
      />
    </>
  );
}
