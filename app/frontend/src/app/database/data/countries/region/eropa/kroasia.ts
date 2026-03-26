import { CountryData } from "../../types/_index";

export const kroasia: CountryData = {
  "name_en": "Croatia",
  "capital": "Zagreb",
  "name_id": "Kroasia",
  "lon": 15.5,
  "lat": 45.16666666,
  "flag": "🇭🇷",
  "jumlah_penduduk": 4087843,
  "anggaran": 758,
  "pendapatan_nasional": "2167",
  "religion": "Katolik",
  "ideology": "Demokrasi",
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
    "jalur_sepeda": 22,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 20,
    "jalan_tol": 28,
    "pelabuhan_laut": 25,
    "bandara": 18,
    "terminal_bus": 5,
    "helipad": 33
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 16,
    "mobil": 18,
    "sepeda_motor": 40,
    "smelter": 25,
    "semen_beton": 17,
    "kayu": 9
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 30.0,
    "sapi_perah": 7,
    "sapi_potong": 25,
    "domba_kambing": 10
  },
  "sektor_agrikultur": {
    "padi": 39,
    "gandum_jagung": 15.5,
    "sayur_umbi": 26.5,
    "kedelai": 32,
    "kelapa_sawit": 23,
    "kopi_teh_kakao": 19.7
  },
  "sektor_perikanan": {
    "udang_kerang": 33.0,
    "ikan": 29
  },
  "sektor_olahan_pangan": {
    "air_mineral": 20,
    "gula": 23,
    "roti": 3,
    "pengolahan_daging": 11,
    "mie_instan": 9
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 14
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 22,
    "gudang_senjata": 9,
    "hangar_tank": 18,
    "akademi_militer": 12,
    "pusat_komando": 34,
    "pangkalan_udara": 30,
    "pangkalan_laut": 13,
    "program_luar_angkasa": 16,
    "pertahanan_siber": 37
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 26,
    "darat": {
        "tank_tempur_utama": 31,
        "apc_ifv": 33,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 32,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 25,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 260000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 27,
    "intelijen": 11,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 28,
      "misi_sabotase": 39,
      "manajemen_wilayah": 39,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 31,
        "sepeda_motor": 38,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 20,
          "kamera_pengawas": 22,
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
      "prasekolah": 28,
      "dasar": 13,
      "menengah": 35,
      "lanjutan": 19,
      "universitas": 40,
      "lembaga_pendidikan": 8,
      "laboratorium": 22,
      "observatorium": 4,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 20,
      "literasi": 55
    },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 16,
      "pusat_diagnostik": 26,
      "harapan_hidup": 22,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 12,
      "kejaksaan": 21,
      "pos_polisi": 22,
      "armada_mobil_polisi": 6330,
      "akademi_polisi": 9,
      "indeks_korupsi": 62,
      "indeks_keamanan": 91
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 37,
      "stadion": 32,
      "stadion_internasional": 12
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 33
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 63
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 27
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 22
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
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
      "kekuatan_lunak": 35,
      "kekuatan_keras": 2,
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
    "kesehatan": 36,
    "pendidikan": 8,
    "keamanan": 33,
    "keuangan": 35,
    "lingkungan": 60
  }
};

