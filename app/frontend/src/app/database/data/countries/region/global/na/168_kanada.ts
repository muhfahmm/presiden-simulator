import { CountryData } from "@/app/database/data/types";
import { kanada_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/168_kanada";
import { kanada_armada } from "../../modules/2_militer/2_armada_militer/na/168_kanada";
import { kanada_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/168_kanada";
import { kanada_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/168_kanada";
import { kanada_hukum } from "../../modules/3_sosial/3_hukum/na/168_kanada";
import { kanada_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/168_kanada";
import { kanada_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/168_kanada";
import { kanada_kesehatan } from "../../modules/3_sosial/2_kesehatan/na/168_kanada";
import { kanada_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/168_kanada";
import { kanada_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/168_kanada";
import { kanada_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/168_kanada";
import { kanada_olahraga } from "../../modules/3_sosial/4_olahraga/na/168_kanada";
import { kanada_pabrik } from "../../modules/2_militer/5_pabrik_militer/na/168_kanada";
import { kanada_pendidikan } from "../../modules/3_sosial/1_pendidikan/na/168_kanada";
import { kanada_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/168_kanada";
import { kanada_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/168_kanada";
import { kanada_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/168_kanada";
import { kanada_profile } from "../../modules/0_profiles/na/168_kanada";
import { kanada_strategis } from "../../modules/2_militer/3_militer_strategis/na/168_kanada";
import { kanada_geopolitik } from "../../modules/4_geopolitik/na/168_kanada";

export const kanada: CountryData = {
  ...kanada_profile,
  "sektor_listrik": kanada_listrik,
  "infrastruktur": kanada_infrastruktur,
  "sektor_ekstraksi": kanada_ekstraksi,
  "sektor_manufaktur": kanada_manufaktur,
  "sektor_peternakan": kanada_peternakan,
  "sektor_agrikultur": kanada_agrikultur,
  "sektor_perikanan": kanada_perikanan,
  "sektor_olahan_pangan": kanada_olahan_pangan,
  "sektor_farmasi": kanada_farmasi,
  "sektor_pertahanan": kanada_pertahanan,
  "armada_militer": kanada_armada,
  "militer_strategis": kanada_strategis,
  "armada_kepolisian": kanada_kepolisian,
  "pabrik_militer": kanada_pabrik,
    "pendidikan": kanada_pendidikan,
  "kesehatan": kanada_kesehatan,
  "hukum": kanada_hukum,
  "sektor_olahraga": kanada_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 586
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 749
    },
    "penghasilan": {
      "tarif": 9,
      "kepuasan": 61,
      "pendapatan": 273
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 304
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 1479
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 109 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 327 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 193
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
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
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kanada_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 5,
    "keamanan": 9,
    "keuangan": 18,
    "lingkungan": 60
  }
};
