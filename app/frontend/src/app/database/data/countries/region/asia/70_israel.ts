import { CountryData } from "../../../types";

export const israel: CountryData = {
  "name_en": "Israel",
  "capital": "Jerusalem",
  "name_id": "Israel",
  "lon": 35.13,
  "lat": 31.47,
  "flag": "🇮🇱",
  "jumlah_penduduk": 8882800,
  "anggaran": 5056,
  "pendapatan_nasional": "14446",
  "religion": "Yahudi",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 15,
    "pembangkit_listrik_tenaga_surya": 10,
    "pembangkit_listrik_tenaga_uap": 50,
    "pembangkit_listrik_tenaga_gas": 20,
    "pembangkit_listrik_tenaga_angin": 3
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 40,
    "kereta_bawah_tanah": 29,
    "jalur_kereta": 10,
    "jalan_tol": 32,
    "pelabuhan_laut": 7,
    "bandara": 3,
    "terminal_bus": 31,
    "helipad": 11
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 55,
    "batu_bara": 43,
    "minyak_bumi": 3,
    "gas_alam": 0,
    "garam": 0,
    "nikel": 0,
    "litium": 0,
    "tembaga": 31,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 64
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 8,
    "mobil": 37,
    "sepeda_motor": 32,
    "smelter": 21,
    "semen_beton": 39,
    "kayu": 12
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 22,
    "sapi_perah": 8,
    "sapi_potong": 12,
    "domba_kambing": 15
  },
  "sektor_agrikultur": {
    "padi": 21,
    "gandum_jagung": 22,
    "sayur_umbi": 14,
    "kedelai": 38,
    "kelapa_sawit": 28,
    "kopi_teh_kakao": 21
  },
  "sektor_perikanan": {
    "udang_kerang": 16,
    "ikan": 16
  },
  "sektor_olahan_pangan": {
    "air_mineral": 14,
    "gula": 27,
    "roti": 10,
    "pengolahan_daging": 18,
    "mie_instan": 29
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 16
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 5,
    "gudang_senjata": 5,
    "hangar_tank": 36,
    "akademi_militer": 38,
    "pusat_komando": 36,
    "pangkalan_udara": 14,
    "pangkalan_laut": 21,
    "program_luar_angkasa": 17,
    "pertahanan_siber": 18
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 35,
    "darat": {
        "tank_tempur_utama": 14,
        "apc_ifv": 39,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 19,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 16,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 9,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 350000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 37,
    "intelijen": 27,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 3,
      "misi_mata_mata": 14,
      "misi_sabotase": 27,
      "manajemen_wilayah": 26,
      "program_nuklir": 100 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 23,
        "unit_interceptor_r2": 30,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 9,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 24,
          "pusat_forensik": 1
        }
    }
  },
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 37,
      "dasar": 7,
      "menengah": 7,
      "lanjutan": 2,
      "universitas": 28,
      "lembaga_pendidikan": 15,
      "laboratorium": 11,
      "observatorium": 5,
      "pusat_penelitian": 31,
      "pusat_pengembangan": 33,
      "literasi": 76
    },
    "kesehatan": {
      "rumah_sakit_besar": 27,
      "rumah_sakit_kecil": 22,
      "pusat_diagnostik": 4,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 36,
      "pengadilan": 22,
      "kejaksaan": 11,
      "pos_polisi": 31,
      "armada_mobil_polisi": 5678,
      "akademi_polisi": 28,
      "indeks_korupsi": 79,
      "indeks_keamanan": 61
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 37,
      "stadion": 8,
      "stadion_internasional": 33
  },

  "un_vote": 199,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 40
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 160
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 97
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 58
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 139
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 76 },
    "lainnya": {
      "tarif": 37,
      "kepuasan": 93,
      "pendapatan": 383
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },

    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
    },
    "organisasi_internasional": [
      {
        "name": "PBB (UN)",
        "role": "Anggota"
      },
      {
        "name": "WHO",
        "role": "Anggota"
      },
      {
        "name": "WTO",
        "role": "Anggota"
      }
    ]
  },
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================

  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 16,
    "keamanan": 39,
    "keuangan": 31,
    "lingkungan": 60
  }
};





