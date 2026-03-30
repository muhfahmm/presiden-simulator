"use client"

const STORAGE_KEY = "em4_diplomacy_storage";

export interface ConstructionProject {
  country: string;
  startDate: string; // ISO string
  totalDays: number;
  remainingDays: number;
}

export interface DiplomacyData {
  activeProjects: Record<string, ConstructionProject>;
  completedEmbassies: string[]; // List of country names (id_id or id_en)
  lastUpdateDate: string | null;
}

export const diplomacyStorage = {
  getData: (): DiplomacyData => {
    if (typeof window === 'undefined') return { activeProjects: {}, completedEmbassies: [], lastUpdateDate: null };
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
    return { activeProjects: {}, completedEmbassies: [], lastUpdateDate: null };
  },

  saveData: (data: DiplomacyData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('diplomacy_storage_updated'));
  },

  startConstruction: (country: string, duration: number, startDate: Date) => {
    const data = diplomacyStorage.getData();
    data.activeProjects[country] = {
      country,
      startDate: startDate.toISOString(),
      totalDays: duration,
      remainingDays: duration
    };
    diplomacyStorage.saveData(data);
  },

  updateProgress: (currentDate: Date) => {
    const data = diplomacyStorage.getData();
    const curDateStr = currentDate.toISOString().split('T')[0];
    
    if (data.lastUpdateDate === curDateStr) return; // Prevent double processing

    let changed = false;
    const countries = Object.keys(data.activeProjects);
    
    for (const country of countries) {
      const project = data.activeProjects[country];
      project.remainingDays -= 1;
      changed = true;

      if (project.remainingDays <= 0) {
        // Construction Finished
        data.completedEmbassies.push(country);
        delete data.activeProjects[country];
      }
    }

    data.lastUpdateDate = curDateStr;
    if (changed || true) { // Always save lastUpdateDate
      diplomacyStorage.saveData(data);
    }
  },

  getStatus: (country: string): 'none' | 'building' | 'completed' => {
    const data = diplomacyStorage.getData();
    if (data.completedEmbassies.includes(country)) return 'completed';
    if (data.activeProjects[country]) return 'building';
    return 'none';
  },

  getProject: (country: string): ConstructionProject | null => {
    const data = diplomacyStorage.getData();
    return data.activeProjects[country] || null;
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('diplomacy_storage_updated'));
  }
};
