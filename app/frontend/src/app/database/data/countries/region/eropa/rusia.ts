import { CountryData } from "../../../types";

export const rusia: CountryData = {
  "name_en": "Russia",
  "capital": "Moscow",
  "name_id": "Rusia",
  "lon": 100,
  "lat": 60,
  "flag": "🇷🇺",
  "jumlah_penduduk": 144478050,
  "anggaran": 19640,
  "pendapatan_nasional": "56116",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 37,
    "pembangkit_listrik_tenaga_air": 18,
    "pembangkit_listrik_tenaga_surya": 1,
    "pembangkit_listrik_tenaga_uap": 18,
    "pembangkit_listrik_tenaga_gas": 43,
    "pembangkit_listrik_tenaga_angin": 1
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 4,
    "kereta_bawah_tanah": 1,
    "jalur_kereta": 21,
    "jalan_tol": 36,
    "pelabuhan_laut": 32,
    "bandara": 31,
    "terminal_bus": 23,
    "helipad": 37
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 9,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 59,
    "gas_alam": 0,
    "garam": 0,
    "nikel": 0,
    "litium": 85,
    "tembaga": 43,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 17
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 16,
    "mobil": 11,
    "sepeda_motor": 28,
    "smelter": 36,
    "semen_beton": 35,
    "kayu": 20
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 36,
    "sapi_perah": 39,
    "sapi_potong": 8,
    "domba_kambing": 12
  },
  "sektor_agrikultur": {
    "padi": 35,
    "gandum_jagung": 14,
    "sayur_umbi": 27,
    "kedelai": 37,
    "kelapa_sawit": 10,
    "kopi_teh_kakao": 14
  },
  "sektor_perikanan": {
    "udang_kerang": 14,
    "ikan": 28
  },
  "sektor_olahan_pangan": {
    "air_mineral": 22,
    "gula": 27,
    "roti": 33,
    "pengolahan_daging": 22,
    "mie_instan": 5
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 32
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 27,
    "hangar_tank": 22,
    "akademi_militer": 31,
    "pusat_komando": 22,
    "pangkalan_udara": 22,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 20
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 11,
    "darat": {
        "tank_tempur_utama": 17,
        "apc_ifv": 142,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 19,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 189,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 33,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 110000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 6,
    "intelijen": 15,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 10,
      "misi_mata_mata": 36,
      "misi_sabotase": 7,
      "manajemen_wilayah": 37,
      "program_nuklir": 100 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 21,
        "unit_interceptor_r2": 35,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 13,
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
      "prasekolah": 12,
      "dasar": 37,
      "menengah": 12,
      "lanjutan": 2,
      "universitas": 15,
      "lembaga_pendidikan": 37,
      "laboratorium": 26,
      "observatorium": 34,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 8,
      "literasi": 87
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 29,
      "pusat_diagnostik": 29,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 27,
      "kejaksaan": 3,
      "pos_polisi": 11,
      "armada_mobil_polisi": 6612,
      "akademi_polisi": 24,
      "indeks_korupsi": 75,
      "indeks_keamanan": 72
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 2,
      "stadion": 14,
      "stadion_internasional": 17
  },

  "un_vote": 150,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 1161
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 241
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1042
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 983
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1412
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 99 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 295 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 1274
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },

    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "sekutu": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 12,
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
    "kesehatan": 7,
    "pendidikan": 14,
    "keamanan": 20,
    "keuangan": 1,
    "lingkungan": 60
  }
};

