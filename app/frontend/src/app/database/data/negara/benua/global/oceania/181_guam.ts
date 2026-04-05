import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { guam_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/181_guam";
import { guam_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/oceania/181_guam";
import { guam_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/181_guam";
import { guam_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/181_guam";
import { guam_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/oceania/181_guam";
import { guam_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/oceania/181_guam";
import { guam_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/oceania/181_guam";
import { guam_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/oceania/181_guam";
import { guam_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/181_guam";
import { guam_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/181_guam";
import { guam_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/181_guam";
import { guam_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/oceania/181_guam";
import { guam_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/181_guam";
import { guam_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/oceania/181_guam";
import { guam_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/181_guam";
import { guam_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/oceania/181_guam";
import { guam_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/181_guam";
import { guam_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/181_guam";
import { guam_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/oceania/181_guam";
const guam_geopolitik = {
    "un_vote": 151,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 33,
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

export const guam: CountryData = {
  ...guam_profile,
  "sektor_listrik": guam_listrik,
  "infrastruktur": guam_infrastruktur,
  "sektor_ekstraksi": guam_ekstraksi,
  "sektor_manufaktur": guam_manufaktur,
  "sektor_peternakan": guam_peternakan,
  "sektor_agrikultur": guam_agrikultur,
  "sektor_perikanan": guam_perikanan,
  "sektor_olahan_pangan": guam_olahan_pangan,
  "sektor_farmasi": guam_farmasi,
  "sektor_pertahanan": guam_pertahanan,
  "armada_militer": guam_armada,
  "militer_strategis": guam_strategis,
  "armada_kepolisian": guam_kepolisian,
  "pabrik_militer": guam_pabrik,
    "pendidikan": guam_pendidikan,
  "kesehatan": guam_kesehatan,
  "hukum": guam_hukum,
  "sektor_olahraga": guam_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
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
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
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
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 315800,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guam_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 29,
    "keamanan": 38,
    "keuangan": 32,
    "lingkungan": 60
  }
};

