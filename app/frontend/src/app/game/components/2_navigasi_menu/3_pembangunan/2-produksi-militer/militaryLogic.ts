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

// KONSTANTA KONSUMSI LISTRIK (MW per Unit Bangunan) - Sesuai dengan 2_konsumsi_listrik.ts
export const PRISON_POWER = 2;
export const BARRACKS_POWER = 5;
export const ARMORY_POWER = 2;
export const TANK_HANGAR_POWER = 5;
export const ACADEMY_POWER = 10;
export const COMMAND_CENTER_POWER = 15;
export const AIRBASE_POWER = 30;
export const NAVALBASE_POWER = 35;
export const SPACE_PROGRAM_POWER = 80;
export const CYBER_DEFENSE_POWER = 5; // Per point (pertahanan_siber * 5)
export const INTEL_POWER = 10; // Per point (intelijen * 10)
export const NUCLEAR_SYSTEM_POWER = 50;
export const DRONE_FACTORY_POWER = 5.0;
export const AMMO_FACTORY_POWER = 8.0;
export const VEHICLE_FACTORY_POWER = 20.0;
export const HEAVY_WEAPON_FACTORY_POWER = 25.0;

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
 * Melakukan kalkulasi total konsumsi listrik sektor militer.
 * 
 * @returns Total konsumsi listrik dalam MW
 */
export const calculateMilitaryPowerConsumption = (
    sektor_pertahanan: {
        penjara: number;
        gudang_senjata: number;
        hangar_tank: number;
        akademi_militer: number;
        pusat_komando: number;
        pangkalan_udara: number;
        pangkalan_laut: number;
        program_luar_angkasa: number;
        pertahanan_siber: number;
    },
    pabrik_militer: {
        pabrik_drone_kamikaze: number;
        pabrik_amunisi: number;
        pabrik_kendaraan_tempur: number;
        pabrik_senjata_berat: number;
    },
    barak: number,
    status_nuklir: boolean
): number => {
    let total = 0;
    
    // Sektor Pertahanan
    total += sektor_pertahanan.penjara * PRISON_POWER;
    total += sektor_pertahanan.gudang_senjata * ARMORY_POWER;
    total += sektor_pertahanan.hangar_tank * TANK_HANGAR_POWER;
    total += sektor_pertahanan.akademi_militer * ACADEMY_POWER;
    total += sektor_pertahanan.pusat_komando * COMMAND_CENTER_POWER;
    total += sektor_pertahanan.pangkalan_udara * AIRBASE_POWER;
    total += sektor_pertahanan.pangkalan_laut * NAVALBASE_POWER;
    total += sektor_pertahanan.program_luar_angkasa * SPACE_PROGRAM_POWER;
    total += sektor_pertahanan.pertahanan_siber * CYBER_DEFENSE_POWER; // Progress based
    total += 0; // Placeholder for other management items if needed
    
    // Pabrik Militer
    total += pabrik_militer.pabrik_drone_kamikaze * DRONE_FACTORY_POWER;
    total += pabrik_militer.pabrik_amunisi * AMMO_FACTORY_POWER;
    total += pabrik_militer.pabrik_kendaraan_tempur * VEHICLE_FACTORY_POWER;
    total += pabrik_militer.pabrik_senjata_berat * HEAVY_WEAPON_FACTORY_POWER;
    
    // Others
    total += barak * BARRACKS_POWER;
    if (status_nuklir) total += NUCLEAR_SYSTEM_POWER;
    
    return total;
};
