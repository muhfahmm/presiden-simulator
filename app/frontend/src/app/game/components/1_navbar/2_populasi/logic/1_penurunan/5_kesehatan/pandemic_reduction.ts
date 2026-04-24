"use client"

import { eventStorage } from "@/app/game/logic/events/eventStorage";

/**
 * Menghitung reduksi laju pertumbuhan akibat krisis kesehatan (Epidemi/Pandemi)
 */
export const calculatePandemicReduction = () => {
    const activeEvents = eventStorage.getActiveEvents();
    const healthEvents = activeEvents.filter(e => e.type === 'health');

    if (healthEvents.length === 0) return 1.0;

    const hasCatastrophic = healthEvents.some(e => e.severity === 'Catastrophic');
    const hasHigh = healthEvents.some(e => e.severity === 'High');

    if (hasCatastrophic) return 0.2; // Reduksi 80%
    if (hasHigh) return 0.5;          // Reduksi 50%
    return 0.75;                     // Reduksi 25%
};
