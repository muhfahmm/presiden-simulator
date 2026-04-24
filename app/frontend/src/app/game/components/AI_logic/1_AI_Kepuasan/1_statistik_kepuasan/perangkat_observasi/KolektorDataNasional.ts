import { happinessStorage } from "@/app/game/components/1_navbar/1_kepuasan/happinessStorage";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { gameStorage } from "@/app/game/gamestorage";
import { aiBuildingStorage } from "../../../5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";

/**
 * KolektorDataNasional - Perangkat Observasi AI
 * Berfungsi untuk mengumpulkan data statistik kebahagiaan dan faktor ekonominya
 * untuk diproses oleh otak AI.
 */
export class KolektorDataNasional {
  /**
   * Mengambil paket data lengkap untuk dianalisis oleh NPC
   * @param countryName Nama negara yang sedang diobservasi
   */
  /**
   * Mengambil paket data lengkap untuk dianalisis oleh NPC (Komprehensif)
   * @param countryName Nama negara yang sedang diobservasi
   */
  static kumpulkanData(countryName: string, currentHappiness: number = 55.0) {
    const country = countries.find(c => c.name_id === countryName || c.name_en === countryName);
    if (!country) return null;

    // 1. Data Kebahagiaan saat ini (Passed from caller storage)
    const statsValue = currentHappiness;

    // 2. Hitung Rata-rata Pajak Domestik - Fallback to country defaults if not in taxStorage
    const storedTaxes = taxStorage.getTaxes(country.name_en);
    const taxData = storedTaxes || country.pajak;
    
    const domesticKeys = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
    const avgTaxRate = domesticKeys.reduce((sum, key) => {
      const field = (taxData as any)[key];
      // Some countries use 'tarif' in the nested object, some might just be values
      const rate = typeof field === 'object' ? (field?.tarif || 0) : (field || 0);
      return sum + rate;
    }, 0) / domesticKeys.length;
    
    // 3. Hitung Rata-rata Harga Pasar (Multiplier)
    const priceData = priceStorage.getData(country);
    const priceKeys = Object.keys(BASE_PRICES) as Array<keyof typeof BASE_PRICES>;
    const avgPriceMult = priceKeys.reduce((acc, k) => acc + (priceData[k] / (BASE_PRICES[k] || 1)), 0) / priceKeys.length;
    
    // 4. Data Infrastruktur
    const infrastructure = {
      jalur_sepeda: country.infrastruktur?.jalur_sepeda || 0,
      jalan_tol: country.infrastruktur?.jalan_raya || 0,
      terminal_bus: country.infrastruktur?.terminal_bus || 0,
      jalur_kereta: country.infrastruktur?.stasiun_kereta_api || 0,
      kereta_bawah_tanah: country.infrastruktur?.kereta_bawah_tanah || 0,
      pelabuhan_laut: country.infrastruktur?.pelabuhan || 0,
    };
    const bandara = country.infrastruktur?.bandara || 0;
    const helipad = country.infrastruktur?.helipad || 0;

    // 5. Data Populasi & Hunian
    const rawPop = (country as any).jumlah_penduduk ?? (country as any).populasi ?? 0;
    const population = typeof rawPop === 'string' 
      ? (parseInt(rawPop.replace(/\./g, '')) || 0)
      : (typeof rawPop === 'number' ? rawPop : 0);

    const aiDeltas = aiBuildingStorage.getAllBuildingDeltas(country.name_en);
    const housing = {
      rumah_subsidi: (Number(country.hunian?.rumah_subsidi) || 0) + (aiDeltas["9_rumah_subsidi"] || 0),
      apartemen: (Number(country.hunian?.apartemen) || 0) + (aiDeltas["10_apartemen"] || 0),
      mansion: (Number(country.hunian?.mansion) || 0) + (aiDeltas["11_mansion"] || 0),
    };

    return {
      timestamp: Date.now(),
      negara: country.name_en, // Normalize to EN for storage consistency
      religion: country.religion,
      ideology: country.ideology,
      avg_tax_rate: avgTaxRate,
      avg_price_multiplier: avgPriceMult,
      population: population,
      housing: housing,
      infrastructure: { ...infrastructure, bandara, helipad },
      statistik: {
        indeks_kepuasan: statsValue,
        tren: "Flat",
        alasan_sistem: "Analisis NPC Baseline",
        dampak_pajak: 0,
        dampak_harga: 0
      }
    };
  }
}
