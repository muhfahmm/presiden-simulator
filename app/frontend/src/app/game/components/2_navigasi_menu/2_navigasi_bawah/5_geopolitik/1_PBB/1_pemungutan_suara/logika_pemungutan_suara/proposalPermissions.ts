
export interface PermissionResult {
  canPropose: boolean;
  reason?: string;
}

/**
 * Checks if a country has permission to propose a PBB resolution, sanction, or embargo.
 * Standard rules: Only UNSC members or privileged countries (Country 207/Player) can propose.
 */
export function checkProposalPermission(countryName: string, isUNSCMember: boolean): PermissionResult {
  if (isPrivilegedCountry(countryName)) {
    return { canPropose: true };
  }

  if (isUNSCMember) {
    return { canPropose: true };
  }

  return {
    canPropose: false,
    reason: "Hanya anggota Dewan Keamanan PBB atau negara istimewa yang dapat mengajukan proposal."
  };
}

/**
 * Identify if the country is 'Country 207' (Player) or other privileged nations.
 * Uses normalized matching to handle variations in naming.
 */
export function isPrivilegedCountry(name: string): boolean {
  if (!name) return false;
  
  const normalized = name.toLowerCase().trim();
  const privilegedNames = [
    '207', 
    'country 207', 
    '207 country',
    'indonesia' // In this game context, Indonesia is the player's primary country
  ];

  return privilegedNames.includes(normalized);
}
