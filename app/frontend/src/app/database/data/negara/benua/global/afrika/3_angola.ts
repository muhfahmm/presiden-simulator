import { CountryData } from "@/app/database/data/types";
import { angola_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/3_angola";
import { angola_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/3_angola";
import { angola_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/3_angola";
import { angola_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/3_angola";
import { angola_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/3_angola";
import { angola_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/3_angola";
import { angola_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/3_angola";
import { angola_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/3_angola";
import { angola_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/3_angola";
import { angola_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/3_angola";
import { angola_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/3_angola";
import { angola_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/3_angola";
import { angola_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/3_angola";
import { angola_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/3_angola";
import { angola_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/3_angola";
import { angola_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/3_angola";
import { angola_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/3_angola";
import { angola_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/3_angola";
import { angola_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/3_angola";
import { angola_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/3_angola";

export const angola: CountryData = {
  ...angola_profile,
  "sektor_listrik": angola_listrik,
  "infrastruktur": angola_infrastruktur,
  "sektor_ekstraksi": angola_ekstraksi,
  "sektor_manufaktur": angola_manufaktur,
  "sektor_peternakan": angola_peternakan,
  "sektor_agrikultur": angola_agrikultur,
  "sektor_perikanan": angola_perikanan,
  "sektor_olahan_pangan": angola_olahan_pangan,
  "sektor_farmasi": angola_farmasi,
  "sektor_pertahanan": angola_pertahanan,
  "armada_militer": angola_armada,
  "militer_strategis": angola_strategis,
  "armada_kepolisian": angola_kepolisian,
  "pabrik_militer": angola_pabrik,
    "pendidikan": angola_pendidikan,
  "kesehatan": angola_kesehatan,
  "hukum": angola_hukum,
  "sektor_olahraga": angola_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 49
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 47
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 56
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 62
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 34,
      "kepuasan": 93,
      "pendapatan": 69
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 40
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": angola_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 32,
    "keamanan": 29,
    "keuangan": 18,
    "lingkungan": 60
  }
};

