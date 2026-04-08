import { AlertTriangle } from "lucide-react";
import { checkProposalPermission } from "../utils/proposalPermissions";

interface VoteVisualizationProps {
  selectedCountry: any;
  isUNSCMember: boolean;
  userCountry: string | null;
  onSubmit: () => void;
}

export function VoteVisualization({ selectedCountry, isUNSCMember, userCountry, onSubmit }: VoteVisualizationProps) {
  const permission = userCountry ? checkProposalPermission(userCountry, isUNSCMember) : { canPropose: false, reason: '' };
  const canPropose = permission.canPropose;
  
  return (
    <div className="lg:col-span-5">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-10 flex flex-col gap-10 h-full shadow-2xl relative overflow-hidden transition-all hover:border-rose-500/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] rounded-full" />
        
        <div className="flex flex-col gap-4">
          {!canPropose && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex gap-3 mb-2">
              <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0" />
              <p className="text-[10px] text-rose-400 font-bold leading-relaxed uppercase tracking-tight">
                {permission.reason}
              </p>
            </div>
          )}
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
      </div>
    </div>
  );
}
