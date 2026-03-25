import { CountryData } from "../../types/_index";

export const kuba: CountryData = {
  "name_en": "Cuba",
  "capital": "Havana",
  "name_id": "Kuba",
  "lon": -80,
  "lat": 21.5,
  "flag": "🇨🇺",
  "jumlah_penduduk": 11338138,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Katolik",
  "ideology": "Komunisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 15,
    "pembangkit_air": 33,
    "pembangkit_surya": 26,
    "pembangkit_termal": 22,
    "pembangkit_gas": 23,
    "pembangkit_angin": 30,
    "jaringan_listrik": 53
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 40,
    "kereta_bawah_tanah": 16,
    "jalur_kereta": 19,
    "jalan_tol": 26,
    "kualitas_jalan": 60,
    "pelabuhan_laut": 25,
    "bandara": 23,
    "terminal_bus": 8,
    "helipad": 29,
    "cakupan_internet": 66
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 9,
    "uranium": 34,
    "batu_bara": 25,
    "minyak_bumi": 31,
    "gas_alam": 10,
    "garam": 7,
    "nikel": 40,
    "litium": 28,
    "aluminium": 9,
    "tembaga": 6,
    "logam_tanah_jarang": 17,
    "bijih_besi": 3
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 23,
    "mobil": 1,
    "sepeda_motor": 31,
    "smelter": 30,
    "semen_beton": 7,
    "kayu": 8,
    "air_mineral": 3,
    "gula": 29,
    "roti": 16,
    "farmasi": 10,
    "pupuk": 23,
    "pengolahan_daging": 35,
    "mie_instan": 19
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 7.5,
    "sapi_perah": 39,
    "sapi_potong": 27,
    "domba_kambing": 10,
    "udang_kerang": 33.0,
    "ikan": 7,
    "padi": 29,
    "gandum_jagung": 11.0,
    "sayur_umbi": 21.5,
    "kedelai": 6,
    "kelapa_sawit": 25,
    "kopi_teh_kakao": 27.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 13,
    "gudang_senjata": 37,
    "hangar_tank": 18,
    "akademi_militer": 24,
    "pusat_komando": 18,
    "pangkalan_udara": 7,
    "pangkalan_laut": 4,
    "program_luar_angkasa": 27,
    "pertahanan_siber": 15,
    "anggaran_pertahanan": 291
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 32,
    "darat": {
        "tank_tempur_utama": 31,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 22,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 13,
        "helikopter_serang": 28,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 29,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 9,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 34,
    "intelijen": 30,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 6,
      "misi_sabotase": 20,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 18,
      "dasar": 33,
      "menengah": 9,
      "lanjutan": 40,
      "universitas": 9,
      "lembaga_pendidikan": 24,
      "laboratorium": 23,
      "observatorium": 11,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 12,
      "literasi": 59
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 28,
      "pusat_diagnostik": 18,
      "harapan_hidup": 6,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 7,
      "kejaksaan": 14,
      "pos_polisi": 5,
      "armada_mobil_polisi": 2434,
      "akademi_polisi": 13,
      "indeks_korupsi": 77,
      "indeks_keamanan": 80
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 8,
      "stadion": 26,
      "stadion_internasional": 19
  },

  "un_vote": "Pro",
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
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 26
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 68
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 110
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 33
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
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 39,
      "kekuatan_keras": 9,
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
    "kesehatan": 8,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 22,
    "lingkungan": 60
  }
};



