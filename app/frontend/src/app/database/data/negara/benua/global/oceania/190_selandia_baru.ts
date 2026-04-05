import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { selandia_baru_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/190_selandia_baru";

import { selandia_baru_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/190_selandia_baru";
import { selandia_baru_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/190_selandia_baru";
import { selandia_baru_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/190_selandia_baru";
import { selandia_baru_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/190_selandia_baru";
import { selandia_baru_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/190_selandia_baru";
import { selandia_baru_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/190_selandia_baru";
import { selandia_baru_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/190_selandia_baru";
import { selandia_baru_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/190_selandia_baru";
import { selandia_baru_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/190_selandia_baru";
import { selandia_baru_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/190_selandia_baru";
import { selandia_baru_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/190_selandia_baru";
import { selandia_baru_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/190_selandia_baru";
import { selandia_baru_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/190_selandia_baru";
import { selandia_baru_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/190_selandia_baru";
import { selandia_baru_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/190_selandia_baru";
import { selandia_baru_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/190_selandia_baru";
import { selandia_baru_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/190_selandia_baru";
import { selandia_baru_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/190_selandia_baru";
import { selandia_baru_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/190_selandia_baru";
import { selandia_baru_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/190_selandia_baru";
const selandia_baru_geopolitik = {
    "un_vote": 107,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 27,
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

export const selandia_baru: CountryData = {
  ...selandia_baru_profile,
  "sektor_listrik": selandia_baru_listrik,
  "hunian": selandia_baru_hunian,
  "infrastruktur": selandia_baru_infrastruktur,
  "sektor_ekstraksi": selandia_baru_ekstraksi,
  "sektor_manufaktur": selandia_baru_manufaktur,
  "sektor_peternakan": selandia_baru_peternakan,
  "sektor_agrikultur": selandia_baru_agrikultur,
  "sektor_perikanan": selandia_baru_perikanan,
  "sektor_olahan_pangan": selandia_baru_olahan_pangan,
  "sektor_farmasi": selandia_baru_farmasi,
  "sektor_pertahanan": selandia_baru_pertahanan,
  "armada_militer": selandia_baru_armada,
  "militer_strategis": selandia_baru_strategis,
  "armada_kepolisian": selandia_baru_kepolisian,
  "pabrik_militer": selandia_baru_pabrik,
  "intelijen": selandia_baru_intelijen,
    "pendidikan": selandia_baru_pendidikan,
  "kesehatan": selandia_baru_kesehatan,
  "hukum": selandia_baru_hukum,
  "sektor_olahraga": selandia_baru_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 85
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 180
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 102
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 18
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 37 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 62
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": selandia_baru_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 19,
    "keamanan": 16,
    "keuangan": 34,
    "lingkungan": 60
  }
};


