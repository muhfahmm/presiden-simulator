import { CountryData } from "@/app/database/data/types";
import { tahiti_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/oceania/191_tahiti";
import { tahiti_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/191_tahiti";
import { tahiti_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/oceania/191_tahiti";
import { tahiti_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/oceania/191_tahiti";
import { tahiti_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/191_tahiti";
import { tahiti_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/oceania/191_tahiti";
import { tahiti_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/191_tahiti";
import { tahiti_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/191_tahiti";
import { tahiti_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/oceania/191_tahiti";
import { tahiti_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/oceania/191_tahiti";
import { tahiti_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/oceania/191_tahiti";
import { tahiti_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/191_tahiti";
import { tahiti_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/191_tahiti";
import { tahiti_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/191_tahiti";
import { tahiti_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/oceania/191_tahiti";
import { tahiti_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/191_tahiti";
import { tahiti_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/oceania/191_tahiti";
import { tahiti_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/191_tahiti";
import { tahiti_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/191_tahiti";
import { tahiti_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/191_tahiti";

export const tahiti: CountryData = {
  ...tahiti_profile,
  "sektor_listrik": tahiti_listrik,
  "infrastruktur": tahiti_infrastruktur,
  "sektor_ekstraksi": tahiti_ekstraksi,
  "sektor_manufaktur": tahiti_manufaktur,
  "sektor_peternakan": tahiti_peternakan,
  "sektor_agrikultur": tahiti_agrikultur,
  "sektor_perikanan": tahiti_perikanan,
  "sektor_olahan_pangan": tahiti_olahan_pangan,
  "sektor_farmasi": tahiti_farmasi,
  "sektor_pertahanan": tahiti_pertahanan,
  "armada_militer": tahiti_armada,
  "militer_strategis": tahiti_strategis,
  "armada_kepolisian": tahiti_kepolisian,
  "pabrik_militer": tahiti_pabrik,
    "pendidikan": tahiti_pendidikan,
  "kesehatan": tahiti_kesehatan,
  "hukum": tahiti_hukum,
  "sektor_olahraga": tahiti_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 80,
    "gaji_medis": 80,
    "gaji_militer": 80
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
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tahiti_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 38,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 37,
    "lingkungan": 60
  }
};
