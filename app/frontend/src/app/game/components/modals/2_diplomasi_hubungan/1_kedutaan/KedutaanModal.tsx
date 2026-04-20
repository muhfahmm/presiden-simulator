"use client"

import React, { useEffect, useState } from "react";
import { Landmark, X, TrendingUp, TrendingDown, Minus, Loader2 } from "lucide-react";
import { KEDUTAAN_ROUTES, type KedutaanPriceResponse, type KedutaanTimeResponse } from "./routes";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { embassyStorage, EmbassyStatus } from "./logic/embassyStorage";
import ModalJikaUangKurang from "./modals_jika_uang_kurang";
import ModalJikaTerbangun from "./modals_jika_terbangun";
import ModalJikaHubunganKurang from "./modals_jika_hubungan_kurang";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";

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
  userCountry, targetCountry, relationScore,
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
  const [isRelationInsufficientModalOpen, setIsRelationInsufficientModalOpen] = useState(false);
  const [syaratResult, setSyaratResult] = useState<{current_score: number, required_score: number} | null>(null);

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
        sendNotification("CONSTRUCTION_FINISH");
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

  const handleBuild = async () => {
    if (!priceData) return;
    setIsBuilding(true); // Disable button temporarily while verifying
    
    // 1. Verifikasi Syarat Hubungan via Python API
    try {
      const syaratRes = await fetch(KEDUTAAN_ROUTES.GET_SYARAT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ relation_score: relationScore })
      });
      const syaratData = await syaratRes.json();
      
      if (!syaratData.eligible) {
        setSyaratResult(syaratData);
        setIsRelationInsufficientModalOpen(true);
        setIsBuilding(false);
        return;
      }
    } catch (err) {
      console.error("Gagal memvalidasi syarat:", err);
      // Fail open or fail safe? Let's fail safe and block if api errors
      setError("Gagal memvalidasi kelayakan diplomasi");
      setIsBuilding(false);
      return;
    }

    // 2. Verifikasi Uang
    const currentBudget = budgetStorage.getBudget();
    if (currentBudget < priceData.final_price) {
      setIsInsufficientFundsModalOpen(true);
      setIsBuilding(false);
      return;
    }

    setProgress(0);
    setBuildStartDate(timeStorage.getState().gameDate);
    sendNotification("CONSTRUCTION_START");
  };

  if (!isOpen) return null;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID").format(val);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300 pointer-events-none">
      <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] relative animate-in fade-in slide-in-from-bottom-4 duration-300 transition-all pointer-events-auto ${
          isSuccessModalOpen || isInsufficientFundsModalOpen || isRelationInsufficientModalOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
        }`}>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600"></div>
        
        {/* Fixed Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <Landmark className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{userCountry} → {targetCountry}</p>
              <h3 className="text-sm font-black text-white italic uppercase tracking-tight">Pengajuan Kedutaan</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-800/60 rounded-xl border border-transparent hover:border-zinc-700/50 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-8 pt-6 space-y-5 custom-scrollbar">
          {currentStatus !== 'none' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 ${
                currentStatus === 'building' 
                  ? "bg-amber-500/10 border-amber-500/30 animate-pulse" 
                  : "bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              }`}>
                <Landmark className={`h-10 w-10 ${currentStatus === 'building' ? 'text-amber-500' : 'text-emerald-500'}`} />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-zinc-100 italic uppercase tracking-[0.1em]">
                  {currentStatus === 'building' ? "Status: Dalam Pembangunan" : "Status: Kedutaan Aktif"}
                </h4>
                <p className="text-xs text-zinc-500 max-w-[240px] leading-relaxed">
                  {currentStatus === 'building' 
                    ? "Arsitek kami sedang membangun kedutaan di negara tujuan. Harap bersabar sementara hubungan diplomatik didirikan." 
                    : "Hubungan diplomatik resmi telah terjalin. Fasilitas ini memberikan akses penuh ke fungsi-fungsi diplomatik tingkat lanjut."}
                </p>
              </div>
              {currentStatus === 'building' && (
                <div className="w-full max-w-[280px] space-y-3">
                  <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50 p-[1px]">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(245,158,11,0.4)] rounded-full" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Progress Pembangunan</span>
                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] animate-pulse">
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="relative">
                <Loader2 className="h-10 w-10 text-amber-500 animate-spin" />
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse" />
              </div>
              <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.3em] animate-pulse">Menghitung Estimasi Biaya...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 flex flex-col items-center gap-3">
              <div className="text-red-500/20 p-4 border border-red-500/10 rounded-full">
                <X size={40} />
              </div>
              <p className="text-red-400 text-sm font-bold uppercase tracking-tight">{error}</p>
            </div>
          ) : priceData && (
            <>
              {/* Info Grid - Visualized simple cards */}
              <div className="grid grid-cols-2 gap-3">
                 <div className="bg-zinc-800/40 rounded-xl p-3 border border-zinc-700/30">
                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Harga Dasar</p>
                    <p className="text-xs font-black text-zinc-200">{formatCurrency(priceData.base_price)}</p>
                 </div>
                 <div className="bg-zinc-800/40 rounded-xl p-3 border border-zinc-700/30 text-right">
                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-1 text-right">Pengali Global</p>
                    <p className={`text-xs font-black ${priceData.multiplier > 1 ? 'text-red-400' : 'text-emerald-400'}`}>×{priceData.multiplier}</p>
                 </div>
              </div>

              {/* Adjustments Section */}
              <div className="bg-zinc-800/40 rounded-2xl border border-zinc-700/30 overflow-hidden shadow-sm">
                <div className="px-4 pt-4 pb-2 border-b border-zinc-700/20 bg-zinc-800/20 flex items-center gap-2">
                  <TrendingUp size={14} className="text-zinc-500" />
                  <span className="text-[10px] text-zinc-300 font-black uppercase tracking-[0.1em]">Analisis Penyesuaian</span>
                </div>
                <div className="divide-y divide-zinc-700/30">
                  {priceData.adjustments.map((adj, i) => {
                    const isSame = adj.status === "Sama";
                    return (
                      <div key={i} className="flex items-center justify-between px-4 py-3.5 hover:bg-zinc-800/40 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 ${
                            isSame ? "bg-emerald-500/5 border-emerald-500/10 shadow-[0_0_10px_rgba(16,185,129,0.05)]" : "bg-red-500/5 border-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.05)]"
                          }`}>
                            {isSame 
                              ? <TrendingDown size={14} className="text-emerald-400" />
                              : <TrendingUp size={14} className="text-red-400" />
                            }
                          </div>
                          <div>
                            <p className="text-xs font-black text-zinc-100 uppercase tracking-tight">{adj.category}</p>
                            <p className="text-[10px] text-zinc-500 font-medium italic">{adj.detail}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-black ${isSame ? "text-emerald-400" : "text-red-400"} bg-zinc-950/40 px-2 py-1 rounded-md border border-zinc-700/50`}>
                          {adj.change}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Construction Time Card */}
              {timeData && (
                <div className="bg-gradient-to-r from-blue-500/5 to-transparent rounded-2xl p-4 border border-blue-500/20 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:border-blue-400/30 transition-colors">
                      <Loader2 size={18} className="text-blue-400 animate-[spin_4s_linear_infinite]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-500/70 uppercase tracking-[0.2em]">Estimasi Waktu</p>
                      <p className="text-xs font-bold text-zinc-200 mt-0.5">{timeData.details}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-blue-400 italic tracking-tighter">{timeData.final_time} Hari</p>
                    <div className="flex items-center justify-end gap-1">
                       <div className="w-1 h-1 bg-blue-500 animate-pulse rounded-full" />
                       <p className="text-[8px] text-zinc-500 font-black uppercase">Standard Game Time</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Financial State */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                   <div className="flex items-center gap-2">
                      <div className="w-1 h-3 bg-emerald-500/50 rounded-full" />
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Kondisi Finansial</span>
                   </div>
                   <span className="text-[10px] font-black text-zinc-300">{formatCurrency(userBudget)} <span className="text-[8px] text-zinc-500 underline decoration-zinc-700">Saldo Saat Ini</span></span>
                </div>
                <div className="bg-zinc-800/40 rounded-xl p-4 border border-zinc-700/30 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${userBudget >= priceData.final_price ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                       <Minus size={14} />
                    </div>
                    <span className="text-xs text-zinc-400 font-bold uppercase">Estimasi Sisa Saldo</span>
                  </div>
                  <span className={`text-md font-black italic ${userBudget >= priceData.final_price ? 'text-emerald-400' : 'text-red-400'}`}>
                    {formatCurrency(userBudget - priceData.final_price)}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Fixed Footer with Action Button */}
        <div className="p-8 pt-4 border-t border-zinc-800/60 bg-zinc-900/80 backdrop-blur-md z-10">
          {!loading && !error && currentStatus === 'none' && priceData && (
             <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-500/20 via-yellow-500/5 to-amber-600/10 rounded-2xl p-5 border border-amber-500/30 shadow-[0_10px_40px_rgba(245,158,11,0.1)] flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-amber-500 font-black uppercase tracking-[0.2em] block mb-1">Pengeluaran Total</span>
                    <p className="text-xs text-zinc-500 italic">Disetujui oleh Kementerian Keuangan</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-3xl font-black italic tracking-tighter ${userBudget >= priceData.final_price ? 'text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]'}`}>
                      {formatCurrency(priceData.final_price)}
                    </span>
                    <p className="text-[8px] text-zinc-500 font-bold uppercase mt-1">Sertifikasi Diplomatik</p>
                  </div>
                </div>

                <div className="relative group">
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleBuild();
                    }}
                    disabled={isBuilding}
                    className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-2xl transition-all shadow-2xl shadow-amber-900/40 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-4 border-b-4 border-amber-700 hover:border-amber-600 text-xs uppercase tracking-[0.25em] relative overflow-hidden group-hover:translate-y-[-2px]"
                  >
                    {isBuilding ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Membangun... {Math.round(progress)}%</span>
                      </>
                    ) : (
                      <>
                        <Landmark size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                        Bangun Kedutaan Sekarang
                      </>
                    )}
                  </button>
                  {/* Subtle glow behind button */}
                  <div className="absolute inset-x-4 top-0 h-full bg-amber-500/10 blur-2xl -z-10 group-hover:bg-amber-500/20 transition-all" />
                </div>
             </div>
          )}

          {currentStatus !== 'none' && (
             <button 
                onClick={onClose}
                className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-black rounded-2xl transition-all border border-zinc-700/50 active:scale-[0.98] shadow-lg text-xs uppercase tracking-[0.2em]"
             >
                Kembali ke Diplomasi
             </button>
          )}

          {error && (
             <button 
                onClick={onClose}
                className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 font-black rounded-2xl transition-all border border-zinc-700/50"
             >
                Tutup Sesi
             </button>
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

      {syaratResult && (
        <ModalJikaHubunganKurang
          isOpen={isRelationInsufficientModalOpen}
          onClose={() => setIsRelationInsufficientModalOpen(false)}
          currentRelation={syaratResult.current_score}
          requiredRelation={syaratResult.required_score}
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
