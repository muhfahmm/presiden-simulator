// KONSTANTA KEKUATAN SATUAN
export const INFANTRY_POWER_PER_UNIT = 1; // Per 10.000 Infanteri
export const TANK_POWER_PER_UNIT = 250;
export const APC_POWER_PER_UNIT = 100;
export const ARTILLERY_POWER_PER_UNIT = 150;
export const ROCKET_POWER_PER_UNIT = 400;
export const SAM_POWER_PER_UNIT = 300;
export const TACTICAL_POWER_PER_UNIT = 50;

export const CARRIER_POWER_PER_UNIT = 5000;
export const DESTROYER_POWER_PER_UNIT = 1200;
export const CORVETTE_POWER_PER_UNIT = 800;
export const SUBMARINE_POWER_PER_UNIT = 2000; // Nuclear
export const REGULAR_SUB_POWER_PER_UNIT = 1000;
export const MINE_SHIP_POWER_PER_UNIT = 300;
export const LOGISTICS_POWER_PER_UNIT = 200;

export const STEALTH_POWER_PER_UNIT = 1500;
export const INTERCEPTOR_POWER_PER_UNIT = 800;
export const BOMBER_POWER_PER_UNIT = 2500;
export const ATTACK_HELI_POWER_PER_UNIT = 600;
export const RECON_POWER_PER_UNIT = 200;
export const UAV_POWER_PER_UNIT = 100;
export const KAMIKAZE_POWER_PER_UNIT = 150;
export const TRANSPORT_POWER_PER_UNIT = 300;


/**
 * Melakukan kalkulasi total infanteri berdasarkan jumlah barak militer.
 * 1 Barak = 10.000 Infanteri
 * 
 * @param barracksCount Jumlah barak yang terbangun
 * @returns Total infanteri
 */
export const calculateTotalInfantry = (barracksCount: number): number => {
    return barracksCount * 10000;
};

/**
 * Melakukan kalkulasi total kekuatan tempur infanteri.
 * Kekuatan per 10.000 infanteri = 1
 * 
 * @param barracksCount Jumlah barak yang terbangun
 * @returns Total kekuatan tempur
 */
export const calculateInfantryPower = (barracksCount: number): number => {
    return barracksCount * INFANTRY_POWER_PER_UNIT;
};

export const calculatePrisonCapacity = (count: number): number => {
    return count * 500;
};

export const calculateArmoryCapacity = (count: number): number => {
    return count * 1000;
};

export const calculateTankHangarCapacity = (count: number): number => {
    return count * 100;
};

export const calculateAcademyCapacity = (count: number): number => {
    return count * 1000;
};

export const calculateAirBaseCapacity = (count: number): number => {
    return count * 50;
};

export const calculateNavalBaseCapacity = (count: number): number => {
    return count * 25;
};

export const calculateTankPower = (count: number): number => count * TANK_POWER_PER_UNIT;
export const calculateApcPower = (count: number): number => count * APC_POWER_PER_UNIT;
export const calculateArtilleryPower = (count: number): number => count * ARTILLERY_POWER_PER_UNIT;
export const calculateRocketPower = (count: number): number => count * ROCKET_POWER_PER_UNIT;
export const calculateSamPower = (count: number): number => count * SAM_POWER_PER_UNIT;
export const calculateTacticalPower = (count: number): number => count * TACTICAL_POWER_PER_UNIT;

export const calculateCarrierPower = (count: number): number => count * CARRIER_POWER_PER_UNIT;
export const calculateDestroyerPower = (count: number): number => count * DESTROYER_POWER_PER_UNIT;
export const calculateCorvettePower = (count: number): number => count * CORVETTE_POWER_PER_UNIT;
export const calculateSubmarinePower = (count: number): number => count * SUBMARINE_POWER_PER_UNIT;
export const calculateRegularSubPower = (count: number): number => count * REGULAR_SUB_POWER_PER_UNIT;
export const calculateMineShipPower = (count: number): number => count * MINE_SHIP_POWER_PER_UNIT;
export const calculateLogisticsPower = (count: number): number => count * LOGISTICS_POWER_PER_UNIT;

export const calculateStealthPower = (count: number): number => count * STEALTH_POWER_PER_UNIT;
export const calculateInterceptorPower = (count: number): number => count * INTERCEPTOR_POWER_PER_UNIT;
export const calculateBomberPower = (count: number): number => count * BOMBER_POWER_PER_UNIT;
export const calculateAttackHeliPower = (count: number): number => count * ATTACK_HELI_POWER_PER_UNIT;
export const calculateReconPower = (count: number): number => count * RECON_POWER_PER_UNIT;
export const calculateUavPower = (count: number): number => count * UAV_POWER_PER_UNIT;
export const calculateKamikazePower = (count: number): number => count * KAMIKAZE_POWER_PER_UNIT;
export const calculateTransportPower = (count: number): number => count * TRANSPORT_POWER_PER_UNIT;


/**
 * Menghitung total kekuatan militer gabungan (Darat, Laut, Udara).
 * 
 * @param armadaData Data armada_militer dari objek negara
 * @param deltas (Optional) Data buildingDeltas untuk menghitung bangunan yang baru selesai/sedang dikonstruksi
 * @returns Object berisi total kekuatan masing-masing matra dan total gabungan
 */
export const calculateTotalMilitaryPower = (armadaData: any, deltas: Record<string, any> = {}) => {
  if (!armadaData) return { darat: 0, laut: 0, udara: 0, total: 0 };

  const totalDarat =
    ((armadaData.barak || 0) + (deltas["barak"] || 0)) * INFANTRY_POWER_PER_UNIT +
    (armadaData.darat?.tank_tempur_utama || 0) * TANK_POWER_PER_UNIT +
    (armadaData.darat?.apc_ifv || 0) * APC_POWER_PER_UNIT +
    (armadaData.darat?.artileri_berat || 0) * ARTILLERY_POWER_PER_UNIT +
    (armadaData.darat?.sistem_peluncur_roket || 0) * ROCKET_POWER_PER_UNIT +
    (armadaData.darat?.pertahanan_udara_mobile || 0) * SAM_POWER_PER_UNIT +
    (armadaData.darat?.kendaraan_taktis || 0) * TACTICAL_POWER_PER_UNIT;

  const totalLaut =
    (armadaData.laut?.kapal_induk || 0) * CARRIER_POWER_PER_UNIT +
    (armadaData.laut?.kapal_destroyer || 0) * DESTROYER_POWER_PER_UNIT +
    (armadaData.laut?.kapal_korvet || 0) * CORVETTE_POWER_PER_UNIT +
    (armadaData.laut?.kapal_selam_nuklir || 0) * SUBMARINE_POWER_PER_UNIT +
    (armadaData.laut?.kapal_selam_regular || 0) * REGULAR_SUB_POWER_PER_UNIT +
    (armadaData.laut?.kapal_ranjau || 0) * MINE_SHIP_POWER_PER_UNIT +
    (armadaData.laut?.kapal_logistik || 0) * LOGISTICS_POWER_PER_UNIT;

  const totalUdara =
    (armadaData.udara?.jet_tempur_siluman || 0) * STEALTH_POWER_PER_UNIT +
    (armadaData.udara?.jet_tempur_interceptor || 0) * INTERCEPTOR_POWER_PER_UNIT +
    (armadaData.udara?.pesawat_pengebom || 0) * BOMBER_POWER_PER_UNIT +
    (armadaData.udara?.helikopter_serang || 0) * ATTACK_HELI_POWER_PER_UNIT +
    (armadaData.udara?.pesawat_pengintai || 0) * RECON_POWER_PER_UNIT +
    (armadaData.udara?.drone_intai_uav || 0) * UAV_POWER_PER_UNIT +
    (armadaData.udara?.drone_kamikaze || 0) * KAMIKAZE_POWER_PER_UNIT +
    (armadaData.udara?.pesawat_angkut || 0) * TRANSPORT_POWER_PER_UNIT;

  return {
    darat: totalDarat,
    laut: totalLaut,
    udara: totalUdara,
    total: totalDarat + totalLaut + totalUdara
  };
};

