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
export const AMMO_FACTORY_POWER = 8.0;

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
        pusat_komando: number;
        pangkalan_udara: number;
        pangkalan_laut: number;
        program_luar_angkasa: number;
        pertahanan_siber: number;
    },
    pabrik_militer: {
        pabrik_amunisi: number;
    },
    barak: number,
    status_nuklir: boolean
): number => {
    let total = 0;
    
    // Sektor Pertahanan
    total += sektor_pertahanan.penjara * PRISON_POWER;
    total += sektor_pertahanan.gudang_senjata * ARMORY_POWER;
    total += sektor_pertahanan.hangar_tank * TANK_HANGAR_POWER;
    total += sektor_pertahanan.pusat_komando * COMMAND_CENTER_POWER;
    total += sektor_pertahanan.pangkalan_udara * AIRBASE_POWER;
    total += sektor_pertahanan.pangkalan_laut * NAVALBASE_POWER;
    total += sektor_pertahanan.program_luar_angkasa * SPACE_PROGRAM_POWER;
    total += sektor_pertahanan.pertahanan_siber * CYBER_DEFENSE_POWER; // Progress based
    total += 0; // Placeholder for other management items if needed
    
    // Pabrik Militer
    total += pabrik_militer.pabrik_amunisi * AMMO_FACTORY_POWER;
    
    // Others
    total += barak * BARRACKS_POWER;
    if (status_nuklir) total += NUCLEAR_SYSTEM_POWER;
    
    return total;
};
