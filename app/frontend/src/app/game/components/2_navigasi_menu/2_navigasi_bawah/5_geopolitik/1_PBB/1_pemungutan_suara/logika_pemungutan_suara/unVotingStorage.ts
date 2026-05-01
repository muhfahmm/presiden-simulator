declare var require: any;
import { storageSafety } from "@/app/game/utils/storageSafety";

const STORAGE_KEY = "em_un_voting_data";

export interface VotingHistoryItem {
  id: string;
  category: string;
  name: string;
  description: string;
  effect: string;
  passedDate: string;
  durationLabel?: string;
  targetCountry?: string;
  status: 'DITERIMA' | 'DITOLAK';
  startDate?: string;
  endDate?: string;
  results?: {
    yes: number;
    no: number;
    abstain: number;
    weightedYes?: number;
    weightedNo?: number;
    weightedAbstain?: number;
    details?: {
      supporters: string[];
      opponents: string[];
      abstainers: string[];
    };
  };
  bribedCountries?: Record<string, string>; 
}

export interface ActiveVoting {
  id: string;
  category: string;
  name: string;
  description: string;
  effect: string;
  targetCountry: string;
  durationLabel: string;
  resolutionDuration?: string; 
  startDate: string;
  endDate: string;
  progress: number; 
  proposer?: string; 
  userVote?: 'SETUJU' | 'TOLAK' | 'ABSTAIN';
  finalResults?: {
    yes: number;
    no: number;
    abstain: number;
    weightedYes?: number;
    weightedNo?: number;
    weightedAbstain?: number;
    details?: {
      supporters: string[];
      opponents: string[];
      abstainers: string[];
    };
  };
  aiBribeAttempted?: boolean;
  bribedCountries?: Record<string, string>;
}

export interface UNVotingState {
  votingHistory: VotingHistoryItem[];
  activeVotings: ActiveVoting[];
}

export const unVotingStorage = {
  // High-performance in-memory cache
  inMemoryData: null as UNVotingState | null,

  getData: (): UNVotingState => {
    if (typeof window === 'undefined') return { votingHistory: [], activeVotings: [] };
    
    // Use memory cache if available
    if (unVotingStorage.inMemoryData) return unVotingStorage.inMemoryData;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { votingHistory: [], activeVotings: [] };
    try {
      const data = JSON.parse(stored);
      const history = Array.isArray(data.votingHistory) ? data.votingHistory : 
                      Array.isArray(data.passedResolutions) ? data.passedResolutions : [];
      const active = Array.isArray(data.activeVotings) ? data.activeVotings : [];
      
      unVotingStorage.inMemoryData = {
        votingHistory: history,
        activeVotings: active
      };

      return unVotingStorage.inMemoryData;
    } catch (e) {
      console.error("[PBB Storage] Gagal membaca data:", e);
      return { votingHistory: [], activeVotings: [] };
    }
  },

  saveData: (data: UNVotingState) => {
    if (typeof window === 'undefined') return;
    
    // Update memory cache
    unVotingStorage.inMemoryData = data;

    // Dispatch event for UI updates (Async)
    setTimeout(() => window.dispatchEvent(new Event("un_voting_updated")), 0);
  },

  persist: () => {
    if (typeof window === 'undefined' || !unVotingStorage.inMemoryData) return;
    
    try {
        // SMART TRUNCATION: Before saving to disk, optimize the data
        const dataToSave = {
            activeVotings: unVotingStorage.inMemoryData.activeVotings,
            // Only keep last 15 history items on DISK to save space
            votingHistory: unVotingStorage.inMemoryData.votingHistory.slice(-15).map(item => ({
                ...item,
                // Remove bulky nation lists from history items on DISK to prevent QuotaExceededError
                results: item.results ? {
                    yes: item.results.yes,
                    no: item.results.no,
                    abstain: item.results.abstain,
                    details: undefined 
                } : undefined
            }))
        };

        storageSafety.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
        console.warn("[PBB Storage] Quota exceeded. Data preserved in RAM only.");
    }
  },

  startVoting: (voting: Omit<ActiveVoting, "id" | "progress" | "finalResults">, userCountry: string) => {
    const state = unVotingStorage.getData();
    const { simulateUNVote } = require("./votingLogic");
    const results = simulateUNVote(voting.targetCountry, userCountry, voting.category, userCountry, voting.name);
    
    const newVoting: ActiveVoting = {
      ...voting,
      id: `vote-${Date.now()}`,
      progress: 0,
      userVote: 'SETUJU', 
      proposer: userCountry,
      finalResults: {
        yes: results.yes,
        no: results.no,
        abstain: results.abstain,
        weightedYes: results.weightedYes,
        weightedNo: results.weightedNo,
        weightedAbstain: results.weightedAbstain,
        details: results.details
      }
    };
    
    unVotingStorage.saveData({
      ...state,
      activeVotings: [...state.activeVotings, newVoting]
    });
  },

  proposeAiResolution: (voting: Omit<ActiveVoting, "id" | "progress" | "finalResults" | "userVote">) => {
    const state = unVotingStorage.getData();
    const { simulateUNVote } = require("./votingLogic");
    const userCountry = (typeof window !== 'undefined' ? localStorage.getItem('selectedCountry') : "") || "";
    const results = simulateUNVote(voting.targetCountry, userCountry, voting.category, voting.proposer, voting.name);
    
    const newVoting: ActiveVoting = {
      ...voting,
      id: `ai-vote-${Date.now()}`,
      progress: 0,
      userVote: undefined, 
      finalResults: {
        yes: results.yes,
        no: results.no,
        abstain: results.abstain,
        weightedYes: results.weightedYes,
        weightedNo: results.weightedNo,
        weightedAbstain: results.weightedAbstain,
        details: results.details
      }
    };
    
    unVotingStorage.saveData({
      ...state,
      activeVotings: [...state.activeVotings, newVoting]
    });

    try {
      const { inboxStorage } = require("@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage");
      inboxStorage.addMessage({
        source: "Markas Besar PBB",
        subject: `USULAN SIDANG: ${voting.proposer}`,
        content: `${voting.proposer} mengajukan resolusi "${voting.name}" untuk negara ${voting.targetCountry}. Sidang telah dibuka di Markas PBB.`,
        priority: 'high',
        category: 'pbb'
      });
    } catch (e) {
      console.error("[PBB Notif] Gagal mengirim notifikasi:", e);
    }
  },

  checkMonthlyAiResolution: (gameDate: Date) => {
    if (typeof window === 'undefined') return;
    
    const day = gameDate.getDate();
    const monthKey = `${gameDate.getFullYear()}-${gameDate.getMonth()}`;
    const dayKey = `${monthKey}-${day}`;
    
    if (day !== 1 && day !== 15) return;

    const lastProcessedDay = localStorage.getItem("em_un_last_ai_resolution_day");
    if (lastProcessedDay === dayKey) return; 

    const { countries: allCountriesData } = require("@/app/pilih_negara/data/negara/index");
    const userCountry = localStorage.getItem('selected_country') || "Indonesia";
    
    const availableProposers = (allCountriesData || []).filter((c: any) => c.name_id !== userCountry);
    if (availableProposers.length === 0) return;

    const proposerObj = availableProposers[Math.floor(Math.random() * availableProposers.length)];
    const randomCountry = proposerObj.name_id;
    const proposerWeight = proposerObj.geopolitik?.un_vote || 1;
    const isSmallProposer = proposerWeight < 50; 

    const { getRelation } = require("./votingLogic");
    const allPossibleTargets = (allCountriesData || []).filter((c: any) => c.name_id !== randomCountry && c.name_id !== userCountry);
    const largeTargets = allPossibleTargets.filter((c: any) => (c.geopolitik?.un_vote || 0) >= 50);
    const smallTargets = allPossibleTargets.filter((c: any) => (c.geopolitik?.un_vote || 0) < 50);

    let randomTarget = "";
    if (isSmallProposer) {
        if (Math.random() < 0.65 && smallTargets.length > 0) {
            randomTarget = smallTargets[Math.floor(Math.random() * smallTargets.length)].name_id;
        } else if (largeTargets.length > 0) {
            randomTarget = largeTargets[Math.floor(Math.random() * largeTargets.length)].name_id;
        } else {
            randomTarget = allPossibleTargets[Math.floor(Math.random() * allPossibleTargets.length)].name_id;
        }
    } else {
        randomTarget = allPossibleTargets[Math.floor(Math.random() * allPossibleTargets.length)].name_id;
    }
    
    const rand = Math.random();
    let randomCategory = "";
    if (rand < 0.30) {
      randomCategory = "Rancangan Resolusi";
    } else if (rand < 0.65) {
      randomCategory = "Sanksi";
    } else {
      randomCategory = "Embargo";
    }
    
    if (randomCategory === "Rancangan Resolusi" && unVotingStorage.isWarBanActive()) {
      return;
    }

    if (randomCategory !== "Rancangan Resolusi") {
      try {
        const rel = getRelation(randomCountry, randomTarget);
        if (rel > 60) return;
      } catch(e) {}
    }
    
    let randomName = "";
    if (randomCategory === "Rancangan Resolusi") {
      randomName = "LARANGAN PERANG";
    } else if (randomCategory === "Sanksi") {
      randomName = "SANKSI EKONOMI";
    } else {
      const embargoOptions = [
        "EMBARGO EKONOMI",
        "EMBARGO PENJUALAN TEKNOLOGI",
        "EMBARGO PENJUALAN SUMBER DAYA",
        "EMBARGO SENJATA"
      ];
      randomName = embargoOptions[Math.floor(Math.random() * embargoOptions.length)];
    }

    const durations = ["6 Bulan", "9 Bulan", "1 Tahun", "3 Tahun"];
    const randomEffectDuration = durations[Math.floor(Math.random() * durations.length)];

    const isGlobalResolution = randomName === "LARANGAN PERANG";
    const actualTarget = isGlobalResolution ? "" : randomTarget;
    
    const targetObj = allPossibleTargets.find((c: any) => c.name_id === randomTarget);
    const isSuperpowerTarget = targetObj && (targetObj.geopolitik?.un_vote || 0) >= 150;
    const isBraveMove = isSmallProposer && isSuperpowerTarget;

    let description = "";
    if (isGlobalResolution) {
        description = `Resolusi ini diajukan oleh ${randomCountry} sebagai inisiatif perdamaian global untuk melarang segala bentuk konflik bersenjata dan menjaga stabilitas internasional.`;
    } else if (isBraveMove) {
        description = `Dalam langkah diplomatik yang sangat berani, ${randomCountry} mengajukan resolusi konfrontatif terhadap kekuatan adidaya ${randomTarget}. Resolusi ini membahas ${randomName.toLowerCase()} yang dianggap sebagai tantangan terhadap dominasi global demi kedaulatan negara-negara kecil.`;
    } else {
        description = `Resolusi ini diajukan oleh ${randomCountry} untuk membahas isu mendesak di ${randomTarget}. Fokus utama adalah ${randomName.toLowerCase()} dengan durasi usulan selama ${randomEffectDuration} demi stabilitas internasional.`;
    }

    unVotingStorage.proposeAiResolution({
      category: randomCategory,
      name: randomName,
      description: description,
      effect: isGlobalResolution
        ? `Penghentian dan larangan segala bentuk aktivitas militer agresif secara global.`
        : `Penerapan ${randomName.toLowerCase()} selama ${randomEffectDuration} terhadap wilayah target.`,
      targetCountry: actualTarget,
      proposer: randomCountry,
      durationLabel: "30 Hari",
      resolutionDuration: randomEffectDuration,
      startDate: gameDate.toISOString(),
      endDate: new Date(gameDate.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString()
    });

    localStorage.setItem("em_un_last_ai_resolution_day", dayKey);
  },

  castUserVote: (id: string, vote: 'SETUJU' | 'TOLAK' | 'ABSTAIN') => {
    const state = unVotingStorage.getData();
    const activeVotings = state.activeVotings.map(v => {
      if (v.id === id) {
        return { ...v, userVote: vote };
      }
      return v;
    });
    
    unVotingStorage.saveData({ ...state, activeVotings });
  },

  addHistoryItem: (item: Omit<VotingHistoryItem, "id" | "passedDate">) => {
    const state = unVotingStorage.getData();
    const newItem: VotingHistoryItem = {
      ...item,
      id: `res-${Date.now()}`,
      passedDate: new Date().toLocaleDateString('id-ID')
    };
    unVotingStorage.saveData({
      ...state,
      votingHistory: [...state.votingHistory, newItem]
    });
  },

  removeActiveVoting: (id: string) => {
    const state = unVotingStorage.getData();
    unVotingStorage.saveData({
      ...state,
      activeVotings: state.activeVotings.filter(v => v.id !== id)
    });
  },

  isWarBanActive: (): boolean => {
    if (typeof window === 'undefined') return false;
    const state = unVotingStorage.getData();
    const { timeStorage } = require("@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage");
    const now = timeStorage.getState().gameDate.getTime();

    const hasActiveVote = state.activeVotings.some(v => v.name === "LARANGAN PERANG");
    if (hasActiveVote) return true;

    const hasActiveHistory = state.votingHistory.some(h => {
      if (h.name !== "LARANGAN PERANG" || h.status !== 'DITERIMA') return false;
      if (!h.startDate || !h.endDate) return false;
      const start = new Date(h.startDate).getTime();
      const end = new Date(h.endDate).getTime();
      return now >= start && now <= end;
    });

    return hasActiveHistory;
  },

  bribeToChoice: (votingId: string, countryName: string, targetVote: 'supporters' | 'opponents', isAi: boolean = false, briberName: string = "") => {
    const state = unVotingStorage.getData();
    const voting = state.activeVotings.find(v => v.id === votingId);
    if (!voting || !voting.finalResults || !voting.finalResults.details) return;

    const details = voting.finalResults.details;
    let found = false;

    if (details.supporters.includes(countryName)) {
      details.supporters = details.supporters.filter(c => c !== countryName);
      found = true;
    }
    if (details.opponents.includes(countryName)) {
      details.opponents = details.opponents.filter(c => c !== countryName);
      found = true;
    }
    if (details.abstainers.includes(countryName)) {
      details.abstainers = details.abstainers.filter(c => c !== countryName);
      found = true;
    }

    if (found) {
      if (targetVote === 'supporters') details.supporters.push(countryName);
      else if (targetVote === 'opponents') details.opponents.push(countryName);
      else if (targetVote as string === 'abstainers') details.abstainers.push(countryName);
      
      voting.finalResults.yes = details.supporters.length;
      voting.finalResults.no = details.opponents.length;
      voting.finalResults.abstain = details.abstainers.length;

      if (!voting.bribedCountries) voting.bribedCountries = {};
      
      if (isAi) {
        const side = targetVote === 'supporters' ? 'mendukung' : 'menentang';
        voting.bribedCountries[countryName] = briberName 
          ? `Menerima paket bantuan ekonomi dan lobi diplomatik dari ${briberName} untuk ${side} resolusi ini.`
          : `Menerima tekanan diplomatik dan insentif strategis untuk ${side} resolusi ini.`;
      } else {
        voting.bribedCountries[countryName] = `Menerima paket lobi dari pihak pemain untuk memilih ${targetVote === 'supporters' ? 'SETUJU' : 'TOLAK'}.`;
      }

      unVotingStorage.saveData(state);
      window.dispatchEvent(new CustomEvent("un_voting_updated"));
    }
  },

  bribeCountry: (votingId: string, countryName: string, isAi: boolean = false) => {
    unVotingStorage.bribeToChoice(votingId, countryName, 'supporters', isAi);
  },

  processAiBribery: () => {
    const state = unVotingStorage.getData();
    const userCountry = localStorage.getItem('selected_country') || "";
    let changed = false;

    state.activeVotings.forEach(v => {
      if (Math.random() < 0.25) {
        const { countries: allCountriesData } = require("@/app/pilih_negara/data/negara/index");
        const details = v.finalResults?.details;
        if (!details) return;

        const supporters = details.supporters.filter(c => c !== userCountry);
        const opponents = details.opponents.filter(c => c !== userCountry);
        
        const activeBlock = Math.random() < 0.5 ? 'supporters' : 'opponents';
        const briberCandidates = activeBlock === 'supporters' ? supporters : opponents;
        
        if (briberCandidates.length > 0) {
          const briberName = briberCandidates[Math.floor(Math.random() * briberCandidates.length)];
          const briberData = allCountriesData.find((c: any) => c.name_id === briberName);
          const bribePower = (briberData?.geopolitik?.un_vote || 0) / 200;
          if (Math.random() < bribePower + 0.1) {
            const targetBlock = activeBlock === 'supporters' ? [...details.opponents, ...details.abstainers] : [...details.supporters, ...details.abstainers];
            const aiTargets = targetBlock.filter(c => c !== userCountry && c !== briberName);

            if (aiTargets.length > 0) {
              const numToBribe = Math.min(aiTargets.length, Math.floor(Math.random() * 2) + 1);
              for (let i = 0; i < numToBribe; i++) {
                const target = aiTargets[Math.floor(Math.random() * aiTargets.length)];
                unVotingStorage.bribeToChoice(v.id, target, activeBlock, true, briberName);
              }
              changed = true;
            }
          }
        }
      }
    });

    if (changed) unVotingStorage.saveData(state);
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    unVotingStorage.inMemoryData = null;
    window.dispatchEvent(new Event("un_voting_updated"));
  }
};

