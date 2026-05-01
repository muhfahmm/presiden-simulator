/**
 * GeoDistanceDatabase.ts
 * Realistic shipping duration matrix between global regions.
 */

export type Continent = 'ASEAN' | 'ASIA_NON_ASEAN' | 'EUROPE' | 'AFRICA' | 'NORTH_AMERICA' | 'SOUTH_AMERICA' | 'OCEANIA';

// Matrix representing base travel days between regions
// Rows: Origin, Columns: Destination
// Note: This is an approximation for a strategy game.
export const TravelMatrix: Record<Continent, Record<Continent, [number, number]>> = {
    'ASEAN': {
        'ASEAN': [2, 3],
        'ASIA_NON_ASEAN': [5, 8],
        'EUROPE': [18, 25],
        'AFRICA': [20, 30],
        'NORTH_AMERICA': [25, 35],
        'SOUTH_AMERICA': [30, 45],
        'OCEANIA': [7, 12]
    },
    'ASIA_NON_ASEAN': {
        'ASEAN': [5, 8],
        'ASIA_NON_ASEAN': [3, 6],
        'EUROPE': [14, 20],
        'AFRICA': [18, 28],
        'NORTH_AMERICA': [15, 25],
        'SOUTH_AMERICA': [35, 50],
        'OCEANIA': [10, 15]
    },
    'EUROPE': {
        'ASEAN': [18, 25],
        'ASIA_NON_ASEAN': [14, 20],
        'EUROPE': [2, 5],
        'AFRICA': [7, 14],
        'NORTH_AMERICA': [10, 18],
        'SOUTH_AMERICA': [20, 30],
        'OCEANIA': [25, 40]
    },
    'AFRICA': {
        'ASEAN': [20, 30],
        'ASIA_NON_ASEAN': [18, 28],
        'EUROPE': [7, 14],
        'AFRICA': [3, 8],
        'NORTH_AMERICA': [15, 25],
        'SOUTH_AMERICA': [12, 22],
        'OCEANIA': [25, 35]
    },
    'NORTH_AMERICA': {
        'ASEAN': [25, 35],
        'ASIA_NON_ASEAN': [15, 25],
        'EUROPE': [10, 18],
        'AFRICA': [15, 25],
        'NORTH_AMERICA': [2, 6],
        'SOUTH_AMERICA': [10, 18],
        'OCEANIA': [20, 30]
    },
    'SOUTH_AMERICA': {
        'ASEAN': [30, 45],
        'ASIA_NON_ASEAN': [35, 50],
        'EUROPE': [20, 30],
        'AFRICA': [12, 22],
        'NORTH_AMERICA': [10, 18],
        'SOUTH_AMERICA': [3, 7],
        'OCEANIA': [25, 40]
    },
    'OCEANIA': {
        'ASEAN': [7, 12],
        'ASIA_NON_ASEAN': [10, 15],
        'EUROPE': [25, 40],
        'AFRICA': [25, 35],
        'NORTH_AMERICA': [20, 30],
        'SOUTH_AMERICA': [25, 40],
        'OCEANIA': [2, 5]
    }
};

/**
 * Maps a country name to its designated Continent/Region.
 */
export const getCountryRegion = (countryName: string): Continent => {
    const name = countryName.trim().toLowerCase();
    
    const asean = ["singapura", "malaysia", "thailand", "filipina", "brunei", "vietnam", "laos", "kamboja", "myanmar", "timor leste", "indonesia"];
    if (asean.includes(name)) return 'ASEAN';

    // We can use the existing continent database for mapping
    const { asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } = require("@/app/database/data/semua_fitur_negara/0_profiles/index");

    if (asiaCountries.some((c: any) => (c.name_id || '').toLowerCase() === name || (c.name_en || '').toLowerCase() === name)) return 'ASIA_NON_ASEAN';
    if (eropaCountries.some((c: any) => (c.name_id || '').toLowerCase() === name || (c.name_en || '').toLowerCase() === name)) return 'EUROPE';
    if (afrikaCountries.some((c: any) => (c.name_id || '').toLowerCase() === name || (c.name_en || '').toLowerCase() === name)) return 'AFRICA';
    if (naCountries.some((c: any) => (c.name_id || '').toLowerCase() === name || (c.name_en || '').toLowerCase() === name)) return 'NORTH_AMERICA';
    if (saCountries.some((c: any) => (c.name_id || '').toLowerCase() === name || (c.name_en || '').toLowerCase() === name)) return 'SOUTH_AMERICA';
    if (oceaniaCountries.some((c: any) => (c.name_id || '').toLowerCase() === name || (c.name_en || '').toLowerCase() === name)) return 'OCEANIA';

    return 'ASIA_NON_ASEAN'; // Default
};

/**
 * Calculates the base range of days between two countries.
 */
export const getBaseShippingRange = (originCountry: string, destCountry: string): [number, number] => {
    const originRegion = getCountryRegion(originCountry);
    const destRegion = getCountryRegion(destCountry);
    
    return TravelMatrix[originRegion][destRegion] || [10, 20];
};

