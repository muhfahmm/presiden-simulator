"use client"

import React, { useEffect, useState } from "react";
import { Landmark, X, TrendingUp, TrendingDown, Minus, Loader2 } from "lucide-react";
import { KEDUTAAN_ROUTES, type KedutaanPriceResponse, type KedutaanTimeResponse } from "./routes";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { embassyStorage, EmbassyStatus } from "./logic/embassyStorage";
import ModalJikaUangKurang from "./modals_jika_uang_kurang";
import ModalJikaTerbangun from "./modals_jika_terbangun";

interface KedutaanModalProps {
  isOpen: boolean;
  onClose: () => void;
  userCountry: string;
  targetCountry: string;
  relationScore: number;
  relationLabel: string;
  relationColor: string;
  userReligion?: string;
  targetReligion?: string;
  userIdeology?: string;
  targetIdeology?: string;
  userContinent?: string;
  targetContinent?: string;
  userRegion?: string;
  targetRegion?: string;
}

export default function KedutaanModal({ 
  isOpen, onClose,
  userCountry, targetCountry,
  userReligion = "Sekuler", targetReligion = "Sekuler",
  userIdeology = "Netral", targetIdeology = "Netral",
  userContinent = "Global", targetContinent = "Global",
  userRegion = "Global", targetRegion = "Global",
}: KedutaanModalProps) {
  const [priceData, setPriceData] = useState<KedutaanPriceResponse | null>(null);
  const [timeData, setTimeData] = useState<KedutaanTimeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBuilding, setIsBuilding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buildStartDate, setBuildStartDate] = useState<Date | null>(null);
  const [currentStatus, setCurrentStatus] = useState<EmbassyStatus>('none');
  const [userBudget, setUserBudget] = useState<number>(0);
  const [isInsufficientFundsModalOpen, setIsInsufficientFundsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    setUserBudget(budgetStorage.getBudget());
    
    const handleUpdate = () => setUserBudget(budgetStorage.getBudget());
    window.addEventListener('budget_storage_updated', handleUpdate);
    return () => window.removeEventListener('budget_storage_updated', handleUpdate);
  }, []);

  useEffect(() => {
    setCurrentStatus(embassyStorage.getEmbassyStatus(targetCountry));
    
    if (isOpen) {
      window.dispatchEvent(new CustomEvent('hide_strategy_modal'));
    }
    
    return () => {
      if (isOpen) {
        window.dispatchEvent(new CustomEvent('show_strategy_modal'));
      }
    };
  }, [targetCountry, isOpen]);

  // Game Time Sync for Construction Progress
  useEffect(() => {
    if (!isBuilding || !buildStartDate || !timeData) return;

    const unsubscribe = timeStorage.subscribe((gameDate) => {
      const diffTime = gameDate.getTime() - buildStartDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      const totalDays = timeData.final_time;
      const newProgress = Math.min((diffDays / totalDays) * 100, 100);
      
      setProgress(newProgress);

      if (diffDays >= totalDays) {
        // Construction Finished
        budgetStorage.updateBudget(-priceData!.final_price);
        embassyStorage.updateEmbassyStatus(targetCountry, 'completed');
        setIsBuilding(false);
        setBuildStartDate(null);
        setProgress(0);
        setIsSuccessModalOpen(true);
      }
    });

    return () => unsubscribe();
  }, [isBuilding, buildStartDate, timeData, targetCountry, priceData, onClose]);

  useEffect(() => {
    if (!isOpen || currentStatus !== 'none') return;
    setLoading(true);
    setError(null);

    // Fetch Price Data
    const fetchPrice = fetch(KEDUTAAN_ROUTES.GET_PRICE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        user_country: userCountry,
        target_country: targetCountry,
        user_ideology: userIdeology,
        target_ideology: targetIdeology,
        user_religion: userReligion,
        target_religion: targetReligion,
        user_continent: userContinent,
        target_continent: targetContinent,
      })
    }).then(res => res.json());

    // Fetch Time Data
    const fetchTime = fetch(KEDUTAAN_ROUTES.GET_TIME, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_region: userRegion,
        target_region: targetRegion,
        user_continent: userContinent,
        target_continent: targetContinent,
      })
    }).then(res => res.json());

    Promise.all([fetchPrice, fetchTime])
      .then(([price, time]) => {
        setPriceData(price);
        setTimeData(time);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Gagal memuat data diplomatik");
        setLoading(false);
      });
  }, [isOpen, currentStatus, userCountry, targetCountry, userIdeology, targetIdeology, userReligion, targetReligion, userContinent, targetContinent, userRegion, targetRegion]);

  const handleBuild = () => {
    if (!priceData) return;
    
    const currentBudget = budgetStorage.getBudget();
    if (currentBudget < priceData.final_price) {
      setIsInsufficientFundsModalOpen(true);
      return;
    }

    setIsBuilding(true);
    setProgress(0);
    setBuildStartDate(timeStorage.getState().gameDate);
  };

  if (!isOpen) return null;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID").format(val);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600"></div>
        
        {/* Header */}
        <div className="p-8 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <Landmark className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <p className="text-[11px] text-zinc-500 font-medium">{userCountry} → {targetCountry}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-1.5 hover:bg-zinc-800/60 rounded-lg"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 space-y-4">
          {currentStatus !== 'none' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${
                currentStatus === 'building' 
                  ? "bg-amber-500/10 border-amber-500/30 animate-pulse" 
                  : "bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              }`}>
                <Landmark className={`h-8 w-8 ${currentStatus === 'building' ? 'text-amber-500' : 'text-emerald-500'}`} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100 italic uppercase tracking-widest">
                  {currentStatus === 'building' ? "Dalam Pembangunan" : "Kedutaan Besar Aktif"}
                </h4>
                <p className="text-xs text-zinc-500 mt-1 max-w-[200px]">
                  {currentStatus === 'building' 
                    ? "Arsitek kami sedang membangun kedutaan di negara tujuan." 
                    : "Hubungan diplomatik telah terjalin melalui kedutaan besar."}
                </p>
              </div>
              {currentStatus === 'building' && (
                <div className="w-full max-w-[250px] space-y-2 text-center">
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(245,158,11,0.3)]" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] animate-pulse">
                    Proses: {Math.round(progress)}%
                  </p>
                </div>
              )}
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-lg transition-colors border border-zinc-700/50"
              >
                Tutup
              </button>
            </div>
          ) : loading ? (
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <Loader2 className="h-7 w-7 text-amber-500 animate-spin" />
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest">Menghitung biaya...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          ) : priceData && (
            <>
              {/* Base Price */}
              <div className="bg-zinc-800/40 rounded-xl p-3.5 border border-zinc-700/30">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Harga Dasar</span>
                  <span className="text-sm font-bold text-zinc-300">{formatCurrency(priceData.base_price)}</span>
                </div>
              </div>

              {/* Adjustments */}
              <div className="bg-zinc-800/40 rounded-xl border border-zinc-700/30 overflow-hidden">
                <div className="px-3.5 pt-3 pb-1.5">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Penyesuaian Harga</span>
                </div>
                <div className="divide-y divide-zinc-700/30">
                  {priceData.adjustments.map((adj, i) => {
                    const isSame = adj.status === "Sama";
                    return (
                      <div key={i} className="flex items-center justify-between px-3.5 py-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                            isSame ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-red-500/10 border border-red-500/20"
                          }`}>
                            {isSame 
                              ? <TrendingDown size={12} className="text-emerald-400" />
                              : <TrendingUp size={12} className="text-red-400" />
                            }
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-zinc-300">{adj.category}</p>
                            <p className="text-[10px] text-zinc-500">{adj.detail}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-bold ${isSame ? "text-emerald-400" : "text-red-400"}`}>
                          {adj.change}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Construction Time */}
              {timeData && (
                <div className="bg-zinc-800/20 rounded-xl p-4 border border-zinc-700/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                      <TrendingDown size={14} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Waktu Pembangunan</p>
                      <p className="text-xs font-semibold text-zinc-300">{timeData.details}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-blue-400 italic">{timeData.final_time} Hari</p>
                    <p className="text-[9px] text-zinc-500 font-bold uppercase">Game Time</p>
                  </div>
                </div>
              )}

              {/* Multiplier */}
              <div className="bg-zinc-800/40 rounded-xl p-3.5 border border-zinc-700/30">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Pengali Total</span>
                  <div className="flex items-center gap-1.5">
                    {priceData.multiplier > 1 ? (
                      <TrendingUp size={12} className="text-red-400" />
                    ) : priceData.multiplier < 1 ? (
                      <TrendingDown size={12} className="text-emerald-400" />
                    ) : (
                      <Minus size={12} className="text-zinc-400" />
                    )}
                    <span className={`text-sm font-bold ${
                      priceData.multiplier > 1 ? "text-red-400" : priceData.multiplier < 1 ? "text-emerald-400" : "text-zinc-300"
                    }`}>
                      ×{priceData.multiplier}
                    </span>
                  </div>
                </div>
              </div>

              {/* User Budget Detail */}
              <div className="bg-zinc-800/20 rounded-xl border border-zinc-700/20 overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-700/20 flex justify-between items-center bg-zinc-800/10">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none mt-0.5">Saldo Kas Negara</span>
                  <span className="text-sm font-black text-zinc-300 leading-none">{formatCurrency(userBudget)}</span>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${userBudget >= priceData.final_price ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`} />
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none mt-0.5">Sisa Saldo Estimasi</span>
                  </div>
                  <span className={`text-sm font-black leading-none ${userBudget >= priceData.final_price ? 'text-emerald-400' : 'text-red-400'}`}>
                    {formatCurrency(userBudget - priceData.final_price)}
                  </span>
                </div>
              </div>

              {/* Final Price */}
              <div className="bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-amber-600/10 rounded-xl p-6 border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.08)]">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-amber-400/80 font-bold uppercase tracking-wider">Total Biaya</span>
                  <span className={`text-2xl font-black select-none ${userBudget >= priceData.final_price ? 'text-amber-400' : 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]'}`}>
                    {formatCurrency(priceData.final_price)}
                  </span>
                </div>
              </div>

              {/* Build Button */}
              <div className="pt-2 relative z-[3000]">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleBuild();
                  }}
                  disabled={isBuilding}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-xl transition-all shadow-xl shadow-amber-500/20 active:scale-[0.95] cursor-pointer flex items-center justify-center gap-3 border-2 border-amber-400/50 text-sm uppercase tracking-widest pointer-events-auto relative z-[3001] overflow-hidden"
                >
                  {isBuilding ? (
                    <>
                      <div 
                        className="absolute inset-0 bg-white/20 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                      <Loader2 size={18} className="animate-spin relative z-10" />
                      <span className="relative z-10">Membangun... {Math.round(progress)}%</span>
                    </>
                  ) : (
                    <>
                      <Landmark size={18} />
                      Bangun Kedutaan
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {priceData && (
        <ModalJikaUangKurang 
          isOpen={isInsufficientFundsModalOpen}
          onClose={() => setIsInsufficientFundsModalOpen(false)}
          currentBudget={userBudget}
          requiredCost={priceData.final_price}
        />
      )}

      <ModalJikaTerbangun 
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
          onClose();
        }}
        targetCountry={targetCountry}
      />
    </div>
  );
}
