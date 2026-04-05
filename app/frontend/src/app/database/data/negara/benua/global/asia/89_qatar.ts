import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { qatar_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/89_qatar";
import { qatar_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/asia/89_qatar";
import { qatar_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/89_qatar";
import { qatar_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/89_qatar";
import { qatar_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/asia/89_qatar";
import { qatar_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/asia/89_qatar";
import { qatar_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/asia/89_qatar";
import { qatar_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/asia/89_qatar";
import { qatar_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/89_qatar";
import { qatar_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/89_qatar";
import { qatar_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/89_qatar";
import { qatar_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/asia/89_qatar";
import { qatar_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/89_qatar";
import { qatar_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/asia/89_qatar";
import { qatar_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/89_qatar";
import { qatar_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/asia/89_qatar";
import { qatar_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/89_qatar";
import { qatar_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/89_qatar";
import { qatar_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/asia/89_qatar";
const qatar_geopolitik = {
    "un_vote": 182,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 19,
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

export const qatar: CountryData = {
  ...qatar_profile,
  "sektor_listrik": qatar_listrik,
  "infrastruktur": qatar_infrastruktur,
  "sektor_ekstraksi": qatar_ekstraksi,
  "sektor_manufaktur": qatar_manufaktur,
  "sektor_peternakan": qatar_peternakan,
  "sektor_agrikultur": qatar_agrikultur,
  "sektor_perikanan": qatar_perikanan,
  "sektor_olahan_pangan": qatar_olahan_pangan,
  "sektor_farmasi": qatar_farmasi,
  "sektor_pertahanan": qatar_pertahanan,
  "armada_militer": qatar_armada,
  "militer_strategis": qatar_strategis,
  "armada_kepolisian": qatar_kepolisian,
  "pabrik_militer": qatar_pabrik,
    "pendidikan": qatar_pendidikan,
  "kesehatan": qatar_kesehatan,
  "hukum": qatar_hukum,
  "sektor_olahraga": qatar_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 81
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 17
    },
    "penghasilan": {
      "tarif": 14,
      "kepuasan": 61,
      "pendapatan": 68
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 11 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 33 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 49
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": qatar_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 29,
    "keamanan": 20,
    "keuangan": 20,
    "lingkungan": 60
  }
};

