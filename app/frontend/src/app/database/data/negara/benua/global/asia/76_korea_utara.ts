import { CountryData } from "@/app/database/data/types";
import { korea_utara_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/76_korea_utara";
import { korea_utara_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/76_korea_utara";
import { korea_utara_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/76_korea_utara";
import { korea_utara_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/76_korea_utara";
import { korea_utara_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/76_korea_utara";
import { korea_utara_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/76_korea_utara";
import { korea_utara_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/76_korea_utara";
import { korea_utara_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/76_korea_utara";
import { korea_utara_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/76_korea_utara";
import { korea_utara_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/76_korea_utara";
import { korea_utara_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/76_korea_utara";
import { korea_utara_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/76_korea_utara";
import { korea_utara_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/76_korea_utara";
import { korea_utara_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/76_korea_utara";
import { korea_utara_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/76_korea_utara";
import { korea_utara_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/76_korea_utara";
import { korea_utara_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/76_korea_utara";
import { korea_utara_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/76_korea_utara";
import { korea_utara_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/76_korea_utara";
import { korea_utara_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/76_korea_utara";

export const korea_utara: CountryData = {
  ...korea_utara_profile,
  "sektor_listrik": korea_utara_listrik,
  "infrastruktur": korea_utara_infrastruktur,
  "sektor_ekstraksi": korea_utara_ekstraksi,
  "sektor_manufaktur": korea_utara_manufaktur,
  "sektor_peternakan": korea_utara_peternakan,
  "sektor_agrikultur": korea_utara_agrikultur,
  "sektor_perikanan": korea_utara_perikanan,
  "sektor_olahan_pangan": korea_utara_olahan_pangan,
  "sektor_farmasi": korea_utara_farmasi,
  "sektor_pertahanan": korea_utara_pertahanan,
  "armada_militer": korea_utara_armada,
  "militer_strategis": korea_utara_strategis,
  "armada_kepolisian": korea_utara_kepolisian,
  "pabrik_militer": korea_utara_pabrik,
    "pendidikan": korea_utara_pendidikan,
  "kesehatan": korea_utara_kesehatan,
  "hukum": korea_utara_hukum,
  "sektor_olahraga": korea_utara_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": korea_utara_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 3,
    "pendidikan": 1,
    "keamanan": 29,
    "keuangan": 3,
    "lingkungan": 60
  }
};

