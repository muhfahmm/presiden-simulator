import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_uganda_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/41_republik_uganda";
import { republik_uganda_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/afrika/41_republik_uganda";
import { republik_uganda_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/41_republik_uganda";
import { republik_uganda_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/41_republik_uganda";
import { republik_uganda_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/afrika/41_republik_uganda";
import { republik_uganda_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/41_republik_uganda";
import { republik_uganda_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/afrika/41_republik_uganda";
import { republik_uganda_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/afrika/41_republik_uganda";
import { republik_uganda_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/41_republik_uganda";
import { republik_uganda_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/41_republik_uganda";
import { republik_uganda_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/41_republik_uganda";
import { republik_uganda_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/afrika/41_republik_uganda";
import { republik_uganda_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/afrika/41_republik_uganda";
import { republik_uganda_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/afrika/41_republik_uganda";
import { republik_uganda_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/41_republik_uganda";
import { republik_uganda_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/afrika/41_republik_uganda";
import { republik_uganda_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/41_republik_uganda";
import { republik_uganda_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/41_republik_uganda";
import { republik_uganda_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/afrika/41_republik_uganda";
const republik_uganda_geopolitik = {
    "un_vote": 101,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 20,
      "kekuatan_keras": 10,
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

export const republik_uganda: CountryData = {
  ...republik_uganda_profile,
  "sektor_listrik": republik_uganda_listrik,
  "infrastruktur": republik_uganda_infrastruktur,
  "sektor_ekstraksi": republik_uganda_ekstraksi,
  "sektor_manufaktur": republik_uganda_manufaktur,
  "sektor_peternakan": republik_uganda_peternakan,
  "sektor_agrikultur": republik_uganda_agrikultur,
  "sektor_perikanan": republik_uganda_perikanan,
  "sektor_olahan_pangan": republik_uganda_olahan_pangan,
  "sektor_farmasi": republik_uganda_farmasi,
  "sektor_pertahanan": republik_uganda_pertahanan,
  "armada_militer": republik_uganda_armada,
  "militer_strategis": republik_uganda_strategis,
  "armada_kepolisian": republik_uganda_kepolisian,
  "pabrik_militer": republik_uganda_pabrik,
    "pendidikan": republik_uganda_pendidikan,
  "kesehatan": republik_uganda_kesehatan,
  "hukum": republik_uganda_hukum,
  "sektor_olahraga": republik_uganda_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 46
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 18
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 8 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 36
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_uganda_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 17,
    "keamanan": 28,
    "keuangan": 37,
    "lingkungan": 60
  }
};

