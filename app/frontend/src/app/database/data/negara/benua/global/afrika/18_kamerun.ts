import { CountryData } from "@/app/database/data/types";
import { kamerun_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/18_kamerun";
import { kamerun_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/18_kamerun";
import { kamerun_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/18_kamerun";
import { kamerun_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/18_kamerun";
import { kamerun_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/18_kamerun";
import { kamerun_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/18_kamerun";
import { kamerun_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/18_kamerun";
import { kamerun_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/18_kamerun";
import { kamerun_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/18_kamerun";
import { kamerun_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/18_kamerun";
import { kamerun_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/18_kamerun";
import { kamerun_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/18_kamerun";
import { kamerun_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/18_kamerun";
import { kamerun_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/18_kamerun";
import { kamerun_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/18_kamerun";
import { kamerun_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/18_kamerun";
import { kamerun_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/18_kamerun";
import { kamerun_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/18_kamerun";
import { kamerun_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/18_kamerun";
import { kamerun_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/18_kamerun";

export const kamerun: CountryData = {
  ...kamerun_profile,
  "sektor_listrik": kamerun_listrik,
  "infrastruktur": kamerun_infrastruktur,
  "sektor_ekstraksi": kamerun_ekstraksi,
  "sektor_manufaktur": kamerun_manufaktur,
  "sektor_peternakan": kamerun_peternakan,
  "sektor_agrikultur": kamerun_agrikultur,
  "sektor_perikanan": kamerun_perikanan,
  "sektor_olahan_pangan": kamerun_olahan_pangan,
  "sektor_farmasi": kamerun_farmasi,
  "sektor_pertahanan": kamerun_pertahanan,
  "armada_militer": kamerun_armada,
  "militer_strategis": kamerun_strategis,
  "armada_kepolisian": kamerun_kepolisian,
  "pabrik_militer": kamerun_pabrik,
    "pendidikan": kamerun_pendidikan,
  "kesehatan": kamerun_kesehatan,
  "hukum": kamerun_hukum,
  "sektor_olahraga": kamerun_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 29
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 30
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 3,
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
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kamerun_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 38,
    "keamanan": 9,
    "keuangan": 3,
    "lingkungan": 60
  }
};
