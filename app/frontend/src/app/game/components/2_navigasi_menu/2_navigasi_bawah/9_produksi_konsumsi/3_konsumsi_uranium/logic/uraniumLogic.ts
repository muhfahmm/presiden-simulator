import { 
  mineralKritisRate,
  armadaMiliterRate,
  KAPASITAS_LISTRIK_METADATA
} from "@/app/database/data/semua_fitur_negara";

/**
 * Interface untuk hasil perhitungan Uranium
 */
export interface UraniumMetrics {
  totalProduction: number;
  totalConsumption: number;
  surplus: number;
  countMines: number;
  hasMines: boolean;
  consumptionBreakdown: {
    military: number;
    energy: number;
  };
  counts: {
    mines: number;
    pltn: number;
    carrierN: number;
    subN: number;
  };
}

/**
 * Menghitung metrik Uranium secara terpusat
 * Mengambil data dari currentData dan buildingDeltas
 */
export function calculateUraniumMetrics(currentData: any, buildingDeltas: any): UraniumMetrics {
  if (!currentData) return {
    totalProduction: 0,
    totalConsumption: 0,
    surplus: 0,
    countMines: 0,
    hasMines: false,
    consumptionBreakdown: { military: 0, energy: 0 },
    counts: { mines: 0, pltn: 0, carrierN: 0, subN: 0 }
  };

  // 1. Sync counts with deltas
  const countMines = (currentData.sektor_ekstraksi?.uranium || 0) + (buildingDeltas["2_tambang_uranium"] || 0);
  const countPLTN = (currentData.sektor_listrik?.pembangkit_listrik_tenaga_nuklir || 0) + (buildingDeltas["1_pembangkit_listrik_tenaga_nuklir"] || 0);
  const countCarrierN = (currentData.armada_militer?.laut?.kapal_induk_nuklir || 0) + (buildingDeltas["nuclear_carrier"] || 0);
  const countSubN = (currentData.armada_militer?.laut?.kapal_selam_nuklir || 0) + (buildingDeltas["submarine"] || 0);

  // 2. Calculate Production
  const uraniumMineMeta = mineralKritisRate["2_tambang_uranium"];
  const totalProduction = countMines * (uraniumMineMeta?.produksi || 2);

  // 3. Calculate Consumption
  // Energy Sector (PLTN)
  const pltnMeta = (KAPASITAS_LISTRIK_METADATA as any)["1_pembangkit_listrik_tenaga_nuklir"];
  const consPLTN = countPLTN * (pltnMeta?.konsumsi_uranium || 0.5);

  // Military Sector
  const consCarrierN = countCarrierN * (armadaMiliterRate["8b_kapal_induk_nuklir"]?.konsumsi_uranium || 5); // Default to 5 from metadata
  const consSubN = countSubN * (armadaMiliterRate["11_kapal_selam_nuklir"]?.konsumsi_uranium || 2); // Default to 2

  const totalConsumption = consPLTN + consCarrierN + consSubN;
  const surplus = totalProduction - totalConsumption;

  return {
    totalProduction,
    totalConsumption,
    surplus,
    countMines,
    hasMines: countMines > 0,
    consumptionBreakdown: {
      military: consCarrierN + consSubN,
      energy: consPLTN
    },
    counts: {
      mines: countMines,
      pltn: countPLTN,
      carrierN: countCarrierN,
      subN: countSubN
    }
  };
}
