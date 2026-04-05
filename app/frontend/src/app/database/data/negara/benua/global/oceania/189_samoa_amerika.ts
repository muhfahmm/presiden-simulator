import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { samoa_amerika_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/oceania/189_samoa_amerika";
import { samoa_amerika_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/189_samoa_amerika";
import { samoa_amerika_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/oceania/189_samoa_amerika";
import { samoa_amerika_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/oceania/189_samoa_amerika";
import { samoa_amerika_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/189_samoa_amerika";
import { samoa_amerika_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/oceania/189_samoa_amerika";
import { samoa_amerika_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/189_samoa_amerika";
import { samoa_amerika_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/189_samoa_amerika";
import { samoa_amerika_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/oceania/189_samoa_amerika";
import { samoa_amerika_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/oceania/189_samoa_amerika";
import { samoa_amerika_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/oceania/189_samoa_amerika";
import { samoa_amerika_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/189_samoa_amerika";
import { samoa_amerika_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/189_samoa_amerika";
import { samoa_amerika_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/189_samoa_amerika";
import { samoa_amerika_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/oceania/189_samoa_amerika";
import { samoa_amerika_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/189_samoa_amerika";
import { samoa_amerika_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/oceania/189_samoa_amerika";
import { samoa_amerika_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/189_samoa_amerika";
import { samoa_amerika_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/189_samoa_amerika";
import { samoa_amerika_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/189_samoa_amerika";

export const samoa_amerika: CountryData = {
  ...samoa_amerika_profile,
  "sektor_listrik": samoa_amerika_listrik,
  "infrastruktur": samoa_amerika_infrastruktur,
  "sektor_ekstraksi": samoa_amerika_ekstraksi,
  "sektor_manufaktur": samoa_amerika_manufaktur,
  "sektor_peternakan": samoa_amerika_peternakan,
  "sektor_agrikultur": samoa_amerika_agrikultur,
  "sektor_perikanan": samoa_amerika_perikanan,
  "sektor_olahan_pangan": samoa_amerika_olahan_pangan,
  "sektor_farmasi": samoa_amerika_farmasi,
  "sektor_pertahanan": samoa_amerika_pertahanan,
  "armada_militer": samoa_amerika_armada,
  "militer_strategis": samoa_amerika_strategis,
  "armada_kepolisian": samoa_amerika_kepolisian,
  "pabrik_militer": samoa_amerika_pabrik,
    "pendidikan": samoa_amerika_pendidikan,
  "kesehatan": samoa_amerika_kesehatan,
  "hukum": samoa_amerika_hukum,
  "sektor_olahraga": samoa_amerika_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 31,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
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
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": samoa_amerika_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 27,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};

