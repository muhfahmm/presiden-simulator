"use client"

import { useState } from "react";
import { X, Activity, TrendingUp, TrendingDown, Info, Factory, Pickaxe, Eye, EyeOff, Truck, Ship, Plane, Zap, Package, Droplet, Bike, Car, Bus, Shield, Anchor, Crosshair, Target } from "lucide-react";
import { 
  mineralKritisRate,
  infrastrukturRate,
  armadaMiliterRate
} from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";

import { VEHICLE_CAPACITIES } from "./perminyakan_data";
import { getVehicleData } from "@/app/database/data/database_kendaraan_bermotor";

interface PerminyakanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerminyakanModal({ isOpen, onClose }: PerminyakanModalProps) {
  const [showProduksi, setShowProduksi] = useState(true);
  const [showKonsumsi, setShowKonsumsi] = useState(true);

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
  const buildingDeltas = buildingData.buildingDeltas;

  // Sync Logic with Deltas
  const currentDataWithDeltas = {
    ...currentData,
    sektor_ekstraksi: { ...currentData.sektor_ekstraksi || {} },
    infrastruktur: { ...currentData.infrastruktur || {} },
  };

  Object.entries(buildingDeltas).forEach(([key, deltaValue]) => {
    if (typeof deltaValue !== 'number' || deltaValue === 0) return;
    if ((mineralKritisRate as any)[key]) {
      const dataKey = (mineralKritisRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] = ((currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] || 0) + deltaValue;
    }
  });

  // Calculate Production (Oil Wells)
  const oilWellMeta = mineralKritisRate["4_sumur_minyak"];
  const countOilWells = currentDataWithDeltas.sektor_ekstraksi.minyak_bumi || 0;
  const totalProduction = countOilWells * oilWellMeta.produksi;

  // Detailed Consumption Logic (Exclusively from Database Baseline)
  const baselineVehicles = getVehicleData(currentData.name_id.toLowerCase().replace(/ /g, "_"));
  
  const motorCount = (baselineVehicles?.sepeda_motor || 0);
  const carCount = (baselineVehicles?.mobil || 0);
  const busCount = (baselineVehicles?.bus || 0);
  const truckCount = (baselineVehicles?.truk || 0);

  const consMotor = motorCount * 12; 
  const consCar = carCount * 28;    
  const consBus = busCount * 145;   
  const consTruck = truckCount * 85; 

  const literPerBarel = 159;
  const consMotorLiter = consMotor * literPerBarel;
  const consCarLiter = consCar * literPerBarel;
  const consBusLiter = consBus * literPerBarel;
  const consTruckLiter = consTruck * literPerBarel;

  const transportConsumption = consMotor + consCar + consBus + consTruck;
  const industryConsumption = (currentDataWithDeltas.sektor_manufaktur?.smelter || 0) * 150; 
  
  // Military Fleet Consumption Logic
  const armada = currentData.armada_militer;
  
  // Armada Darat
  const consTank = (armada.darat?.tank_tempur_utama || 0) * (armadaMiliterRate["2_tank"]?.konsumsi_bahan_bakar || 0);
  const consAPC = (armada.darat?.apc_ifv || 0) * (armadaMiliterRate["3_apc"]?.konsumsi_bahan_bakar || 0);
  const consArtileri = (armada.darat?.artileri_berat || 0) * (armadaMiliterRate["4_artileri"]?.konsumsi_bahan_bakar || 0);
  const consMLRS = (armada.darat?.sistem_peluncur_roket || 0) * (armadaMiliterRate["5_roket_peluncur"]?.konsumsi_bahan_bakar || 0);
  const consSAM = (armada.darat?.pertahanan_udara_mobile || 0) * (armadaMiliterRate["6_misil_sam"]?.konsumsi_bahan_bakar || 0);
  const consDarat = consTank + consAPC + consArtileri + consMLRS + consSAM;

  // Armada Laut
  const consInduk = (armada.laut?.kapal_induk || 0) * (armadaMiliterRate["8_kapal_induk"]?.konsumsi_bahan_bakar || 0);
  const consIndukNuklir = (armada.laut?.kapal_induk_nuklir || 0) * (armadaMiliterRate["8b_kapal_induk_nuklir"]?.konsumsi_bahan_bakar || 0);
  const consDestroyer = (armada.laut?.kapal_destroyer || 0) * (armadaMiliterRate["9_kapal_perusak"]?.konsumsi_bahan_bakar || 0);
  const consKorvet = (armada.laut?.kapal_korvet || 0) * (armadaMiliterRate["10_kapal_korvet"]?.konsumsi_bahan_bakar || 0);
  const consSubN = (armada.laut?.kapal_selam_nuklir || 0) * (armadaMiliterRate["11_kapal_selam_nuklir"]?.konsumsi_bahan_bakar || 0);
  const consSubR = (armada.laut?.kapal_selam_regular || 0) * (armadaMiliterRate["12_kapal_selam_reguler"]?.konsumsi_bahan_bakar || 0);
  const consRanjau = (armada.laut?.kapal_ranjau || 0) * (armadaMiliterRate["13_penyapu_ranjau"]?.konsumsi_bahan_bakar || 0);
  const consLogLaut = (armada.laut?.kapal_logistik || 0) * (armadaMiliterRate["14_kapal_logistik"]?.konsumsi_bahan_bakar || 0);
  const consLaut = consInduk + consIndukNuklir + consDestroyer + consKorvet + consSubN + consSubR + consRanjau + consLogLaut;

  // Armada Udara
  const consStealth = (armada.udara?.jet_tempur_siluman || 0) * (armadaMiliterRate["15_jet_tempur_siluman"]?.konsumsi_bahan_bakar || 0);
  const consIntercept = (armada.udara?.jet_tempur_interceptor || 0) * (armadaMiliterRate["16_jet_pencegat"]?.konsumsi_bahan_bakar || 0);
  const consBomber = (armada.udara?.pesawat_pengebom || 0) * (armadaMiliterRate["17_pesawat_pembom"]?.konsumsi_bahan_bakar || 0);
  const consHeli = (armada.udara?.helikopter_serang || 0) * (armadaMiliterRate["18_helikopter_serbu"]?.konsumsi_bahan_bakar || 0);
  const consIntai = (armada.udara?.pesawat_pengintai || 0) * (armadaMiliterRate["19_pesawat_intai"]?.konsumsi_bahan_bakar || 0);
  const consUAV = (armada.udara?.drone_intai_uav || 0) * (armadaMiliterRate["20_drone_intai"]?.konsumsi_bahan_bakar || 0);
  const consKamikaze = (armada.udara?.drone_kamikaze || 0) * (armadaMiliterRate["21_drone_kamikaze"]?.konsumsi_bahan_bakar || 0);
  const consAngkut = (armada.udara?.pesawat_angkut || 0) * (armadaMiliterRate["22_transport_udara"]?.konsumsi_bahan_bakar || 0);
  const consUdara = consStealth + consIntercept + consBomber + consHeli + consIntai + consUAV + consKamikaze + consAngkut;

  const totalMilitaryConsumption = consDarat + consLaut + consUdara;
  const totalConsumption = transportConsumption + industryConsumption + totalMilitaryConsumption;
  const surplus = totalProduction - totalConsumption;

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl">
              <Droplet className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Perminyakan Nasional</h2>
              <div className="flex items-center gap-3 mt-0.5">
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">National Petroleum Control Center</p>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-md">
                   <Info size={10} className="text-amber-500" />
                   <span className="text-[9px] text-amber-500/90 font-black tracking-wider uppercase">1 Barel = 159 Liter</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
        </div>

        {/* Live Dashboard Grid */}
        <div className="px-8 py-8 bg-zinc-900/10 border-b border-zinc-800/50 space-y-6">


          {/* MAIN SUMMARY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-amber-500/30 shadow-amber-500/10 shadow-lg">
              <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <Package className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Total Produksi</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">
                  {totalProduction.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal ml-1">Barel /hari</span>
                </p>
                <p className="text-[10px] font-bold text-amber-500/80 mt-1 uppercase tracking-wider">
                  {(totalProduction * literPerBarel).toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all hover:border-rose-500/30 shadow-rose-500/10 shadow-lg">
              <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                <Activity className="h-8 w-8 text-rose-500" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Total Konsumsi</p>
                <p className="text-3xl font-black text-white leading-tight mt-1">
                  {totalConsumption.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal ml-1">Barel /hari</span>
                </p>
                <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                  {(totalConsumption * literPerBarel).toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                </p>
              </div>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 p-6 rounded-[32px] flex items-center gap-6 group hover:bg-zinc-900 transition-all ${surplus >= 0 ? "hover:border-emerald-500/30 shadow-emerald-500/10" : "hover:border-rose-600/30 shadow-rose-600/10"} shadow-lg relative overflow-hidden`}>
              <div className={`p-4 rounded-2xl border ${surplus >= 0 ? "bg-emerald-500/10 border-emerald-500/20" : "bg-rose-500/10 border-rose-500/20"}`}>
                {surplus >= 0 ? <TrendingUp className="h-8 w-8 text-emerald-500" /> : <TrendingDown className="h-8 w-8 text-rose-500" />}
              </div>
              <div className="relative z-10">
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Neraca Perminyakan</p>
                <p className={`text-3xl font-black leading-tight mt-1 ${surplus >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                  {surplus.toLocaleString('id-ID')} <span className="text-xs font-normal ml-1 opacity-50">Barel /hari</span>
                </p>
                <p className={`text-[10px] font-bold mt-1 uppercase tracking-wider ${surplus >= 0 ? "text-emerald-500/80" : "text-rose-500/80"}`}>
                  {(surplus * literPerBarel).toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Produksi Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-amber-500/10 rounded-lg"><Pickaxe size={16} className="text-amber-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Sektor Produksi Minyak</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-3xl group hover:bg-zinc-900 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-tight">Sumur Minyak Bumi</h4>
                      <p className="text-xs text-zinc-500 font-medium uppercase">Ekstraksi SDA Minyak</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white">{totalProduction.toLocaleString('id-ID')} <span className="text-xs text-zinc-500 font-normal">Barel /hari</span></p>
                    <p className="text-sm font-bold text-amber-500/80 mt-1 uppercase tracking-wider">
                      {(totalProduction * literPerBarel).toLocaleString('id-ID')} <span className="opacity-70 ml-0.5 text-[10px]">Liter /hari</span>
                    </p>
                    <p className="text-[10px] text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded-md mt-1 italic uppercase tracking-widest inline-block">{countOilWells} Units Active</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                  <div className="h-full bg-amber-500/80 rounded-full" style={{ width: countOilWells > 0 ? '100%' : '0%' }}></div>
                </div>
              </div>
            </div>

            {/* Konsumsi Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-2">
                <div className="p-1.5 bg-rose-500/10 rounded-lg"><Activity size={16} className="text-rose-500" /></div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Sektor Konsumsi</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="space-y-3">
                <div className="bg-zinc-900/40 border border-zinc-800/50 p-4 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck size={18} className="text-rose-500" />
                    <span className="text-sm font-bold text-white uppercase tracking-tight">Transportasi & Logistik</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-zinc-950/40 p-3 rounded-2xl border border-zinc-800/30 group hover:border-rose-500/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <Bike size={14} className="text-zinc-500 group-hover:text-rose-400" />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Motor <span className="text-[8px] opacity-40 ml-1">({VEHICLE_CAPACITIES.RODA_2} Barel)</span></span>
                      </div>
                      <p className="text-lg font-black text-white leading-tight">{consMotor.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 font-normal">Barel /hari</span></p>
                      <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                        {consMotorLiter.toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                      </p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1 opacity-80">{motorCount.toLocaleString('id-ID')} <span className="text-[8px] opacity-60">Unit</span></p>
                    </div>

                    <div className="bg-zinc-950/40 p-3 rounded-2xl border border-zinc-800/30 group hover:border-rose-500/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <Car size={14} className="text-zinc-500 group-hover:text-rose-400" />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Mobil <span className="text-[8px] opacity-40 ml-1">({VEHICLE_CAPACITIES.RODA_4} Barel)</span></span>
                      </div>
                      <p className="text-lg font-black text-white leading-tight">{consCar.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 font-normal">Barel /hari</span></p>
                      <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                        {consCarLiter.toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                      </p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1 opacity-80">{carCount.toLocaleString('id-ID')} <span className="text-[8px] opacity-60">Unit</span></p>
                    </div>

                    <div className="bg-zinc-950/40 p-3 rounded-2xl border border-zinc-800/30 group hover:border-rose-500/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <Truck size={14} className="text-zinc-500 group-hover:text-rose-400" />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Truk <span className="text-[8px] opacity-40 ml-1">({VEHICLE_CAPACITIES.TRUK} Barel)</span></span>
                      </div>
                      <p className="text-lg font-black text-white leading-tight">{consTruck.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 font-normal">Barel /hari</span></p>
                      <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                        {consTruckLiter.toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                      </p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1 opacity-80">{truckCount.toLocaleString('id-ID')} <span className="text-[8px] opacity-60">Unit</span></p>
                    </div>

                    <div className="bg-zinc-950/40 p-3 rounded-2xl border border-zinc-800/30 group hover:border-rose-500/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <Bus size={14} className="text-zinc-500 group-hover:text-rose-400" />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Bus <span className="text-[8px] opacity-40 ml-1">({VEHICLE_CAPACITIES.BUS} Barel)</span></span>
                      </div>
                      <p className="text-lg font-black text-white leading-tight">{consBus.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 font-normal">Barel /hari</span></p>
                      <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                        {consBusLiter.toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                      </p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1 opacity-80">{busCount.toLocaleString('id-ID')} <span className="text-[8px] opacity-60">Unit</span></p>
                    </div>
                  </div>
                </div>

                {/* MILITARY SECTOR CONSUMPTION */}
                <div className="bg-zinc-900/40 border border-zinc-800/50 p-4 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4 px-2">
                    <Shield size={18} className="text-rose-500" />
                    <span className="text-sm font-bold text-white uppercase tracking-tight">Sektor Pertahanan & Keamanan</span>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Armada Darat */}
                    <div className="bg-zinc-950/40 p-4 rounded-3xl border border-zinc-800/30 group hover:border-rose-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <Target size={20} className="text-zinc-500 group-hover:text-rose-400" />
                        <span className="text-[11px] font-black text-rose-500 uppercase tracking-widest">Armada Darat</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4">
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Barak Militer</span>
                          <span className="font-bold text-white">{(armada.barak || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Main Battle Tank</span>
                          <span className="font-bold text-white">{(armada.darat?.tank_tempur_utama || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>APC / IFV</span>
                          <span className="font-bold text-white">{(armada.darat?.apc_ifv || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Artileri Berat</span>
                          <span className="font-bold text-white">{(armada.darat?.artileri_berat || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>MLRS Rocket</span>
                          <span className="font-bold text-white">{(armada.darat?.sistem_peluncur_roket || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Mobile SAM</span>
                          <span className="font-bold text-white">{(armada.darat?.pertahanan_udara_mobile || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kendaraan Taktis</span>
                          <span className="font-bold text-white">{(armada.darat?.kendaraan_taktis || 0).toLocaleString('id-ID')}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-zinc-800/50">
                        <p className="text-lg font-black text-white leading-tight">{consDarat.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 font-normal">Barel /hari</span></p>
                        <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                          {(consDarat * literPerBarel).toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                        </p>
                      </div>
                    </div>

                    {/* Armada Laut */}
                    <div className="bg-zinc-950/40 p-4 rounded-3xl border border-zinc-800/30 group hover:border-rose-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <Anchor size={20} className="text-zinc-500 group-hover:text-rose-400" />
                        <span className="text-[11px] font-black text-rose-500 uppercase tracking-widest">Armada Laut</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4">
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kapal Induk</span>
                          <span className="font-bold text-white">{(armada.laut?.kapal_induk || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kapal Induk Nuklir</span>
                          <span className="font-bold text-white">{(armada.laut?.kapal_induk_nuklir || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kapal Destroyer</span>
                          <span className="font-bold text-white">{(armada.laut?.kapal_destroyer || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kapal Korvet</span>
                          <span className="font-bold text-white">{(armada.laut?.kapal_korvet || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kapal Selam Nuklir</span>
                          <span className="font-bold text-white">{(armada.laut?.kapal_selam_nuklir || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kapal Selam Reguler</span>
                          <span className="font-bold text-white">{(armada.laut?.kapal_selam_regular || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kapal Ranjau</span>
                          <span className="font-bold text-white">{(armada.laut?.kapal_ranjau || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Kapal Logistik</span>
                          <span className="font-bold text-white">{(armada.laut?.kapal_logistik || 0).toLocaleString('id-ID')}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-zinc-800/50">
                        <p className="text-lg font-black text-white leading-tight">{consLaut.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 font-normal">Barel /hari</span></p>
                        <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                          {(consLaut * literPerBarel).toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                        </p>
                      </div>
                    </div>

                    {/* Armada Udara */}
                    <div className="bg-zinc-950/40 p-4 rounded-3xl border border-zinc-800/30 group hover:border-rose-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <Crosshair size={20} className="text-zinc-500 group-hover:text-rose-400" />
                        <span className="text-[11px] font-black text-rose-500 uppercase tracking-widest">Armada Udara</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4">
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Jet Stealth</span>
                          <span className="font-bold text-white">{(armada.udara?.jet_tempur_siluman || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Jet Interceptor</span>
                          <span className="font-bold text-white">{(armada.udara?.jet_tempur_interceptor || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Pesawat Pengebom</span>
                          <span className="font-bold text-white">{(armada.udara?.pesawat_pengebom || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Helikopter Serang</span>
                          <span className="font-bold text-white">{(armada.udara?.helikopter_serang || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Pesawat Pengintai</span>
                          <span className="font-bold text-white">{(armada.udara?.pesawat_pengintai || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Drone UAV</span>
                          <span className="font-bold text-white">{(armada.udara?.drone_intai_uav || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Drone Kamikaze</span>
                          <span className="font-bold text-white">{(armada.udara?.drone_kamikaze || 0).toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-400">
                          <span>Pesawat Angkut</span>
                          <span className="font-bold text-white">{(armada.udara?.pesawat_angkut || 0).toLocaleString('id-ID')}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-zinc-800/50">
                        <p className="text-lg font-black text-white leading-tight">{consUdara.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 font-normal">Barel /hari</span></p>
                        <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                          {(consUdara * literPerBarel).toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-800/50 p-4 rounded-3xl flex items-center justify-between group hover:bg-zinc-900/60 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800/50"><Factory size={16} className="text-zinc-500 group-hover:text-rose-500" /></div>
                    <div>
                      <span className="text-sm font-bold text-white uppercase tracking-tight block leading-none">Industri Manufaktur</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium mt-1 inline-block">Heavy Machine & Smelting</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white">{industryConsumption.toLocaleString('id-ID')} <span className="text-xs text-zinc-600 font-normal">Barel /hari</span></p>
                    <p className="text-[10px] font-bold text-rose-500/80 mt-1 uppercase tracking-wider">
                      {(industryConsumption * literPerBarel).toLocaleString('id-ID')} <span className="opacity-70 ml-0.5">Liter /hari</span>
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-900/20 border border-zinc-800/50 p-4 rounded-3xl flex items-center justify-between opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800/50"><Plane size={16} className="text-zinc-500" /></div>
                    <span className="text-sm font-bold text-zinc-400 uppercase tracking-tight">Aviasi & Penerbangan</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest italic bg-zinc-900 px-2 py-0.5 rounded-md">In Development</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
