import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { china_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/62_china";
import { china_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/asia/62_china";
import { china_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/62_china";
import { china_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/62_china";
import { china_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/asia/62_china";
import { china_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/62_china";
import { china_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/asia/62_china";
import { china_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/asia/62_china";
import { china_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/62_china";
import { china_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/62_china";
import { china_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/62_china";
import { china_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/asia/62_china";
import { china_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/asia/62_china";
import { china_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/asia/62_china";
import { china_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/62_china";
import { china_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/asia/62_china";
import { china_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/62_china";
import { china_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/62_china";
import { china_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/asia/62_china";
const china_geopolitik = {
    "un_vote": 201,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
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

export const china: CountryData = {
  ...china_profile,
  "sektor_listrik": china_listrik,
  "infrastruktur": china_infrastruktur,
  "sektor_ekstraksi": china_ekstraksi,
  "sektor_manufaktur": china_manufaktur,
  "sektor_peternakan": china_peternakan,
  "sektor_agrikultur": china_agrikultur,
  "sektor_perikanan": china_perikanan,
  "sektor_olahan_pangan": china_olahan_pangan,
  "sektor_farmasi": china_farmasi,
  "sektor_pertahanan": china_pertahanan,
  "armada_militer": china_armada,
  "militer_strategis": china_strategis,
  "armada_kepolisian": china_kepolisian,
  "pabrik_militer": china_pabrik,
    "pendidikan": china_pendidikan,
  "kesehatan": china_kesehatan,
  "hukum": china_hukum,
  "sektor_olahraga": china_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 7003
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 367
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 2324
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 14341
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 5242
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 901 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2703 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 5219
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": china_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 24,
    "keamanan": 36,
    "keuangan": 10,
    "lingkungan": 60
  }
};

