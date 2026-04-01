"use client"

import React, { useEffect, useState } from "react";
import { X, Handshake, Shield, Clock, AlertTriangle, CheckCircle2, Loader2, Info } from "lucide-react";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { relationStorage } from "../1_kedutaan/logic/relationStorage";
import { allRelations } from "@/app/database/data/negara/hubungan/index";
import { nonAggressionStorage } from "./logic/nonAggressionStorage";
import { gameStorage } from "@/app/game/gamestorage";
import TandaTanganPaktaBerhasil from "./tanda_tangan_pakta_berhasil";
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

interface TandaTanganPaktaProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

const COST_MAP = {
  1: 50000,
  5: 250000,
  10: 1000000
};
const REQUIRED_RELATION = 50;

export default function TandaTanganPakta({ isOpen, onClose, targetCountry }: TandaTanganPaktaProps) {
  const [duration, setDuration] = useState<1 | 5 | 10>(1);
  const currentCost = COST_MAP[duration];
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // States for requirements
  const [currentBudget, setCurrentBudget] = useState(0);
  const [relationScore, setRelationScore] = useState(0);
  const [pactStatus, setPactStatus] = useState<string>('none');
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

        // Get Pact Status
        const status = nonAggressionStorage.getStatus(targetCountry);
        setPactStatus(status);
        setRemainingDays(nonAggressionStorage.getRemainingDays(targetCountry));
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
      window.addEventListener("non_aggression_updated", updateDetails);

      // Trigger event to hide main modal
      window.dispatchEvent(new CustomEvent('hide_strategy_modal'));

      return () => {
        window.removeEventListener("relation_status_updated", handleRelationUpdate);
        window.removeEventListener("relation_storage_updated", updateDetails);
        window.removeEventListener("non_aggression_updated", updateDetails);
        window.dispatchEvent(new CustomEvent('show_strategy_modal'));
      };
    }
  }, [isOpen, targetCountry]);

  const handleSignPact = async () => {
    if (currentBudget < currentCost) {
      setError("Anggaran negara tidak mencukupi.");
      return;
    }

    if (relationScore < REQUIRED_RELATION) {
      setError(`Skor hubungan minimal ${REQUIRED_RELATION} diperlukan.`);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Panggil API Route untuk memproses logika di Python (Relocated to standard API)
      const response = await fetch("/api/game/diplomacy/pakta", {
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
        throw new Error(result.error || "Gagal memproses pakta.");
      }

      if (result.eligible) {
        // Potong anggaran (passing delta negatif)
        budgetStorage.updateBudget(-currentCost);
        
        // Simpan status pakta
        nonAggressionStorage.updateStatus(targetCountry, result.data);
        
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
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in zoom-in-95 duration-200">
          
          {/* Header Section */}
          <div className="relative h-32 bg-gradient-to-br from-indigo-900/40 via-zinc-900 to-zinc-900 flex items-center justify-center border-b border-zinc-800">
            <div className="absolute top-4 right-4">
              <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer text-zinc-500">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 mb-3">
                <Handshake className="h-10 w-10 text-indigo-400" />
              </div>
              <h2 className="text-xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
                PAKTA NON-AGRESI <Shield className="h-5 w-5 text-indigo-500" />
              </h2>
            </div>
          </div>

          <div className="p-8 space-y-6">
            {/* Requirements Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-2xl border transition-all ${relationScore >= REQUIRED_RELATION ? 'bg-zinc-900/50 border-zinc-800' : 'bg-red-500/5 border-red-500/20'}`}>
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1 block">Skor Hubungan</span>
                <div className="flex items-center justify-between">
                  <span className={`text-xl font-mono font-bold ${relationScore >= REQUIRED_RELATION ? 'text-zinc-100' : 'text-red-400'}`}>
                    {relationScore}/50
                  </span>
                  {relationScore >= REQUIRED_RELATION ? <CheckCircle2 size={16} className="text-green-500" /> : <AlertTriangle size={16} className="text-red-400" />}
                </div>
              </div>
              <div className={`p-4 rounded-2xl border transition-all ${currentBudget >= currentCost ? 'bg-zinc-900/50 border-zinc-800' : 'bg-red-500/5 border-red-500/20'}`}>
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1 block">Biaya Diplomasi</span>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-mono font-bold ${currentBudget >= currentCost ? 'text-amber-400' : 'text-red-400'}`}>
                    {currentCost.toLocaleString('id-ID')}
                  </span>
                  {currentBudget >= currentCost ? <CheckCircle2 size={16} className="text-green-500" /> : <AlertTriangle size={16} className="text-red-400" />}
                </div>
              </div>
            </div>

            {/* Commitment & Duration Section */}
            <div className="space-y-4">
              {pactStatus === 'active' ? (
                <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)] animate-in fade-in duration-500">
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Clock size={14} className="animate-pulse" /> Sisa Waktu Berlaku
                  </h4>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-black text-zinc-100 italic tracking-tighter">
                      {remainingDays !== null ? remainingDays.toLocaleString('id-ID') : '...'}
                    </span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest pb-1.5 underline decoration-emerald-500/30">HARI LAGI</span>
                  </div>
                  <p className="mt-3 text-[10px] text-zinc-500 italic">
                    *Pakta ini akan berakhir secara otomatis dan harus diperpanjang kembali.
                  </p>
                </div>
              ) : (
                <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/80">
                  <h4 className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Clock size={14} /> Durasi Kontrak
                  </h4>
                  <div className="flex gap-3">
                    {[1, 5, 10].map((y) => (
                      <button
                        key={y}
                        onClick={() => setDuration(y as any)}
                        className={`flex-1 py-3 rounded-xl border font-bold transition-all ${
                          duration === y 
                            ? 'bg-indigo-500/20 border-indigo-500 text-indigo-100 shadow-[0_0_20px_rgba(99,102,241,0.2)]' 
                            : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {y} THN
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-[10px] text-zinc-500 italic">
                    *Melanggar pakta sebelum waktu habis akan dikenakan sanksi reputasi berat.
                  </p>
                </div>
              )}

              <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/80">
                <h4 className="text-xs font-black text-zinc-100 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Shield size={14} className="text-indigo-400" /> Komitmen Dasar
                </h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      <strong className="text-zinc-200">Gencatan Senjata Total:</strong> Larangan serangan unit (Tank, Kapal, Pesawat) ke wilayah lawan.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      <strong className="text-zinc-200">Zona Demiliterisasi (DMZ):</strong> Larangan menempatkan unit tempur skala besar di wilayah perbatasan.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl flex items-center gap-3 text-red-400 text-xs animate-in slide-in-from-top-2">
                <AlertTriangle size={14} />
                {error}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button 
                onClick={onClose}
                className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-xs font-black rounded-xl transition-all uppercase tracking-widest"
              >
                Batal
              </button>
              <button 
                onClick={handleSignPact}
                disabled={isLoading || relationScore < REQUIRED_RELATION || currentBudget < currentCost || pactStatus === 'active'}
                className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white text-xs font-black rounded-xl transition-all shadow-lg shadow-indigo-500/20 uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : pactStatus === 'active' ? (
                  "Pakta Sudah Aktif"
                ) : (
                  "Tanda Tangani Pakta"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <TandaTanganPaktaBerhasil 
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
