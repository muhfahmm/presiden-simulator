
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
  resolutionDuration?: string; // Durasi efek sanksi/embargo
  startDate: string;
  endDate: string;
  progress: number; // 0 to 100
  proposer?: string; // Nama negara pengusul
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
  getData: (): UNVotingState => {
    if (typeof window === 'undefined') return { votingHistory: [], activeVotings: [] };
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { votingHistory: [], activeVotings: [] };
    try {
      const data = JSON.parse(stored);
      const history = Array.isArray(data.votingHistory) ? data.votingHistory : 
                      Array.isArray(data.passedResolutions) ? data.passedResolutions : [];
      const active = Array.isArray(data.activeVotings) ? data.activeVotings : [];
      
      return {
        votingHistory: history,
        activeVotings: active
      };
    } catch (e) {
      console.error("[PBB Storage] Gagal membaca data:", e);
      return { votingHistory: [], activeVotings: [] };
    }
  },

  saveData: (data: UNVotingState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event("un_voting_updated"));
  },

  startVoting: (voting: Omit<ActiveVoting, "id" | "progress" | "finalResults">, userCountry: string) => {
    const state = unVotingStorage.getData();
    const { simulateUNVote } = require("./votingLogic");
    const results = simulateUNVote(voting.targetCountry, userCountry, voting.category, userCountry, voting.name);
    
    const newVoting: ActiveVoting = {
      ...voting,
      id: `vote-${Date.now()}`,
      progress: 0,
      userVote: 'SETUJU', // Pemain otomatis setuju jika mereka yang mengusulkan
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

  // Logika Baru: AI mengajukan resolusi
  proposeAiResolution: (voting: Omit<ActiveVoting, "id" | "progress" | "finalResults" | "userVote">) => {
    const state = unVotingStorage.getData();
    const { simulateUNVote } = require("./votingLogic");
    
    // Ambil data negara pemain untuk simulasi
    const userCountry = (typeof window !== 'undefined' ? localStorage.getItem('selectedCountry') : "") || "";

    const results = simulateUNVote(voting.targetCountry, userCountry, voting.category, voting.proposer, voting.name);
    
    const newVoting: ActiveVoting = {
      ...voting,
      id: `ai-vote-${Date.now()}`,
      progress: 0,
      userVote: undefined, // Belum dipilih oleh user
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

    // KIRIM NOTIFIKASI KE INBOX & TOAST
    try {
      const { inboxStorage } = require("@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage");
      inboxStorage.addMessage({
        source: "Markas Besar PBB",
        subject: `USULAN SIDANG: ${voting.proposer}`,
        content: `${voting.proposer} mengajukan resolusi "${voting.name}" untuk negara ${voting.targetCountry}. Sidang telah dibuka di Markas PBB.`,
        priority: 'high',
        category: 'diplomacy'
      });
    } catch (e) {
      console.error("[PBB Notif] Gagal mengirim notifikasi:", e);
    }
  },

  // Logika Otomatis: Cek dan trigger resolusi AI setiap bulan
  checkMonthlyAiResolution: (gameDate: Date) => {
    if (typeof window === 'undefined') return;
    
    const day = gameDate.getDate();
    const monthKey = `${gameDate.getFullYear()}-${gameDate.getMonth()}`;
    const dayKey = `${monthKey}-${day}`;
    
    // Kita ingin trigger di tanggal 1 dan tanggal 15 setiap bulan
    if (day !== 1 && day !== 15) return;

    const lastProcessedDay = localStorage.getItem("em_un_last_ai_resolution_day");
    if (lastProcessedDay === dayKey) return; // Sudah diproses untuk hari ini

    console.log(`[PBB AI] Memicu resolusi otomatis pada tanggal: ${dayKey}`);
    
    const { countries: allCountriesData } = require("@/app/pilih_negara/data/negara/benua/index");
    const userCountry = localStorage.getItem('selected_country') || "Indonesia";
    
    // Filter out user and non-member entities
    const availableProposers = (allCountriesData || []).filter((c: any) => c.name_id !== userCountry);
    if (availableProposers.length === 0) return;

    const proposerObj = availableProposers[Math.floor(Math.random() * availableProposers.length)];
    const randomCountry = proposerObj.name_id;
    const proposerWeight = proposerObj.geopolitik?.un_vote || 1;
    const isSmallProposer = proposerWeight < 50; // Definisi negara kecil

    // Logika Pemilihan Target yang Rasional & Distribusi Negara Kecil
    const { getRelation } = require("./votingLogic");
    
    // Klasifikasi Target
    const allPossibleTargets = (allCountriesData || []).filter((c: any) => c.name_id !== randomCountry && c.name_id !== userCountry);
    const largeTargets = allPossibleTargets.filter((c: any) => (c.geopolitik?.un_vote || 0) >= 50);
    const smallTargets = allPossibleTargets.filter((c: any) => (c.geopolitik?.un_vote || 0) < 50);

    let randomTarget = "";
    
    if (isSmallProposer) {
        // Jika negara kecil yang mengusulkan: 65% ke sesama negara kecil, 35% ke negara besar
        if (Math.random() < 0.65 && smallTargets.length > 0) {
            randomTarget = smallTargets[Math.floor(Math.random() * smallTargets.length)].name_id;
        } else if (largeTargets.length > 0) {
            randomTarget = largeTargets[Math.floor(Math.random() * largeTargets.length)].name_id;
        } else {
            randomTarget = allPossibleTargets[Math.floor(Math.random() * allPossibleTargets.length)].name_id;
        }
    } else {
        // Jika negara besar: Target acak dari daftar global (Bisa ditambahkan logika rivalitas nanti)
        randomTarget = allPossibleTargets[Math.floor(Math.random() * allPossibleTargets.length)].name_id;
    }
    
    // Penentuan Judul Resolusi berdasarkan Kategori yang ada di Card UI (Weighted Probability)
    const rand = Math.random();
    let randomCategory = "";
    if (rand < 0.30) {
      randomCategory = "Rancangan Resolusi";
    } else if (rand < 0.65) {
      randomCategory = "Sanksi";
    } else {
      randomCategory = "Embargo";
    }
    
    // CEK: Jika kategori adalah Rancangan Resolusi (Larangan Perang), cek apakah sudah ada yang aktif
    if (randomCategory === "Rancangan Resolusi" && unVotingStorage.isWarBanActive()) {
      console.log("[PBB AI] Larangan Perang sudah aktif atau sedang disidangkan. Batalkan usulan AI.");
      return;
    }

    // Validasi Hubungan (Opsional: Batalkan jika Proposer berteman baik dengan Target untuk Sanksi/Embargo)
    if (randomCategory !== "Rancangan Resolusi") {
      try {
        const rel = getRelation(randomCountry, randomTarget);
        if (rel > 60) {
          console.log(`[PBB AI] ${randomCountry} berteman dengan ${randomTarget} (${rel}). Membatalkan sanksi.`);
          return;
        }
      } catch(e) {}
    }
    
    let randomName = "";
    if (randomCategory === "Rancangan Resolusi") {
      randomName = "LARANGAN PERANG";
    } else if (randomCategory === "Sanksi") {
      randomName = "SANKSI EKONOMI";
    } else {
      // Opsi untuk Embargo (Ada 4 Opsi sesuai Gambar)
      const embargoOptions = [
        "EMBARGO EKONOMI",
        "EMBARGO PENJUALAN TEKNOLOGI",
        "EMBARGO PENJUALAN SUMBER DAYA",
        "EMBARGO SENJATA"
      ];
      randomName = embargoOptions[Math.floor(Math.random() * embargoOptions.length)];
    }

    // Penentuan Durasi Efek (Berapa lama sanksi/embargo berlaku jika lolos)
    const durations = ["6 Bulan", "9 Bulan", "1 Tahun", "3 Tahun"];
    const randomEffectDuration = durations[Math.floor(Math.random() * durations.length)];

    const isGlobalResolution = randomName === "LARANGAN PERANG";
    const actualTarget = isGlobalResolution ? "" : randomTarget;
    
    // Deteksi keberanian: Negara Kecil vs Superpower
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

  // Logika Baru: User memberikan suara
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
    
    // Import timeStorage secara dinamis
    const { timeStorage } = require("@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage");
    const now = timeStorage.getState().gameDate.getTime();

    // 1. Cek apakah sedang ada pemungutan suara aktif untuk Larangan Perang
    const hasActiveVote = state.activeVotings.some(v => v.name === "LARANGAN PERANG");
    if (hasActiveVote) return true;

    // 2. Cek apakah ada di histori yang statusnya DITERIMA dan tanggalnya masih berlaku
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

    // Hapus dari daftar lama (bisa dari supporters, opponents, atau abstainers)
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
      // Tambahkan ke daftar baru
      if (targetVote === 'supporters') details.supporters.push(countryName);
      else if (targetVote === 'opponents') details.opponents.push(countryName);
      else if (targetVote as string === 'abstainers') details.abstainers.push(countryName);
      
      // Update counts
      voting.finalResults.yes = details.supporters.length;
      voting.finalResults.no = details.opponents.length;
      voting.finalResults.abstain = details.abstainers.length;

      // Add reason
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
    // Legacy support for older calls, defaults to supporters
    unVotingStorage.bribeToChoice(votingId, countryName, 'supporters', isAi);
  },

  processAiBribery: () => {
    const state = unVotingStorage.getData();
    const userCountry = localStorage.getItem('selected_country') || "";
    let changed = false;

    state.activeVotings.forEach(v => {
      // Setiap resolusi punya 25% peluang terjadi lobi AI per hari
      if (Math.random() < 0.25) {
        // Cari negara AI yang memiliki pengaruh besar (un_vote > 80)
        const { countries: allCountriesData } = require("@/app/pilih_negara/data/negara/benua/index");
        const details = v.finalResults?.details;
        if (!details) return;

        // Tentukan siapa yang akan menyuap (bisa pendukung atau penentang)
        const supporters = details.supporters.filter(c => c !== userCountry);
        const opponents = details.opponents.filter(c => c !== userCountry);
        
        // Pilih blok mana yang akan aktif melobi (50/50 chance if both exist)
        const activeBlock = Math.random() < 0.5 ? 'supporters' : 'opponents';
        const briberCandidates = activeBlock === 'supporters' ? supporters : opponents;
        
        if (briberCandidates.length > 0) {
          const briberName = briberCandidates[Math.floor(Math.random() * briberCandidates.length)];
          const briberData = allCountriesData.find((c: any) => c.name_id === briberName);
          
          // Negara besar lebih cenderung melobi
          const bribePower = (briberData?.geopolitik?.un_vote || 0) / 200;
          if (Math.random() < bribePower + 0.1) {
            // Tentukan target lobi (cari dari blok lawan atau abstain)
            const targetBlock = activeBlock === 'supporters' ? [...details.opponents, ...details.abstainers] : [...details.supporters, ...details.abstainers];
            const aiTargets = targetBlock.filter(c => c !== userCountry && c !== briberName);

            if (aiTargets.length > 0) {
              // Lobi 1-2 negara
              const numToBribe = Math.min(aiTargets.length, Math.floor(Math.random() * 2) + 1);
              for (let i = 0; i < numToBribe; i++) {
                const target = aiTargets[Math.floor(Math.random() * aiTargets.length)];
                unVotingStorage.bribeToChoice(v.id, target, activeBlock, true, briberName);
              }
              changed = true;
              console.log(`[PBB AI] ${briberName} melakukan lobi untuk blok ${activeBlock} dalam resolusi ${v.name}`);
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
    window.dispatchEvent(new Event("un_voting_updated"));
  }
};
