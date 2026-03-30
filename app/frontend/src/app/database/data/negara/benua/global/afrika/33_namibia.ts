import { CountryData } from "@/app/database/data/types";
import { namibia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/33_namibia";
import { namibia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/33_namibia";
import { namibia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/33_namibia";
import { namibia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/33_namibia";
import { namibia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/33_namibia";
import { namibia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/33_namibia";
import { namibia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/33_namibia";
import { namibia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/33_namibia";
import { namibia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/33_namibia";
import { namibia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/33_namibia";
import { namibia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/33_namibia";
import { namibia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/33_namibia";
import { namibia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/33_namibia";
import { namibia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/33_namibia";
import { namibia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/33_namibia";
import { namibia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/33_namibia";
import { namibia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/33_namibia";
import { namibia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/33_namibia";
import { namibia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/33_namibia";
import { namibia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/33_namibia";

export const namibia: CountryData = {
  ...namibia_profile,
  "sektor_listrik": namibia_listrik,
  "infrastruktur": namibia_infrastruktur,
  "sektor_ekstraksi": namibia_ekstraksi,
  "sektor_manufaktur": namibia_manufaktur,
  "sektor_peternakan": namibia_peternakan,
  "sektor_agrikultur": namibia_agrikultur,
  "sektor_perikanan": namibia_perikanan,
  "sektor_olahan_pangan": namibia_olahan_pangan,
  "sektor_farmasi": namibia_farmasi,
  "sektor_pertahanan": namibia_pertahanan,
  "armada_militer": namibia_armada,
  "militer_strategis": namibia_strategis,
  "armada_kepolisian": namibia_kepolisian,
  "pabrik_militer": namibia_pabrik,
    "pendidikan": namibia_pendidikan,
  "kesehatan": namibia_kesehatan,
  "hukum": namibia_hukum,
  "sektor_olahraga": namibia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": namibia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 22,
    "keamanan": 39,
    "keuangan": 24,
    "lingkungan": 60
  }
};
