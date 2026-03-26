import { useState } from "react"
import { X, Landmark, Shield, Star, Zap, User, RefreshCw, ChevronRight, Info } from "lucide-react"
import { INITIAL_KEMENTERIAN, Ministry, KEMENTERIAN_FULL_DATABASE } from "./database_menteri"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KementerianModal({ isOpen, onClose }: ModalProps) {
  const [ministries, setMinistries] = useState<Ministry[]>(INITIAL_KEMENTERIAN);
  const [selectingFor, setSelectingFor] = useState<number | null>(null);
  const [showInfoId, setShowInfoId] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleReshuffle = (ministryId: number) => {
    setSelectingFor(ministryId);
  };

  const selectCandidate = (candidate: Ministry) => {
    if (selectingFor === null) return;

    setMinistries(prev => prev.map(m => 
      m.id === selectingFor 
        ? { ...m, status: "Terisi", minister: candidate.minister, stats: candidate.stats, candidate_id: candidate.candidate_id }
        : m
    ));
    setSelectingFor(null);
  };

  const getCandidates = () => {
    if (selectingFor === null) return [];
    return KEMENTERIAN_FULL_DATABASE[selectingFor as keyof typeof KEMENTERIAN_FULL_DATABASE] || [];
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Landmark className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Kabinet Kementerian</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Cabinet of Ministries (5-5-5 Layout)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content - Main Cabinet Grid */}
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar bg-zinc-950/20">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {ministries.map((slot) => (
              <div 
                key={slot.id}
                className="bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl transition-all hover:border-purple-500/50 group flex flex-col gap-4 relative overflow-hidden h-full shadow-lg"
              >
                <div className="flex items-start justify-between relative z-10">
                  <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <slot.icon className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setShowInfoId(slot.id)}
                      className="p-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer"
                    >
                      <Info className="h-4 w-4" />
                    </button>
                    <div className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${
                      slot.status === "Terisi" 
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                        : "bg-zinc-800/50 border-zinc-700 text-zinc-500"
                    }`}>
                      {slot.status}
                    </div>
                  </div>
                </div>

                <div className="space-y-1 relative z-10">
                  <h3 className="text-[11px] font-black text-white leading-tight group-hover:text-purple-400 transition-colors uppercase italic min-h-[2rem] flex items-center">
                    {slot.name}
                  </h3>
                  {slot.status === "Terisi" && (
                    <p className="text-[10px] font-bold text-zinc-400 italic truncate">{slot.minister}</p>
                  )}
                </div>

                {slot.status === "Terisi" && (
                  <div className="space-y-3 pt-1 relative z-10">
                    <StatBar label="Loyalitas" value={slot.stats.loyalty} icon={<Shield className="h-3 w-3" />} color="bg-blue-500" />
                    <StatBar label="Kompetensi" value={slot.stats.competence} icon={<Zap className="h-3 w-3" />} color="bg-amber-500" />
                    <StatBar label="Popularitas" value={slot.stats.popularity} icon={<Star className="h-3 w-3" />} color="bg-rose-500" />
                    
                    <div className="mt-3 p-3 bg-purple-500/5 rounded-xl border border-purple-500/10 flex items-center gap-2.5 group-hover:bg-purple-500/10 transition-colors">
                      <Zap className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                      <p className="text-[10px] font-bold text-white leading-tight uppercase italic">{slot.impact}</p>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-3 relative z-10">
                  <button 
                    onClick={() => handleReshuffle(slot.id)}
                    className="w-full py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3 group-hover/btn:rotate-180 transition-transform duration-500" />
                    {slot.status === "Terisi" ? "Ganti Calon" : "Pilih Calon"}
                  </button>
                </div>

                {/* Info Overlay per Card */}
                {showInfoId === slot.id && (
                  <div className="absolute inset-0 z-50 bg-zinc-950/95 p-6 animate-in slide-in-from-right-4 duration-300 flex flex-col gap-4 overflow-y-auto no-scrollbar">
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                       <h4 className="text-xs font-black text-cyan-400 uppercase italic tracking-tighter">Detail Tugas</h4>
                       <button onClick={() => setShowInfoId(null)} className="p-1 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors cursor-pointer">
                         <X className="h-4 w-4" />
                       </button>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Deskripsi</p>
                        <p className="text-xs font-bold text-zinc-300 leading-relaxed italic">"{slot.description}"</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Dampak Sektoral</p>
                        <p className="text-xs font-bold text-emerald-400 leading-relaxed">{slot.impact} (Global)</p>
                      </div>
                      <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl space-y-1">
                        <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest flex items-center gap-2">
                          <Star className="h-3 w-3 fill-purple-400" />
                          Skill Khusus
                        </p>
                        <p className="text-xs font-bold text-white italic leading-tight">{slot.skill}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowInfoId(null)}
                      className="mt-auto w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-[10px] font-black text-white rounded-lg uppercase transition-all cursor-pointer"
                    >
                      Kembali
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Candidate Selection Overlay (Grid Layout 5-4) */}
        {selectingFor !== null && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 p-4">
            <div className="bg-zinc-950 border border-zinc-800 w-full max-w-6xl rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
              <div className="px-8 py-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
                <div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Seleksi Kandidat Khusus</h3>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Pilih satu dari 20 ahli terbaik untuk mengisi portofolio ini</p>
                </div>
                <button onClick={() => setSelectingFor(null)} className="p-3 bg-rose-600/10 border border-rose-500/50 rounded-2xl text-rose-500 hover:bg-rose-500 hover:text-white transition-all cursor-pointer">
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-y-auto no-scrollbar flex-1 bg-zinc-900/10">
                {getCandidates().map((candidate) => (
                  <button
                    key={candidate.candidate_id}
                    onClick={() => selectCandidate(candidate)}
                    className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl hover:border-purple-500 hover:bg-purple-500/10 transition-all flex flex-col gap-3 group text-left cursor-pointer relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                        <User className="h-5 w-5 text-zinc-600 group-hover:text-purple-400" />
                      </div>
                      <div className="text-[9px] font-black px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 uppercase tracking-widest">
                        Option #{candidate.candidate_id}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-[10px] font-black text-white uppercase italic truncate">
                        Kandidat #{candidate.candidate_id}
                      </h4>
                      <div className="mt-2 space-y-1.5">
                        <CompactStat label="Loy" value={candidate.stats.loyalty} color="bg-blue-500" />
                        <CompactStat label="Kom" value={candidate.stats.competence} color="bg-amber-500" />
                        <CompactStat label="Pop" value={candidate.stats.popularity} color="bg-rose-500" />
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-zinc-800/50 flex items-center justify-between">
                      <span className="text-[9px] font-black text-purple-400 uppercase italic">Avg: {Math.round((candidate.stats.loyalty + candidate.stats.competence + candidate.stats.popularity)/3)}%</span>
                      <ChevronRight className="h-3 w-3 text-zinc-700 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatBar({ label, value, icon, color }: { label: string, value: number, icon: any, color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-zinc-500">
        <span className="flex items-center gap-1.5 italic">
          {icon} {label}
        </span>
        <span className="text-white">{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
        <div 
          className={`h-full ${color} transition-all duration-1000 shadow-[0_0_10px_rgba(168,85,247,0.2)]`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

function CompactStat({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[8px] font-black text-zinc-500 uppercase w-6">{label}</span>
      <div className="flex-1 h-1 bg-zinc-950 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-[8px] font-bold text-white w-5 text-right">{value}%</span>
    </div>
  )
}
