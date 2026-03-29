import { CountryData } from "@/app/database/data/types/index";
import { 
  KAPASITAS_LISTRIK_METADATA, 
  mineralKritisRate, 
  produkIndustriRate, 
  komoditasPanganRate, 
  produksiMiliter, 
  tempatUmum 
} from "@/app/database/data/types";

/**
 * Metadata gabungan untuk pencarian biaya pemeliharaan.
 * Termasuk produksiMiliter untuk unit-unit armada tempur.
 */
export const ALL_MAINTENANCE_METADATA = [
  ...Object.values(KAPASITAS_LISTRIK_METADATA),
  ...Object.values(mineralKritisRate),
  ...Object.values(produkIndustriRate),
  ...Object.values(komoditasPanganRate),
  ...produksiMiliter,
  ...tempatUmum
];

/**
 * Menghitung pemeliharaan untuk satu sektor data tertentu.
 */
export function calculateSectorMaintenance(sectorData: any): number {
  if (!sectorData) return 0;
  let total = 0;
  
  // Rekursif jika ada objek bersarang (seperti darat, laut, udara di armada_militer)
  Object.entries(sectorData).forEach(([key, value]) => {
    if (typeof value === 'number') {
      const metadata = ALL_MAINTENANCE_METADATA.find((m: any) => m.key === key || m.dataKey === key) as any;
      if (metadata) {
        total += (value * (metadata.maintenanceCost || metadata.maintenance || 0));
      }
    } else if (typeof value === 'object' && value !== null) {
      total += calculateSectorMaintenance(value);
    }
  });
  
  return total;
}

/**
 * Menghitung total pemeliharaan harian untuk seluruh infrastruktur dan militer.
 * Hasil dibagi 10.000 untuk sinkronisasi dengan skala BudgetDeltaLogic.
 */
export function calculateDailyMaintenance(countryData: CountryData, buildingDeltas: Record<string, number> = {}): number {
  if (!countryData || !countryData.sektor_listrik) {
    // If country data is missing, we only calculate Deltas from buildingStorage
    let deltaTotal = 0;
    Object.entries(buildingDeltas || {}).forEach(([key, count]) => {
      const metadata = ALL_MAINTENANCE_METADATA.find((m: any) => m.key === key || m.dataKey === key) as any;
      if (metadata && typeof count === 'number') {
        deltaTotal += (count * (metadata.maintenanceCost || metadata.maintenance || 0));
      }
    });
    return deltaTotal / 10000;
  }

  const sectors = [
    countryData.sektor_listrik,
    countryData.infrastruktur,
    countryData.sektor_ekstraksi,
    countryData.sektor_manufaktur,
    countryData.sektor_peternakan,
    countryData.sektor_perikanan,
    countryData.sektor_agrikultur,
    countryData.sektor_olahan_pangan,
    countryData.sektor_farmasi,
    countryData.pendidikan,
    countryData.kesehatan,
    countryData.sektor_olahraga,
    countryData.hukum,
    countryData.sektor_pertahanan,
    countryData.armada_militer,
    countryData.armada_kepolisian,
    countryData.militer_strategis
  ];

  let total = 0;
  
  // 1. Hitung dari data negara (base)
  sectors.forEach(sector => {
    total += calculateSectorMaintenance(sector);
  });

  // 2. Hitung dari pembangunan user (deltas)
  if (buildingDeltas) {
    Object.entries(buildingDeltas).forEach(([key, count]) => {
      const metadata = ALL_MAINTENANCE_METADATA.find((m: any) => m.key === key || m.dataKey === key) as any;
      if (metadata && typeof count === 'number') {
        total += (count * (metadata.maintenanceCost || metadata.maintenance || 0));
      }
    });
  }

  return total / 10000;
}
