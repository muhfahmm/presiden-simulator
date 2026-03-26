"use client"

import { useState, useEffect, Fragment } from "react"
import { X, Package, Factory, Pickaxe, TrendingUp, TrendingDown, Info, Clock, Activity, Zap, Droplets, Flame, Radiation, Coins, Cpu, Car, Bike, Construction, TreePine, Cookie, Croissant, Pill, FlaskConical, Beef, Soup, Milk, Fish, Shell, Sprout, Utensils, Coffee, Apple, Bean, Eye, EyeOff, Hammer, Users, Warehouse, Search, Bird, Leaf } from "lucide-react"
import { countries } from "@/app/select-country/data/countries/_index"
import { CountryData } from "@/app/select-country/data/types/_index"
import { gameStorage } from "@/app/game/gamestorage"
import { buildingStorage } from "@/app/game/components/pembangunan/buildingStorage"
import { mineralKritisRate, produkIndustriRate } from "@/app/select-country/data/pembangunan/laju-produksi"

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export default function ProduksiBarangModal({ isOpen, onClose }: ModalProps) {
   const session = gameStorage.getSession();
   const initialCountry = countries.find((c: CountryData) => c.name_id === session?.country || c.name_en === session?.country) || countries[0];

   const [searchQuery, setSearchQuery] = useState("");
   const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
   const [tick, setTick] = useState(0);

   useEffect(() => {
      const handleUpdate = () => setTick(t => t + 1);
      window.addEventListener('building_storage_updated', handleUpdate);
      return () => window.removeEventListener('building_storage_updated', handleUpdate);
   }, []);

   if (!isOpen) return null;

   const toggleSector = (id: string) => {
      setCollapsedSectors(prev => {
         const next = new Set(prev);
         if (next.has(id)) next.delete(id);
         else next.add(id);
         return next;
      });
   };

   // --- HELPER UNTUK MENGHITUNG UNIT BERDASARKAN DATA NEGARA ---
   const getBuildingCountTotal = (c: CountryData, key: string, sector: string): number => {
      const buildingData = buildingStorage.getData();
      const buildingDeltas = buildingData.buildingDeltas;
      const delta = (buildingDeltas[key] as number) || 0;

      try {
         if (sector === "produksi") {
            const m = c.sektor_manufaktur as any;
            const p_peternakan = (c.sektor_peternakan || {}) as any;
            const p_agrikultur = (c.sektor_agrikultur || {}) as any;

            // Manufaktur mapping
            const manufacturingMap: Record<string, string> = {
               electronics_factory: "semikonduktor", car_factory: "mobil", motorcycle_factory: "sepeda_motor",
               cement_factory: "semen_beton", smelter: "smelter", bottled_water_factory: "air_mineral",
               pharma_factory: "farmasi", sugar_factory: "gula", noodle_factory: "mie_instan",
               meat_processing_factory: "pengolahan_daging", sawmill: "kayu", fertilizer_factory: "pupuk",
               bakery_factory: "roti"
            };
            
            if (manufacturingMap[key]) return (m[manufacturingMap[key]] || 0) + delta;

            const panganMap: Record<string, string> = {
               paddy_field: "padi", agri_rice: "padi",
               wheat_field: "gandum_jagung", corn_field: "gandum_jagung", agri_grains: "gandum_jagung",
               vegetable_farm: "sayur_umbi", tuber_field: "sayur_umbi", agri_veg: "sayur_umbi",
               soybean_field: "kedelai", agri_soy: "kedelai",
               palm_oil_plantation: "kelapa_sawit", agri_palm: "kelapa_sawit",
               coffee_plantation: "kopi_teh_kakao", tea_plantation: "kopi_teh_kakao", cocoa_plantation: "kopi_teh_kakao", agri_luxury: "kopi_teh_kakao",
               poultry_farm: "ayam_unggas", egg_farm: "ayam_unggas", livestock_poultry: "ayam_unggas",
               dairy_farm: "sapi_perah", livestock_dairy: "sapi_perah",
               cattle_farm: "sapi_potong", livestock_beef: "sapi_potong",
               sheep_farm: "domba_kambing", livestock_sheep: "domba_kambing",
               shrimp_farm: "udang_kerang", pearl_farm: "udang_kerang", livestock_shrimp: "udang_kerang",
               freshwater_fish_farm: "ikan", livestock_fish: "ikan"
            };

            if (panganMap[key]) {
               const baseCount = (p_peternakan[panganMap[key]] || 0) + (p_agrikultur[panganMap[key]] || 0);
               // If it's a grouped key, we need to handle delta specifically like in ProduksiModal
               // but for simplicity in this modal we'll return base + delta
               return baseCount + delta;
            }
         }

         if (sector === "ekstraksi") {
            const e = c.sektor_ekstraksi as any;
            let baseCount = 0;
            if (key.endsWith("_mine") || key.endsWith("_well")) {
               const eKey = key.replace("_mine", "").replace("_well", "");
               baseCount = e[eKey] || 0;
            } else {
               const extractionKey = (mineralKritisRate as any)[key]?.dataKey;
               if (extractionKey && e[extractionKey] !== undefined) baseCount = e[extractionKey] || 0;
            }
            return baseCount + delta;
         }
      } catch (err) { }
      return delta;
   };

   // --- DATA MAPPING ---

   // 1. Sektor Produksi & Ekonomi Nasional
   const manufacturingItems = Object.entries(produkIndustriRate)
      .filter(([key]) => ["electronics_factory", "car_factory", "motorcycle_factory", "smelter", "cement_factory", "sawmill", "bottled_water_factory", "sugar_factory", "bakery_factory", "pharma_factory", "fertilizer_factory", "meat_processing_factory", "noodle_factory"].includes(key))
      .map(([key, val]: [string, any]) => ({
         key, label: val.desc,
         icon: key.includes("electronics") ? Cpu : (key.includes("mobil") ? Car : (key.includes("sepeda_motor") ? Bike : (key.includes("smelter") ? Flame : (key.includes("cement") ? Construction : (key.includes("sawmill") ? TreePine : (key.includes("water") ? Droplets : (key.includes("gula") ? Cookie : (key.includes("bakery") ? Croissant : (key.includes("pharma") ? Pill : (key.includes("pupuk") ? FlaskConical : (key.includes("meat") ? Beef : Soup))))))))))),
         desc: "Manufaktur",
         count: getBuildingCountTotal(initialCountry, key, "produksi"),
         tarif: val.production,
         unit: val.unit,
         buildTime: val.buildTime
      }));

   const agriItems = [
      { key: "agri_rice", label: "Padi", icon: Sprout },
      { key: "agri_grains", label: "Gandum/Jagung", icon: Utensils },
      { key: "agri_veg", label: "Sayur/Umbi", icon: Apple },
      { key: "agri_palm", label: "Kelapa Sawit", icon: Droplets },
      { key: "agri_soy", label: "Kedelai", icon: Bean },
      { key: "agri_luxury", label: "Kopi/Teh/Kakao", icon: Coffee }
   ].map(item => ({
      ...item, desc: "Pertanian",
      count: getBuildingCountTotal(initialCountry, item.key, "produksi"),
      tarif: 1, unit: "Unit", buildTime: 20
   }));

   const livestockItems = [
      { key: "livestock_poultry", label: "Ayam/Unggas", icon: Bird },
      { key: "livestock_dairy", label: "Sapi Perah", icon: Milk },
      { key: "livestock_beef", label: "Sapi Potong", icon: Beef },
      { key: "livestock_sheep", label: "Domba/Kambing", icon: Leaf },
      { key: "livestock_shrimp", label: "Udang/Kerang", icon: Shell },
      { key: "livestock_fish", label: "Ikan", icon: Fish }
   ].map(item => ({
      ...item, desc: "Peternakan",
      count: getBuildingCountTotal(initialCountry, item.key, "produksi"),
      tarif: 1, unit: "Unit", buildTime: 20
   }));

   // 2. Mineral Kritis & Strategis
   const extractionItems = Object.entries(mineralKritisRate).map(([key, val]: [string, any]) => ({
      key, label: val.desc,
      icon: key.includes("uranium") ? Radiation : (key.includes("minyak_bumi") ? Droplets : (key.includes("gas_alam") ? Flame : (key.includes("emas") ? Coins : Pickaxe))),
      desc: "Ekstraksi",
      count: getBuildingCountTotal(initialCountry, key, "ekstraksi"),
      tarif: val.production,
      unit: val.unit,
      buildTime: val.buildTime
   }));

   const totalManufacturingCount = manufacturingItems.reduce((acc: number, item: any) => acc + item.count, 0);
   const totalExtractionCount = extractionItems.reduce((acc: number, item: any) => acc + item.count, 0);
   const totalAgriCount = agriItems.reduce((acc: number, item: any) => acc + item.count, 0) + livestockItems.reduce((acc: number, item: any) => acc + item.count, 0);

   return (
      <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
         <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-sm"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

            {/* Header (Synchronized with EnergiModal) */}
            <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-xl">
                     <Package className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-white tracking-tight">Pusat Produksi & Komoditas</h2>
                     <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Production & Commodity Hub</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <button
                     className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group relative shadow-[0_0_15px_rgba(16,185,129,0.1)] active:scale-95 flex items-center gap-2"
                     title="Status Logistik"
                  >
                     <Warehouse className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                     onClick={onClose}
                     className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
                  >
                     <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                     <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
                  </button>
               </div>
            </div>

            {/* Dashboard Summary */}
            <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
                     <div className="p-3 bg-blue-500/10 rounded-xl">
                        <Factory className="h-6 w-6 text-blue-500" />
                     </div>
                     <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Total Pabrik Aktif</p>
                        <p className="text-xl font-black text-white leading-tight">{totalManufacturingCount.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">UNIT</span></p>
                     </div>
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
                     <div className="p-3 bg-orange-500/10 rounded-xl">
                        <Pickaxe className="h-6 w-6 text-orange-500" />
                     </div>
                     <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Sektor Ekstraksi</p>
                        <p className="text-xl font-black text-white leading-tight">{totalExtractionCount.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">UNIT</span></p>
                     </div>
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
                     <div className="p-3 bg-emerald-500/10 rounded-xl">
                        <Sprout className="h-6 w-6 text-emerald-500" />
                     </div>
                     <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Agrikultur & Ternak</p>
                        <p className="text-xl font-black text-white leading-tight">{totalAgriCount.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">UNIT</span></p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Main Split Content Area */}
            <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.03),transparent_40%)]">
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

                  {/* KOLOM 1: SEKTOR PRODUKSI & EKONOMI NASIONAL */}
                  <div className="space-y-8">
                     <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                           <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                              <Factory className="h-4 w-4 text-emerald-500" />
                           </div>
                           <h3 className="text-xl font-black text-white uppercase tracking-widest italic flex items-center gap-3">
                              Sektor Produksi & Ekonomi Nasional
                           </h3>
                        </div>
                        <div className="flex items-center gap-3">
                           <button
                              onClick={() => toggleSector('produksi-nasional')}
                              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
                           >
                              {collapsedSectors.has('produksi-nasional') ? <EyeOff size={16} /> : <Eye size={16} className="text-emerald-500" />}
                           </button>
                        </div>
                     </div>

                     <div className={`transition-all duration-500 ease-in-out ${collapsedSectors.has('produksi-nasional') ? 'opacity-0 invisible h-0' : 'opacity-100 mt-8'}`}>
                        <div className="space-y-8">
                           {/* Manufaktur Subheader */}
                           <div className="flex items-center gap-4">
                              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800"></div>
                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] whitespace-nowrap bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full shadow-xl">
                                 Manufaktur & Industri
                              </span>
                              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800"></div>
                           </div>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {manufacturingItems.map((item, idx) => (
                                 <CardItem key={idx} item={item} />
                              ))}
                           </div>

                           {/* Agri Subheader */}
                           <div className="flex items-center gap-4">
                              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800"></div>
                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] whitespace-nowrap bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full shadow-xl">
                                 Agrikultur & Pertanian
                              </span>
                              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800"></div>
                           </div>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {agriItems.map((item, idx) => (
                                 <CardItem key={idx} item={item} />
                              ))}
                           </div>

                           {/* Peternakan Subheader */}
                           <div className="flex items-center gap-4">
                              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800"></div>
                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] whitespace-nowrap bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full shadow-xl">
                                 Peternakan & Perikanan
                              </span>
                              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800"></div>
                           </div>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {livestockItems.map((item, idx) => (
                                 <CardItem key={idx} item={item} />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* KOLOM 2: MINERAL KRITIS & STRATEGIS */}
                  <div className="space-y-8 border-l border-zinc-900 pl-12">
                     <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                           <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                              <Pickaxe className="h-4 w-4 text-orange-500" />
                           </div>
                           <h3 className="text-xl font-black text-white uppercase tracking-widest italic flex items-center gap-3">
                              Mineral Kritis & Strategis
                           </h3>
                        </div>
                        <div className="flex items-center gap-3">
                           <button
                              onClick={() => toggleSector('ekstraksi')}
                              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
                           >
                              {collapsedSectors.has('ekstraksi') ? <EyeOff size={16} /> : <Eye size={16} className="text-orange-500" />}
                           </button>
                        </div>
                     </div>

                     <div className={`transition-all duration-500 ease-in-out ${collapsedSectors.has('ekstraksi') ? 'opacity-0 invisible h-0' : 'opacity-100 mt-8'}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {extractionItems.map((item, idx) => (
                              <CardItem key={idx} item={item} />
                           ))}
                        </div>
                     </div>
                  </div>

               </div>

               {/* Footer Global Insight */}
               <div className="mt-12 bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm relative overflow-hidden group shadow-2xl">
                  <div className="flex flex-col gap-3 relative z-10 max-w-2xl">
                     <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-emerald-500 animate-pulse" />
                        <span className="text-sm font-black text-white uppercase tracking-widest italic">Analisis Kapasitas Produksi Nasional</span>
                     </div>
                     <p className="text-sm text-zinc-400 leading-relaxed italic">
                        Stabilitas pasar domestik sangat bergantung pada kelancaran rantai pasok dari sektor hulu ke hilir. Pastikan ketersediaan mineral kritis terjaga untuk mendukung akselerasi industri manufaktur berteknologi tinggi.
                     </p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10 shrink-0">
                     <div className="flex flex-col items-center p-6 bg-zinc-950/80 border border-zinc-800 rounded-3xl min-w-[140px] shadow-2xl">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Status Produksi</span>
                        <span className="text-2xl font-black text-emerald-400">OPTIMAL</span>
                     </div>
                     <Activity className="h-12 w-12 text-emerald-500 opacity-30 group-hover:scale-110 transition-transform" />
                  </div>
                  <Hammer className="absolute -bottom-10 -right-10 h-40 w-40 text-emerald-500/5 rotate-12 group-hover:scale-110 transition-transform duration-1000" />
               </div>
            </div>
         </div>
      </div>
   )
}

function CardItem({ item }: { item: any }) {
   const [showDetail, setShowDetail] = useState(false);
   const totalVal = Math.floor(item.tarif * item.count);

   return (
      <div className={`bg-zinc-900/40 border border-zinc-800/60 transition-all group flex flex-col p-4 rounded-2xl gap-3 relative overflow-hidden h-full hover:border-zinc-700 hover:bg-zinc-900/60 shadow-lg active:scale-95 cursor-default`}>
         <div className="flex items-start justify-between relative z-10">
            <div className="flex gap-2">
               <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform shadow-inner">
                  <item.icon className="h-5 w-5 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]" />
               </div>
               <button 
                  onClick={() => setShowDetail(!showDetail)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/30'}`}
               >
                  <Info size={16} />
               </button>
            </div>
            <div className="flex flex-col items-end gap-1">
               <div className="px-2.5 py-1 rounded-full bg-zinc-950/50 border border-zinc-900 text-[11px] font-bold text-zinc-500 uppercase tracking-widest transition-colors group-hover:text-emerald-400">
                  {item.desc || "Infrastruktur"}
               </div>
               <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-black text-emerald-400 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.1)] text-[12px]">
                  JUMLAH: {item.count} UNIT
               </div>
            </div>
         </div>

         <div className="flex-1 flex flex-col gap-1 relative z-10 mt-1">
            <h4 className="text-[17px] font-black text-white tracking-tight leading-tight group-hover:text-emerald-400 transition-colors uppercase italic">{item.label}</h4>
            <div className="flex flex-col gap-1 mt-1">
               {showDetail ? (
                  <div className="mt-2 space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                        <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Rate Produksi</span>
                        <span className="text-[15px] font-black text-emerald-400 italic">+{item.tarif} {item.unit}</span>
                     </div>
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                        <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Waktu Bangun</span>
                        <span className="text-[15px] font-black text-blue-400 italic">{item.buildTime} Hari</span>
                     </div>
                  </div>
               ) : (
                  <>
                     <div className="flex items-center gap-2">
                        <TrendingUp size={13} className="text-emerald-500" />
                        <span className="text-[12px] font-bold text-zinc-400 italic uppercase">
                           Output: +{item.tarif} {item.unit}/unit
                        </span>
                     </div>
                     {item.buildTime && (
                        <div className="flex items-center gap-2">
                           <Clock size={13} className="text-zinc-600" />
                           <span className="text-[12px] font-bold text-zinc-600 italic uppercase tracking-tighter">Konstruksi: {item.buildTime} Hari</span>
                        </div>
                     )}
                  </>
               )}
            </div>
         </div>

         <div className="mt-2 pt-3 border-t border-zinc-800/40 bg-zinc-950/40 rounded-[1.2rem] flex flex-col gap-2 shadow-inner p-3">
            <div className="flex justify-between items-baseline gap-2">
               <span className="text-[11px] font-black text-emerald-500 uppercase tracking-widest italic">KAPASITAS TOTAL:</span>
               <div className="flex items-baseline gap-1">
                  <span className="text-[18px] font-black text-white tracking-tight">{totalVal.toLocaleString('id-ID')}</span>
                  <span className="text-[11px] font-bold text-zinc-500 uppercase">{item.unit}</span>
               </div>
            </div>
         </div>
      </div>
   );
}
