"use client"

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";
import { countries, asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/negara/benua/index";
import { Banknote, Landmark, Info, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { diplomacyStorage } from "./logic/diplomacyStorage";
import { getStoredGameDate, addDays, formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

interface KedutaanModalProps {
  isOpen: boolean;
  onClose: () => void;
  userCountry: string;
  targetCountry: string;
}

interface PriceData {
  base_price: number;
  total_price: number;
  modifiers_total_percent: number;
  details: string[];
  construction_duration: number;
}

export default function KedutaanModal({ isOpen, onClose, userCountry, targetCountry }: KedutaanModalProps) {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userBudget, setUserBudget] = useState(0);
  const [embassyStatus, setEmbassyStatus] = useState<'none' | 'building' | 'completed'>('none');
  const [showBuildSuccess, setShowBuildSuccess] = useState(false);

  const getContinent = (countryName: string) => {
    const name = countryName.toLowerCase().trim();
    if (asiaCountries.some(c => c.name_id.toLowerCase() === name || c.name_en.toLowerCase() === name)) return "Asia";
    if (afrikaCountries.some(c => c.name_id.toLowerCase() === name || c.name_en.toLowerCase() === name)) return "Afrika";
    if (eropaCountries.some(c => c.name_id.toLowerCase() === name || c.name_en.toLowerCase() === name)) return "Eropa";
    if (naCountries.some(c => c.name_id.toLowerCase() === name || c.name_en.toLowerCase() === name)) return "Amerika Utara";
    if (saCountries.some(c => c.name_id.toLowerCase() === name || c.name_en.toLowerCase() === name)) return "Amerika Selatan";
    if (oceaniaCountries.some(c => c.name_id.toLowerCase() === name || c.name_en.toLowerCase() === name)) return "Oceania";
    return "Global";
  };

  useEffect(() => {
    if (isOpen) {
      setUserBudget(budgetStorage.getBudget());
      setEmbassyStatus(diplomacyStorage.getStatus(targetCountry));
      fetchPrice();

      const handleUpdate = () => {
        setEmbassyStatus(diplomacyStorage.getStatus(targetCountry));
      };
      window.addEventListener('diplomacy_storage_updated', handleUpdate);
      return () => window.removeEventListener('diplomacy_storage_updated', handleUpdate);
    }
  }, [isOpen, userCountry, targetCountry]);

  const fetchPrice = async () => {
    setLoading(true);
    setError(null);
    try {
      const uData = countries.find(c => c.name_id.toLowerCase() === userCountry.toLowerCase() || c.name_en.toLowerCase() === userCountry.toLowerCase());
      const tData = countries.find(c => c.name_id.toLowerCase() === targetCountry.toLowerCase() || c.name_en.toLowerCase() === targetCountry.toLowerCase());

      if (!uData || !tData) {
        setError("Data negara tidak ditemukan");
        return;
      }

      const res = await fetch('/api/game/diplomacy/kedutaan/price', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_ideology: uData.ideology,
          target_ideology: tData.ideology,
          user_religion: uData.religion,
          target_religion: tData.religion,
          user_continent: getContinent(userCountry),
          target_continent: getContinent(targetCountry)
        })
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setPriceData(data);
    } catch (err) {
      setError("Gagal memuat harga pembangunan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBuild = () => {
    if (!priceData) return;
    if (userBudget < priceData.total_price) {
      alert("Anggaran tidak mencukupi!");
      return;
    }
    
    // Process payment
    budgetStorage.updateBudget(-priceData.total_price);
    
    // Start Construction
    const startDate = getStoredGameDate();
    diplomacyStorage.startConstruction(targetCountry, priceData.construction_duration, startDate);
    
    setEmbassyStatus('building');
    setShowBuildSuccess(true);
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#05060f]/80 animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] relative animate-in zoom-in-95 duration-200">
        
        {/* Decorative Header */}
        <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 p-8 border-b border-zinc-800/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600"></div>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <Landmark className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Pembangunan Kedutaan</h3>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1 italic">Diplomatic Infrastructure Project • {targetCountry}</p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center gap-4 text-zinc-500">
              <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
              <p className="text-xs font-black uppercase tracking-widest animate-pulse">Menghitung Biasi...</p>
            </div>
          ) : error ? (
            <div className="py-8 text-center space-y-4">
              <AlertCircle className="h-12 w-12 text-rose-500 mx-auto opacity-50" />
              <p className="text-zinc-400 font-medium">{error}</p>
              <button 
                onClick={fetchPrice}
                className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-all"
              >
                Coba Lagi
              </button>
            </div>
          ) : embassyStatus === 'completed' ? (
            <div className="py-12 flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-emerald-500/10 rounded-full border border-emerald-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse"></div>
                <Landmark className="h-12 w-12 text-emerald-400 relative z-10" />
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1.5 border-4 border-[#1c1e24]">
                  <CheckCircle2 size={16} className="text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter italic">Misi Diplomatik Aktif</h3>
                <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-xs mx-auto">
                  Kedutaan besar Anda di <span className="text-white font-bold">{targetCountry}</span> telah beroperasi penuh dan siap melayani kepentingan nasional.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-[11px] tracking-[0.3em] rounded-2xl shadow-xl shadow-emerald-600/20 transition-all border border-emerald-500 cursor-pointer active:scale-95 mt-4"
              >
                Kembali ke Diplomasi
              </button>
            </div>
          ) : showBuildSuccess ? (
            <div className="py-12 flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-blue-500/10 rounded-full border border-blue-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse"></div>
                <Loader2 className="h-12 w-12 text-blue-400 relative z-10 animate-spin" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter italic">Konstruksi Dimulai!</h3>
                <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-xs mx-auto">
                  Proyek kedutaan di <span className="text-white font-bold">{targetCountry}</span> telah disetujui. Estimasi selesai dalam <span className="text-blue-400 font-black">{priceData?.construction_duration} hari</span>.
                </p>
              </div>
              <button 
                onClick={() => setShowBuildSuccess(false)}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-[11px] tracking-[0.3em] rounded-2xl shadow-xl shadow-blue-600/20 transition-all border border-blue-500 cursor-pointer active:scale-95 mt-4"
              >
                Lihat Proyek Mendatang
              </button>
            </div>
          ) : embassyStatus === 'building' ? (
            <div className="py-8 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
              {/* Construction Card */}
              <div className="bg-[#0f1115] opacity-100 border border-zinc-800/80 rounded-[2rem] p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[40px] rounded-full animate-pulse"></div>
                
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-2">
                        <Loader2 size={12} className="animate-spin" /> Sedang Dibangun
                      </span>
                      <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Proyek Infrastruktur</h4>
                    </div>
                    <div className="text-right">
                       <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-1 underline decoration-zinc-800">Sisa Waktu</span>
                       <span className="text-2xl font-black text-white italic">{diplomacyStorage.getProject(targetCountry)?.remainingDays || 0} Hari</span>
                    </div>
                  </div>

                  {/* High-fidelity Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-600">
                      <span>Proses Konstruksi</span>
                      <span className={`italic ${
                        Math.round((1 - (diplomacyStorage.getProject(targetCountry)?.remainingDays || 0) / (diplomacyStorage.getProject(targetCountry)?.totalDays || 1)) * 100) < 40 ? 'text-rose-500' :
                        Math.round((1 - (diplomacyStorage.getProject(targetCountry)?.remainingDays || 0) / (diplomacyStorage.getProject(targetCountry)?.totalDays || 1)) * 100) < 70 ? 'text-amber-500' :
                        'text-emerald-500'
                      }`}>
                        {Math.round((1 - (diplomacyStorage.getProject(targetCountry)?.remainingDays || 0) / (diplomacyStorage.getProject(targetCountry)?.totalDays || 1)) * 100)}%
                      </span>
                    </div>
                    <div className="h-4 w-full bg-zinc-950 rounded-full border border-zinc-800/50 p-1 relative shadow-inner">
                      <div 
                        className={`h-full rounded-full shadow-lg transition-all duration-1000 ease-out relative group ${
                          Math.round((1 - (diplomacyStorage.getProject(targetCountry)?.remainingDays || 0) / (diplomacyStorage.getProject(targetCountry)?.totalDays || 1)) * 100) < 40 ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 shadow-rose-600/20' :
                          Math.round((1 - (diplomacyStorage.getProject(targetCountry)?.remainingDays || 0) / (diplomacyStorage.getProject(targetCountry)?.totalDays || 1)) * 100) < 70 ? 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 shadow-amber-600/20' :
                          'bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 shadow-emerald-600/20'
                        }`}
                        style={{ width: `${(1 - (diplomacyStorage.getProject(targetCountry)?.remainingDays || 0) / (diplomacyStorage.getProject(targetCountry)?.totalDays || 1)) * 100}%` }}
                      >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="bg-[#090a0c] p-4 rounded-2xl border border-zinc-800/50">
                      <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1">Dimulai Pada</p>
                      <p className="text-xs font-black text-zinc-300 italic">
                        {formatGameDate(new Date(diplomacyStorage.getProject(targetCountry)?.startDate || Date.now()))}
                      </p>
                    </div>
                    <div className="bg-[#090a0c] p-4 rounded-2xl border border-zinc-800/50">
                      <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1">Estimasi Selesai</p>
                      <p className="text-xs font-black text-amber-500 italic">
                        {formatGameDate(addDays(new Date(diplomacyStorage.getProject(targetCountry)?.startDate || Date.now()), diplomacyStorage.getProject(targetCountry)?.totalDays || 0))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-2xl flex items-start gap-4">
                <Info size={16} className="text-amber-500 mt-0.5 shrink-0" />
                <p className="text-xs text-zinc-400 leading-relaxed italic">
                  Proyek sedang berjalan sesuai jadwal. Tim diplomatik dan insinyur sedang mempersiapkan fasilitas kelas dunia di <span className="text-zinc-200">{targetCountry}</span> untuk memperkuat pengaruh nasional Anda.
                </p>
              </div>

              <button 
                onClick={onClose}
                className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 font-black uppercase text-[11px] tracking-[0.3em] rounded-2xl border border-zinc-800 transition-all active:scale-95"
              >
                Tutup Sementara
              </button>
            </div>
          ) : priceData && (
            <>
              {/* Price Display */}
              <div className="bg-[#0f1115] border border-zinc-800/80 rounded-3xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] rounded-full"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Total Anggaran Dibutuhkan</p>
                    <h4 className={`text-4xl font-black italic tabular-nums leading-none ${userBudget >= priceData.total_price ? 'text-white' : 'text-rose-500'}`}>
                      {priceData.total_price.toLocaleString('id-ID')}
                    </h4>
                  </div>
                  <div className={`px-4 py-2 rounded-2xl border text-[11px] font-black uppercase tracking-tighter italic ${priceData.modifiers_total_percent > 0 ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'}`}>
                    {priceData.modifiers_total_percent > 0 ? '+' : ''}{priceData.modifiers_total_percent}% Penyesuaian
                  </div>
                </div>
                
                {/* Duration Display */}
                <div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center justify-between relative z-10">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Durasi Konstruksi</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white italic tabular-nums leading-none">
                        {priceData?.construction_duration || "0"}
                      </span>
                      <span className="text-lg font-black text-zinc-400 italic uppercase">Hari</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">Proyek Diplomatik</span>
                  </div>
                </div>
              </div>

              {/* Breakdown Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-zinc-500 px-1">
                  <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Info size={12} className="text-blue-500" />
                    Rincian Perhitungan
                  </span>
                  <span className="text-[9px] font-bold uppercase italic opacity-60">Biaya Dasar: {priceData.base_price.toLocaleString('id-ID')}</span>
                </div>
                <div className="space-y-2.5">
                  {priceData.details.map((detail, idx) => {
                    const isIncrease = detail.includes('+');
                    return (
                      <div key={idx} className="flex items-center justify-between p-4 bg-[#0f1115] border border-zinc-800/40 rounded-2xl text-[11px] font-bold group hover:border-zinc-700/50 transition-colors">
                        <span className="text-zinc-300">{detail.split(':')[0]}</span>
                        <span className={`italic uppercase tracking-tighter ${isIncrease ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {detail.split(':')[1]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-4">
                <button 
                  onClick={onClose}
                  className="py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 font-black uppercase text-[11px] tracking-[0.2em] rounded-2xl border border-zinc-800 transition-all active:scale-95 cursor-pointer"
                >
                  Batalkan
                </button>
                <button 
                  onClick={handleBuild}
                  disabled={userBudget < priceData.total_price}
                  className={`py-4 font-black uppercase text-[11px] tracking-[0.2em] rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl ${
                    userBudget >= priceData.total_price 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20 border border-blue-500 cursor-pointer' 
                    : 'bg-zinc-800 text-zinc-600 border border-zinc-700 cursor-not-allowed opacity-50'
                  }`}
                >
                  <CheckCircle2 size={16} />
                  Bayar & Bangun
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer Stats */}
        <div className="bg-[#0f1115] p-4 border-t border-zinc-800/30 flex justify-between items-center px-8">
           <div className="flex items-center gap-3">
              <Banknote size={14} className={userBudget >= (priceData?.total_price || 0) ? "text-emerald-500" : "text-rose-500"} />
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest leading-none mb-0.5">Saldo Tersedia</span>
                <span className={`text-[12px] font-black italic tabular-nums leading-none ${userBudget >= (priceData?.total_price || 0) ? "text-zinc-200" : "text-rose-500"}`}>
                  {userBudget.toLocaleString('id-ID')}
                </span>
              </div>
           </div>
           <p className="text-[8px] text-zinc-600 font-black uppercase tracking-[0.2em] opacity-40 italic">EM4 Strategic Diplomatic Protocol</p>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
