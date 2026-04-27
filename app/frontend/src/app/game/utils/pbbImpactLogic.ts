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
   */
  getCountryMultipliers: (countryName: string): PBBMultipliers => {
    if (typeof window === 'undefined') return pbbImpactLogic.getDefaults();

    // Import storage and time lazily to avoid circular dependencies or early access issues
    const { unVotingStorage } = require("@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/1_pemungutan_suara/logika_pemungutan_suara/unVotingStorage");
    const { timeStorage } = require("@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage");
    
    const data = unVotingStorage.getData();
    const gameDate = timeStorage.getState().gameDate;
    const now = gameDate.getTime();

    const multipliers = pbbImpactLogic.getDefaults();
    
    // Filter history for active sanctions on this country
    const activeImpacts = data.votingHistory.filter((item: any) => {
      if (item.status !== 'DITERIMA' || !item.targetCountry) return false;
      
      // Check if target matches
      const isTarget = item.targetCountry === countryName || 
                      (item.name === 'LARANGAN PERANG' && countryName); // Global effect

      if (!isTarget) return false;

      // Check if within duration
      if (item.startDate && item.endDate) {
        const start = new Date(item.startDate).getTime();
        const end = new Date(item.endDate).getTime();
        return now >= start && now <= end;
      }
      
      return true; // Fallback if no dates
    });

    activeImpacts.forEach((impact: any) => {
      const name = impact.name.toUpperCase();
      
      if (name === "EMBARGO EKONOMI") {
        multipliers.trade *= 0.2;
        multipliers.impactLevel = 'embargoed';
      } else if (name === "EMBARGO PENJUALAN SUMBER DAYA") {
        multipliers.resource *= 0.4;
        multipliers.impactLevel = 'embargoed';
      } else if (name === "EMBARGO PENJUALAN TEKNOLOGI") {
        multipliers.techSpeed *= 0.5;
        multipliers.impactLevel = 'embargoed';
      } else if (name === "EMBARGO SENJATA") {
        multipliers.armsSpeed *= 0.6;
        multipliers.impactLevel = 'embargoed';
      } else if (name === "SANKSI EKONOMI") {
        multipliers.tax *= 0.75;
        multipliers.buildCost *= 1.15;
        if (multipliers.impactLevel !== 'embargoed') multipliers.impactLevel = 'sanctioned';
      } else if (name === "LARANGAN PERANG") {
        multipliers.impactLevel = 'sanctioned'; // Use sanctioned color for war ban
      }
    });

    return multipliers;
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
