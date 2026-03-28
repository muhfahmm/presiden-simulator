import React, { useState, useEffect } from "react";
import { History, TrendingDown, Clock, Box, MapPin, Coins, Trash2 } from "lucide-react";
import { historiImportStorage, TradeTransaction } from "./HistoriImportStorage";

import { timeStorage } from "../../timeStorage";

export const HistoriImport: React.FC = () => {
  const [history, setHistory] = useState(historiImportStorage.getHistory());
  const [gameTime, setGameTime] = useState(timeStorage.getState());

  useEffect(() => {
    const handleUpdate = () => {
      setHistory(historiImportStorage.getHistory());
    };
    window.addEventListener('import_history_updated', handleUpdate);
    
    // Listen to game clock
    const unsubscribe = timeStorage.subscribe((date, isPaused, speed) => {
      setGameTime({ gameDate: date, isPaused, speed });
    });

    return () => {
      window.removeEventListener('import_history_updated', handleUpdate);
      unsubscribe();
    };
  }, []);

  const handleClear = () => {
    if (confirm("Hapus semua histori transaksi impor?")) {
      historiImportStorage.clearHistory();
    }
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-[2rem] flex items-center justify-between group overflow-hidden relative mb-8">
        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700 text-red-500">
          <TrendingDown size={100} />
        </div>
        <div className="relative z-10">
          <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Total Transaksi Impor</p>
          <h4 className="text-3xl font-black text-white italic tracking-tighter">{history.length}</h4>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center relative z-10">
          <TrendingDown size={24} className="text-red-500" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 italic">Daftar Histori Impor</h5>
        {history.length > 0 && (
          <button 
            onClick={handleClear}
            className="p-2 text-zinc-600 hover:text-red-500 transition-colors"
            title="Hapus Semua"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
        {history.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center text-zinc-700 space-y-4">
            <History size={48} className="opacity-20" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Belum ada transaksi tercatat</p>
          </div>
        ) : (
          history.map((tx: TradeTransaction) => {
            const calculateProgress = () => {
              // Duration in game-time: 45s real (1x) = 22.5 game-days
              // 1 game-day = 24 * 60 * 60 * 1000 ms
              const durationGameMs = 22.5 * 24 * 60 * 60 * 1000;
              const start = tx.gameStartDateMs || 0;
              if (!start) return 100; // Old records are done
              
              const current = gameTime.gameDate.getTime();
              const elapsed = current - start;
              return Math.min(100, Math.max(0, (elapsed / durationGameMs) * 100));
            };

            const progress = calculateProgress();

            return (
              <div 
                key={tx.id}
                className="bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-3xl hover:bg-zinc-900/50 transition-all group animate-in slide-in-from-right-4 duration-500 overflow-hidden relative"
              >
                {/* Progress Bar Background */}
                {progress < 100 && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-800/50 overflow-hidden">
                    <div 
                      className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-all ease-linear"
                      style={{ 
                        width: `${progress}%`,
                        transitionDuration: gameTime.isPaused ? '0ms' : `${2000 / gameTime.speed}ms` 
                      }}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center text-white">
                      <Box size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-black text-white italic tracking-tight uppercase">{tx.commodityName}</h5>
                        {progress < 100 ? (
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20">
                            <Clock size={10} className="text-red-500 animate-pulse" />
                            <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">{Math.floor(progress)}%</span>
                          </div>
                        ) : (
                          <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="text-[8px] font-black text-green-500 uppercase tracking-widest italic">DIKIRIM</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Clock size={10} className="text-zinc-600" />
                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{tx.gameDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black italic tracking-tighter text-red-400">
                      -{tx.totalPrice.toLocaleString('id-ID')}
                    </p>
                    <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Total Nilai</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50">
                    <div className="flex items-center gap-1.5 mb-1 opacity-50">
                      <MapPin size={10} className="text-zinc-500" />
                      <span className="text-[8px] font-black uppercase text-zinc-600 tracking-widest">Mitra</span>
                    </div>
                    <p className="text-[10px] font-black text-zinc-300 uppercase truncate">{tx.partner}</p>
                  </div>
                  <div className="bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50">
                    <div className="flex items-center gap-1.5 mb-1 opacity-50">
                      <Box size={10} className="text-zinc-500" />
                      <span className="text-[8px] font-black uppercase text-zinc-600 tracking-widest">Volume</span>
                    </div>
                    <p className="text-[10px] font-black text-zinc-300 uppercase truncate">{tx.amount.toLocaleString('id-ID')} <span className="text-[8px] text-zinc-600">{tx.unit}</span></p>
                  </div>
                  <div className="bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50">
                    <div className="flex items-center gap-1.5 mb-1 opacity-50">
                      <Coins size={10} className="text-zinc-500" />
                      <span className="text-[8px] font-black uppercase text-zinc-600 tracking-widest">Harga</span>
                    </div>
                    <p className="text-[10px] font-black text-zinc-300 uppercase truncate">{tx.pricePerUnit.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="bg-zinc-950/50 p-3 rounded-2xl border border-zinc-800/50">
                    <div className="flex items-center gap-1.5 mb-1 opacity-50">
                      <Clock size={10} className="text-red-500" />
                      <span className="text-[8px] font-black uppercase text-zinc-600 tracking-widest">Status Paket</span>
                    </div>
                    <p className="text-[10px] font-black text-red-400 uppercase truncate">{progress < 100 ? "Dalam Pelayaran" : "Tiba di Pelabuhan"}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
