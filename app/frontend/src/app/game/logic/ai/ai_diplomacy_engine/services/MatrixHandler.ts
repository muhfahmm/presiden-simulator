import { countries as centersData } from "@/app/database/data/negara/benua/index";

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

let inMemoryMatrix: RelationMatrix | null = null;

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
 * Mendapatkan skor hubungan dari Matrix (Source of Truth)
 */
export const getRelationScore = (targetCountryId: string, baseScore: number, sourceCountryId?: string): number => {
    if (typeof window === 'undefined') return baseScore;
    
    // CRITICAL RESET GUARD
    const isFreshSession = localStorage.getItem("em_fresh_session") === "true";
    if (isFreshSession) return baseScore;

    const sourceKey = sourceCountryId?.toLowerCase().trim() || "player";
    const targetKey = targetCountryId.toLowerCase().trim();

    const matrix = getGlobalRelationMatrix();
    if (matrix[sourceKey] && matrix[sourceKey][targetKey]) {
        return matrix[sourceKey][targetKey].s;
    }
    
    return baseScore;
};

/**
 * Hard wipe of all matrix data (memory + storage)
 */
export const hardClearMatrix = () => {
    if (typeof window === 'undefined') return;
    inMemoryMatrix = {};
    localStorage.removeItem(RELATION_MATRIX_KEY);
    console.log("[AI-MATRIX] ☢ Nuclear wipe of in-memory and storage matrix data complete.");
};

/**
 * Normalisasi ID Negara
 */
const normalizeId = (name: string): string => {
    if (!name) return "";
    const cleanName = name.toLowerCase().trim();
    const found = centersData.find(c => 
        c.name_id.toLowerCase().trim() === cleanName ||
        c.name_en.toLowerCase().trim() === cleanName
    );
    return found ? found.name_id.toLowerCase().trim() : cleanName;
};

/**
 * Cek apakah sebuah relationship adalah "Netral Default"
 * Jika ya, kita bisa menghapusnya dari storage untuk hemat memori.
 */
const isDefaultNeutral = (entry: RelationEntry): boolean => {
    return entry.s === 50 && entry.e === 0 && entry.p === 0 && entry.a === 0 && entry.t === 0;
};

/**
 * Mendapatkan ID User yang sedang login
 */
const getNormalizedUser = (): string => {
    const sessionRaw = localStorage.getItem("game_session");
    let userCountry = "Indonesia";
    try {
        if(sessionRaw) {
            const session = JSON.parse(sessionRaw);
            userCountry = session.country || userCountry;
        }
    } catch(e) {}
    return normalizeId(userCountry);
};

// Lazy import for database to avoid circular issues during init
let allRelations: any = null;
const getAllRelations = async () => {
    if (allRelations) return allRelations;
    const module = await import("@/app/database/data/database_hubungan_antar_negara");
    allRelations = module.allRelations;
    return allRelations;
};

export const initializeMatrixData = async () => {
    if (typeof window === 'undefined') return;

    const storedDate = localStorage.getItem("em_game_date");
    const gameDate = storedDate ? new Date(Number(storedDate)) : new Date(2026, 0, 1);
    const isFirstDay = gameDate.getFullYear() === 2026 && gameDate.getMonth() === 0 && gameDate.getDate() === 1;

    const existing = localStorage.getItem(RELATION_MATRIX_KEY);
    const normalizedUser = getNormalizedUser();

    if (!existing || existing === "{}" || isFirstDay) {
        console.log("[AI-MATRIX] Initializing Database Sync...");
        const matrix: RelationMatrix = {};
        const database = await getAllRelations();

        Object.keys(database).forEach(rawSourceId => {
            const sourceId = normalizeId(rawSourceId);
            const relations = (database as any)[rawSourceId];
            
            if (Array.isArray(relations)) {
                if (!matrix[sourceId]) matrix[sourceId] = {};
                
                relations.forEach((rel: any) => {
                    const targetId = normalizeId(rel.name);
                    let score = rel.relation !== undefined ? rel.relation : 50;
                    
                    if (targetId === normalizedUser && !isFirstDay) {
                        // Get the stored score for [source] seeing [target (user)]
                        score = getRelationScore(normalizedUser, score, sourceId);
                    }
                    
                    if (sourceId === normalizedUser && !isFirstDay) {
                        // Get the stored score for [user] seeing [target]
                        score = getRelationScore(targetId, score, normalizedUser);
                    }
                    
                    const entry: RelationEntry = {
                        s: score,
                        e: score >= 60 ? 1 : 0,
                        p: score >= 70 ? 1 : 0,
                        a: score >= 85 ? 1 : 0,
                        t: score >= 65 ? 1 : 0
                    };

                    // HANYA simpan jika bukan netral murni (Sparse Matrix Optimization)
                    // Pengecualian: Selalu simpan hubungan yang melibatkan USER (baik sebagai Source maupun Target) 
                    // agar seluruh 206 negara bisa ter-update secara dinamis dari perspektif pemain.
                    const involvesUser = sourceId === normalizedUser || targetId === normalizedUser;
                    if (!isDefaultNeutral(entry) || involvesUser) {
                        matrix[sourceId][targetId] = entry;
                    }
                });
            }
        });

        saveGlobalRelationMatrix(matrix);
    }
};

/**
 * Menyimpan Matrix dengan optimasi penyimpanan agresif.
 */
export const saveGlobalRelationMatrix = (matrix: RelationMatrix) => {
    if (typeof window !== 'undefined') {
        const prunedMatrix: RelationMatrix = {};
        const normalizedUser = getNormalizedUser();
        
        Object.keys(matrix).forEach(sourceId => {
            const targets = matrix[sourceId];
            const prunedTargets: { [key: string]: RelationEntry } = {};
            let hasContent = false;

            Object.keys(targets).forEach(targetId => {
                const entry = targets[targetId];
                
                // ATURAN PENYIMPANAN (PRUNING):
                // 1. Jika melibatkan USER (Source atau Target), WAJIB SIMPAN (Agar angka tidak stuck)
                const involvesUser = sourceId === normalizedUser || targetId === normalizedUser;
                
                // 2. Jika antar NPC, hanya simpan jika:
                //    - Skor ekstrim (< 35 atau > 65)
                //    - Punya status (Embassy, Pact, Alliance, Trade)
                const isSignificantNpcRelation = entry.s < 35 || entry.s > 65 || entry.e === 1 || entry.p === 1 || entry.a === 1 || entry.t === 1;

                if (involvesUser || isSignificantNpcRelation) {
                    prunedTargets[targetId] = entry;
                    hasContent = true;
                }
            });

            if (hasContent) {
                prunedMatrix[sourceId] = prunedTargets;
            }
        });

        try {
            const json = JSON.stringify(prunedMatrix);
            localStorage.setItem(RELATION_MATRIX_KEY, json);
            // console.log(`[AI-MATRIX] Saved Sparse Matrix. Size: ${(json.length / 1024).toFixed(2)} KB`);
        } catch (e) {
            console.error("Critical Quota Error in Matrix Storage", e);
        }
    }
};

/**
 * Updates a single relationship score in reality.
 * Pruning is automatically applied during save.
 */
export const updateMatrixScore = (sourceId: string, targetId: string, score: number) => {
    const matrix = getGlobalRelationMatrix();
    if (!matrix[sourceId]) matrix[sourceId] = {};
    if (!matrix[sourceId][targetId]) {
        matrix[sourceId][targetId] = { s: 50, e: 0, p: 0, a: 0, t: 0 };
    }
    
    matrix[sourceId][targetId].s = score;
    saveGlobalRelationMatrix(matrix);
};

/**
 * Updates multiple relationship scores for a single source country.
 * Optimized with a single save operation.
 */
export const updateMatrixScoresBatch = (sourceId: string, updates: Record<string, number>) => {
    const matrix = getGlobalRelationMatrix();
    if (!matrix[sourceId]) matrix[sourceId] = {};
    
    Object.keys(updates).forEach(targetId => {
        const score = updates[targetId];
        if (!matrix[sourceId][targetId]) {
            matrix[sourceId][targetId] = { s: 50, e: 0, p: 0, a: 0, t: 0 };
        }
        matrix[sourceId][targetId].s = score;
    });
    
    saveGlobalRelationMatrix(matrix);
};


