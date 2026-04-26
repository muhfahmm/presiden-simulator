import React from "react";
import { X, Globe, ShieldQuestion, Send, Clock, AlertTriangle } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { calculateTradeProposal } from "./tradeProposalLogic";

interface PengajuanMitraModalProps {
  isOpen: boolean;
  onClose: () => void;
  playerCountry: CountryData | null;
  targetCountry: CountryData | null;
  onConfirm: (target: CountryData, waitDays: number, chance: number) => void;
}

export function PengajuanMitraModal({
  isOpen,
  onClose,
  playerCountry,
  targetCountry,
  onConfirm
}: PengajuanMitraModalProps) {
  if (!isOpen || !targetCountry || !playerCountry) return null;

  const calculation = calculateTradeProposal(playerCountry, targetCountry);

  const getStatusColor = (isMatch: boolean) => isMatch ? "text-green-400" : "text-red-400";
  const getStatusBg = (isMatch: boolean) => isMatch ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20";
  const getChanceColor = (chance: number) => {
    if (chance >= 80) return "text-green-400";
    if (chance >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden scale-in-center">
        {/* Header */}
        <div className="px-6 py-5 border-b border-zinc-900 flex items-center justify-between bg-zinc-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <ShieldQuestion className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white uppercase italic tracking-widest leading-none">Pengajuan Perdagangan</h3>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Estimasi Keberhasilan Diplomasi</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Target Country Info */}
          <div className="flex items-center justify-center gap-6 pb-6 border-b border-zinc-900">
            {(() => {
              const getCountryCode = (emoji: string) => {
                const chars = [...emoji];
                if (chars.length < 2) return "";
                return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
              };
              const playerCode = getCountryCode(playerCountry.flag);
              const targetCode = getCountryCode(targetCountry.flag);

              return (
                <>
                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-10 rounded-lg overflow-hidden border border-zinc-800 mb-2">
                       {playerCode ? (
                         <img src={`https://flagcdn.com/w160/${playerCode}.png`} alt={playerCountry.name_id} className="w-full h-full object-cover" />
                       ) : <Globe className="h-6 w-6 text-zinc-700" />}
                    </div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{playerCountry.name_id}</div>
                  </div>
                  <div className="text-zinc-600 flex flex-col items-center">
                    <Globe className="h-5 w-5 mb-1 opacity-50" />
                    <div className="h-[1px] w-12 bg-zinc-800"></div>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-10 rounded-lg overflow-hidden border border-zinc-800 mb-2">
                       {targetCode ? (
                         <img src={`https://flagcdn.com/w160/${targetCode}.png`} alt={targetCountry.name_id} className="w-full h-full object-cover" />
                       ) : <Globe className="h-6 w-6 text-zinc-700" />}
                    </div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{targetCountry.name_id}</div>
                  </div>
                </>
              );
            })()}
          </div>

          {/* Analysis */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest text-center mb-4">Analisis Kecocokan Geopolitik</h4>
            
            <div className={`p-4 border rounded-xl flex items-center justify-between ${getStatusBg(calculation.isSameIdeology)}`}>
              <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Ideologi Negara</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{playerCountry.ideology}</span>
                  <span className="text-zinc-600">vs</span>
                  <span className="text-sm font-bold text-white">{targetCountry.ideology}</span>
                </div>
              </div>
              <div className={`text-sm font-black ${getStatusColor(calculation.isSameIdeology)}`}>
                {calculation.isSameIdeology ? `+${calculation.ideologyBonus}%` : "0%"}
              </div>
            </div>

            <div className={`p-4 border rounded-xl flex items-center justify-between ${getStatusBg(calculation.isSameReligion)}`}>
              <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Agama Mayoritas</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{playerCountry.religion}</span>
                  <span className="text-zinc-600">vs</span>
                  <span className="text-sm font-bold text-white">{targetCountry.religion}</span>
                </div>
              </div>
              <div className={`text-sm font-black ${getStatusColor(calculation.isSameReligion)}`}>
                {calculation.isSameReligion ? `+${calculation.religionBonus}%` : "0%"}
              </div>
            </div>

            {/* Base Chance (Neutral) */}
            <div className="p-4 border border-zinc-800 bg-zinc-900/30 rounded-xl flex items-center justify-between">
               <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Peluang Dasar (Hubungan Diplomatik)</div>
               <div className="text-sm font-black text-zinc-300">+{calculation.baseChance}%</div>
            </div>
          </div>

          {/* Final Calculation */}
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Total Peluang Kesuksesan</div>
              <div className={`text-3xl font-black italic tracking-tighter ${getChanceColor(calculation.totalChance)}`}>
                {calculation.totalChance}%
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Waktu Proses</div>
              <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-bold">{calculation.waitTimeDays} Hari</span>
              </div>
            </div>
          </div>

          {calculation.totalChance < 50 && (
            <div className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-500/80">
              <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
              <p className="text-[10px] leading-relaxed">Peluang penerimaan sangat kecil karena perbedaan haluan negara. Ada kemungkinan pengajuan diplomasi akan ditolak.</p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-zinc-900 bg-zinc-900/20 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-zinc-800 text-zinc-400 font-bold hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
          >
            Batal
          </button>
          <button 
            onClick={() => onConfirm(targetCountry, calculation.waitTimeDays, calculation.totalChance)}
            className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Send className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            Kirim Pengajuan
          </button>
        </div>
      </div>
    </div>
  );
}
