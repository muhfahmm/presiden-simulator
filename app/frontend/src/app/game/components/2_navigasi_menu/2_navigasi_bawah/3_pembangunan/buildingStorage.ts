import { gameStorage, GameSession, ConstructionItem } from "@/app/game/gamestorage";
import { formatGameDate, getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

const BUILDING_STORAGE_KEY = "em_building_data";

export interface BuildingData {
  constructionQueue: ConstructionItem[];
  buildingDeltas: Record<string, number>;
  completionDates: Record<string, string>; // { buildingKey: dateString }
}

export const buildingStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("em_building_data");
  },
  // Get all building data, with migration fallback
  getData: (): BuildingData => {
    if (typeof window === 'undefined') return { constructionQueue: [], buildingDeltas: {}, completionDates: {} };
    
    const stored = localStorage.getItem(BUILDING_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return {
          constructionQueue: Array.isArray(parsed.constructionQueue) ? parsed.constructionQueue : [],
          buildingDeltas: parsed.buildingDeltas || {},
          completionDates: parsed.completionDates || {}
        };
      } catch (e) {
        console.error("Failed to parse building storage", e);
      }
    }

    return { constructionQueue: [], buildingDeltas: {}, completionDates: {} };
  },

  saveData: (data: BuildingData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(BUILDING_STORAGE_KEY, JSON.stringify(data));
    
    // Dispatch event for UI updates
    window.dispatchEvent(new Event('building_storage_updated'));
  },

  getQueue: (): ConstructionItem[] => {
    return buildingStorage.getData().constructionQueue;
  },

  addToQueue: (item: Omit<ConstructionItem, "id">) => {
    const data = buildingStorage.getData();
    const newItem: ConstructionItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 11)
    };
    
    data.constructionQueue.push(newItem);
    buildingStorage.saveData(data);
    return newItem;
  },

  removeFromQueue: (id: string) => {
    const data = buildingStorage.getData();
    data.constructionQueue = data.constructionQueue.filter(item => item.id !== id);
    buildingStorage.saveData(data);
  },

  getBuildingDeltas: (): Record<string, number> => {
    return buildingStorage.getData().buildingDeltas;
  },

  getCompletionDates: (): Record<string, string> => {
    return buildingStorage.getData().completionDates;
  },

  incrementBuildingCount: (buildingKey: string) => {
    const data = buildingStorage.getData();
    const current = data.buildingDeltas[buildingKey] || 0;
    data.buildingDeltas[buildingKey] = (typeof current === 'number' ? current : 0) + 1;
    
    // Record completion date for transient indicators (standardized format)
    if (typeof window !== 'undefined') {
      const currentDateStr = formatGameDate(getStoredGameDate());
      data.completionDates[buildingKey] = currentDateStr;
    }

    buildingStorage.saveData(data);
  }
};
