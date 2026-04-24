import { happinessStorage } from "@/app/game/components/1_navbar/1_kepuasan/happinessStorage";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { gameStorage } from "@/app/game/gamestorage";
import { aiBuildingStorage } from "../../../5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiProductionStorage } from "../../../5_AI_Pembangunan/antarmuka_data_pembangunan/AIProductionStorage";
import { aiDefenseStorage } from "../../../6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";
import { relationStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";

/**
 * KolektorDataNasional - Perangkat Observasi AI
 * Berfungsi untuk mengumpulkan data statistik kebahagiaan dan faktor ekonominya
 * untuk diproses oleh otak AI.
 */
export class KolektorDataNasional {
  /**
   * Mengambil paket data lengkap untuk dianalisis oleh NPC (Komprehensif)
   * @param countryName Nama negara yang sedang diobservasi
   * @param currentHappiness Nilai kebahagiaan saat ini
   */
  static kumpulkanData(countryName: string, currentHappiness: number = 55.0) {
    const country = countries.find(c => c.name_id === countryName || c.name_en === countryName);
    if (!country) return null;

    const countryNameEn = country.name_en;

    // 1. Data Kebahagiaan saat ini
    const statsValue = currentHappiness;

    // 2. Data Fiskal (Pajak)
    const storedTaxes = taxStorage.getTaxes(countryNameEn);
    const taxData = storedTaxes || country.pajak;
    const domesticKeys = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
    const avgTaxRate = domesticKeys.reduce((sum, key) => {
      const field = (taxData as any)[key];
      const rate = typeof field === 'object' ? (field?.tarif || 0) : (field || 0);
      return sum + rate;
    }, 0) / domesticKeys.length;
    
    // 3. Data Pasar (Harga)
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
      bandara: country.infrastruktur?.bandara || 0,
      helipad: country.infrastruktur?.helipad || 0,
    };

    // 5. Data Populasi & Hunian
    const rawPop = (country as any).jumlah_penduduk ?? (country as any).populasi ?? 0;
    const population = typeof rawPop === 'string' 
      ? (parseInt(rawPop.replace(/\./g, '')) || 0)
      : (typeof rawPop === 'number' ? rawPop : 0);

    const aiDeltas = aiBuildingStorage.getAllBuildingDeltas(countryNameEn);
    const housing = {
      rumah_subsidi: (Number(country.hunian?.rumah_subsidi) || 0) + (aiDeltas["9_rumah_subsidi"] || 0),
      apartemen: (Number(country.hunian?.apartemen) || 0) + (aiDeltas["10_apartemen"] || 0),
      mansion: (Number(country.hunian?.mansion) || 0) + (aiDeltas["11_mansion"] || 0),
    };

    // 6. Data Ekonomi (Budget)
    const budget = aiBudgetStorage.getBudget(countryNameEn);

    // 7. Data Produksi (Stocks)
    const stocks = aiProductionStorage.getStocks(countryNameEn);

    // 8. Data Pertahanan (Military Power)
    const defenseDeltas = aiDefenseStorage.getAllDefenseDeltas(countryNameEn);
    const military_power = Object.values(defenseDeltas).reduce((sum, count) => sum + count, 0);

    // 9. Data Geopolitik (Relations)
    const otherCountries = countries.filter(c => c.name_en !== countryNameEn).slice(0, 20); // Limit to 20 for perf
    const totalRelation = otherCountries.reduce((sum, other) => {
      return sum + relationStorage.getRelationScore(other.name_en, 50, countryNameEn);
    }, 0);
    const avg_relation = otherCountries.length > 0 ? totalRelation / otherCountries.length : 50;

    return {
      timestamp: Date.now(),
      negara: countryNameEn,
      religion: country.religion,
      ideology: country.ideology,
      avg_tax_rate: avgTaxRate,
      avg_price_multiplier: avgPriceMult,
      population: population,
      housing: housing,
      infrastructure: infrastructure,
      budget: budget,
      stocks: stocks,
      military_power: military_power,
      avg_relation: avg_relation,
      statistik: {
        indeks_kepuasan: statsValue,
        tren: "Flat",
        alasan_sistem: "Analisis NPC Komprehensif"
      }
    };
  }
}
