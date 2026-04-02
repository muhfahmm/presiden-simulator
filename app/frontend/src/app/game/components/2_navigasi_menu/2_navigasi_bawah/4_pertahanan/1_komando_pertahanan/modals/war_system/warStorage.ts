"use client"

import { WarDeclaration, WarPhase, WarOutcome, WarForces, WarCasualties, BattlefieldState, TerritoryProgress } from "./warTypes";

const WAR_STORAGE_KEY = "em2_active_wars";
const WAR_HISTORY_KEY = "em2_war_history";

export const warStorage = {
  // === Core CRUD ===

  /** Get all active wars */
  getActiveWars: (): WarDeclaration[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(WAR_STORAGE_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  },

  /** Get war history (finished wars) */
  getWarHistory: (): WarDeclaration[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(WAR_HISTORY_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  },

  /** Save active wars to localStorage */
  _save: (wars: WarDeclaration[]) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(WAR_STORAGE_KEY, JSON.stringify(wars));
  },

  /** Save to history */
  _saveHistory: (wars: WarDeclaration[]) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(WAR_HISTORY_KEY, JSON.stringify(wars));
  },

  // === Operations ===

  /** Declare a new war */
  declareWar: (
    attacker: string,
    defender: string,
    attackerForces: WarForces,
    defenderForces: WarForces,
    attackerPower: number,
    defenderPower: number
  ): WarDeclaration => {
    const wars = warStorage.getActiveWars();

    const war: WarDeclaration = {
      id: `war_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      attacker,
      defender,
      attackerForces,
      defenderForces,
      phase: 'deploying',
      startedAt: Date.now(),
      attackerPower,
      defenderPower,
    };

    wars.push(war);
    warStorage._save(wars);

    // Dispatch event for map overlay
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("war_started", { detail: war }));
      window.dispatchEvent(new Event("war_storage_updated"));
    }

    return war;
  },

  /** Update war phase */
  updateWarPhase: (warId: string, phase: WarPhase) => {
    const wars = warStorage.getActiveWars();
    const war = wars.find(w => w.id === warId);
    if (!war) return;

    war.phase = phase;
    warStorage._save(wars);

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("war_phase_changed", { detail: { warId, phase } }));
      window.dispatchEvent(new Event("war_storage_updated"));
    }
  },

  /** Resolve a war with outcome */
  resolveWar: (warId: string, outcome: WarOutcome, casualties: WarCasualties) => {
    const wars = warStorage.getActiveWars();
    const idx = wars.findIndex(w => w.id === warId);
    if (idx === -1) return;

    const war = wars[idx];
    war.phase = 'finished';
    war.outcome = outcome;
    war.casualties = casualties;
    war.resolvedAt = Date.now();

    // Move to history
    wars.splice(idx, 1);
    warStorage._save(wars);

    const history = warStorage.getWarHistory();
    history.push(war);
    warStorage._saveHistory(history);

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("war_resolved", { detail: war }));
      window.dispatchEvent(new Event("war_storage_updated"));
    }
  },

  /** Get count of active wars */
  getWarCount: (): number => {
    return warStorage.getActiveWars().length;
  },

  /** Check if currently at war with a specific country */
  isAtWarWith: (countryId: string): boolean => {
    const wars = warStorage.getActiveWars();
    return wars.some(w =>
      w.defender.toLowerCase() === countryId.toLowerCase() ||
      w.attacker.toLowerCase() === countryId.toLowerCase()
    );
  },

  /** Clear all wars (for debug/reset) */
  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(WAR_STORAGE_KEY);
    localStorage.removeItem(WAR_HISTORY_KEY);
    localStorage.removeItem("em2_battlefields");
    window.dispatchEvent(new Event("war_storage_updated"));
  },

  // === Battlefield State (Tactical War) ===

  /** Save battlefield state for a war */
  saveBattlefield: (warId: string, state: BattlefieldState) => {
    if (typeof window === "undefined") return;
    const all = warStorage._getBattlefields();
    all[warId] = state;
    localStorage.setItem("em2_battlefields", JSON.stringify(all));

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("war_territory_updated", {
        detail: {
          warId,
          defenderCountry: state.defenderCountry,
          occupationPercent: state.occupationPercent,
        }
      }));
    }
  },

  /** Get battlefield state for a war */
  getBattlefield: (warId: string): BattlefieldState | null => {
    const all = warStorage._getBattlefields();
    return all[warId] || null;
  },

  /** Get all battlefields */
  _getBattlefields: (): Record<string, BattlefieldState> => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem("em2_battlefields");
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch {
      return {};
    }
  },

  /** Get territory progress for all active wars */
  getTerritoryProgress: (): TerritoryProgress[] => {
    const battlefields = warStorage._getBattlefields();
    return Object.values(battlefields).map(bf => ({
      warId: bf.warId,
      defenderCountry: bf.defenderCountry,
      occupationPercent: bf.occupationPercent,
      totalTiles: bf.tiles.flat().filter(t => t.isInsideCountry).length,
      occupiedTiles: bf.tiles.flat().filter(t => t.status === 'user').length,
      isConquered: bf.occupationPercent >= 75,
    }));
  },

  /** Remove battlefield when war is resolved */
  removeBattlefield: (warId: string) => {
    if (typeof window === "undefined") return;
    const all = warStorage._getBattlefields();
    delete all[warId];
    localStorage.setItem("em2_battlefields", JSON.stringify(all));
  },
};

