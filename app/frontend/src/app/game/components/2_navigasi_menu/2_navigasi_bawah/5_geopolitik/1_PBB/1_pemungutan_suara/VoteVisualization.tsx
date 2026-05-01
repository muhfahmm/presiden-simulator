"use client"

import { useState, useEffect } from "react";
import { Check, X, Minus, Gavel, Globe, Loader2, Search, ChevronRight } from "lucide-react";
import { checkProposalPermission } from "./logika_pemungutan_suara/proposalPermissions";
import { unVotingStorage } from "./logika_pemungutan_suara/unVotingStorage";
import { countries as allCountries } from "@/app/pilih_negara/data/negara/index";
import { simulateUNVote } from "./logika_pemungutan_suara/votingLogic";
import { VotingMemberDetailsModal } from "./VotingMemberDetailsModal";
import { terapkanPenaltiDiterima } from "./logika_pemungutan_suara/dampak_hubungan/penaltiDiterima";
import { terapkanPenaltiDitolak } from "./logika_pemungutan_suara/dampak_hubungan/penaltiDitolak";
import { DurationPicker, ResolutionDuration } from "./logika_pemungutan_suara/durasi_resolusi/DurationPicker";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";

interface VoteVisualizationProps {
  userCountry: string;
  isUNSCMember: boolean;
  selectedItem: { category: string, name: string, description: string, effect: string, targetCountry?: string } | null;
  onClose: () => void;
  onEditTarget?: () => void;
}

export function VoteVisualization({ userCountry, isUNSCMember, selectedItem, onClose, onEditTarget }: VoteVisualizationProps) {
  const [step, setStep] = useState<'preview' | 'voting' | 'result'>('preview');
  const [votes, setVotes] = useState({ yes: 0, no: 0, abstain: 0 });
  const [voteDetails, setVoteDetails] = useState<{ supporters: string[], opponents: string[], abstainers: string[] } | null>(null);
  const [detailModal, setDetailModal] = useState<'supporters' | 'opponents' | 'abstainers' | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<ResolutionDuration>('1_tahun');
  const [progress, setProgress] = useState(0);
  const [localSearch, setLocalSearch] = useState("");
  
  const TOTAL_VOTERS = 207;
  const REQUIRED_VOTES = 138; // 2/3 of 207

  const permission = checkProposalPermission(userCountry, isUNSCMember);
  const canPropose = permission.canPropose;

  const isPassed = votes.yes >= REQUIRED_VOTES;

  const isWarBanActive = unVotingStorage.isWarBanActive();
  const isCurrentItemWarBan = selectedItem?.name.toUpperCase().includes("LARANGAN PERANG");
  const isWarBanBlocked = isCurrentItemWarBan && isWarBanActive;

  useEffect(() => {
    if (step === 'result' && selectedItem) {
      const isSanctionOrEmbargo = selectedItem.category.includes("Sanksi") || selectedItem.category.includes("Embargo");
      
          // Hitung End Date berdasarkan durasi yang dipilih
          const startDateStr = timeStorage.getState().gameDate.toISOString();
          const startDate = new Date(startDateStr);
          const endDate = new Date(startDate);
          
          if (selectedDuration === '6_bulan') endDate.setMonth(endDate.getMonth() + 6);
          else if (selectedDuration === '9_bulan') endDate.setMonth(endDate.getMonth() + 9);
          else if (selectedDuration === '1_tahun') endDate.setFullYear(endDate.getFullYear() + 1);
          else if (selectedDuration === '3_tahun') endDate.setFullYear(endDate.getFullYear() + 3);
          else if (selectedDuration === '2_tahun') endDate.setFullYear(endDate.getFullYear() + 2);
          else if (selectedDuration === '5_tahun') endDate.setFullYear(endDate.getFullYear() + 5);

          const endDateStr = endDate.toISOString();

          if (isPassed) {
            // Logika jika DITERIMA
            unVotingStorage.addHistoryItem({
              category: selectedItem.category,
              name: selectedItem.name,
              description: selectedItem.description,
              effect: selectedItem.effect,
              status: 'DITERIMA',
              durationLabel: selectedDuration.replace('_', ' ').toUpperCase(),
              targetCountry: selectedItem.targetCountry,
              startDate: startDateStr,
              endDate: endDateStr
            });

            if (isSanctionOrEmbargo && selectedItem.targetCountry) {
              terapkanPenaltiDiterima(selectedItem.targetCountry, userCountry);
              
              // Tambahkan berita keuangan (Finance News)
              const { newsStorage } = require("@/app/game/components/sidemenu/1_berita/newsStorage");
              newsStorage.addNews({
                source: "Sekretariat PBB",
                subject: `PEMBERLAKUAN ${selectedItem.name.toUpperCase()}`,
                content: `Resolusi PBB telah disetujui. Pemberlakuan ${selectedItem.name.toLowerCase()} terhadap ${selectedItem.targetCountry} mulai berlaku hari ini selama ${selectedDuration.replace('_', ' ')}. ${selectedItem.effect}`,
                priority: 'high',
                category: 'finance'
              });
            }
          } else {
            // Logika jika DITOLAK
            unVotingStorage.addHistoryItem({
              category: selectedItem.category,
              name: selectedItem.name,
              description: selectedItem.description,
              effect: selectedItem.effect,
              status: 'DITOLAK',
              durationLabel: selectedDuration.replace('_', ' ').toUpperCase(),
              targetCountry: selectedItem.targetCountry,
              startDate: startDateStr,
              endDate: endDateStr
            });

            if (isSanctionOrEmbargo && selectedItem.targetCountry) {
              terapkanPenaltiDitolak(selectedItem.targetCountry, userCountry);
            }
          }
    }
  }, [step, isPassed, selectedItem, userCountry]);

  const startVoting = () => {
    if (!canPropose || !selectedItem) return;
    
    const startDate = timeStorage.getState().gameDate;
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 30); // 30 Hari Pemungutan Suara

    unVotingStorage.startVoting({
      category: selectedItem.category,
      name: selectedItem.name,
      description: selectedItem.description,
      effect: selectedItem.effect,
      targetCountry: selectedItem.targetCountry || "Global",
      durationLabel: selectedDuration.replace('_', ' ').toUpperCase(),
      resolutionDuration: selectedDuration.replace('_', ' ').toUpperCase(),
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    }, userCountry);

    onClose(); // Tutup modal setelah diajukan
  };

  if (!selectedItem) return null;


  return (
    <div className="mt-8 p-8 rounded-[32px] bg-zinc-900/50 border border-zinc-800/50 animate-in slide-in-from-bottom duration-500 shadow-2xl relative w-full">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none" />
      
      {step === 'preview' && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <Gavel className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight">{selectedItem.name}</h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">{selectedItem.category}</p>
              </div>
            </div>
            {!canPropose && (
              <div className="px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-2">
                <X className="h-3 w-3 text-rose-400" />
                <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest leading-none">
                  Akses Ditolak
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Detail Resolusi</span>
                {selectedItem.category !== "Rancangan Resolusi" && selectedItem.targetCountry && (
                  <button 
                    onClick={() => onEditTarget?.()}
                    className="text-[9px] font-black text-cyan-500 hover:text-cyan-400 uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Globe className="h-3 w-3" />
                    Ubah Target Negara
                  </button>
                )}
              </div>
              
              {(!selectedItem.targetCountry && (selectedItem.category !== "Rancangan Resolusi" || selectedItem.name.toUpperCase().includes("INTERVENSI MILITER"))) ? (
                <div className="p-10 rounded-[32px] bg-rose-500/[0.03] border border-rose-500/20 flex flex-col items-center gap-6 text-center relative overflow-hidden group">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-rose-500/[0.02] group-hover:bg-rose-500/[0.04] transition-colors duration-500" />
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full" />
                    <div className="relative p-4 bg-rose-500/10 rounded-full border border-rose-500/20">
                      <Globe className="h-8 w-8 text-rose-500" />
                    </div>
                  </div>
                  
                  <div className="relative space-y-2">
                    <h4 className="text-sm font-black text-white uppercase tracking-[0.2em]">Negara Target Belum Dipilih</h4>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest max-w-[280px] leading-relaxed">
                      Silakan pilih negara target untuk melanjutkan resolusi ini.
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => onEditTarget?.()}
                    className="relative px-10 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer shadow-[0_0_30px_rgba(225,29,72,0.3)] hover:shadow-[0_0_40px_rgba(225,29,72,0.4)] active:scale-95"
                  >
                    Pilih Negara Sekarang
                  </button>
                </div>
              ) : (
                <p className="text-sm text-zinc-300 leading-relaxed font-medium">{selectedItem.description}</p>
              )}
            </div>
            <div className={`grid ${selectedItem.category.includes("Sanksi") || selectedItem.category.includes("Embargo") || selectedItem.name.toUpperCase().includes("LARANGAN PERANG") || selectedItem.name.toUpperCase().includes("INTERVENSI MILITER") ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-6`}>
              <div className="p-5 rounded-2xl bg-zinc-950/50 border border-zinc-800/50 space-y-3">
                <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest flex items-center gap-2">
                  <div className="h-1 w-3 bg-rose-500 rounded-full" />
                  Dampak Strategis
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed italic font-medium">{selectedItem.effect}</p>
              </div>

              {(selectedItem.category.includes("Sanksi") || selectedItem.category.includes("Embargo") || selectedItem.name.toUpperCase().includes("LARANGAN PERANG") || selectedItem.name.toUpperCase().includes("INTERVENSI MILITER")) && (
                <div className="p-5 rounded-2xl bg-zinc-950/50 border border-zinc-800/50">
                  <DurationPicker 
                    selectedDuration={selectedDuration}
                    onSelect={setSelectedDuration}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Total Pemilih</span>
                <span className="text-lg font-black text-white">{TOTAL_VOTERS} <span className="text-[10px] text-zinc-500">NEGARA</span></span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Ambang Batas (2/3)</span>
                <span className="text-lg font-black text-cyan-400">{REQUIRED_VOTES} <span className="text-[10px] text-cyan-900">SUARA</span></span>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={onClose}
                className="px-6 py-3 rounded-2xl bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                Batalkan
              </button>
              <button 
                onClick={startVoting}
                disabled={!canPropose || (selectedItem.category !== "Rancangan Resolusi" && !selectedItem.targetCountry) || isWarBanBlocked}
                className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                  canPropose && (selectedItem.category === "Rancangan Resolusi" || selectedItem.targetCountry) && !isWarBanBlocked
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 cursor-pointer"
                    : "bg-zinc-800/50 text-zinc-600 border border-zinc-800 cursor-not-allowed"
                }`}
              >
                {isWarBanBlocked ? "Sudah Ada Resolusi Aktif" : canPropose ? "Ajukan Resolusi Ke PBB" : "Izin Ditolak"}
              </button>
            </div>
          </div>
          
          {!canPropose && (
            <p className="text-[9px] text-rose-500/60 font-bold uppercase text-right italic">
              {permission.reason}
            </p>
          )}
          {isWarBanBlocked && (
            <p className="text-[9px] text-amber-500/80 font-bold uppercase text-right italic mt-1">
              Resolusi Larangan Perang sedang berjalan atau sudah diberlakukan secara global.
            </p>
          )}
        </div>
      )}

      {step === 'voting' && (
        <div className="flex flex-col items-center py-12 gap-8">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative h-24 w-24 rounded-full border-2 border-cyan-500/30 flex items-center justify-center">
              <Loader2 className="h-10 w-10 text-cyan-400 animate-spin" />
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Pemungutan Suara Berlangsung</h4>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Mengumpulkan suara dari {TOTAL_VOTERS} negara anggota...</p>
          </div>

          <div className="w-full max-w-md space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center">
                <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">Setuju</p>
                <p className="text-2xl font-black text-white">{votes.yes}</p>
              </div>
              <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-center">
                <p className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1">Tolak</p>
                <p className="text-2xl font-black text-white">{votes.no}</p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-500/5 border border-zinc-500/20 text-center">
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">Abstain</p>
                <p className="text-2xl font-black text-white">{votes.abstain}</p>
              </div>
            </div>

            <div className="h-3 w-full bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-600 to-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {step === 'result' && (
        <div className="flex flex-col gap-8 animate-in zoom-in-95 duration-500">
          <div className={`p-8 rounded-[24px] border flex items-center justify-between ${
            isPassed 
              ? "bg-emerald-500/10 border-emerald-500/30 shadow-lg shadow-emerald-500/10" 
              : "bg-rose-500/10 border-rose-500/30 shadow-lg shadow-rose-500/10"
          }`}>
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-2xl ${isPassed ? "bg-emerald-500/20" : "bg-rose-500/20"}`}>
                {isPassed ? <Check className="h-8 w-8 text-emerald-400" /> : <X className="h-8 w-8 text-rose-400" />}
              </div>
              <div>
                <h4 className={`text-2xl font-black uppercase italic tracking-tighter ${isPassed ? "text-emerald-400" : "text-rose-400"}`}>
                  Resolusi {isPassed ? "Disetujui" : "Ditolak"}
                </h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  Hasil Akhir Sidang Umum PBB • {new Date().toLocaleDateString('id-ID')}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Total Suara Setuju</span>
              <p className={`text-3xl font-black ${isPassed ? "text-emerald-400" : "text-rose-400"}`}>
                {votes.yes} <span className="text-sm opacity-50">/ {TOTAL_VOTERS}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Globe className="h-3 w-3" /> Rekapitulasi Global
              </span>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400 font-bold uppercase">Mendukung</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white font-black">{votes.yes} Negara</span>
                    <button 
                      onClick={() => setDetailModal('supporters')}
                      className="p-1 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-600 hover:text-emerald-500 cursor-pointer"
                    >
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${(votes.yes/TOTAL_VOTERS)*100}%` }} />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400 font-bold uppercase">Menentang</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white font-black">{votes.no} Negara</span>
                    <button 
                      onClick={() => setDetailModal('opponents')}
                      className="p-1 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-600 hover:text-rose-500 cursor-pointer"
                    >
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500" style={{ width: `${(votes.no/TOTAL_VOTERS)*100}%` }} />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400 font-bold uppercase">Abstain</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white font-black">{votes.abstain} Negara</span>
                    <button 
                      onClick={() => setDetailModal('abstainers')}
                      className="p-1 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-600 hover:text-white cursor-pointer"
                    >
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-600" style={{ width: `${(votes.abstain/TOTAL_VOTERS)*100}%` }} />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                   Konsensus Internasional
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {isPassed 
                    ? "Resolusi ini telah memenuhi ambang batas 2/3 suara. Sekretariat Jenderal PBB akan segera mengirimkan instruksi implementasi ke seluruh negara anggota." 
                    : "Resolusi gagal mendapatkan dukungan yang cukup. Usulan ini akan diarsipkan dan tidak dapat diajukan kembali dalam waktu dekat."}
                </p>
              </div>
              
              <button 
                onClick={onClose}
                className="w-full mt-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
              >
                Selesaikan Sidang
              </button>
            </div>
          </div>
        </div>
      )}
      {detailModal && voteDetails && (
        <VotingMemberDetailsModal 
          type={detailModal}
          targetCountry={selectedItem?.targetCountry}
          proposer={userCountry}
          countryList={
            detailModal === 'supporters' ? voteDetails.supporters :
            detailModal === 'opponents' ? voteDetails.opponents :
            voteDetails.abstainers
          }
          onClose={() => setDetailModal(null)}
        />
      )}
    </div>
  );
}

