import React from 'react';
import { Heart, Shield } from 'lucide-react';
import { getNationalHealthImpact } from '@/app/game/data/layanan_publik/kesehatan/healthLogic';
import { getNationalSecurityImpact } from '@/app/game/data/layanan_publik/keamanan/securityLogic';

interface ImpactBarsProps {
  source: string;
  subject: string;
  content?: string;
}

export const ImpactBars: React.FC<ImpactBarsProps> = ({ source, subject, content }) => {
  const src = source.toLowerCase();
  const sub = subject.toLowerCase();
  const con = (content || '').toLowerCase();

  // Check for Health-related keywords
  const isHealth = src.includes('kesehatan') || sub.includes('kesehatan') || con.includes('medis') || con.includes('pandemi');
  // Check for Security-related keywords
  const isSecurity = src.includes('keamanan') || src.includes('pertahanan') || src.includes('hukum') || sub.includes('keamanan') || sub.includes('militer');

  if (isHealth) {
    const impact = getNationalHealthImpact();
    return (
      <div className="mt-6 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 animate-in fade-in duration-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Heart className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Kontribusi Harapan Hidup Nasional</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-1.5 flex-1 bg-zinc-800/50 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 animate-pulse" style={{ width: `${impact.coveragePercent}%` }} />
              </div>
              <span className="text-[11px] font-black text-emerald-400 italic tabular-nums">+{impact.formattedYears}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSecurity) {
    const impact = getNationalSecurityImpact();
    return (
      <div className="mt-6 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20 animate-in fade-in duration-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Shield className="h-4 w-4 text-blue-400" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Tingkat Keamanan Nasional</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-1.5 flex-1 bg-zinc-800/50 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 animate-pulse" style={{ width: `${impact.coveragePercent}%` }} />
              </div>
              <span className="text-[11px] font-black text-blue-400 italic tabular-nums">{impact.formattedLevel}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
