import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { libya_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/24_libya";
import { libya_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/24_libya";
import { libya_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/24_libya";
import { libya_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/24_libya";
import { libya_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/24_libya";
import { libya_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/24_libya";
import { libya_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/24_libya";
import { libya_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/24_libya";
import { libya_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/24_libya";
import { libya_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/24_libya";
import { libya_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/24_libya";
import { libya_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/24_libya";
import { libya_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/24_libya";
import { libya_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/24_libya";
import { libya_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/24_libya";
import { libya_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/24_libya";
import { libya_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/24_libya";
import { libya_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/24_libya";
import { libya_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/24_libya";
import { libya_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/24_libya";

export const libya: CountryData = {
  ...libya_profile,
  "sektor_listrik": libya_listrik,
  "infrastruktur": libya_infrastruktur,
  "sektor_ekstraksi": libya_ekstraksi,
  "sektor_manufaktur": libya_manufaktur,
  "sektor_peternakan": libya_peternakan,
  "sektor_agrikultur": libya_agrikultur,
  "sektor_perikanan": libya_perikanan,
  "sektor_olahan_pangan": libya_olahan_pangan,
  "sektor_farmasi": libya_farmasi,
  "sektor_pertahanan": libya_pertahanan,
  "armada_militer": libya_armada,
  "militer_strategis": libya_strategis,
  "armada_kepolisian": libya_kepolisian,
  "pabrik_militer": libya_pabrik,
    "pendidikan": libya_pendidikan,
  "kesehatan": libya_kesehatan,
  "hukum": libya_hukum,
  "sektor_olahraga": libya_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 16
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 43
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": libya_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 6,
    "keamanan": 38,
    "keuangan": 22,
    "lingkungan": 60
  }
};

