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
    }
};
