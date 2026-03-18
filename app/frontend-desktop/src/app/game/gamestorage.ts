"use client"

export interface GameSession {
  country: string;
  isActive: boolean;
  startTime: number;
}

const STORAGE_KEY = "em4_game_session";

export const gameStorage = {
  saveSession: (country: string) => {
    const session: GameSession = {
      country,
      isActive: true,
      startTime: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    localStorage.setItem("selectedCountry", country); // Keep legacy support if needed
  },

  getSession: (): GameSession | null => {
    if (typeof window === "undefined") return null;
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    try {
      return JSON.parse(data) as GameSession;
    } catch (e) {
      console.error("Failed to parse game session", e);
      return null;
    }
  },

  hasActiveSession: (): boolean => {
    const session = gameStorage.getSession();
    return !!(session && session.isActive);
  },

  clearSession: () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("selectedCountry");
  }
};
