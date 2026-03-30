import { CountryData } from "@/app/database/data/types";
import { fiji_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/oceania/180_fiji";
import { fiji_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/180_fiji";
import { fiji_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/oceania/180_fiji";
import { fiji_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/oceania/180_fiji";
import { fiji_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/180_fiji";
import { fiji_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/oceania/180_fiji";
import { fiji_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/180_fiji";
import { fiji_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/180_fiji";
import { fiji_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/oceania/180_fiji";
import { fiji_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/oceania/180_fiji";
import { fiji_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/oceania/180_fiji";
import { fiji_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/180_fiji";
import { fiji_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/180_fiji";
import { fiji_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/180_fiji";
import { fiji_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/oceania/180_fiji";
import { fiji_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/180_fiji";
import { fiji_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/oceania/180_fiji";
import { fiji_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/180_fiji";
import { fiji_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/180_fiji";
import { fiji_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/180_fiji";

export const fiji: CountryData = {
  ...fiji_profile,
  "sektor_listrik": fiji_listrik,
  "infrastruktur": fiji_infrastruktur,
  "sektor_ekstraksi": fiji_ekstraksi,
  "sektor_manufaktur": fiji_manufaktur,
  "sektor_peternakan": fiji_peternakan,
  "sektor_agrikultur": fiji_agrikultur,
  "sektor_perikanan": fiji_perikanan,
  "sektor_olahan_pangan": fiji_olahan_pangan,
  "sektor_farmasi": fiji_farmasi,
  "sektor_pertahanan": fiji_pertahanan,
  "armada_militer": fiji_armada,
  "militer_strategis": fiji_strategis,
  "armada_kepolisian": fiji_kepolisian,
  "pabrik_militer": fiji_pabrik,
    "pendidikan": fiji_pendidikan,
  "kesehatan": fiji_kesehatan,
  "hukum": fiji_hukum,
  "sektor_olahraga": fiji_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
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
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": fiji_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 4,
    "keamanan": 17,
    "keuangan": 18,
    "lingkungan": 60
  }
};
