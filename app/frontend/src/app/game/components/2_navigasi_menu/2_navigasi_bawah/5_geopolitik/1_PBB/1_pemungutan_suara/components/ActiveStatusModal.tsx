import { AlertTriangle, X } from "lucide-react";
import { ActiveResolutionGrid } from "./ActiveResolutionGrid";
import { GlobalVotingState } from "../utils/votingSystem";
import { useProposalSubmission } from "../hooks/useProposalSubmission";
import { useEffect, useState } from "react";

interface ActiveStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ActiveStatusModal({ isOpen, onClose }: ActiveStatusModalProps) {
  const [votingState, setVotingState] = useState<GlobalVotingState | null>(null);
  const { loadVotingState } = useProposalSubmission();

  useEffect(() => {
    if (isOpen) {
      setVotingState(loadVotingState());
    }
  }, [isOpen, loadVotingState]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
      {/* Backdrop with darker tint to maintain focus */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={onClose} />
      
      {/* Content Container */}
      <div className="relative bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-7xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
        
        {/* Header Section */}
        <div className="px-10 py-10 border-b border-zinc-800/50 flex items-center gap-8 bg-zinc-900/30">
           <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 shadow-inner">
             <AlertTriangle className="h-8 w-8 text-cyan-400 animate-pulse-slow" />
           </div>
           
           <div className="flex-1">
             <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter drop-shadow-lg">
                Status Resolusi Aktif <span className="text-cyan-500/50">PBB</span>
             </h2>
             <div className="flex items-center gap-3 mt-1.5">
               <div className="h-1 w-8 bg-cyan-500 rounded-full" />
               <p className="text-[11px] text-zinc-400 font-black uppercase tracking-[0.3em] opacity-80">
                 Daftar Kebijakan & Sanksi Yang Sedang Diterapkan Di Dunia
               </p>
             </div>
           </div>
           
           <button 
             onClick={onClose} 
             className="p-5 rounded-[28px] bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer group shadow-xl active:scale-95"
           >
             <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
           </button>
        </div>

        {/* Content Section (Reuses existing grid) */}
        <div className="flex-1 overflow-y-auto p-12 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {votingState ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <ActiveResolutionGrid selectedItem={null} votingState={votingState} />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-80 gap-4">
              <div className="w-12 h-12 rounded-full border-t-2 border-cyan-500 animate-spin" />
              <p className="text-[11px] font-black text-zinc-600 uppercase tracking-widest italic">
                Sinkronisasi Data Markas Besar...
              </p>
            </div>
          )}
        </div>

        {/* Footer info (Subtle) */}
        <div className="px-10 py-6 border-t border-zinc-800/30 bg-black/20 flex justify-between items-center text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
           <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
             Data Geopolitik Aktif
           </div>
           <p>© Markas Besar PBB • New York</p>
        </div>
      </div>
    </div>
  );
}
