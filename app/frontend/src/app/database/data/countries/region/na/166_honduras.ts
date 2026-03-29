import { CountryData } from "../../../types";

export const honduras: CountryData = {
  "name_en": "Honduras",
  "capital": "Tegucigalpa",
  "name_id": "Honduras",
  "lon": -86.5,
  "lat": 15,
  "flag": "🇭🇳",
  "jumlah_penduduk": 9587522,
  "anggaran": 311,
  "pendapatan_nasional": "889",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_air": 10,
    "pembangkit_listrik_tenaga_surya": 10,
    "pembangkit_listrik_tenaga_uap": 15,
    "pembangkit_listrik_tenaga_gas": 40,
    "pembangkit_listrik_tenaga_angin": 5
    },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 36,
    "jalur_kereta": 7,
    "jalan_tol": 13,
    "pelabuhan_laut": 17,
    "bandara": 1,
    "terminal_bus": 21,
    "helipad": 18
    },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 67,
    "uranium": 49,
    "batu_bara": 0,
    "minyak_bumi": 12,
    "gas_alam": 40,
    "garam": 68,
    "nikel": 63,
    "litium": 0,
    "tembaga": 72,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 14,
    "mobil": 33,
    "sepeda_motor": 27,
    "smelter": 20,
    "semen_beton": 23,
    "kayu": 27
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 22,
    "sapi_perah": 13,
    "sapi_potong": 11,
    "domba_kambing": 10
  },
  "sektor_agrikultur": {
    "padi": 9,
    "gandum_jagung": 32,
    "sayur_umbi": 20,
    "kedelai": 32,
    "kelapa_sawit": 26,
    "kopi_teh_kakao": 17
  },
  "sektor_perikanan": {
    "udang_kerang": 10,
    "ikan": 6
  },
  "sektor_olahan_pangan": {
    "air_mineral": 27,
    "gula": 38,
    "roti": 23,
    "pengolahan_daging": 19,
    "mie_instan": 22
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 19
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 4,
    "gudang_senjata": 37,
    "hangar_tank": 12,
    "akademi_militer": 35,
    "pusat_komando": 30,
    "pangkalan_udara": 26,
    "pangkalan_laut": 21,
    "program_luar_angkasa": 29,
    "pertahanan_siber": 4
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 11,
    "darat": {
        "tank_tempur_utama": 39,
        "apc_ifv": 1,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 17,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 4,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 28,
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
    "waktu_respon": 19,
    "intelijen": 19,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 19,
      "misi_sabotase": 33,
      "manajemen_wilayah": 38,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 38,
        "unit_interceptor_r2": 6,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 27,
          "kamera_pengawas": 17,
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
      "prasekolah": 18,
      "dasar": 35,
      "menengah": 7,
      "lanjutan": 7,
      "universitas": 6,
      "lembaga_pendidikan": 14,
      "laboratorium": 24,
      "observatorium": 29,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 22,
      "literasi": 90
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 8,
      "pusat_diagnostik": 24,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 29,
      "kejaksaan": 20,
      "pos_polisi": 26,
      "armada_mobil_polisi": 8337,
      "akademi_polisi": 39,
      "indeks_korupsi": 75,
      "indeks_keamanan": 82
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 9,
      "stadion": 11,
      "stadion_internasional": 13
  },

  "un_vote": 137,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 35,
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
    "kesehatan": 21,
    "pendidikan": 4,
    "keamanan": 14,
    "keuangan": 21,
    "lingkungan": 60
  }
};





