import { countries as centersData } from "@/app/pilih_negara/data/negara/benua/index";
import { RELATION_EVENTS, dispatchRelationUpdate } from "./RelationEvents";

export const RELATION_MATRIX_KEY = 'em_global_relation_matrix';

export interface RelationEntry {
    s: number; // score
    e: number; // embassy
    p: number; // pact
    a: number; // alliance
    t: number; // trade
}

export interface RelationMatrix {
    [sourceCountryId: string]: {
        [targetCountryId: string]: RelationEntry;
    };
}

/**
 * Normalisasi ID Negara
 * Mengonversi nama negara (Inggris/GeoJSON/Lokal) ke ID standar bahasa Indonesia.
 */
export const normalizeId = (name: string): string => {
    if (!name) return "";
    
    const geoJsonToIndo: Record<string, string> = {
        "The Bahamas": "bahama",
        "Democratic Republic of the Congo": "republik demokratik kongo",
        "Northern Cyprus": "siprus",
        "Czech Republic": "ceko",
        "Guinea Bissau": "guinea-bissau",
        "Equatorial Guinea": "guinea",
        "Macedonia": "makedonia utara",
        "Republic of Serbia": "republik serbia",
        "Swaziland": "eswatini",
        "East Timor": "timor-leste",
        "Turkey": "turki",
        "United Republic of Tanzania": "republik tanzania",
        "United States of America": "amerika serikat",
        "United States": "amerika serikat",
        "West Bank": "palestina",
        "Falkland Islands": "argentina",
        "Western Sahara": "maroko",
        "Somaliland": "somalia",
        "New Caledonia": "fiji",
        "Solomon Islands": "marshall",
        "United Kingdom": "inggris"
    };

    let normalized = name.trim();
    if (geoJsonToIndo[normalized]) {
        normalized = geoJsonToIndo[normalized];
    }

    const cleanName = normalized.toLowerCase().trim();
    const found = centersData.find(c => 
        c.name_id.toLowerCase().trim() === cleanName ||
        c.name_en.toLowerCase().trim() === cleanName
    );
    return found ? found.name_id.toLowerCase().trim() : cleanName;
};

/**
 * Mendapatkan ID User yang sedang login
 */
export const getNormalizedUser = (): string => {
    if (typeof window === 'undefined') return "indonesia";

    const sessionRaw = localStorage.getItem("game_session");
    const selectedCountry = localStorage.getItem("selectedCountry");
    const selectedCountryAlt = localStorage.getItem("selected_country");
    
    let userCountry = "Indonesia";
    
    if (sessionRaw) {
        try {
            const session = JSON.parse(sessionRaw);
            userCountry = session.country || userCountry;
        } catch(e) {}
    } else if (selectedCountry) {
        userCountry = selectedCountry;
    } else if (selectedCountryAlt) {
        userCountry = selectedCountryAlt;
    }

    return normalizeId(userCountry);
};

let inMemoryMatrix: RelationMatrix | null = null;

/**
 * Mengambil data matriks hubungan global dari storage atau memori.
 */
export const getGlobalRelationMatrix = (): RelationMatrix => {
    if (typeof window === 'undefined') return {};
    if (inMemoryMatrix) return inMemoryMatrix;

    const data = localStorage.getItem(RELATION_MATRIX_KEY);
    if (!data) return {};
    try {
        inMemoryMatrix = JSON.parse(data);
        return inMemoryMatrix || {};
    } catch (e) {
        return {};
    }
};

/**
 * Menyimpan Matriks Hubungan Global dengan optimasi pruning.
 */
export const saveGlobalRelationMatrix = (matrix: RelationMatrix) => {
    if (typeof window === 'undefined') return;

    const prunedMatrix: RelationMatrix = {};
    const normalizedUser = getNormalizedUser();
    
    Object.keys(matrix).forEach(rawSourceId => {
        const sourceId = normalizeId(rawSourceId);
        const prunedTargets: Record<string, RelationEntry> = {};
        let hasContent = false;

        Object.keys(matrix[rawSourceId]).forEach(rawTargetId => {
            const targetId = normalizeId(rawTargetId);
            const entry = matrix[rawSourceId][rawTargetId];
            
            const involvesUser = sourceId === normalizedUser || targetId === normalizedUser;
            const isOfficialPartner = involvesUser && entry.t === 1;
            const isSignificantNpcRelation = entry.s < 35 || entry.s > 65 || entry.e === 1 || entry.p === 1 || entry.a === 1 || entry.t === 1;

            if (involvesUser || isSignificantNpcRelation || isOfficialPartner) {
                prunedTargets[targetId] = entry;
                hasContent = true;
            }
        });

        if (hasContent) {
            prunedMatrix[sourceId] = prunedTargets;
        }
    });

    try {
        const oldMatrix = getGlobalRelationMatrix();
        const json = JSON.stringify(prunedMatrix);
        localStorage.setItem(RELATION_MATRIX_KEY, json);
        inMemoryMatrix = prunedMatrix;
        
        // Track Deltas for UI Trending (Rising/Falling)
        import("./RelationDelta").then(({ relationDeltaStorage }) => {
            relationDeltaStorage.updateFromMatrix(oldMatrix, prunedMatrix, normalizedUser);
        });

        // Dispatch centralized update signal
        dispatchRelationUpdate();
    } catch (e) {
        console.error("[RELATION-MATRIX] Storage Quota Exceeded!", e);
    }
};

/**
 * Mendapatkan skor hubungan dari Matrix (Source of Truth)
 */
export const getRelationScore = (targetCountryId: string, baseScore: number, sourceCountryId?: string): number => {
    if (typeof window === 'undefined') return baseScore;
    
    const normalizedUser = getNormalizedUser();
    const rawSource = (!sourceCountryId || sourceCountryId === "player") ? normalizedUser : sourceCountryId;
    
    const sourceKey = normalizeId(rawSource);
    const targetKey = normalizeId(targetCountryId);

    const matrix = getGlobalRelationMatrix();
    if (matrix[sourceKey] && matrix[sourceKey][targetKey]) {
        return matrix[sourceKey][targetKey].s;
    }
    
    // Symmetric fallback
    if (matrix[targetKey] && matrix[targetKey][sourceKey]) {
        return matrix[targetKey][sourceKey].s;
    }

    return baseScore;
};

/**
 * Update skor tunggal
 */
export const updateMatrixScore = (sourceId: string, targetId: string, score: number) => {
    const sId = normalizeId(sourceId);
    const tId = normalizeId(targetId);
    
    const matrix = getGlobalRelationMatrix();
    if (!matrix[sId]) matrix[sId] = {};
    if (!matrix[sId][tId]) {
        matrix[sId][tId] = { s: 50, e: 0, p: 0, a: 0, t: 0 };
    }
    
    matrix[sId][tId].s = score;
    saveGlobalRelationMatrix(matrix);
};

/**
 * Update skor secara batch
 */
export const updateMatrixScoresBatch = (sourceId: string, updates: Record<string, number>) => {
    const sId = normalizeId(sourceId);
    const matrix = getGlobalRelationMatrix();
    if (!matrix[sId]) matrix[sId] = {};
    
    Object.keys(updates).forEach(targetId => {
        const tId = normalizeId(targetId);
        const score = updates[targetId];
        if (!matrix[sId][tId]) {
            matrix[sId][tId] = { s: 50, e: 0, p: 0, a: 0, t: 0 };
        }
        matrix[sId][tId].s = score;
    });
    
    saveGlobalRelationMatrix(matrix);
};

/**
 * Cek apakah sebuah relationship adalah "Netral Default"
 */
const isDefaultNeutral = (entry: RelationEntry): boolean => {
    return entry.s === 50 && entry.e === 0 && entry.p === 0 && entry.a === 0 && entry.t === 0;
};

/**
 * Sinkronisasi awal Matriks dengan Database hubungan statis.
 */
export const initializeMatrixData = async () => {
    if (typeof window === 'undefined') return;

    const storedDate = localStorage.getItem("em_game_date");
    const gameDate = storedDate ? new Date(Number(storedDate)) : new Date(2026, 0, 1);
    const isFirstDay = gameDate.getFullYear() === 2026 && gameDate.getMonth() === 0 && gameDate.getDate() === 1;

    const existingRaw = localStorage.getItem(RELATION_MATRIX_KEY);
    const normalizedUser = getNormalizedUser();
    const isFreshSession = localStorage.getItem("em_fresh_session") === "true";

    if (!existingRaw || existingRaw === "{}" || isFirstDay || isFreshSession) { 
        console.log("[RELATION-MATRIX] Initializing from Database...");
        const matrix: RelationMatrix = existingRaw ? JSON.parse(existingRaw) : {};
        
        const { allRelations } = await import("@/app/pilih_negara/data/database_hubungan_antar_negara");
        const { getInitialAgreements } = await import("@/app/pilih_negara/data/database_mitra_perdagangan/agreementsRegistry");

        // Trade Sync
        const userCountryRaw = localStorage.getItem('selectedCountry') || localStorage.getItem('selected_country') || "Indonesia";
        const userCountryData = centersData.find((c: any) => c.name_id === userCountryRaw || c.name_en === userCountryRaw) || centersData[0];
        const defaultAgreements = getInitialAgreements(userCountryData.name_en, userCountryData.name_id || userCountryData.name_en);
        const activeTradePartners = new Set(defaultAgreements.filter(a => a.type === 'Perdagangan' && a.status === 'Aktif').map(a => normalizeId(a.mitra)));

        Object.keys(allRelations).forEach(rawSourceId => {
            const sourceId = normalizeId(rawSourceId);
            const relations = (allRelations as any)[rawSourceId];
            
            if (Array.isArray(relations)) {
                if (!matrix[sourceId]) matrix[sourceId] = {};
                relations.forEach((rel: any) => {
                    const targetId = normalizeId(rel.name);
                    if (matrix[sourceId][targetId] === undefined) {
                        let score = rel.relation !== undefined ? rel.relation : 50;
                        const isDefaultPartner = (sourceId === normalizedUser && activeTradePartners.has(targetId)) || (targetId === normalizedUser && activeTradePartners.has(sourceId));

                        const entry: RelationEntry = {
                            s: score,
                            e: score >= 60 ? 1 : 0,
                            p: score >= 70 ? 1 : 0,
                            a: score >= 85 ? 1 : 0,
                            t: isDefaultPartner ? 1 : 0
                        };
                        
                        if (!isDefaultNeutral(entry) || sourceId === normalizedUser || targetId === normalizedUser) {
                            matrix[sourceId][targetId] = entry;
                        }
                    }
                });
            }
        });

        saveGlobalRelationMatrix(matrix);
        localStorage.removeItem("em_fresh_session");
    }
};

/**
 * Reset total matriks
 */
export const hardClearMatrix = () => {
    if (typeof window === 'undefined') return;
    inMemoryMatrix = {};
    localStorage.removeItem(RELATION_MATRIX_KEY);
    dispatchRelationUpdate();
    console.log("[RELATION-MATRIX] Nuclear wipe complete.");
};
