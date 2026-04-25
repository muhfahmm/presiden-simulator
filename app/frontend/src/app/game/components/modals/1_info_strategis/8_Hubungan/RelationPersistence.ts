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
        if (score <= 20) return { 
            label: "Konflik", 
            color: "text-red-600", 
            labelFull: "Musuh / Konflik Terbuka",
            bg: "bg-red-600/10",
            border: "border-red-600/30",
            hex: "#dc2626"
        };
        if (score <= 45) return { 
            label: "Tegang", 
            color: "text-orange-500", 
            labelFull: "Tegang / Tidak Harmonis",
            bg: "bg-orange-500/10",
            border: "border-orange-500/30",
            hex: "#f97316"
        };
        if (score <= 65) return { 
            label: "Netral", 
            color: "text-zinc-400", 
            labelFull: "Netral / Stabil",
            bg: "bg-zinc-400/10",
            border: "border-zinc-400/30",
            hex: "#a1a1aa"
        };
        if (score <= 84) return { 
            label: "Baik", 
            color: "text-emerald-400", 
            labelFull: "Baik / Kooperatif",
            bg: "bg-emerald-400/10",
            border: "border-emerald-400/30",
            hex: "#34d399"
        };
        return { 
            label: "Sangat Baik", 
            color: "text-blue-400", 
            labelFull: "Sangat Baik / Aliansi Erat",
            bg: "bg-blue-400/10",
            border: "border-blue-400/30",
            hex: "#60a5fa"
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
