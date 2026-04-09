import { History, X, Search, Filter } from "lucide-react";
import { HistoriItem } from "./HistoriItem";
import { GlobalVotingState, GlobalProposal } from "../1_pemungutan_suara/utils/votingSystem";
import { useProposalSubmission } from "../1_pemungutan_suara/hooks/useProposalSubmission";
import { useEffect, useState, useMemo } from "react";

interface HistoriProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Histori({ isOpen, onClose }: HistoriProps) {
  const [votingState, setVotingState] = useState<GlobalVotingState | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { loadVotingState } = useProposalSubmission();

  useEffect(() => {
    if (isOpen) {
      setVotingState(loadVotingState());
    }
  }, [isOpen, loadVotingState]);

  const allHistory = useMemo(() => {
    if (!votingState) return [];
    
    // Combine implemented (approved) and completed (rejected/expired)
    const combined: GlobalProposal[] = [
      ...(votingState.implementedProposals || []),
      ...(votingState.completedProposals || [])
    ];
    
    // Sort by end date (newest first)
    return combined.sort((a, b) => 
      new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
    );
  }, [votingState]);

  const filteredHistory = useMemo(() => {
    return allHistory.filter(item => 
      item.proposalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.targetCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.proposerCountry.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allHistory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      {/* Content Container */}
      <div className="relative bg-zinc-950 border border-zinc-900 rounded-[40px] w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Header Section */}
        <div className="px-10 py-10 border-b border-zinc-900 flex items-center gap-8 bg-zinc-900/10">
           <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl">
             <History className="h-8 w-8 text-zinc-400" />
           </div>
           
           <div className="flex-1">
             <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                Arsip & Histori <span className="text-zinc-500">PBB</span>
             </h2>
             <p className="text-[11px] text-zinc-500 font-black uppercase tracking-[0.3em] mt-1.5 flex items-center gap-2">
               <span className="h-1 w-6 bg-zinc-800 rounded-full" />
               Rekam Jejak Kebijakan Geopolitik Dunia
             </p>
           </div>

           {/* Search Bar */}
           <div className="relative group min-w-[300px]">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-cyan-500 transition-colors" />
             <input 
               type="text"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="Cari histori..."
               className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-[11px] font-bold text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-all uppercase tracking-widest"
             />
           </div>
           
           <button 
             onClick={onClose} 
             className="p-5 rounded-[28px] bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer group shadow-xl active:scale-95"
           >
             <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
           </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-10 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {filteredHistory.length > 0 ? (
            filteredHistory.map((item) => (
              <HistoriItem key={item.id} proposal={item} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-80 opacity-30 grayscale grayscale-100">
               <History className="h-20 w-20 text-zinc-700 mb-6" />
               <p className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em] italic">
                 {searchQuery ? "Hasil Pencarian Nihil" : "Belum Ada Catatan Histori"}
               </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-10 py-6 border-t border-zinc-900 bg-black/40 flex justify-between items-center text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
           <div className="flex items-center gap-2">
             <Filter className="h-3 w-3" />
               Hasil Perhitungan Final (UN Voting Standards)
           </div>
           <p>© United Nations Archives • Historical Records</p>
        </div>
      </div>
    </div>
  );
}
