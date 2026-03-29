import { CountryData } from "@/app/database/data/types";
import { eritrea_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/10_eritrea";
import { eritrea_armada } from "../../modules/2_militer/2_armada_militer/afrika/10_eritrea";
import { eritrea_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/10_eritrea";
import { eritrea_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/10_eritrea";
import { eritrea_hukum } from "../../modules/3_sosial/3_hukum/afrika/10_eritrea";
import { eritrea_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/10_eritrea";
import { eritrea_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/10_eritrea";
import { eritrea_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/10_eritrea";
import { eritrea_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/10_eritrea";
import { eritrea_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/10_eritrea";
import { eritrea_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/10_eritrea";
import { eritrea_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/10_eritrea";
import { eritrea_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/10_eritrea";
import { eritrea_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/10_eritrea";
import { eritrea_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/10_eritrea";
import { eritrea_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/10_eritrea";
import { eritrea_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/10_eritrea";
import { eritrea_profile } from "../../modules/0_profiles/afrika/10_eritrea";
import { eritrea_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/10_eritrea";
import { eritrea_geopolitik } from "../../modules/4_geopolitik/afrika/10_eritrea";

export const eritrea: CountryData = {
  ...eritrea_profile,
  "sektor_listrik": eritrea_listrik,
  "infrastruktur": eritrea_infrastruktur,
  "sektor_ekstraksi": eritrea_ekstraksi,
  "sektor_manufaktur": eritrea_manufaktur,
  "sektor_peternakan": eritrea_peternakan,
  "sektor_agrikultur": eritrea_agrikultur,
  "sektor_perikanan": eritrea_perikanan,
  "sektor_olahan_pangan": eritrea_olahan_pangan,
  "sektor_farmasi": eritrea_farmasi,
  "sektor_pertahanan": eritrea_pertahanan,
  "armada_militer": eritrea_armada,
  "militer_strategis": eritrea_strategis,
  "armada_kepolisian": eritrea_kepolisian,
  "pabrik_militer": eritrea_pabrik,
    "pendidikan": eritrea_pendidikan,
  "kesehatan": eritrea_kesehatan,
  "hukum": eritrea_hukum,
  "sektor_olahraga": eritrea_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": eritrea_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 24,
    "keamanan": 11,
    "keuangan": 18,
    "lingkungan": 60
  }
};
