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
  selection: Record<string, number>;
}

const STORAGE_KEY = "tactical_war_missions";

let missions: WarMission[] = [];

// Initialize from local storage
if (typeof window !== "undefined") {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      missions = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored missions", e);
    }
  }
}

const saveMissions = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(missions));
  }
};

export const warMissionStorage = {
  getMissions: (): WarMission[] => {
    return [...missions];
  },

  addMission: (mission: WarMission) => {
    missions.push(mission);
    saveMissions();
    window.dispatchEvent(new Event("war_mission_updated"));
  },

  updateMission: (id: string, updates: Partial<WarMission>) => {
    const idx = missions.findIndex(m => m.id === id);
    if (idx !== -1) {
      missions[idx] = { ...missions[idx], ...updates };
      saveMissions();
      window.dispatchEvent(new Event("war_mission_updated"));
    }
  },

  clearMissions: () => {
    missions = [];
    saveMissions();
    window.dispatchEvent(new Event("war_mission_updated"));
  },

  getMission: (id: string): WarMission | undefined => {
    return missions.find(m => m.id === id);
  },

  getCountryCoords: (countryName: string) => {
    const country = centersData.find(c => 
      c.name_en.toLowerCase() === countryName.toLowerCase() || 
      c.name_id.toLowerCase() === countryName.toLowerCase()
    );
    return country ? { lon: country.lon, lat: country.lat } : null;
  }
};
