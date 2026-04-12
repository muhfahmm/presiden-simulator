import { happinessStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/happinessStorage";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { gameStorage } from "@/app/game/gamestorage";

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
  static kumpulkanData(countryName: string) {
    const country = countries.find(c => c.name_id === countryName || c.name_en === countryName);
    if (!country) return null;

    // 1. Data Kebahagiaan saat ini
    const stats = happinessStorage.getStats();

    // 2. Hitung Rata-rata Pajak Domestik
    const taxData = taxStorage.getTaxes(country.name_en) || country.pajak;
    const domesticKeys = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
    const avgTaxRate = domesticKeys.reduce((sum, key) => sum + ((taxData as any)[key]?.tarif || 0), 0) / domesticKeys.length;
    
    // 3. Hitung Rata-rata Harga Pasar (Multiplier)
    const priceData = priceStorage.getData(country);
    const priceKeys = Object.keys(BASE_PRICES) as Array<keyof typeof BASE_PRICES>;
    const avgPriceMult = priceKeys.reduce((acc, k) => acc + (priceData[k] / BASE_PRICES[k]), 0) / priceKeys.length;
    
    // 4. Data Infrastruktur
    // Kita asumsikan NPC menggunakan baseline dari database + deltas jika ada
    const infrastructure = {
      jalur_sepeda: country.infrastruktur?.jalur_sepeda || 0,
      jalan_tol: country.infrastruktur?.jalan_raya || 0,
      terminal_bus: country.infrastruktur?.terminal_bus || 0,
      jalur_kereta: country.infrastruktur?.stasiun_kereta_api || 0,
      kereta_bawah_tanah: country.infrastruktur?.kereta_bawah_tanah || 0,
      pelabuhan_laut: country.infrastruktur?.pelabuhan || 0,
      bandara: country.infrastruktur?.bandara || 0,
      helipad: country.infrastruktur?.helipad || 0
    };

    return {
      timestamp: Date.now(),
      negara: countryName,
      religion: country.religion,
      ideology: country.ideology,
      avg_tax_rate: avgTaxRate,
      avg_price_multiplier: avgPriceMult,
      infrastructure: infrastructure,
      statistik: {
        indeks_kepuasan: stats.value,
        tren: stats.trend,
        alasan_sistem: stats.reasoning,
        dampak_pajak: stats.taxImpact || 0,
        dampak_harga: stats.priceImpact || 0
      }
    };
  }
}
