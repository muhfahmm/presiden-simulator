
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
  results?: {
    yes: number;
    no: number;
    abstain: number;
    weightedYes?: number;
    weightedNo?: number;
    weightedAbstain?: number;
  };
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
    
    const aiCountries = ["Amerika Serikat", "Rusia", "China", "Inggris", "Prancis", "Jepang", "Jerman", "India", "Brazil", "Australia", "Arab Saudi", "Turki", "Korea Selatan"];
    const randomCountry = aiCountries[Math.floor(Math.random() * aiCountries.length)];
    
    // Filter target agar tidak menyerang sekutu sendiri (Rasionalitas Proposer)
    const possibleTargets = ["Korea Utara", "Iran", "Suriah", "Israel", "Ukraina", "Taiwan", "Venezuela", "Sudan", "Myanmar", "Afghanistan", "Libya", "Rusia", "China", "Amerika Serikat"];
    
    // Penentuan Judul Resolusi berdasarkan Kategori yang ada di Card UI
    const resolutionCategories = ["Rancangan Resolusi", "Sanksi", "Embargo"];
    const randomCategory = resolutionCategories[Math.floor(Math.random() * resolutionCategories.length)];

    // Logika Pemilihan Target yang Rasional
    const { getRelation } = require("./votingLogic");
    const targets = possibleTargets.filter(t => {
      if (t === randomCountry) return false;
      if (randomCategory === "Rancangan Resolusi") return true; // Resolusi damai bisa ke siapa saja
      
      // Jika Sanksi/Embargo, hanya ke negara dengan relasi buruk (< 45)
      try {
        const rel = getRelation(randomCountry, t);
        return rel < 45;
      } catch(e) {
        return true; 
      }
    });

    // Jika tidak ada target yang cocok (misal semua teman), batalkan usulan bulan ini
    if (targets.length === 0) return;

    let randomTarget = targets[Math.floor(Math.random() * targets.length)];
    
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
    const durations = ["6 Bulan", "1 Tahun", "2 Tahun", "5 Tahun"];
    const randomEffectDuration = durations[Math.floor(Math.random() * durations.length)];

    const isGlobalResolution = randomName === "LARANGAN PERANG";
    const actualTarget = isGlobalResolution ? "" : randomTarget;

    unVotingStorage.proposeAiResolution({
      category: randomCategory,
      name: randomName,
      description: isGlobalResolution 
        ? `Resolusi ini diajukan oleh ${randomCountry} sebagai inisiatif perdamaian global untuk melarang segala bentuk konflik bersenjata dan menjaga stabilitas internasional.`
        : `Resolusi ini diajukan oleh ${randomCountry} untuk membahas isu mendesak di ${randomTarget}. Fokus utama adalah ${randomName.toLowerCase()} dengan durasi usulan selama ${randomEffectDuration} demi stabilitas internasional.`,
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

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("un_voting_updated"));
  }
};
