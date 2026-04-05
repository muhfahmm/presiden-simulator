import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { belize_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/156_belize";
import { belize_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/156_belize";
import { belize_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/156_belize";
import { belize_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/156_belize";
import { belize_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/156_belize";
import { belize_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/156_belize";
import { belize_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/156_belize";
import { belize_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/156_belize";
import { belize_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/156_belize";
import { belize_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/156_belize";
import { belize_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/156_belize";
import { belize_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/156_belize";
import { belize_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/156_belize";
import { belize_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/156_belize";
import { belize_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/156_belize";
import { belize_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/156_belize";
import { belize_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/156_belize";
import { belize_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/156_belize";
import { belize_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/156_belize";
import { belize_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/156_belize";

export const belize: CountryData = {
  ...belize_profile,
  "sektor_listrik": belize_listrik,
  "infrastruktur": belize_infrastruktur,
  "sektor_ekstraksi": belize_ekstraksi,
  "sektor_manufaktur": belize_manufaktur,
  "sektor_peternakan": belize_peternakan,
  "sektor_agrikultur": belize_agrikultur,
  "sektor_perikanan": belize_perikanan,
  "sektor_olahan_pangan": belize_olahan_pangan,
  "sektor_farmasi": belize_farmasi,
  "sektor_pertahanan": belize_pertahanan,
  "armada_militer": belize_armada,
  "militer_strategis": belize_strategis,
  "armada_kepolisian": belize_kepolisian,
  "pabrik_militer": belize_pabrik,
    "pendidikan": belize_pendidikan,
  "kesehatan": belize_kesehatan,
  "hukum": belize_hukum,
  "sektor_olahraga": belize_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belize_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 23,
    "pendidikan": 29,
    "keamanan": 34,
    "keuangan": 27,
    "lingkungan": 60
  }
};

