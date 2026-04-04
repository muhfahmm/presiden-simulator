import { CountryData } from "@/app/database/data/types";
import { turki_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/eropa/148_turki";
import { turki_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/148_turki";
import { turki_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/eropa/148_turki";
import { turki_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/eropa/148_turki";
import { turki_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/148_turki";
import { turki_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/eropa/148_turki";
import { turki_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/148_turki";
import { turki_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/148_turki";
import { turki_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/eropa/148_turki";
import { turki_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/eropa/148_turki";
import { turki_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/eropa/148_turki";
import { turki_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/148_turki";
import { turki_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/148_turki";
import { turki_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/148_turki";
import { turki_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/eropa/148_turki";
import { turki_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/148_turki";
import { turki_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/eropa/148_turki";
import { turki_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/148_turki";
import { turki_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/148_turki";
import { turki_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/148_turki";

export const turki: CountryData = {
  ...turki_profile,
  "sektor_listrik": turki_listrik,
  "infrastruktur": turki_infrastruktur,
  "sektor_ekstraksi": turki_ekstraksi,
  "sektor_manufaktur": turki_manufaktur,
  "sektor_peternakan": turki_peternakan,
  "sektor_agrikultur": turki_agrikultur,
  "sektor_perikanan": turki_perikanan,
  "sektor_olahan_pangan": turki_olahan_pangan,
  "sektor_farmasi": turki_farmasi,
  "sektor_pertahanan": turki_pertahanan,
  "armada_militer": turki_armada,
  "militer_strategis": turki_strategis,
  "armada_kepolisian": turki_kepolisian,
  "pabrik_militer": turki_pabrik,
    "pendidikan": turki_pendidikan,
  "kesehatan": turki_kesehatan,
  "hukum": turki_hukum,
  "sektor_olahraga": turki_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 9
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
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
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": turki_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 22,
    "keamanan": 26,
    "keuangan": 28,
    "lingkungan": 60
  }
};

