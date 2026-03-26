"use client"

import { useState, useEffect, Fragment } from "react"
import { X, Zap, Battery, Activity, AlertTriangle, TrendingUp, TrendingDown, Info, Shield, Droplets, Sun, Wind, Flame, Radio, Search, ChevronLeft, Eye, Gauge, Factory, Pickaxe, Landmark, GraduationCap, HeartPulse, TrainFront, ShieldCheck, Bird, Sprout, Cpu, Car, Bike, Construction, TreePine, Cookie, Croissant, Pill, FlaskConical, Beef, Soup, Radiation, Coins, Ship, Plane, Crosshair, Library, Scale, Siren, Home, Store, Map, Coffee, Milk, Fish, Shell, Leaf, Utensils, Apple, Bean, Wifi, Bus, Warehouse, Archive, HardHat, ShieldAlert, Clock, Loader2, EyeOff, Hammer, Swords, Users } from "lucide-react"
import { countries } from "@/app/select-country/data/countries/_index"
import { CountryData } from "@/app/select-country/data/types/_index"
import { gameStorage } from "@/app/game/gamestorage"
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, KAPASITAS_LISTRIK_METADATA, KONSUMSI_EKSTRAKSI, KONSUMSI_PRODUKSI, KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC, KONSUMSI_FLEET, KONSUMSI_SOSIAL, KONSUMSI_TRANSPORTASI, DASHBOARD_LABELS, KONSUMSI_PANGAN } from "@/app/select-country/data/electricity"
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "@/app/select-country/data/pembangunan/laju-produksi"
import { produksiMiliter } from "@/app/select-country/data/pembangunan/produksi-militer"
import { tempatUmum } from "@/app/select-country/data/pembangunan/tempat-umum"

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
   const totalCapacity = hitungTotalKapasitas(initialCountry.sektor_listrik);
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
      icon: key === "pembangkit_listrik_tenaga_air" ? Droplets : (key === "pembangkit_listrik_tenaga_nuklir" ? Radiation : (key === "pembangkit_listrik_tenaga_uap" ? Flame : Zap)),
      desc: "Energi Listrik",
      count: (initialCountry.sektor_listrik as any)[key] || 0,
      tarif: val.production,
      unit: "MW",
      isSupply: true,
      buildTime: val.buildTime
   }));

   // --- HELPER UNTUK MENGHITUNG UNIT BERDASARKAN DATA NEGARA ---
   const getBuildingCount = (c: CountryData, key: string, sector: string): number => {
      try {
         if (sector === "produksi") {
            const m = c.sektor_manufaktur as any;
            const e = c.sektor_ekstraksi as any;
            const peternakan = (c.sektor_peternakan || {}) as any;
            const perikanan = (c.sektor_perikanan || {}) as any;
            const agrikultur = (c.sektor_agrikultur || {}) as any;

            // Manufaktur mapping
            const manufacturingMap: Record<string, string> = {
               electronics_factory: "semikonduktor", car_factory: "mobil", motorcycle_factory: "sepeda_motor",
               cement_factory: "semen_beton", smelter: "smelter", bottled_water_factory: "air_mineral",
               pharma_factory: "farmasi", sugar_factory: "gula", noodle_factory: "mie_instan",
               meat_processing_factory: "pengolahan_daging", sawmill: "kayu", fertilizer_factory: "pupuk",
               bakery_factory: "roti"
            };
            if (manufacturingMap[key]) return m[manufacturingMap[key]] || 0;

            // Ekstraksi mapping
            if (key.endsWith("_mine") || key.endsWith("_well")) {
               const eKey = key.replace("_mine", "").replace("_well", "");
               return e[eKey] || 0;
            }

            // Pangan mapping (Building Key -> Database Key)
            const panganMap: Record<string, string> = {
               ayam_unggas: "ayam_unggas",
               sapi_perah: "sapi_perah",
               sapi_potong: "sapi_potong",
               domba_kambing: "domba_kambing",
               udang_kerang: "udang_kerang",
               ikan: "ikan",
               padi: "padi",
               gandum_jagung: "gandum_jagung",
               sayur_umbi: "sayur_umbi",
               kedelai: "kedelai",
               kelapa_sawit: "kelapa_sawit",
               kopi_teh_kakao: "kopi_teh_kakao",
               sugarcane_plantation: "gula"
            };

            if (panganMap[key]) return (peternakan[panganMap[key]] || 0) + (perikanan[panganMap[key]] || 0) + (agrikultur[panganMap[key]] || 0);
         }

         if (sector === "militer") {
            const m = c.sektor_pertahanan as any;
            const f = c.armada_militer as any;
            const s = c.militer_strategis as any;
            
            if (["penjara", "gudang_senjata", "hangar_tank", "akademi_militer", "pusat_komando", "pangkalan_udara", "pangkalan_laut", "program_luar_angkasa", "pertahanan_siber"].includes(key)) return m[key] || 0;
            
            if (key === "strategic_command") return m.pusat_komando || 0;
            if (key === "air_base") return m.pangkalan_udara || 0;
            if (key === "naval_base") return m.pangkalan_laut || 0;

            if (s.intel_radar) {
               if (["satellite", "sistem_satelit"].includes(key)) return s.intel_radar.sistem_satelit || 0;
               if (["radar", "jaringan_radar"].includes(key)) return s.intel_radar.jaringan_radar || 0;
               if (key === "operasi_siber") return s.intel_radar.operasi_siber || 0;
            }

            if (key === "barak") return f.barak || 0;
            if (key === "infanteri") return f.infanteri || 0;
            if (key === "penerjun_payung") return f.penerjun_payung || 0;
            if (key === "pasukan_khusus") return f.pasukan_khusus || 0;

            if (f.darat) {
               if (key === "tank") return f.darat.tank_tempur_utama || 0;
               if (key === "apc") return f.darat.apc || 0;
               if (key === "artileri") return f.darat.artileri_berat || 0;
            }
            if (f.laut) {
               if (key === "carrier") return f.laut.kapal_induk || 0;
               if (key === "destroyer") return f.laut.kapal_destroyer || 0;
               if (key === "submarine") return f.laut.kapal_selam_nuklir || 0;
            }
            if (f.udara) {
               if (key === "stealth_jet") return f.udara.jet_tempur_siluman || 0;
               if (key === "heli_attack") return f.udara.helikopter_serang || 0;
               if (key === "recon_plane") return f.udara.pesawat_pengintai || 0;
            }
         }

         if (sector === "umum") {
            const i = c.infrastruktur as any;
            const s = c.sektor_sosial;
            const sec = c.armada_kepolisian as any;
            
            if (i[key] !== undefined) return i[key] || 0;
            if (key === "bike_lane") return i.jalur_sepeda || 0;
            if (key === "seaport") return i.pelabuhan_laut || 0;

            if (s.pendidikan) {
               const edu = s.pendidikan as any;
               if (edu[key] !== undefined) return edu[key] || 0;
               if (key === "elem_school") return edu.sd || 0;
               if (key === "mid_school") return edu.smp || 0;
               if (key === "sma") return edu.sma || 0;
            }

            if (s.kesehatan) {
               const h = s.kesehatan as any;
               if (h[key] !== undefined) return h[key] || 0;
            }

            if (s.hukum) {
               if (key === "pos_polisi") return s.hukum.pos_polisi || (sec.armada_polisi?.pusat_komando?.kantor_polisi) || 0;
               if (sec.armada_polisi) {
                  const p = sec.armada_polisi;
                  if (key === "police_car") return p.patroli_lantas.mobil_patroli || 0;
                  if (key === "police_bike") return p.patroli_lantas.sepeda_motor || 0;
                  if (key === "unit_k9") return p.patroli_lantas.unit_k9 || 0;
                  if (key === "swat") return p.taktis_khusus.swat || 0;
                  if (key === "police_heli") return p.taktis_khusus.helikopter_polisi || 0;
                  if (key === "riot_control") return p.taktis_khusus.anti_huru_hara || 0;
                  if (key === "forensik") return p.pusat_komando.pusat_forensik || 0;
               }
            }
            if (["market", "shophouse", "mall", "offices", "entertainment"].includes(key)) return 0;
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
                     icon: key.includes("electronics") ? Cpu : (key.includes("mobil") ? Car : (key.includes("sepeda_motor") ? Bike : (key.includes("smelter") ? Flame : (key.includes("cement") ? Construction : (key.includes("sawmill") ? TreePine : (key.includes("water") ? Droplets : (key.includes("gula") ? Cookie : (key.includes("bakery") ? Croissant : (key.includes("pharma") ? Pill : (key.includes("pupuk") ? FlaskConical : (key.includes("meat") ? Beef : Soup))))))))))),
                     desc: "Manufaktur",
                     count: getBuildingCount(initialCountry, key, "produksi"),
                     tarif: (KONSUMSI_PRODUKSI as any)[key.replace('_factory', '')] || 5,
                     unit: "MW", buildTime: val.buildTime
                  }))
            },
            {
               id: "pangan",
               label: "AGRIKTULTUR & PETERNAKAN",
               icon: Utensils,
               items: [
                  { key: "agri_rice", label: "Padi", icon: Sprout },
                  { key: "agri_grains", label: "Gandum/Jagung", icon: Utensils },
                  { key: "agri_veg", label: "Sayur/Umbi", icon: Apple },
                  { key: "agri_soy", label: "Kedelai", icon: Bean },
                  { key: "agri_palm", label: "Kelapa Sawit", icon: Droplets },
                  { key: "agri_luxury", label: "Kopi/Teh/Kakao", icon: Coffee },
                  { key: "livestock_poultry", label: "Ayam/Unggas", icon: Bird },
                  { key: "livestock_dairy", label: "Sapi Perah", icon: Milk },
                  { key: "livestock_beef", label: "Sapi Potong", icon: Beef },
                  { key: "livestock_sheep", label: "Domba/Kambing", icon: Leaf },
                  { key: "livestock_shrimp", label: "Udang/Kerang", icon: Shell },
                  { key: "livestock_fish", label: "Ikan", icon: Fish }
               ].map(item => ({
                  ...item, desc: "Pangan",
                  count: getBuildingCount(initialCountry, item.key, "produksi"),
                  tarif: (KONSUMSI_PANGAN as any)[item.key] || 0.1,
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
                  icon: key.includes("uranium") ? Radiation : (key.includes("minyak_bumi") ? Droplets : (key.includes("gas_alam") ? Flame : (key.includes("emas") ? Coins : Pickaxe))),
                  desc: "Ekstraksi",
                  count: getBuildingCount(initialCountry, key, "produksi"),
                  tarif: (KONSUMSI_EKSTRAKSI as any)[val.dataKey] || 5,
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
                  tarif: (KONSUMSI_PERTAHANAN as any)[item.key] || 1,
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
                  tarif: (KONSUMSI_FLEET as any)[item.key] || 2,
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
                  tarif: (KONSUMSI_STRATEGIC as any)[item.key] || 3,
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
                  tarif: 1, unit: "MW", buildTime: item.buildTime
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
                  tarif: (KONSUMSI_TRANSPORTASI as any)[item.id] || 5,
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
                  tarif: (KONSUMSI_SOSIAL as any)[item.id] || 2,
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
                  tarif: 4, unit: "MW", buildTime: item.buildTime
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

            {/* Header (Synchronized with ProduksiModal) */}
            <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-xl">
                     <Zap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-white tracking-tight">Manajemen Energi Nasional</h2>
                     <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Power Grid & Utilities</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <button
                     className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group relative shadow-[0_0_15px_rgba(8,145,178,0.1)] active:scale-95 flex items-center gap-2"
                     title="Antrean Pembangunan"
                  >
                     <Clock className="h-6 w-6 text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
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

            {/* Dashboard Summary (Synchronized with ProduksiModal Summary Listrik) */}
            <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Box 1: Pasokan Listrik */}
                  <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
                     <div className="p-3 bg-cyan-500/10 rounded-xl">
                        <Zap className="h-6 w-6 text-cyan-500" />
                     </div>
                     <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                        <p className="text-xl font-black text-white leading-tight">{totalCapacityScaled.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
                     </div>
                  </div>

                  {/* Box 2: Beban Listrik */}
                  <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
                     <div className="p-3 bg-rose-500/10 rounded-xl">
                        <Activity className="h-6 w-6 text-rose-500" />
                     </div>
                     <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                        <p className="text-xl font-black text-white leading-tight">{totalConsumptionScaled.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
                     </div>
                  </div>

                  {/* Box 3: Neraca Listrik */}
                  <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group">
                     <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                        {surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}
                     </div>
                     <div className="relative z-10">
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                        <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                           {surplusScaled.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Main Split Content Area */}
            <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.03),transparent_40%)]">
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

                  {/* KOLOM 1: PASOKAN ENERGI NASIONAL */}
                  <div className="space-y-8">
                     <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                           <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                              <Zap className="h-4 w-4 text-amber-500" />
                           </div>
                           <h3 className="text-xl font-black text-white uppercase tracking-widest italic flex items-center gap-3">
                              1. SEKTOR KELISTRIKAN NASIONAL
                           </h3>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="text-amber-400 font-black uppercase text-[10px] tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20 shadow-lg">
                              {productionItems.length} JENIS PRODUKSI
                           </span>
                           <button
                              onClick={() => toggleSector('produksi-nasional')}
                              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
                           >
                              {collapsedSectors.has('produksi-nasional') ? <EyeOff size={16} /> : <Eye size={16} className="text-amber-500" />}
                           </button>
                        </div>
                     </div>

                     <div className={`grid transition-all duration-500 ease-in-out ${collapsedSectors.has('produksi-nasional') ? 'grid-rows-[0fr] opacity-0 invisible' : 'grid-rows-[1fr] opacity-100 mt-8'}`}>
                        <div className="overflow-hidden">
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-500">
                              {productionItems.map((item, idx) => (
                                 <CardItem key={idx} item={item} />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* KOLOM 2: BEBAN ENERGI NASIONAL */}
                  <div className="space-y-8 border-l border-zinc-900 pl-12 flex flex-col">

                     {/* Tab Navigation */}
                     <div className="flex items-center gap-2 p-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl self-start mb-4">
                        {(Object.entries(sectorGroups) as [string, any][]).map(([key, group]) => {
                           const TabIcon = group.icon;
                           return (
                              <button
                                 key={key}
                                 onClick={() => setActiveTab(key as 'PRODUKSI' | 'EKSTRAKSI' | 'MILITER' | 'UMUM')}
                                 className={`flex items-center gap-3 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === key ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}
                              >
                                 <TabIcon className={`h-4 w-4 ${activeTab === key ? group.color : ''}`} />
                                 {key}
                              </button>
                           );
                        })}
                     </div>

                     <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                           {(() => {
                              const group = (sectorGroups as any)[activeTab];
                              const ActiveIcon = group.icon;
                              const groupColor = group.color;
                              return (
                                 <>
                                    <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}>
                                       <ActiveIcon className={`h-4 w-4 ${groupColor}`} />
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title}</h3>
                                 </>
                              );
                           })()}
                        </div>
                        <div className="flex items-center gap-3">
                           <button
                              onClick={() => toggleSector(activeTab)}
                              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
                           >
                              {collapsedSectors.has(activeTab) ? <EyeOff size={16} /> : <Eye size={16} className="text-cyan-400" />}
                           </button>
                        </div>
                     </div>

                     <div className="space-y-12 flex-1">
                        {(sectorGroups as any)[activeTab].categories.map((category: any) => {
                           const isCollapsed = collapsedSectors.has(category.id) || collapsedSectors.has(activeTab);

                           return (
                              <div key={category.id} className="space-y-6">
                                 {/* Category Label (Identical to 2nd screenshot style) */}
                                 <div className="col-span-full mt-2 mb-2 flex items-center gap-4">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800"></div>
                                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] whitespace-nowrap bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full shadow-xl">
                                       {category.label}
                                    </span>
                                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800"></div>
                                 </div>

                                 <div className={`grid transition-all duration-500 ease-in-out ${isCollapsed ? 'grid-rows-[0fr] opacity-0 invisible' : 'grid-rows-[1fr] opacity-100'}`}>
                                    <div className="overflow-hidden">
                                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-500">
                                          {category.items.map((item: any, idx: number) => (
                                             <CardItem key={idx} item={{ ...item, isSupply: false }} />
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

               {/* Footer Global Insight */}
               <div className="mt-12 bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm relative overflow-hidden group shadow-2xl">
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
   const [showDetail, setShowDetail] = useState(false);
   const totalVal = Math.floor(item.tarif * item.count);
   const isCompact = variant === "compact";
 
   return (
      <div className={`bg-zinc-900/40 border border-zinc-800/60 transition-all group flex flex-col p-4 rounded-2xl gap-3 relative overflow-hidden h-full hover:border-zinc-700 hover:bg-zinc-900/60 shadow-lg active:scale-95 cursor-default`}>
         <div className="flex items-start justify-between relative z-10">
            <div className="flex gap-2">
               <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform shadow-inner">
                  <item.icon className={`h-5 w-5 ${item.isSupply ? 'text-amber-500' : 'text-blue-500'} shadow-[0_0_15px_rgba(245,158,11,0.2)]`} />
               </div>
               <button 
                  onClick={() => setShowDetail(!showDetail)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}
               >
                  <Info size={16} />
               </button>
            </div>
            <div className="flex flex-col items-end gap-1">
               {!isCompact && (
                  <div className="px-2.5 py-1 rounded-full bg-zinc-950/50 border border-zinc-900 text-[11px] font-bold text-zinc-500 uppercase tracking-widest transition-colors group-hover:text-cyan-400">
                     {item.desc || "Infrastruktur"}
                  </div>
               )}
               <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-black text-emerald-400 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.1)] text-[12px]">
                  TERBANGUN: {item.count} UNIT
               </div>
            </div>
         </div>
 
         <div className="flex-1 flex flex-col gap-1 relative z-10 mt-1">
            <h4 className="text-[17px] font-black text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors uppercase italic">{item.label}</h4>
            <div className="flex flex-col gap-1 mt-1">
               {showDetail ? (
                  <div className="mt-2 space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                        <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Biaya Pemeliharaan</span>
                        <span className="text-[15px] font-black text-rose-400 italic">-{item.maintenanceCost || 5}</span>
                     </div>
                     <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                        <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Beban Sistem</span>
                        <span className="text-[15px] font-black text-cyan-400 italic">Stable</span>
                     </div>
                     <p className="text-[11px] text-zinc-500 italic mt-2 px-1 leading-relaxed">Fasilitas ini membutuhkan anggaran operasional harian agar tetap berfungsi optimal bagi negara.</p>
                  </div>
               ) : (
                  <>
                     <div className="flex items-center gap-2">
                        <Zap size={13} className={item.isSupply ? 'text-amber-400' : 'text-rose-500/70'} />
                        <span className="text-[12px] font-bold text-zinc-400 italic uppercase">
                           {item.isSupply ? 'Produksi' : 'Konsumsi'}: +{item.tarif} MW/{item.isSupply ? 'bangunan' : 'unit'}
                        </span>
                     </div>
                     {item.buildTime && !isCompact && (
                        <div className="flex items-center gap-2">
                           <Clock size={13} className="text-zinc-600" />
                           <span className="text-[12px] font-bold text-zinc-600 italic uppercase tracking-tighter">Waktu Konstruksi: {item.buildTime} Hari</span>
                        </div>
                     )}
                  </>
               )}
            </div>
         </div>
 
         <div className="mt-2 pt-3 border-t border-zinc-800/40 bg-zinc-950/40 rounded-[1.2rem] flex flex-col gap-2 shadow-inner p-3">
            {!item.isSupply && (
               <div className="flex justify-between items-baseline gap-2">
                  <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest italic">BEBAN AKTIF:</span>
                  <div className="flex items-baseline gap-1">
                     <span className="text-[18px] font-black text-white tracking-tight">{totalVal.toLocaleString('id-ID')}</span>
                     <span className="text-[11px] font-bold text-zinc-500 uppercase">MW</span>
                  </div>
               </div>
            )}
            {item.isSupply && (
               <div className="flex justify-between items-baseline gap-2">
                  <span className="text-[11px] font-black text-cyan-500 uppercase tracking-widest italic">JUMLAH TOTAL PRODUKSI:</span>
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

