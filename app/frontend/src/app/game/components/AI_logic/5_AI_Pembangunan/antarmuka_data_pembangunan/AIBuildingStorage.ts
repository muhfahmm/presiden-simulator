"use client"

const AI_BUILDING_KEY = "em4_ai_building_data";

export interface AIConstructionItem {
  id: string;
  buildingKey: string;
  label: string;
  sector: string;
  startDate: number;
  endDate: number;
  waktu_pembangunan: number;
}

export interface AIBuildingData {
  [countryNameEn: string]: {
    buildingDeltas: Record<string, number>;
    constructionQueue: AIConstructionItem[];
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
    return global[countryNameEn] || { buildingDeltas: {}, constructionQueue: [] };
  },

  saveCountryData: (countryNameEn: string, buildingDeltas: Record<string, number>, constructionQueue: AIConstructionItem[]) => {
    if (typeof window === 'undefined') return;
    const global = aiBuildingStorage.initialize();
    global[countryNameEn] = { buildingDeltas, constructionQueue };
    localStorage.setItem(AI_BUILDING_KEY, JSON.stringify(global));
    window.dispatchEvent(new Event('ai_building_updated'));
  },

  getAllBuildingDeltas: (countryNameEn: string) => {
    return aiBuildingStorage.getData(countryNameEn).buildingDeltas;
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
    aiBuildingStorage.saveCountryData(countryNameEn, data.buildingDeltas, data.constructionQueue);
    return newItem;
  },

  removeFromQueue: (countryNameEn: string, id: string) => {
    const data = aiBuildingStorage.getData(countryNameEn);
    data.constructionQueue = data.constructionQueue.filter(item => item.id !== id);
    aiBuildingStorage.saveCountryData(countryNameEn, data.buildingDeltas, data.constructionQueue);
  },

  incrementBuildingCount: (countryNameEn: string, buildingKey: string) => {
    const data = aiBuildingStorage.getData(countryNameEn);
    const current = data.buildingDeltas[buildingKey] || 0;
    data.buildingDeltas[buildingKey] = current + 1;
    aiBuildingStorage.saveCountryData(countryNameEn, data.buildingDeltas, data.constructionQueue);
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_BUILDING_KEY);
    window.dispatchEvent(new Event('ai_building_updated'));
  }
};
