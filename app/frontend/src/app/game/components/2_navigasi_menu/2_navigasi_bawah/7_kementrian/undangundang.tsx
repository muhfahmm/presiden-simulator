import { MOCK_LAWS, Law } from "./2_database_undang_undang/database_uu";
import { getAiRecommendations } from "./2_database_undang_undang/ai_bot/routes";
import { Sparkles, Brain, Target, Info, Scale, FileText, ShieldCheck, Zap, Heart, Briefcase, ChevronRight, Activity, Coins, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { calculatePopulationHappiness } from "@/app/game/components/1_navbar/1_kepuasan";
import { countries } from "@/app/database/data/negara/index";
import { lawStorage } from "./2_database_undang_undang/lawStorage";
import { ideologyStorage } from "../6_sosial_budaya/2_ideologi/ideologyStorage";
import { religionStorage } from "../6_sosial_budaya/1_agama/religionStorage";
import { DEMOKRASI_POLITICAL_COST_MULTIPLIER } from "../6_sosial_budaya/2_ideologi/logic/1_demokrasi/2_minus/minus";


export default function UndangUndangTab() {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [activeLawIds, setActiveLawIds] = useState<number[]>(lawStorage.getActiveLawIds());
  const [userBudget, setUserBudget] = useState(budgetStorage.getBudget());
  
  // Ambil data real dari storage
  const session = gameStorage.getSession();
  const countryName = session?.country || "Indonesia";
  const currentCountry = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];

  const [currentIdeology, setCurrentIdeology] = useState(ideologyStorage.getCurrentIdeology(currentCountry.ideology));
  const [currentReligion, setCurrentReligion] = useState(religionStorage.getCurrentReligion(currentCountry.religion));

  const isDemokrasi = currentIdeology === "Demokrasi";

  const happiness = calculatePopulationHappiness();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const aiSession = { 
          approval_rating: happiness.global,
          cash: userBudget,
          religion: currentReligion,
          ideology: currentIdeology
        };
        
        const response = await fetch('/api/ai_recommend', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            country: currentCountry,
            session: aiSession
          })
        });

        if (response.ok) {
          const recs = await response.json();
          setRecommendations(recs);
        } else {
          // Fallback to local mock if API fails
          const recs = getAiRecommendations(currentCountry, { 
            approval_rating: happiness.global, 
            cash: userBudget,
            religion: currentReligion,
            ideology: currentIdeology
          });
          setRecommendations(recs);
        }
      } catch (err) {
        console.error("AI Recommendation Fetch Error:", err);
      }
    };

    fetchRecommendations();

    const handleBudgetUpdate = () => setUserBudget(budgetStorage.getBudget());
    const handleLawUpdate = () => setActiveLawIds(lawStorage.getActiveLawIds());
    const handleReligionUpdate = (e: any) => setCurrentReligion(e.detail.religion);
    const handleIdeologyUpdate = (e: any) => setCurrentIdeology(e.detail.ideology);
    
    window.addEventListener('budget_storage_updated', handleBudgetUpdate);
    window.addEventListener('law_activated', handleLawUpdate);
    window.addEventListener('religion_updated', handleReligionUpdate as any);
    window.addEventListener('ideology_updated', handleIdeologyUpdate as any);

    return () => {
      window.removeEventListener('budget_storage_updated', handleBudgetUpdate);
      window.removeEventListener('law_activated', handleLawUpdate);
      window.removeEventListener('religion_updated', handleReligionUpdate as any);
      window.removeEventListener('ideology_updated', handleIdeologyUpdate as any);
    };
  }, [currentReligion, currentIdeology, userBudget, happiness.global]);

  const handleSahkanLaw = (lawId: number, cost: number) => {
    if (userBudget < cost) return;
    
    budgetStorage.updateBudget(-cost);
    lawStorage.activateLaw(lawId);
  };

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
          <StatBox label="Rancangan" value={MOCK_LAWS.filter(l => !activeLawIds.includes(l.id)).length} color="text-amber-400" />
          <StatBox label="Aktif" value={activeLawIds.length} color="text-emerald-400" />
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
                  const isActive = activeLawIds.includes(law.id);
                  const individualCost = isDemokrasi ? law.price * DEMOKRASI_POLITICAL_COST_MULTIPLIER : law.price;
                  const isInsufficient = userBudget < individualCost;

                  return (
                    <div 
                      key={law.id}
                      className={`bg-zinc-950/60 border p-6 rounded-3xl transition-all group flex flex-col gap-5 relative overflow-hidden h-full min-h-[380px] shadow-2xl ${
                        isActive 
                          ? "border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20"
                          : isRecommended 
                            ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20 hover:border-purple-500' 
                            : 'border-zinc-900 hover:border-purple-500/50'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent z-20" />
                      )}
                      {isRecommended && !isActive && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent z-20" />
                      )}
                      
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-current opacity-[0.03] -mr-16 -mt-16 rounded-full blur-3xl transition-opacity group-hover:opacity-[0.07] ${law.color.replace('text-', 'bg-')}`} />
                      
                      <div className="relative z-10 flex justify-between items-start mb-2">
                        <div className={`p-3 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform duration-500 shadow-inner ${law.color}`}>
                          <law.icon className="h-6 w-6" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2">
                            <div className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${
                              isActive 
                                ? "bg-emerald-500 text-black border-emerald-400" 
                                : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                            }`}>
                              {isActive ? "Aktif" : "Rancangan"}
                            </div>
                            <button 
                              className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all active:scale-90 group/info"
                              title="Detail Regulasi"
                            >
                              <Info className="h-3 w-3" />
                            </button>
                          </div>
                          {isRecommended && !isActive && (
                            <div className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-[8px] font-black text-purple-400 uppercase tracking-widest rounded-md animate-pulse">
                              AI Suggestion
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10 space-y-2">
                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">{law.category}</p>
                        <h4 className={`text-base font-black leading-tight transition-colors uppercase italic mb-1 tracking-tight min-h-[3.5rem] flex items-center ${isActive ? 'text-emerald-400' : 'text-white group-hover:text-purple-400'}`}>
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
                            <p className="text-[11px] font-bold text-zinc-300 italic leading-tight">{law.minus}</p>
                          </div>
                        </div>
                        
                        {!isActive ? (
                          <div className="flex flex-col gap-2">
                             <div className="flex items-center justify-between px-2">
                                <div className="flex items-center gap-1.5">
                                   <Coins className={`h-3 w-3 ${isDemokrasi ? 'text-amber-500' : 'text-zinc-500'}`} />
                                   <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Biaya Politik {isDemokrasi && <span className="text-amber-500 italic">(Demokrasi +50%)</span>}</span>
                                </div>
                                <span className={`text-[10px] font-black tabular-nums ${isInsufficient ? 'text-rose-500' : 'text-white'}`}>
                                   {individualCost.toLocaleString('id-ID')}
                                </span>
                             </div>
                             <button 
                                onClick={() => handleSahkanLaw(law.id, individualCost)}
                                disabled={isInsufficient}
                                className={`w-full py-3.5 rounded-xl border text-xs font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-lg ${
                                   isInsufficient 
                                   ? "bg-zinc-900/50 border-zinc-800 text-zinc-600 grayscale cursor-not-allowed" 
                                   : "bg-purple-600 border-purple-500 text-white hover:bg-purple-500"
                                }`}
                             >
                                <FileText className="h-4 w-4" />
                                {isInsufficient ? 'Dana Kurang' : 'Sahkan Undang-Undang'}
                             </button>
                          </div>
                        ) : (
                          <div className="w-full py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 italic">
                            <CheckCircle className="h-4 w-4" />
                            Hukum Berlaky
                          </div>
                        )}
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

