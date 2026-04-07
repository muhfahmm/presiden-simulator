"use client"

import React, { useEffect, useState } from "react";
import { X, ShoppingBag, Globe, Info, AlertTriangle, CheckCircle2, Loader2, DollarSign, Handshake, TrendingUp } from "lucide-react";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { relationStorage } from "../1_kedutaan/logic/relationStorage";
import { allRelations } from "@/app/database/data/negara/hubungan/index";
import { tradeStorage } from "./logic/tradeStorage";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { getDiplomacyCostModifier } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/ReligionEffectLogic";

interface TandaTanganDagangProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

const REQUIRED_RELATION = 40;
const COST = 25000;

export default function TandaTanganDagang({ isOpen, onClose, targetCountry }: TandaTanganDagangProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // States for requirements
  const [currentBudget, setCurrentBudget] = useState(0);
  const [relationScore, setRelationScore] = useState(0);

  // Dynamic Cost Calculation
  const BASE_COST = 25000;
  const userCountry = (typeof window !== 'undefined' ? localStorage.getItem("selectedCountry") : "") || "";
  const currentReligion = religionStorage.getCurrentReligion(""); // fallback
  const costModifier = getDiplomacyCostModifier(targetCountry, currentReligion);
  const dynamicCost = BASE_COST * costModifier;

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
      window.addEventListener("budget_storage_updated", updateDetails);

      return () => {
        window.removeEventListener("relation_status_updated", handleRelationUpdate);
        window.removeEventListener("relation_storage_updated", updateDetails);
        window.removeEventListener("budget_storage_updated", updateDetails);
      };
    }
  }, [isOpen, targetCountry]);

  const handleSignTrade = async () => {
    if (currentBudget < dynamicCost) {
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
      const response = await fetch("/api/game/diplomacy/dagang", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ relation_score: relationScore })
      });

      const result = await response.json();

      if (!response.ok || result.error) throw new Error(result.error || "Gagal memproses perjanjian.");

      if (result.eligible) {
        // 1. Deduct Budget
        budgetStorage.updateBudget(-dynamicCost);
        
        // 2. Update Storage
        tradeStorage.updateTradeStatus(targetCountry, 'active');
        
        // 3. Close & Notify
        onClose();
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
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in zoom-in-95 duration-200">
        
        {/* Header Section */}
        <div className="relative h-32 bg-gradient-to-br from-amber-600/40 via-zinc-900 to-zinc-900 flex items-center justify-center border-b border-zinc-800">
          <div className="absolute top-4 right-4">
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer text-zinc-500">
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 mb-3">
              <Handshake className="h-10 w-10 text-amber-500" />
            </div>
            <h2 className="text-xl font-bold text-zinc-100 tracking-tight flex items-center gap-2 uppercase italic">
              BENTUK KERJASAMA DAGANG <DollarSign className="h-5 w-5 text-amber-500" />
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
                  {relationScore}/{REQUIRED_RELATION}
                </span>
                {relationScore >= REQUIRED_RELATION ? <CheckCircle2 size={16} className="text-emerald-500" /> : <AlertTriangle size={16} className="text-red-400" />}
              </div>
            </div>
            <div className={`p-4 rounded-2xl border transition-all ${currentBudget >= dynamicCost ? 'bg-zinc-900/50 border-zinc-800' : 'bg-red-500/5 border-red-500/20'}`}>
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1 block">Biaya Diplomasi</span>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-mono font-bold ${currentBudget >= dynamicCost ? 'text-amber-400' : 'text-red-400'}`}>
                  {dynamicCost.toLocaleString('id-ID')}
                </span>
                {currentBudget >= dynamicCost ? <CheckCircle2 size={16} className="text-emerald-500" /> : <AlertTriangle size={16} className="text-red-400" />}
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/80">
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Info size={14} /> Manfaat Perdagangan
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <TrendingUp size={16} className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-200 font-bold mb-0.5">Pertumbuhan Ekonomi Terjamin</p>
                  <p className="text-[10px] text-zinc-500">Meningkatkan PDB harian negara secara konstan melalui ekspor-impor.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Globe size={16} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-200 font-bold mb-0.5">Akses Komoditas Global</p>
                  <p className="text-[10px] text-zinc-500">Mempermudah pemenuhan kebutuhan stok sumber daya alam dalam negeri.</p>
                </div>
              </div>
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
              onClick={handleSignTrade}
              disabled={isLoading || relationScore < REQUIRED_RELATION || currentBudget < dynamicCost}
              className="flex-1 py-4 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:hover:bg-amber-600 text-white text-xs font-black rounded-xl transition-all shadow-lg shadow-amber-500/20 uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                "Tanda Tangani Perjanjian"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
