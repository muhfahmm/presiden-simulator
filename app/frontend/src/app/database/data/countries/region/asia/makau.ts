import { CountryData } from "../../../types";

export const makau: CountryData = {
  "name_en": "Macau",
  "capital": "N/A",
  "name_id": "Makau",
  "lon": 113.55,
  "lat": 22.16666666,
  "flag": "🇲🇴",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Buddha",
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
    "jalur_sepeda": 5,
    "kereta_bawah_tanah": 2,
    "jalur_kereta": 27,
    "jalan_tol": 39,
    "pelabuhan_laut": 28,
    "bandara": 4,
    "terminal_bus": 22,
    "helipad": 16
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
    "semikonduktor": 33,
    "mobil": 1,
    "sepeda_motor": 26,
    "smelter": 15,
    "semen_beton": 34,
    "kayu": 9
    },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 6,
    "sapi_perah": 29,
    "sapi_potong": 22,
    "domba_kambing": 19
  },
  "sektor_agrikultur": {
    "padi": 12,
    "gandum_jagung": 18,
    "sayur_umbi": 17,
    "kedelai": 1,
    "kelapa_sawit": 13,
    "kopi_teh_kakao": 15
  },
  "sektor_perikanan": {
    "udang_kerang": 22,
    "ikan": 14
  },
  "sektor_olahan_pangan": {
    "air_mineral": 3,
    "gula": 35,
    "roti": 38,
    "pengolahan_daging": 28,
    "mie_instan": 4
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 36
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 2,
    "gudang_senjata": 38,
    "hangar_tank": 22,
    "akademi_militer": 37,
    "pusat_komando": 29,
    "pangkalan_udara": 33,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 9,
    "pertahanan_siber": 37
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 12,
    "darat": {
        "tank_tempur_utama": 109,
        "apc_ifv": 93,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 22,
        "kapal_destroyer": 35,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 80,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 199,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 120000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 22,
    "intelijen": 37,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 6,
      "misi_sabotase": 15,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 17,
        "unit_interceptor_r2": 26,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 25,
          "kamera_pengawas": 37,
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
      "prasekolah": 36,
      "dasar": 27,
      "menengah": 31,
      "lanjutan": 3,
      "universitas": 38,
      "lembaga_pendidikan": 15,
      "laboratorium": 24,
      "observatorium": 3,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 13,
      "literasi": 61
    },
    "kesehatan": {
      "rumah_sakit_besar": 38,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 34,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 33,
      "kejaksaan": 7,
      "pos_polisi": 36,
      "armada_mobil_polisi": 2272,
      "akademi_polisi": 38,
      "indeks_korupsi": 90,
      "indeks_keamanan": 50
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 29,
      "sirkuit_balap": 11,
      "stadion": 27,
      "stadion_internasional": 12
  },

  "un_vote": 8,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 21,
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
    "kesehatan": 17,
    "pendidikan": 22,
    "keamanan": 6,
    "keuangan": 22,
    "lingkungan": 60
  }
};

