import { MOCK_LAWS, Law } from "./2_database_undang_undang/database_uu";
import { getAiRecommendations } from "./2_database_undang_undang/ai_bot/routes";
import { Sparkles, Brain, Target, Info, Scale, FileText, ShieldCheck, Zap, Heart, Briefcase, ChevronRight, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { countries } from "@/app/database/data/countries/region/index";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { calculatePopulationHappiness } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan";

export default function UndangUndangTab() {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  
  // Ambil data real dari storage
  const session = gameStorage.getSession();
  const countryName = session?.country || "Indonesia";
  const currentCountry = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
  
  const happiness = calculatePopulationHappiness();
  const budget = budgetStorage.getBudget();

  useEffect(() => {
    const aiSession = { 
      approval_rating: happiness.global,
      cash: budget
    };
    const recs = getAiRecommendations(currentCountry, aiSession);
    setRecommendations(recs);
  }, []);

  const groupedLaws = MOCK_LAWS.reduce((acc, law) => {
    if (!acc[law.category]) acc[law.category] = [];
    acc[law.category].push(law);
    return acc;
  }, {} as Record<string, Law[]>);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
      <div className="flex items-center justify-between px-4">
        <div>
          <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Legislasi & Regulasi Nasional</h3>
          <p className="text-sm text-zinc-500 font-bold uppercase tracking-[0.2em] mt-2">Ketatanegaraan • Dashboard Pengesahan Undang-Undang</p>
        </div>
        <div className="flex gap-6 mb-3">
          <StatBox label="Total UU" value={MOCK_LAWS.length} color="text-purple-400" />
          <StatBox label="Rancangan" value={MOCK_LAWS.filter(l => l.status === "Rancangan").length} color="text-amber-400" />
        </div>
      </div>

      {/* AI RECOMMENDATION HUD */}
      <div className="mx-4 p-8 rounded-[2.5rem] bg-zinc-950 border border-zinc-800/80 relative overflow-hidden shadow-2xl group">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
          <Brain className="h-48 w-48 text-purple-500 -mr-16 -mt-16" />
        </div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-purple-500/20 rounded-xl border border-purple-500/30 animate-pulse">
                <Sparkles className="h-5 w-5 text-purple-400" />
               </div>
               <h4 className="text-sm font-black text-white uppercase tracking-[0.4em] italic">AI Intelligence Hub</h4>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none max-w-lg">
              Sistem Otomasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Rekomendasi Kebijakan</span>
            </h2>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-[0.2em] max-w-xl leading-relaxed">
              Bot AI menganalisis parameter ekonomi, tingkat kriminalitas, dan stabilitas nasional untuk merekomendasikan legislasi strategis.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {recommendations.map((rec, idx) => {
              const law = MOCK_LAWS.find(l => l.id === rec.lawId);
              return (
                <div key={idx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/40 transition-all flex flex-col gap-1.5 min-h-[80px] group/item relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/[0.02] group-hover/item:to-purple-500/10 transition-colors" />
                   <div className="relative z-10 flex items-center gap-2">
                    <div className={`p-1 rounded-md bg-zinc-900 border border-zinc-800 ${law?.color}`}>
                       {law && <law.icon className="h-3 w-3" />}
                    </div>
                    <span className="text-[9px] font-black text-white uppercase tracking-wider truncate">{law?.title}</span>
                  </div>
                  <p className="relative z-10 text-[9px] font-bold text-zinc-400 italic leading-tight line-clamp-2">"{rec.reason}"</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pb-32">
        {Object.entries(groupedLaws).map(([category, laws], index) => (
          <div key={category} className="animate-in fade-in slide-in-from-left-4 duration-500">
            {index !== 0 && <div className="h-28" />}
            <div className="space-y-12">
              <div className="flex items-center gap-6 mt-4 px-10">
                 <div className="h-px flex-1 bg-zinc-800/40" />
                 <h3 className="text-sm font-black text-zinc-400 uppercase tracking-[0.5em] whitespace-nowrap italic">{category}</h3>
                 <div className="h-px flex-1 bg-zinc-800/40" />
              </div>
              
              <div className="grid grid-cols-5 gap-6 px-1">
                {laws.map((law) => {
                  const isRecommended = recommendations.some(r => r.lawId === law.id);
                  return (
                    <div 
                      key={law.id}
                      className={`bg-zinc-950/60 border p-6 rounded-3xl transition-all hover:border-purple-500/50 group flex flex-col gap-5 relative overflow-hidden h-full min-h-[380px] shadow-2xl ${
                        isRecommended ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20' : 'border-zinc-900'
                      }`}
                    >
                      {isRecommended && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent z-20" />
                      )}
                      
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-current opacity-[0.03] -mr-16 -mt-16 rounded-full blur-3xl transition-opacity group-hover:opacity-[0.07] ${law.color.replace('text-', 'bg-')}`} />
                      
                      <div className="relative z-10 flex justify-between items-start mb-2">
                        <div className={`p-3 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform duration-500 shadow-inner ${law.color}`}>
                          <law.icon className="h-6 w-6" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${
                            law.status === "Aktif" 
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                              : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                          }`}>
                            {law.status}
                          </div>
                          {isRecommended && (
                            <div className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-[8px] font-black text-purple-400 uppercase tracking-widest rounded-md animate-pulse">
                              AI Suggestion
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10 space-y-2">
                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">{law.category}</p>
                        <h4 className="text-base font-black text-white leading-tight group-hover:text-purple-400 transition-colors uppercase italic mb-1 tracking-tight min-h-[3.5rem] flex items-center">
                          {law.title}
                        </h4>
                        <p className="text-xs font-bold text-zinc-400 leading-relaxed italic line-clamp-3">
                          "{law.description}"
                        </p>
                      </div>

                      <div className="relative z-10 space-y-3 mt-auto">
                        <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/5 space-y-3 shadow-inner">
                          <div className="space-y-1">
                            <p className="text-xs font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 opacity-80">
                              <Zap className="h-3.5 w-3.5" /> Keuntungan
                            </p>
                            <p className="text-[11px] font-bold text-zinc-300 italic leading-tight">{law.plus}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs font-black text-rose-400 uppercase tracking-widest flex items-center gap-1.5 opacity-80">
                              <ShieldCheck className="h-3.5 w-3.5" /> Kerugian
                            </p>
                            <p className="text-[11px] font-bold text-zinc-400 italic leading-tight">{law.minus}</p>
                          </div>
                        </div>
                        
                        <button 
                          className="w-full py-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-xs font-black uppercase tracking-widest text-zinc-400 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-lg"
                        >
                          <FileText className="h-4 w-4" />
                          Sahkan Undang-Undang
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string, value: number | string, color: string }) {
  return (
    <div className="px-6 py-3 bg-zinc-900/60 border border-zinc-800 rounded-[1.5rem] shadow-inner flex flex-col items-center">
      <p className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className={`text-2xl font-black ${color} tracking-tighter`}>{value}</p>
    </div>
  );
}
