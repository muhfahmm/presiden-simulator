import { CountryData } from "../../../types";

export const belanda: CountryData = {
  "name_en": "Netherlands",
  "capital": "Amsterdam",
  "name_id": "Belanda",
  "lon": 5.75,
  "lat": 52.5,
  "flag": "🇳🇱",
  "jumlah_penduduk": 17231624,
  "anggaran": 10598,
  "pendapatan_nasional": "30280",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 15,
    "pembangkit_listrik_tenaga_surya": 15,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 20,
    "pembangkit_listrik_tenaga_angin": 20
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 36,
    "kereta_bawah_tanah": 37,
    "jalur_kereta": 7,
    "jalan_tol": 4,
    "pelabuhan_laut": 17,
    "bandara": 20,
    "terminal_bus": 2,
    "helipad": 33
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 70,
    "gas_alam": 0,
    "garam": 80,
    "nikel": 99,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 54
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 22,
    "mobil": 15,
    "sepeda_motor": 12,
    "smelter": 22,
    "semen_beton": 20,
    "kayu": 32
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 25,
    "sapi_perah": 38,
    "sapi_potong": 31,
    "domba_kambing": 12
  },
  "sektor_agrikultur": {
    "padi": 32,
    "gandum_jagung": 20,
    "sayur_umbi": 31,
    "kedelai": 14,
    "kelapa_sawit": 38,
    "kopi_teh_kakao": 31
  },
  "sektor_perikanan": {
    "udang_kerang": 13,
    "ikan": 37
  },
  "sektor_olahan_pangan": {
    "air_mineral": 23,
    "gula": 38,
    "roti": 38,
    "pengolahan_daging": 30,
    "mie_instan": 39
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 38
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 24,
    "hangar_tank": 10,
    "akademi_militer": 17,
    "pusat_komando": 4,
    "pangkalan_udara": 23,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 19,
    "pertahanan_siber": 16
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 32,
    "darat": {
        "tank_tempur_utama": 28,
        "apc_ifv": 26,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 36,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 35,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 27,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 320000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 7,
    "intelijen": 22,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 26,
      "misi_sabotase": 4,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 40,
        "unit_interceptor_r2": 35,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 24,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 1,
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
      "prasekolah": 34,
      "dasar": 15,
      "menengah": 28,
      "lanjutan": 27,
      "universitas": 33,
      "lembaga_pendidikan": 11,
      "laboratorium": 1,
      "observatorium": 40,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 25,
      "literasi": 74
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 26,
      "pusat_diagnostik": 28,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 30,
      "kejaksaan": 2,
      "pos_polisi": 6,
      "armada_mobil_polisi": 6595,
      "akademi_polisi": 28,
      "indeks_korupsi": 73,
      "indeks_keamanan": 95
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 21,
      "stadion": 35,
      "stadion_internasional": 13
  },

  "un_vote": 196,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 271
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1015
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 489
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 610
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 731
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 53 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 159 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 129
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
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 677460
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
      "kekuatan_keras": 22,
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
    "kesehatan": 23,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 30,
    "lingkungan": 60
  }
};





