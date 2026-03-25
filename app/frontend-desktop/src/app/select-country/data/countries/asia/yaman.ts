import { CountryData } from "../../types/_index";

export const yaman: CountryData = {
  "name_en": "Yemen",
  "capital": "Sana'a",
  "name_id": "Yaman",
  "lon": 48,
  "lat": 15,
  "flag": "🇾🇪",
  "jumlah_penduduk": 28498687,
  "anggaran": 214,
  "pendapatan_nasional": "611",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 7,
    "pembangkit_air": 9,
    "pembangkit_surya": 4,
    "pembangkit_termal": 5,
    "pembangkit_gas": 5,
    "pembangkit_angin": 31,
    "jaringan_listrik": 62
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 20,
    "kereta_bawah_tanah": 29,
    "jalur_kereta": 35,
    "jalan_tol": 10,
    "kualitas_jalan": 89,
    "pelabuhan_laut": 6,
    "bandara": 19,
    "terminal_bus": 17,
    "helipad": 35,
    "cakupan_internet": 56
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 10,
    "uranium": 6,
    "batu_bara": 14,
    "minyak_bumi": 13,
    "gas_alam": 15,
    "garam": 34,
    "nikel": 13,
    "litium": 7,
    "aluminium": 36,
    "tembaga": 5,
    "logam_tanah_jarang": 5,
    "bijih_besi": 28
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 1,
    "mobil": 32,
    "sepeda_motor": 9,
    "smelter": 27,
    "semen_beton": 10,
    "kayu": 1,
    "air_mineral": 33,
    "gula": 35,
    "roti": 9,
    "farmasi": 33,
    "pupuk": 33,
    "pengolahan_daging": 12,
    "mie_instan": 32
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 20.5,
    "sapi_perah": 5,
    "sapi_potong": 1,
    "domba_kambing": 20,
    "udang_kerang": 16.5,
    "ikan": 24,
    "padi": 21,
    "gandum_jagung": 30.5,
    "sayur_umbi": 25.0,
    "kedelai": 15,
    "kelapa_sawit": 38,
    "kopi_teh_kakao": 32.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 17,
    "gudang_senjata": 23,
    "hangar_tank": 27,
    "akademi_militer": 23,
    "pusat_komando": 5,
    "pangkalan_udara": 32,
    "pangkalan_laut": 36,
    "program_luar_angkasa": 16,
    "pertahanan_siber": 19,
    "anggaran_pertahanan": 61
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 24,
    "darat": {
        "tank_tempur_utama": 156,
        "apc_ifv": 178,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 6,
        "kapal_destroyer": 78,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 144,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 105,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 30,
    "intelijen": 13,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 40,
      "misi_sabotase": 28,
      "manajemen_wilayah": 7,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 32,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 11,
          "kamera_pengawas": 15,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 15,
      "dasar": 24,
      "menengah": 7,
      "lanjutan": 38,
      "universitas": 18,
      "lembaga_pendidikan": 11,
      "laboratorium": 18,
      "observatorium": 38,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 9,
      "literasi": 88
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 20,
      "pusat_diagnostik": 8,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 7,
      "pengadilan": 6,
      "kejaksaan": 23,
      "pos_polisi": 12,
      "armada_mobil_polisi": 3048,
      "akademi_polisi": 32,
      "indeks_korupsi": 77,
      "indeks_keamanan": 50
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 31,
      "sirkuit_balap": 12,
      "stadion": 16,
      "stadion_internasional": 10
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 2600,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 30,
      "kekuatan_keras": 8,
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
    "kesehatan": 20,
    "pendidikan": 10,
    "keamanan": 34,
    "keuangan": 22,
    "lingkungan": 60
  }
};



