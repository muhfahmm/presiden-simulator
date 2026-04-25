/**
 * GeopoliticalConfig: Central source of truth for organization metadata.
 * Includes membership fees and other strategic parameters.
 */
export const GEOPOLITICAL_CONFIG = {
    un: {
        imf: { id: "imf", fee_type: "flat", fee: 7500000 },
        world_bank: { id: "world_bank", fee_type: "flat", fee: 5000000 },
        interpol: { id: "interpol", fee_type: "flat", fee: 3000000 },
        who: { id: "who", fee_type: "flat", fee: 2500000 },
        unesco: { id: "unesco", fee_type: "flat", fee: 3000000 },
        wto: { id: "wto", fee_type: "flat", fee: 4000000 },
        ilo: { id: "ilo", fee_type: "flat", fee: 2500000 },
        fao: { id: "fao", fee_type: "flat", fee: 3000000 },
        icao: { id: "icao", fee_type: "flat", fee: 4000000 },
        imo: { id: "imo", fee_type: "flat", fee: 4000000 },
        itu: { id: "itu", fee_type: "flat", fee: 3000000 },
        wmo: { id: "wmo", fee_type: "flat", fee: 2500000 }
    },
    regional: {
        asean: { id: "asean", fee: 8000000 },
        eu: { id: "eu", fee: 10000000 },
        arab_league: { id: "arab_league", fee: 10000000 },
        au: { id: "au", fee: 8000000 },
        nato: { id: "nato", fee: 10000000 },
        oic: { id: "oic", fee: 9000000 },
        brics: { id: "brics", fee: 8000000 },
        opec: { id: "opec", fee: 9000000 },
        g20: { id: "g20", fee: 7500000 },
        apec: { id: "apec", fee: 7500000 },
        sco: { id: "sco", fee: 9000000 },
        oas: { id: "oas", fee: 8000000 },
        gcc: { id: "gcc", fee: 9000000 },
        mercosur: { id: "mercosur", fee: 8000000 },
        commonwealth: { id: "commonwealth", fee: 7500000 },
        g7: { id: "g7", fee: 10000000 },
        quad: { id: "quad", fee: 9000000 },
        oecd: { id: "oecd", fee: 9000000 }
    }
};

export type UNOrgId = keyof typeof GEOPOLITICAL_CONFIG.un;
export type RegionalOrgId = keyof typeof GEOPOLITICAL_CONFIG.regional;

/**
 * Utility to get fee for any organization.
 */
export const getOrgFee = (orgId: string, currentCash: number = 0): number => {
    let fee = 0;
    const unOrg = GEOPOLITICAL_CONFIG.un[orgId as UNOrgId];
    if (unOrg) {
        if (unOrg.fee_type === "percentage") {
            fee = Math.floor(currentCash * (unOrg.fee as number));
        } else {
            fee = unOrg.fee as number;
        }
    } else {
        const regionalOrg = GEOPOLITICAL_CONFIG.regional[orgId as RegionalOrgId];
        if (regionalOrg) {
            fee = regionalOrg.fee;
        }
    }

    // Apply global limits: min 2.5M, max 10M (only if fee is set)
    if (fee === 0) return 0;
    return Math.max(2500000, Math.min(10000000, fee));
};