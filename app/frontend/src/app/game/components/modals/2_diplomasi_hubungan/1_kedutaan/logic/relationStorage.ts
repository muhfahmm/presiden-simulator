import { RelationPersistence } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationPersistence";
import { getRelationScore, normalizeId } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";

export const relationStorage = {
    ...RelationPersistence,
    getRelationScore,
    normalizeTargetId: normalizeId,
    
    // Legacy getRelationData fallback
    getRelationData: () => {
        const { getGlobalRelationMatrix } = require("@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix");
        const matrix = getGlobalRelationMatrix();
        const flat: Record<string, number> = {};
        Object.keys(matrix).forEach(sourceId => {
            const targets = matrix[sourceId];
            Object.keys(targets).forEach(targetId => {
                flat[`${sourceId}:${targetId}`] = targets[targetId].s;
            });
        });
        return flat;
    },

    // Legacy updateRelationScore fallback
    updateRelationScore: (targetCountry: string, delta: number, currentBase: number, sourceCountry?: string) => {
        const { updateMatrixScore } = require("@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix");
        const currentScore = getRelationScore(targetCountry, currentBase, sourceCountry || "player");
        const newScore = Math.max(0, Math.min(100, currentScore + delta));
        updateMatrixScore(sourceCountry || "player", targetCountry, newScore);
    },

    // Legacy clear fallback
    clear: () => {
        const { hardClearMatrix } = require("@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix");
        hardClearMatrix();
    },

    /**
     * AI-Friendly Aliases
     */
    getRelation: (sourceId: string, targetId: string) => {
        return getRelationScore(targetId, 50, sourceId);
    },

    updateRelation: (sourceId: string, targetId: string, delta: number) => {
        const current = getRelationScore(targetId, 50, sourceId);
        const { updateMatrixScore } = require("@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix");
        const newScore = Math.max(0, Math.min(100, current + delta));
        updateMatrixScore(sourceId, targetId, newScore);
    },

    /**
     * Batch update for all countries (Global Improvement)
     */
    updateAllRelationScores: (delta: number, sourceCountry: string) => {
        const { updateMatrixScoresBatch } = require("@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix");
        const { countries } = require("@/app/database/data/semua_fitur_negara/0_profiles/index");
        
        const sId = normalizeId(sourceCountry);
        const updates: Record<string, number> = {};
        
        countries.forEach((country: any) => {
            const tId = normalizeId(country.name_id || country.name_en);
            if (tId === sId) return;

            const current = getRelationScore(tId, 50, sId);
            const newScore = Math.max(0, Math.min(100, current + delta));
            updates[tId] = newScore;
        });

        updateMatrixScoresBatch(sId, updates);
    }
};
