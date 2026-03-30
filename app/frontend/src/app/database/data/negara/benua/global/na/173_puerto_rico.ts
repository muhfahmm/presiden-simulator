import { CountryData } from "@/app/database/data/types";
import { puerto_rico_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/na/173_puerto_rico";
import { puerto_rico_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/173_puerto_rico";
import { puerto_rico_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/na/173_puerto_rico";
import { puerto_rico_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/na/173_puerto_rico";
import { puerto_rico_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/173_puerto_rico";
import { puerto_rico_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/na/173_puerto_rico";
import { puerto_rico_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/173_puerto_rico";
import { puerto_rico_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/173_puerto_rico";
import { puerto_rico_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/na/173_puerto_rico";
import { puerto_rico_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/na/173_puerto_rico";
import { puerto_rico_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/na/173_puerto_rico";
import { puerto_rico_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/173_puerto_rico";
import { puerto_rico_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/173_puerto_rico";
import { puerto_rico_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/173_puerto_rico";
import { puerto_rico_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/na/173_puerto_rico";
import { puerto_rico_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/173_puerto_rico";
import { puerto_rico_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/na/173_puerto_rico";
import { puerto_rico_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/173_puerto_rico";
import { puerto_rico_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/173_puerto_rico";
import { puerto_rico_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/173_puerto_rico";

export const puerto_rico: CountryData = {
  ...puerto_rico_profile,
  "sektor_listrik": puerto_rico_listrik,
  "infrastruktur": puerto_rico_infrastruktur,
  "sektor_ekstraksi": puerto_rico_ekstraksi,
  "sektor_manufaktur": puerto_rico_manufaktur,
  "sektor_peternakan": puerto_rico_peternakan,
  "sektor_agrikultur": puerto_rico_agrikultur,
  "sektor_perikanan": puerto_rico_perikanan,
  "sektor_olahan_pangan": puerto_rico_olahan_pangan,
  "sektor_farmasi": puerto_rico_farmasi,
  "sektor_pertahanan": puerto_rico_pertahanan,
  "armada_militer": puerto_rico_armada,
  "militer_strategis": puerto_rico_strategis,
  "armada_kepolisian": puerto_rico_kepolisian,
  "pabrik_militer": puerto_rico_pabrik,
    "pendidikan": puerto_rico_pendidikan,
  "kesehatan": puerto_rico_kesehatan,
  "hukum": puerto_rico_hukum,
  "sektor_olahraga": puerto_rico_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 2600,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": puerto_rico_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 13,
    "keamanan": 28,
    "keuangan": 20,
    "lingkungan": 60
  }
};

