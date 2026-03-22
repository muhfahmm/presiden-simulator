"use client"

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle, Play, ArrowLeft, Filter, ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import WorldMapCanvas from "./selectcountrymap";
import { countries } from "./data/countries";
import { gameStorage } from "../game/gamestorage";
import { CountryData } from "./data/types";
import { 
  Sword, Anchor, Plane, ShieldCheck, Globe2, TrendingUp, Gem, Droplets, Beef, TreePine, Mountain, 
  Zap, Waves, Sun, Flame, Wind, Building2, TowerControl, Ship, Radio, Home, Store, Factory, Map, 
  TrainFront, Wifi, Smartphone, Droplet, Cpu, Layers, Microscope, Trophy, Gavel, Sprout, Box, 
  Syringe, GraduationCap, Crosshair, RadioTower, Landmark, Fish, Construction, Pill, Car, Bike, 
  Utensils, Apple, Coffee, Milk, Bird, Egg, Leaf, Shell, Bean, Carrot, Cookie, Croissant, Soup,
  HeartPulse, Search, Library, Lightbulb, Archive, ShieldAlert, Warehouse, Lock, Scale,
  Truck, Shield, Users, Coins, Globe, Church, Battery, Pickaxe, FlaskConical, Bus
} from "lucide-react";

export default function SelectCountry() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isCentered, setIsCentered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [geoTab, setGeoTab] = useState<"overview" | "orgs" | "agreements">("overview");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [leftWidth, setLeftWidth] = useState(360);
  const [rightWidth, setRightWidth] = useState(360);
  const [isInfraOpen, setIsInfraOpen] = useState(true);
  const [isEconomyOpen, setIsEconomyOpen] = useState(true);
  const [isDefenseOpen, setIsDefenseOpen] = useState(true);
  const [isSocialOpen, setIsSocialOpen] = useState(true);

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

  const currentData = (countries.find(c => c.name_en === selectedCountry) || countries[0]) as CountryData;

  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-950 text-white font-sans relative overflow-hidden select-none">
      
      {/* 1. TOP STATS BAR */}
      <header className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-6 py-2 flex items-center justify-between z-20 text-xs text-zinc-300">
        <div className="flex items-center gap-6">
          <button className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer">
            <HelpCircle className="h-3.5 w-3.5 text-teal-400" />
          </button>
          
          <div className="flex items-center gap-4">
            <StatItem label="Ibukota" value={currentData.capital} icon={<Landmark size={14} className="text-amber-400" />} />
            <StatItem label="Populasi" value={currentData.pop} icon={<Users size={14} className="text-blue-400" />} />
            <StatItem label="Kas Negara" value={currentData.budget} icon={<Coins size={14} className="text-yellow-400" />} />
            <StatItem label="Total Negara" value={`${countries.length}`} icon={<Globe size={14} className="text-teal-400" />} />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <StatItem label="Agama Mayoritas" value={currentData.religion} icon={<Church size={14} className="text-purple-400" />} />
          <StatItem label="Ideologi" value={currentData.ideology} icon={<Scale size={14} className="text-orange-400" />} />
          
          <div className="h-4 w-px bg-zinc-800" />
          
          <div className="flex items-center gap-2">
            <Globe2 size={12} className="text-blue-400" />
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Suara PBB</span>
            <span className={`text-xs font-black px-1.5 py-0.5 rounded ${
              currentData.un_vote === 'Pro' ? 'bg-emerald-500/20 text-emerald-400' :
              currentData.un_vote === 'Contra' ? 'bg-red-500/20 text-red-400' :
              'bg-zinc-700/50 text-zinc-300'
            }`}>
              {currentData.un_vote}
            </span>
          </div>
        </div>

        {/* Selected Country Flag Overlay */}
        <div className="flex items-center gap-2 bg-zinc-800/80 px-4 py-1.5 rounded-lg border border-zinc-700">
          <span className="text-xl">{currentData.flag}</span>
        </div>
      </header>

      {/* 2. MAIN MAP DISPLAY area with Zoom/Pan */}
      <main className="flex-1 relative w-full h-full z-10 overflow-hidden">
        <TransformWrapper
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
              <WorldMapCanvas selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
            </div>
          </TransformComponent>
        </TransformWrapper>
        
        {/* Ambient Darkened Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

        {/* --- LEFT SIDE PANELS --- */}
        <div className="absolute top-4 left-4 flex flex-col gap-4 z-20 pointer-events-none max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pb-10 px-1">
          
          {/* 1. Infrastruktur & Energi */}
          <div style={{ width: `${leftWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel mb-4">
            <div onMouseDown={startResizeLeft} className="absolute inset-y-0 -right-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>1. Infrastruktur & Logistik</span>
              <button onClick={() => setIsInfraOpen(!isInfraOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isInfraOpen ? <Eye size={12} className="text-amber-500"/> : <EyeOff size={12} className="text-zinc-500"/>}
              </button>
            </h3>
            
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isInfraOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar pr-1">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1"><Zap size={8}/> Jaringan Energi</span>
                <ProgressStat label="Power Grid" value={currentData.infrastructure.power_grid} color="bg-amber-500" icon={<Zap size={10}/>} />
                <div className={`grid ${getGridCols(leftWidth)} gap-x-3 gap-y-2 mt-2`}>
                  <DetailStat icon={<Radio size={12} className="text-cyan-400"/>} label="PLTN" value={currentData.infrastructure.nuclear_plant.toString()} />
                  <DetailStat icon={<Waves size={12} className="text-blue-400"/>} label="PLTA" value={currentData.infrastructure.hydro_plant.toString()} />
                  <DetailStat icon={<Sun size={12} className="text-yellow-400"/>} label="PLTS" value={currentData.infrastructure.solar_plant.toString()} />
                  <DetailStat icon={<Flame size={12} className="text-orange-400"/>} label="PLTU" value={currentData.infrastructure.thermal_plant.toString()} />
                  <DetailStat icon={<Flame size={12} className="text-red-400"/>} label="PLTG" value={currentData.infrastructure.gas_plant.toString()} />
                  <DetailStat icon={<Wind size={12} className="text-emerald-400"/>} label="PLTB" value={currentData.infrastructure.wind_plant.toString()} />
                </div>
              </div>

              <div className="h-px bg-zinc-800/50" />

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1"><Ship size={8}/> Transportasi & Digital</span>
                <div className="space-y-2">
                  <ProgressStat label="Kualitas Jalan" value={currentData.infrastructure.road_quality} color="bg-zinc-400" icon={<Map size={10}/>} />
                  <ProgressStat label="Cakupan Internet" value={currentData.infrastructure.internet_coverage} color="bg-blue-500" icon={<Wifi size={10}/>} />
                </div>
                <div className={`grid ${getGridCols(leftWidth)} gap-3 mt-1`}>
                  <DetailStat icon={<Bike size={12} className="text-emerald-400"/>} label="Jalur Sepeda" value={currentData.infrastructure.bicycle_path.toString()} />
                  <DetailStat icon={<TrainFront size={12} className="text-blue-500"/>} label="Subway" value={currentData.infrastructure.subway.toString()} />
                  <DetailStat icon={<TrainFront size={12} className="text-zinc-400"/>} label="Kereta Api" value={currentData.infrastructure.railway.toString()} />
                  <DetailStat icon={<Map size={12} className="text-zinc-300"/>} label="Jalan Raya" value={currentData.infrastructure.highway.toString()} />
                  <DetailStat icon={<Ship size={12} className="text-blue-400"/>} label="Pelabuhan" value={currentData.infrastructure.sea_port.toString()} />
                  <DetailStat icon={<Plane size={12} className="text-cyan-400"/>} label="Bandara" value={currentData.infrastructure.airport.toString()} />
                  <DetailStat icon={<Bus size={12} className="text-amber-400"/>} label="Terminal Bus" value={(currentData.infrastructure.bus_terminal ?? 0).toString()} />
                  <DetailStat icon={<Plane size={12} className="text-pink-400"/>} label="Helipad" value={(currentData.infrastructure.helipad ?? 0).toString()} />
                </div>
              </div>
          </div>
          </div>
          
          </div>
          {/* 2. Sektor Produksi & Ekonomi Detailed */}
          <div style={{ width: `${leftWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeLeft} className="absolute inset-y-0 -right-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>2. Produksi & Ekonomi Nasional</span>
              <button onClick={() => setIsEconomyOpen(!isEconomyOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isEconomyOpen ? <Eye size={12} className="text-emerald-500"/> : <EyeOff size={12} className="text-zinc-500"/>}
              </button>
            </h3>
            
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isEconomyOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">
              {/* Extraction */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Pickaxe size={10}/> Ekstraksi & Energi</span>
                  <span className="text-xs font-black text-emerald-400">{Math.floor(currentData.sector_extraction.strength)}%</span>
                </div>
                <div className={`grid ${getGridCols(leftWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<Droplets size={10} className="text-blue-400"/>} label="Minyak" value={currentData.sector_extraction.oil} />
                  <SectorStat icon={<Flame size={10} className="text-orange-400"/>} label="Gas" value={currentData.sector_extraction.gas} />
                  <SectorStat icon={<Gem size={10} className="text-yellow-400"/>} label="Emas" value={currentData.sector_extraction.gold} />
                  <SectorStat icon={<Radio size={10} className="text-emerald-400"/>} label="Uranium" value={currentData.sector_extraction.uranium} />
                  <SectorStat icon={<Layers size={10} className="text-zinc-400"/>} label="Batubara" value={currentData.sector_extraction.coal} />
                  <SectorStat icon={<Box size={10} className="text-orange-400"/>} label="Nikel" value={currentData.sector_extraction.nickel} />
                  <SectorStat icon={<Pickaxe size={10} className="text-orange-300"/>} label="Tembaga" value={currentData.sector_extraction.copper} />
                  <SectorStat icon={<Mountain size={10} className="text-zinc-500"/>} label="Biji Besi" value={currentData.sector_extraction.iron_ore} />
                  <SectorStat icon={<Cpu size={10} className="text-purple-400"/>} label="Tanah Jarang" value={currentData.sector_extraction.rare_earth} />
                  <SectorStat icon={<Waves size={10} className="text-blue-200"/>} label="Garam" value={currentData.sector_extraction.salt} />
                </div>
              </div>

              <div className="h-px bg-zinc-800/50" />

              {/* Manufacturing */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Factory size={10}/> Manufaktur & Industri</span>
                  <span className="text-xs font-black text-blue-400">{Math.floor(currentData.sector_manufacturing.strength)}%</span>
                </div>
                <div className={`grid ${getGridCols(leftWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<Cpu size={10} className="text-purple-400"/>} label="Semikonduktor" value={currentData.sector_manufacturing.semiconductor} />
                  <SectorStat icon={<Car size={10} className="text-zinc-300"/>} label="Mobil" value={currentData.sector_manufacturing.car} />
                  <SectorStat icon={<Bike size={10} className="text-zinc-300"/>} label="Motor" value={currentData.sector_manufacturing.motorcycle} />
                  <SectorStat icon={<Flame size={10} className="text-red-400"/>} label="Smelter" value={currentData.sector_manufacturing.smelter} />
                  <SectorStat icon={<Construction size={10} className="text-zinc-400"/>} label="Beton & Semen" value={currentData.sector_manufacturing.concrete_cement} />
                  <SectorStat icon={<TreePine size={10} className="text-emerald-600"/>} label="Kayu" value={currentData.sector_manufacturing.wood} />
                  <SectorStat icon={<Droplet size={10} className="text-blue-400"/>} label="Air Mineral" value={currentData.sector_manufacturing.mineral_water} />
                  <SectorStat icon={<Cookie size={10} className="text-yellow-600"/>} label="Gula" value={currentData.sector_manufacturing.sugar} />
                  <SectorStat icon={<Croissant size={10} className="text-amber-400"/>} label="Roti" value={currentData.sector_manufacturing.bread} />
                  <SectorStat icon={<Pill size={10} className="text-pink-400"/>} label="Farmasi" value={currentData.sector_manufacturing.pharmacy} />
                  <SectorStat icon={<FlaskConical size={10} className="text-emerald-400"/>} label="Pupuk" value={currentData.sector_manufacturing.fertilizer} />
                  <SectorStat icon={<Beef size={10} className="text-red-400"/>} label="Daging" value={currentData.sector_manufacturing.meat_processing} />
                  <SectorStat icon={<Soup size={10} className="text-orange-400"/>} label="Mie Instan" value={currentData.sector_manufacturing.instant_noodle} />
                </div>
              </div>

              <div className="h-px bg-zinc-800/50" />

              {/* Agri & Livestock */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Sprout size={10}/> Agri & Peternakan</span>
                  <span className="text-xs font-black text-orange-400">{Math.floor((currentData.sector_agriculture.strength + currentData.sector_livestock.strength)/2)}%</span>
                </div>
                
                {/* Livestock Subgrid */}
                <div className={`grid ${getGridCols(leftWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<Bird size={10} className="text-amber-500"/>} label="Ayam/Unggas" value={currentData.sector_livestock.chicken + currentData.sector_livestock.poultry} />
                  <SectorStat icon={<Milk size={10} className="text-zinc-200"/>} label="Sapi Perah" value={currentData.sector_livestock.dairy_cow} />
                  <SectorStat icon={<Beef size={10} className="text-red-500"/>} label="Sapi Potong" value={currentData.sector_livestock.beef_cow} />
                  <SectorStat icon={<Leaf size={10} className="text-emerald-300"/>} label="Domba/Kambing" value={currentData.sector_livestock.sheep_goat} />
                  <SectorStat icon={<Shell size={10} className="text-pink-300"/>} label="Udang/Kerang" value={currentData.sector_livestock.shrimp + currentData.sector_livestock.shellfish} />
                  <SectorStat icon={<Fish size={10} className="text-blue-400"/>} label="Ikan" value={currentData.sector_livestock.fish} />
                </div>

                <div className="h-px bg-zinc-800/30 w-1/2 self-center my-1" />

                {/* Agri Subgrid */}
                <div className={`grid ${getGridCols(leftWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<Sprout size={10} className="text-green-500"/>} label="Padi" value={currentData.sector_agriculture.rice} />
                  <SectorStat icon={<Utensils size={10} className="text-amber-600"/>} label="Gandum/Jagung" value={currentData.sector_agriculture.wheat + currentData.sector_agriculture.corn} />
                  <SectorStat icon={<Apple size={10} className="text-red-500"/>} label="Sayur/Umbi" value={currentData.sector_agriculture.vegetables + currentData.sector_agriculture.tubers} />
                  <SectorStat icon={<Bean size={10} className="text-emerald-700"/>} label="Kedelai" value={currentData.sector_agriculture.soy} />
                  <SectorStat icon={<Droplet size={10} className="text-amber-500"/>} label="Kelapa Sawit" value={currentData.sector_agriculture.palm_oil} />
                  <SectorStat icon={<Coffee size={10} className="text-amber-900"/>} label="Kopi/Teh/Kakao" value={currentData.sector_agriculture.coffee + currentData.sector_agriculture.tea + currentData.sector_agriculture.cocoa} />
                  <SectorStat icon={<Leaf size={10} className="text-emerald-500"/>} label="Tebu" value={currentData.sector_agriculture.sugarcane} />
                </div>
              </div>
            </div>
        </div>
        </div>

        </div>
        {/* --- RIGHT SIDE PANELS --- */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 z-20 pointer-events-none max-h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pr-1 pb-10">
          
          {/* 3. Pertahanan & Militer Strategis Detailed */}
          <div style={{ width: `${rightWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeRight} className="absolute inset-y-0 -left-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-red-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>3. Pertahanan & Strategis</span>
              <button onClick={() => setIsDefenseOpen(!isDefenseOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isDefenseOpen ? <Eye size={12} className="text-red-500"/> : <EyeOff size={12} className="text-zinc-500"/>}
              </button>
            </h3>
            
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isDefenseOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">
              {/* Defense Assets */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><ShieldCheck size={10}/> Sektor Pertahanan</span>
                  <span className="text-xs font-black text-red-400">{Math.floor(currentData.sector_defense.strength)}%</span>
                </div>
                <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<Gavel size={10} className="text-zinc-400"/>} label="Penjara" value={currentData.sector_defense.prison} />
                  <SectorStat icon={<Home size={10} className="text-zinc-300"/>} label="Barak" value={currentData.sector_defense.barracks} />
                  <SectorStat icon={<Archive size={10} className="text-orange-400"/>} label="Gudang Senjata" value={currentData.sector_defense.armory} />
                  <SectorStat icon={<Warehouse size={10} className="text-zinc-500"/>} label="Hangar Tank" value={currentData.sector_defense.tank_hangar} />
                  <SectorStat icon={<GraduationCap size={10} className="text-zinc-200"/>} label="Akademi Militer" value={currentData.sector_defense.military_academy} />
                  <SectorStat icon={<Landmark size={10} className="text-red-400"/>} label="Budget" value={currentData.sector_defense.budget} />
                </div>
              </div>

              <div className="h-px bg-zinc-800/50" />

              {/* Military Fleet */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Truck size={10}/> Armada Militer</span>
                  <span className="text-xs font-black text-amber-500">{currentData.sector_defense.military_fleet.readiness}% Ready</span>
                </div>
                
                {/* Darat */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Tank</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.darat.main_battle_tank}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">APC</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.darat.apc}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Artileri</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.darat.artileri_berat}</span>
                  </div>
                </div>

                {/* Laut */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Induk</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.laut.kapal_induk}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Destroyer</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.laut.kapal_destroyer}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Selam N</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.laut.kapal_selam_nuklir}</span>
                  </div>
                </div>

                {/* Udara */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Stealth</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.udara.jet_tempur_stealth}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Heli Ser</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.udara.helikopter_serang}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Intai</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_defense.military_fleet.udara.pesawat_pengintai}</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-zinc-800/50" />

              {/* Strategic Assets */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Crosshair size={10}/> Militer Strategis</span>
                  <span className="text-xs font-black text-indigo-400">{Math.floor(currentData.sector_military_strategic.cyber_defense)}% Cyber</span>
                </div>
                <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<TowerControl size={10} className="text-zinc-100"/>} label="Pusat Komando" value={currentData.sector_military_strategic.command_center} />
                  <SectorStat icon={<Plane size={10} className="text-cyan-400"/>} label="Pangkalan Udara" value={currentData.sector_military_strategic.military_air_base} />
                  <SectorStat icon={<Anchor size={10} className="text-blue-400"/>} label="Pangkalan Laut" value={currentData.sector_military_strategic.military_naval_base} />
                  <SectorStat icon={<Factory size={10} className="text-red-500"/>} label="Pabrik Alutsista" value={currentData.sector_military_strategic.arms_factory} />
                  <SectorStat icon={<RadioTower size={10} className="text-purple-400"/>} label="Lintas Antariksa" value={currentData.sector_military_strategic.space_program} />
                  <SectorStat icon={<Radio size={10} className="text-red-400"/>} label="Status Nuklir" value={currentData.sector_military_strategic.nuclear_status ? 1 : 0} />
                </div>

                {/* Strategic Ops & Intel Radar */}
                <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-2`}>
                  <div className="flex flex-col gap-1.5 p-2 bg-zinc-800/40 rounded-xl border border-zinc-700/30">
                    <span className="text-xs font-black text-zinc-500 uppercase tracking-tighter">Strategic Ops</span>
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-red-400">Attack: {currentData.sector_military_strategic.strategic_operations.attack_mission}</span>
                      <span className="text-emerald-400">Spy: {currentData.sector_military_strategic.strategic_operations.spy_mission}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 p-2 bg-zinc-800/40 rounded-xl border border-zinc-700/30">
                    <span className="text-xs font-black text-zinc-500 uppercase tracking-tighter">Intel Radar</span>
                    <div className="flex justify-between items-center text-xs font-bold text-blue-400">
                      <span>Sat: {currentData.sector_military_strategic.intel_radar.satellite_system}</span>
                      <span>Net: {currentData.sector_military_strategic.intel_radar.radar_network}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-zinc-800/50" />

              {/* Police Fleet Details */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-blue-400 uppercase tracking-widest flex items-center gap-1.5"><Shield size={10}/> Armada Kepolisian</span>
                  <span className="text-xs font-bold text-emerald-400">{currentData.sector_social.law.police_fleet.public_trust}% Trust</span>
                </div>
                
                {/* Patrol & Taktis */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Patroli</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_social.law.police_fleet.patroli_lantas.mobil_patroli}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Motor</span>
                    <span className="text-xs font-black text-white">{currentData.sector_social.law.police_fleet.patroli_lantas.sepeda_motor}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">K-9</span>
                    <span className="text-xs font-black text-white">{currentData.sector_social.law.police_fleet.patroli_lantas.unit_k9}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">SWAT</span>
                    <span className="text-xs font-black text-white leading-none">{currentData.sector_social.law.police_fleet.taktis_khusus.swat}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Heli Pol</span>
                    <span className="text-xs font-black text-white">{currentData.sector_social.law.police_fleet.taktis_khusus.helikopter_polisi}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">HuruHara</span>
                    <span className="text-xs font-black text-white">{currentData.sector_social.law.police_fleet.taktis_khusus.anti_huru_hara}</span>
                  </div>
                </div>

                {/* Komando */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Stasiun</span>
                    <span className="text-xs font-black text-white tracking-tighter">{currentData.sector_social.law.police_fleet.pusat_komando.stasiun_polisi}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">CCTV</span>
                    <span className="text-xs font-black text-white tracking-tighter">{currentData.sector_social.law.police_fleet.pusat_komando.kamera_surveillance}</span>
                  </div>
                  <div className="flex flex-col bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
                    <span className="text-xs text-zinc-500 font-bold uppercase leading-none mb-1">Forensik</span>
                    <span className="text-xs font-black text-white tracking-tighter">{currentData.sector_social.law.police_fleet.pusat_komando.pusat_forensik}</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* 4. Layanan Sosial & Publik Detailed */}
          <div style={{ width: `${rightWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeRight} className="absolute inset-y-0 -left-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>
            <h3 className="text-xs font-black text-cyan-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>4. Layanan Sosial & Publik</span>
              <button onClick={() => setIsSocialOpen(!isSocialOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isSocialOpen ? <Eye size={12} className="text-cyan-500"/> : <EyeOff size={12} className="text-zinc-500"/>}
              </button>
            </h3>
            
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isSocialOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">
              {/* Education & Research */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><GraduationCap size={10}/> Pendidikan & Riset</span>
                  <span className="text-xs font-black text-blue-400">{currentData.sector_social.education.literacy}% LT</span>
                </div>
                <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<Building2 size={10} className="text-zinc-400"/>} label="TK/SD" value={currentData.sector_social.education.kindergarten + currentData.sector_social.education.elementary_school} />
                  <SectorStat icon={<Library size={10} className="text-zinc-300"/>} label="SMP/SMA" value={currentData.sector_social.education.middle_school + currentData.sector_social.education.high_school} />
                  <SectorStat icon={<Library size={10} className="text-zinc-200"/>} label="PT/Lembaga" value={currentData.sector_social.education.university + currentData.sector_social.education.education_institute} />
                  <SectorStat icon={<Microscope size={10} className="text-emerald-400"/>} label="Lab & Riset" value={currentData.sector_social.education.laboratory + currentData.sector_social.education.research_center} />
                  <SectorStat icon={<Eye size={10} className="text-purple-300"/>} label="Observatorium" value={currentData.sector_social.education.observatory} />
                  <SectorStat icon={<Lightbulb size={10} className="text-yellow-400"/>} label="Pengembangan" value={currentData.sector_social.education.development_center} />
                </div>
              </div>

              <div className="h-px bg-zinc-800/50" />

              {/* Health & Sports */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><HeartPulse size={10}/> Kesehatan & Olahraga</span>
                  <span className="text-xs font-black text-emerald-400">{currentData.sector_social.health.healthcare_index}% IX</span>
                </div>
                <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<Building2 size={10} className="text-emerald-500"/>} label="RS Besar/Kecil" value={currentData.sector_social.health.large_hospital + currentData.sector_social.health.small_hospital} />
                  <SectorStat icon={<Search size={10} className="text-cyan-400"/>} label="Diagnostik" value={currentData.sector_social.health.diagnostic_center} />
                  <SectorStat icon={<Waves size={10} className="text-blue-400"/>} label="Kolam Renang" value={currentData.sector_social.sports.swimming_pool} />
                  <SectorStat icon={<Flame size={10} className="text-orange-500"/>} label="Sirkuit Balap" value={currentData.sector_social.sports.racing_circuit} />
                  <SectorStat icon={<Trophy size={10} className="text-yellow-500"/>} label="Stadion" value={currentData.sector_social.sports.stadium + currentData.sector_social.sports.international_stadium} />
                  <SectorStat icon={<Beef size={10} className="text-red-400"/>} label="Harapan Hidup" value={currentData.sector_social.health.life_expectancy} />
                </div>
              </div>

              <div className="h-px bg-zinc-800/50" />

              {/* Law & Security */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1.5"><Gavel size={10}/> Hukum & Keamanan</span>
                  <span className="text-xs font-black text-orange-400">{currentData.sector_social.law.security_index}% SEC</span>
                </div>
                <div className={`grid ${getGridCols(rightWidth)} gap-2 mt-1`}>
                  <SectorStat icon={<GraduationCap size={10} className="text-zinc-200"/>} label="Akademi Polisi" value={currentData.sector_social.law.police_academy} />
                  <SectorStat icon={<ShieldAlert size={10} className="text-blue-500"/>} label="Kepolisian" value={currentData.sector_social.law.police_station} />
                  <SectorStat icon={<Car size={10} className="text-zinc-400"/>} label="Armada Mobil" value={currentData.sector_social.law.police_car_fleet} />
                  <SectorStat icon={<Gavel size={10} className="text-orange-400"/>} label="Kejaksaan/Court" value={currentData.sector_social.law.prosecution_office + currentData.sector_social.law.court} />
                  <SectorStat icon={<Scale size={10} className="text-yellow-500"/>} label="Bantuan Hukum" value={currentData.sector_social.law.legal_aid_center} />
                  <SectorStat icon={<TrendingUp size={10} className="text-zinc-400"/>} label="Indeks Korupsi" value={currentData.sector_social.law.corruption_index} />
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* 5. Ekonomi & Geopolitik (Expanded) */}
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-3 w-80 pointer-events-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.2em]">5. Geopolitik & Luar Negeri</h3>
              <span className="text-xs font-black bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded uppercase">{currentData.geopolitics.stance}</span>
            </div>

            {/* Sub-Tabs */}
            <div className="flex gap-1 p-1 bg-zinc-800/50 rounded-lg">
              {(["overview", "orgs", "agreements"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setGeoTab(tab)}
                  className={`flex-1 text-xs font-bold uppercase py-1 rounded-md transition-all ${
                    geoTab === tab ? "bg-zinc-700 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
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
                      <span className="text-xs font-bold text-zinc-500 uppercase">Surplus Dagang</span>
                      <span className="text-sm font-black text-green-400">Rp {currentData.trade.sell_commodity - currentData.trade.buy_commodity} T</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-zinc-500 uppercase">Diplomacy</span>
                      <span className="text-sm font-black text-blue-400">{currentData.geopolitics.international_influence.diplomatic_prestige} IX</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="text-zinc-500">Soft Power</span>
                        <span className="text-indigo-400">{currentData.geopolitics.international_influence.soft_power}%</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${currentData.geopolitics.international_influence.soft_power}%` }} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="text-zinc-500">Hard Power</span>
                        <span className="text-red-400">{currentData.geopolitics.international_influence.hard_power}%</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 transition-all duration-500" style={{ width: `${currentData.geopolitics.international_influence.hard_power}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 scroll-area max-h-[60px] no-scrollbar overflow-y-auto">
                    <span className="text-xs font-bold text-zinc-500 uppercase">Sekutu Utama</span>
                    <div className="flex flex-wrap gap-1">
                      {currentData.geopolitics.allies.map((a, i) => (
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
                    {currentData.geopolitics.international_orgs.map((org, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-zinc-800/40 rounded-lg border border-zinc-700/30">
                        <div className="flex items-center gap-2">
                          <Globe2 size={10} className="text-blue-400"/>
                          <span className="text-xs font-bold text-white">{org.name}</span>
                        </div>
                        <span className={`text-xs font-black px-1.5 py-0.5 rounded ${
                          org.role === "Leader" ? "bg-amber-500/20 text-amber-400" : "bg-zinc-700/50 text-zinc-400"
                        }`}>{org.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {geoTab === "agreements" && (
                <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-right-1 duration-300">
                  <span className="text-xs font-bold text-zinc-500 uppercase">Perjanjian Internasional</span>
                  <div className="flex flex-col gap-1.5">
                    {currentData.geopolitics.agreements.map((agr, i) => (
                      <div key={i} className="flex flex-col gap-1 p-2 bg-zinc-800/40 rounded-lg border border-zinc-700/30">
                        <div className="flex justify-between items-center text-xs font-black">
                          <span className="text-white">{agr.partner}</span>
                          <span className={`text-xs uppercase ${
                            agr.type === "Military" ? "text-red-400" : agr.type === "Trade" ? "text-emerald-400" : "text-blue-400"
                          }`}>{agr.type}</span>
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

          {/* 6. Mineral Kritis & Strategis */}
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 w-72 pointer-events-auto">
            <h3 className="text-xs font-black text-pink-500 uppercase tracking-[0.2em] mb-1">6. Mineral Kritis & Strategis</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Downstream Priority</span>
              <span className="text-xs font-black text-emerald-400 uppercase">Strategic Asset</span>
            </div>
            
            <div className={`grid ${getGridCols(rightWidth)} gap-3`}>
              <SectorStat icon={<Box size={10} className="text-orange-400"/>} label="Nikel" value={currentData.sector_extraction.nickel} />
              <SectorStat icon={<Battery size={10} className="text-cyan-400"/>} label="Litium" value={currentData.sector_extraction.lithium} />
              <SectorStat icon={<Layers size={10} className="text-zinc-400"/>} label="Batubara" value={currentData.sector_extraction.coal} />
              <SectorStat icon={<Pickaxe size={10} className="text-orange-300"/>} label="Tembaga" value={currentData.sector_extraction.copper} />
              <SectorStat icon={<Layers size={10} className="text-blue-200"/>} label="Alumunium" value={currentData.sector_extraction.aluminum} />
            </div>
          </div>

        </div>
      </main>

      {/* 3. FOOTER CAROUSEL & CONTROLS */}
      <footer className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex items-end justify-between z-20">
        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-2 bg-gradient-to-r from-teal-900/40 to-emerald-900/40 border border-teal-800/40 px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-300 hover:from-teal-800/60 transition cursor-pointer w-fit uppercase tracking-wider">
            <Filter className="h-3.5 w-3.5" />
            Filter Region
          </button>
        </div>

        {/* Carousel with Chevrons */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex items-center gap-2 w-full max-w-xl z-30">
          <button 
            onClick={() => scrollByAmount('left')}
            className="p-1 px-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>

          <div ref={scrollRef} className="flex flex-1 gap-6 overflow-x-auto pt-10 pb-2 no-scrollbar">
            {countries.map((c, i) => (
              <button 
                key={i} 
                ref={el => { buttonRefs.current[c.name_en] = el; }}
                onClick={() => setSelectedCountry(c.name_en)}
                className={`relative flex flex-col items-center gap-1 p-2 rounded-xl border transition-all cursor-pointer min-w-[95px] h-[80px] justify-center ${
                  selectedCountry === c.name_en 
                    ? 'bg-amber-500/10 border-amber-500 shadow-md shadow-amber-500/20' 
                    : 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {selectedCountry === c.name_en && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-bold text-xs px-2 py-1 rounded-md shadow-lg font-sans whitespace-nowrap z-30">
                    {c.name_id}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-amber-500" />
                  </div>
                )}
                <span className="text-xl">{c.flag}</span>
                <span className="text-xs font-bold text-zinc-300 text-center line-clamp-2 mt-1 px-1 uppercase tracking-tighter">
                  {c.name_id}
                </span>
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
            {isLoading ? "Memproses..." : "Mulai Simulasi"}
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
    </div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{label}</span>
        <span className="font-bold text-white text-sm leading-tight">{value}</span>
      </div>
    </div>
  );
}

function DetailStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-1.5 text-zinc-500">
        {icon}
        <span className="text-xs font-bold uppercase tracking-tighter">{label}</span>
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

function SectorStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: number }) {
  return (
    <div className="flex flex-col gap-0.5 bg-zinc-800/30 p-1.5 rounded-lg border border-zinc-700/20">
      <div className="flex items-center gap-1.5 text-zinc-500">
        {icon}
        <span className="text-xs font-bold uppercase tracking-tighter truncate">{label}</span>
      </div>
      <span className="text-xs font-black text-zinc-200">{value.toLocaleString()}</span>
    </div>
  );
}