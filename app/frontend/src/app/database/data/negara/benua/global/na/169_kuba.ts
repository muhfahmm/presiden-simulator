import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kuba_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/169_kuba";
import { kuba_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/169_kuba";
import { kuba_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/169_kuba";
import { kuba_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/169_kuba";
import { kuba_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/169_kuba";
import { kuba_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/169_kuba";
import { kuba_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/169_kuba";
import { kuba_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/169_kuba";
import { kuba_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/169_kuba";
import { kuba_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/169_kuba";
import { kuba_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/169_kuba";
import { kuba_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/169_kuba";
import { kuba_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/169_kuba";
import { kuba_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/169_kuba";
import { kuba_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/169_kuba";
import { kuba_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/169_kuba";
import { kuba_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/169_kuba";
import { kuba_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/169_kuba";
import { kuba_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/169_kuba";
import { kuba_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/169_kuba";

export const kuba: CountryData = {
  ...kuba_profile,
  "sektor_listrik": kuba_listrik,
  "infrastruktur": kuba_infrastruktur,
  "sektor_ekstraksi": kuba_ekstraksi,
  "sektor_manufaktur": kuba_manufaktur,
  "sektor_peternakan": kuba_peternakan,
  "sektor_agrikultur": kuba_agrikultur,
  "sektor_perikanan": kuba_perikanan,
  "sektor_olahan_pangan": kuba_olahan_pangan,
  "sektor_farmasi": kuba_farmasi,
  "sektor_pertahanan": kuba_pertahanan,
  "armada_militer": kuba_armada,
  "militer_strategis": kuba_strategis,
  "armada_kepolisian": kuba_kepolisian,
  "pabrik_militer": kuba_pabrik,
    "pendidikan": kuba_pendidikan,
  "kesehatan": kuba_kesehatan,
  "hukum": kuba_hukum,
  "sektor_olahraga": kuba_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 26
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 68
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 110
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 33
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
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
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kuba_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 22,
    "lingkungan": 60
  }
};

