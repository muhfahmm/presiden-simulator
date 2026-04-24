"use client"

import { AgeBracket } from "../../../PopulationDeltaLogic";

/**
 * Menghitung simulasi struktur usia penduduk (Demografi)
 */
export const calculateAgeStructure = (diffDays: number): AgeBracket[] => {
    const baseBrackets = [
        { label: "Anak-Anak", range: "0-14", percent: 25.2 },
        { label: "Pemuda", range: "15-24", percent: 16.8 },
        { label: "Produktif", range: "25-54", percent: 42.4 },
        { label: "Pra-Lansia", range: "55-64", percent: 8.6 },
        { label: "Lansia", range: "65+", percent: 7.0 }
    ];

    const driftAdjustments = baseBrackets.map((b, i) => {
        const drift = Math.sin(diffDays * 0.08 + i) * 0.35;
        return { ...b, percent: Math.max(0.1, b.percent + drift) };
    });

    const totalRaw = driftAdjustments.reduce((sum, b) => sum + b.percent, 0);
    return driftAdjustments.map(b => ({
        ...b,
        percent: parseFloat(((b.percent / totalRaw) * 100).toFixed(1))
    }));
};
