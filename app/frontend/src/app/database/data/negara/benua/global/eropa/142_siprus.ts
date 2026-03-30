import { CountryData } from "@/app/database/data/types";
import { siprus_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/eropa/142_siprus";
import { siprus_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/142_siprus";
import { siprus_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/eropa/142_siprus";
import { siprus_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/eropa/142_siprus";
import { siprus_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/142_siprus";
import { siprus_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/eropa/142_siprus";
import { siprus_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/142_siprus";
import { siprus_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/142_siprus";
import { siprus_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/eropa/142_siprus";
import { siprus_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/eropa/142_siprus";
import { siprus_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/eropa/142_siprus";
import { siprus_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/142_siprus";
import { siprus_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/142_siprus";
import { siprus_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/142_siprus";
import { siprus_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/eropa/142_siprus";
import { siprus_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/142_siprus";
import { siprus_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/eropa/142_siprus";
import { siprus_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/142_siprus";
import { siprus_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/142_siprus";
import { siprus_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/142_siprus";

export const siprus: CountryData = {
  ...siprus_profile,
  "sektor_listrik": siprus_listrik,
  "infrastruktur": siprus_infrastruktur,
  "sektor_ekstraksi": siprus_ekstraksi,
  "sektor_manufaktur": siprus_manufaktur,
  "sektor_peternakan": siprus_peternakan,
  "sektor_agrikultur": siprus_agrikultur,
  "sektor_perikanan": siprus_perikanan,
  "sektor_olahan_pangan": siprus_olahan_pangan,
  "sektor_farmasi": siprus_farmasi,
  "sektor_pertahanan": siprus_pertahanan,
  "armada_militer": siprus_armada,
  "militer_strategis": siprus_strategis,
  "armada_kepolisian": siprus_kepolisian,
  "pabrik_militer": siprus_pabrik,
    "pendidikan": siprus_pendidikan,
  "kesehatan": siprus_kesehatan,
  "hukum": siprus_hukum,
  "sektor_olahraga": siprus_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 29
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
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
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 7200,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": siprus_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 24,
    "pendidikan": 19,
    "keamanan": 4,
    "keuangan": 13,
    "lingkungan": 60
  }
};

