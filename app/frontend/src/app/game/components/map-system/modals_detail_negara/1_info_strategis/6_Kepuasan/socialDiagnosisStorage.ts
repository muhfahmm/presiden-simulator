"use client"
// Diagnostic storage for AI root cause analysis

const AI_ROOT_CAUSE_KEY = "em4_ai_social_root_causes";

export interface AIRootCauseData {
  root_cause: string;
  suggested_action: string;
  last_updated: number;
}

export type AIRootCauseMap = Record<string, AIRootCauseData>;

/**
 * AIRootCauseStorage
 * Persists the diagnostic results from the Happiness Engine for each AI nation.
 * Used by Construction and Event modules to coordinate social stability fixes.
 */
export const aiRootCauseStorage = {
  getLatest: (countryNameEn: string): AIRootCauseData => {
    if (typeof window === 'undefined') return { root_cause: 'none', suggested_action: 'none', last_updated: 0 };
    
    const stored = localStorage.getItem(AI_ROOT_CAUSE_KEY);
    if (!stored) return { root_cause: 'none', suggested_action: 'none', last_updated: 0 };
    
    try {
      const data: AIRootCauseMap = JSON.parse(stored);
      // Case-insensitive lookup
      const realKey = Object.keys(data).find(k => k.toLowerCase() === countryNameEn.toLowerCase());
      return (realKey ? data[realKey] : null) || { root_cause: 'none', suggested_action: 'none', last_updated: 0 };
    } catch {
      return { root_cause: 'none', suggested_action: 'none', last_updated: 0 };
    }
  },

  saveDiagnosis: (countryNameEn: string, root_cause: string, suggested_action: string) => {
    if (typeof window === 'undefined') return;
    
    const stored = localStorage.getItem(AI_ROOT_CAUSE_KEY);
    const data: AIRootCauseMap = stored ? JSON.parse(stored) : {};
    
    data[countryNameEn] = {
      root_cause,
      suggested_action,
      last_updated: Date.now()
    };
    
    localStorage.setItem(AI_ROOT_CAUSE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('ai_root_cause_updated'));
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AI_ROOT_CAUSE_KEY);
  }
};
