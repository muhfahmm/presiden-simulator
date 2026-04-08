import { useState, useEffect } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { unSecurityCouncilStorage } from "../2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { RancanganResolusiCard } from "./1_rancangan_resolusi/RancanganResolusiCard";
import { SanksiCard } from "./2_sanksi/SanksiCard";
import { EmbargoCard } from "./3_embargo/EmbargoCard";
import { ConfigurationSection } from "./components/ConfigurationSection";
import { ActiveConfigHeader } from "./components/ActiveConfigHeader";
import { VoteVisualization } from "./components/VoteVisualization";

export default function PemungutanSuaraTab() {
  const [selectedItem, setSelectedItem] = useState<{ category: string, name: string, description: string, effect: string } | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("1 Bulan");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState("");
  const [isUNSCMember, setIsUNSCMember] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("SEMUA");

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

  return (
    <div className="flex-1 overflow-y-auto p-8 animate-in fade-in duration-300 flex flex-col gap-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
      {/* SECTION 1: Resolution Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shrink-0">
        <RancanganResolusiCard selectedItem={selectedItem} onSelectItem={setSelectedItem} />
        <SanksiCard selectedItem={selectedItem} onSelectItem={setSelectedItem} />
        <EmbargoCard selectedItem={selectedItem} onSelectItem={setSelectedItem} />
      </div>

      {/* SECTION 3: Dynamic Configuration (Rendered below guide if active) */}
      {selectedItem && (
        <div className="flex-1 flex flex-col gap-10 pt-10 border-t border-zinc-800/50 animate-in slide-in-from-bottom duration-500">
          {/* Active Configuration Header */}
          <ActiveConfigHeader selectedItem={selectedItem} onReset={() => setSelectedItem(null)} />

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

            {/* Right Column: Visualization */}
            <VoteVisualization
              selectedCountry={selectedCountry}
              isUNSCMember={isUNSCMember}
              userCountry={userCountry}
              onSubmit={() => {
                // Handle submission logic here
                console.log("Resolusi diajukan:", {
                  item: selectedItem,
                  duration: selectedDuration,
                  country: selectedCountry,
                  subItem: selectedSubItem
                });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

