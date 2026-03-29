import { CountryData } from "@/app/database/data/types";
import { panama_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/172_panama";
import { panama_armada } from "../../modules/2_militer/2_armada_militer/na/172_panama";
import { panama_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/172_panama";
import { panama_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/172_panama";
import { panama_hukum } from "../../modules/3_sosial/3_hukum/na/172_panama";
import { panama_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/172_panama";
import { panama_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/172_panama";
import { panama_kesehatan } from "../../modules/3_sosial/2_kesehatan/na/172_panama";
import { panama_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/172_panama";
import { panama_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/172_panama";
import { panama_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/172_panama";
import { panama_olahraga } from "../../modules/3_sosial/4_olahraga/na/172_panama";
import { panama_pabrik } from "../../modules/2_militer/5_pabrik_militer/na/172_panama";
import { panama_pendidikan } from "../../modules/3_sosial/1_pendidikan/na/172_panama";
import { panama_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/172_panama";
import { panama_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/172_panama";
import { panama_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/172_panama";
import { panama_profile } from "../../modules/0_profiles/na/172_panama";
import { panama_strategis } from "../../modules/2_militer/3_militer_strategis/na/172_panama";
import { panama_geopolitik } from "../../modules/4_geopolitik/na/172_panama";

export const panama: CountryData = {
  ...panama_profile,
  "sektor_listrik": panama_listrik,
  "infrastruktur": panama_infrastruktur,
  "sektor_ekstraksi": panama_ekstraksi,
  "sektor_manufaktur": panama_manufaktur,
  "sektor_peternakan": panama_peternakan,
  "sektor_agrikultur": panama_agrikultur,
  "sektor_perikanan": panama_perikanan,
  "sektor_olahan_pangan": panama_olahan_pangan,
  "sektor_farmasi": panama_farmasi,
  "sektor_pertahanan": panama_pertahanan,
  "armada_militer": panama_armada,
  "militer_strategis": panama_strategis,
  "armada_kepolisian": panama_kepolisian,
  "pabrik_militer": panama_pabrik,
    "pendidikan": panama_pendidikan,
  "kesehatan": panama_kesehatan,
  "hukum": panama_hukum,
  "sektor_olahraga": panama_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 41
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 10
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 54
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 85
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
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": panama_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 25,
    "keamanan": 15,
    "keuangan": 7,
    "lingkungan": 60
  }
};
