import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { el_salvador_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/161_el_salvador";
import { el_salvador_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/na/161_el_salvador";
import { el_salvador_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/161_el_salvador";
import { el_salvador_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/161_el_salvador";
import { el_salvador_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/na/161_el_salvador";
import { el_salvador_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/161_el_salvador";
import { el_salvador_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/na/161_el_salvador";
import { el_salvador_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/na/161_el_salvador";
import { el_salvador_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/161_el_salvador";
import { el_salvador_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/161_el_salvador";
import { el_salvador_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/161_el_salvador";
import { el_salvador_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/na/161_el_salvador";
import { el_salvador_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/na/161_el_salvador";
import { el_salvador_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/na/161_el_salvador";
import { el_salvador_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/161_el_salvador";
import { el_salvador_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/na/161_el_salvador";
import { el_salvador_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/161_el_salvador";
import { el_salvador_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/161_el_salvador";
import { el_salvador_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/na/161_el_salvador";
import { el_salvador_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/161_el_salvador";

export const el_salvador: CountryData = {
  ...el_salvador_profile,
  "sektor_listrik": el_salvador_listrik,
  "infrastruktur": el_salvador_infrastruktur,
  "sektor_ekstraksi": el_salvador_ekstraksi,
  "sektor_manufaktur": el_salvador_manufaktur,
  "sektor_peternakan": el_salvador_peternakan,
  "sektor_agrikultur": el_salvador_agrikultur,
  "sektor_perikanan": el_salvador_perikanan,
  "sektor_olahan_pangan": el_salvador_olahan_pangan,
  "sektor_farmasi": el_salvador_farmasi,
  "sektor_pertahanan": el_salvador_pertahanan,
  "armada_militer": el_salvador_armada,
  "militer_strategis": el_salvador_strategis,
  "armada_kepolisian": el_salvador_kepolisian,
  "pabrik_militer": el_salvador_pabrik,
    "pendidikan": el_salvador_pendidikan,
  "kesehatan": el_salvador_kesehatan,
  "hukum": el_salvador_hukum,
  "sektor_olahraga": el_salvador_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 15
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 26
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 20
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": el_salvador_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 24,
    "keamanan": 16,
    "keuangan": 26,
    "lingkungan": 60
  }
};

