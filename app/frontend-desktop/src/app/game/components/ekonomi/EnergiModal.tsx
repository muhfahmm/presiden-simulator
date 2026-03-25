"use client"

import { useState, useEffect, Fragment } from "react"
import { X, Zap, Battery, Activity, AlertTriangle, TrendingUp, TrendingDown, Info, Shield, Droplets, Sun, Wind, Flame, Radio, Search, ChevronLeft, Eye, Gauge, Factory, Pickaxe, Landmark, GraduationCap, HeartPulse, TrainFront, ShieldCheck, Bird, Sprout, Cpu, Car, Bike, Construction, TreePine, Cookie, Croissant, Pill, FlaskConical, Beef, Soup, Radiation, Coins, Ship, Plane, Crosshair, Library, Scale, Siren, Home, Store, Map, Coffee, Milk, Fish, Shell, Leaf, Utensils, Apple, Bean, Wifi, Bus, Warehouse, Archive, HardHat, ShieldAlert, Clock, Loader2, EyeOff, Hammer, Swords, Users } from "lucide-react"
import { countries } from "../../../select-country/data/countries"
import { CountryData } from "../../../select-country/data/types"
import { gameStorage } from "../../gamestorage"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, KAPASITAS_LISTRIK_METADATA, KONSUMSI_EKSTRAKSI, KONSUMSI_PRODUKSI, KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC, KONSUMSI_FLEET, KONSUMSI_SOSIAL, KONSUMSI_TRANSPORTASI, DASHBOARD_LABELS, KONSUMSI_AGRI, KONSUMSI_PETERNAKAN } from "../../../select-country/data/electricity"
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "../../../select-country/data/pembangunan/laju-produksi"
import { produksiMiliter } from "../../../select-country/data/pembangunan/produksi-militer"
import { tempatUmum } from "../../../select-country/data/pembangunan/tempat-umum"

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export default function EnergiModal({ isOpen, onClose }: ModalProps) {
   const session = gameStorage.getSession();
   const initialCountry = countries.find((c: CountryData) => c.name_id === session?.country || c.name_en === session?.country) || countries[0];

   const [searchQuery, setSearchQuery] = useState("");
   const [activeTab, setActiveTab] = useState<"PRODUKSI" | "EKSTRAKSI" | "MILITER" | "UMUM">("PRODUKSI");
   const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());

   if (!isOpen) return null;

   const toggleSector = (id: string) => {
      setCollapsedSectors(prev => {
         const next = new Set(prev);
         if (next.has(id)) next.delete(id);
         else next.add(id);
         return next;
      });
   };

   // --- LOGIKA KALKULASI ---
   const totalCapacity = hitungTotalKapasitas(initialCountry.sector_electricity);
   const totalConsumption = hitungTotalKonsumsiNasional(initialCountry);
   const surplus = totalCapacity - totalConsumption;
   const reservePercentage = totalCapacity > 0 ? (surplus / totalCapacity) * 100 : 0;
   const serviceRatio = totalCapacity > 0 ? Math.min(100, (totalCapacity / totalConsumption) * 100) : 0;

   // Scaled values for Dashboard matching Produksi Hub logic
   const totalCapacityScaled = totalCapacity * 10;
   const totalConsumptionScaled = totalConsumption * 10;
   const surplusScaled = totalCapacityScaled - totalConsumptionScaled;

   // --- DATA MAPPING FOR PRODUCTION (Supply) ---
   const productionItems = Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]: [string, any]) => ({
      key,
      label: val.desc,
      icon: key === "hydro_plant" ? Droplets : (key === "nuclear_plant" ? Radiation : (key === "thermal_plant" ? Flame : Zap)),
      desc: "Energi Listrik",
      count: (initialCountry.sector_electricity as any)[key] || 0,
      rate: val.production,
      unit: "MW",
      isSupply: true,
      buildTime: val.buildTime
   }));

   // --- HELPER UNTUK MENGHITUNG UNIT BERDASARKAN DATA NEGARA ---
   const getBuildingCount = (c: CountryData, key: string, sector: string): number => {
      try {
         if (sector === "produksi") {
            const m = c.sector_manufacturing as any;
            const e = c.sector_extraction as any;
            const a = c.sector_agriculture as any;
            const l = c.sector_livestock as any;

            // Manufaktur mapping
            const manufacturingMap: Record<string, string> = {
               electronics_factory: "semiconductor", car_factory: "car", motorcycle_factory: "motorcycle",
               cement_factory: "concrete_cement", smelter: "smelter", bottled_water_factory: "mineral_water",
               pharma_factory: "pharmacy", sugar_factory: "sugar", noodle_factory: "instant_noodle",
               meat_processing_factory: "meat_processing", sawmill: "wood", fertilizer_factory: "fertilizer",
               bakery_factory: "bread"
            };
            if (manufacturingMap[key]) return m[manufacturingMap[key]] || 0;

            // Ekstraksi mapping
            if (key.endsWith("_mine") || key.endsWith("_well")) {
               const eKey = key.replace("_mine", "").replace("_well", "");
               return e[eKey] || 0;
            }

            // Agrikultur mapping
            if (a[key] !== undefined) return a[key] || 0;
            const agriKeys: Record<string, string> = { paddy_field: "rice", wheat_field: "wheat", corn_field: "corn", palm_oil_plantation: "palm_oil", cocoa_plantation: "cocoa", coffee_plantation: "coffee", tea_plantation: "tea", sugarcane_plantation: "sugarcane", vegetable_farm: "vegetables", tuber_field: "tubers", soybean_field: "soy" };
            if (agriKeys[key]) return a[agriKeys[key]] || 0;

            // Peternakan mapping
            if (l[key] !== undefined) return l[key] || 0;
            const liveKeys: Record<string, string> = { poultry_farm: "poultry", egg_farm: "egg", freshwater_fish_farm: "fish", sheep_farm: "sheep_goat", dairy_farm: "dairy_cow", cattle_farm: "beef_cow", shrimp_farm: "shrimp", pearl_farm: "shellfish" };
            if (liveKeys[key]) return l[liveKeys[key]] || 0;
         }

         if (sector === "militer") {
            const d = c.sector_defense as any;
            const s = c.sector_military_strategic as any;
            if (["prison", "barracks", "armory", "tank_hangar", "military_academy"].includes(key)) return d[key] || 0;
            if (["command_center", "military_air_base", "military_naval_base", "arms_factory", "cyber_defense", "space_program", "intelligence"].includes(key)) return s[key] || 0;
            if (key === "strategic_command") return s.command_center || 0;
            if (key === "air_base") return s.military_air_base || 0;
            if (key === "naval_base") return s.military_naval_base || 0;

            if (s.intel_radar) {
               if (["satellite", "satellite_system"].includes(key)) return s.intel_radar.satellite_system || 0;
               if (["radar", "radar_network"].includes(key)) return s.intel_radar.radar_network || 0;
               if (key === "cyber_ops") return s.intel_radar.cyber_ops || 0;
            }

            if (d.military_fleet) {
               const darat = d.military_fleet.darat;
               const laut = d.military_fleet.laut;
               const udara = d.military_fleet.udara;
               if (key === "tank") return darat.main_battle_tank || 0;
               if (key === "apc") return darat.apc || 0;
               if (key === "artileri") return darat.artileri_berat || 0;
               if (key === "carrier") return laut.kapal_induk || 0;
               if (key === "destroyer") return laut.kapal_destroyer || 0;
               if (key === "submarine") return laut.kapal_selam_nuklir || 0;
               if (key === "stealth_jet") return udara.jet_tempur_stealth || 0;
               if (key === "heli_attack") return udara.helikopter_serang || 0;
               if (key === "recon_plane") return udara.pesawat_pengintai || 0;
            }
         }

         if (sector === "umum") {
            const i = c.infrastructure as any;
            const s = c.sector_social;
            if (i[key] !== undefined) return i[key] || 0;
            if (key === "bike_lane") return i.bicycle_path || 0;
            if (key === "seaport") return i.sea_port || 0;

            if (s.education) {
               const edu = s.education as any;
               if (edu[key] !== undefined) return edu[key] || 0;
               if (key === "elem_school") return edu.elementary_school || 0;
               if (key === "mid_school") return edu.middle_school || 0;
               if (key === "high_school") return edu.high_school || 0;
            }

            if (s.health) {
               const h = s.health as any;
               if (h[key] !== undefined) return h[key] || 0;
            }

            if (s.law) {
               if (key === "police_station") return s.law.police_station || (s.law.police_fleet?.pusat_komando?.stasiun_polisi) || 0;
               if (s.law.police_fleet) {
                  const p = s.law.police_fleet;
                  if (key === "police_car") return p.patroli_lantas.mobil_patroli || 0;
                  if (key === "police_bike") return p.patroli_lantas.sepeda_motor || 0;
                  if (key === "unit_k9") return p.patroli_lantas.unit_k9 || 0;
                  if (key === "swat") return p.taktis_khusus.swat || 0;
                  if (key === "police_heli") return p.taktis_khusus.helikopter_polisi || 0;
                  if (key === "riot_control") return p.taktis_khusus.anti_huru_hara || 0;
                  if (key === "forensik") return p.pusat_komando.pusat_forensik || 0;
               }
            }
            if (["market", "shophouse", "mall", "offices", "entertainment"].includes(key)) return c.demand.commercial || 0;
         }
      } catch (err) { }
      return 0;
   };

   // --- NEW STRUCTURED DATA MAPPING FOR CONSUMPTION ---
   const sectorGroups = {
      PRODUKSI: {
         title: "2. SEKTOR PRODUKSI & EKONOMI NASIONAL (25 JENIS)",
         icon: Hammer,
         color: "text-emerald-500",
         categories: [
            {
               id: "manufaktur",
               label: "MANUFAKTUR & INDUSTRI",
               icon: Factory,
               items: Object.entries(produkIndustriRate)
                  .filter(([key]) => ["electronics_factory", "car_factory", "motorcycle_factory", "smelter", "cement_factory", "sawmill", "bottled_water_factory", "sugar_factory", "bakery_factory", "pharma_factory", "fertilizer_factory", "meat_processing_factory", "noodle_factory"].includes(key))
                  .map(([key, val]: [string, any]) => ({
                     key, label: val.desc,
                     icon: key.includes("electronics") ? Cpu : (key.includes("car") ? Car : (key.includes("motorcycle") ? Bike : (key.includes("smelter") ? Flame : (key.includes("cement") ? Construction : (key.includes("sawmill") ? TreePine : (key.includes("water") ? Droplets : (key.includes("sugar") ? Cookie : (key.includes("bakery") ? Croissant : (key.includes("pharma") ? Pill : (key.includes("fertilizer") ? FlaskConical : (key.includes("meat") ? Beef : Soup))))))))))),
                     desc: "Manufaktur",
                     count: getBuildingCount(initialCountry, key, "produksi"),
                     rate: (KONSUMSI_PRODUKSI as any)[key.replace('_factory', '')] || 5,
                     unit: "MW", buildTime: val.buildTime
                  }))
            },
            {
               id: "peternakan",
               label: "PETERNAKAN & PERIKANAN",
               icon: Bird,
               items: [
                  { key: "poultry_farm", label: "Ayam/Unggas", icon: Bird },
                  { key: "egg_farm", label: "Telur", icon: Cookie },
                  { key: "dairy_farm", label: "Sapi Perah", icon: Milk },
                  { key: "cattle_farm", label: "Sapi Potong", icon: Beef },
                  { key: "shrimp_farm", label: "Tambak Udang", icon: Shell },
                  { key: "pearl_farm", label: "Budidaya Kerang", icon: Fish }
               ].map(item => ({
                  ...item, desc: "Peternakan",
                  count: getBuildingCount(initialCountry, item.key, "produksi"),
                  rate: (KONSUMSI_PETERNAKAN as any)[item.key] || 0.1,
                  unit: "MW", buildTime: 20
               }))
            },
            {
               id: "pertanian",
               label: "AGRIKULTUR & PERTANIAN",
               icon: Sprout,
               items: [
                  { key: "paddy_field", label: "Padi", icon: Sprout },
                  { key: "wheat_field", label: "Gandum", icon: Utensils },
                  { key: "corn_field", label: "Jagung", icon: Utensils },
                  { key: "palm_oil_plantation", label: "Kelapa Sawit", icon: Droplets },
                  { key: "sugarcane_plantation", label: "Tebu", icon: Utensils },
                  { key: "coffee_plantation", label: "Kopi/Teh/Kakao", icon: Coffee }
               ].map(item => ({
                  ...item, desc: "Pertanian",
                  count: getBuildingCount(initialCountry, item.key, "produksi"),
                  rate: (KONSUMSI_AGRI as any)[item.key] || 0.1,
                  unit: "MW", buildTime: 20
               }))
            }
         ]
      },
      EKSTRAKSI: {
         title: "3. EKSTRAKSI MINERAL & SUMBER DAYA",
         icon: Pickaxe,
         color: "text-orange-500",
         categories: [
            {
               id: "ekstraksi",
               label: "EKSTRAKSI MINERAL & SUMBER DAYA",
               icon: Pickaxe,
               items: Object.entries(mineralKritisRate).map(([key, val]: [string, any]) => ({
                  key, label: val.desc,
                  icon: key.includes("uranium") ? Radiation : (key.includes("oil") ? Droplets : (key.includes("gas") ? Flame : (key.includes("gold") ? Coins : Pickaxe))),
                  desc: "Ekstraksi",
                  count: getBuildingCount(initialCountry, key, "produksi"),
                  rate: (KONSUMSI_EKSTRAKSI as any)[val.dataKey] || 5,
                  unit: "MW", buildTime: val.buildTime
               }))
            }
         ]
      },
      MILITER: {
         title: "4. KOMPLEKS INDUSTRI MILITER & PERTAHANAN",
         icon: Swords,
         color: "text-rose-500",
         categories: [
            {
               id: "pertahanan",
               label: "PERTAHANAN & INFRASTRUKTUR",
               icon: Shield,
               items: produksiMiliter.filter(i => i.category === "Pertahanan").map(item => ({
                  key: item.key, label: item.label, icon: Shield, desc: "Infrastruktur",
                  count: getBuildingCount(initialCountry, item.key, "militer"),
                  rate: (KONSUMSI_PERTAHANAN as any)[item.key] || 1,
                  unit: "MW", buildTime: item.buildTime
               }))
            },
            {
               id: "armada",
               label: "ARMADA TEMPUR (BEBAN AKTIF)",
               icon: Ship,
               items: produksiMiliter.filter(i => i.category === "Armada").map(item => ({
                  key: item.key, label: item.label, icon: Ship, desc: "Unit Armada",
                  count: getBuildingCount(initialCountry, item.key, "militer"),
                  rate: (KONSUMSI_FLEET as any)[item.key] || 2,
                  unit: "MW", buildTime: item.buildTime
               }))
            },
            {
               id: "intelijen",
               label: "INTELIJEN & TEKNOLOGI STRATEGIS",
               icon: Radio,
               items: produksiMiliter.filter(i => ["Intelijen"].includes(i.category) || (i as any).category === "Strategis").map(item => ({
                  key: item.key, label: item.label, icon: Radio, desc: "Teknologi",
                  count: getBuildingCount(initialCountry, item.key, "militer"),
                  rate: (KONSUMSI_STRATEGIC as any)[item.key] || 3,
                  unit: "MW", buildTime: item.buildTime
               }))
            },
            {
               id: "keamanan",
               label: "KEAMANAN & KEPOLISIAN (POLRI)",
               icon: Siren,
               items: produksiMiliter.filter(i => i.category === "Polisi").map(item => ({
                  key: item.key, label: item.label, icon: Siren, desc: "Keamanan",
                  count: getBuildingCount(initialCountry, item.key, "militer"),
                  rate: 1, unit: "MW", buildTime: item.buildTime
               }))
            }
         ]
      },
      UMUM: {
         title: "5. LAYANAN PUBLIK & INFRASTRUKTUR SIPIL",
         icon: Users,
         color: "text-blue-500",
         categories: [
            {
               id: "transportasi",
               label: "TRANSPORTASI & MOBILITAS",
               icon: TrainFront,
               items: tempatUmum.filter(i => i.category === "Transportasi").map(item => ({
                  key: item.id, label: item.name, icon: TrainFront, desc: "Transportasi",
                  count: getBuildingCount(initialCountry, item.id, "umum"),
                  rate: (KONSUMSI_TRANSPORTASI as any)[item.id] || 5,
                  unit: "MW", buildTime: item.buildTime
               }))
            },
            {
               id: "sosial",
               label: "FASILITAS SOSIAL & PUBLIK",
               icon: Landmark,
               items: tempatUmum.filter(i => ["Pendidikan", "Kesehatan", "Hukum"].includes(i.category)).map(item => ({
                  key: item.id, label: item.name, icon: Landmark, desc: item.category,
                  count: getBuildingCount(initialCountry, item.id, "umum"),
                  rate: (KONSUMSI_SOSIAL as any)[item.id] || 2,
                  unit: "MW", buildTime: item.buildTime
               }))
            },
            {
               id: "komersial",
               label: "KOMERSIAL & EKONOMI",
               icon: Store,
               items: tempatUmum.filter(i => i.category === "Komersial").map(item => ({
                  key: item.id, label: item.name, icon: Store, desc: "Komersial",
                  count: getBuildingCount(initialCountry, item.id, "umum"),
                  rate: 4, unit: "MW", buildTime: item.buildTime
               }))
            }
         ]
      }
   };

   return (
      <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
         <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent blur-sm"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

            {/* Header */}
            <div className="px-10 py-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-900/30 backdrop-blur-3xl">
               <div className="flex items-center gap-6">
                  <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20">
                     <Zap className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic">Manajemen Energi Nasional</h2>
                     <div className="flex items-center gap-2 mt-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.3em]">National Power Grid & Utilities</p>
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all cursor-pointer">
                     <Clock className="h-6 w-6 text-cyan-400" />
                  </div>
                  <button onClick={onClose} className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl flex items-center gap-3 font-black text-sm transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] active:scale-95 group cursor-pointer">
                     <span className="uppercase tracking-widest group-hover:mr-1 transition-all">Tutup</span>
                     <X size={20} className="group-hover:rotate-90 transition-transform" />
                  </button>
               </div>
            </div>

            {/* Dashboard Summary */}
            <div className="px-10 py-6 bg-zinc-900/50 border-b border-zinc-800/50">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* ... Dashboard items same as before ... */}
                  <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-3xl flex items-center gap-6 group hover:border-amber-500/30 transition-all shadow-lg">
                     <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                        <Zap className="h-8 w-8 text-amber-500 font-black" />
                     </div>
                     <div>
                        <p className="text-[11px] text-zinc-500 font-black uppercase tracking-[0.2em]">{DASHBOARD_LABELS.supply.title.toUpperCase()}</p>
                        <div className="flex items-baseline gap-2">
                           <p className="text-2xl font-black text-white leading-tight">{totalCapacityScaled.toLocaleString('id-ID')}</p>
                           <span className="text-xs text-zinc-500 uppercase font-bold">MW</span>
                        </div>
                     </div>
                  </div>

                  <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-3xl flex items-center gap-6 group hover:border-rose-500/30 transition-all shadow-lg">
                     <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(225,29,72,0.2)]">
                        <Activity className="h-8 w-8 text-rose-500" />
                     </div>
                     <div>
                        <p className="text-[11px] text-zinc-500 font-black uppercase tracking-[0.2em]">{DASHBOARD_LABELS.usage.title.toUpperCase()}</p>
                        <div className="flex items-baseline gap-2">
                           <p className="text-2xl font-black text-white leading-tight">{totalConsumptionScaled.toLocaleString('id-ID')}</p>
                           <span className="text-xs text-zinc-500 uppercase font-bold">MW</span>
                        </div>
                     </div>
                  </div>

                  <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-3xl flex items-center gap-6 group hover:border-emerald-500/30 transition-all shadow-lg relative overflow-hidden">
                     <div className={`p-4 rounded-2xl border ${surplus >= 0 ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-rose-500/10 border-rose-500/20 text-rose-500"} group-hover:scale-110 transition-transform shadow-lg`}>
                        {surplus >= 0 ? <TrendingUp className="h-8 w-8" /> : <TrendingDown className="h-8 w-8" />}
                     </div>
                     <div>
                        <p className="text-[11px] text-zinc-500 font-black uppercase tracking-[0.2em]">{DASHBOARD_LABELS.balance.title.toUpperCase()}</p>
                        <div className="flex items-baseline gap-2">
                           <p className={`text-2xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                              {surplus >= 0 ? '+' : ''}{surplusScaled.toLocaleString('id-ID')}
                           </p>
                           <span className="text-xs text-zinc-500 uppercase font-bold">MW</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Main Split Content Area */}
            <div className="flex-1 overflow-y-auto p-10 no-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.03),transparent_40%)]">
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

                  {/* KOLOM 1: PRODUKSI */}
                  <div className="space-y-8">
                     <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                           <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl shadow-inner">
                              <Zap className="h-5 w-5 text-amber-500" />
                           </div>
                           <h3 className="text-xl font-black text-white uppercase tracking-tighter italic flex items-center gap-3">
                              PRODUKSI ENERGI NASIONAL
                           </h3>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="text-amber-400 font-black uppercase text-[11px] tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                              {productionItems.reduce((acc, item) => acc + item.count, 0)} BANGUNAN
                           </span>
                           <button
                              onClick={() => toggleSector('produksi-nasional')}
                              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
                           >
                              {collapsedSectors.has('produksi-nasional') ? <EyeOff size={18} /> : <Eye size={18} className="text-amber-500" />}
                           </button>
                        </div>
                     </div>

                     <div className={`grid transition-all duration-500 ease-in-out ${collapsedSectors.has('produksi-nasional') ? 'grid-rows-[0fr] opacity-0 invisible' : 'grid-rows-[1fr] opacity-100 mt-8'}`}>
                        <div className="overflow-hidden">
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-in fade-in duration-500">
                              {productionItems.map((item, idx) => (
                                 <CardItem key={idx} item={item} />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* KOLOM 2: PEMAKAIAN */}
                  <div className="space-y-8 border-l border-zinc-900 pl-12 flex flex-col">

                     {/* Tab Navigation */}
                     <div className="flex items-center gap-3 p-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl self-start mb-4">
                        {(Object.entries(sectorGroups) as [keyof typeof sectorGroups, any][]).map(([key, group]) => {
                           const TabIcon = group.icon;
                           return (
                              <button
                                 key={key}
                                 onClick={() => setActiveTab(key)}
                                 className={`flex items-center gap-3 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === key ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
                              >
                                 <TabIcon className={`h-4 w-4 ${activeTab === key ? group.color : ''}`} />
                                 {key}
                              </button>
                           );
                        })}
                     </div>

                     <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                           {(() => {
                              const ActiveIcon = (sectorGroups as any)[activeTab].icon;
                              const groupColor = (sectorGroups as any)[activeTab].color;
                              return (
                                 <>
                                    <div className={`p-2.5 ${groupColor.replace('text-', 'bg-')}/10 border ${groupColor.replace('text-', 'border-')}/20 rounded-xl shadow-inner`}>
                                       <ActiveIcon className={`h-5 w-5 ${groupColor}`} />
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">{(sectorGroups as any)[activeTab].title}</h3>
                                 </>
                              );
                           })()}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-40"></div>
                     </div>

                     <div className="space-y-12 flex-1">
                        {(sectorGroups as any)[activeTab].categories.map((category: any) => {
                           const totalCount = category.items.reduce((acc: number, item: any) => acc + item.count, 0);
                           const isCollapsed = collapsedSectors.has(category.id);
                           const CategoryIcon = category.icon;

                           return (
                              <div key={category.id} className="space-y-8">
                                 {/* Category Separator */}
                                 <div className="relative flex items-center justify-center py-4">
                                    <div className="absolute inset-0 flex items-center">
                                       <div className="w-full border-t border-zinc-800/50"></div>
                                    </div>
                                    <div className="relative bg-[#09090b] px-6 flex items-center gap-4">
                                       <CategoryIcon className="h-5 w-5 text-zinc-600" />
                                       <span className="text-[14px] font-black text-zinc-500 uppercase tracking-[0.2em] italic">
                                          {category.label} ({totalCount})
                                       </span>
                                    </div>
                                 </div>

                                 <div className="flex items-center justify-between gap-4 group">
                                 <div className="flex items-center gap-4">
                                    <div className={`p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors shadow-inner`}>
                                       <CategoryIcon className={`h-5 w-5 text-zinc-400`} />
                                    </div>
                                    <div className="flex items-center gap-3">
                                       <span className="text-[17px] font-black text-zinc-400 uppercase tracking-widest leading-none">Rincian Fasilitas</span>
                                    </div>
                                 </div>
                                    <div className="flex items-center gap-3">
                                       <span className="text-[11px] font-black text-white bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800 uppercase tracking-tight shadow-lg">
                                          JUMLAH: {category.items.length} FASILITAS
                                       </span>
                                       <button
                                          onClick={() => toggleSector(category.id)}
                                          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95 group-hover:border-zinc-700"
                                       >
                                          {isCollapsed ? <EyeOff size={16} /> : <Eye size={16} className="text-amber-500" />}
                                       </button>
                                    </div>
                                 </div>

                                 <div className={`grid transition-all duration-500 ease-in-out ${isCollapsed ? 'grid-rows-[0fr] opacity-0 invisible' : 'grid-rows-[1fr] opacity-100 mt-6'}`}>
                                    <div className="overflow-hidden">
                                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-500">
                                          {category.items.map((item: any, idx: number) => (
                                             <CardItem key={idx} item={{ ...item, isSupply: false }} variant="compact" />
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>

               </div>

               {/* Footer Global Insight remains at the bottom of the scroll area */}
               <div className="mt-12 bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm relative overflow-hidden group">
                  {/* ... same footer code ... */}
                  <div className="flex flex-col gap-3 relative z-10 max-w-2xl">
                     <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-500 animate-pulse" />
                        <span className="text-sm font-black text-white uppercase tracking-widest italic">Pemeriksaan Sistem Jaringan Nasional</span>
                     </div>
                     <p className="text-sm text-zinc-400 leading-relaxed italic">
                        {reservePercentage < 10
                           ? "DEFISIT ENERGI TERDETEKSI: Cadangan daya nasional berada di bawah batas aman 10%. Segera bangun PLTN atau PLT Thermal baru untuk menjaga stabilitas produksi industri."
                           : reservePercentage < 25
                              ? "Kapasitas saat ini stabil, namun beban dari sektor manufaktur dan pertahanan terus meningkat. Perencanaan ekspansi disarankan."
                              : "SISTEM OPTIMAL: Ketahanan energi sangat kuat dengan surplus terukur. Fokus pada pengembangan energi terbarukan untuk efisiensi jangka panjang."}
                     </p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10 shrink-0">
                     <div className="flex flex-col items-center p-6 bg-zinc-950/80 border border-zinc-800 rounded-3xl min-w-[140px] shadow-2xl">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Rasio Cadangan</span>
                        <span className={`text-2xl font-black ${reservePercentage >= 15 ? 'text-emerald-400' : (reservePercentage >= 5 ? 'text-amber-400' : 'text-rose-500')}`}>
                           {Math.round(reservePercentage)}%
                        </span>
                     </div>
                     <Battery className={`h-12 w-12 ${reservePercentage >= 15 ? 'text-emerald-500' : (reservePercentage >= 5 ? 'text-amber-500' : 'text-rose-500')} opacity-30 group-hover:scale-110 transition-transform`} />
                  </div>
                  <Zap className="absolute -bottom-10 -right-10 h-40 w-40 text-amber-500/5 rotate-12 group-hover:scale-110 transition-transform duration-1000" />
               </div>
            </div>
         </div>
      </div>
   )
}

function CardItem({ item, variant = "default" }: { item: any, variant?: "default" | "compact" }) {
   const totalVal = Math.floor(item.rate * item.count);
   const isCompact = variant === "compact";

   return (
      <div className={`bg-zinc-900/40 border border-zinc-800/60 transition-all group flex flex-col relative overflow-hidden h-full hover:border-zinc-700 hover:bg-zinc-900/60 shadow-lg active:scale-95 cursor-default ${isCompact ? 'p-4 rounded-[1.8rem] gap-3' : 'p-5 rounded-[2.5rem] gap-4'}`}>
         <div className="flex items-start justify-between relative z-10">
            <div className={`${isCompact ? 'p-2' : 'p-3'} bg-zinc-950/80 rounded-2xl border border-zinc-800 group-hover:scale-110 transition-transform shadow-inner`}>
               <item.icon className={`${isCompact ? 'h-5 w-5' : 'h-6 w-6'} ${item.isSupply ? 'text-amber-500' : 'text-blue-500'} shadow-[0_0_15px_rgba(245,158,11,0.2)]`} />
            </div>
            <div className="flex flex-col items-end gap-1.5">
               {!isCompact && (
                  <div className="px-3 py-1 rounded-full bg-zinc-950/50 border border-zinc-900 text-[11px] font-black text-zinc-500 uppercase tracking-widest">
                     {item.desc}
                  </div>
               )}
               <div className={`px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-black text-emerald-400 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.1)] ${isCompact ? 'text-[10px]' : 'text-[12px]'}`}>
                  TERBANGUN: {item.count} UNIT
               </div>
            </div>
         </div>

         <div className="flex-1 flex flex-col gap-1 relative z-10">
            <h4 className={`${isCompact ? 'text-[16px]' : 'text-[19px]'} font-black text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors uppercase italic`}>{item.label}</h4>
            <div className="flex flex-col gap-1 mt-1">
               <div className="flex items-center gap-2">
                  <Zap size={isCompact ? 11 : 13} className={item.isSupply ? 'text-amber-400' : 'text-rose-500/70'} />
                  <span className={`${isCompact ? 'text-[11px]' : 'text-[13px]'} font-bold ${item.isSupply ? 'text-amber-400' : 'text-zinc-400'} italic uppercase`}>
                     {item.isSupply ? 'Produksi' : 'Konsumsi'}: +{item.rate} MW/{item.isSupply ? 'bangunan' : 'unit'}
                  </span>
               </div>
               {item.buildTime && !isCompact && (
                  <div className="flex items-center gap-2">
                     <Clock size={13} className="text-zinc-600" />
                     <span className="text-[12px] font-bold text-zinc-600 italic uppercase">Waktu Konstruksi: {item.buildTime} Hari</span>
                  </div>
               )}
            </div>
         </div>

         <div className={`mt-2 ${isCompact ? 'pt-3 p-3' : 'pt-4 p-4'} border-t border-zinc-800/40 bg-zinc-950/40 rounded-[1.5rem] flex flex-col gap-2 shadow-inner`}>
            <div className="flex justify-between items-baseline gap-2">
               <span className={`${isCompact ? 'text-[10px]' : 'text-[12px]'} font-black text-zinc-500 uppercase tracking-widest`}>{item.isSupply ? 'HASIL PRODUKSI:' : 'BEBAN AKTIF:'}</span>
               <div className="flex items-baseline gap-1">
                  <span className={`${isCompact ? 'text-[16px]' : 'text-[19px]'} font-black text-white tracking-tight`}>{totalVal.toLocaleString('id-ID')}</span>
                  <span className={`${isCompact ? 'text-[10px]' : 'text-[12px]'} font-bold text-zinc-500 uppercase`}>{item.isSupply ? 'MW/Hr' : 'MW'}</span>
               </div>
            </div>
            {item.isSupply && (
               <div className="flex justify-between items-baseline gap-2 border-t border-zinc-800/20 pt-1.5">
                  <span className="text-[11px] font-black text-cyan-500 uppercase tracking-widest">TOTAL KAPASITAS:</span>
                  <div className="flex items-baseline gap-1">
                     <span className="text-[18px] font-black text-cyan-400 tracking-tight">{totalVal.toLocaleString('id-ID')}</span>
                     <span className="text-[11px] font-bold text-zinc-500 uppercase">MW</span>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

