import { RelationPersistence } from "@/app/game/components/3_hubungan/RelationPersistence";
import { getRelationScore, normalizeId } from "@/app/game/components/3_hubungan/RelationMatrix";

export const relationStorage = {
    ...RelationPersistence,
    getRelationScore,
    normalizeTargetId: normalizeId,
    
    // Legacy getRelationData fallback
    getRelationData: () => {
        const { getGlobalRelationMatrix } = require("@/app/game/components/3_hubungan/RelationMatrix");
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
        const { updateMatrixScore } = require("@/app/game/components/3_hubungan/RelationMatrix");
        const currentScore = getRelationScore(targetCountry, currentBase, sourceCountry || "player");
        const newScore = Math.max(0, Math.min(100, currentScore + delta));
        updateMatrixScore(sourceCountry || "player", targetCountry, newScore);
    }
};
