import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_serbia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/139_republik_serbia";
import { republik_serbia_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/eropa/139_republik_serbia";
import { republik_serbia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/139_republik_serbia";
import { republik_serbia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/139_republik_serbia";
import { republik_serbia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/eropa/139_republik_serbia";
import { republik_serbia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/eropa/139_republik_serbia";
import { republik_serbia_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/eropa/139_republik_serbia";
import { republik_serbia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/eropa/139_republik_serbia";
import { republik_serbia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/139_republik_serbia";
import { republik_serbia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/139_republik_serbia";
import { republik_serbia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/139_republik_serbia";
import { republik_serbia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/eropa/139_republik_serbia";
import { republik_serbia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/139_republik_serbia";
import { republik_serbia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/eropa/139_republik_serbia";
import { republik_serbia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/139_republik_serbia";
import { republik_serbia_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/eropa/139_republik_serbia";
import { republik_serbia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/139_republik_serbia";
import { republik_serbia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/139_republik_serbia";
import { republik_serbia_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/eropa/139_republik_serbia";
const republik_serbia_geopolitik = {
    "un_vote": 167,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
    },
    "organisasi_internasional": [
      {
        "name": "PBB (UN)",
        "role": "Anggota"
      },
      {
        "name": "WHO",
        "role": "Anggota"
      },
      {
        "name": "WTO",
        "role": "Anggota"
      }
    ]
  } as const;

export const republik_serbia: CountryData = {
  ...republik_serbia_profile,
  "sektor_listrik": republik_serbia_listrik,
  "infrastruktur": republik_serbia_infrastruktur,
  "sektor_ekstraksi": republik_serbia_ekstraksi,
  "sektor_manufaktur": republik_serbia_manufaktur,
  "sektor_peternakan": republik_serbia_peternakan,
  "sektor_agrikultur": republik_serbia_agrikultur,
  "sektor_perikanan": republik_serbia_perikanan,
  "sektor_olahan_pangan": republik_serbia_olahan_pangan,
  "sektor_farmasi": republik_serbia_farmasi,
  "sektor_pertahanan": republik_serbia_pertahanan,
  "armada_militer": republik_serbia_armada,
  "militer_strategis": republik_serbia_strategis,
  "armada_kepolisian": republik_serbia_kepolisian,
  "pabrik_militer": republik_serbia_pabrik,
    "pendidikan": republik_serbia_pendidikan,
  "kesehatan": republik_serbia_kesehatan,
  "hukum": republik_serbia_hukum,
  "sektor_olahraga": republik_serbia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 27
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 42
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 10
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
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_serbia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 3,
    "keamanan": 26,
    "keuangan": 26,
    "lingkungan": 60
  }
};

