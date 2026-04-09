import { unVotingStorage } from "../components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/1_pemungutan_suara/utils/unVotingStorage";

/**
 * PBB Multipliers & Impact Logic
 * Manages game-wide logic for Economic Embargos and Sanctions
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
    
    const state = unVotingStorage.load();
    // Filter proposals that target THIS country OR are 'resolution' type (which might be global, though mostly targeted)
    const active = state.implementedProposals.filter(p => p.targetCountry === countryName);

    const multipliers: PBBMultipliers = {
      trade: 1.0,
      tax: 1.0,
      resource: 1.0,
      techSpeed: 1.0,
      armsSpeed: 1.0,
      buildCost: 1.0,
      impactLevel: 'clear'
    };

    active.forEach(p => {
      // 1. Total Economic Embargo (Total Trade)
      if (p.proposalName.toLocaleLowerCase().includes("embargo ekonomi")) {
        multipliers.trade = 0.2; // -80% revenue
        multipliers.impactLevel = 'embargoed';
      }
      
      // 2. Resource Embargo
      if (p.proposalName.toLocaleLowerCase().includes("sumber daya")) {
        multipliers.resource = 0.4; // -60% income from mines/rigs
        multipliers.impactLevel = 'embargoed';
      }
      
      // 3. Tech Embargo
      if (p.proposalName.toLocaleLowerCase().includes("penjualan teknologi")) {
        multipliers.techSpeed = 0.5; // -50% work speed
        multipliers.impactLevel = 'embargoed';
      }
      
      // 4. Arms Embargo
      if (p.proposalName.toLocaleLowerCase().includes("embargo senjata")) {
        multipliers.armsSpeed = 0.6; // -40% work speed
        multipliers.impactLevel = 'embargoed';
      }

      // 5. Economic Sanctions
      if (p.proposalName.toLocaleLowerCase().includes("sanksi ekonomi")) {
        multipliers.tax = 0.75; // -25% tax & revenue
        multipliers.trade = 0.75; // -25% trade revenue (cascades)
        multipliers.buildCost = 1.15; // +15% construction cost
        if (multipliers.impactLevel !== 'embargoed') {
          multipliers.impactLevel = 'sanctioned';
        }
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
