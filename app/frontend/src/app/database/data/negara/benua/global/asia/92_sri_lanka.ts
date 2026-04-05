import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { sri_lanka_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/92_sri_lanka";
import { sri_lanka_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/92_sri_lanka";
import { sri_lanka_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/92_sri_lanka";
import { sri_lanka_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/92_sri_lanka";
import { sri_lanka_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/92_sri_lanka";
import { sri_lanka_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/92_sri_lanka";
import { sri_lanka_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/92_sri_lanka";
import { sri_lanka_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/92_sri_lanka";
import { sri_lanka_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/92_sri_lanka";
import { sri_lanka_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/92_sri_lanka";
import { sri_lanka_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/92_sri_lanka";
import { sri_lanka_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/92_sri_lanka";
import { sri_lanka_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/92_sri_lanka";
import { sri_lanka_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/92_sri_lanka";
import { sri_lanka_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/92_sri_lanka";
import { sri_lanka_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/92_sri_lanka";
import { sri_lanka_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/92_sri_lanka";
import { sri_lanka_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/92_sri_lanka";
import { sri_lanka_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/92_sri_lanka";
import { sri_lanka_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/92_sri_lanka";

export const sri_lanka: CountryData = {
  ...sri_lanka_profile,
  "sektor_listrik": sri_lanka_listrik,
  "infrastruktur": sri_lanka_infrastruktur,
  "sektor_ekstraksi": sri_lanka_ekstraksi,
  "sektor_manufaktur": sri_lanka_manufaktur,
  "sektor_peternakan": sri_lanka_peternakan,
  "sektor_agrikultur": sri_lanka_agrikultur,
  "sektor_perikanan": sri_lanka_perikanan,
  "sektor_olahan_pangan": sri_lanka_olahan_pangan,
  "sektor_farmasi": sri_lanka_farmasi,
  "sektor_pertahanan": sri_lanka_pertahanan,
  "armada_militer": sri_lanka_armada,
  "militer_strategis": sri_lanka_strategis,
  "armada_kepolisian": sri_lanka_kepolisian,
  "pabrik_militer": sri_lanka_pabrik,
    "pendidikan": sri_lanka_pendidikan,
  "kesehatan": sri_lanka_kesehatan,
  "hukum": sri_lanka_hukum,
  "sektor_olahraga": sri_lanka_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 33,
      "kepuasan": 52,
      "pendapatan": 69
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 21
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 26
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": sri_lanka_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 13,
    "keamanan": 31,
    "keuangan": 33,
    "lingkungan": 60
  }
};

