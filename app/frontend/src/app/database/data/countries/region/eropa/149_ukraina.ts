import { CountryData } from "../../../types";

export const ukraina: CountryData = {
  "name_en": "Ukraine",
  "capital": "Kyiv",
  "name_id": "Ukraina",
  "lon": 32,
  "lat": 49,
  "flag": "🇺🇦",
  "jumlah_penduduk": 44622516,
  "anggaran": 1556,
  "pendapatan_nasional": "4445",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 15,
    "pembangkit_listrik_tenaga_air": 5,
    "pembangkit_listrik_tenaga_surya": 5,
    "pembangkit_listrik_tenaga_uap": 20,
    "pembangkit_listrik_tenaga_gas": 10,
    "pembangkit_listrik_tenaga_angin": 5
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 26,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 6,
    "jalan_tol": 25,
    "pelabuhan_laut": 12,
    "bandara": 36,
    "terminal_bus": 25,
    "helipad": 6
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 73,
    "batu_bara": 35,
    "minyak_bumi": 0,
    "gas_alam": 68,
    "garam": 0,
    "nikel": 68,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 21,
    "logam_tanah_jarang": 0,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 31,
    "mobil": 16,
    "sepeda_motor": 38,
    "smelter": 5,
    "semen_beton": 18,
    "kayu": 37
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 28,
    "sapi_perah": 29,
    "sapi_potong": 30,
    "domba_kambing": 19
  },
  "sektor_agrikultur": {
    "padi": 19,
    "gandum_jagung": 26,
    "sayur_umbi": 39,
    "kedelai": 38,
    "kelapa_sawit": 6,
    "kopi_teh_kakao": 28
  },
  "sektor_perikanan": {
    "udang_kerang": 21,
    "ikan": 17
  },
  "sektor_olahan_pangan": {
    "air_mineral": 36,
    "gula": 17,
    "roti": 21,
    "pengolahan_daging": 24,
    "mie_instan": 10
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
    "penjara": 9,
    "gudang_senjata": 11,
    "hangar_tank": 37,
    "akademi_militer": 29,
    "pusat_komando": 1,
    "pangkalan_udara": 19,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 12
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 40,
    "darat": {
        "tank_tempur_utama": 92,
        "apc_ifv": 131,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 146,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 159,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 37,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 400000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 33,
    "intelijen": 37,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 35,
      "misi_sabotase": 30,
      "manajemen_wilayah": 29,
      "program_nuklir": 95 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 35,
        "unit_interceptor_r2": 32,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 8,
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
      "prasekolah": 5,
      "dasar": 34,
      "menengah": 38,
      "lanjutan": 20,
      "universitas": 33,
      "lembaga_pendidikan": 22,
      "laboratorium": 17,
      "observatorium": 37,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 11,
      "literasi": 56
    },
    "kesehatan": {
      "rumah_sakit_besar": 24,
      "rumah_sakit_kecil": 28,
      "pusat_diagnostik": 13,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 29,
      "pengadilan": 32,
      "kejaksaan": 8,
      "pos_polisi": 3,
      "armada_mobil_polisi": 5151,
      "akademi_polisi": 16,
      "indeks_korupsi": 67,
      "indeks_keamanan": 59
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 20,
      "sirkuit_balap": 22,
      "stadion": 26,
      "stadion_internasional": 23
  },

  "un_vote": 205,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 20
    },
    "penghasilan": {
      "tarif": 19,
      "kepuasan": 61,
      "pendapatan": 34
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 85
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 24 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 5
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
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 39,
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
    "kesehatan": 16,
    "pendidikan": 6,
    "keamanan": 1,
    "keuangan": 28,
    "lingkungan": 60
  }
};





