import { gameStorage, GameSession, ConstructionItem } from "@/app/game/gamestorage";

const BUILDING_STORAGE_KEY = "em4_building_data";

export interface BuildingData {
  constructionQueue: ConstructionItem[];
  buildingDeltas: Record<string, number>;
}

export const buildingStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("em4_building_data");
  },
  // Get all building data, with migration fallback
  getData: (): BuildingData => {
    if (typeof window === 'undefined') return { constructionQueue: [], buildingDeltas: {} };
    
    const stored = localStorage.getItem(BUILDING_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return {
          constructionQueue: Array.isArray(parsed.constructionQueue) ? parsed.constructionQueue : [],
          buildingDeltas: parsed.buildingDeltas || {}
        };
      } catch (e) {
        console.error("Failed to parse building storage", e);
      }
    }

    // MIGRATION FALLBACK: Try to get from gameStorage if new storage is empty
    const session = gameStorage.getSession() as any;
    if (session) {
      const migratedData: BuildingData = {
        constructionQueue: session.constructionQueue || [],
        buildingDeltas: session.buildingDeltas || {}
      };
      
      // Save it to the new key immediately if there's data to migrate
      if (migratedData.constructionQueue.length > 0 || Object.keys(migratedData.buildingDeltas).length > 0) {
        buildingStorage.saveData(migratedData);
      }
      return migratedData;
    }

    return { constructionQueue: [], buildingDeltas: {} };
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

  incrementBuildingCount: (buildingKey: string) => {
    const data = buildingStorage.getData();
    const current = data.buildingDeltas[buildingKey] || 0;
    data.buildingDeltas[buildingKey] = (typeof current === 'number' ? current : 0) + 1;
    buildingStorage.saveData(data);
  }
};
