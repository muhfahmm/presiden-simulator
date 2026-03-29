import { CountryData } from "@/app/database/data/types";
import { guam_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/181_guam";
import { guam_armada } from "../../modules/2_militer/2_armada_militer/oceania/181_guam";
import { guam_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/181_guam";
import { guam_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/181_guam";
import { guam_hukum } from "../../modules/3_sosial/3_hukum/oceania/181_guam";
import { guam_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/181_guam";
import { guam_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/181_guam";
import { guam_kesehatan } from "../../modules/3_sosial/2_kesehatan/oceania/181_guam";
import { guam_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/181_guam";
import { guam_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/181_guam";
import { guam_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/181_guam";
import { guam_olahraga } from "../../modules/3_sosial/4_olahraga/oceania/181_guam";
import { guam_pabrik } from "../../modules/2_militer/5_pabrik_militer/oceania/181_guam";
import { guam_pendidikan } from "../../modules/3_sosial/1_pendidikan/oceania/181_guam";
import { guam_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/181_guam";
import { guam_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/181_guam";
import { guam_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/181_guam";
import { guam_profile } from "../../modules/0_profiles/oceania/181_guam";
import { guam_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/181_guam";
import { guam_geopolitik } from "../../modules/4_geopolitik/oceania/181_guam";

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
  // 11. 💰 PAJAK & EKONOMI
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
  // 12. 💰 GAJI & SUBSIDI (Default)
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
  // 13. 🛒 HARGA PASAR DOMESTIK
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
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guam_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 29,
    "keamanan": 38,
    "keuangan": 32,
    "lingkungan": 60
  }
};
