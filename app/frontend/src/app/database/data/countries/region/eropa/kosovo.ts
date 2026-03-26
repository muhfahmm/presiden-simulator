import { CountryData } from "../../types/_index";

export const kosovo: CountryData = {
  "name_en": "Kosovo",
  "capital": "Pristina",
  "name_id": "Kosovo",
  "lon": 21.166667,
  "lat": 42.666667,
  "flag": "🇽🇰",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
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
    "jalur_sepeda": 10,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 13,
    "jalan_tol": 30,
    "pelabuhan_laut": 36,
    "bandara": 24,
    "terminal_bus": 38,
    "helipad": 17
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
    "semikonduktor": 4,
    "mobil": 2,
    "sepeda_motor": 8,
    "smelter": 18,
    "semen_beton": 4,
    "kayu": 40
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 15.5,
    "sapi_perah": 22,
    "sapi_potong": 33,
    "domba_kambing": 7
  },
  "sektor_agrikultur": {
    "padi": 26,
    "gandum_jagung": 22.0,
    "sayur_umbi": 15.0,
    "kedelai": 33,
    "kelapa_sawit": 1,
    "kopi_teh_kakao": 31.3
  },
  "sektor_perikanan": {
    "udang_kerang": 28.5,
    "ikan": 26
  },
  "sektor_olahan_pangan": {
    "air_mineral": 38,
    "gula": 35,
    "roti": 23,
    "pengolahan_daging": 16,
    "mie_instan": 34
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 34
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 39,
    "gudang_senjata": 13,
    "hangar_tank": 10,
    "akademi_militer": 30,
    "pusat_komando": 33,
    "pangkalan_udara": 38,
    "pangkalan_laut": 34,
    "program_luar_angkasa": 33,
    "pertahanan_siber": 9
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 37,
    "darat": {
        "tank_tempur_utama": 44,
        "apc_ifv": 63,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 104,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 99,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 172,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 370000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 11,
    "intelijen": 7,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 4,
      "misi_sabotase": 37,
      "manajemen_wilayah": 6,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 38,
        "sepeda_motor": 16,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 35,
          "helikopter_polisi": 8,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 31,
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
      "prasekolah": 4,
      "dasar": 38,
      "menengah": 37,
      "lanjutan": 39,
      "universitas": 25,
      "lembaga_pendidikan": 2,
      "laboratorium": 9,
      "observatorium": 21,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 39,
      "literasi": 51
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 26,
      "pusat_diagnostik": 39,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 16,
      "kejaksaan": 25,
      "pos_polisi": 18,
      "armada_mobil_polisi": 9952,
      "akademi_polisi": 26,
      "indeks_korupsi": 50,
      "indeks_keamanan": 93
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 33,
      "stadion": 25,
      "stadion_internasional": 13
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
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
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 3,
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
    "kesehatan": 39,
    "pendidikan": 9,
    "keamanan": 33,
    "keuangan": 9,
    "lingkungan": 60
  }
};

