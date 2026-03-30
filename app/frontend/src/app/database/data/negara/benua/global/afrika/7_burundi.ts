import { CountryData } from "@/app/database/data/types";
import { burundi_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/7_burundi";
import { burundi_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/7_burundi";
import { burundi_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/7_burundi";
import { burundi_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/7_burundi";
import { burundi_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/7_burundi";
import { burundi_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/7_burundi";
import { burundi_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/7_burundi";
import { burundi_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/7_burundi";
import { burundi_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/7_burundi";
import { burundi_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/7_burundi";
import { burundi_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/7_burundi";
import { burundi_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/7_burundi";
import { burundi_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/7_burundi";
import { burundi_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/7_burundi";
import { burundi_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/7_burundi";
import { burundi_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/7_burundi";
import { burundi_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/7_burundi";
import { burundi_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/7_burundi";
import { burundi_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/7_burundi";
import { burundi_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/7_burundi";

export const burundi: CountryData = {
  ...burundi_profile,
  "sektor_listrik": burundi_listrik,
  "infrastruktur": burundi_infrastruktur,
  "sektor_ekstraksi": burundi_ekstraksi,
  "sektor_manufaktur": burundi_manufaktur,
  "sektor_peternakan": burundi_peternakan,
  "sektor_agrikultur": burundi_agrikultur,
  "sektor_perikanan": burundi_perikanan,
  "sektor_olahan_pangan": burundi_olahan_pangan,
  "sektor_farmasi": burundi_farmasi,
  "sektor_pertahanan": burundi_pertahanan,
  "armada_militer": burundi_armada,
  "militer_strategis": burundi_strategis,
  "armada_kepolisian": burundi_kepolisian,
  "pabrik_militer": burundi_pabrik,
    "pendidikan": burundi_pendidikan,
  "kesehatan": burundi_kesehatan,
  "hukum": burundi_hukum,
  "sektor_olahraga": burundi_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 25,
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": burundi_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 9,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};
