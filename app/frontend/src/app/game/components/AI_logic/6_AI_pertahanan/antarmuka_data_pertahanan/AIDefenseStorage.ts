"use client"

const AI_DEFENSE_KEY = "em4_ai_defense_data";

export interface AIDefenseItem {
  id: string;
  buildingKey: string;
  label: string;
  sector: string;       // 'komando' | 'intelijen' | 'armada_darat' | 'armada_laut' | 'armada_udara' | 'polisi' | 'pertahanan'
  startDate: number;
  endDate: number;
  waktu_pembangunan: number;
  quantity: number;
}

export interface AIDefenseData {
  [countryNameEn: string]: {
    defenseDeltas: Record<string, number>;
    constructionQueue: AIDefenseItem[];
  };
}

export const aiDefenseStorage = {
  initialize: (): AIDefenseData => {
    if (typeof window === 'undefined') return {};
    const stored = localStorage.getItem(AI_DEFENSE_KEY);
    return stored ? JSON.parse(stored) : {};
  },

  getData: (countryNameEn: string) => {
    const global = aiDefenseStorage.initialize();
    const realKey = Object.keys(global).find(k => k.toLowerCase() === countryNameEn.toLowerCase());
    return (realKey ? global[realKey] : null) || { defenseDeltas: {}, constructionQueue: [] };
  },

  saveCountryData: (countryNameEn: string, defenseDeltas: Record<string, number>, constructionQueue: AIDefenseItem[]) => {
    if (typeof window === 'undefined') return;
    const global = aiDefenseStorage.initialize();
    const realKey = Object.keys(global).find(k => k.toLowerCase() === countryNameEn.toLowerCase()) || countryNameEn;
    global[realKey] = { defenseDeltas, constructionQueue };
    localStorage.setItem(AI_DEFENSE_KEY, JSON.stringify(global));
    window.dispatchEvent(new Event('ai_defense_updated'));
  },

  getAllDefenseDeltas: (countryNameEn: string) => {
    return aiDefenseStorage.getData(countryNameEn).defenseDeltas;
  },

  getQueue: (countryNameEn: string) => {
    return aiDefenseStorage.getData(countryNameEn).constructionQueue;
  },

  addToQueue: (countryNameEn: string, item: Omit<AIDefenseItem, "id">) => {
    const data = aiDefenseStorage.getData(countryNameEn);
    const newItem: AIDefenseItem = {
      ...item,
      id: `def_${Math.random().toString(36).substring(2, 11)}`
    };
    data.constructionQueue.push(newItem);
    aiDefenseStorage.saveCountryData(countryNameEn, data.defenseDeltas, data.constructionQueue);
    return newItem;
  },

  removeFromQueue: (countryNameEn: string, id: string) => {
    const data = aiDefenseStorage.getData(countryNameEn);
    data.constructionQueue = data.constructionQueue.filter(item => item.id !== id);
    aiDefenseStorage.saveCountryData(countryNameEn, data.defenseDeltas, data.constructionQueue);
  },

  incrementDefenseCount: (countryNameEn: string, buildingKey: string, quantity: number = 1) => {
    const data = aiDefenseStorage.getData(countryNameEn);
    const current = Number(data.defenseDeltas[buildingKey] || 0);
    data.defenseDeltas[buildingKey] = current + Number(quantity);
    aiDefenseStorage.saveCountryData(countryNameEn, data.defenseDeltas, data.constructionQueue);
  },

  /**
   * Complete multiple defense projects atomically to prevent race conditions.
   */
  completeProjects: (countryNameEn: string, projects: AIDefenseItem[]) => {
    const data = aiDefenseStorage.getData(countryNameEn);
    const projectIds = projects.map(p => p.id);

    projects.forEach(project => {
      const buildingKey = project.buildingKey;
      const quantity = Number(project.quantity || 1);
      const current = Number(data.defenseDeltas[buildingKey] || 0);
      data.defenseDeltas[buildingKey] = current + quantity;

      console.log(`[AI DEFENSE STORAGE] Completing ${quantity}x ${buildingKey} for ${countryNameEn}. New Delta: ${data.defenseDeltas[buildingKey]}`);
    });

    data.constructionQueue = data.constructionQueue.filter(item => !projectIds.includes(item.id));
    aiDefenseStorage.saveCountryData(countryNameEn, data.defenseDeltas, data.constructionQueue);
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_DEFENSE_KEY);
    window.dispatchEvent(new Event('ai_defense_updated'));
  }
};
