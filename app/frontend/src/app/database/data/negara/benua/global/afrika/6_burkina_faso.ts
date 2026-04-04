import { CountryData } from "@/app/database/data/types";
import { burkina_faso_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/afrika/6_burkina_faso";
import { burkina_faso_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/6_burkina_faso";
import { burkina_faso_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/afrika/6_burkina_faso";
import { burkina_faso_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/afrika/6_burkina_faso";
import { burkina_faso_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/6_burkina_faso";
import { burkina_faso_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/afrika/6_burkina_faso";
import { burkina_faso_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/6_burkina_faso";
import { burkina_faso_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/6_burkina_faso";
import { burkina_faso_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/afrika/6_burkina_faso";
import { burkina_faso_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/afrika/6_burkina_faso";
import { burkina_faso_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/afrika/6_burkina_faso";
import { burkina_faso_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/6_burkina_faso";
import { burkina_faso_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/6_burkina_faso";
import { burkina_faso_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/6_burkina_faso";
import { burkina_faso_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/afrika/6_burkina_faso";
import { burkina_faso_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/6_burkina_faso";
import { burkina_faso_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/afrika/6_burkina_faso";
import { burkina_faso_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/6_burkina_faso";
import { burkina_faso_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/6_burkina_faso";
import { burkina_faso_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/6_burkina_faso";

export const burkina_faso: CountryData = {
  ...burkina_faso_profile,
  "sektor_listrik": burkina_faso_listrik,
  "infrastruktur": burkina_faso_infrastruktur,
  "sektor_ekstraksi": burkina_faso_ekstraksi,
  "sektor_manufaktur": burkina_faso_manufaktur,
  "sektor_peternakan": burkina_faso_peternakan,
  "sektor_agrikultur": burkina_faso_agrikultur,
  "sektor_perikanan": burkina_faso_perikanan,
  "sektor_olahan_pangan": burkina_faso_olahan_pangan,
  "sektor_farmasi": burkina_faso_farmasi,
  "sektor_pertahanan": burkina_faso_pertahanan,
  "armada_militer": burkina_faso_armada,
  "militer_strategis": burkina_faso_strategis,
  "armada_kepolisian": burkina_faso_kepolisian,
  "pabrik_militer": burkina_faso_pabrik,
    "pendidikan": burkina_faso_pendidikan,
  "kesehatan": burkina_faso_kesehatan,
  "hukum": burkina_faso_hukum,
  "sektor_olahraga": burkina_faso_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 29,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 221060,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": burkina_faso_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 20,
    "keamanan": 1,
    "keuangan": 21,
    "lingkungan": 60
  }
};

