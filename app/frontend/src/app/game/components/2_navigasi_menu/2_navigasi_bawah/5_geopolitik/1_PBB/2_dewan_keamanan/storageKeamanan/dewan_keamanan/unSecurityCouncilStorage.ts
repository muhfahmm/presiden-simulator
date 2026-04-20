import { UNGroup, getCountriesByGroup, UN_GROUPS_CONFIG } from "./unGroups";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { countries } from "@/app/database/data/negara/benua/index";

const STORAGE_KEY = "em_un_security_council";

export interface UNSCMember {
  name: string;
  flag: string;
  group: UNGroup;
  termStart: number; // Year
  termEnd: number;   // Year
  isPermanent: boolean;
}

export interface UNSCState {
  members: UNSCMember[];
  history: string[]; // Countries that just served (cannot be re-elected for 1 year)
  lastElectionYear: number;
  isPlayerCandidate: boolean; // Is Indonesia running for election?
  playerVotes: number;        // Current vote count for Indonesia
}

const P5: Omit<UNSCMember, "termStart" | "termEnd" | "group">[] = [
  { name: "Amerika Serikat", flag: "🇺🇸", isPermanent: true },
  { name: "Sains Rusia", flag: "🇷🇺", isPermanent: true }, // Note: check exact name in db
  { name: "China", flag: "🇨🇳", isPermanent: true },
  { name: "Inggris", flag: "🇬🇧", isPermanent: true },
  { name: "Prancis", flag: "🇫🇷", isPermanent: true },
];

export const unSecurityCouncilStorage = {
  getInitialState: (currentYear: number): UNSCState => {
    // Check if Rusia is in DB as "Rusia" or "Sains Rusia" etc.
    // Based on static file: America Serikat, Rusia, China, Inggris, Prancis.
    
    const members: UNSCMember[] = [
      { name: "Amerika Serikat", flag: "🇺🇸", group: "WEOG", termStart: 1945, termEnd: 9999, isPermanent: true },
      { name: "Rusia", flag: "🇷🇺", group: "Eastern European Group", termStart: 1945, termEnd: 9999, isPermanent: true },
      { name: "China", flag: "🇨🇳", group: "Asia-Pacific Group", termStart: 1971, termEnd: 9999, isPermanent: true },
      { name: "Inggris", flag: "🇬🇧", group: "WEOG", termStart: 1945, termEnd: 9999, isPermanent: true },
      { name: "Prancis", flag: "🇫🇷", group: "WEOG", termStart: 1945, termEnd: 9999, isPermanent: true },

      // Anggota Tidak Tetap 2026-2028
      { name: "Pakistan", flag: "🇵🇰", group: "Asia-Pacific Group", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Somalia", flag: "🇸🇴", group: "African Group", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Panama", flag: "🇵🇦", group: "GRULAC", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Denmark", flag: "🇩🇰", group: "WEOG", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Yunani", flag: "🇬🇷", group: "WEOG", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Aljazair", flag: "🇩🇿", group: "African Group", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Guyana", flag: "🇬🇾", group: "GRULAC", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Sierra Leone", flag: "🇸🇱", group: "African Group", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Slovenia", flag: "🇸🇮", group: "Eastern European Group", termStart: 2026, termEnd: 2028, isPermanent: false },
      { name: "Korea Selatan", flag: "🇰🇷", group: "Asia-Pacific Group", termStart: 2026, termEnd: 2028, isPermanent: false },
    ];

    return {
      members,
      history: [],
      lastElectionYear: 2025,
      isPlayerCandidate: false,
      playerVotes: 0
    };
  },

  getData: (): UNSCState => {
    if (typeof window === 'undefined') return unSecurityCouncilStorage.getInitialState(2026);
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      const initialState = unSecurityCouncilStorage.getInitialState(2026);
      unSecurityCouncilStorage.saveData(initialState);
      return initialState;
    }
    return JSON.parse(data);
  },

  saveData: (data: UNSCState) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  },

  performRotation: (year: number) => {
    const state = unSecurityCouncilStorage.getData();
    
    // Find members whose term has ended (termEnd < current year)
    const leavingMembers = state.members.filter(m => !m.isPermanent && m.termEnd < year);
    if (leavingMembers.length === 0) return;

    // Find newly elected members whose term starts this year
    const incomingMembers = state.members.filter(m => !m.isPermanent && m.termStart === year);

    // Move leaving members to history
    const newHistory = leavingMembers.map(m => m.name);

    // Keep permanent members and members whose term hasn't ended
    const remainingMembers = state.members.filter(m => m.isPermanent || m.termEnd >= year);

    unSecurityCouncilStorage.saveData({
      ...state,
      members: remainingMembers,
      history: [...state.history.filter(h => !newHistory.includes(h)), ...newHistory].slice(-20)
    });

    // ── Consolidated Rotation Notification ──
    const leavingNames = leavingMembers.map(m => `${m.flag} ${m.name}`).join(", ");
    const incomingNames = incomingMembers.length > 0
      ? incomingMembers.map(m => `${m.flag} ${m.name}`).join(", ")
      : "Belum ada negara terpilih untuk menggantikan.";

    inboxStorage.addMessage({
      source: "Sekretariat Jenderal PBB",
      subject: `🏛️ Pergantian Anggota Tidak Tetap Dewan Keamanan ${year}`,
      content: `PENGUMUMAN PBB: Masa jabatan ${leavingNames} telah berakhir pada 31 Desember ${year - 1}. ${incomingMembers.length > 0 ? `${incomingNames} resmi menduduki kursi Dewan Keamanan untuk periode ${year}-${year + 2}.` : "Pemilihan anggota baru akan dilaksanakan pada Juni ${year}."}`,
      time: `01-01-${year}`,
      priority: "high"
    });
  },

  applyAsCandidate: (year: number) => {
    const state = unSecurityCouncilStorage.getData();
    const canRun = !state.members.some(m => m.name === "Indonesia") && !state.history.includes("Indonesia");
    
    if (canRun) {
      unSecurityCouncilStorage.saveData({
        ...state,
        isPlayerCandidate: true
      });
      
      inboxStorage.addMessage({
        source: "Sekretariat Negara",
        subject: "Pencalonan Dewan Keamanan PBB",
        content: "Indonesia resmi mendaftarkan diri sebagai kandidat Anggota Tidak Tetap Dewan Keamanan PBB. Pemilihan akan dilakukan oleh Majelis Umum PBB pada 15 Juni.",
        time: `01-06-${year}`,
        priority: "medium"
      });
    }
  },

  checkElectionOpening: (year: number) => {
    const state = unSecurityCouncilStorage.getData();
    const currentNonPermanent = state.members.filter(m => !m.isPermanent);
    
    // Check if any seats will be vacant on Jan 1st of year + 1
    const seatsToFill = 10 - currentNonPermanent.filter(m => m.termEnd > year).length;

    if (seatsToFill > 0) {
      inboxStorage.addMessage({
        source: "Majelis Umum PBB",
        subject: "Pembukaan Pencalonan Dewan Keamanan",
        content: `PBB membuka pendaftaran kandidat Anggota Tidak Tetap untuk mengisi ${seatsToFill} kursi yang akan kosong. Pendaftaran dibuka hingga 15 Juni ${year}.`,
        time: `01-06-${year}`,
        priority: "medium"
      });
    }
  },

  conductElection: (year: number) => {
    const state = unSecurityCouncilStorage.getData();
    if (state.lastElectionYear === year) return;

    const currentNonPermanent = state.members.filter(m => !m.isPermanent);
    const currentCounts = {
      "African Group": 0,
      "Asia-Pacific Group": 0,
      "Eastern European Group": 0,
      "GRULAC": 0,
      "WEOG": 0
    };

    currentNonPermanent.forEach(m => {
      if (m.termEnd > year) {
        currentCounts[m.group]++;
      }
    });

    const newElectedMembers: UNSCMember[] = [];
    const TOTAL_VOTERS = 207;
    const REQUIRED_VOTES = Math.ceil((2/3) * TOTAL_VOTERS); // ~138 votes

    Object.keys(UN_GROUPS_CONFIG).forEach((g) => {
      const group = g as UNGroup;
      const seatsToFill = UN_GROUPS_CONFIG[group].seats - currentCounts[group];
      
      if (seatsToFill > 0) {
        let pool = getCountriesByGroup(group).filter(name => 
          !state.members.some(m => m.name === name) && 
          !state.history.includes(name)
        );

        // If player is in this group and applied, they are a primary candidate
        const isPlayerInGroup = group === "Asia-Pacific Group" && state.isPlayerCandidate;

        for (let i = 0; i < seatsToFill; i++) {
          if (pool.length > 0) {
            let selectedName = "";
            let votes = 0;

            if (isPlayerInGroup && i === 0) {
              // Player candidacy logic (only for the first seat in their group)
              selectedName = "Indonesia";
              // Simulate sentiment-based votes. For now, random but roughly based on "General support"
              // In future, this should link to actual diplomatic data.
              votes = Math.floor(Math.random() * 50) + 120; // 120-170 range
              
              if (votes >= REQUIRED_VOTES) {
                // Remove player from candidate status if won
                state.isPlayerCandidate = false;
              } else {
                // Failed to get 2/3 votes
                selectedName = ""; 
              }
              // Remove Indonesia from pool if it was there
              pool = pool.filter(p => p !== "Indonesia");
            }

            // If player didn't win or isn't candidate, pick from AI
            if (!selectedName) {
              const randomIndex = Math.floor(Math.random() * pool.length);
              selectedName = pool.splice(randomIndex, 1)[0];
              votes = Math.floor(Math.random() * 40) + 140; // AI candidates usually pass in simulation
            }
            
            if (selectedName) {
              const countryData = countries.find(c => c.name_id === selectedName || c.name_en === selectedName);
              newElectedMembers.push({
                name: selectedName,
                flag: countryData?.flag || "🏳️",
                group: group,
                termStart: year + 1,
                termEnd: year + 2,
                isPermanent: false
              });
            }
          }
        }
      }
    });

    const nextState = {
      ...state,
      members: [...state.members, ...newElectedMembers],
      lastElectionYear: year,
      isPlayerCandidate: false // Reset
    };
    unSecurityCouncilStorage.saveData(nextState);

    // ── Consolidated Election Notification ──
    if (newElectedMembers.length > 0) {
      const electedList = newElectedMembers.map(m => `${m.flag} ${m.name} (${m.group})`).join("\n• ");
      const playerWon = newElectedMembers.some(m => m.name === "Indonesia");

      inboxStorage.addMessage({
        source: "Majelis Umum PBB",
        subject: `🗳️ Hasil Pemilihan Dewan Keamanan PBB — Juni ${year}`,
        content: `PENGUMUMAN PBB: Majelis Umum PBB telah menyelesaikan pemilihan Anggota Tidak Tetap Dewan Keamanan untuk periode ${year + 1}-${year + 2}.\n\n` +
                 (playerWon ? "🎉 SELAMAT! Indonesia berhasil mendapatkan dukungan 2/3 suara dan terpilih sebagai anggota Dewan Keamanan!\n\n" : "") +
                 `Negara-negara yang terpilih:\n• ${electedList}\n\nMereka akan resmi menjabat mulai 1 Januari ${year + 1}.`,
        time: `15-06-${year}`,
        priority: "high"
      });
    }
  },

  promoteElectedMembers: (year: number) => {
    const state = unSecurityCouncilStorage.getData();
    
    // Find members elected for next year
    const newlyElected = state.members.filter(m => !m.isPermanent && m.termStart > year);
    if (newlyElected.length === 0) return;

    // Find current non-permanent members who are scheduled to leave (Lengser)
    // In this specific system, everyone in 2026-2028 is "Lengser" in 2028.
    const retiringNames = state.members
      .filter(m => !m.isPermanent && m.termEnd <= year)
      .map(m => m.name);

    // Filter out retiring members and update newly elected to start immediately
    const remainingPermanent = state.members.filter(m => m.isPermanent);
    const updatedNewlyElected = newlyElected.map(m => ({
      ...m,
      termStart: year // Start now (July 1st)
    }));

    const nextMembers = [...remainingPermanent, ...updatedNewlyElected];

    unSecurityCouncilStorage.saveData({
      ...state,
      members: nextMembers,
      history: [...state.history, ...retiringNames]
    });

    inboxStorage.addMessage({
      source: "Sekretariat PBB",
      subject: "Serah Terima Jabatan Dewan Keamanan",
      content: "Sesuai protokol percepatan, Anggota Tidak Tetap yang baru terpilih telah resmi mengemban tugas mulai 1 Juli ini. Anggota dewan lama telah resmi menyelesaikan masa baktinya.",
      time: `01-07-${year}`,
      priority: "medium"
    });
  }
};
