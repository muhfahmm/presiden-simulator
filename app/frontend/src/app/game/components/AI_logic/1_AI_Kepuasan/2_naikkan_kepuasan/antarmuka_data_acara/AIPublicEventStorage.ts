"use client"

const AI_ACARA_KEY = "em4_ai_acara_history";

export interface AIEventHistory {
  [countryNameEn: string]: {
    id: string;
    gameDate: string;
    executedAt: number;
  }[];
}

export const aiPublicEventStorage = {
  /**
   * Get total event history for all NPC countries.
   */
  getGlobalHistory: (): AIEventHistory => {
    if (typeof window === 'undefined') return {};
    const stored = localStorage.getItem(AI_ACARA_KEY);
    return stored ? JSON.parse(stored) : {};
  },

  /**
   * Get event history for a specific NPC country.
   */
  getCountryHistory: (countryNameEn: string) => {
    const global = aiPublicEventStorage.getGlobalHistory();
    return global[countryNameEn] || [];
  },

  /**
   * Register a new event execution for an NPC.
   */
  saveExecution: (countryNameEn: string, eventId: string, gameDate: string) => {
    if (typeof window === 'undefined') return;
    const global = aiPublicEventStorage.getGlobalHistory();
    if (!global[countryNameEn]) global[countryNameEn] = [];
    
    global[countryNameEn].push({
      id: eventId,
      gameDate: gameDate,
      executedAt: Date.now()
    });

    localStorage.setItem(AI_ACARA_KEY, JSON.stringify(global));
    window.dispatchEvent(new Event('ai_acara_updated'));
  },

  /**
   * Check if a specific event is on cooldown for a country.
   */
  getCooldownStatus: (countryNameEn: string, eventId: string, currentGameDate: Date) => {
    const history = aiPublicEventStorage.getCountryHistory(countryNameEn);
    const lastExecution = [...history].reverse().find(h => h.id === eventId);
    
    if (!lastExecution) return { onCooldown: false, daysRemaining: 0 };

    // Approximation of game date diff
    const [day, month, year] = lastExecution.gameDate.split('-').map(Number);
    const lastDate = new Date(year, month - 1, day);
    
    const diffTime = currentGameDate.getTime() - lastDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return { diffDays };
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_ACARA_KEY);
    window.dispatchEvent(new Event('ai_acara_updated'));
  }
};
