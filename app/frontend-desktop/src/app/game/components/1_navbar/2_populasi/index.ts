import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/select-country/data/countries/_index";

const POPULATION_STORAGE_KEY = "em4_population_data";

export interface PopulationData {
  population: number;
  lastUpdated: number;
}

export const populationStorage = {
  // Get current population, with fallback to initial country data
  getData: (): PopulationData => {
    const defaults: PopulationData = { population: 0, lastUpdated: Date.now() };
    if (typeof window === 'undefined') return defaults;

    const stored = localStorage.getItem(POPULATION_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const population = typeof parsed.population === 'number' ? parsed.population : 0;
        const version = localStorage.getItem("em4_population_version");

        // Auto-sync logic (Migration v2): If version is missing, force sync with original country data once
        if (version !== "2") {
           const session = gameStorage.getSession() as any;
           if (session) {
             const countryName = session.country || "Indonesia";
             const countryData = countries.find(c => c.name_id === countryName || c.name_en === countryName);
             if (countryData) {
               localStorage.setItem("em4_population_version", "2");
               return populationStorage.getDataFromCountry(countryData);
             }
           }
        }

        return {
          population,
          lastUpdated: parsed.lastUpdated || Date.now()
        };
      } catch (e) {
        console.error("Failed to parse population storage", e);
      }
    }

    // Initialization fallback from session or country default
    const session = gameStorage.getSession() as any;
    if (session) {
      const countryName = session.country || "Indonesia";
      const countryData = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
      
      const basePop = typeof countryData.jumlah_penduduk === 'string' 
        ? parseInt(countryData.jumlah_penduduk.replace(/\./g, '')) 
        : (typeof countryData.jumlah_penduduk === 'number' ? countryData.jumlah_penduduk : 0);

      const initialData: PopulationData = {
        population: basePop,
        lastUpdated: Date.now()
      };
      
      populationStorage.saveData(initialData);
      return initialData;
    }

    return defaults;
  },

  saveData: (data: PopulationData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(POPULATION_STORAGE_KEY, JSON.stringify({ ...data, lastUpdated: Date.now() }));
    localStorage.setItem("em4_population_version", "2");
    
    // Dispatch event for UI updates
    window.dispatchEvent(new Event('population_updated'));
  },

  // Helper dedicated to fetching from country file data
  getDataFromCountry: (countryData: any): PopulationData => {
    const basePop = typeof countryData.jumlah_penduduk === 'string' 
      ? parseInt(countryData.jumlah_penduduk.replace(/\./g, '')) 
      : (typeof countryData.jumlah_penduduk === 'number' ? countryData.jumlah_penduduk : 0);

    const initialData: PopulationData = {
      population: basePop,
      lastUpdated: Date.now()
    };
    
    populationStorage.saveData(initialData);
    return initialData;
  },

  getPopulation: (): number => {
    return populationStorage.getData().population;
  },

  updatePopulation: (delta: number) => {
    const data = populationStorage.getData();
    data.population = Math.max(0, data.population + delta);
    populationStorage.saveData(data);
    return data.population;
  }
};
