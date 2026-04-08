/**
 * Panel untuk menampilkan hasil AI Voting
 */

import { Brain, TrendingUp, TrendingDown, Minus, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { AIVotingResult } from '../hooks/useAIVoting';

interface AIVotingPanelProps {
  results: AIVotingResult[];
  isProcessing: boolean;
  progress: number;
  error: string | null;
  isServiceAvailable: boolean;
}

export function AIVotingPanel({
  results,
  isProcessing,
  progress,
  error,
  isServiceAvailable
}: AIVotingPanelProps) {
  
  // Calculate summary
  const summary = results.reduce(
    (acc, result) => {
      acc[result.vote]++;
      return acc;
    },
    { agree: 0, abstain: 0, disagree: 0 }
  );

  const total = results.length;
  const approvalRate = total > 0 ? (summary.agree / total) * 100 : 0;

  return (
    <div className="rounded-3xl border border-purple-500/30 bg-purple-500/5 shadow-lg shadow-purple-500/10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-gradient-to-r from-purple-500/10 to-transparent">
        <div className="p-2 rounded-xl bg-zinc-900/80 border border-purple-500/30">
          <Brain className="h-4 w-4 text-purple-400" />
        </div>
        <h3 className="text-xs font-black uppercase tracking-widest text-purple-400">
          AI Voting Simulation
        </h3>
        {!isServiceAvailable && (
          <span className="ml-auto text-[9px] font-black px-2 py-0.5 rounded-full border border-yellow-500/30 text-yellow-400 bg-yellow-500/10">
            OFFLINE MODE
          </span>
        )}
        {isServiceAvailable && (
          <span className="ml-auto text-[9px] font-black px-2 py-0.5 rounded-full border border-green-500/30 text-green-400 bg-green-500/10">
            AI ACTIVE
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Error State */}
        {error && (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 mb-4">
            <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-red-400">Error</p>
              <p className="text-[10px] text-red-300/70 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Processing State */}
        {isProcessing && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-300">Processing votes...</span>
              <span className="text-xs font-black text-purple-400">{progress}%</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Results Summary */}
        {!isProcessing && results.length > 0 && (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Setuju</span>
                </div>
                <p className="text-2xl font-black text-green-400">{summary.agree}</p>
                <p className="text-[9px] text-green-300/70 mt-1">
                  {total > 0 ? ((summary.agree / total) * 100).toFixed(1) : 0}%
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-500/10 border border-zinc-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Minus className="h-4 w-4 text-zinc-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Abstain</span>
                </div>
                <p className="text-2xl font-black text-zinc-400">{summary.abstain}</p>
                <p className="text-[9px] text-zinc-300/70 mt-1">
                  {total > 0 ? ((summary.abstain / total) * 100).toFixed(1) : 0}%
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-red-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-400">Tolak</span>
                </div>
                <p className="text-2xl font-black text-red-400">{summary.disagree}</p>
                <p className="text-[9px] text-red-300/70 mt-1">
                  {total > 0 ? ((summary.disagree / total) * 100).toFixed(1) : 0}%
                </p>
              </div>
            </div>

            {/* Approval Rate */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-zinc-300">Tingkat Persetujuan</span>
                <span className={`text-lg font-black ${
                  approvalRate >= 50 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {approvalRate.toFixed(1)}%
                </span>
              </div>
              <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    approvalRate >= 50 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-red-500 to-rose-500'
                  }`}
                  style={{ width: `${approvalRate}%` }}
                />
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                {approvalRate >= 50 ? (
                  <>
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-green-400">
                      Resolusi Disetujui
                    </span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="h-4 w-4 text-red-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-400">
                      Resolusi Ditolak
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Top Supporters & Opponents */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-green-400 mb-3">
                  Top Pendukung
                </h4>
                <div className="space-y-2">
                  {results
                    .filter(r => r.vote === 'agree')
                    .sort((a, b) => b.confidence - a.confidence)
                    .slice(0, 5)
                    .map((result, i) => (
                      <div key={i} className="flex items-center justify-between text-[10px]">
                        <span className="text-zinc-300 truncate">{result.countryName}</span>
                        <span className="text-green-400 font-bold ml-2">
                          {(result.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-3">
                  Top Penentang
                </h4>
                <div className="space-y-2">
                  {results
                    .filter(r => r.vote === 'disagree')
                    .sort((a, b) => b.confidence - a.confidence)
                    .slice(0, 5)
                    .map((result, i) => (
                      <div key={i} className="flex items-center justify-between text-[10px]">
                        <span className="text-zinc-300 truncate">{result.countryName}</span>
                        <span className="text-red-400 font-bold ml-2">
                          {(result.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isProcessing && results.length === 0 && !error && (
          <div className="text-center py-8">
            <Brain className="h-12 w-12 text-purple-400/30 mx-auto mb-3" />
            <p className="text-xs font-bold text-zinc-400">
              Pilih resolusi dan negara target untuk memulai simulasi AI
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
