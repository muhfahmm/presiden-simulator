import { useState, useEffect, useMemo } from "react";
import { History } from "lucide-react";
import { RancanganResolusiCard } from "./1_rancangan_resolusi/RancanganResolusiCard";
import { SanksiCard } from "./2_sanksi/SanksiCard";
import { EmbargoCard } from "./3_embargo/EmbargoCard";
import { VoteVisualization } from "./VoteVisualization";
import { unSecurityCouncilStorage } from "../2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { unVotingStorage, VotingHistoryItem, ActiveVoting } from "./logika_pemungutan_suara/unVotingStorage";
import { CountryTargetSelector } from "./CountryTargetSelector";
import { ActiveVotingsList } from "./ActiveVotingsList";

interface PemungutanSuaraTabProps {
  currentData?: any;
  onSwitchTab?: (tabId: string) => void;
}

export default function PemungutanSuaraTab({ currentData, onSwitchTab }: PemungutanSuaraTabProps) {
  const [selectedItem, setSelectedItem] = useState<{ category: string, name: string, description: string, effect: string, targetCountry?: string } | null>(null);
  const [isUNSCMember, setIsUNSCMember] = useState(false);
  const [activeResolutions, setActiveResolutions] = useState<VotingHistoryItem[]>([]);
  const [activeVotings, setActiveVotings] = useState<ActiveVoting[]>([]);
  const [showTargetSelector, setShowTargetSelector] = useState(false);

  // Ambil nama negara user secara dinamis
  const userCountryName = useMemo(() => {
    if (typeof window === "undefined") return "";
    return currentData?.name_id || currentData?.name_en || localStorage.getItem('selected_country') || "";
  }, [currentData]);

  useEffect(() => {
    if (!userCountryName) return;

    const unscData = unSecurityCouncilStorage.getData();
    const isMember = unscData.members.some(m => m.name.toLowerCase() === userCountryName.toLowerCase());
    setIsUNSCMember(isMember);

    const votingData = unVotingStorage.getData();
    setActiveResolutions(votingData.votingHistory);
    setActiveVotings(votingData.activeVotings);

    const handleUpdate = () => {
      const updatedData = unVotingStorage.getData();
      setActiveResolutions(updatedData.votingHistory);
      setActiveVotings(updatedData.activeVotings);
    };
    window.addEventListener("un_voting_updated", handleUpdate);
    return () => window.removeEventListener("un_voting_updated", handleUpdate);
  }, [currentData, userCountryName]);

  const handleSelectItem = (item: any | null) => {
    if (!item) {
      setSelectedItem(null);
      return;
    }

    // Toggle off if already selected (considering target suffix)
    const currentBaseName = selectedItem?.name.split(" (")[0];
    if (currentBaseName === item.name) {
      setSelectedItem(null);
      return;
    }

    // Deteksi apakah kategori membutuhkan target negara (Sanksi atau Embargo)
    const categoryLower = item.category.toLowerCase();
    const isTargetNeeded = categoryLower.includes("sanksi") || categoryLower.includes("embargo");

    if (isTargetNeeded) {
      // Set langsung tanpa memunculkan modal di awal
      setSelectedItem({
        ...item,
        targetCountry: undefined // Belum ada target
      });
    } else {
      setSelectedItem(item);
    }
  };

  const handleTargetSelect = (countryName: string) => {
    if (selectedItem) {
      const updatedItem = {
        ...selectedItem,
        name: `${selectedItem.name.split(" (")[0]} (${countryName})`,
        targetCountry: countryName,
        description: `${selectedItem.description.split(" Tindakan ini")[0]} Tindakan ini ditujukan khusus untuk ${countryName}.`
      };
      setSelectedItem(updatedItem);
    }
    setShowTargetSelector(false);
  };

  const handleEditTarget = () => {
    if (!selectedItem) return;
    setShowTargetSelector(true);
  };

  return (
    <div className="flex-1 relative overflow-y-auto overflow-x-hidden p-8 animate-in fade-in duration-300 flex flex-col gap-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
      
      {/* SECTION 2: Selection Cards */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Ajukan Resolusi Baru</h4>
          <button 
            onClick={() => onSwitchTab?.("histori")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-[10px] font-black text-zinc-400 uppercase tracking-widest hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
          >
            <History className="h-4 w-4" />
            Histori
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shrink-0">
          <RancanganResolusiCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
          <SanksiCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
          <EmbargoCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
        </div>
      </div>

      {/* SECTION 2.5: Active Votings */}
      <ActiveVotingsList votings={activeVotings} />

      {/* Country Target Selector Modal */}
      {showTargetSelector && (
        <CountryTargetSelector 
          userCountry={userCountryName}
          onSelect={handleTargetSelect}
          onClose={() => setShowTargetSelector(false)}
        />
      )}

      {/* Voting Visualization Section */}
      {selectedItem && (
        <VoteVisualization 
          userCountry={userCountryName}
          isUNSCMember={isUNSCMember}
          selectedItem={selectedItem}
          onClose={() => setSelectedItem(null)}
          onEditTarget={handleEditTarget}
        />
      )}
    </div>
  );
}
