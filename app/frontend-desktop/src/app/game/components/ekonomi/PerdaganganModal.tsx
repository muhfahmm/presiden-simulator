import React, { useState } from "react"
import { 
  X, ArrowRightLeft, TrendingUp, TrendingDown, Globe, Ship, Landmark, BarChart3,
  Cpu, Car, Bike, Construction, TreePine, Droplet, Cookie, Croissant, Pill, FlaskConical, Beef, Soup, 
  Bird, Milk, Leaf, Shell, Fish, Sprout, Utensils, Apple, Bean, Layers, Mountain, Gem, Waves, Flame, 
  Battery, Droplets, Box, Pickaxe, Radio, Coffee, Carrot, Eye, ChevronRight
} from "lucide-react"
import { countries } from "../../../select-country/data/countries"
import { CountryData } from "../../../select-country/data/types"
import { gameStorage } from "../../gamestorage"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerdaganganModal({ isOpen, onClose }: ModalProps) {
  const session = gameStorage.getSession();
  const currentData = countries.find((c: CountryData) => c.name_en === session?.country) || countries[0];

  // Logic for 12 Minerals
  const minerals = Object.entries(currentData.sector_extraction)
    .filter(([key]) => key !== 'strength' && typeof currentData.sector_extraction[key as keyof typeof currentData.sector_extraction] === 'number')
    .sort((a, b) => (b[1] as number) - (a[1] as number));

  // Logic for Industry Products
  const industryProducts = Object.entries(currentData.sector_manufacturing)
    .filter(([key]) => key !== 'strength' && typeof currentData.sector_manufacturing[key as keyof typeof currentData.sector_manufacturing] === 'number')
    .sort((a, b) => (b[1] as number) - (a[1] as number));

  // Logic for Food Commodities (Livestock + Agriculture)
  const foodCommodities = [
    ...Object.entries(currentData.sector_livestock).filter(([key]) => key !== 'strength'),
    ...Object.entries(currentData.sector_agriculture).filter(([key]) => key !== 'strength')
  ].sort((a, b) => (b[1] as number) - (a[1] as number));

  const [selectedKey, setSelectedKey] = useState<string>(minerals[0]?.[0] || 'gold');
  const [showMinerals, setShowMinerals] = useState(true);
  const [showIndustry, setShowIndustry] = useState(false);
  const [showFood, setShowFood] = useState(false);

  if (!isOpen) return null;

  const iconMap: Record<string, any> = {
    gold: Gem, uranium: Radio, coal: Layers, oil: Droplets, gas: Flame, salt: Waves,
    nickel: Box, lithium: Battery, copper: Pickaxe, aluminum: Layers, rare_earth: Cpu, iron_ore: Mountain,
    semiconductor: Cpu, car: Car, motorcycle: Bike, smelter: FlaskConical, concrete_cement: Construction, 
    wood: TreePine, mineral_water: Droplet, sugar: Cookie, bread: Croissant, pharmacy: Pill, 
    fertilizer: FlaskConical, meat_processing: Beef, instant_noodle: Soup,
    chicken: Bird, poultry: Bird, dairy_cow: Milk, beef_cow: Beef, sheep_goat: Leaf,
    shrimp: Shell, fish: Fish, shellfish: Shell,
    rice: Sprout, wheat: Utensils, corn: Utensils, tubers: Utensils, soy: Bean, 
    palm_oil: Droplets, tea: Leaf, coffee: Coffee, cocoa: Apple, sugarcane: Leaf, vegetables: Carrot
  };

  const labelsMap: Record<string, string> = {
    gold: "Emas", uranium: "Uranium", coal: "Batu Bara", oil: "Minyak Bumi", gas: "Gas Alam", 
    salt: "Garam", nickel: "Nikel", lithium: "Litium", copper: "Tembaga", aluminum: "Aluminium", 
    rare_earth: "Rare Earth", iron_ore: "Bijih Besi",
    semiconductor: "Semikonduktor", car: "Mobil", motorcycle: "Sepeda Motor", smelter: "Pengolahan Smelter",
    concrete_cement: "Beton & Semen", wood: "Kayu", mineral_water: "Air Mineral", sugar: "Gula",
    bread: "Roti", pharmacy: "Farmasi", fertilizer: "Pupuk", meat_processing: "Pengolahan Daging",
    instant_noodle: "Mie Instan",
    chicken: "Ayam", poultry: "Unggas", dairy_cow: "Sapi Perah", beef_cow: "Sapi Potong",
    sheep_goat: "Domba/Kambing", shrimp: "Udang", fish: "Ikan", shellfish: "Kerang",
    rice: "Padi", wheat: "Gandum", corn: "Jagung", tubers: "Umbi-umbian", soy: "Kedelai",
    palm_oil: "Kelapa Sawit", tea: "Teh", coffee: "Kopi", cocoa: "Kakao", sugarcane: "Tebu",
    vegetables: "Sayur-mayur"
  };

  const getIcon = (key: string, size: string = "h-4 w-4") => {
    const Icon = iconMap[key] || BarChart3;
    return <Icon className={size} />;
  };

  const selectedItem = [
    ...minerals,
    ...industryProducts,
    ...foodCommodities
  ].find(m => m[0] === selectedKey);

  const selectedName = labelsMap[selectedKey] || selectedKey.charAt(0).toUpperCase() + selectedKey.slice(1).replace(/_/g, ' ');
  const selectedUnits = selectedItem ? (selectedItem[1] as number) : 0;
  
  // Dynamic pricing logic
  const exportPrice = `${(selectedUnits * 1.5 + 5).toFixed(1)}T`;
  const importPrice = `${(25 + Math.random() * 5).toFixed(1)}T`;

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center animate-in fade-in zoom-in-95 duration-300 p-4 lg:p-12 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800/50 rounded-[3rem] w-full max-w-6xl h-[85vh] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col relative">
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Top Header */}
        <div className="px-10 py-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/80 backdrop-blur-xl relative z-10">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-500/10 rounded-[1.5rem] border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] group hover:scale-110 transition-transform">
              <ArrowRightLeft className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic flex items-center gap-3">
                HUB PERDAGANGAN STRATEGIS <span className="text-blue-500">— {currentData.flag} {currentData.name_id}</span>
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-4 rounded-2xl hover:bg-zinc-900 transition-all text-zinc-500 hover:text-white cursor-pointer group border border-transparent hover:border-zinc-800">
            <X className="h-8 w-8 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Sidebar - Left */}
          <div className="w-[320px] border-r border-zinc-900 bg-zinc-950/50 flex flex-col backdrop-blur-sm relative scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent overflow-y-auto">
            
            {/* 1. Category: Minerals */}
            <div className="border-b border-zinc-900/80">
              <div className="p-8 flex items-center justify-between">
                <h3 className="text-[12px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">1. Mineral Kritis</h3>
                <button 
                  onClick={() => setShowMinerals(!showMinerals)}
                  className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-pink-500 transition-all cursor-pointer group"
                >
                  <Eye className={`h-4 w-4 group-hover:scale-110 transition-all duration-500 ${!showMinerals ? 'rotate-180 opacity-50' : ''}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-700 ease-in-out ${showMinerals ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-8 space-y-2">
                    {minerals.map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedKey(key)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group relative cursor-pointer overflow-hidden ${
                          selectedKey === key 
                          ? 'bg-blue-600/10 border border-blue-500/40 text-white' 
                          : 'text-zinc-500 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          <div className={`p-2 rounded-xl transition-all duration-300 ${
                            selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'
                          }`}>
                            {getIcon(key, "h-4 w-4")}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Category: Industry */}
            <div className="border-b border-zinc-900/80">
              <div className="p-8 flex items-center justify-between">
                <h3 className="text-[12px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">2. Produk Industri</h3>
                <button 
                  onClick={() => setShowIndustry(!showIndustry)}
                  className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-blue-500 transition-all cursor-pointer group"
                >
                  <Eye className={`h-4 w-4 group-hover:scale-110 transition-all duration-500 ${!showIndustry ? 'rotate-180 opacity-50' : ''}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-700 ease-in-out ${showIndustry ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-8 space-y-2">
                    {industryProducts.map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedKey(key)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group relative cursor-pointer overflow-hidden ${
                          selectedKey === key 
                          ? 'bg-blue-600/10 border border-blue-500/40 text-white' 
                          : 'text-zinc-500 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          <div className={`p-2 rounded-xl transition-all duration-300 ${
                            selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'
                          }`}>
                            {getIcon(key, "h-4 w-4")}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Category: Food */}
            <div className="border-b border-zinc-900/80">
              <div className="p-8 flex items-center justify-between">
                <h3 className="text-[12px] font-black text-white uppercase tracking-[0.2em] leading-none italic whitespace-nowrap">3. Komoditas Pangan</h3>
                <button 
                  onClick={() => setShowFood(!showFood)}
                  className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-green-500 transition-all cursor-pointer group"
                >
                  <Eye className={`h-4 w-4 group-hover:scale-110 transition-all duration-500 ${!showFood ? 'rotate-180 opacity-50' : ''}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-700 ease-in-out ${showFood ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-8 space-y-2">
                    {foodCommodities.map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedKey(key)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group relative cursor-pointer overflow-hidden ${
                          selectedKey === key 
                          ? 'bg-blue-600/10 border border-blue-500/40 text-white' 
                          : 'text-zinc-500 hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          <div className={`p-2 rounded-xl transition-all duration-300 ${
                            selectedKey === key ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-600'
                          }`}>
                            {getIcon(key, "h-4 w-4")}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-tight">{labelsMap[key] || key.replace(/_/g, ' ')}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Right */}
          <div className="flex-1 bg-zinc-950 p-8 lg:p-16 overflow-y-auto relative scrollbar-thin scrollbar-thumb-zinc-800">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Strategic Header & Action Cards */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-pink-500/40 uppercase tracking-[0.5em] block">Mineral Kritis & Strategis</span>
                  </div>
                  <h2 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-4 leading-none">
                    {selectedName}
                  </h2>
                </div>

                <div className="flex items-center gap-4 xl:gap-6 flex-wrap lg:flex-nowrap">
                  {/* Buy Section */}
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <div className="text-lg lg:text-xl font-black text-white tracking-tighter italic mb-1">
                      Rp {importPrice}
                    </div>
                    <button className="px-6 py-3 bg-red-500 text-white font-black uppercase text-[9px] lg:text-[10px] tracking-[0.2em] rounded-xl hover:bg-red-600 transition-all active:scale-[0.95] cursor-pointer whitespace-nowrap">
                      Eksekusi Impor
                    </button>
                  </div>

                  {/* Sell Section */}
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <div className="text-lg lg:text-xl font-black text-white tracking-tighter italic mb-1">
                      Rp {exportPrice}
                    </div>
                    <button className="px-6 py-3 bg-green-500 text-white font-black uppercase text-[9px] lg:text-[10px] tracking-[0.2em] rounded-xl hover:bg-green-600 transition-all active:scale-[0.95] cursor-pointer whitespace-nowrap">
                      Eksekusi Ekspor
                    </button>
                  </div>
                </div>
              </div>

              {/* Metrics Section */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-900/80">
                <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-[2rem] relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] block mb-3">Metrik Pasokan</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black text-white tracking-tighter italic">{selectedUnits}</span>
                  </div>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-[2rem] relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] block mb-3">Prioritas Hilirisasi</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-xs font-black text-green-500 uppercase tracking-widest leading-none">Aset Strategis Level A1</span>
                  </div>
                </div>
              </div>

              {/* Trade Partners Section */}
              <div className="space-y-6 pt-8 border-t border-zinc-900/80">
                <div className="flex items-center justify-between">
                  <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em] italic">DAFTAR MITRA STRATEGIS (KONTRAK AKTIF)</h3>
                  <div className="h-[1px] flex-1 bg-zinc-900 mx-8"></div>
                </div>

                <div className="h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(currentData.geopolitics?.agreements?.filter(a => 
                      a.type === 'Trade' && 
                      a.partner.toLowerCase() !== currentData.name_id.toLowerCase() && 
                      a.partner.toLowerCase() !== currentData.name_en.toLowerCase()
                    ).length > 0 
                      ? currentData.geopolitics.agreements
                          .filter(a => 
                            a.type === 'Trade' && 
                            a.partner.toLowerCase() !== currentData.name_id.toLowerCase() && 
                            a.partner.toLowerCase() !== currentData.name_en.toLowerCase()
                          )
                          .sort((a, b) => a.partner.localeCompare(b.partner))
                      : [
                          { partner: "Afrika Selatan", status: "Active" },
                          { partner: "Tiongkok", status: "Active" },
                          { partner: "Uni Emirat Arab", status: "Active" },
                          { partner: "Vietnam", status: "Active" }
                        ]
                    ).map((agreement, idx) => (
                      <div key={idx} className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-700/50 p-5 rounded-2xl flex items-center justify-between group transition-all cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-zinc-900 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                            <Globe className="h-5 w-5 text-zinc-500 group-hover:text-blue-400" />
                          </div>
                          <div>
                            <div className="text-xs font-black text-white uppercase tracking-wider">{agreement.partner}</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[8px] font-black uppercase tracking-widest rounded-md border border-green-500/20">
                            {agreement.status === 'Active' ? 'Terverifikasi' : agreement.status}
                          </span>
                          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-tighter italic">IDR 1.25T / bln</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
