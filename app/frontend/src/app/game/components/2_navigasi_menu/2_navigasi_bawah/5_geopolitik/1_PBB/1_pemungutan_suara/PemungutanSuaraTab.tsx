import { useState, useEffect } from "react";
import { gameStorage } from "@/app/game/gamestorage";
import { unSecurityCouncilStorage } from "../2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { RancanganResolusiCard } from "./1_rancangan_resolusi/RancanganResolusiCard";
import { SanksiCard } from "./2_sanksi/SanksiCard";
import { EmbargoCard } from "./3_embargo/EmbargoCard";
import { ConfigurationSection } from "./components/ConfigurationSection";
import { ActiveConfigHeader } from "./components/ActiveConfigHeader";
import { VoteVisualization } from "./components/VoteVisualization";
import { ActiveResolutionGrid } from "./components/ActiveResolutionGrid";

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

  const handleSelectItem = (item: { category: string, name: string, description: string, effect: string } | null) => {
    // Jika item yang dipilih sama dengan yang sudah aktif, reset semua
    if (selectedItem && item && selectedItem.name === item.name) {
      setSelectedItem(null);
      setSelectedDuration("1 Bulan");
      setSelectedCountry(null);
      setSearchQuery("");
      setSelectedSubItem("");
      setSelectedContinent("SEMUA");
    } else {
      // Jika item berbeda atau null, set item baru
      setSelectedItem(item);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 animate-in fade-in duration-300 flex flex-col gap-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
      {/* SECTION 1: Resolution Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shrink-0">
        <RancanganResolusiCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
        <SanksiCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
        <EmbargoCard selectedItem={selectedItem} onSelectItem={handleSelectItem} />
      </div>

      {/* SECTION 2: Active Resolution Status Grid */}
      <div className="shrink-0">
        <h3 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-3 mb-4">
          <div className="h-1 w-6 bg-zinc-600 rounded-full" />
          Status Resolusi Aktif
        </h3>
        <ActiveResolutionGrid selectedItem={selectedItem} />
      </div>

      {/* SECTION 3: Dynamic Configuration (Rendered below guide if active) */}
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

          {/* Submit Button */}
          <VoteVisualization
            selectedCountry={selectedCountry}
            isUNSCMember={isUNSCMember}
            userCountry={userCountry}
            onReset={() => {
              setSelectedItem(null);
              setSelectedDuration("1 Bulan");
              setSelectedCountry(null);
              setSearchQuery("");
              setSelectedSubItem("");
              setSelectedContinent("SEMUA");
            }}
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
      )}
    </div>
  );
}

