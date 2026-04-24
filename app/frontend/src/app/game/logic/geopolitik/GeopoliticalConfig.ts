/**
 * GeopoliticalConfig: Central source of truth for organization metadata.
 * Includes membership fees and other strategic parameters.
 */
export const GEOPOLITICAL_CONFIG = {
    un: {
        imf: { id: "imf", fee_type: "percentage", fee: 0.0025 },
        world_bank: { id: "world_bank", fee_type: "flat", fee: 2500000 },
        interpol: { id: "interpol", fee_type: "flat", fee: 250000 },
        who: { id: "who", fee_type: "flat", fee: 100000 },
        unesco: { id: "unesco", fee_type: "flat", fee: 200000 },
        wto: { id: "wto", fee_type: "flat", fee: 500000 },
        ilo: { id: "ilo", fee_type: "flat", fee: 100000 },
        fao: { id: "fao", fee_type: "flat", fee: 250000 },
        icao: { id: "icao", fee_type: "flat", fee: 500000 },
        imo: { id: "imo", fee_type: "flat", fee: 500000 },
        itu: { id: "itu", fee_type: "flat", fee: 250000 },
        wmo: { id: "wmo", fee_type: "flat", fee: 150000 }
    },
    regional: {
        asean: { id: "asean", fee: 125000000 },
        eu: { id: "eu", fee: 250000000 },
        arab_league: { id: "arab_league", fee: 150000000 },
        au: { id: "au", fee: 100000000 },
        nato: { id: "nato", fee: 375000000 },
        oic: { id: "oic", fee: 50000000 },
        brics: { id: "brics", fee: 75000000 },
        opec: { id: "opec", fee: 100000000 },
        g20: { id: "g20", fee: 25000000 },
        apec: { id: "apec", fee: 40000000 },
        sco: { id: "sco", fee: 60000000 },
        oas: { id: "oas", fee: 30000000 },
        gcc: { id: "gcc", fee: 80000000 },
        mercosur: { id: "mercosur", fee: 35000000 },
        commonwealth: { id: "commonwealth", fee: 20000000 },
        g7: { id: "g7", fee: 100000000 },
        quad: { id: "quad", fee: 50000000 },
        oecd: { id: "oecd", fee: 45000000 }
    }
};

export type UNOrgId = keyof typeof GEOPOLITICAL_CONFIG.un;
export type RegionalOrgId = keyof typeof GEOPOLITICAL_CONFIG.regional;

/**
 * Utility to get fee for any organization.
 */
export const getOrgFee = (orgId: string, currentCash: number = 0): number => {
    const unOrg = GEOPOLITICAL_CONFIG.un[orgId as UNOrgId];
    if (unOrg) {
        if (unOrg.fee_type === "percentage") {
            return Math.floor(currentCash * (unOrg.fee as number));
        }
        return unOrg.fee as number;
    }

    const regionalOrg = GEOPOLITICAL_CONFIG.regional[orgId as RegionalOrgId];
    if (regionalOrg) {
        return regionalOrg.fee;
    }

    return 0;
};
