import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { guyana_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/sa/201_guyana";
import { guyana_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/sa/201_guyana";
import { guyana_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/sa/201_guyana";
import { guyana_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/sa/201_guyana";
import { guyana_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/sa/201_guyana";
import { guyana_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/sa/201_guyana";
import { guyana_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/sa/201_guyana";
import { guyana_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/sa/201_guyana";
import { guyana_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/sa/201_guyana";
import { guyana_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/sa/201_guyana";
import { guyana_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/sa/201_guyana";
import { guyana_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/sa/201_guyana";
import { guyana_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/sa/201_guyana";
import { guyana_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/sa/201_guyana";
import { guyana_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/sa/201_guyana";
import { guyana_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/sa/201_guyana";
import { guyana_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/sa/201_guyana";
import { guyana_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/sa/201_guyana";
import { guyana_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/sa/201_guyana";
const guyana_geopolitik = {
    "un_vote": 74,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 39,
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

export const guyana: CountryData = {
  ...guyana_profile,
  "sektor_listrik": guyana_listrik,
  "infrastruktur": guyana_infrastruktur,
  "sektor_ekstraksi": guyana_ekstraksi,
  "sektor_manufaktur": guyana_manufaktur,
  "sektor_peternakan": guyana_peternakan,
  "sektor_agrikultur": guyana_agrikultur,
  "sektor_perikanan": guyana_perikanan,
  "sektor_olahan_pangan": guyana_olahan_pangan,
  "sektor_farmasi": guyana_farmasi,
  "sektor_pertahanan": guyana_pertahanan,
  "armada_militer": guyana_armada,
  "militer_strategis": guyana_strategis,
  "armada_kepolisian": guyana_kepolisian,
  "pabrik_militer": guyana_pabrik,
    "pendidikan": guyana_pendidikan,
  "kesehatan": guyana_kesehatan,
  "hukum": guyana_hukum,
  "sektor_olahraga": guyana_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guyana_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 26,
    "keamanan": 10,
    "keuangan": 13,
    "lingkungan": 60
  }
};

