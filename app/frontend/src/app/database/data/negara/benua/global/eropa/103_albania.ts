import { CountryData } from "@/app/database/data/types";
import { albania_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/eropa/103_albania";
import { albania_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/103_albania";
import { albania_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/eropa/103_albania";
import { albania_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/eropa/103_albania";
import { albania_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/103_albania";
import { albania_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/eropa/103_albania";
import { albania_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/103_albania";
import { albania_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/103_albania";
import { albania_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/eropa/103_albania";
import { albania_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/eropa/103_albania";
import { albania_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/eropa/103_albania";
import { albania_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/103_albania";
import { albania_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/103_albania";
import { albania_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/103_albania";
import { albania_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/eropa/103_albania";
import { albania_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/103_albania";
import { albania_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/eropa/103_albania";
import { albania_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/103_albania";
import { albania_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/103_albania";
import { albania_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/103_albania";

export const albania: CountryData = {
  ...albania_profile,
  "sektor_listrik": albania_listrik,
  "infrastruktur": albania_infrastruktur,
  "sektor_ekstraksi": albania_ekstraksi,
  "sektor_manufaktur": albania_manufaktur,
  "sektor_peternakan": albania_peternakan,
  "sektor_agrikultur": albania_agrikultur,
  "sektor_perikanan": albania_perikanan,
  "sektor_olahan_pangan": albania_olahan_pangan,
  "sektor_farmasi": albania_farmasi,
  "sektor_pertahanan": albania_pertahanan,
  "armada_militer": albania_armada,
  "militer_strategis": albania_strategis,
  "armada_kepolisian": albania_kepolisian,
  "pabrik_militer": albania_pabrik,
    "pendidikan": albania_pendidikan,
  "kesehatan": albania_kesehatan,
  "hukum": albania_hukum,
  "sektor_olahraga": albania_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 15
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 7
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
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": albania_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 4,
    "keamanan": 2,
    "keuangan": 33,
    "lingkungan": 60
  }
};

