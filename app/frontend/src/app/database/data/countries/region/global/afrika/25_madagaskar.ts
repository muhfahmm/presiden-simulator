import { CountryData } from "@/app/database/data/types";
import { madagaskar_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/25_madagaskar";
import { madagaskar_armada } from "../../modules/2_militer/2_armada_militer/afrika/25_madagaskar";
import { madagaskar_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/25_madagaskar";
import { madagaskar_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/25_madagaskar";
import { madagaskar_hukum } from "../../modules/3_sosial/3_hukum/afrika/25_madagaskar";
import { madagaskar_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/25_madagaskar";
import { madagaskar_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/25_madagaskar";
import { madagaskar_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/25_madagaskar";
import { madagaskar_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/25_madagaskar";
import { madagaskar_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/25_madagaskar";
import { madagaskar_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/25_madagaskar";
import { madagaskar_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/25_madagaskar";
import { madagaskar_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/25_madagaskar";
import { madagaskar_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/25_madagaskar";
import { madagaskar_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/25_madagaskar";
import { madagaskar_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/25_madagaskar";
import { madagaskar_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/25_madagaskar";
import { madagaskar_profile } from "../../modules/0_profiles/afrika/25_madagaskar";
import { madagaskar_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/25_madagaskar";
import { madagaskar_geopolitik } from "../../modules/4_geopolitik/afrika/25_madagaskar";

export const madagaskar: CountryData = {
  ...madagaskar_profile,
  "sektor_listrik": madagaskar_listrik,
  "infrastruktur": madagaskar_infrastruktur,
  "sektor_ekstraksi": madagaskar_ekstraksi,
  "sektor_manufaktur": madagaskar_manufaktur,
  "sektor_peternakan": madagaskar_peternakan,
  "sektor_agrikultur": madagaskar_agrikultur,
  "sektor_perikanan": madagaskar_perikanan,
  "sektor_olahan_pangan": madagaskar_olahan_pangan,
  "sektor_farmasi": madagaskar_farmasi,
  "sektor_pertahanan": madagaskar_pertahanan,
  "armada_militer": madagaskar_armada,
  "militer_strategis": madagaskar_strategis,
  "armada_kepolisian": madagaskar_kepolisian,
  "pabrik_militer": madagaskar_pabrik,
    "pendidikan": madagaskar_pendidikan,
  "kesehatan": madagaskar_kesehatan,
  "hukum": madagaskar_hukum,
  "sektor_olahraga": madagaskar_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": madagaskar_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 30,
    "lingkungan": 60
  }
};
