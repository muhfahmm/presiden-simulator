import { CountryData } from "@/app/database/data/types";
import { sao_tome_dan_principe_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/45_sao_tome_dan_principe";

export const sao_tome_dan_principe: CountryData = {
  ...sao_tome_dan_principe_profile,
  "sektor_listrik": sao_tome_dan_principe_listrik,
  "infrastruktur": sao_tome_dan_principe_infrastruktur,
  "sektor_ekstraksi": sao_tome_dan_principe_ekstraksi,
  "sektor_manufaktur": sao_tome_dan_principe_manufaktur,
  "sektor_peternakan": sao_tome_dan_principe_peternakan,
  "sektor_agrikultur": sao_tome_dan_principe_agrikultur,
  "sektor_perikanan": sao_tome_dan_principe_perikanan,
  "sektor_olahan_pangan": sao_tome_dan_principe_olahan_pangan,
  "sektor_farmasi": sao_tome_dan_principe_farmasi,
  "sektor_pertahanan": sao_tome_dan_principe_pertahanan,
  "armada_militer": sao_tome_dan_principe_armada,
  "militer_strategis": sao_tome_dan_principe_strategis,
  "armada_kepolisian": sao_tome_dan_principe_kepolisian,
  "pabrik_militer": sao_tome_dan_principe_pabrik,
    "pendidikan": sao_tome_dan_principe_pendidikan,
  "kesehatan": sao_tome_dan_principe_kesehatan,
  "hukum": sao_tome_dan_principe_hukum,
  "sektor_olahraga": sao_tome_dan_principe_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": sao_tome_dan_principe_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 3,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 22,
    "lingkungan": 60
  }
};
