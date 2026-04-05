import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { antigua_dan_barbuda_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/153_antigua_dan_barbuda";

export const antigua_dan_barbuda: CountryData = {
  ...antigua_dan_barbuda_profile,
  "sektor_listrik": antigua_dan_barbuda_listrik,
  "infrastruktur": antigua_dan_barbuda_infrastruktur,
  "sektor_ekstraksi": antigua_dan_barbuda_ekstraksi,
  "sektor_manufaktur": antigua_dan_barbuda_manufaktur,
  "sektor_peternakan": antigua_dan_barbuda_peternakan,
  "sektor_agrikultur": antigua_dan_barbuda_agrikultur,
  "sektor_perikanan": antigua_dan_barbuda_perikanan,
  "sektor_olahan_pangan": antigua_dan_barbuda_olahan_pangan,
  "sektor_farmasi": antigua_dan_barbuda_farmasi,
  "sektor_pertahanan": antigua_dan_barbuda_pertahanan,
  "armada_militer": antigua_dan_barbuda_armada,
  "militer_strategis": antigua_dan_barbuda_strategis,
  "armada_kepolisian": antigua_dan_barbuda_kepolisian,
  "pabrik_militer": antigua_dan_barbuda_pabrik,
    "pendidikan": antigua_dan_barbuda_pendidikan,
  "kesehatan": antigua_dan_barbuda_kesehatan,
  "hukum": antigua_dan_barbuda_hukum,
  "sektor_olahraga": antigua_dan_barbuda_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": antigua_dan_barbuda_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 7,
    "keamanan": 11,
    "keuangan": 27,
    "lingkungan": 60
  }
};

