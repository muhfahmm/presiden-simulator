// KONSTANTA KEKUATAN SATUAN
export const INFANTRY_POWER_PER_UNIT = 1;
export const TANK_POWER_PER_UNIT = 250;
export const APC_POWER_PER_UNIT = 100;
export const ARTILLERY_POWER_PER_UNIT = 150;
export const CARRIER_POWER_PER_UNIT = 5000;
export const DESTROYER_POWER_PER_UNIT = 1200;
export const SUBMARINE_POWER_PER_UNIT = 2000;

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

export const calculateTankPower = (count: number): number => {
    return count * TANK_POWER_PER_UNIT;
};

export const calculateApcPower = (count: number): number => {
    return count * APC_POWER_PER_UNIT;
};

export const calculateArtilleryPower = (count: number): number => {
    return count * ARTILLERY_POWER_PER_UNIT;
};

export const calculateCarrierPower = (count: number): number => {
    return count * CARRIER_POWER_PER_UNIT;
};

export const calculateDestroyerPower = (count: number): number => {
    return count * DESTROYER_POWER_PER_UNIT;
};

export const calculateSubmarinePower = (count: number): number => {
    return count * SUBMARINE_POWER_PER_UNIT;
};
