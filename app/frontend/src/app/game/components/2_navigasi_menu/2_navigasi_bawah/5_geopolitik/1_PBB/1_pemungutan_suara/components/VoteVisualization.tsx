import { AlertTriangle } from "lucide-react";
import { checkProposalPermission } from "../utils/proposalPermissions";

interface VoteVisualizationProps {
  selectedCountry: any;
  isUNSCMember: boolean;
  userCountry: string | null;
  onSubmit: () => void;
  onReset: () => void;
}

export function VoteVisualization({ selectedCountry, isUNSCMember, userCountry, onSubmit, onReset }: VoteVisualizationProps) {
  const permission = userCountry ? checkProposalPermission(userCountry, isUNSCMember) : { canPropose: false, reason: '' };
  const canPropose = permission.canPropose;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <button 
        onClick={onReset}
        className="w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        Reset Konfigurasi
      </button>
      
      <button 
        disabled={!selectedCountry || !canPropose}
        onClick={onSubmit}
        className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden ${
          (selectedCountry && canPropose)
            ? "bg-rose-600 border border-rose-500 text-white hover:bg-rose-500 shadow-rose-600/30 cursor-pointer" 
            : "bg-zinc-800 text-zinc-600 border-zinc-900 cursor-not-allowed grayscale opacity-50"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        Ajukan Resolusi Ke PBB
      </button>
    </div>
  );
}
