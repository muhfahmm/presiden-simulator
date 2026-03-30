import { CountryData } from "@/app/database/data/types";
import { hungaria_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/eropa/116_hungaria";
import { hungaria_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/116_hungaria";
import { hungaria_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/eropa/116_hungaria";
import { hungaria_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/eropa/116_hungaria";
import { hungaria_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/116_hungaria";
import { hungaria_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/eropa/116_hungaria";
import { hungaria_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/116_hungaria";
import { hungaria_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/116_hungaria";
import { hungaria_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/eropa/116_hungaria";
import { hungaria_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/eropa/116_hungaria";
import { hungaria_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/eropa/116_hungaria";
import { hungaria_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/116_hungaria";
import { hungaria_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/116_hungaria";
import { hungaria_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/116_hungaria";
import { hungaria_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/eropa/116_hungaria";
import { hungaria_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/116_hungaria";
import { hungaria_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/eropa/116_hungaria";
import { hungaria_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/116_hungaria";
import { hungaria_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/116_hungaria";
import { hungaria_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/116_hungaria";

export const hungaria: CountryData = {
  ...hungaria_profile,
  "sektor_listrik": hungaria_listrik,
  "infrastruktur": hungaria_infrastruktur,
  "sektor_ekstraksi": hungaria_ekstraksi,
  "sektor_manufaktur": hungaria_manufaktur,
  "sektor_peternakan": hungaria_peternakan,
  "sektor_agrikultur": hungaria_agrikultur,
  "sektor_perikanan": hungaria_perikanan,
  "sektor_olahan_pangan": hungaria_olahan_pangan,
  "sektor_farmasi": hungaria_farmasi,
  "sektor_pertahanan": hungaria_pertahanan,
  "armada_militer": hungaria_armada,
  "militer_strategis": hungaria_strategis,
  "armada_kepolisian": hungaria_kepolisian,
  "pabrik_militer": hungaria_pabrik,
    "pendidikan": hungaria_pendidikan,
  "kesehatan": hungaria_kesehatan,
  "hukum": hungaria_hukum,
  "sektor_olahraga": hungaria_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 62
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 188
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 66
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 11 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 31 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": hungaria_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 26,
    "lingkungan": 60
  }
};
