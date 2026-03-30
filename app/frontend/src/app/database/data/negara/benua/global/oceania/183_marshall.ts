import { CountryData } from "@/app/database/data/types";
import { marshall_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/oceania/183_marshall";
import { marshall_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/183_marshall";
import { marshall_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/oceania/183_marshall";
import { marshall_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/oceania/183_marshall";
import { marshall_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/183_marshall";
import { marshall_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/oceania/183_marshall";
import { marshall_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/183_marshall";
import { marshall_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/183_marshall";
import { marshall_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/oceania/183_marshall";
import { marshall_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/oceania/183_marshall";
import { marshall_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/oceania/183_marshall";
import { marshall_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/183_marshall";
import { marshall_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/183_marshall";
import { marshall_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/183_marshall";
import { marshall_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/oceania/183_marshall";
import { marshall_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/183_marshall";
import { marshall_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/oceania/183_marshall";
import { marshall_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/183_marshall";
import { marshall_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/183_marshall";
import { marshall_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/183_marshall";

export const marshall: CountryData = {
  ...marshall_profile,
  "sektor_listrik": marshall_listrik,
  "infrastruktur": marshall_infrastruktur,
  "sektor_ekstraksi": marshall_ekstraksi,
  "sektor_manufaktur": marshall_manufaktur,
  "sektor_peternakan": marshall_peternakan,
  "sektor_agrikultur": marshall_agrikultur,
  "sektor_perikanan": marshall_perikanan,
  "sektor_olahan_pangan": marshall_olahan_pangan,
  "sektor_farmasi": marshall_farmasi,
  "sektor_pertahanan": marshall_pertahanan,
  "armada_militer": marshall_armada,
  "militer_strategis": marshall_strategis,
  "armada_kepolisian": marshall_kepolisian,
  "pabrik_militer": marshall_pabrik,
    "pendidikan": marshall_pendidikan,
  "kesehatan": marshall_kesehatan,
  "hukum": marshall_hukum,
  "sektor_olahraga": marshall_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 30,
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
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": marshall_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 30,
    "keuangan": 18,
    "lingkungan": 60
  }
};

