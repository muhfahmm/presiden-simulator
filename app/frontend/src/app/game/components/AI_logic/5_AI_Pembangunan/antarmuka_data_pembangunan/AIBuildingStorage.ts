"use client"
import { formatGameDate, getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const AI_BUILDING_KEY = "em4_ai_building_data";

export interface AIConstructionItem {
  id: string;
  buildingKey: string;
  label: string;
  sector: string;
  startDate: number;
  endDate: number;
  waktu_pembangunan: number;
  quantity: number;
}

export interface AIBuildingData {
  [countryNameEn: string]: {
    buildingDeltas: Record<string, number>;
    constructionQueue: AIConstructionItem[];
    completionDates: Record<string, string>; // { buildingKey: dateString }
  };
}

export const aiBuildingStorage = {
  initialize: (): AIBuildingData => {
    if (typeof window === 'undefined') return {};
    const stored = localStorage.getItem(AI_BUILDING_KEY);
    return stored ? JSON.parse(stored) : {};
  },

  getData: (countryNameEn: string) => {
    const global = aiBuildingStorage.initialize();
    const realKey = Object.keys(global).find(k => k.toLowerCase() === countryNameEn.toLowerCase());
    const data = (realKey ? global[realKey] : null) || { buildingDeltas: {}, constructionQueue: [], completionDates: {} };
    // Migration: ensure completionDates exists even in old country records
    if (!data.completionDates) data.completionDates = {};
    if (!data.buildingDeltas) data.buildingDeltas = {};
    if (!data.constructionQueue) data.constructionQueue = [];
    return data;
  },

  saveCountryData: (countryNameEn: string, buildingDeltas: Record<string, number>, constructionQueue: AIConstructionItem[], completionDates: Record<string, string> = {}) => {
    if (typeof window === 'undefined') return;
    const global = aiBuildingStorage.initialize();
    // Gunakan key yang sudah ada jika ada (untuk mempertahankan kapitalisasi asli jika diinginkan)
    const realKey = Object.keys(global).find(k => k.toLowerCase() === countryNameEn.toLowerCase()) || countryNameEn;
    global[realKey] = { buildingDeltas, constructionQueue, completionDates };
    localStorage.setItem(AI_BUILDING_KEY, JSON.stringify(global));
    window.dispatchEvent(new Event('ai_building_updated'));
  },

  getAllBuildingDeltas: (countryNameEn: string) => {
    return aiBuildingStorage.getData(countryNameEn).buildingDeltas;
  },

  getCompletionDates: (countryNameEn: string) => {
    return aiBuildingStorage.getData(countryNameEn).completionDates;
  },

  getQueue: (countryNameEn: string) => {
    return aiBuildingStorage.getData(countryNameEn).constructionQueue;
  },

  addToQueue: (countryNameEn: string, item: Omit<AIConstructionItem, "id">) => {
    const data = aiBuildingStorage.getData(countryNameEn);
    const newItem: AIConstructionItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 11)
    };
    data.constructionQueue.push(newItem);
    aiBuildingStorage.saveCountryData(countryNameEn, data.buildingDeltas, data.constructionQueue, data.completionDates);
    return newItem;
  },

  removeFromQueue: (countryNameEn: string, id: string) => {
    const data = aiBuildingStorage.getData(countryNameEn);
    data.constructionQueue = data.constructionQueue.filter(item => item.id !== id);
    aiBuildingStorage.saveCountryData(countryNameEn, data.buildingDeltas, data.constructionQueue, data.completionDates);
  },

  incrementBuildingCount: (countryNameEn: string, buildingKey: string, quantity: number = 1) => {
    const data = aiBuildingStorage.getData(countryNameEn);
    const current = Number(data.buildingDeltas[buildingKey] || 0);
    data.buildingDeltas[buildingKey] = current + Number(quantity);
    
    // Record completion date
    if (typeof window !== 'undefined') {
      data.completionDates[buildingKey] = formatGameDate(getStoredGameDate());
    }

    aiBuildingStorage.saveCountryData(countryNameEn, data.buildingDeltas, data.constructionQueue, data.completionDates);
  },

  /**
   * Complete multiple projects atomically to prevent race conditions.
   */
  completeProjects: (countryNameEn: string, projects: AIConstructionItem[]) => {
    const data = aiBuildingStorage.getData(countryNameEn);
    const projectIds = projects.map(p => p.id);
    const currentDate = typeof window !== 'undefined' ? localStorage.getItem("em4_game_date") : null;

    projects.forEach(project => {
      const buildingKey = project.buildingKey;
      const quantity = Number(project.quantity || 1);
      const current = Number(data.buildingDeltas[buildingKey] || 0);
      data.buildingDeltas[buildingKey] = current + quantity;
      
      if (typeof window !== 'undefined') {
         data.completionDates[buildingKey] = formatGameDate(getStoredGameDate());
      }
      
      console.log(`[AI STORAGE] Completing ${quantity}x ${buildingKey} for ${countryNameEn}. New Delta: ${data.buildingDeltas[buildingKey]}`);
    });

    // Filter out completed IDs
    data.constructionQueue = data.constructionQueue.filter(item => !projectIds.includes(item.id));
    
    aiBuildingStorage.saveCountryData(countryNameEn, data.buildingDeltas, data.constructionQueue, data.completionDates);
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_BUILDING_KEY);
    window.dispatchEvent(new Event('ai_building_updated'));
  }
};
