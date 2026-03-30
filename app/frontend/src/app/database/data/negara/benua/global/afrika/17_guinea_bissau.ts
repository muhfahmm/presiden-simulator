import { CountryData } from "@/app/database/data/types";
import { guinea_bissau_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/17_guinea_bissau";
import { guinea_bissau_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/17_guinea_bissau";
import { guinea_bissau_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/17_guinea_bissau";
import { guinea_bissau_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/17_guinea_bissau";
import { guinea_bissau_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/17_guinea_bissau";
import { guinea_bissau_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/17_guinea_bissau";
import { guinea_bissau_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/17_guinea_bissau";
import { guinea_bissau_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/17_guinea_bissau";
import { guinea_bissau_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/17_guinea_bissau";
import { guinea_bissau_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/17_guinea_bissau";
import { guinea_bissau_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/17_guinea_bissau";
import { guinea_bissau_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/17_guinea_bissau";
import { guinea_bissau_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/17_guinea_bissau";
import { guinea_bissau_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/17_guinea_bissau";
import { guinea_bissau_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/17_guinea_bissau";
import { guinea_bissau_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/17_guinea_bissau";
import { guinea_bissau_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/17_guinea_bissau";
import { guinea_bissau_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/17_guinea_bissau";
import { guinea_bissau_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/17_guinea_bissau";
import { guinea_bissau_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/17_guinea_bissau";

export const guinea_bissau: CountryData = {
  ...guinea_bissau_profile,
  "sektor_listrik": guinea_bissau_listrik,
  "infrastruktur": guinea_bissau_infrastruktur,
  "sektor_ekstraksi": guinea_bissau_ekstraksi,
  "sektor_manufaktur": guinea_bissau_manufaktur,
  "sektor_peternakan": guinea_bissau_peternakan,
  "sektor_agrikultur": guinea_bissau_agrikultur,
  "sektor_perikanan": guinea_bissau_perikanan,
  "sektor_olahan_pangan": guinea_bissau_olahan_pangan,
  "sektor_farmasi": guinea_bissau_farmasi,
  "sektor_pertahanan": guinea_bissau_pertahanan,
  "armada_militer": guinea_bissau_armada,
  "militer_strategis": guinea_bissau_strategis,
  "armada_kepolisian": guinea_bissau_kepolisian,
  "pabrik_militer": guinea_bissau_pabrik,
    "pendidikan": guinea_bissau_pendidikan,
  "kesehatan": guinea_bissau_kesehatan,
  "hukum": guinea_bissau_hukum,
  "sektor_olahraga": guinea_bissau_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guinea_bissau_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 25,
    "keamanan": 25,
    "keuangan": 32,
    "lingkungan": 60
  }
};

