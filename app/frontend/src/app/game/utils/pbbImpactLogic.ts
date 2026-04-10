/**
 * PBB Multipliers & Impact Logic (Prototype Mode)
 * Manages game-wide logic for Economic Embargos and Sanctions.
 * NOTE: Currently in prototype mode, returns default multipliers (no active impacts).
 */

export interface PBBMultipliers {
  trade: number;
  tax: number;
  resource: number;
  techSpeed: number;
  armsSpeed: number;
  buildCost: number;
  impactLevel: 'clear' | 'sanctioned' | 'embargoed';
}

export const pbbImpactLogic = {
  /**
   * Calculate all active multipliers for a given country based on PBB resolutions
   * Prototype: Always returns default multipliers.
   */
  getCountryMultipliers: (_countryName: string): PBBMultipliers => {
    return pbbImpactLogic.getDefaults();
  },

  /**
   * Helper to return default multipliers (no impacts)
   */
  getDefaults: (): PBBMultipliers => ({
    trade: 1.0,
    tax: 1.0,
    resource: 1.0,
    techSpeed: 1.0,
    armsSpeed: 1.0,
    buildCost: 1.0,
    impactLevel: 'clear'
  }),

  /**
   * Get UI color class based on impact level
   */
  getStatusColor: (impactLevel: 'clear' | 'sanctioned' | 'embargoed', defaultColorClass: string = 'text-emerald-400'): string => {
    switch (impactLevel) {
      case 'embargoed':
        return 'text-rose-500 font-extrabold shadow-rose-500/20';
      case 'sanctioned':
        return 'text-amber-400 font-black shadow-amber-500/20';
      default:
        return defaultColorClass;
    }
  }
};
