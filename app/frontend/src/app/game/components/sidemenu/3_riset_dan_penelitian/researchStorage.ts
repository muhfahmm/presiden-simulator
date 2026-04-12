"use client"

/**
 * Storage management for Research and Development progress.
 * Handles persistence of completed research and unlocking logic.
 */

const STORAGE_KEY = "em_research_progress_v1";

export interface ResearchState {
  completedIds: string[];
  activeResearch: {
    id: string;
    durationDays: number;
    startGameDate: number; // Timestamp of game date
  } | null;
}

const DEFAULT_STATE: ResearchState = {
  completedIds: [],
  activeResearch: null,
};

export const researchStorage = {
  /**
   * Reset all research progress
   */
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new Event("research_updated"));
    }
  },

  /**
   * Get current research progress from localStorage
   */
  getState: (): ResearchState => {
    if (typeof window === "undefined") return DEFAULT_STATE;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      researchStorage.saveState(DEFAULT_STATE);
      return DEFAULT_STATE;
    }
    return JSON.parse(stored);
  },

  /**
   * Save research progress to localStorage
   */
  saveState: (state: ResearchState) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event("research_updated"));
  },

  /**
   * Start a new research process based on GAME DATE
   */
  startResearch: (nodeId: string, durationStr: string, currentGameDate: Date) => {
    const state = researchStorage.getState();
    if (state.activeResearch) return false;

    const durationDays = parseInt(durationStr) || 1;

    const newState: ResearchState = {
      ...state,
      activeResearch: {
        id: nodeId,
        durationDays: durationDays,
        startGameDate: currentGameDate.getTime(),
      }
    };

    researchStorage.saveState(newState);
    return true;
  },

  /**
   * Called daily by the game clock.
   */
  updateProgress: (currentDate: Date) => {
    const state = researchStorage.getState();
    if (!state.activeResearch) return;

    const { id, durationDays, startGameDate } = state.activeResearch;
    
    // Calculate days passed in game
    const diffTime = Math.abs(currentDate.getTime() - startGameDate);
    const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (daysPassed >= durationDays) {
      researchStorage.completeResearch(id);
    } else {
      // Just refresh UI occasionally
      window.dispatchEvent(new Event("research_updated"));
    }
  },

  /**
   * Helper to get progress details
   */
  getProgress: (nodeId: string, currentDate: Date) => {
    const state = researchStorage.getState();
    if (!state.activeResearch || state.activeResearch.id !== nodeId) return null;

    const { durationDays, startGameDate } = state.activeResearch;
    const diffTime = Math.abs(currentDate.getTime() - startGameDate);
    const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const percentage = Math.min(100, (daysPassed / durationDays) * 100);
    const remainingDays = Math.max(0, durationDays - daysPassed);

    return { percentage, remainingDays };
  },

  /**
   * Manually complete a research
   */
  completeResearch: (nodeId: string) => {
    const state = researchStorage.getState();
    if (!state.completedIds.includes(nodeId)) {
      const newState: ResearchState = {
        completedIds: [...state.completedIds, nodeId],
        activeResearch: state.activeResearch?.id === nodeId ? null : state.activeResearch
      };
      researchStorage.saveState(newState);
      return true;
    }
    return false;
  },

  /**
   * Determine the status of a node
   */
  getNodeStatus: (nodeId: string, category: string, tier: number, allNodes: any[]): 'completed' | 'available' | 'locked' | 'researching' => {
    const state = researchStorage.getState();
    
    if (state.completedIds.includes(nodeId)) return 'completed';
    if (state.activeResearch?.id === nodeId) return 'researching';

    if (tier === 1) return 'available';

    const prevTierNode = allNodes.find(n => n.category === category && n.tier === tier - 1);
    if (prevTierNode && state.completedIds.includes(prevTierNode.id)) {
      return 'available';
    }

    return 'locked';
  }
};

