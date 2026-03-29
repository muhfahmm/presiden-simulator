import { mineralKritisRate, produkIndustriRate, komoditasPanganRate } from "@/app/database/data/types";
import { militerRate } from "@/app/database/data/types/4_militer/7_militer_rates";
import { CountryData } from "@/app/database/data/types/index";

/**
 * MENGHITUNG TOTAL OUTPUT HARIAN UNTUK SETIAP JENIS BANGUNAN
 * Berdasarkan data dasar negara dan bangunan yang baru dibangun selama sesi.
 * Menggunakan kunci asli dari database (e.g. 5_pabrik_semen) untuk konsistensi UI & Storage.
 */
export function calculateDailyProductionTotals(countryData: CountryData, buildingDeltas: Record<string, number>): Record<string, number> {
  const deltas: Record<string, number> = {};

  // 1. SEKTOR EKSTRAKSI (Mineral Kritis & Strategis)
  Object.entries(mineralKritisRate).forEach(([key, val]: [string, any]) => {
    const baseCount = (countryData.sektor_ekstraksi[val.dataKey as keyof typeof countryData.sektor_ekstraksi] || 0);
    const totalCount = Number(baseCount) + (Number(buildingDeltas[key]) || 0);
    // Menggunakan 'produksi' atau 'production' (fallbak untuk kompatibilitas)
    const productionRate = val.produksi ?? val.production ?? 0;
    deltas[key] = totalCount * Math.floor(productionRate);
  });

  // 2. SEKTOR INDUSTRI & MANUFAKTUR (Termasuk Olahan Pangan & Farmasi)
  Object.entries(produkIndustriRate).forEach(([key, val]: [string, any]) => {
    // Cari data di sub-sektor yang benar (manufaktur, olahan_pangan, atau farmasi)
    let baseCount = 0;
    if (countryData.sektor_manufaktur && (val.dataKey in countryData.sektor_manufaktur)) {
      baseCount = (countryData.sektor_manufaktur as any)[val.dataKey];
    } else if (countryData.sektor_olahan_pangan && (val.dataKey in countryData.sektor_olahan_pangan)) {
      baseCount = (countryData.sektor_olahan_pangan as any)[val.dataKey];
    } else if (countryData.sektor_farmasi && (val.dataKey in countryData.sektor_farmasi)) {
      baseCount = (countryData.sektor_farmasi as any)[val.dataKey];
    }

    const totalCount = Number(baseCount) + (Number(buildingDeltas[key]) || 0);
    const productionRate = val.produksi ?? val.production ?? 0;
    deltas[key] = totalCount * Math.floor(productionRate);
  });

  // 3. SEKTOR PANGAN & KOMODITAS (Peternakan, Agrikultur, Perikanan)
  // Catatan: Pangan seringkali menggunakan pengelompokan (Grouped) di UI
  const panganGroups = [
    { key: "1_peternakan_ayam_unggas", base: "ayam_unggas", sector: "sektor_peternakan" },
    { key: "2_peternakan_sapi_perah", base: "sapi_perah", sector: "sektor_peternakan" },
    { key: "3_peternakan_sapi_potong", base: "sapi_potong", sector: "sektor_peternakan" },
    { key: "4_peternakan_domba_kambing", base: "domba_kambing", sector: "sektor_peternakan" },
    { key: "1_pertanian_padi", base: "padi", sector: "sektor_agrikultur" },
    { key: "2_pertanian_gandum_jagung", base: "gandum_jagung", sector: "sektor_agrikultur" },
    { key: "3_pertanian_sayur_umbi", base: "sayur_umbi", sector: "sektor_agrikultur" },
    { key: "4_pertanian_kedelai", base: "kedelai", sector: "sektor_agrikultur" },
    { key: "5_perkebunan_kelapa_sawit", base: "kelapa_sawit", sector: "sektor_agrikultur" },
    { key: "6_perkebunan_kopi_teh_kakao", base: "kopi_teh_kakao", sector: "sektor_agrikultur" },
    { key: "1_budidaya_udang_kerang", base: "udang_kerang", sector: "sektor_perikanan" },
    { key: "2_budidaya_ikan", base: "ikan", sector: "sektor_perikanan" },
  ];

  panganGroups.forEach(group => {
    const sectorData = countryData[group.sector as keyof CountryData] as any;
    const baseCount = sectorData ? (sectorData[group.base] || 0) : 0;
    const totalCount = Number(baseCount) + (Number(buildingDeltas[group.key]) || 0);
    
    // Cari rate produksinya dari komoditasPanganRate
    const rateData = (komoditasPanganRate as any)[group.key];
    const productionRate = rateData ? (rateData.produksi ?? rateData.production ?? 1) : 1;
    
    deltas[group.key] = totalCount * Math.floor(productionRate);
  });
  
  // 4. SEKTOR MILITER
  Object.entries(militerRate).forEach(([key, val]: [string, any]) => {
    const baseCount = countryData.pabrik_militer[key as keyof typeof countryData.pabrik_militer] || 0;
    const totalCount = Number(baseCount) + (Number(buildingDeltas[key]) || 0);
    const productionRate = val.produksi ?? val.production ?? 0;
    deltas[key] = totalCount * Math.floor(productionRate);
  });

  return deltas;
}
