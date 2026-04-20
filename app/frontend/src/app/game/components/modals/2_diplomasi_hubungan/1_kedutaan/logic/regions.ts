"use client"

/**
 * Mapping Country ID ke Sub-Region Diplomasi
 */
export const COUNTRY_REGIONS: Record<string, string> = {
  // ASIA TENGGARA
  'indonesia': 'Asia Tenggara',
  'malaysia': 'Asia Tenggara',
  'singapura': 'Asia Tenggara',
  'thailand': 'Asia Tenggara',
  'filipina': 'Asia Tenggara',
  'vietnam': 'Asia Tenggara',
  'brunei': 'Asia Tenggara',
  'kamboja': 'Asia Tenggara',
  'laos': 'Asia Tenggara',
  'myanmar': 'Asia Tenggara',
  'republik_timor_leste': 'Asia Tenggara',

  // ASIA TIMUR
  'china': 'Asia Timur',
  'jepang': 'Asia Timur',
  'korea_selatan': 'Asia Timur',
  'korea_utara': 'Asia Timur',
  'taiwan': 'Asia Timur',
  'hong_kong': 'Asia Timur',
  'makau': 'Asia Timur',
  'mongolia': 'Asia Timur',

  // TIMUR TENGAH / ASIA BARAT
  'arab_saudi': 'Timur Tengah',
  'iran': 'Timur Tengah',
  'irak': 'Timur Tengah',
  'israel': 'Timur Tengah',
  'palestina': 'Timur Tengah',
  'kuwait': 'Timur Tengah',
  'qatar': 'Timur Tengah',
  'uni_emirat_arab': 'Timur Tengah',
  'yaman': 'Timur Tengah',
  'yordania': 'Timur Tengah',
  'lebanon': 'Timur Tengah',
  'oman': 'Timur Tengah',
  'suriah': 'Timur Tengah',

  // ASIA SELATAN
  'india': 'Asia Selatan',
  'pakistan': 'Asia Selatan',
  'bangladesh': 'Asia Selatan',
  'sri_lanka': 'Asia Selatan',
  'nepal': 'Asia Selatan',
  'bhutan': 'Asia Selatan',
  'maldives': 'Asia Selatan',

  // ASIA TENGAH
  'kazakhstan': 'Asia Tengah',
  'uzbekistan': 'Asia Tengah',
  'turkmenistan': 'Asia Tengah',
  'kirgizstan': 'Asia Tengah',
  'tajikistan': 'Asia Tengah',

  // AFRIKA UTARA
  'mesir': 'Afrika Utara',
  'aljazair': 'Afrika Utara',
  'libya': 'Afrika Utara',
  'maroko': 'Afrika Utara',
  'tunisia': 'Afrika Utara',

  // AFRIKA BARAT
  'nigeria': 'Afrika Barat',
  'ghana': 'Afrika Barat',
  'senegal': 'Afrika Barat',
  'mali': 'Afrika Barat',
  // ... (Mapping others to their respective generic continents if unknown)
};

export function getRegion(countryNameId: string, defaultContinent: string): string {
  const normalizedId = countryNameId.toLowerCase().replace(/\s+/g, '_');
  return COUNTRY_REGIONS[normalizedId] || defaultContinent;
}
