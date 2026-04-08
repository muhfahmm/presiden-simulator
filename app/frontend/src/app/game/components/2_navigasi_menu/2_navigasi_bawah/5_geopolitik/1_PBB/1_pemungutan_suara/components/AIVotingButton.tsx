/**
 * Button untuk trigger AI Voting Simulation
 */

import { Brain, Loader2, Sparkles } from 'lucide-react';

interface AIVotingButtonProps {
  onClick: () => void;
  isProcessing: boolean;
  isDisabled: boolean;
  isServiceAvailable: boolean;
}

export function AIVotingButton({
  onClick,
  isProcessing,
  isDisabled,
  isServiceAvailable
}: AIVotingButtonProps) {
  
  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isProcessing}
      className={`
        relative group px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs
        transition-all duration-300 overflow-hidden
        ${isDisabled || isProcessing
          ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed border border-zinc-700'
          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
        }
      `}
    >
      {/* Animated Background */}
      {!isDisabled && !isProcessing && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      )}

      {/* Content */}
      <div className="relative flex items-center justify-center gap-3">
        {isProcessing ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Memproses AI...</span>
          </>
        ) : (
          <>
            <Brain className="h-5 w-5" />
            <span>Simulasi AI Voting</span>
            {isServiceAvailable && (
              <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
            )}
          </>
        )}
      </div>

      {/* Service Status Indicator */}
      <div className="absolute top-2 right-2">
        <div className={`h-2 w-2 rounded-full ${
          isServiceAvailable 
            ? 'bg-green-400 animate-pulse' 
            : 'bg-yellow-400'
        }`} />
      </div>
    </button>
  );
}
