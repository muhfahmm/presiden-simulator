import { CountryData } from "@/app/database/data/types";
import { uni_emirat_arab_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/98_uni_emirat_arab";
import { uni_emirat_arab_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/98_uni_emirat_arab";
import { uni_emirat_arab_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/98_uni_emirat_arab";
import { uni_emirat_arab_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/98_uni_emirat_arab";
import { uni_emirat_arab_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/98_uni_emirat_arab";
import { uni_emirat_arab_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/98_uni_emirat_arab";
import { uni_emirat_arab_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/98_uni_emirat_arab";
import { uni_emirat_arab_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/98_uni_emirat_arab";
import { uni_emirat_arab_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/98_uni_emirat_arab";
import { uni_emirat_arab_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/98_uni_emirat_arab";
import { uni_emirat_arab_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/98_uni_emirat_arab";
import { uni_emirat_arab_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/98_uni_emirat_arab";
import { uni_emirat_arab_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/98_uni_emirat_arab";

export const uni_emirat_arab: CountryData = {
  ...uni_emirat_arab_profile,
  "sektor_listrik": uni_emirat_arab_listrik,
  "infrastruktur": uni_emirat_arab_infrastruktur,
  "sektor_ekstraksi": uni_emirat_arab_ekstraksi,
  "sektor_manufaktur": uni_emirat_arab_manufaktur,
  "sektor_peternakan": uni_emirat_arab_peternakan,
  "sektor_agrikultur": uni_emirat_arab_agrikultur,
  "sektor_perikanan": uni_emirat_arab_perikanan,
  "sektor_olahan_pangan": uni_emirat_arab_olahan_pangan,
  "sektor_farmasi": uni_emirat_arab_farmasi,
  "sektor_pertahanan": uni_emirat_arab_pertahanan,
  "armada_militer": uni_emirat_arab_armada,
  "militer_strategis": uni_emirat_arab_strategis,
  "armada_kepolisian": uni_emirat_arab_kepolisian,
  "pabrik_militer": uni_emirat_arab_pabrik,
    "pendidikan": uni_emirat_arab_pendidikan,
  "kesehatan": uni_emirat_arab_kesehatan,
  "hukum": uni_emirat_arab_hukum,
  "sektor_olahraga": uni_emirat_arab_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 211
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 81
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 204
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 200
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 419
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 227
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": uni_emirat_arab_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 16,
    "keamanan": 32,
    "keuangan": 17,
    "lingkungan": 60
  }
};

