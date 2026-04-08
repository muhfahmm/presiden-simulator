/**
 * Trade Partner Color System
 * Sistem untuk menampilkan status mitra dagang berdasarkan sanksi/embargo
 * 
 * Warna:
 * - BIRU (Blue): Normal - Mitra dagang aktif
 * - KUNING (Yellow): Sanctioned - Terkena Sanksi Ekonomi
 * - MERAH (Red): Embargoed - Terkena Embargo Ekonomi
 */

export type TradePartnerColorStatus = 'blue' | 'yellow' | 'red' | 'normal';

export interface TradePartnerColorInfo {
  countryName: string;
  color: TradePartnerColorStatus;
  reason: string;
  type: 'normal' | 'sanction' | 'embargo';
}

/**
 * Dapatkan warna mitra dagang berdasarkan status sanksi/embargo
 */
export function getTradePartnerColor(
  countryName: string,
  gameState: any
): TradePartnerColorInfo {
  // Cek apakah negara terkena embargo ekonomi
  if (isCountryEmbargoed(countryName, gameState)) {
    return {
      countryName,
      color: 'red',
      reason: 'Terkena Embargo Ekonomi',
      type: 'embargo',
    };
  }

  // Cek apakah negara terkena sanksi ekonomi
  if (isCountrySanctioned(countryName, gameState)) {
    return {
      countryName,
      color: 'yellow',
      reason: 'Terkena Sanksi Ekonomi',
      type: 'sanction',
    };
  }

  // Normal - mitra dagang aktif
  return {
    countryName,
    color: 'blue',
    reason: 'Mitra dagang aktif',
    type: 'normal',
  };
}

/**
 * Cek apakah negara terkena embargo ekonomi
 */
export function isCountryEmbargoed(countryName: string, gameState: any): boolean {
  const embargo = gameState.embargoes?.ekonomi;
  if (!embargo?.isActive) return false;

  return embargo.tradePartners?.includes(countryName) || false;
}

/**
 * Cek apakah negara terkena sanksi ekonomi
 */
export function isCountrySanctioned(countryName: string, gameState: any): boolean {
  const sanction = gameState.sanctions?.ekonomi;
  if (!sanction?.isActive) return false;

  return sanction.targetCountry === countryName;
}

/**
 * Dapatkan semua mitra dagang dengan status warna mereka
 */
export function getAllTradePartnersWithColors(
  tradePartners: string[],
  gameState: any
): TradePartnerColorInfo[] {
  return tradePartners.map(partner => getTradePartnerColor(partner, gameState));
}

/**
 * Dapatkan CSS class untuk warna mitra dagang
 */
export function getTradePartnerColorClass(color: TradePartnerColorStatus): string {
  switch (color) {
    case 'blue':
      return 'bg-blue-500 border-blue-400 text-blue-100'; // Normal
    case 'yellow':
      return 'bg-yellow-500 border-yellow-400 text-yellow-100'; // Sanksi
    case 'red':
      return 'bg-red-500 border-red-400 text-red-100'; // Embargo
    case 'normal':
    default:
      return 'bg-gray-500 border-gray-400 text-gray-100';
  }
}

/**
 * Dapatkan badge text untuk status mitra dagang
 */
export function getTradePartnerStatusBadge(color: TradePartnerColorStatus): string {
  switch (color) {
    case 'blue':
      return 'AKTIF';
    case 'yellow':
      return 'SANKSI';
    case 'red':
      return 'EMBARGO';
    case 'normal':
    default:
      return 'NORMAL';
  }
}

/**
 * Dapatkan deskripsi lengkap status mitra dagang
 */
export function getTradePartnerStatusDescription(
  countryName: string,
  gameState: any
): string {
  const colorInfo = getTradePartnerColor(countryName, gameState);

  switch (colorInfo.type) {
    case 'embargo':
      return `${countryName} sedang terkena Embargo Ekonomi. Perdagangan dengan negara ini diblokir total.`;
    case 'sanction':
      return `${countryName} sedang terkena Sanksi Ekonomi. Perdagangan dengan negara ini terbatas.`;
    case 'normal':
    default:
      return `${countryName} adalah mitra dagang aktif. Perdagangan berjalan normal.`;
  }
}

/**
 * Cek apakah user country dapat berdagang dengan partner country
 */
export function canTrade(
  userCountry: string,
  partnerCountry: string,
  gameState: any
): boolean {
  // Jika partner terkena embargo, tidak bisa berdagang
  if (isCountryEmbargoed(partnerCountry, gameState)) {
    return false;
  }

  // Jika partner terkena sanksi, perdagangan terbatas (bisa tapi dengan penalty)
  // Untuk sekarang, kita izinkan tapi dengan penalty
  return true;
}

/**
 * Dapatkan trade penalty berdasarkan status partner
 */
export function getTradePenalty(
  partnerCountry: string,
  gameState: any
): { penalty: number; reason: string } {
  if (isCountryEmbargoed(partnerCountry, gameState)) {
    return {
      penalty: 100, // 100% penalty = tidak bisa berdagang
      reason: 'Embargo Ekonomi',
    };
  }

  if (isCountrySanctioned(partnerCountry, gameState)) {
    return {
      penalty: 25, // 25% penalty untuk sanksi
      reason: 'Sanksi Ekonomi',
    };
  }

  return {
    penalty: 0,
    reason: 'Normal',
  };
}

/**
 * Update warna mitra dagang di map
 */
export function updateMapCountryColor(
  countryName: string,
  gameState: any
): {
  color: string;
  hexColor: string;
  status: TradePartnerColorStatus;
} {
  const colorInfo = getTradePartnerColor(countryName, gameState);

  const colorMap: Record<TradePartnerColorStatus, { color: string; hexColor: string }> = {
    blue: { color: 'blue', hexColor: '#3b82f6' }, // Normal
    yellow: { color: 'yellow', hexColor: '#eab308' }, // Sanksi
    red: { color: 'red', hexColor: '#ef4444' }, // Embargo
    normal: { color: 'gray', hexColor: '#6b7280' },
  };

  const colorData = colorMap[colorInfo.color];

  return {
    color: colorData.color,
    hexColor: colorData.hexColor,
    status: colorInfo.color,
  };
}
