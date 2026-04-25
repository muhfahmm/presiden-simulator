/**
 * RelationPersistence.ts
 * Manages game state persistence for relationships and metadata.
 */

import { getGlobalRelationMatrix, getRelationScore, updateMatrixScore, updateMatrixScoresBatch, normalizeId } from "./RelationMatrix";
import { dispatchRelationUpdate } from "./RelationEvents";
import { countries as centersData } from "@/app/pilih_negara/data/negara/benua/index";

export const RelationPersistence = {
    /**
     * Mendapatkan metadata label dan warna untuk UI
     */
    getRelationMetadata: (score: number) => {
        if (score <= 25) return { 
            label: "Sangat Buruk", 
            color: "text-red-600", 
            labelFull: "Sangat Buruk / Konflik",
            bg: "bg-red-600/10",
            border: "border-red-600/30",
            hex: "#dc2626"
        };
        if (score <= 49) return { 
            label: "Buruk", 
            color: "text-red-400", 
            labelFull: "Buruk",
            bg: "bg-red-400/10",
            border: "border-red-400/30",
            hex: "#f87171"
        };
        if (score <= 69) return { 
            label: "Netral", 
            color: "text-yellow-500", 
            labelFull: "Netral",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/30",
            hex: "#eab308"
        };
        if (score <= 79) return { 
            label: "Baik", 
            color: "text-green-400", 
            labelFull: "Baik",
            bg: "bg-green-400/10",
            border: "border-green-400/30",
            hex: "#4ade80"
        };
        return { 
            label: "Cukup Baik", 
            color: "text-emerald-500", 
            labelFull: "Cukup Baik / Aliansi",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/30",
            hex: "#10b981"
        };
    },

    /**
     * Menghitung skor akhir (termasuk bonus UNSC)
     */
    calculateFinalScore: (rawScore: number, isUNSCMember: boolean): number => {
        const finalScore = isUNSCMember ? Math.min(100, rawScore * 1.2) : rawScore;
        return Number(finalScore.toFixed(2));
    },

    /**
     * Sinkronisasi data dari SSE (Server Authorized)
     */
    syncFromServer: (serverMatrix: any, isReset: boolean) => {
        if (!serverMatrix) return;
        
        const currentMatrix = getGlobalRelationMatrix();
        const mergedMatrix = isReset ? { ...serverMatrix } : { ...currentMatrix };
        
        if (!isReset) {
            Object.keys(serverMatrix).forEach(source => {
                const sId = normalizeId(source);
                mergedMatrix[sId] = { ...mergedMatrix[sId], ...serverMatrix[source] };
            });
        }
        
        // Save using the matrix module (which handles pruning and events)
        const { saveGlobalRelationMatrix } = require("./RelationMatrix");
        saveGlobalRelationMatrix(mergedMatrix);
        
        console.log(`[RELATION-PERSISTENCE] Matrix synced from server. Reset: ${isReset}`);
    }
};
