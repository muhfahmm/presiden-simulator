import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { barbados_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/155_barbados";
import { barbados_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/155_barbados";
import { barbados_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/155_barbados";
import { barbados_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/155_barbados";
import { barbados_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/155_barbados";
import { barbados_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/155_barbados";
import { barbados_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/155_barbados";
import { barbados_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/155_barbados";
import { barbados_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/155_barbados";
import { barbados_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/155_barbados";
import { barbados_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/155_barbados";
import { barbados_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/155_barbados";
import { barbados_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/155_barbados";
import { barbados_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/155_barbados";
import { barbados_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/155_barbados";
import { barbados_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/155_barbados";
import { barbados_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/155_barbados";
import { barbados_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/155_barbados";
import { barbados_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/155_barbados";
import { barbados_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/155_barbados";

export const barbados: CountryData = {
  ...barbados_profile,
  "sektor_listrik": barbados_listrik,
  "infrastruktur": barbados_infrastruktur,
  "sektor_ekstraksi": barbados_ekstraksi,
  "sektor_manufaktur": barbados_manufaktur,
  "sektor_peternakan": barbados_peternakan,
  "sektor_agrikultur": barbados_agrikultur,
  "sektor_perikanan": barbados_perikanan,
  "sektor_olahan_pangan": barbados_olahan_pangan,
  "sektor_farmasi": barbados_farmasi,
  "sektor_pertahanan": barbados_pertahanan,
  "armada_militer": barbados_armada,
  "militer_strategis": barbados_strategis,
  "armada_kepolisian": barbados_kepolisian,
  "pabrik_militer": barbados_pabrik,
    "pendidikan": barbados_pendidikan,
  "kesehatan": barbados_kesehatan,
  "hukum": barbados_hukum,
  "sektor_olahraga": barbados_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": barbados_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 4,
    "keamanan": 12,
    "keuangan": 26,
    "lingkungan": 60
  }
};

