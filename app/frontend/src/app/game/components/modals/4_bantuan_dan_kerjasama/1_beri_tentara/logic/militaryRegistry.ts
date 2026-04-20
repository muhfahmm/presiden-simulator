// Military Data Registry Mapping
// Maps country IDs/Names to their military data exports in 2_armada_militer

export const militaryRegistry: Record<string, { continent: string; id: number; exportName: string }> = {
  "indonesia": { continent: "asia", id: 67, exportName: "indonesia_armada" },
  "malaysia": { continent: "asia", id: 81, exportName: "malaysia_armada" },
  "singapura": { continent: "asia", id: 91, exportName: "singapura_armada" },
  "thailand": { continent: "asia", id: 96, exportName: "thailand_armada" },
  "filipina": { continent: "asia", id: 63, exportName: "filipina_armada" },
  "vietnam": { continent: "asia", id: 100, exportName: "vietnam_armada" },
  "china": { continent: "asia", id: 62, exportName: "china_armada" },
  "india": { continent: "asia", id: 66, exportName: "india_armada" },
  "jepang": { continent: "asia", id: 71, exportName: "jepang_armada" },
  "korea selatan": { continent: "asia", id: 75, exportName: "korea_selatan_armada" },
  "australia": { continent: "oceania", id: 103, exportName: "australia_armada" },
  "amerika serikat": { continent: "na", id: 154, exportName: "amerika_serikat_armada" },
  "rusia": { continent: "eropa", id: 144, exportName: "rusia_armada" },
  "afrika selatan": { continent: "afrika", id: 1, exportName: "afrika_selatan_armada" },
};

export function getMilitaryDataKey(countryName: string): { continent: string; id: number; exportName: string } | null {
  const normalized = countryName.toLowerCase().trim();
  return militaryRegistry[normalized] || null;
}
