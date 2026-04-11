import { allRelations } from "@/app/database/data/database_hubungan_antar_negara";
import { relationStorage } from "../../modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { countries as centersData } from "@/app/database/data/negara/benua/index";

export const RELATION_MATRIX_KEY = 'em2_global_relation_matrix';

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

export const getGlobalRelationMatrix = (): RelationMatrix => {
    if (typeof window === 'undefined') return {};
    const data = localStorage.getItem(RELATION_MATRIX_KEY);
    if (!data) return {};
    try {
        return JSON.parse(data);
    } catch (e) {
        return {};
    }
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

export const initializeMatrixData = () => {
    if (typeof window === 'undefined') return;

    const storedDate = localStorage.getItem("em4_game_date");
    const gameDate = storedDate ? new Date(Number(storedDate)) : new Date(2026, 0, 1);
    const isFirstDay = gameDate.getFullYear() === 2026 && gameDate.getMonth() === 0 && gameDate.getDate() === 1;

    const existing = localStorage.getItem(RELATION_MATRIX_KEY);
    const normalizedUser = getNormalizedUser();

    if (!existing || existing === "{}" || isFirstDay) {
        console.log("[AI-MATRIX] Initializing Database Sync...");
        const matrix: RelationMatrix = {};

        Object.keys(allRelations).forEach(rawSourceId => {
            const sourceId = normalizeId(rawSourceId);
            const relations = (allRelations as any)[rawSourceId];
            
            if (Array.isArray(relations)) {
                if (!matrix[sourceId]) matrix[sourceId] = {};
                
                relations.forEach((rel: any) => {
                    const targetId = normalizeId(rel.name);
                    let score = rel.relation !== undefined ? rel.relation : 50;
                    
                    if (targetId === normalizedUser && !isFirstDay) {
                        // Get the stored score for [source] seeing [target (user)]
                        score = relationStorage.getRelationScore(normalizedUser, score, sourceId);
                    }
                    
                    if (sourceId === normalizedUser && !isFirstDay) {
                        // Get the stored score for [user] seeing [target]
                        score = relationStorage.getRelationScore(targetId, score, normalizedUser);
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
