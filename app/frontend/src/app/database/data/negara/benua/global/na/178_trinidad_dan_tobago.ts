import { CountryData } from "@/app/database/data/types";
import { trinidad_dan_tobago_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/178_trinidad_dan_tobago";
import { trinidad_dan_tobago_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/178_trinidad_dan_tobago";

export const trinidad_dan_tobago: CountryData = {
  ...trinidad_dan_tobago_profile,
  "sektor_listrik": trinidad_dan_tobago_listrik,
  "infrastruktur": trinidad_dan_tobago_infrastruktur,
  "sektor_ekstraksi": trinidad_dan_tobago_ekstraksi,
  "sektor_manufaktur": trinidad_dan_tobago_manufaktur,
  "sektor_peternakan": trinidad_dan_tobago_peternakan,
  "sektor_agrikultur": trinidad_dan_tobago_agrikultur,
  "sektor_perikanan": trinidad_dan_tobago_perikanan,
  "sektor_olahan_pangan": trinidad_dan_tobago_olahan_pangan,
  "sektor_farmasi": trinidad_dan_tobago_farmasi,
  "sektor_pertahanan": trinidad_dan_tobago_pertahanan,
  "armada_militer": trinidad_dan_tobago_armada,
  "militer_strategis": trinidad_dan_tobago_strategis,
  "armada_kepolisian": trinidad_dan_tobago_kepolisian,
  "pabrik_militer": trinidad_dan_tobago_pabrik,
    "pendidikan": trinidad_dan_tobago_pendidikan,
  "kesehatan": trinidad_dan_tobago_kesehatan,
  "hukum": trinidad_dan_tobago_hukum,
  "sektor_olahraga": trinidad_dan_tobago_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 23
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": trinidad_dan_tobago_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 14,
    "keuangan": 24,
    "lingkungan": 60
  }
};
