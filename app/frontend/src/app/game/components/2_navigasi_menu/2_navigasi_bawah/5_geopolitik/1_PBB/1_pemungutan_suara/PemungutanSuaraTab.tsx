import { useState, useEffect } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { unSecurityCouncilStorage } from "../2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { RancanganResolusiCard } from "./1_rancangan_resolusi/RancanganResolusiCard";
import { SanksiCard } from "./2_sanksi/SanksiCard";
import { EmbargoCard } from "./3_embargo/EmbargoCard";
import { ConfigurationSection } from "./components/ConfigurationSection";
import { ActiveConfigHeader } from "./components/ActiveConfigHeader";
import { ProposalSubmissionHandler } from "./components/ProposalSubmissionHandler";
import { ActiveResolutionGrid } from "./components/ActiveResolutionGrid";
import { VotingProgressGrid } from "./components/VotingProgressGrid";
import { GlobalVotingState, initializeVotingState } from "./utils/votingSystem";
import { unCountries } from "./utils/unCountries";
import { useProposalSubmission } from "./hooks/useProposalSubmission";

export default function PemungutanSuaraTab() {
  const [selectedItem, setSelectedItem] = useState<{ category: string, name: string, description: string, effect: string } | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("1 Bulan");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState("");
  const [isUNSCMember, setIsUNSCMember] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("SEMUA");
  
  // Voting state management
  const [votingState, setVotingState] = useState<GlobalVotingState>(initializeVotingState());
  const { loadVotingState } = useProposalSubmission();

  // Load voting state on mount and keep it synced
  useEffect(() => {
    const refreshState = () => {
      const savedState = loadVotingState();
      setVotingState(savedState);
    };

    refreshState();

    // Listen to custom updates from storage service
    window.addEventListener('un_voting_updated', refreshState);
    // Also listen to storage events from other tabs
    window.addEventListener('storage', (e) => {
      if (e.key === 'un_voting_state') refreshState();
    });

    return () => {
      window.removeEventListener('un_voting_updated', refreshState);
      window.removeEventListener('storage', (e) => {
        if (e.key === 'un_voting_state') refreshState();
      });
    };
  }, [loadVotingState]);

  useEffect(() => {
    const session = gameStorage.getSession();
    if (session) {
      const countryName = session.country || localStorage.getItem("selectedCountry") || "Indonesia";
      setUserCountry(countryName);
      
      // Cek apakah negara user adalah anggota UNSC
      const data = unSecurityCouncilStorage.getData();
      const isMember = data.members.some(m => m.name === countryName);
      setIsUNSCMember(isMember);
    }
  }, []);

  useEffect(() => {
    if (selectedItem) {
      if (selectedItem.name === "Embargo Penjualan Teknologi") {
        setSelectedSubItem("Semikonduktor");
      } else if (selectedItem.name === "Embargo Penjualan Sumber Daya") {
        setSelectedSubItem("Emas");
      } else {
        setSelectedSubItem("");
      }
    }
  }, [selectedItem]);

  const handleSelectItem = (item: { category: string, name: string, description: string, effect: string } | null) => {
    // Jika item yang dipilih sama dengan yang sudah aktif, reset semua
    if (selectedItem && item && selectedItem.name === item.name) {
      handleReset();
    } else {
      // Jika item berbeda atau null, set item baru
      setSelectedItem(item);
    }
  };

  const handleReset = () => {
    setSelectedItem(null);
    setSelectedDuration("1 Bulan");
    setSelectedCountry(null);
    setSearchQuery("");
    setSelectedSubItem("");
    setSelectedContinent("SEMUA");
  };

  const handleViewStatus = () => {
    // Scroll to active resolutions section
    const element = document.getElementById('active-resolutions-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Connect to actual database
  const allCountries = unCountries;
  
  const gameState = {
    currentDay: 0, // Fallback for context
    diplomaticRelations: {}, 
    // Optional: can be loaded for better accuracy
    tradeData: {},
    playerData: gameStorage.getSession() || {},
    active_wars: [],
    active_sanctions: (votingState.implementedProposals || []).filter(p => p.type === 'sanction' && p.status === 'approved'),
    nuclear_threats: false
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 animate-in fade-in duration-300 flex flex-col gap-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
      {/* SECTION 1: Resolution Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shrink-0">
        <RancanganResolusiCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
        <SanksiCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
        <EmbargoCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
      </div>

      {/* SECTION 2: Active Resolution Status Grid (Implemented items) */}
      <div id="active-resolutions-section" className="shrink-0">
        <h3 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-3 mb-4">
          <div className="h-1 w-6 bg-zinc-600 rounded-full" />
          Status Resolusi Aktif
        </h3>
        <ActiveResolutionGrid selectedItem={selectedItem} votingState={votingState} />
      </div>

      {/* SECTION 3: Voting Progress Section (Items in voting phase) */}
      <div className="shrink-0 mb-10">
        <h3 className="text-[11px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-3 mb-4">
          <div className="h-1 w-6 bg-amber-500 rounded-full" />
          Pemungutan Suara Sedang Berlangsung
        </h3>
        <VotingProgressGrid selectedItem={selectedItem} votingState={votingState} />
      </div>

      {/* SECTION 4: Dynamic Configuration (Rendered below guide if active) */}
      {selectedItem && (
        <div className="flex-1 flex flex-col gap-10 pt-10 border-t border-zinc-800/50 animate-in slide-in-from-bottom duration-500">
          {/* Active Configuration Header with Duration Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ActiveConfigHeader selectedItem={selectedItem} />
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-4">
                <h3 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest flex items-center gap-3">
                  <div className="h-1 w-6 bg-cyan-400 rounded-full" />
                  2. Durasi Pelaksanaan
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {['1 Bulan', '3 Bulan', '6 Bulan', '9 Bulan', '1 Tahun'].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                        selectedDuration === duration
                          ? 'bg-cyan-500 text-black border border-cyan-400'
                          : 'bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-zinc-600'
                      }`}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 animate-in fade-in duration-1000">
            {/* Config inputs (Duration & Country) */}
            <ConfigurationSection
              selectedItem={selectedItem}
              selectedDuration={selectedDuration}
              onDurationChange={setSelectedDuration}
              selectedSubItem={selectedSubItem}
              onSubItemChange={setSelectedSubItem}
              selectedCountry={selectedCountry}
              onCountryChange={setSelectedCountry}
              userCountry={userCountry}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedContinent={selectedContinent}
              onContinentChange={setSelectedContinent}
            />
          </div>

          {/* Submit Button with Modal Integration */}
          <ProposalSubmissionHandler
            selectedItem={selectedItem}
            selectedDuration={selectedDuration}
            selectedCountry={selectedCountry}
            selectedSubItem={selectedSubItem}
            isUNSCMember={isUNSCMember}
            userCountry={userCountry}
            onReset={handleReset}
            onViewStatus={handleViewStatus}
            votingState={votingState}
            onVotingStateUpdate={setVotingState}
            allCountries={allCountries}
            gameState={gameState}
            enableAIVoting={false}
          />
        </div>
      )}
    </div>
  );
}
