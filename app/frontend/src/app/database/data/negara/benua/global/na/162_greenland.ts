import { CountryData } from "@/app/database/data/types";
import { greenland_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/na/162_greenland";
import { greenland_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/162_greenland";
import { greenland_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/na/162_greenland";
import { greenland_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/na/162_greenland";
import { greenland_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/162_greenland";
import { greenland_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/na/162_greenland";
import { greenland_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/162_greenland";
import { greenland_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/162_greenland";
import { greenland_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/na/162_greenland";
import { greenland_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/na/162_greenland";
import { greenland_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/na/162_greenland";
import { greenland_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/162_greenland";
import { greenland_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/162_greenland";
import { greenland_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/162_greenland";
import { greenland_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/na/162_greenland";
import { greenland_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/162_greenland";
import { greenland_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/na/162_greenland";
import { greenland_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/162_greenland";
import { greenland_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/162_greenland";
import { greenland_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/162_greenland";

export const greenland: CountryData = {
  ...greenland_profile,
  "sektor_listrik": greenland_listrik,
  "infrastruktur": greenland_infrastruktur,
  "sektor_ekstraksi": greenland_ekstraksi,
  "sektor_manufaktur": greenland_manufaktur,
  "sektor_peternakan": greenland_peternakan,
  "sektor_agrikultur": greenland_agrikultur,
  "sektor_perikanan": greenland_perikanan,
  "sektor_olahan_pangan": greenland_olahan_pangan,
  "sektor_farmasi": greenland_farmasi,
  "sektor_pertahanan": greenland_pertahanan,
  "armada_militer": greenland_armada,
  "militer_strategis": greenland_strategis,
  "armada_kepolisian": greenland_kepolisian,
  "pabrik_militer": greenland_pabrik,
    "pendidikan": greenland_pendidikan,
  "kesehatan": greenland_kesehatan,
  "hukum": greenland_hukum,
  "sektor_olahraga": greenland_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": greenland_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 18,
    "keamanan": 38,
    "keuangan": 32,
    "lingkungan": 60
  }
};
