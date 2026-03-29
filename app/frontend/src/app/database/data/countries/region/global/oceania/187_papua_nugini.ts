import { CountryData } from "@/app/database/data/types";
import { papua_nugini_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/187_papua_nugini";
import { papua_nugini_armada } from "../../modules/2_militer/2_armada_militer/oceania/187_papua_nugini";
import { papua_nugini_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/187_papua_nugini";
import { papua_nugini_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/187_papua_nugini";
import { papua_nugini_hukum } from "../../modules/3_sosial/3_hukum/oceania/187_papua_nugini";
import { papua_nugini_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/187_papua_nugini";
import { papua_nugini_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/187_papua_nugini";
import { papua_nugini_kesehatan } from "../../modules/3_sosial/2_kesehatan/oceania/187_papua_nugini";
import { papua_nugini_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/187_papua_nugini";
import { papua_nugini_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/187_papua_nugini";
import { papua_nugini_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/187_papua_nugini";
import { papua_nugini_olahraga } from "../../modules/3_sosial/4_olahraga/oceania/187_papua_nugini";
import { papua_nugini_pabrik } from "../../modules/2_militer/5_pabrik_militer/oceania/187_papua_nugini";
import { papua_nugini_pendidikan } from "../../modules/3_sosial/1_pendidikan/oceania/187_papua_nugini";
import { papua_nugini_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/187_papua_nugini";
import { papua_nugini_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/187_papua_nugini";
import { papua_nugini_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/187_papua_nugini";
import { papua_nugini_profile } from "../../modules/0_profiles/oceania/187_papua_nugini";
import { papua_nugini_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/187_papua_nugini";
import { papua_nugini_geopolitik } from "../../modules/4_geopolitik/oceania/187_papua_nugini";

export const papua_nugini: CountryData = {
  ...papua_nugini_profile,
  "sektor_listrik": papua_nugini_listrik,
  "infrastruktur": papua_nugini_infrastruktur,
  "sektor_ekstraksi": papua_nugini_ekstraksi,
  "sektor_manufaktur": papua_nugini_manufaktur,
  "sektor_peternakan": papua_nugini_peternakan,
  "sektor_agrikultur": papua_nugini_agrikultur,
  "sektor_perikanan": papua_nugini_perikanan,
  "sektor_olahan_pangan": papua_nugini_olahan_pangan,
  "sektor_farmasi": papua_nugini_farmasi,
  "sektor_pertahanan": papua_nugini_pertahanan,
  "armada_militer": papua_nugini_armada,
  "militer_strategis": papua_nugini_strategis,
  "armada_kepolisian": papua_nugini_kepolisian,
  "pabrik_militer": papua_nugini_pabrik,
    "pendidikan": papua_nugini_pendidikan,
  "kesehatan": papua_nugini_kesehatan,
  "hukum": papua_nugini_hukum,
  "sektor_olahraga": papua_nugini_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 13
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 31,
      "kepuasan": 93,
      "pendapatan": 23
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": papua_nugini_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 10,
    "pendidikan": 21,
    "keamanan": 37,
    "keuangan": 23,
    "lingkungan": 60
  }
};
