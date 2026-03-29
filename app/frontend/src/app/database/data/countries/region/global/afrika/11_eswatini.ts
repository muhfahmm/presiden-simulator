import { CountryData } from "@/app/database/data/types";
import { eswatini_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/11_eswatini";
import { eswatini_armada } from "../../modules/2_militer/2_armada_militer/afrika/11_eswatini";
import { eswatini_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/11_eswatini";
import { eswatini_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/11_eswatini";
import { eswatini_hukum } from "../../modules/3_sosial/3_hukum/afrika/11_eswatini";
import { eswatini_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/11_eswatini";
import { eswatini_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/11_eswatini";
import { eswatini_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/11_eswatini";
import { eswatini_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/11_eswatini";
import { eswatini_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/11_eswatini";
import { eswatini_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/11_eswatini";
import { eswatini_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/11_eswatini";
import { eswatini_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/11_eswatini";
import { eswatini_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/11_eswatini";
import { eswatini_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/11_eswatini";
import { eswatini_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/11_eswatini";
import { eswatini_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/11_eswatini";
import { eswatini_profile } from "../../modules/0_profiles/afrika/11_eswatini";
import { eswatini_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/11_eswatini";
import { eswatini_geopolitik } from "../../modules/4_geopolitik/afrika/11_eswatini";

export const eswatini: CountryData = {
  ...eswatini_profile,
  "sektor_listrik": eswatini_listrik,
  "infrastruktur": eswatini_infrastruktur,
  "sektor_ekstraksi": eswatini_ekstraksi,
  "sektor_manufaktur": eswatini_manufaktur,
  "sektor_peternakan": eswatini_peternakan,
  "sektor_agrikultur": eswatini_agrikultur,
  "sektor_perikanan": eswatini_perikanan,
  "sektor_olahan_pangan": eswatini_olahan_pangan,
  "sektor_farmasi": eswatini_farmasi,
  "sektor_pertahanan": eswatini_pertahanan,
  "armada_militer": eswatini_armada,
  "militer_strategis": eswatini_strategis,
  "armada_kepolisian": eswatini_kepolisian,
  "pabrik_militer": eswatini_pabrik,
    "pendidikan": eswatini_pendidikan,
  "kesehatan": eswatini_kesehatan,
  "hukum": eswatini_hukum,
  "sektor_olahraga": eswatini_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": eswatini_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 40,
    "keamanan": 6,
    "keuangan": 10,
    "lingkungan": 60
  }
};
