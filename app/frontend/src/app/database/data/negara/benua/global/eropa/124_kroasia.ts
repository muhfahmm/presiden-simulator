import { CountryData } from "@/app/database/data/types";
import { kroasia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/eropa/124_kroasia";
import { kroasia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/124_kroasia";
import { kroasia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/eropa/124_kroasia";
import { kroasia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/eropa/124_kroasia";
import { kroasia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/124_kroasia";
import { kroasia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/eropa/124_kroasia";
import { kroasia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/124_kroasia";
import { kroasia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/124_kroasia";
import { kroasia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/eropa/124_kroasia";
import { kroasia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/eropa/124_kroasia";
import { kroasia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/eropa/124_kroasia";
import { kroasia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/124_kroasia";
import { kroasia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/124_kroasia";
import { kroasia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/124_kroasia";
import { kroasia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/eropa/124_kroasia";
import { kroasia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/124_kroasia";
import { kroasia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/eropa/124_kroasia";
import { kroasia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/124_kroasia";
import { kroasia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/124_kroasia";
import { kroasia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/124_kroasia";

export const kroasia: CountryData = {
  ...kroasia_profile,
  "sektor_listrik": kroasia_listrik,
  "infrastruktur": kroasia_infrastruktur,
  "sektor_ekstraksi": kroasia_ekstraksi,
  "sektor_manufaktur": kroasia_manufaktur,
  "sektor_peternakan": kroasia_peternakan,
  "sektor_agrikultur": kroasia_agrikultur,
  "sektor_perikanan": kroasia_perikanan,
  "sektor_olahan_pangan": kroasia_olahan_pangan,
  "sektor_farmasi": kroasia_farmasi,
  "sektor_pertahanan": kroasia_pertahanan,
  "armada_militer": kroasia_armada,
  "militer_strategis": kroasia_strategis,
  "armada_kepolisian": kroasia_kepolisian,
  "pabrik_militer": kroasia_pabrik,
    "pendidikan": kroasia_pendidikan,
  "kesehatan": kroasia_kesehatan,
  "hukum": kroasia_hukum,
  "sektor_olahraga": kroasia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 33
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 63
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 27
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 22
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kroasia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 8,
    "keamanan": 33,
    "keuangan": 35,
    "lingkungan": 60
  }
};

