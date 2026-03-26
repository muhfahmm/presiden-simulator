export interface InfraQuality {
  kualitas_jalan: number; // 0-100
  cakupan_internet: number; // 0-100
}

export const INFRASTRUKTUR_QUALITY: Record<string, InfraQuality> = {
  // Asia
  "indonesia": { kualitas_jalan: 64, cakupan_internet: 79 },
  "malaysia": { kualitas_jalan: 76, cakupan_internet: 96 },
  "singapura": { kualitas_jalan: 92, cakupan_internet: 99 },
  "thailand": { kualitas_jalan: 70, cakupan_internet: 88 },
  "vietnam": { kualitas_jalan: 50, cakupan_internet: 79 },
  "filipina": { kualitas_jalan: 45, cakupan_internet: 73 },
  "brunei": { kualitas_jalan: 78, cakupan_internet: 98 },
  "kamboja": { kualitas_jalan: 40, cakupan_internet: 60 },
  "laos": { kualitas_jalan: 35, cakupan_internet: 55 },
  "myanmar": { kualitas_jalan: 30, cakupan_internet: 45 },
  "timor_leste": { kualitas_jalan: 25, cakupan_internet: 40 },
  "tiongkok": { kualitas_jalan: 80, cakupan_internet: 76 },
  "jepang": { kualitas_jalan: 86, cakupan_internet: 94 },
  "korea_selatan": { kualitas_jalan: 88, cakupan_internet: 98 },
  "india": { kualitas_jalan: 55, cakupan_internet: 50 },
  "pakistan": { kualitas_jalan: 45, cakupan_internet: 40 },
  "arab_saudi": { kualitas_jalan: 81, cakupan_internet: 99 },
  "uni_emirat_arab": { kualitas_jalan: 85, cakupan_internet: 99 },
  "turki": { kualitas_jalan: 75, cakupan_internet: 85 },
  "israel": { kualitas_jalan: 82, cakupan_internet: 92 },
  "hong_kong": { kualitas_jalan: 87, cakupan_internet: 96 },
  "taiwan": { kualitas_jalan: 84, cakupan_internet: 95 },

  // Eropa
  "jerman": { kualitas_jalan: 85, cakupan_internet: 96 },
  "prancis": { kualitas_jalan: 85, cakupan_internet: 94 },
  "inggris": { kualitas_jalan: 80, cakupan_internet: 97 },
  "belanda": { kualitas_jalan: 88, cakupan_internet: 99 },
  "swiss": { kualitas_jalan: 91, cakupan_internet: 99 },
  "norwegia": { kualitas_jalan: 82, cakupan_internet: 99 },
  "swedia": { kualitas_jalan: 84, cakupan_internet: 99 },
  "denmark": { kualitas_jalan: 85, cakupan_internet: 99 },
  "italia": { kualitas_jalan: 70, cakupan_internet: 85 },
  "spanyol": { kualitas_jalan: 80, cakupan_internet: 94 },
  "rusia": { kualitas_jalan: 55, cakupan_internet: 88 },

  // Amerika
  "amerika_serikat": { kualitas_jalan: 71, cakupan_internet: 92 },
  "kanada": { kualitas_jalan: 75, cakupan_internet: 96 },
  "brazil": { kualitas_jalan: 45, cakupan_internet: 85 },
  "argentina": { kualitas_jalan: 50, cakupan_internet: 90 },
  "meksiko": { kualitas_jalan: 60, cakupan_internet: 75 },

  // Oseania
  "australia": { kualitas_jalan: 78, cakupan_internet: 94 },
  "selandia_baru": { kualitas_jalan: 80, cakupan_internet: 96 },

  // Afrika
  "afrika_selatan": { kualitas_jalan: 65, cakupan_internet: 75 },
  "mesir": { kualitas_jalan: 60, cakupan_internet: 72 },
  "nigeria": { kualitas_jalan: 35, cakupan_internet: 55 },
};

// Default values for countries not in the specific mapping
const DEFAULT_INFRA: InfraQuality = {
  kualitas_jalan: 40,
  cakupan_internet: 50,
};

export function getInfraQuality(countryId: string): InfraQuality {
  return INFRASTRUKTUR_QUALITY[countryId.toLowerCase()] || DEFAULT_INFRA;
}
