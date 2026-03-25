import { CountryData } from "../../types/_index";

export const kuwait: CountryData = {
  "name_en": "Kuwait",
  "capital": "Kuwait City",
  "name_id": "Kuwait",
  "lon": 45.75,
  "lat": 29.5,
  "flag": "🇰🇼",
  "jumlah_penduduk": 4137309,
  "anggaran": 1507,
  "pendapatan_nasional": "4306",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 25,
    "pembangkit_air": 8,
    "pembangkit_surya": 40,
    "pembangkit_termal": 21,
    "pembangkit_gas": 7,
    "pembangkit_angin": 24,
    "jaringan_listrik": 85
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 38,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 12,
    "jalan_tol": 37,
    "kualitas_jalan": 79,
    "pelabuhan_laut": 27,
    "bandara": 17,
    "terminal_bus": 18,
    "helipad": 5,
    "cakupan_internet": 58,
    "indeks_teknologi": 83,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 10,
    "uranium": 13,
    "batu_bara": 39,
    "minyak_bumi": 15,
    "gas_alam": 24,
    "garam": 14,
    "nikel": 9,
    "litium": 31,
    "aluminium": 16,
    "tembaga": 33,
    "logam_tanah_jarang": 29,
    "bijih_besi": 4,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 14,
    "mobil": 9,
    "sepeda_motor": 27,
    "smelter": 28,
    "semen_beton": 18,
    "kayu": 27,
    "air_mineral": 28,
    "gula": 11,
    "roti": 6,
    "farmasi": 6,
    "pupuk": 25,
    "pengolahan_daging": 34,
    "mie_instan": 22,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 14.5,
    "sapi_perah": 32,
    "sapi_potong": 18,
    "domba_kambing": 7,
    "udang_kerang": 28.0,
    "ikan": 18,
    "padi": 37,
    "gandum_jagung": 21.5,
    "sayur_umbi": 35.5,
    "kedelai": 27,
    "kelapa_sawit": 30,
    "kopi_teh_kakao": 30.3,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 32,
    "gudang_senjata": 18,
    "hangar_tank": 32,
    "akademi_militer": 22,
    "pusat_komando": 24,
    "pangkalan_udara": 3,
    "pangkalan_laut": 4,
    "program_luar_angkasa": 12,
    "pertahanan_siber": 34,
    "anggaran_pertahanan": 430,
    "personel": 20884,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 38,
    "infanteri": 18,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 25,
        "apc": 7,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 8,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 34,
      "jaringan_radar": 13,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 36,
          "sepeda_motor": 18,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 8,
          "kamera_pengawas": 19,
          "pusat_forensik": 1
        },
        "waktu_respon": 37,
        "kepercayaan_publik": 50 },
    "intelijen": 27,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 31,
      "misi_sabotase": 32,
      "manajemen_wilayah": 14,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 20,
      "sd": 14,
      "smp": 25,
      "sma": 22,
      "universitas": 36,
      "lembaga_pendidikan": 37,
      "laboratorium": 36,
      "observatorium": 19,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 27,
      "literasi": 55,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 21,
      "tempat_tidur_rs": 4289,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 19,
      "stadion": 28,
      "stadion_internasional": 9,
      "skor_olimpiade": 14,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 19,
      "kejaksaan": 18,
      "pos_polisi": 32,
      "armada_mobil_polisi": 8824,
      "akademi_polisi": 32,
      "indeks_korupsi": 72,
      "indeks_keamanan": 68
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 52
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 58
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 70
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 55
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 44
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 6,
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
    "pendidikan": 17,
    "keamanan": 24,
    "keuangan": 25,
    "lingkungan": 60
  }
};
