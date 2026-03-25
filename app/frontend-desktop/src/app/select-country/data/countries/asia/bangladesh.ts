import { CountryData } from "../../types/_index";

export const bangladesh: CountryData = {
  "name_en": "Bangladesh",
  "capital": "Dhaka",
  "name_id": "Bangladesh",
  "lon": 90,
  "lat": 24,
  "flag": "🇧🇩",
  "jumlah_penduduk": 161356039,
  "anggaran": 4473,
  "pendapatan_nasional": "12779",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 13,
    "pembangkit_air": 12,
    "pembangkit_surya": 32,
    "pembangkit_termal": 39,
    "pembangkit_gas": 1,
    "pembangkit_angin": 2,
    "jaringan_listrik": 51
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 39,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 30,
    "jalan_tol": 15,
    "kualitas_jalan": 85,
    "pelabuhan_laut": 31,
    "bandara": 34,
    "terminal_bus": 13,
    "helipad": 28,
    "cakupan_internet": 66,
    "indeks_teknologi": 91,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 31,
    "uranium": 24,
    "batu_bara": 28,
    "minyak_bumi": 16,
    "gas_alam": 38,
    "garam": 40,
    "nikel": 32,
    "litium": 3,
    "aluminium": 30,
    "tembaga": 24,
    "logam_tanah_jarang": 20,
    "bijih_besi": 23,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 10,
    "mobil": 40,
    "sepeda_motor": 30,
    "smelter": 18,
    "semen_beton": 19,
    "kayu": 3,
    "air_mineral": 29,
    "gula": 26,
    "roti": 22,
    "farmasi": 28,
    "pupuk": 1,
    "pengolahan_daging": 4,
    "mie_instan": 5,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 7.5,
    "sapi_perah": 1,
    "sapi_potong": 4,
    "domba_kambing": 31,
    "udang_kerang": 23.5,
    "ikan": 32,
    "padi": 9,
    "gandum_jagung": 19.5,
    "sayur_umbi": 24.5,
    "kedelai": 12,
    "kelapa_sawit": 26,
    "kopi_teh_kakao": 26.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 35,
    "gudang_senjata": 38,
    "hangar_tank": 18,
    "akademi_militer": 22,
    "pusat_komando": 12,
    "pangkalan_udara": 23,
    "pangkalan_laut": 14,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 7,
    "anggaran_pertahanan": 1277,
    "personel": 8753,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 30,
    "infanteri": 36,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 12,
        "apc": 20,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 16,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 12,
        "helikopter_serang": 14,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 40,
      "jaringan_radar": 38,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 34,
          "pusat_forensik": 1
        },
        "waktu_respon": 27,
        "kepercayaan_publik": 50 },
    "intelijen": 1,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 14,
      "misi_sabotase": 22,
      "manajemen_wilayah": 19,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 27,
      "sd": 38,
      "smp": 3,
      "sma": 17,
      "universitas": 27,
      "lembaga_pendidikan": 28,
      "laboratorium": 11,
      "observatorium": 39,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 1,
      "literasi": 55,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 20,
      "tempat_tidur_rs": 3222,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 36,
      "stadion": 9,
      "stadion_internasional": 39,
      "skor_olimpiade": 19,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 13,
      "pengadilan": 30,
      "kejaksaan": 39,
      "pos_polisi": 26,
      "armada_mobil_polisi": 5208,
      "akademi_polisi": 23,
      "indeks_korupsi": 79,
      "indeks_keamanan": 63
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 156
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 39
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 248
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 23 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 68 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 96
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },

    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "sekutu": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 15,
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
    "pendidikan": 22,
    "keamanan": 36,
    "keuangan": 17,
    "lingkungan": 60
  }
};
