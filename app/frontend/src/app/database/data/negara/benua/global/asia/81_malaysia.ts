import { CountryData } from "@/app/database/data/types";
import { malaysia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/81_malaysia";
import { malaysia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/81_malaysia";
import { malaysia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/81_malaysia";
import { malaysia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/81_malaysia";
import { malaysia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/81_malaysia";
import { malaysia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/81_malaysia";
import { malaysia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/81_malaysia";
import { malaysia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/81_malaysia";
import { malaysia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/81_malaysia";
import { malaysia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/81_malaysia";
import { malaysia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/81_malaysia";
import { malaysia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/81_malaysia";
import { malaysia_komersial } from "@/app/database/data/semua_fitur_negara/3_sosial/5_komersial/asia/81_malaysia";
import { malaysia_hiburan } from "@/app/database/data/semua_fitur_negara/3_sosial/6_hiburan/asia/81_malaysia";
import { malaysia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/81_malaysia";
import { malaysia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/81_malaysia";
import { malaysia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/81_malaysia";
import { malaysia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/81_malaysia";
import { malaysia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/81_malaysia";
import { malaysia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/81_malaysia";
import { malaysia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/81_malaysia";
import { malaysia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/81_malaysia";

export const malaysia: CountryData = {
  ...malaysia_profile,
  "sektor_listrik": malaysia_listrik,
  "infrastruktur": malaysia_infrastruktur,
  "sektor_ekstraksi": malaysia_ekstraksi,
  "sektor_manufaktur": malaysia_manufaktur,
  "sektor_peternakan": malaysia_peternakan,
  "sektor_agrikultur": malaysia_agrikultur,
  "sektor_perikanan": malaysia_perikanan,
  "sektor_olahan_pangan": malaysia_olahan_pangan,
  "sektor_farmasi": malaysia_farmasi,
  "sektor_pertahanan": malaysia_pertahanan,
  "armada_militer": malaysia_armada,
  "militer_strategis": malaysia_strategis,
  "armada_kepolisian": malaysia_kepolisian,
  "pabrik_militer": malaysia_pabrik,
    "pendidikan": malaysia_pendidikan,
  "kesehatan": malaysia_kesehatan,
  "hukum": malaysia_hukum,
  "sektor_olahraga": malaysia_olahraga,
  "sektor_komersial": malaysia_komersial,
  "sektor_hiburan": malaysia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 139
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 259
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 82
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 80
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 59 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 167
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": malaysia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 39,
    "keamanan": 5,
    "keuangan": 39,
    "lingkungan": 60
  }
};

