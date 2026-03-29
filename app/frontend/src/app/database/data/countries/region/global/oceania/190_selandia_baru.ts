import { CountryData } from "@/app/database/data/types";
import { selandia_baru_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/190_selandia_baru";
import { selandia_baru_armada } from "../../modules/2_militer/2_armada_militer/oceania/190_selandia_baru";
import { selandia_baru_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/190_selandia_baru";
import { selandia_baru_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/190_selandia_baru";
import { selandia_baru_hukum } from "../../modules/3_sosial/3_hukum/oceania/190_selandia_baru";
import { selandia_baru_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/190_selandia_baru";
import { selandia_baru_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/190_selandia_baru";
import { selandia_baru_kesehatan } from "../../modules/3_sosial/2_kesehatan/oceania/190_selandia_baru";
import { selandia_baru_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/190_selandia_baru";
import { selandia_baru_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/190_selandia_baru";
import { selandia_baru_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/190_selandia_baru";
import { selandia_baru_olahraga } from "../../modules/3_sosial/4_olahraga/oceania/190_selandia_baru";
import { selandia_baru_pabrik } from "../../modules/2_militer/5_pabrik_militer/oceania/190_selandia_baru";
import { selandia_baru_pendidikan } from "../../modules/3_sosial/1_pendidikan/oceania/190_selandia_baru";
import { selandia_baru_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/190_selandia_baru";
import { selandia_baru_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/190_selandia_baru";
import { selandia_baru_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/190_selandia_baru";
import { selandia_baru_profile } from "../../modules/0_profiles/oceania/190_selandia_baru";
import { selandia_baru_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/190_selandia_baru";
import { selandia_baru_geopolitik } from "../../modules/4_geopolitik/oceania/190_selandia_baru";

export const selandia_baru: CountryData = {
  ...selandia_baru_profile,
  "sektor_listrik": selandia_baru_listrik,
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
    "pendidikan": selandia_baru_pendidikan,
  "kesehatan": selandia_baru_kesehatan,
  "hukum": selandia_baru_hukum,
  "sektor_olahraga": selandia_baru_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
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
  // 12. 💰 GAJI & SUBSIDI (Default)
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
  // 13. 🛒 HARGA PASAR DOMESTIK
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
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": selandia_baru_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 19,
    "keamanan": 16,
    "keuangan": 34,
    "lingkungan": 60
  }
};
