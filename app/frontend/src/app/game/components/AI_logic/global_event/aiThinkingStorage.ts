"use client"

const AI_THINKING_KEY = "em_ai_critical_thinking_logs";

export interface AIThinkingData {
    reason: string;
    lastUpdated: number;
}

export type AIThinkingMap = Record<string, AIThinkingData>;

export const aiThinkingStorage = {
    getLatest: (countryNameEn: string): AIThinkingData | null => {
        if (typeof window === 'undefined') return null;
        const stored = localStorage.getItem(AI_THINKING_KEY);
        if (!stored) return null;
        try {
            const data: AIThinkingMap = JSON.parse(stored);
            const realKey = Object.keys(data).find(k => k.toLowerCase() === countryNameEn.toLowerCase());
            return realKey ? data[realKey] : null;
        } catch {
            return null;
        }
    },

    saveReason: (countryNameEn: string, reason: string) => {
        if (typeof window === 'undefined' || !reason) return;
        const stored = localStorage.getItem(AI_THINKING_KEY);
        const data: AIThinkingMap = stored ? JSON.parse(stored) : {};
        
        data[countryNameEn] = {
            reason,
            lastUpdated: Date.now()
        };
        
        localStorage.setItem(AI_THINKING_KEY, JSON.stringify(data));
        window.dispatchEvent(new Event('ai_thinking_updated'));
    },

    clear: () => {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(AI_THINKING_KEY);
        window.dispatchEvent(new Event('ai_thinking_updated'));
    }
};
