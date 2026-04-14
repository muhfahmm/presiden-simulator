import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";

const STABILITY_STORAGE_KEY = "em4_stability_data";

export interface StabilityData {
  stability: number;
  lastUpdated: number;
}

export const stabilityStorage = {
  getData: (): StabilityData => {
    const defaults: StabilityData = {
      stability: 82, // Base stability fallback
      lastUpdated: Date.now()
    };

    if (typeof window === 'undefined') return defaults;

    const stored = localStorage.getItem(STABILITY_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stability storage", e);
      }
    }

    // Initialization fallback from session or country default
    const session = gameStorage.getSession() as any;
    if (session) {
      const countryName = session.country || "Indonesia";
      const countryData = countries.find(c => c.name_id === countryName || c.name_en === countryName);
      return {
        stability: 80, // Hardcoded baseline to match page.tsx initial state
        lastUpdated: Date.now()
      };
    }

    return defaults;
  },

  saveData: (data: StabilityData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STABILITY_STORAGE_KEY, JSON.stringify({ ...data, lastUpdated: Date.now() }));
    window.dispatchEvent(new Event('stability_updated'));
  },

  getStability: (): number => {
    return stabilityStorage.getData().stability;
  },

  updateStability: (delta: number) => {
    const data = stabilityStorage.getData();
    data.stability = Math.max(0, Math.min(100, data.stability + delta));
    stabilityStorage.saveData(data);
    return data.stability;
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STABILITY_STORAGE_KEY);
  },

  // Server-authoritative: set stability directly from Go Server
  setStabilityDirect: (value: number) => {
    stabilityStorage.saveData({
      stability: Math.max(0, Math.min(100, value)),
      lastUpdated: Date.now()
    });
  },

  /**
   * Mengintegrasikan efek Ideologi ke Stabilitas Nasional.
   * Dipanggil secara periodik (misal mingguan) dari GameTimeControls.
   */
  applyDailyStabilityDecay: () => {
    if (typeof window === 'undefined') return;

    const data = stabilityStorage.getData();
    let delta = 0;

    // 1. Ambil data negara & kebijakan
    const { gameStorage } = require("@/app/game/gamestorage");
    const { countries } = require("@/app/database/data/negara/benua/index");
    const session = gameStorage.getSession();
    const countryName = session?.country || "Indonesia";
    const country = countries.find((c: any) => c.name_id === countryName || c.name_en === countryName) || countries[0];

    // 2. Ambil Ideologi Aktif
    const { ideologyStorage } = require("../../2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/ideologyStorage");
    const currentIdeology = ideologyStorage.getCurrentIdeology(country.ideology);

    // 3. Efek Liberalisme: Penalti Stabilitas (-0.2% per hari/tick)
    if (currentIdeology === "Liberalisme") {
      const { LIBERALISME_STABILITY_PENALTY } = require("../../2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/5_liberalisme/2_minus/minus");
      delta += LIBERALISME_STABILITY_PENALTY;
    }

    // 4. Efek Monarki: Risiko Revolusi jika Kepuasan Rendah
    if (currentIdeology === "Monarki") {
      const { happinessStorage } = require("../../2_navigasi_menu/2_navigasi_bawah/1_kepuasan/happinessStorage");
      const happiness = happinessStorage.getStats().value;
      
      // Jika kepuasan < 40, ada penalti tambahan (Risiko Revolusi)
      if (happiness < 40) {
        const { MONARKI_REVOLUTION_RISK_MODIFIER } = require("../../2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/8_monarki/2_minus/minus");
        // Penalti stabilitas diperberat 1.5x (baseline -0.1 menjadi -0.15)
        delta -= (0.1 * MONARKI_REVOLUTION_RISK_MODIFIER);
      }
    }

    // 5. Baseline Drift (Stabilitas perlahan kembali ke normal/80 jika tidak ada tekanan)
    if (delta === 0) {
      if (data.stability < 80) delta += 0.05;
      else if (data.stability > 80) delta -= 0.02;
    }

    if (delta !== 0) {
      stabilityStorage.updateStability(delta);
    }
  }
};

