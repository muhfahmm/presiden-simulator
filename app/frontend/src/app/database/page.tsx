"use client"

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle, Play, ArrowLeft, Filter, ChevronLeft, ChevronRight, Eye, EyeOff, X } from "lucide-react";
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import WorldMapCanvas from "./databasemap";
import MapHubungan from "../game/components/2_navigasi_menu/navigasi_atas/Hubungan/mapHubungan";
import { countries } from "./data/countries/region/index";
import { gameStorage } from "../game/gamestorage";
import { CountryData } from "./data/types/index";
import {
  calculateTotalInfantry, calculateInfantryPower, calculateTankPower, calculateApcPower,
  calculateArtilleryPower, calculateRocketPower, calculateSamPower, calculateTacticalPower,
  calculateCarrierPower, calculateDestroyerPower, calculateCorvettePower, calculateSubmarinePower,
  calculateRegularSubPower, calculateMineShipPower, calculateLogisticsPower, calculateStealthPower,
  calculateInterceptorPower, calculateBomberPower, calculateAttackHeliPower, calculateReconPower,
  calculateUavPower, calculateKamikazePower, calculateTransportPower,
  calculatePrisonCapacity, calculateArmoryCapacity, calculateTankHangarCapacity, calculateAcademyCapacity,
  calculateAirBaseCapacity, calculateNavalBaseCapacity,
  PRISON_POWER,
  BARRACKS_POWER,
  ARMORY_POWER,
  TANK_HANGAR_POWER,
  ACADEMY_POWER,
  COMMAND_CENTER_POWER,
  AIRBASE_POWER,
  NAVALBASE_POWER,
  SPACE_PROGRAM_POWER,
  CYBER_DEFENSE_POWER,
  NUCLEAR_SYSTEM_POWER,
  DRONE_FACTORY_POWER,
  AMMO_FACTORY_POWER,
  VEHICLE_FACTORY_POWER,
  HEAVY_WEAPON_FACTORY_POWER
} from "@/app/game/components/2_navigasi_menu/navigasi_bawah/3_pembangunan/2-produksi-militer/militaryLogic";
import { getInfraQuality } from "./data/types/2_infrastruktur";
import { getExtractionData } from "./data/types/7_ekstraksi_mineral_kritis";
import { getManufakturData, getPeternakanData, getPerikananData, getAgrikulturData } from "./data/types/3_produksi";
import {
  hitungTotalKapasitas, KAPASITAS_LISTRIK,
  hitungKonsumsiProduksi, hitungKonsumsiOlahanPangan, hitungKonsumsiFarmasi, KONSUMSI_PRODUKSI, hitungKonsumsiPangan, KONSUMSI_PANGAN,
  hitungKonsumsiPertahanan, KONSUMSI_PERTAHANAN, KONSUMSI_STRATEGIC,
  hitungKonsumsiBangunanMiliter, hitungKonsumsiPabrikMiliter,
  hitungKonsumsiSosial, KONSUMSI_SOSIAL,
  hitungKonsumsiOlahraga,
  hitungKonsumsiTransportasi, KONSUMSI_TRANSPORTASI,
  hitungKonsumsiEkstraksi, KONSUMSI_EKSTRAKSI,
  hitungTotalKonsumsiNasional
} from "./data/types/1_kelistrikan";
import {
  Sword, Anchor, Plane, ShieldCheck, Globe2, TrendingUp, Gem, Droplets, Beef, TreePine, Mountain,
  Zap, Waves, Sun, Flame, Wind, Building2, TowerControl, Ship, Radio, Home, Store, Factory, Map,
  TrainFront, Wifi, Smartphone, Droplet, Cpu, Layers, Microscope, Trophy, Gavel, Sprout, Box,
  Syringe, GraduationCap, Crosshair, RadioTower, Landmark, Fish, Construction, Pill, Car, Bike,
  Utensils, Apple, Coffee, Milk, Bird, Egg, Leaf, Shell, Bean, Carrot, Cookie, Croissant, Soup,
  HeartPulse, Search, Library, Lightbulb, Archive, ShieldAlert, Warehouse, Lock, Scale,
  Truck, Shield, Users, Coins, Globe, Church, Battery, Pickaxe, FlaskConical, Bus, Wheat
} from "lucide-react";

export default function DatabasePage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSelectionWarning, setShowSelectionWarning] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [geoTab, setGeoTab] = useState<"overview" | "orgs" | "perjanjian">("overview");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [leftWidth, setLeftWidth] = useState(360);
  const [rightWidth, setRightWidth] = useState(360);
  const [isElectricityOpen, setIsElectricityOpen] = useState(true);
  const [isInfraOpen, setIsInfraOpen] = useState(true);
  const [isEconomyOpen, setIsEconomyOpen] = useState(true);
  const [isDefenseOpen, setIsDefenseOpen] = useState(true);
  const [isSocialOpen, setIsSocialOpen] = useState(true);
  const [isOlahragaOpen, setIsOlahragaOpen] = useState(true);
  const [isGeopoliticsOpen, setIsGeopoliticsOpen] = useState(true);
  const [isMineralsOpen, setIsMineralsOpen] = useState(true);
  const [mapMode, setMapMode] = useState<"default" | "hubungan">("default");
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/world.geojson")
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Failed to load map data", err));
  }, []);

  const getGridCols = (w: number) => {
    if (w > 490) return "grid-cols-4";
    if (w > 420) return "grid-cols-3";
    return "grid-cols-2";
  };

  const startResizeLeft = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = leftWidth;
    const onMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(340, Math.min(600, startWidth + (e.clientX - startX)));
      setLeftWidth(newWidth);
    };
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const startResizeRight = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = rightWidth;
    const onMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(340, Math.min(600, startWidth - (e.clientX - startX)));
      setRightWidth(newWidth);
    };
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    // Check for active session
    if (gameStorage.hasActiveSession()) {
      router.push("/game");
      return;
    }
  }, []);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (selectedCountry && buttonRefs.current[selectedCountry]) {
      buttonRefs.current[selectedCountry]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [selectedCountry]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = 81; // 65px button width + 16px gap-4
      const scrollAmount = itemWidth * 10;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const selectedData = countries.find(c => c.name_en === selectedCountry);
  const baseData = (selectedData || countries[0]) as CountryData;
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const isInternalSelection = useRef(false);
  const hasSelection = !!selectedData;

  // Modernized Dynamic Data Merging
  const extractionData = getExtractionData(selectedCountry);
  const infraData = getInfraQuality(selectedCountry);
  const manufData = getManufakturData(selectedCountry);
  const peternakanData = getPeternakanData(selectedCountry);
  const perikananData = getPerikananData(selectedCountry);
  const agriData = getAgrikulturData(selectedCountry);
  
  const currentData: CountryData = {
    ...baseData,
    sektor_ekstraksi: {
      ...extractionData,
      ...baseData.sektor_ekstraksi
    },
    sektor_manufaktur: {
      ...manufData,
      ...baseData.sektor_manufaktur
    },
    sektor_olahan_pangan: {
      ...manufData,
      ...baseData.sektor_olahan_pangan
    },
    sektor_farmasi: {
      ...manufData,
      ...baseData.sektor_farmasi
    },
    sektor_peternakan: {
      ...peternakanData,
      ...baseData.sektor_peternakan
    },
    sektor_perikanan: {
      ...perikananData,
      ...baseData.sektor_perikanan
    },
    sektor_agrikultur: {
      ...agriData,
      ...baseData.sektor_agrikultur
    }
  };

  const filteredCountries = countries.filter(c =>
    c.name_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.capital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // AUTO-FOCUS ON SELECTED COUNTRY
  useEffect(() => {
    if (selectedCountry && transformRef.current && isInternalSelection.current) {
      isInternalSelection.current = false; // Reset
      const country = countries.find(c => c.name_en === selectedCountry);
      if (country) {
        const mapWidth = 4000;
        const mapHeight = 2000;
        const scale = 4; // Higher zoom for focus level

        // Equirectangular Projection Math (matching WorldMapCanvas)
        const x = ((country.lon + 180) / 360) * mapWidth;
        const y = ((90 - country.lat) / 180) * mapHeight;

        // We focus on the middle segment (offset 4000)
        const centerX = x + mapWidth;
        const centerY = y;

        const wrapper = transformRef.current.instance.wrapperComponent;
        const content = transformRef.current.instance.contentComponent;
        if (wrapper && content) {
          const { offsetWidth: wrapperWidth, offsetHeight: wrapperHeight } = wrapper;
          const { offsetWidth: contentWidth, offsetHeight: contentHeight } = content;

          // Map canvas-space coordinates to DOM-space coordinates
          const px = (centerX / (mapWidth * 3)) * contentWidth;
          const py = (centerY / mapHeight) * contentHeight;

          const targetX = wrapperWidth / 2 - px * scale;
          const targetY = wrapperHeight / 2 - py * scale;

          transformRef.current.setTransform(targetX, targetY, scale, 1200, "easeOut");
        }
      }
    }
  }, [selectedCountry]);

  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-950 text-white font-sans relative overflow-hidden select-none">

      {/* 1. TOP STATS BAR */}
      <header className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-6 py-2 flex items-center justify-between z-20 text-xs text-zinc-300">
        <div className="flex items-center gap-6">
          <button className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer">
            <HelpCircle className="h-3.5 w-3.5 text-teal-400" />
          </button>

          <div className="flex items-center gap-4">
            <StatItem label="Ibukota" value={hasSelection ? currentData.capital : "-"} icon={<Landmark size={14} className="text-amber-400" />} />
            <StatItem label="Populasi" value={hasSelection ? currentData.jumlah_penduduk : "-"} icon={<Users size={14} className="text-blue-400" />} />
            <StatItem label="Kas Negara" value={hasSelection ? currentData.anggaran : "-"} icon={<Coins size={14} className="text-yellow-400" />} />
            <StatItem label="Total Negara" value={`${countries.length}`} icon={<Globe size={14} className="text-teal-400" />} />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <StatItem label="Agama Mayoritas" value={hasSelection ? currentData.religion : "-"} icon={<Church size={14} className="text-purple-400" />} />
          <StatItem label="Ideologi" value={hasSelection ? currentData.ideology : "-"} icon={<Scale size={14} className="text-orange-400" />} />

          <div className="h-4 w-px bg-zinc-800" />

          <div className="flex items-center gap-2">
            <Globe2 size={12} className="text-blue-400" />
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Suara PBB</span>
            <span className={`text-xs font-black px-1.5 py-0.5 rounded ${!hasSelection ? 'bg-zinc-800 text-zinc-600' :
                currentData.un_vote === 'Pro' ? 'bg-emerald-500/20 text-emerald-400' :
                  currentData.un_vote === 'Kontra' ? 'bg-red-500/20 text-red-400' :
                    'bg-zinc-700/50 text-zinc-300'
              }`}>
              {hasSelection ? currentData.un_vote : "-"}
            </span>
          </div>
        </div>

        {/* Selected Country Flag Overlay */}
        <div className="flex items-center gap-2 bg-zinc-800/80 px-4 py-1.5 rounded-lg border border-zinc-700">
          <span className="text-xl">{hasSelection ? currentData.flag : "ðŸŒ"}</span>
          <span className="text-xs font-bold text-zinc-100 uppercase tracking-wide">{hasSelection ? currentData.name_id : "Pilih Negara"}</span>
        </div>
      </header>

      {/* 2. MAIN MAP DISPLAY area with Zoom/Pan */}
      <main className="flex-1 relative w-full h-full z-10 overflow-hidden">
        <TransformWrapper
          ref={transformRef}
          initialScale={1}
          minScale={1}
          maxScale={8}
          centerOnInit={!isCentered}
          onInit={() => setIsCentered(true)}
          limitToBounds={true}
          doubleClick={{ disabled: true }}
        >
          <TransformComponent wrapperClass="!w-full !h-full" contentClass="!h-full flex items-center justify-center">
            <div ref={containerRef} className="relative h-full flex items-center justify-center w-max">
              {mapMode === "default" ? (
                <WorldMapCanvas selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
              ) : (
                <MapHubungan
                  userCountry={selectedCountry}
                  targetCountry={null}
                  geoData={geoData}
                  onSelect={setSelectedCountry}
                />
              )}
            </div>
          </TransformComponent>
        </TransformWrapper>

        {/* Ambient Darkened Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

        {/* --- LEFT SIDE PANELS --- */}
        <div className={`absolute top-4 left-4 flex flex-col gap-4 z-20 pointer-events-none max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pb-10 px-1 transition-all duration-[900ms] ease-in-out ${selectedCountry ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40 pointer-events-none"}`}>

          {/* 1. Kelistrikan */}
          <div style={{ width: `${leftWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel mb-4">
            <div onMouseDown={startResizeLeft} className="absolute inset-y-0 -right-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>1. Kelistrikan (6 Jenis)</span>
              <button onClick={() => setIsElectricityOpen(!isElectricityOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isElectricityOpen ? <Eye size={12} className="text-amber-500" /> : <EyeOff size={12} className="text-zinc-500" />}
              </button>
            </h3>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isElectricityOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar pr-1">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1"><Zap size={8} /> Jaringan Energi</span>
                    {hasSelection && (
                      <span className={`text-[10px] font-black uppercase tracking-tighter ${
                        (hitungTotalKapasitas(currentData.sektor_listrik) - hitungTotalKonsumsiNasional(currentData)) >= 0 
                        ? 'text-emerald-500/80' : 'text-red-500/80'
                      }`}>
                        {(hitungTotalKapasitas(currentData.sektor_listrik) - hitungTotalKonsumsiNasional(currentData)) >= 0 ? 'Surplus' : 'Defisit'}: {Math.abs(hitungTotalKapasitas(currentData.sektor_listrik) - hitungTotalKonsumsiNasional(currentData)).toLocaleString('id-ID')} MW
                      </span>
                    )}
                  </div>
                  {(() => {
                    const prod = hitungTotalKapasitas(currentData.sektor_listrik);
                    const cons = hitungTotalKonsumsiNasional(currentData);
                    const loadFactor = prod > 0 ? Math.min(100, Math.floor((cons / prod) * 100)) : (cons > 0 ? 100 : 0);
                    const gridColor = loadFactor <= 50 ? "bg-emerald-500" : (loadFactor <= 75 ? "bg-yellow-400" : "bg-red-500");
                    return <ProgressStat label="Power Grid (Beban)" value={loadFactor} color={gridColor} icon={<Zap size={10} />} />;
                  })()}
                  <div className="flex flex-col gap-2 mt-1.5">
                    <div className="flex items-center justify-between text-[11px] font-black bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20 shadow-inner">
                      <span className="text-emerald-400 flex items-center gap-1.5"><Zap size={12} /> 1. Produksi Listrik</span>
                      <span className="text-emerald-400 text-sm">
                        {hitungTotalKapasitas(currentData.sektor_listrik).toLocaleString('id-ID')} MW
                        <span className="text-emerald-500/60 text-[10px] font-bold font-sans ml-1">({currentData.sektor_listrik.pembangkit_listrik_tenaga_nuklir + currentData.sektor_listrik.pembangkit_listrik_tenaga_air + currentData.sektor_listrik.pembangkit_listrik_tenaga_surya + currentData.sektor_listrik.pembangkit_listrik_tenaga_uap + currentData.sektor_listrik.pembangkit_listrik_tenaga_gas + currentData.sektor_listrik.pembangkit_listrik_tenaga_angin} Unit)</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-black bg-amber-500/10 p-2 rounded-xl border border-amber-500/20 shadow-inner">
                      <span className="text-amber-400 flex items-center gap-1.5"><Zap size={12} /> 2. Pengeluaran Listrik</span>
                      <span className="text-amber-400 text-sm">
                        {hitungTotalKonsumsiNasional(currentData).toLocaleString('id-ID')} MW
                      </span>
                    </div>
                  </div>
                  <div className={`grid ${getGridCols(leftWidth)} gap-x-3 gap-y-2 mt-2`}>
                    <DetailStat icon={<Radio size={12} className="text-cyan-400" />} label="PLTN" value={`${currentData.sektor_listrik.pembangkit_listrik_tenaga_nuklir} (${(currentData.sektor_listrik.pembangkit_listrik_tenaga_nuklir * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Waves size={12} className="text-blue-400" />} label="PLTA" value={`${currentData.sektor_listrik.pembangkit_listrik_tenaga_air} (${(currentData.sektor_listrik.pembangkit_listrik_tenaga_air * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_air).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Sun size={12} className="text-yellow-400" />} label="PLTS" value={`${currentData.sektor_listrik.pembangkit_listrik_tenaga_surya} (${(currentData.sektor_listrik.pembangkit_listrik_tenaga_surya * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_surya).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Flame size={12} className="text-orange-400" />} label="PLTU" value={`${currentData.sektor_listrik.pembangkit_listrik_tenaga_uap} (${(currentData.sektor_listrik.pembangkit_listrik_tenaga_uap * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_uap).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Flame size={12} className="text-red-400" />} label="PLTG" value={`${currentData.sektor_listrik.pembangkit_listrik_tenaga_gas} (${(currentData.sektor_listrik.pembangkit_listrik_tenaga_gas * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_gas).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Wind size={12} className="text-emerald-400" />} label="PLTB" value={`${currentData.sektor_listrik.pembangkit_listrik_tenaga_angin} (${(currentData.sektor_listrik.pembangkit_listrik_tenaga_angin * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_angin).toLocaleString('id-ID')} MW)`} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Infrastruktur & Logistik */}
          <div style={{ width: `${leftWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel mb-4">
            <div onMouseDown={startResizeLeft} className="absolute inset-y-0 -right-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-cyan-400 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>2. Infrastruktur & Logistik (8 Jenis)</span>
              <button onClick={() => setIsInfraOpen(!isInfraOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isInfraOpen ? <Eye size={12} className="text-cyan-400" /> : <EyeOff size={12} className="text-zinc-500" />}
              </button>
            </h3>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isInfraOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar pr-1">
                <div className="flex items-center justify-between text-xs font-black bg-zinc-800/50 p-2 rounded-xl border border-zinc-700/30 mt-1 shadow-inner mb-1">
                  <span className="text-zinc-400 flex items-center gap-1"><Zap size={10} className="text-amber-500" /> Beban Listrik</span>
                  <span className="text-amber-500 text-sm">
                    {hitungKonsumsiTransportasi(currentData.infrastruktur).toLocaleString('id-ID')} MW
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1"><Ship size={8} /> Transportasi & Digital</span>
                  <div className="space-y-2">
                    {(() => {
                      const quality = getInfraQuality(selectedCountry);
                      const roadColor = quality.kualitas_jalan <= 50 ? "bg-red-500" : (quality.kualitas_jalan <= 75 ? "bg-yellow-400" : "bg-emerald-500");
                      const internetColor = quality.cakupan_internet <= 50 ? "bg-red-500" : (quality.cakupan_internet <= 75 ? "bg-yellow-400" : "bg-emerald-500");
                      return (
                        <>
                          <ProgressStat label="Kualitas Jalan" value={quality.kualitas_jalan} color={roadColor} icon={<Map size={10} />} />
                          <ProgressStat label="Cakupan Internet" value={quality.cakupan_internet} color={internetColor} icon={<Wifi size={10} />} />
                        </>
                      );
                    })()}
                  </div>
                  <div className={`grid ${getGridCols(leftWidth)} gap-3 mt-1`}>
                    <DetailStat icon={<Bike size={12} className="text-emerald-400" />} label="Jalur Sepeda" value={`${currentData.infrastruktur.jalur_sepeda ?? 0} (${((currentData.infrastruktur.jalur_sepeda ?? 0) * KONSUMSI_TRANSPORTASI.jalur_sepeda).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<TrainFront size={12} className="text-blue-500" />} label="Kereta Bawah Tanah" value={`${currentData.infrastruktur.kereta_bawah_tanah ?? 0} (${((currentData.infrastruktur.kereta_bawah_tanah ?? 0) * KONSUMSI_TRANSPORTASI.kereta_bawah_tanah).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<TrainFront size={12} className="text-zinc-400" />} label="Kereta Api" value={`${currentData.infrastruktur.jalur_kereta ?? 0} (${((currentData.infrastruktur.jalur_kereta ?? 0) * KONSUMSI_TRANSPORTASI.jalur_kereta).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Map size={12} className="text-zinc-300" />} label="Jalan Tol" value={`${currentData.infrastruktur.jalan_tol ?? 0} (${((currentData.infrastruktur.jalan_tol ?? 0) * KONSUMSI_TRANSPORTASI.jalan_tol).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Ship size={12} className="text-blue-400" />} label="Pelabuhan" value={`${currentData.infrastruktur.pelabuhan_laut} (${(currentData.infrastruktur.pelabuhan_laut * KONSUMSI_TRANSPORTASI.pelabuhan_laut).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Plane size={12} className="text-cyan-400" />} label="Bandara" value={`${currentData.infrastruktur.bandara} (${(currentData.infrastruktur.bandara * KONSUMSI_TRANSPORTASI.bandara).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Bus size={12} className="text-amber-400" />} label="Terminal Bus" value={`${currentData.infrastruktur.terminal_bus ?? 0} (${((currentData.infrastruktur.terminal_bus ?? 0) * KONSUMSI_TRANSPORTASI.terminal_bus).toLocaleString('id-ID')} MW)`} />
                    <DetailStat icon={<Plane size={12} className="text-pink-400" />} label="Helipad" value={`${currentData.infrastruktur.helipad ?? 0} (${((currentData.infrastruktur.helipad ?? 0) * KONSUMSI_TRANSPORTASI.helipad).toLocaleString('id-ID')} MW)`} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Mineral Kritis & Strategis */}
          <div style={{ width: `${leftWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel mb-4">
            <div onMouseDown={startResizeLeft} className="absolute inset-y-0 -right-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-pink-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>3. Mineral Kritis & Strategis (12 Jenis)</span>
              <button onClick={() => setIsMineralsOpen(!isMineralsOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isMineralsOpen ? <Eye size={12} className="text-pink-500" /> : <EyeOff size={12} className="text-zinc-500" />}
              </button>
            </h3>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isMineralsOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">
                <div className="flex items-center justify-between text-xs font-black bg-zinc-800/50 p-2 rounded-xl border border-zinc-700/30 mt-1 shadow-inner mb-1">
                  <span className="text-zinc-400 flex items-center gap-1"><Zap size={10} className="text-amber-500" /> Beban Listrik</span>
                  <span className="text-amber-500 text-sm">
                    {hitungKonsumsiEkstraksi(currentData.sektor_ekstraksi).toLocaleString('id-ID')} MW
                  </span>
                </div>
                <div className={`grid ${getGridCols(leftWidth)} gap-2`}>
                  <SectorStat icon={<Gem size={10} className="text-yellow-400" />} label="Emas" value={`${currentData.sektor_ekstraksi.emas} (${((currentData.sektor_ekstraksi.emas ?? 0) * KONSUMSI_EKSTRAKSI.emas).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Radio size={10} className="text-emerald-400" />} label="Uranium" value={`${currentData.sektor_ekstraksi.uranium} (${((currentData.sektor_ekstraksi.uranium ?? 0) * KONSUMSI_EKSTRAKSI.uranium).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Layers size={10} className="text-zinc-400" />} label="Batubara" value={`${currentData.sektor_ekstraksi.batu_bara} (${((currentData.sektor_ekstraksi.batu_bara ?? 0) * KONSUMSI_EKSTRAKSI.batu_bara).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Droplets size={10} className="text-blue-400" />} label="Minyak" value={`${currentData.sektor_ekstraksi.minyak_bumi} (${((currentData.sektor_ekstraksi.minyak_bumi ?? 0) * KONSUMSI_EKSTRAKSI.minyak_bumi).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Flame size={10} className="text-orange-400" />} label="Gas" value={`${currentData.sektor_ekstraksi.gas_alam} (${((currentData.sektor_ekstraksi.gas_alam ?? 0) * KONSUMSI_EKSTRAKSI.gas_alam).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Waves size={10} className="text-blue-200" />} label="Garam" value={`${currentData.sektor_ekstraksi.garam} (${((currentData.sektor_ekstraksi.garam ?? 0) * KONSUMSI_EKSTRAKSI.garam).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Box size={10} className="text-orange-400" />} label="Nikel" value={`${currentData.sektor_ekstraksi.nikel} (${((currentData.sektor_ekstraksi.nikel ?? 0) * KONSUMSI_EKSTRAKSI.nikel).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Battery size={10} className="text-cyan-400" />} label="Litium" value={`${currentData.sektor_ekstraksi.litium} (${((currentData.sektor_ekstraksi.litium ?? 0) * KONSUMSI_EKSTRAKSI.litium).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Pickaxe size={10} className="text-orange-300" />} label="Tembaga" value={`${currentData.sektor_ekstraksi.tembaga} (${((currentData.sektor_ekstraksi.tembaga ?? 0) * KONSUMSI_EKSTRAKSI.tembaga).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Layers size={10} className="text-blue-200" />} label="Alumunium" value={`${currentData.sektor_ekstraksi.aluminium} (${((currentData.sektor_ekstraksi.aluminium ?? 0) * KONSUMSI_EKSTRAKSI.aluminium).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Cpu size={10} className="text-purple-400" />} label="Tanah Jarang" value={`${currentData.sektor_ekstraksi.logam_tanah_jarang} (${((currentData.sektor_ekstraksi.logam_tanah_jarang ?? 0) * KONSUMSI_EKSTRAKSI.logam_tanah_jarang).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Mountain size={10} className="text-zinc-500" />} label="Bijih Besi" value={`${currentData.sektor_ekstraksi.bijih_besi} (${((currentData.sektor_ekstraksi.bijih_besi ?? 0) * KONSUMSI_EKSTRAKSI.bijih_besi).toLocaleString('id-ID')} MW)`} />
                </div>
              </div>
            </div>
          </div>

          {/* 4. Sektor Produksi & Ekonomi Detailed */}
          <div style={{ width: `${leftWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeLeft} className="absolute inset-y-0 -right-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>4. Produksi & Ekonomi Nasional (25 Jenis)</span>
              <button onClick={() => setIsEconomyOpen(!isEconomyOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isEconomyOpen ? <Eye size={12} className="text-emerald-500" /> : <EyeOff size={12} className="text-zinc-500" />}
              </button>
            </h3>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isEconomyOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">
                <div className="flex items-center justify-between text-xs font-black bg-zinc-800/50 p-2 rounded-xl border border-zinc-700/30 mt-1 shadow-inner">
                  <span className="text-zinc-400 flex items-center gap-1"><Zap size={10} className="text-amber-500" /> Beban Listrik</span>
                  <span className="text-amber-500 text-sm">
                    {(hitungKonsumsiProduksi(currentData.sektor_manufaktur) + hitungKonsumsiOlahanPangan(currentData.sektor_olahan_pangan) + hitungKonsumsiFarmasi(currentData.sektor_farmasi) + hitungKonsumsiPangan(currentData.sektor_peternakan, currentData.sektor_agrikultur)).toLocaleString('id-ID')} MW
                    <span className="text-zinc-500 text-xs font-bold font-sans ml-1">({currentData.sektor_manufaktur.semikonduktor + currentData.sektor_manufaktur.mobil + currentData.sektor_manufaktur.sepeda_motor + currentData.sektor_manufaktur.smelter + currentData.sektor_manufaktur.semen_beton + currentData.sektor_manufaktur.kayu + currentData.sektor_olahan_pangan.air_mineral + currentData.sektor_olahan_pangan.gula + currentData.sektor_olahan_pangan.roti + currentData.sektor_farmasi.farmasi + currentData.sektor_olahan_pangan.pengolahan_daging + currentData.sektor_olahan_pangan.mie_instan} Unit)</span>
                  </span>
                </div>
                {/* Manufacturing */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Factory size={10} /> Manufaktur & Industri (13)</span>
                  </div>
                  <div className={`grid ${getGridCols(leftWidth)} gap-2 mt-1`}>
                    <SectorStat icon={<Cpu size={10} className="text-purple-400" />} label="Pabrik Semikonduktor" value={`${currentData.sektor_manufaktur.semikonduktor} (${(currentData.sektor_manufaktur.semikonduktor * KONSUMSI_PRODUKSI.semikonduktor).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Car size={10} className="text-zinc-300" />} label="Pabrik Mobil" value={`${currentData.sektor_manufaktur.mobil} (${(currentData.sektor_manufaktur.mobil * KONSUMSI_PRODUKSI.mobil).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Bike size={10} className="text-zinc-300" />} label="Pabrik Motor" value={`${currentData.sektor_manufaktur.sepeda_motor} (${(currentData.sektor_manufaktur.sepeda_motor * KONSUMSI_PRODUKSI.sepeda_motor).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Flame size={10} className="text-red-400" />} label="Pengolahan Smelter" value={`${currentData.sektor_manufaktur.smelter} (${(currentData.sektor_manufaktur.smelter * KONSUMSI_PRODUKSI.smelter).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Construction size={10} className="text-zinc-400" />} label="Pabrik Beton & Semen" value={`${currentData.sektor_manufaktur.semen_beton} (${(currentData.sektor_manufaktur.semen_beton * KONSUMSI_PRODUKSI.semen_beton).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<TreePine size={10} className="text-emerald-600" />} label="Pabrik Kayu" value={`${currentData.sektor_manufaktur.kayu} (${(currentData.sektor_manufaktur.kayu * KONSUMSI_PRODUKSI.kayu).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Droplet size={10} className="text-blue-400" />} label="Pabrik Air Mineral" value={`${currentData.sektor_olahan_pangan.air_mineral} (${(currentData.sektor_olahan_pangan.air_mineral * KONSUMSI_PRODUKSI.air_mineral).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Cookie size={10} className="text-yellow-600" />} label="Pabrik Gula" value={`${currentData.sektor_olahan_pangan.gula} (${(currentData.sektor_olahan_pangan.gula * KONSUMSI_PRODUKSI.gula).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Croissant size={10} className="text-amber-400" />} label="Pabrik Roti" value={`${currentData.sektor_olahan_pangan.roti} (${(currentData.sektor_olahan_pangan.roti * KONSUMSI_PRODUKSI.roti).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Pill size={10} className="text-pink-400" />} label="Pabrik Farmasi" value={`${currentData.sektor_farmasi.farmasi} (${(currentData.sektor_farmasi.farmasi * KONSUMSI_PRODUKSI.farmasi).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Beef size={10} className="text-red-400" />} label="Pengolahan Daging" value={`${currentData.sektor_olahan_pangan.pengolahan_daging} (${(currentData.sektor_olahan_pangan.pengolahan_daging * KONSUMSI_PRODUKSI.pengolahan_daging).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Soup size={10} className="text-orange-400" />} label="Pabrik Mie Instan" value={`${currentData.sektor_olahan_pangan.mie_instan} (${(currentData.sektor_olahan_pangan.mie_instan * KONSUMSI_PRODUKSI.mie_instan).toLocaleString('id-ID')} MW)`} />
                  </div>
                </div>

                <div className="h-px bg-zinc-800/50" />

                {/* Peternakan */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Beef size={10} /> Peternakan (4)</span>
                  </div>

                  <div className={`grid ${getGridCols(leftWidth)} gap-2 mt-1`}>
                    <SectorStat icon={<Bird size={10} className="text-amber-500" />} label="Ayam/Unggas" value={`${currentData.sektor_peternakan.ayam_unggas} (${(currentData.sektor_peternakan.ayam_unggas * KONSUMSI_PANGAN.ayam_unggas).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Milk size={10} className="text-zinc-200" />} label="Sapi Perah" value={`${currentData.sektor_peternakan.sapi_perah} (${(currentData.sektor_peternakan.sapi_perah * KONSUMSI_PANGAN.sapi_perah).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Beef size={10} className="text-red-500" />} label="Sapi Potong" value={`${currentData.sektor_peternakan.sapi_potong} (${(currentData.sektor_peternakan.sapi_potong * KONSUMSI_PANGAN.sapi_potong).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Leaf size={10} className="text-emerald-300" />} label="Domba/Kambing" value={`${currentData.sektor_peternakan.domba_kambing} (${(currentData.sektor_peternakan.domba_kambing * KONSUMSI_PANGAN.domba_kambing).toLocaleString('id-ID')} MW)`} />
                  </div>
                </div>

                <div className="h-px bg-zinc-800/50" />

                {/* Perikanan */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Fish size={10} /> Perikanan & Kelautan (2)</span>
                  </div>

                  <div className={`grid ${getGridCols(leftWidth)} gap-2 mt-1`}>
                    <SectorStat icon={<Shell size={10} className="text-pink-300" />} label="Udang/Kerang" value={`${currentData.sektor_perikanan.udang_kerang} (${(currentData.sektor_perikanan.udang_kerang * KONSUMSI_PANGAN.udang_kerang).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Fish size={10} className="text-blue-400" />} label="Ikan" value={`${currentData.sektor_perikanan.ikan} (${(currentData.sektor_perikanan.ikan * KONSUMSI_PANGAN.ikan).toLocaleString('id-ID')} MW)`} />
                  </div>
                </div>

                <div className="h-px bg-zinc-800/50" />

                {/* Agrikultur & Pertanian */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Wheat size={10} /> Agrikultur & Pertanian (6)</span>
                  </div>

                  <div className={`grid ${getGridCols(leftWidth)} gap-2 mt-1`}>
                    <SectorStat icon={<Sprout size={10} className="text-green-500" />} label="Padi" value={`${currentData.sektor_agrikultur.padi} (${(currentData.sektor_agrikultur.padi * KONSUMSI_PANGAN.padi).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Utensils size={10} className="text-amber-600" />} label="Gandum/Jagung" value={`${currentData.sektor_agrikultur.gandum_jagung} (${(currentData.sektor_agrikultur.gandum_jagung * KONSUMSI_PANGAN.gandum_jagung).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Apple size={10} className="text-red-500" />} label="Sayur/Umbi" value={`${currentData.sektor_agrikultur.sayur_umbi} (${(currentData.sektor_agrikultur.sayur_umbi * KONSUMSI_PANGAN.sayur_umbi).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Bean size={10} className="text-emerald-700" />} label="Kedelai" value={`${currentData.sektor_agrikultur.kedelai} (${(currentData.sektor_agrikultur.kedelai * KONSUMSI_PANGAN.kedelai).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Droplet size={10} className="text-amber-500" />} label="Kelapa Sawit" value={`${currentData.sektor_agrikultur.kelapa_sawit} (${(currentData.sektor_agrikultur.kelapa_sawit * KONSUMSI_PANGAN.kelapa_sawit).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Coffee size={10} className="text-amber-900" />} label="Kopi/Teh/Kakao" value={`${currentData.sektor_agrikultur.kopi_teh_kakao} (${(currentData.sektor_agrikultur.kopi_teh_kakao * KONSUMSI_PANGAN.kopi_teh_kakao).toLocaleString('id-ID')} MW)`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- RIGHT SIDE PANELS --- */}
        <div className={`absolute top-4 right-4 flex flex-col gap-3 z-20 pointer-events-none max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pr-1 pb-10 transition-all duration-[900ms] ease-in-out ${selectedCountry ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40 pointer-events-none"}`}>

          {/* 5. Pertahanan & Militer Strategis Detailed */}
          <div style={{ width: `${rightWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeRight} className="absolute inset-y-0 -left-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-red-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>5. Pertahanan & Strategis (35 Jenis)</span>
              <button onClick={() => setIsDefenseOpen(!isDefenseOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isDefenseOpen ? <Eye size={12} className="text-red-500" /> : <EyeOff size={12} className="text-zinc-500" />}
              </button>
            </h3>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isDefenseOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">
                <div className="flex items-center justify-between text-xs font-black bg-zinc-800/50 p-2 rounded-xl border border-zinc-700/30 mt-1 shadow-inner">
                  <span className="text-zinc-400 flex items-center gap-1"><Zap size={10} className="text-amber-500" /> Beban Listrik</span>
                  <span className="text-amber-500 text-sm">
                    {hitungKonsumsiPertahanan(currentData.sektor_pertahanan, currentData.armada_militer, currentData.militer_strategis, currentData.armada_kepolisian, currentData.pabrik_militer).toLocaleString('id-ID')} MW
                    <span className="text-zinc-500 text-xs font-bold font-sans ml-1">({currentData.sektor_pertahanan.penjara + currentData.armada_militer.barak + currentData.sektor_pertahanan.gudang_senjata + currentData.sektor_pertahanan.hangar_tank + currentData.sektor_pertahanan.akademi_militer} Unit)</span>
                  </span>
                </div>
                {/* Management & Strategic Infrastructure */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><ShieldCheck size={10} /> Sektor Manajemen & Strategis (11)</span>
                    <span className="text-[10px] font-bold text-amber-500/80 flex items-center gap-1">
                      <Zap size={10} /> {hitungKonsumsiBangunanMiliter(currentData.sektor_pertahanan, currentData.armada_militer.barak, currentData.militer_strategis.status_nuklir ?? false).toLocaleString('id-ID')} MW
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    {/* 1. Penjara */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Penjara</span>
                        <span className="text-[8px] text-zinc-400 font-bold leading-none">{calculatePrisonCapacity(currentData.sektor_pertahanan.penjara).toLocaleString('id-ID')} Slot</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.sektor_pertahanan.penjara} <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.sektor_pertahanan.penjara * PRISON_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 2. Gudang Senjata */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Gudang Senjata</span>
                        <span className="text-[8px] text-zinc-400 font-bold leading-none">{calculateArmoryCapacity(currentData.sektor_pertahanan.gudang_senjata).toLocaleString('id-ID')} Unit</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.sektor_pertahanan.gudang_senjata} <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.sektor_pertahanan.gudang_senjata * ARMORY_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 3. Hangar Tank */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Hangar Tank</span>
                        <span className="text-[8px] text-zinc-400 font-bold leading-none">{calculateTankHangarCapacity(currentData.sektor_pertahanan.hangar_tank).toLocaleString('id-ID')} Unit</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.sektor_pertahanan.hangar_tank} <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.sektor_pertahanan.hangar_tank * TANK_HANGAR_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 4. Akademi Militer */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Akademi Militer</span>
                        <span className="text-[8px] text-zinc-400 font-bold leading-none">{calculateAcademyCapacity(currentData.sektor_pertahanan.akademi_militer).toLocaleString('id-ID')} Slot</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.sektor_pertahanan.akademi_militer} <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.sektor_pertahanan.akademi_militer * ACADEMY_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 5. Pusat Komando */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pusat Komando</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.sektor_pertahanan.pusat_komando} <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.sektor_pertahanan.pusat_komando * COMMAND_CENTER_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 6. Pangkalan Udara */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pangkalan Udara</span>
                        <span className="text-[8px] text-zinc-400 font-bold leading-none">{calculateAirBaseCapacity(currentData.sektor_pertahanan.pangkalan_udara).toLocaleString('id-ID')} Slot</span>
                      </div>
                      <span className="text-xs font-black text-cyan-400 leading-none">
                        {currentData.sektor_pertahanan.pangkalan_udara} <span className="text-[10px] font-black text-cyan-400/80 ml-1">({(currentData.sektor_pertahanan.pangkalan_udara * AIRBASE_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 7. Pangkalan Laut */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pangkalan Laut</span>
                        <span className="text-[8px] text-zinc-400 font-bold leading-none">{calculateNavalBaseCapacity(currentData.sektor_pertahanan.pangkalan_laut).toLocaleString('id-ID')} Slot</span>
                      </div>
                      <span className="text-xs font-black text-blue-400 leading-none">
                        {currentData.sektor_pertahanan.pangkalan_laut} <span className="text-[10px] font-black text-blue-400/80 ml-1">({(currentData.sektor_pertahanan.pangkalan_laut * NAVALBASE_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 8. Program Luar Angkasa */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Program Antariksa</span>
                      </div>
                      <span className="text-xs font-black text-purple-400 leading-none">
                        {currentData.sektor_pertahanan.program_luar_angkasa} <span className="text-[10px] font-black text-purple-400/80 ml-1">({(currentData.sektor_pertahanan.program_luar_angkasa * SPACE_PROGRAM_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 9. Pertahanan Siber */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pertahanan Siber</span>
                        <span className="text-[8px] text-indigo-400 font-bold leading-none">LEVEL {Math.floor(currentData.sektor_pertahanan.pertahanan_siber / 10)}</span>
                      </div>
                      <span className="text-xs font-black text-indigo-400 leading-none">
                        {currentData.sektor_pertahanan.pertahanan_siber}% Power <span className="text-[10px] font-black text-indigo-400/80 ml-1">({((currentData.sektor_pertahanan.pertahanan_siber / 100) * CYBER_DEFENSE_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 10. Barak (Logic required for infantry) */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Barak Militer</span>
                        <span className="text-[8px] text-zinc-400 font-bold leading-none">{calculateTotalInfantry(currentData.armada_militer.barak).toLocaleString('id-ID')} Militer</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.armada_militer.barak} <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.armada_militer.barak * BARRACKS_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 11. Status Nuklir */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20 cursor-help" title="Status Senjata Pemusnah Massal">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Sistem Nuklir</span>
                      </div>
                      <span className={`text-[10px] font-black leading-none ${currentData.militer_strategis.status_nuklir ? "text-red-500" : "text-zinc-500"}`}>
                        {currentData.militer_strategis.status_nuklir ? "SIAGA / AKTIF" : "MATI / TIDAK ADA"} <span className={`text-[10px] font-black ml-1 ${currentData.militer_strategis.status_nuklir ? "text-red-400/80" : "text-zinc-500"}`}>({(currentData.militer_strategis.status_nuklir ? NUCLEAR_SYSTEM_POWER : 0).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-zinc-800/50" />

                {/* Military Production Assets */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Zap size={10} /> Sektor Produksi Militer (4)</span>
                    <span className="text-[10px] font-bold text-amber-500/80 flex items-center gap-1">
                      <Zap size={10} /> {hitungKonsumsiPabrikMiliter(currentData.pabrik_militer).toLocaleString('id-ID')} MW
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    {/* 1. Pabrik Drone Kamikaze */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pabrik Drone Kamikaze</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.pabrik_militer.pabrik_drone_kamikaze} Pabrik <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.pabrik_militer.pabrik_drone_kamikaze * DRONE_FACTORY_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 2. Pabrik Amunisi */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pabrik Amunisi</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.pabrik_militer.pabrik_amunisi} Kompleks <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.pabrik_militer.pabrik_amunisi * AMMO_FACTORY_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 3. Pabrik Kendaraan Tempur */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pabrik Kendaraan</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.pabrik_militer.pabrik_kendaraan_tempur} Unit <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.pabrik_militer.pabrik_kendaraan_tempur * VEHICLE_FACTORY_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                    {/* 4. Pabrik Senjata Berat */}
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pabrik Senjata Berat</span>
                      </div>
                      <span className="text-xs font-black text-white leading-none">
                        {currentData.pabrik_militer.pabrik_senjata_berat} Kompleks <span className="text-[10px] font-black text-zinc-200 ml-1">({(currentData.pabrik_militer.pabrik_senjata_berat * HEAVY_WEAPON_FACTORY_POWER).toLocaleString('id-ID')} MW)</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-zinc-800/50" />

                {/* Military Fleet */}
                <div className="flex flex-col gap-4">
                  
                  {/* Special Forces & Reserves */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Users size={12} className="text-zinc-500" /> Personel Spesialis & Cadangan
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none mb-1">Pasukan Khusus</span>
                        <span className="text-xs font-black text-white leading-none">{(currentData.armada_militer.personel.pasukan_khusus / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none mb-1">Pasukan Cadangan</span>
                        <span className="text-xs font-black text-white leading-none">{(currentData.armada_militer.personel.pasukan_cadangan / 1000).toFixed(1)}K</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-800/30" />

                  {/* Armada Darat */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Truck size={12} className="text-zinc-500" /> Armada Darat (7 Jenis)
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {/* Infanteri - Baru dipindah kesini */}
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Infanteri</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateInfantryPower(currentData.armada_militer.barak).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{(currentData.armada_militer.barak * 10000 / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Tank Baja</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateTankPower(currentData.armada_militer.darat.tank_tempur_utama).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.darat.tank_tempur_utama}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">APC / IFV</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateApcPower(currentData.armada_militer.darat.apc_ifv).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.darat.apc_ifv}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Artileri</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateArtilleryPower(currentData.armada_militer.darat.artileri_berat).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.darat.artileri_berat}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Sistem Roket</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateRocketPower(currentData.armada_militer.darat.sistem_peluncur_roket).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-orange-400 leading-none">{currentData.armada_militer.darat.sistem_peluncur_roket}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Sistem SAM</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateSamPower(currentData.armada_militer.darat.pertahanan_udara_mobile).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-blue-400 leading-none">{currentData.armada_militer.darat.pertahanan_udara_mobile}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Kendaraan Taktis</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateTacticalPower(currentData.armada_militer.darat.kendaraan_taktis).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-zinc-400 leading-none">{currentData.armada_militer.darat.kendaraan_taktis}</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-800/30" />

                  {/* Special Forces & Reserves */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Users size={12} className="text-zinc-500" /> Personel Spesialis & Cadangan
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none mb-1">Pasukan Khusus</span>
                        <span className="text-xs font-black text-white leading-none">{(currentData.armada_militer.personel.pasukan_khusus / 1000).toFixed(1)}K</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none mb-1">Pasukan Cadangan</span>
                        <span className="text-xs font-black text-white leading-none">{(currentData.armada_militer.personel.pasukan_cadangan / 1000).toFixed(1)}K</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-800/30" />

                  {/* Armada Laut */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Anchor size={12} className="text-blue-500" /> Armada Laut (7 Jenis)
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Kapal Induk</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateCarrierPower(currentData.armada_militer.laut.kapal_induk).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.laut.kapal_induk}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Destroyer</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateDestroyerPower(currentData.armada_militer.laut.kapal_destroyer).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.laut.kapal_destroyer}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Korvet</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateCorvettePower(currentData.armada_militer.laut.kapal_korvet).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.laut.kapal_korvet}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Kapal Selam Nuklir</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateSubmarinePower(currentData.armada_militer.laut.kapal_selam_nuklir).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-emerald-400 leading-none">{currentData.armada_militer.laut.kapal_selam_nuklir}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Kapal Selam Reguler</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateRegularSubPower(currentData.armada_militer.laut.kapal_selam_regular).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-zinc-300 leading-none">{currentData.armada_militer.laut.kapal_selam_regular}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Kapal Ranjau</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateMineShipPower(currentData.armada_militer.laut.kapal_ranjau).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-red-400 leading-none">{currentData.armada_militer.laut.kapal_ranjau}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Logistik</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateLogisticsPower(currentData.armada_militer.laut.kapal_logistik).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-blue-300 leading-none">{currentData.armada_militer.laut.kapal_logistik}</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-800/30" />

                  {/* Armada Udara */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Plane size={12} className="text-cyan-500" /> Armada Udara (8 Jenis)
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Jet Stealth</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateStealthPower(currentData.armada_militer.udara.jet_tempur_siluman).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.udara.jet_tempur_siluman}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Interceptor</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateInterceptorPower(currentData.armada_militer.udara.jet_tempur_interceptor).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-blue-400 leading-none">{currentData.armada_militer.udara.jet_tempur_interceptor}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Bomber</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateBomberPower(currentData.armada_militer.udara.pesawat_pengebom).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-red-500 leading-none">{currentData.armada_militer.udara.pesawat_pengebom}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Heli Serang</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateAttackHeliPower(currentData.armada_militer.udara.helikopter_serang).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.udara.helikopter_serang}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pesawat Intai</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateReconPower(currentData.armada_militer.udara.pesawat_pengintai).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-white leading-none">{currentData.armada_militer.udara.pesawat_pengintai}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">UAV Intai</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateUavPower(currentData.armada_militer.udara.drone_intai_uav).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-emerald-400 leading-none">{currentData.armada_militer.udara.drone_intai_uav}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Kamikaze</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateKamikazePower(currentData.armada_militer.udara.drone_kamikaze).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-orange-400 leading-none">{currentData.armada_militer.udara.drone_kamikaze}</span>
                      </div>
                      <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase leading-none">Pesawat Angkut</span>
                          <span className="text-[8px] text-amber-500/80 font-bold leading-none">âš”ï¸ {calculateTransportPower(currentData.armada_militer.udara.pesawat_angkut).toLocaleString('id-ID')}</span>
                        </div>
                        <span className="text-xs font-black text-zinc-400 leading-none">{currentData.armada_militer.udara.pesawat_angkut}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Police Fleet Details */}

                {/* Police Fleet Details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-blue-400 uppercase tracking-widest flex items-center gap-1.5"><Shield size={10} /> Armada Kepolisian (9)</span>
                  </div>

                  {/* Patrol & Taktis */}
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Patroli</span>
                      <span className="text-xs font-black text-white leading-none">{currentData.armada_kepolisian.armada_polisi.patroli_lantas.mobil_patroli}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Motor</span>
                      <span className="text-xs font-black text-white">{currentData.armada_kepolisian.armada_polisi.patroli_lantas.sepeda_motor}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">K-9</span>
                      <span className="text-xs font-black text-white">{currentData.armada_kepolisian.armada_polisi.patroli_lantas.unit_k9}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">SWAT</span>
                      <span className="text-xs font-black text-white leading-none">{currentData.armada_kepolisian.armada_polisi.taktis_khusus.swat}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Helikopter Polisi</span>
                      <span className="text-xs font-black text-white">{currentData.armada_kepolisian.armada_polisi.taktis_khusus.helikopter_polisi}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Anti Huru-Hara</span>
                      <span className="text-xs font-black text-white">{currentData.armada_kepolisian.armada_polisi.taktis_khusus.anti_huru_hara}</span>
                    </div>
                  </div>

                  {/* Komando */}
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Stasiun</span>
                      <span className="text-xs font-black text-white tracking-tighter">{currentData.armada_kepolisian.armada_polisi.pusat_komando.kantor_polisi}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">CCTV</span>
                      <span className="text-xs font-black text-white tracking-tighter">{currentData.armada_kepolisian.armada_polisi.pusat_komando.kamera_pengawas}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                      <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Forensik</span>
                      <span className="text-xs font-black text-white tracking-tighter">{currentData.armada_kepolisian.armada_polisi.pusat_komando.pusat_forensik}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Layanan Sosial & Publik Detailed */}
          <div style={{ width: `${rightWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeRight} className="absolute inset-y-0 -left-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-cyan-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>6. Layanan Sosial & Publik (15 Jenis)</span>
              <button onClick={() => setIsSocialOpen(!isSocialOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isSocialOpen ? <Eye size={12} className="text-cyan-500" /> : <EyeOff size={12} className="text-zinc-500" />}
              </button>
            </h3>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isSocialOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">
                <div className="flex items-center justify-between text-xs font-black bg-zinc-800/50 p-2 rounded-xl border border-zinc-700/30 mt-1 shadow-inner">
                  <span className="text-zinc-400 flex items-center gap-1"><Zap size={10} className="text-amber-500" /> Beban Listrik</span>
                  <span className="text-amber-500 text-sm">
                    {hitungKonsumsiSosial(currentData.sektor_sosial).toLocaleString('id-ID')} MW
                    <span className="text-zinc-500 text-xs font-bold font-sans ml-1">({currentData.sektor_sosial.pendidikan.prasekolah + currentData.sektor_sosial.pendidikan.dasar + currentData.sektor_sosial.pendidikan.menengah + currentData.sektor_sosial.pendidikan.lanjutan + currentData.sektor_sosial.pendidikan.universitas + currentData.sektor_sosial.pendidikan.lembaga_pendidikan + currentData.sektor_sosial.pendidikan.laboratorium + currentData.sektor_sosial.pendidikan.observatorium + currentData.sektor_sosial.pendidikan.pusat_penelitian + currentData.sektor_sosial.pendidikan.pusat_pengembangan + currentData.sektor_sosial.kesehatan.rumah_sakit_besar + currentData.sektor_sosial.kesehatan.rumah_sakit_kecil + currentData.sektor_sosial.kesehatan.pusat_diagnostik} Unit)</span>
                  </span>
                </div>
                {/* Education & Research */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><GraduationCap size={10} /> Pendidikan & Riset (6)</span>
                    <span className="text-xs font-black text-blue-400">{currentData.sektor_sosial.pendidikan.literasi}% LT</span>
                  </div>
                  <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-1`}>
                    <SectorStat icon={<Building2 size={10} className="text-zinc-400" />} label="Pra/Dasar" value={`${currentData.sektor_sosial.pendidikan.prasekolah + currentData.sektor_sosial.pendidikan.dasar} (${(currentData.sektor_sosial.pendidikan.prasekolah * KONSUMSI_SOSIAL.pendidikan.prasekolah + currentData.sektor_sosial.pendidikan.dasar * KONSUMSI_SOSIAL.pendidikan.dasar).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Library size={10} className="text-zinc-300" />} label="Men/Lanjut" value={`${currentData.sektor_sosial.pendidikan.menengah + currentData.sektor_sosial.pendidikan.lanjutan} (${(currentData.sektor_sosial.pendidikan.menengah * KONSUMSI_SOSIAL.pendidikan.menengah + currentData.sektor_sosial.pendidikan.lanjutan * KONSUMSI_SOSIAL.pendidikan.lanjutan).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Library size={10} className="text-zinc-200" />} label="PT/Lembaga" value={`${currentData.sektor_sosial.pendidikan.universitas + currentData.sektor_sosial.pendidikan.lembaga_pendidikan} (${(currentData.sektor_sosial.pendidikan.universitas * KONSUMSI_SOSIAL.pendidikan.universitas + currentData.sektor_sosial.pendidikan.lembaga_pendidikan * KONSUMSI_SOSIAL.pendidikan.lembaga_pendidikan).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Microscope size={10} className="text-emerald-400" />} label="Lab & Riset" value={`${currentData.sektor_sosial.pendidikan.laboratorium + currentData.sektor_sosial.pendidikan.pusat_penelitian} (${(currentData.sektor_sosial.pendidikan.laboratorium * KONSUMSI_SOSIAL.pendidikan.laboratorium + currentData.sektor_sosial.pendidikan.pusat_penelitian * KONSUMSI_SOSIAL.pendidikan.pusat_penelitian).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Eye size={10} className="text-purple-300" />} label="Observatorium" value={`${currentData.sektor_sosial.pendidikan.observatorium} (${(currentData.sektor_sosial.pendidikan.observatorium * KONSUMSI_SOSIAL.pendidikan.observatorium).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Lightbulb size={10} className="text-yellow-400" />} label="Pengembangan" value={`${currentData.sektor_sosial.pendidikan.pusat_pengembangan} (${(currentData.sektor_sosial.pendidikan.pusat_pengembangan * KONSUMSI_SOSIAL.pendidikan.pusat_pengembangan).toLocaleString('id-ID')} MW)`} />
                  </div>
                </div>

                <div className="h-px bg-zinc-800/50" />

                {/* Health */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><HeartPulse size={10} /> Sektor Kesehatan (3)</span>
                    <span className="text-xs font-black text-emerald-400">{currentData.sektor_sosial.kesehatan.indeks_kesehatan}% IX</span>
                  </div>
                  <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-1`}>
                    <SectorStat icon={<Building2 size={10} className="text-emerald-500" />} label="RS Besar/Kecil" value={`${currentData.sektor_sosial.kesehatan.rumah_sakit_besar + currentData.sektor_sosial.kesehatan.rumah_sakit_kecil} (${(currentData.sektor_sosial.kesehatan.rumah_sakit_besar * KONSUMSI_SOSIAL.kesehatan.rumah_sakit_besar + currentData.sektor_sosial.kesehatan.rumah_sakit_kecil * KONSUMSI_SOSIAL.kesehatan.rumah_sakit_kecil).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Search size={10} className="text-cyan-400" />} label="Diagnostik" value={`${currentData.sektor_sosial.kesehatan.pusat_diagnostik} (${(currentData.sektor_sosial.kesehatan.pusat_diagnostik * KONSUMSI_SOSIAL.kesehatan.pusat_diagnostik).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Beef size={10} className="text-red-400" />} label="Harapan Hidup" value={currentData.sektor_sosial.kesehatan.harapan_hidup} />
                  </div>
                </div>

                <div className="h-px bg-zinc-800/50" />

                {/* Law & Security */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Gavel size={10} /> Hukum & Keamanan (6)</span>
                    <span className="text-xs font-black text-orange-400">{currentData.sektor_sosial.hukum.indeks_keamanan}% SEC</span>
                  </div>
                  <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-1`}>
                    <SectorStat icon={<GraduationCap size={10} className="text-zinc-200" />} label="Akademi Polisi" value={`${currentData.sektor_sosial.hukum.akademi_polisi} (${(currentData.sektor_sosial.hukum.akademi_polisi * KONSUMSI_SOSIAL.hukum.akademi_polisi).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<ShieldAlert size={10} className="text-blue-500" />} label="Kepolisian" value={`${currentData.sektor_sosial.hukum.pos_polisi} (${(currentData.sektor_sosial.hukum.pos_polisi * KONSUMSI_SOSIAL.hukum.pos_polisi).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Car size={10} className="text-zinc-400" />} label="Armada Mobil" value={`${currentData.sektor_sosial.hukum.armada_mobil_polisi} (${(currentData.sektor_sosial.hukum.armada_mobil_polisi * KONSUMSI_SOSIAL.hukum.armada_mobil_polisi).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Gavel size={10} className="text-orange-400" />} label="Kejaksaan/Court" value={`${currentData.sektor_sosial.hukum.kejaksaan + currentData.sektor_sosial.hukum.pengadilan} (${(currentData.sektor_sosial.hukum.kejaksaan * KONSUMSI_SOSIAL.hukum.kejaksaan + currentData.sektor_sosial.hukum.pengadilan * KONSUMSI_SOSIAL.hukum.pengadilan).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<Scale size={10} className="text-yellow-500" />} label="Bantuan Hukum" value={`${currentData.sektor_sosial.hukum.pusat_bantuan_hukum} (${(currentData.sektor_sosial.hukum.pusat_bantuan_hukum * KONSUMSI_SOSIAL.hukum.pusat_bantuan_hukum).toLocaleString('id-ID')} MW)`} />
                    <SectorStat icon={<TrendingUp size={10} className="text-zinc-400" />} label="Indeks Korupsi" value={currentData.sektor_sosial.hukum.indeks_korupsi} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Ekonomi & Geopolitik (Expanded) */}
          <div style={{ width: `${rightWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-3 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeRight} className="absolute inset-y-0 -left-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.2em]">7. Geopolitik & Luar Negeri (16 Jenis)</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded uppercase">{currentData.geopolitik.sikap}</span>
                <button onClick={() => setIsGeopoliticsOpen(!isGeopoliticsOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                  {isGeopoliticsOpen ? <Eye size={12} className="text-blue-500" /> : <EyeOff size={12} className="text-zinc-500" />}
                </button>
              </div>
            </div>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isGeopoliticsOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-3">

                {/* Sub-Tabs */}
                <div className="flex gap-1 p-1 bg-zinc-800/50 rounded-lg">
                  {(["overview", "orgs", "perjanjian"] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setGeoTab(tab)}
                      className={`flex-1 text-xs font-bold uppercase py-1 rounded-md transition-all ${geoTab === tab ? "bg-zinc-700 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                        }`}
                    >
                      {tab === "overview" ? "Overview" : tab === "orgs" ? "Diplomacy" : "Treaties"}
                    </button>
                  ))}
                </div>

                <div className="min-h-[140px] flex flex-col gap-3">
                  {geoTab === "overview" && (
                    <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-right-1 duration-300">
                      <div className={`grid ${getGridCols(rightWidth)} gap-4`}>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-bold text-zinc-500 uppercase">Diplomacy</span>
                          <span className="text-sm font-black text-blue-400">{currentData.geopolitik.pengaruh_internasional.prestise_diplomatik} IX</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between text-xs font-bold uppercase">
                            <span className="text-zinc-500">Soft Power</span>
                            <span className="text-indigo-400">{currentData.geopolitik.pengaruh_internasional.kekuatan_lunak}%</span>
                          </div>
                          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${currentData.geopolitik.pengaruh_internasional.kekuatan_lunak}%` }} />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between text-xs font-bold uppercase">
                            <span className="text-zinc-500">Hard Power</span>
                            <span className="text-red-400">{currentData.geopolitik.pengaruh_internasional.kekuatan_keras}%</span>
                          </div>
                          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 transition-all duration-500" style={{ width: `${currentData.geopolitik.pengaruh_internasional.kekuatan_keras}%` }} />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 scroll-area max-h-[60px] no-scrollbar overflow-y-auto">
                        <span className="text-xs font-bold text-zinc-500 uppercase">Sekutu Utama</span>
                        <div className="flex flex-wrap gap-1">
                          {currentData.geopolitik.sekutu.map((a, i) => (
                            <span key={i} className="text-xs font-bold text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700/50">{a}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {geoTab === "orgs" && (
                    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-right-1 duration-300">
                      <span className="text-xs font-bold text-zinc-500 uppercase">Keanggotaan Organisasi</span>
                      <div className="flex flex-col gap-1.5">
                        {currentData.geopolitik.organisasi_internasional.map((org, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-zinc-800/40 rounded-lg border border-zinc-700/30">
                            <div className="flex items-center gap-2">
                              <Globe2 size={10} className="text-blue-400" />
                              <span className="text-xs font-bold text-white">{org.name}</span>
                            </div>
                            <span className={`text-xs font-black px-1.5 py-0.5 rounded ${org.role === "Pemimpin" ? "bg-amber-500/20 text-amber-400" : "bg-zinc-700/50 text-zinc-400"
                              }`}>{org.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {geoTab === "perjanjian" && (
                    <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-right-1 duration-300">
                      <span className="text-xs font-bold text-zinc-500 uppercase">Perjanjian Internasional</span>
                      <div className="flex flex-col gap-1.5">
                        {currentData.geopolitik.perjanjian?.map((agr, i) => (
                          <div key={i} className="flex flex-col gap-1 p-2 bg-zinc-800/40 rounded-lg border border-zinc-700/30">
                            <div className="flex justify-between items-center text-xs font-black">
                              <span className="text-white">{agr.mitra}</span>
                              <span className={`text-xs uppercase ${agr.jenis === "Militer" ? "text-red-400" : agr.jenis === "Perdagangan" ? "text-emerald-400" : "text-blue-400"
                                }`}>{agr.jenis}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-zinc-500">{agr.status}</span>
                              <div className="flex gap-0.5">
                                {[1, 2, 3].map(s => <div key={s} className={`w-1 h-1 rounded-full ${s === 1 ? 'bg-emerald-500' : 'bg-zinc-700'}`} />)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


          {/* 8. Olahraga */}
          <div style={{ width: `${rightWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeRight} className="absolute inset-y-0 -left-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-yellow-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>8. Olahraga (4 Jenis)</span>
              <button onClick={() => setIsOlahragaOpen(!isOlahragaOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isOlahragaOpen ? <Eye size={12} className="text-yellow-500" /> : <EyeOff size={12} className="text-zinc-500" />}
              </button>
            </h3>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOlahragaOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-black bg-zinc-800/50 p-2 rounded-xl border border-zinc-700/30 mt-1 shadow-inner mb-1">
                  <span className="text-zinc-400 flex items-center gap-1"><Zap size={10} className="text-amber-500" /> Beban Listrik</span>
                  <span className="text-amber-500 text-sm">
                    {hitungKonsumsiOlahraga(currentData.sektor_olahraga).toLocaleString('id-ID')} MW
                    <span className="text-zinc-500 text-xs font-bold font-sans ml-1">({currentData.sektor_olahraga.kolam_renang + currentData.sektor_olahraga.sirkuit_balap + currentData.sektor_olahraga.stadion + currentData.sektor_olahraga.stadion_internasional} Unit)</span>
                  </span>
                </div>
                <div className={`grid ${getGridCols(rightWidth)} gap-2`}>
                  <SectorStat icon={<Waves size={10} className="text-blue-400" />} label="Kolam Renang" value={`${currentData.sektor_olahraga.kolam_renang} (${(currentData.sektor_olahraga.kolam_renang * KONSUMSI_SOSIAL.olahraga.kolam_renang).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Flame size={10} className="text-orange-500" />} label="Sirkuit Balap" value={`${currentData.sektor_olahraga.sirkuit_balap} (${(currentData.sektor_olahraga.sirkuit_balap * KONSUMSI_SOSIAL.olahraga.sirkuit_balap).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Trophy size={10} className="text-yellow-500" />} label="Stadion" value={`${currentData.sektor_olahraga.stadion} (${(currentData.sektor_olahraga.stadion * KONSUMSI_SOSIAL.olahraga.stadion).toLocaleString('id-ID')} MW)`} />
                  <SectorStat icon={<Trophy size={10} className="text-amber-500" />} label="Stadion Internasional" value={`${currentData.sektor_olahraga.stadion_internasional} (${(currentData.sektor_olahraga.stadion_internasional * KONSUMSI_SOSIAL.olahraga.stadion_internasional).toLocaleString('id-ID')} MW)`} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Consolidated Map Controls & Search */}
      <div className="fixed left-1/2 bottom-[230px] -translate-x-1/2 z-[100] flex items-center gap-8 pointer-events-none w-max max-w-[90vw]">
        
        {/* Map Mode Toggles */}
        <div className="flex bg-zinc-900/95 backdrop-blur-2xl p-1.5 rounded-2xl border border-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] gap-1.5 pointer-events-auto ring-1 ring-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700 h-fit">
          <button
            onClick={() => setMapMode("default")}
            className={`px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer active:scale-95 ${mapMode === "default"
                ? "bg-zinc-100 text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/80"
              }`}
          >
            PETA UTAMA
          </button>
          <button
            onClick={() => setMapMode("hubungan")}
            className={`px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all cursor-pointer active:scale-95 flex items-center gap-2 ${mapMode === "hubungan"
                ? "bg-amber-500 text-zinc-950 shadow-[0_0_25px_rgba(245,158,11,0.5)]"
                : "text-zinc-500 hover:text-amber-500 hover:bg-amber-500/10"
              }`}
          >
            HUBUNGAN
          </button>
        </div>

        {/* Search Input */}
        <div className="w-80 animate-in fade-in slide-in-from-bottom-2 duration-1000 pointer-events-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search size={16} className="text-zinc-500 group-focus-within:text-amber-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Cari Negara atau Ibukota..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 backdrop-blur-3xl border border-zinc-800/50 rounded-2xl py-3.5 pl-12 pr-12 text-sm font-bold text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/30 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                <div className="bg-zinc-800/80 p-1.5 rounded-lg hover:bg-zinc-700 transition-colors">
                  <X size={14} />
                </div>
              </button>
            )}
          </div>

          {searchQuery && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500/80 bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/10">
                Ditemukan {filteredCountries.length} Negara
              </span>
            </div>
          )}
        </div>

      </div>


      {/* 3. FOOTER CAROUSEL & CONTROLS */}
      <footer className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex items-end justify-between z-20">
        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-2 bg-gradient-to-r from-teal-900/40 to-emerald-900/40 border border-teal-800/40 px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-300 hover:from-teal-800/60 transition cursor-pointer w-fit uppercase tracking-wider">
            <Filter className="h-3.5 w-3.5" />
            Filter Region
          </button>
        </div>

        {/* Carousel with Chevrons */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex items-center gap-4 w-full max-w-6xl z-30">
          <button
            onClick={() => scrollByAmount('left')}
            className="p-1 px-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>

          <div ref={scrollRef} className="flex flex-1 gap-10 overflow-x-auto pt-10 pb-4 no-scrollbar">
            {filteredCountries.map((c, i) => (
              <button
                key={i}
                ref={el => { buttonRefs.current[c.name_en] = el; }}
                onClick={() => {
                  isInternalSelection.current = true;
                  setSelectedCountry(c.name_en);
                }}
                className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all cursor-pointer min-w-[150px] h-[100px] justify-center ${selectedCountry === c.name_en
                    ? 'bg-amber-500/10 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)] scale-105 z-10'
                    : 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800/80 hover:border-zinc-700 hover:scale-[1.02]'
                  }`}
              >
                {selectedCountry === c.name_en && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-bold text-xs px-2 py-1 rounded-md shadow-lg font-sans whitespace-nowrap z-30">
                    {c.name_id}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-amber-500" />
                  </div>
                )}
                <span className="text-3xl filter drop-shadow-lg">{c.flag}</span>
                <div className="flex flex-col items-center gap-0.5 mt-1">
                  <span className="text-[11px] font-black text-white text-center line-clamp-1 px-1 uppercase tracking-wider">
                    {c.name_id}
                  </span>
                  <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                    {c.capital}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollByAmount('right')}
            className="p-1 px-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer active:scale-95"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Action Buttons Right */}
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 font-bold hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer active:scale-95 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>

          <button
            onClick={() => {
              if (!hasSelection) {
                setShowSelectionWarning(true);
                return;
              }
              setIsLoading(true);
              gameStorage.saveSession(selectedCountry);
              setTimeout(() => {
                router.push("/game");
              }, 1500);
            }}
            disabled={isLoading}
            className={`flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all cursor-pointer group scale-100 hover:scale-[1.02] active:scale-[0.98] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Play className="h-4 w-4" />
            {isLoading ? "Memproses..." : "Mulai"}
          </button>
        </div>
      </footer>

      {/* 4. LOADING OVERLAY */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-500">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-2 border-r-2 border-cyan-500 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="h-16 w-16 rounded-full border-b-2 border-l-2 border-blue-600 animate-spin"
                style={{ animationDirection: 'reverse' }}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold tracking-widest text-white uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Menyiapkan Simulasi
            </h2>
            <p className="text-zinc-500 text-xs animate-pulse uppercase tracking-tight">Sedang memproses data negara {currentData.name_id}...</p>
          </div>
        </div>
      )}

      {/* 5. SELECTION WARNING MODAL */}
      {showSelectionWarning && (
        <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col items-center text-center gap-6">
            <div className="h-20 w-20 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <ShieldAlert size={40} className="text-amber-500 animate-pulse" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-black text-white uppercase tracking-wider">Akses Ditolak</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Anda belum memilih kedaulatan negara. <br />
                Silakan pilih satu negara pada peta atau daftar dibawah untuk memulai simulasi.
              </p>
            </div>

            <button
              onClick={() => setShowSelectionWarning(false)}
              className="w-full py-4 bg-zinc-100 text-zinc-950 font-black uppercase tracking-widest rounded-2xl hover:bg-white active:scale-95 transition-all cursor-pointer"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  const displayValue = typeof value === 'number' ? value.toLocaleString('id-ID') : value;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{label}</span>
        <span className="font-bold text-white text-sm leading-tight">
          {label === "Kas Negara" && typeof value === 'number' ? `Rp ${displayValue}` : displayValue}
        </span>
      </div>
    </div>
  );
}

function DetailStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-start gap-1.5 text-zinc-500">
        <div className="mt-0.5">{icon}</div>
        <span className="text-xs font-bold uppercase tracking-tighter leading-tight">{label}</span>
      </div>
      <span className="text-sm font-black text-zinc-200">{value}</span>
    </div>
  );
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

function MinistryStat({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase">
        <span>{label}</span>
        <span className="text-zinc-300">{value}%</span>
      </div>
      <div className="bg-zinc-800 h-1 rounded-full overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}


function ProgressStat({ label, value, color, icon }: { label: string, value: number, color: string, icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase">
        <div className="flex items-center gap-1.5">
          {icon}
          <span>{label}</span>
        </div>
        <span className="text-zinc-300">{value}%</span>
      </div>
      <div className="bg-zinc-800 h-1 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} shadow-[0_0_8px_rgba(255,255,255,0.1)]`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function SectorStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: number | string }) {
  return (
    <div className="flex flex-col gap-0.5 bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
      <div className="flex items-start gap-1.5 text-zinc-500">
        <div className="mt-0.5">{icon}</div>
        <span className="text-xs font-bold uppercase tracking-tighter leading-tight">{label}</span>
      </div>
      <span className="text-xs font-black text-zinc-200">{typeof value === 'number' ? value.toLocaleString('id-ID') : value}</span>
    </div>
  );
}
