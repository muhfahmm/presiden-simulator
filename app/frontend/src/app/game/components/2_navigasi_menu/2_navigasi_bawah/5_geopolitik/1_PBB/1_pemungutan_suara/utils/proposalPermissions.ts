/**
 * Sistem Izin Proposal untuk Resolusi, Sanksi, dan Embargo
 * Menentukan negara mana yang dapat mengajukan proposal
 */

export interface ProposalPermissions {
  canPropose: boolean;
  reason: string;
  requiresUNSC: boolean;
}

/**
 * Daftar negara yang dapat mengajukan proposal tanpa harus menjadi anggota UNSC
 * Country 207 adalah negara khusus yang memiliki hak istimewa
 */
const PRIVILEGED_COUNTRIES = [
  '207',
  'Country 207',
  '207 Country',
  'country 207',
  '207country',
];

/**
 * Cek apakah negara dapat mengajukan proposal
 * @param countryName - Nama atau ID negara
 * @param isUNSCMember - Apakah negara adalah anggota UNSC
 * @returns Informasi izin proposal
 */
export function checkProposalPermission(
  countryName: string,
  isUNSCMember: boolean
): ProposalPermissions {
  // Semua negara dapat mengajukan proposal
  return {
    canPropose: true,
    reason: 'Anda dapat mengajukan proposal',
    requiresUNSC: false,
  };
}

/**
 * Cek apakah negara adalah negara istimewa
 */
export function isPrivilegedCountry(countryName: string): boolean {
  if (!countryName) return false;
  
  const normalizedName = countryName.trim().toLowerCase().replace(/\s+/g, '');
  
  return PRIVILEGED_COUNTRIES.some(country => {
    const normalizedCountry = country.toLowerCase().replace(/\s+/g, '');
    return normalizedCountry === normalizedName || 
           normalizedName.includes(normalizedCountry) ||
           normalizedCountry.includes(normalizedName);
  });
}

/**
 * Dapatkan daftar negara istimewa
 */
export function getPrivilegedCountries(): string[] {
  return [...PRIVILEGED_COUNTRIES];
}

/**
 * Tambahkan negara ke daftar istimewa
 */
export function addPrivilegedCountry(countryName: string): void {
  if (!PRIVILEGED_COUNTRIES.includes(countryName)) {
    PRIVILEGED_COUNTRIES.push(countryName);
  }
}

/**
 * Hapus negara dari daftar istimewa
 */
export function removePrivilegedCountry(countryName: string): void {
  const index = PRIVILEGED_COUNTRIES.indexOf(countryName);
  if (index > -1) {
    PRIVILEGED_COUNTRIES.splice(index, 1);
  }
}

/**
 * Cek apakah negara dapat mengajukan proposal tertentu
 * @param countryName - Nama atau ID negara
 * @param isUNSCMember - Apakah negara adalah anggota UNSC
 * @param proposalType - Tipe proposal: 'resolution', 'sanction', atau 'embargo'
 */
export function canProposeType(
  countryName: string,
  isUNSCMember: boolean,
  proposalType: 'resolution' | 'sanction' | 'embargo'
): boolean {
  const permission = checkProposalPermission(countryName, isUNSCMember);
  
  if (!permission.canPropose) {
    return false;
  }

  // Semua tipe proposal memiliki persyaratan yang sama
  // Bisa dikustomisasi di masa depan jika ada perbedaan
  return true;
}

/**
 * Dapatkan pesan error jika negara tidak dapat mengajukan proposal
 */
export function getProposalErrorMessage(
  countryName: string,
  isUNSCMember: boolean
): string | null {
  const permission = checkProposalPermission(countryName, isUNSCMember);
  
  if (!permission.canPropose) {
    return permission.reason;
  }

  return null;
}

/**
 * Validasi proposal sebelum diajukan
 */
export function validateProposal(
  proposerCountry: string,
  targetCountry: string,
  isUNSCMember: boolean,
  proposalType: 'resolution' | 'sanction' | 'embargo'
): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Cek izin proposal
  if (!canProposeType(proposerCountry, isUNSCMember, proposalType)) {
    errors.push(getProposalErrorMessage(proposerCountry, isUNSCMember) || 'Tidak dapat mengajukan proposal');
  }

  // Cek apakah proposer dan target berbeda
  if (proposerCountry === targetCountry) {
    errors.push('Tidak dapat mengajukan proposal terhadap diri sendiri');
  }

  // Cek apakah target country valid
  if (!targetCountry || targetCountry.trim() === '') {
    errors.push('Negara target harus dipilih');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
