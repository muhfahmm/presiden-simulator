import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { palau_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/oceania/186_palau";
import { palau_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/186_palau";
import { palau_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/oceania/186_palau";
import { palau_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/oceania/186_palau";
import { palau_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/186_palau";
import { palau_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/oceania/186_palau";
import { palau_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/186_palau";
import { palau_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/186_palau";
import { palau_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/oceania/186_palau";
import { palau_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/oceania/186_palau";
import { palau_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/oceania/186_palau";
import { palau_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/186_palau";
import { palau_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/186_palau";
import { palau_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/186_palau";
import { palau_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/oceania/186_palau";
import { palau_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/186_palau";
import { palau_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/oceania/186_palau";
import { palau_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/186_palau";
import { palau_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/186_palau";
import { palau_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/186_palau";

export const palau: CountryData = {
  ...palau_profile,
  "sektor_listrik": palau_listrik,
  "infrastruktur": palau_infrastruktur,
  "sektor_ekstraksi": palau_ekstraksi,
  "sektor_manufaktur": palau_manufaktur,
  "sektor_peternakan": palau_peternakan,
  "sektor_agrikultur": palau_agrikultur,
  "sektor_perikanan": palau_perikanan,
  "sektor_olahan_pangan": palau_olahan_pangan,
  "sektor_farmasi": palau_farmasi,
  "sektor_pertahanan": palau_pertahanan,
  "armada_militer": palau_armada,
  "militer_strategis": palau_strategis,
  "armada_kepolisian": palau_kepolisian,
  "pabrik_militer": palau_pabrik,
    "pendidikan": palau_pendidikan,
  "kesehatan": palau_kesehatan,
  "hukum": palau_hukum,
  "sektor_olahraga": palau_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": palau_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 27,
    "keamanan": 34,
    "keuangan": 8,
    "lingkungan": 60
  }
};

