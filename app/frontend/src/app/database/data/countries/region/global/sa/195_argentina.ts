import { CountryData } from "@/app/database/data/types";
import { argentina_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/195_argentina";
import { argentina_armada } from "../../modules/2_militer/2_armada_militer/sa/195_argentina";
import { argentina_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/195_argentina";
import { argentina_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/195_argentina";
import { argentina_hukum } from "../../modules/3_sosial/3_hukum/sa/195_argentina";
import { argentina_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/195_argentina";
import { argentina_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/195_argentina";
import { argentina_kesehatan } from "../../modules/3_sosial/2_kesehatan/sa/195_argentina";
import { argentina_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/195_argentina";
import { argentina_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/195_argentina";
import { argentina_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/195_argentina";
import { argentina_olahraga } from "../../modules/3_sosial/4_olahraga/sa/195_argentina";
import { argentina_pabrik } from "../../modules/2_militer/5_pabrik_militer/sa/195_argentina";
import { argentina_pendidikan } from "../../modules/3_sosial/1_pendidikan/sa/195_argentina";
import { argentina_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/195_argentina";
import { argentina_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/195_argentina";
import { argentina_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/195_argentina";
import { argentina_profile } from "../../modules/0_profiles/sa/195_argentina";
import { argentina_strategis } from "../../modules/2_militer/3_militer_strategis/sa/195_argentina";
import { argentina_geopolitik } from "../../modules/4_geopolitik/sa/195_argentina";

export const argentina: CountryData = {
  ...argentina_profile,
  "sektor_listrik": argentina_listrik,
  "infrastruktur": argentina_infrastruktur,
  "sektor_ekstraksi": argentina_ekstraksi,
  "sektor_manufaktur": argentina_manufaktur,
  "sektor_peternakan": argentina_peternakan,
  "sektor_agrikultur": argentina_agrikultur,
  "sektor_perikanan": argentina_perikanan,
  "sektor_olahan_pangan": argentina_olahan_pangan,
  "sektor_farmasi": argentina_farmasi,
  "sektor_pertahanan": argentina_pertahanan,
  "armada_militer": argentina_armada,
  "militer_strategis": argentina_strategis,
  "armada_kepolisian": argentina_kepolisian,
  "pabrik_militer": argentina_pabrik,
    "pendidikan": argentina_pendidikan,
  "kesehatan": argentina_kesehatan,
  "hukum": argentina_hukum,
  "sektor_olahraga": argentina_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 37
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 159
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 528
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 444
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 221
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 32 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 94 },
    "lainnya": {
      "tarif": 15,
      "kepuasan": 93,
      "pendapatan": 253
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": argentina_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 35,
    "keamanan": 24,
    "keuangan": 36,
    "lingkungan": 60
  }
};
