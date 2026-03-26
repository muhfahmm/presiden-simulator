import { useState, useEffect, Fragment } from "react";
import { X, Wrench, Zap, Pickaxe, Factory, Construction, Store, Beef, Wheat, Radiation, Coins, Flame, Droplets, FlaskConical, Shovel, Container, Car, Bike, Hammer, Trees, Coffee, Cookie, Milk, Fish, Waves, Shell, Sprout, Activity, TrendingUp, TrendingDown, Clock, Loader2, RefreshCw, Eye, EyeOff, Pill, Utensils, Apple, Bird, Bean, Ship, Map, Wifi, Plane, Bus, ShieldCheck, Home, Archive, Warehouse, GraduationCap, Landmark, Crosshair, HeartPulse, Library, TrainFront, HardHat, ShieldAlert, Scale, Siren, Cpu, TreePine, Croissant, Soup, Leaf, Info, Gem, Radio, Layers, Box, Battery, Mountain } from "lucide-react"
import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "@/app/select-country/data/pembangunan/laju-produksi";
import { produksiMiliter } from "@/app/select-country/data/pembangunan/produksi-militer";
import { tempatUmum } from "@/app/select-country/data/pembangunan/tempat-umum";
import { hitungTotalKapasitas, hitungTotalKonsumsiNasional, DASHBOARD_LABELS, KAPASITAS_LISTRIK_METADATA } from "@/app/select-country/data/electricity";
import { KONSUMSI_EKSTRAKSI, KONSUMSI_PRODUKSI, KONSUMSI_PANGAN } from "@/app/select-country/data/electricity";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/navigasi_bawah/3_pembangunan/buildingStorage";
import { formatGameDate, addDays, getStoredGameDate } from "@/app/game/data/time/gameTime";
import { calculateConstructionProgress, getStatusText } from "@/app/game/data/construction/constructionLogic";
import { countries } from "@/app/select-country/data/countries/_index";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProduksiHubV3({ isOpen, onClose }: ModalProps) {
  const [confirmBuild, setConfirmBuild] = useState<any | null>(null);
  const [tick, setTick] = useState(0);
  const [activeConstructions, setActiveConstructions] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [collapsedSectors, setCollapsedSectors] = useState<Set<string>>(new Set());
  const [showQueue, setShowQueue] = useState(false);

  const toggleSector = (id: string) => {
    setCollapsedSectors(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Sync queue data whenever tick or confirmBuild changes or modal opens
  useEffect(() => {
    if (!isOpen) return;
    const queue = buildingStorage.getQueue();
    setActiveConstructions(queue);
  }, [tick, confirmBuild, isOpen]);

  // Debug log for checking key matching
  useEffect(() => {
    if (isOpen && activeConstructions.length > 0) {
      console.log("DEBUG: Active constructions in modal:", activeConstructions);
    }
  }, [activeConstructions, isOpen]);

  // Polling for progress updates and completion
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      try {
        const queueToProcess = buildingStorage.getQueue();
        if (!queueToProcess || !Array.isArray(queueToProcess)) {
          return;
        }

        const nowTime = getStoredGameDate().getTime();
        const itemsToFinish = queueToProcess.filter(item => item && typeof item.endDate === 'number' && nowTime >= item.endDate);

        if (itemsToFinish.length > 0) {
          itemsToFinish.forEach(finishItem => {
            if (finishItem.buildingKey) {
              buildingStorage.incrementBuildingCount(finishItem.buildingKey);
              buildingStorage.removeFromQueue(finishItem.id);
            }
          });
          // Dispatch event to sync lainnya components
          window.dispatchEvent(new Event('building_storage_updated'));
        }

        setTick(t => t + 1);
      } catch (err) {
        console.error("DEBUG: Interval error", err);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentCountryName = session?.country || "Indonesia";
  const searchName = currentCountryName.toLowerCase().trim();
  const selectedData = countries.find((c: any) =>
    c.name_id.toLowerCase() === searchName ||
    c.name_en.toLowerCase() === searchName
  );
  const currentData = selectedData || countries[0];

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas || {};

  // --- ENERGY DASHBOARD SYNCHRONIZATION ---
  // Apply construction deltas to a temporary country object to get accurate supply/usage
  const currentDataWithDeltas = {
    ...currentData,
    sektor_listrik: { ...currentData.sektor_listrik },
    sektor_manufaktur: { ...currentData.sektor_manufaktur },
    sektor_peternakan: { ...currentData.sektor_peternakan },
    sektor_perikanan: { ...currentData.sektor_perikanan },
    sektor_agrikultur: { ...currentData.sektor_agrikultur },
    sektor_ekstraksi: { ...currentData.sektor_ekstraksi },
  };

  Object.entries(buildingDeltas).forEach(([key, deltaValue]) => {
    if (typeof deltaValue !== 'number' || deltaValue === 0) return;

    // 1. Electricity Sector
    if (KAPASITAS_LISTRIK_METADATA[key as keyof typeof KAPASITAS_LISTRIK_METADATA]) {
      (currentDataWithDeltas.sektor_listrik as any)[key] = ((currentDataWithDeltas.sektor_listrik as any)[key] || 0) + deltaValue;
    }
    // 2. Critical Minerals
    else if ((mineralKritisRate as any)[key]) {
      const dataKey = (mineralKritisRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] = ((currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] || 0) + deltaValue;
    }
    // 3. Industrial Products
    else if ((produkIndustriRate as any)[key]) {
      const dataKey = (produkIndustriRate as any)[key].dataKey;
      if (dataKey) (currentDataWithDeltas.sektor_manufaktur as any)[dataKey] = ((currentDataWithDeltas.sektor_manufaktur as any)[dataKey] || 0) + deltaValue;
    }
    // 4. Food Commodities
    else if ((komoditasPanganRate as any)[key]) {
      const dataKey = (komoditasPanganRate as any)[key].dataKey;
      if (dataKey) {
        if (currentDataWithDeltas.sektor_peternakan && (currentDataWithDeltas.sektor_peternakan as any)[dataKey] !== undefined) {
          (currentDataWithDeltas.sektor_peternakan as any)[dataKey] = ((currentDataWithDeltas.sektor_peternakan as any)[dataKey] || 0) + deltaValue;
        } else if (currentDataWithDeltas.sektor_perikanan && (currentDataWithDeltas.sektor_perikanan as any)[dataKey] !== undefined) {
          (currentDataWithDeltas.sektor_perikanan as any)[dataKey] = ((currentDataWithDeltas.sektor_perikanan as any)[dataKey] || 0) + deltaValue;
        } else if (currentDataWithDeltas.sektor_agrikultur && (currentDataWithDeltas.sektor_agrikultur as any)[dataKey] !== undefined) {
          (currentDataWithDeltas.sektor_agrikultur as any)[dataKey] = ((currentDataWithDeltas.sektor_agrikultur as any)[dataKey] || 0) + deltaValue;
        }
      }
    }
  });

  const adjustedTotalPasokan = hitungTotalKapasitas(currentDataWithDeltas.sektor_listrik);
  const adjustedTotalBeban = hitungTotalKonsumsiNasional(currentDataWithDeltas);
  const surplus = adjustedTotalPasokan - adjustedTotalBeban;

  const handleBuildRequest = (item: any) => {
    setConfirmBuild(item);
    setQuantity(1);
  };

  const handleConfirmBuild = () => {
    if (!confirmBuild) return;
    try {
      let currentStart = getStoredGameDate().getTime();
      const itemsToAdd: any[] = [];

      for (let i = 0; i < quantity; i++) {
        const currentEnd = addDays(new Date(currentStart), confirmBuild.buildTime).getTime();

        const newItem = buildingStorage.addToQueue({
          buildingKey: confirmBuild.key,
          label: confirmBuild.label,
          sector: confirmBuild.groupId,
          startDate: currentStart,
          endDate: currentEnd,
          buildTime: confirmBuild.buildTime
        });

        if (newItem) {
          itemsToAdd.push(newItem);
        }

        // Next building starts when this one ends
        currentStart = currentEnd;
      }

      if (itemsToAdd.length > 0) {
        setActiveConstructions(prev => [...prev, ...itemsToAdd]);
      }

      setConfirmBuild(null);
      setQuantity(1);
    } catch (err) {
      console.error("DEBUG: Add to queue error", err);
    }
  };

  // Helper for icons based on key
  const getIcon = (key: string) => {
    if (key.includes("uranium")) return Radio;
    if (key.includes("minyak_bumi") || key.includes("oil_well")) return Droplets;
    if (key.includes("gas_alam") || key.includes("gas_well")) return Flame;
    if (key.includes("emas") || key.includes("gold_mine")) return Gem;
    if (key.includes("coal_mine")) return Layers;
    if (key.includes("aluminum_mine")) return Layers;
    if (key.includes("iron_ore_mine")) return Mountain;
    if (key.includes("salt_mine")) return Waves;
    if (key.includes("lithium_mine")) return Battery;
    if (key.includes("nickel_mine")) return Box;
    if (key.includes("rare_earth_mine")) return Cpu;
    if (key.includes("electronics")) return Cpu;
    if (key.includes("mobil") || key.includes("car")) return Car;
    if (key.includes("sepeda_motor") || key.includes("motorcycle")) return Bike;
    if (key.includes("smelter")) return Flame;
    if (key.includes("cement")) return Construction;
    if (key.includes("sawmill") || key.includes("kayu")) return TreePine;
    if (key.includes("water")) return Droplets;
    if (key.includes("gula") || key.includes("sugar")) return Cookie;
    if (key.includes("bakery") || key.includes("roti")) return Croissant;
    if (key.includes("pharma") || key.includes("farmasi")) return Pill;
    if (key.includes("pupuk") || key.includes("fertilizer")) return FlaskConical;
    if (key.includes("meat") || key.includes("pengolahan_daging")) return Beef;
    if (key.includes("mie_instan") || key.includes("noodle")) return Soup;
    if (key.includes("poultry") || key.includes("egg") || key.includes("ayam")) return Bird;
    if (key.includes("fish") || key.includes("ikan")) return Fish;
    if (key.includes("sheep") || key.includes("domba") || key.includes("kambing")) return Leaf;
    if (key.includes("shrimp") || key.includes("udang") || key.includes("pearl") || key.includes("kerang")) return Shell;
    if (key.includes("dairy") || key.includes("sapi_perah")) return Milk;
    if (key.includes("cattle") || key.includes("sapi_potong")) return Beef;
    if (key.includes("rice") || key.includes("padi") || key.includes("sprout")) return Sprout;
    if (key.includes("wheat") || key.includes("gandum") || key.includes("corn") || key.includes("jagung")) return Utensils;
    if (key.includes("veg") || key.includes("sayur") || key.includes("apple")) return Apple;
    if (key.includes("soy") || key.includes("kedelai")) return Bean;
    if (key.includes("palm") || key.includes("sawit")) return Droplets;
    if (key.includes("coffee") || key.includes("tea") || key.includes("kopi") || key.includes("teh") || key.includes("kakao")) return Coffee;
    return Pickaxe;
  };

  const productionGroups = [
    {
      id: "kelistrikan",
      title: "1. Sektor Kelistrikan Nasional",
      icon: Zap,
      color: "text-amber-400",
      items: Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]: [string, any]) => ({
        key,
        groupId: "kelistrikan",
        label: val.desc,
        icon: getIcon(key),
        desc: "Energi Listrik",
        tarif: val.production,
        unit: val.unit,
        count: (currentData.sektor_listrik[key as keyof typeof currentData.sektor_listrik] || 0) + ((buildingDeltas[key] as number) || 0),
        pendapatan_nasional: 0,
        cost: 35,
        buildTime: val.buildTime || 90
      }))
    },
    {
      id: "produksi_ekonomi",
      title: "2. Sektor Produksi & Ekonomi Nasional",
      icon: Factory,
      color: "text-emerald-500",
      items: [
        // --- INDUSTRI (Grouped) ---
        ...Object.entries(produkIndustriRate)
          .sort((a, b) => {
            const order = ["semikonduktor", "mobil", "sepeda_motor", "smelter", "semen_beton", "kayu", "air_mineral", "gula", "roti", "farmasi", "pupuk", "pengolahan_daging", "mie_instan"];
            const idxA = order.indexOf(a[1].dataKey);
            const idxB = order.indexOf(b[1].dataKey);
            return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB) || a[1].no - b[1].no;
          })
          .map(([key, val]: [string, any]) => ({
            key,
            groupId: "manufaktur",
            label: val.desc,
            icon: getIcon(key),
            desc: "Manufaktur",
            tarif: val.production,
            unit: val.unit,
            count: (currentData.sektor_manufaktur[val.dataKey as keyof typeof currentData.sektor_manufaktur] || 0) + ((buildingDeltas[key] as number) || 0),
            powerUsage: (KONSUMSI_PRODUKSI as any)[val.dataKey] || 5,
            pendapatan_nasional: val.pendapatan_nasional,
            cost: 45,
            buildTime: val.buildTime || 45
          })),

        // --- PETERNAKAN (Grouped) ---
        ...Object.entries(komoditasPanganRate)
          .filter(([key]) => ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing"].includes(key))
          .sort((a, b) => {
            const order = ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing"];
            const idxA = order.indexOf(a[0]);
            const idxB = order.indexOf(b[0]);
            return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
          })
          .map(([key, val]: [string, any]) => ({
            key,
            groupId: "peternakan",
            label: val.desc,
            icon: getIcon(key),
            desc: "Peternakan Nasional",
            tarif: val.production,
            unit: val.unit,
            count: (currentData.sektor_peternakan[val.dataKey as keyof typeof currentData.sektor_peternakan] || 0) + ((buildingDeltas[key] as number) || 0),
            powerUsage: (KONSUMSI_PANGAN as any)[val.dataKey] || 5,
            pendapatan_nasional: val.pendapatan_nasional,
            cost: 15,
            buildTime: val.buildTime || 25
          })),

        // --- PERIKANAN & KELAUTAN (Grouped) ---
        ...Object.entries(komoditasPanganRate)
          .filter(([key]) => ["udang_kerang", "ikan"].includes(key))
          .sort((a, b) => {
            const order = ["udang_kerang", "ikan"];
            const idxA = order.indexOf(a[0]);
            const idxB = order.indexOf(b[0]);
            return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
          })
          .map(([key, val]: [string, any]) => ({
            key,
            groupId: "perikanan",
            label: val.desc,
            icon: getIcon(key),
            desc: "Perikanan & Kelautan",
            tarif: val.production,
            unit: val.unit,
            count: (currentData.sektor_perikanan[val.dataKey as keyof typeof currentData.sektor_perikanan] || 0) + ((buildingDeltas[key] as number) || 0),
            powerUsage: (KONSUMSI_PANGAN as any)[val.dataKey] || 5,
            pendapatan_nasional: val.pendapatan_nasional,
            cost: 20,
            buildTime: val.buildTime || 30
          })),

        // --- PERTANIAN & PERKEBUNAN (Grouped) ---
        ...Object.entries(komoditasPanganRate)
          .filter(([key]) => ["padi", "gandum_jagung", "sayur_umbi", "kedelai", "kelapa_sawit", "kopi_teh_kakao"].includes(key))
          .sort((a, b) => {
            const order = ["padi", "gandum_jagung", "sayur_umbi", "kedelai", "kelapa_sawit", "kopi_teh_kakao"];
            const idxA = order.indexOf(a[0]);
            const idxB = order.indexOf(b[0]);
            return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
          })
          .map(([key, val]: [string, any]) => ({
            key,
            groupId: "pertanian",
            label: val.desc,
            icon: getIcon(key),
            desc: "Pertanian & Perkebunan",
            tarif: val.production,
            unit: val.unit,
            count: (currentData.sektor_agrikultur[val.dataKey as keyof typeof currentData.sektor_agrikultur] || 0) + ((buildingDeltas[key] as number) || 0),
            powerUsage: (KONSUMSI_PANGAN as any)[val.dataKey] || 5,
            pendapatan_nasional: val.pendapatan_nasional,
            cost: 10,
            buildTime: val.buildTime || 30
          }))
      ]
    },
    {
      id: "ekstraksi",
      title: "5. Mineral Kritis & Strategis",
      icon: Pickaxe,
      color: "text-orange-500",
      items: Object.entries(mineralKritisRate)
        .sort((a, b) => {
          const order = ["emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", "garam", "nikel", "litium", "tembaga", "aluminium", "logam_tanah_jarang", "bijih_besi"];
          const idxA = order.indexOf(a[1].dataKey);
          const idxB = order.indexOf(b[1].dataKey);
          return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
        })
        .map(([key, val]: [string, any]) => ({
          key,
          groupId: "ekstraksi",
          label: val.desc,
          icon: getIcon(key),
          desc: "Sumber Daya Alam",
          tarif: val.production,
          unit: val.unit,
          count: (currentData.sektor_ekstraksi[val.dataKey as keyof typeof currentData.sektor_ekstraksi] || 0) + ((buildingDeltas[key] as number) || 0),
          powerUsage: (KONSUMSI_EKSTRAKSI as any)[val.dataKey] || 5,
          pendapatan_nasional: 0,
          cost: 30,
          buildTime: val.buildTime || 30
        }))
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Wrench className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Produksi Hub</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Production Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowQueue(true)}
              className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group flex items-center gap-2 relative shadow-[0_0_15px_rgba(8,145,178,0.1)] active:scale-95"
              title="Antrean Pembangunan"
            >
              <Clock className="h-6 w-6 text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              {activeConstructions.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-zinc-950 shadow-lg animate-in zoom-in">
                  {activeConstructions.length}
                </span>
              )}
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

        {/* Dashboard Summary Listrik */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Zap className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.supply.title}</p>
                <p className="text-xl font-black text-white leading-tight">{adjustedTotalPasokan.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <Activity className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.usage.title}</p>
                <p className="text-xl font-black text-white leading-tight">{adjustedTotalBeban.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group">
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                {surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-500" />}
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{DASHBOARD_LABELS.balance.title}</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                  {surplus.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">MW</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="space-y-12">
            {productionGroups.map((group) => (
              <div key={group.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3 mb-5 px-1">
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800`}>
                    <group.icon className={`h-4 w-4 ${group.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic">{group.title} <span className="text-cyan-400 ml-3 font-black lowercase italic text-xs tracking-normal bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">({group.items.length} Jenis)</span></h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>

                  {/* Hide/Show Toggle */}
                  <button
                    onClick={() => toggleSector(group.id)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all duration-700 cursor-pointer group/eye ml-4 shadow-lg active:scale-95"
                    title={collapsedSectors.has(group.id) ? "Tampilkan Sektor" : "Sembunyikan Sektor"}
                  >
                    {collapsedSectors.has(group.id) ? (
                      <EyeOff size={16} className="group-hover/eye:scale-110 transition-transform duration-700 rotate-12" />
                    ) : (
                      <Eye size={16} className="group-hover/eye:scale-110 transition-transform duration-700 text-cyan-400" />
                    )}
                  </button>
                </div>

                {/* Collapsible Content Grid with Smooth Transition */}
                <div className={`grid transition-all duration-700 ease-in-out ${!collapsedSectors.has(group.id) ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
                      {group.items.map((item, idx) => {
                        const currentConstruction = activeConstructions?.find(c => c && c.buildingKey === item.key);
                        const prevGroupId = idx > 0 ? group.items[idx - 1].groupId : null;
                        const showManufakturHeader = item.groupId === "manufaktur" && prevGroupId !== "manufaktur" && group.id === "produksi_ekonomi";
                        const showPeternakanHeader = item.groupId === "peternakan" && prevGroupId !== "peternakan";
                        const showPerikananHeader = item.groupId === "perikanan" && prevGroupId !== "perikanan";
                        const showPertanianHeader = item.groupId === "pertanian" && prevGroupId !== "pertanian";

                        return (
                          <Fragment key={item.key || idx}>
                            {showManufakturHeader && (
                              <div className="col-span-full mb-4 flex items-center gap-3 mt-2">
                                <Factory className="h-4 w-4 text-zinc-500" />
                                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest whitespace-nowrap">
                                  MANUFAKTUR & INDUSTRI (13)
                                </span>
                              </div>
                            )}

                            {showPeternakanHeader && (
                              <div className="col-span-full mt-8 mb-4 flex items-center gap-3">
                                <Beef className="h-4 w-4 text-zinc-500" />
                                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest whitespace-nowrap">
                                  PETERNAKAN NASIONAL (4)
                                </span>
                              </div>
                            )}

                            {showPerikananHeader && (
                              <div className="col-span-full mt-8 mb-4 flex items-center gap-3">
                                <Fish className="h-4 w-4 text-zinc-500" />
                                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest whitespace-nowrap">
                                  PERIKANAN & KELAUTAN (2)
                                </span>
                              </div>
                            )}

                            {showPertanianHeader && (
                              <div className="col-span-full mt-8 mb-4 flex items-center gap-3">
                                <Sprout className="h-4 w-4 text-zinc-500" />
                                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest whitespace-nowrap">
                                   PERTANIAN & PERKEBUNAN (6)
                                </span>
                              </div>
                            )}

                            <BuildingCard
                              item={item}
                              onBuild={handleBuildRequest}
                              construction={currentConstruction}
                              cumulative={session?.cumulativeProduction?.[item.key] || 0}
                            />
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Modal Overlay */}
        {confirmBuild && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[32px] shadow-2xl max-w-md w-full mx-4 flex flex-col items-center text-center gap-6 animate-in zoom-in-95">
              <div className="p-5 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                <confirmBuild.icon className="h-10 w-10 text-cyan-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Konfirmasi Bangun?</h3>
                <p className="text-zinc-400 text-sm font-medium">Anda akan membangun <span className="text-white font-black underline">{confirmBuild.label}</span> untuk meningkatkan kapasitas produksi nasional.</p>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Biaya Total</span>
                  <span className="text-xl font-black text-amber-500 group-hover:scale-110 transition-transform duration-300 tracking-tight">{confirmBuild.cost * quantity}</span>
                </div>
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center gap-1 group">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Waktu Total</span>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-cyan-500" />
                    <span className="text-xl font-black text-white group-hover:scale-110 transition-transform duration-300 tracking-tight">{confirmBuild.buildTime * quantity} Hari</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="w-full flex flex-col gap-2">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Jumlah Unit Pembangunan</span>
                <div className="flex items-center justify-center gap-6 bg-zinc-950/80 border border-zinc-800 p-2 rounded-2xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-inner active:scale-95"
                  >
                    -
                  </button>
                  <div className="flex flex-col items-center min-w-[80px]">
                    <span className="text-3xl font-black text-white tracking-tighter">{quantity}</span>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter italic">Unit</span>
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-xl font-black text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-inner active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="w-full py-2 px-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-[10px] font-medium text-cyan-500/80 italic">
                Selesai Bertahap S/D: {formatGameDate(addDays(getStoredGameDate(), confirmBuild.buildTime * quantity))}
              </div>

              <div className="flex gap-4 w-full mt-2">
                <button
                  onClick={() => setConfirmBuild(null)}
                  className="flex-1 px-6 py-4 rounded-2xl bg-zinc-800/50 text-zinc-400 font-black text-xs uppercase tracking-widest border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmBuild}
                  className="flex-2 px-6 py-4 rounded-2xl bg-cyan-600 text-white font-black text-xs uppercase tracking-widest shadow-[0_10px_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_20px_40px_rgba(8,145,178,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  Bangun Sekarang
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Queue Sidebar */}
        <div
          className={`absolute inset-0 z-[90] flex items-center justify-end transition-colors duration-300 ${showQueue ? 'bg-black/20 pointer-events-auto' : 'bg-transparent pointer-events-none'}`}
          onClick={() => setShowQueue(false)}
        >
          <div
            className={`bg-zinc-950/95 border-l border-zinc-800 w-full max-w-sm h-full shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col relative transition-transform duration-500 ease-in-out ${showQueue ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-xl">
                  <Clock className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Antrean Pembangunan</h3>
                  <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">{activeConstructions.length} Proyek Aktif</p>
                </div>
              </div>
              <button onClick={() => setShowQueue(false)} className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar backdrop-blur-md">
              {activeConstructions.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-center gap-3 opacity-50">
                  <Wrench className="h-10 w-10 text-zinc-600" />
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Pabrik & Infrastruktur Sedang Kosong</p>
                </div>
              ) : (
                activeConstructions.map((item, idx) => {
                  const progress = calculateConstructionProgress(item.startDate, item.endDate, getStoredGameDate().getTime());
                  if (!progress) return null;
                  return (
                    <div key={item.id || idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000" style={{ width: `${progress.percentage}%` }} />
                      <div className="flex justify-between items-center relative z-10">
                        <h4 className="text-sm font-black text-white">{item.label}</h4>
                        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">{progress.percentage}%</span>
                      </div>
                      <div className="flex flex-col gap-1 relative z-10 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                        <div className="flex justify-between">
                          <span>Mulai:</span>
                          <span className="text-zinc-400">{formatGameDate(new Date(item.startDate))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Selesai:</span>
                          <span className="text-cyan-400">{formatGameDate(new Date(item.endDate))}</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-950 rounded-full mt-2 overflow-hidden border border-zinc-800/50">
                          <div className={`h-full transition-all duration-1000 ${progress.colorClass} shadow-[0_0_10px_rgba(6,182,212,0.2)]`} style={{ width: `${progress.percentage}%` }} />
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BuildingCard({ item, onBuild, construction, cumulative }: { item: any, onBuild: (item: any) => void, construction?: any, cumulative: number }) {
  const [showDetail, setShowDetail] = useState(false);
  const currentDate = getStoredGameDate().getTime();
  const progress = construction
    ? calculateConstructionProgress(construction.startDate, construction.endDate, currentDate)
    : null;

  return (
    <div className={`bg-zinc-900/40 border ${progress ? 'border-cyan-500/30 bg-cyan-900/5' : 'border-zinc-800/60'} p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full`}>
      {/* Background Progress Highlight */}
      {progress && (
        <div
          className="absolute top-0 left-0 bottom-0 bg-cyan-500/5 transition-all duration-1000"
          style={{ width: `${progress.percentage}%` }}
        />
      )}

      <div className="flex items-start justify-between relative z-10">
        <div className="flex gap-2">
          <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
            <item.icon className={`h-5 w-5 ${progress ? 'text-white' : 'text-cyan-500'} shadow-[0_0_10px_rgba(6,182,212,0.3)]`} />
          </div>
          <button
            onClick={() => setShowDetail(!showDetail)}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${showDetail ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'}`}
          >
            <Info size={16} />
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
            {item.desc || "Infrastruktur"}
          </div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            Terbangun: {item.count} Unit {item.groupId !== "kelistrikan" && item.powerUsage && `(${item.count * item.powerUsage} MW)`}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-1 relative z-10 mt-1">
        <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight">{item.label}</h4>

        <div className="flex flex-col gap-1 mt-1">
          {showDetail ? (
            <div className="mt-2 space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Biaya Pemeliharaan</span>
                <span className="text-[15px] font-black text-rose-400">-{item.maintenanceCost || 5} / hari</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">Beban Listrik</span>
                <span className="text-[15px] font-black text-amber-500">{item.groupId === "kelistrikan" ? "Supply" : `${item.powerUsage} MW`}</span>
              </div>
              <p className="text-[12px] text-zinc-400 italic mt-2 px-1 leading-relaxed">Fasilitas ini membutuhkan anggaran operasional harian agar tetap berfungsi optimal.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <TrendingUp size={12} className="text-amber-500" />
                <span className="text-[12px] font-bold text-amber-500/90">
                  Produksi: +{Math.floor(item.tarif)} {item.unit}/bangunan
                </span>
              </div>

              {item.groupId !== "kelistrikan" && (
                <div className="flex items-center gap-2">
                  <Zap size={12} className="text-rose-500/90" />
                  <span className="text-[12px] font-bold text-rose-500/80">
                    Konsumsi Listrik: {item.powerUsage} MW/bangunan
                  </span>
                </div>
              )}

              {!progress && (
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-zinc-500" />
                  <span className="text-[12px] font-bold text-zinc-500 italic">Waktu Konstruksi: {item.buildTime} Hari</span>
                </div>
              )}
            </>
          )}

          {/* New Total Output Section */}
          <div className="mt-3 pt-3 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-xl p-3">
            {/* Cumulative / Total Display for ALL buildings */}
            <div className="flex justify-between items-baseline gap-2 border-t border-zinc-800/10 pt-1.5 mt-1">
              <span className="text-[11px] font-black text-cyan-500 uppercase tracking-widest italic">
                {item.groupId === "kelistrikan" ? "JUMLAH TOTAL PRODUKSI:" : "Hasil di Gudang:"}
              </span>
              <span className="text-[14px] font-black text-cyan-400 tracking-tight">
                {item.groupId === "kelistrikan" ? (Math.floor(item.tarif) * item.count).toLocaleString('id-ID') : Math.floor(cumulative).toLocaleString('id-ID')} <span className="text-[10px] text-zinc-400 font-normal uppercase italic">{item.unit}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-3 relative z-10">
          {progress ? (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Loader2 size={10} className={`animate-spin ${progress.isWaiting ? 'text-zinc-600' : 'text-cyan-400'}`} />
                  {getStatusText(progress.percentage, progress.isWaiting)}
                </span>
                <span className={progress.colorClass.replace('bg-', 'text-')}>{progress.percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                <div
                  className={`h-full transition-all duration-1000 ${progress.colorClass} shadow-[0_0_10px_rgba(6,182,212,0.2)]`}
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[8px] font-bold text-zinc-500 uppercase tracking-tighter italic">
                <span>Estimasi Selesai:</span>
                <span className="text-zinc-400">{formatGameDate(new Date(construction.endDate))}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-zinc-400 font-bold tracking-tight">Biaya: {item.cost}</span>
              <button
                onClick={(e) => { e.stopPropagation(); onBuild(item); }}
                className="px-5 py-2 rounded-xl bg-cyan-600/10 text-cyan-500 text-xs font-black uppercase tracking-widest border border-cyan-500/30 hover:bg-cyan-600 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
              >
                Bangun
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
