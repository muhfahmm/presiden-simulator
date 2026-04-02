"use client"

import { countries as centersData } from "@/app/database/data/negara/benua/index";

export interface WarMission {
  id: string;
  source: string;
  target: string;
  unitTypes: ("air" | "sea" | "land")[];
  startTime: number; // timestamp
  duration: number; // ms
  path: { lon: number; lat: number }[];
  status: "active" | "arrived" | "completed";
}

const STORAGE_KEY = "em1_war_missions";

export const warMissionStorage = {
  getMissions: (): WarMission[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  addMission: (mission: WarMission) => {
    if (typeof window === "undefined") return;
    const missions = warMissionStorage.getMissions();
    missions.push(mission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(missions));
    window.dispatchEvent(new Event("war_mission_updated"));
  },

  updateMission: (id: string, updates: Partial<WarMission>) => {
    if (typeof window === "undefined") return;
    const missions = warMissionStorage.getMissions();
    const idx = missions.findIndex(m => m.id === id);
    if (idx !== -1) {
      missions[idx] = { ...missions[idx], ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(missions));
      window.dispatchEvent(new Event("war_mission_updated"));
    }
  },

  clearMissions: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("war_mission_updated"));
  },

  getCountryCoords: (countryName: string) => {
    const country = centersData.find(c => 
      c.name_en.toLowerCase() === countryName.toLowerCase() || 
      c.name_id.toLowerCase() === countryName.toLowerCase()
    );
    return country ? { lon: country.lon, lat: country.lat } : null;
  }
};
