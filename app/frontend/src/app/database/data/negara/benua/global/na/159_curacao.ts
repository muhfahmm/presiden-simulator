import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { curacao_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/159_curacao";
import { curacao_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/na/159_curacao";
import { curacao_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/159_curacao";
import { curacao_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/159_curacao";
import { curacao_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/na/159_curacao";
import { curacao_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/159_curacao";
import { curacao_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/na/159_curacao";
import { curacao_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/na/159_curacao";
import { curacao_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/159_curacao";
import { curacao_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/159_curacao";
import { curacao_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/159_curacao";
import { curacao_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/na/159_curacao";
import { curacao_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/na/159_curacao";
import { curacao_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/na/159_curacao";
import { curacao_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/159_curacao";
import { curacao_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/na/159_curacao";
import { curacao_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/159_curacao";
import { curacao_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/159_curacao";
import { curacao_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/na/159_curacao";
import { curacao_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/159_curacao";

export const curacao: CountryData = {
  ...curacao_profile,
  "sektor_listrik": curacao_listrik,
  "infrastruktur": curacao_infrastruktur,
  "sektor_ekstraksi": curacao_ekstraksi,
  "sektor_manufaktur": curacao_manufaktur,
  "sektor_peternakan": curacao_peternakan,
  "sektor_agrikultur": curacao_agrikultur,
  "sektor_perikanan": curacao_perikanan,
  "sektor_olahan_pangan": curacao_olahan_pangan,
  "sektor_farmasi": curacao_farmasi,
  "sektor_pertahanan": curacao_pertahanan,
  "armada_militer": curacao_armada,
  "militer_strategis": curacao_strategis,
  "armada_kepolisian": curacao_kepolisian,
  "pabrik_militer": curacao_pabrik,
    "pendidikan": curacao_pendidikan,
  "kesehatan": curacao_kesehatan,
  "hukum": curacao_hukum,
  "sektor_olahraga": curacao_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 40,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": curacao_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 17,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};

