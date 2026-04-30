"use client"
import React, { useState, useEffect } from 'react';
import { Sword, Shield, Target, ArrowLeft, Bomb, Zap, Loader2, Trophy, Skull } from 'lucide-react';

interface BattlePageProps {
  invasion: any;
  onBack: () => void;
}

export const BattlePage: React.FC<BattlePageProps> = ({ invasion, onBack }) => {
  const [phase, setPhase] = useState<'deploying' | 'fighting' | 'result'>('deploying');
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [playerStrength, setPlayerStrength] = useState(100);
  const [enemyStrength, setEnemyStrength] = useState(100);

  useEffect(() => {
    if (phase === 'fighting') {
      const interval = setInterval(() => {
        setPlayerStrength(prev => Math.max(0, prev - Math.random() * 5));
        setEnemyStrength(prev => Math.max(0, prev - Math.random() * 6));
        
        const logs = [
          "Pasukan darat melakukan penetrasi...",
          "Serangan udara berhasil menghancurkan bunker musuh.",
          "Pertahanan musuh mulai goyah!",
          "Artileri lawan memberikan tembakan balasan.",
          "Skuadron jet tempur menguasai wilayah udara."
        ];
        const randomLog = logs[Math.floor(Math.random() * logs.length)];
        setBattleLog(prev => [randomLog, ...prev].slice(0, 5));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (playerStrength <= 0 || enemyStrength <= 0) {
      setPhase('result');
    }
  }, [playerStrength, enemyStrength]);

  return (
    <div className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col overflow-hidden text-white font-sans">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533234458773-9f98355f1bb1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />

      {/* Header / Nav */}
      <div className="relative z-10 p-8 flex items-center justify-between border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-900/30">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="p-3 hover:bg-zinc-800 rounded-2xl transition-all border border-zinc-700/50 group"
          >
            <ArrowLeft className="h-6 w-6 text-zinc-400 group-hover:text-white" />
          </button>
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter flex items-center gap-3">
              <Sword className="h-8 w-8 text-red-500" />
              Operasi: {invasion.target}
            </h1>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Sektor Tempur Aktif • Koordinat Terkunci</p>
          </div>
        </div>

        <div className="flex gap-4">
           <div className="bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-2xl flex flex-col items-center">
              <span className="text-[10px] font-black text-red-500/50 uppercase tracking-widest">Status Tempur</span>
              <span className="text-xl font-black text-red-500 uppercase tracking-tighter">{phase === 'fighting' ? 'KONTAK SENJATA' : phase === 'deploying' ? 'DEPOYMENT' : 'SELESAI'}</span>
           </div>
        </div>
      </div>

      {/* Main Battlefield Area */}
      <div className="relative z-10 flex-1 flex flex-col p-12 gap-12 overflow-hidden">
        
        {/* Force Comparison Bar */}
        <div className="flex items-center gap-8 px-12">
            <div className="flex-1 space-y-3">
                <div className="flex justify-between items-end">
                    <span className="text-emerald-500 font-black text-xl italic uppercase tracking-tighter">Pasukan Indonesia</span>
                    <span className="text-4xl font-black tabular-nums">{Math.ceil(playerStrength)}%</span>
                </div>
                <div className="h-4 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden p-0.5">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      style={{ width: `${playerStrength}%` }}
                    />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-zinc-600">VS</span>
                </div>
            </div>

            <div className="flex-1 space-y-3 text-right">
                <div className="flex justify-between items-end flex-row-reverse">
                    <span className="text-red-500 font-black text-xl italic uppercase tracking-tighter">Pasukan {invasion.target}</span>
                    <span className="text-4xl font-black tabular-nums">{Math.ceil(enemyStrength)}%</span>
                </div>
                <div className="h-4 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden p-0.5 flex justify-end">
                    <div 
                      className="h-full bg-gradient-to-l from-red-600 to-red-400 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                      style={{ width: `${enemyStrength}%` }}
                    />
                </div>
            </div>
        </div>

        {/* Tactical Feed & Visualization */}
        <div className="flex-1 grid grid-cols-12 gap-8 overflow-hidden">
            {/* Units list */}
            <div className="col-span-3 space-y-4 overflow-y-auto pr-4">
                <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-6">Armada Dikerahkan</h3>
                {invasion.units.map((unit: any, i: number) => (
                    <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
                        <div className="w-10 h-10 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center">
                            <Zap className="h-4 w-4 text-emerald-500" />
                        </div>
                        <div>
                            <p className="text-xs font-black text-white uppercase tracking-tight">{unit.type}</p>
                            <p className="text-[10px] font-bold text-zinc-500">{unit.count.toLocaleString()} UNIT</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Combat Logs / Animation Area */}
            <div className="col-span-6 bg-zinc-900/20 border border-zinc-800/50 rounded-[40px] relative overflow-hidden flex flex-col p-8">
                {phase === 'deploying' ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
                        <div className="w-32 h-32 bg-red-500/10 rounded-full border-2 border-red-500/20 flex items-center justify-center animate-pulse">
                            <Target className="h-16 w-16 text-red-500" />
                        </div>
                        <div className="max-w-xs space-y-4">
                            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Kesiapan Tempur 100%</h2>
                            <p className="text-zinc-500 text-sm font-medium">Seluruh unit telah mencapai garis depan. Menunggu instruksi untuk melakukan serangan penuh.</p>
                            <button 
                                onClick={() => setPhase('fighting')}
                                className="w-full py-5 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all active:scale-95"
                            >
                                KONTAK SENJATA!
                            </button>
                        </div>
                    </div>
                ) : phase === 'fighting' ? (
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 relative flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-96 h-96 bg-red-600/5 rounded-full animate-ping" />
                                <div className="w-64 h-64 bg-red-600/10 rounded-full absolute animate-pulse" />
                            </div>
                            <Bomb className="h-24 w-24 text-red-500 animate-bounce relative z-10" />
                        </div>
                        
                        <div className="space-y-3 bg-zinc-950/50 p-6 rounded-3xl border border-zinc-800">
                            {battleLog.map((log, i) => (
                                <div key={i} className={`text-xs font-bold uppercase tracking-wide flex items-center gap-3 ${i === 0 ? 'text-red-400' : 'text-zinc-500'}`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-red-500 animate-pulse' : 'bg-zinc-800'}`} />
                                    {log}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
                        <div className={`w-32 h-32 rounded-full border-2 flex items-center justify-center ${playerStrength > 0 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                            {playerStrength > 0 ? <Trophy className="h-16 w-16 text-emerald-500" /> : <Skull className="h-16 w-16 text-red-500" />}
                        </div>
                        <div className="max-w-xs space-y-4">
                            <h2 className="text-4xl font-black uppercase tracking-tighter italic">
                                {playerStrength > 0 ? 'Kemenangan!' : 'Kekalahan!'}
                            </h2>
                            <p className="text-zinc-500 text-sm font-medium">
                                {playerStrength > 0 
                                  ? `Operasi di ${invasion.target} berhasil diselesaikan. Wilayah musuh dalam kendali penuh.`
                                  : `Pasukan kita terpaksa mundur dari ${invasion.target} setelah mengalami kerugian besar.`}
                            </p>
                            <button 
                                onClick={onBack}
                                className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all"
                            >
                                KEMBALI KE MARKAS
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Strategic Intel */}
            <div className="col-span-3 space-y-6">
                <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl space-y-4">
                    <div className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-red-500" />
                        <h4 className="text-xs font-black uppercase tracking-widest text-zinc-300">Intelijen Lapangan</h4>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/50">
                            <span className="text-[9px] font-black text-zinc-500 uppercase block mb-1">Target Lokasi</span>
                            <span className="text-sm font-black text-white">{invasion.target}</span>
                        </div>
                        <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/50">
                            <span className="text-[9px] font-black text-zinc-500 uppercase block mb-1">Waktu Operasi</span>
                            <span className="text-sm font-black text-white">{new Date().toLocaleTimeString()}</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
                    <h4 className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-3">Saran Strategis</h4>
                    <p className="text-zinc-400 text-[10px] leading-relaxed font-bold">
                        Pantau terus tingkat persediaan logistik. Pastikan dukungan udara tetap aktif untuk meminimalisir korban jiwa.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
