import { CountryData } from "../../types/_index";

export const portugal: CountryData = {
  "name_en": "Portugal",
  "capital": "Lisbon",
  "name_id": "Portugal",
  "lon": -8,
  "lat": 39.5,
  "flag": "🇵🇹",
  "jumlah_penduduk": 10283822,
  "anggaran": 2722,
  "pendapatan_nasional": "7778",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 30,
    "pembangkit_surya": 24,
    "pembangkit_termal": 30,
    "pembangkit_gas": 17,
    "pembangkit_angin": 37,
    "jaringan_listrik": 82
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 18,
    "kereta_bawah_tanah": 1,
    "jalur_kereta": 16,
    "jalan_tol": 6,
    "kualitas_jalan": 70,
    "pelabuhan_laut": 11,
    "bandara": 5,
    "terminal_bus": 23,
    "helipad": 19,
    "cakupan_internet": 59,
    "indeks_teknologi": 51,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 1,
    "uranium": 17,
    "batu_bara": 30,
    "minyak_bumi": 10,
    "gas_alam": 17,
    "garam": 23,
    "nikel": 31,
    "litium": 23,
    "aluminium": 26,
    "tembaga": 23,
    "logam_tanah_jarang": 9,
    "bijih_besi": 27,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 30,
    "mobil": 7,
    "sepeda_motor": 8,
    "smelter": 32,
    "semen_beton": 14,
    "kayu": 1,
    "air_mineral": 6,
    "gula": 1,
    "roti": 19,
    "farmasi": 5,
    "pupuk": 35,
    "pengolahan_daging": 34,
    "mie_instan": 33,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 24.5,
    "sapi_perah": 18,
    "sapi_potong": 16,
    "domba_kambing": 21,
    "udang_kerang": 18.0,
    "ikan": 34,
    "padi": 20,
    "gandum_jagung": 21.0,
    "sayur_umbi": 15.0,
    "kedelai": 15,
    "kelapa_sawit": 28,
    "kopi_teh_kakao": 20.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 26,
    "gudang_senjata": 9,
    "hangar_tank": 8,
    "akademi_militer": 19,
    "pusat_komando": 39,
    "pangkalan_udara": 3,
    "pangkalan_laut": 25,
    "program_luar_angkasa": 23,
    "pertahanan_siber": 20,
    "anggaran_pertahanan": 777,
    "personel": 11519,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 22,
    "infanteri": 10,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 169,
        "apc": 136,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 168,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 135,
        "helikopter_serang": 136,
        "pesawat_pengintai": 2
      },
      "total_unit": 32,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 0,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 18,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 37,
          "kamera_pengawas": 25,
          "pusat_forensik": 1
        },
        "waktu_respon": 10,
        "kepercayaan_publik": 50 },
    "intelijen": 23,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 1,
      "misi_sabotase": 18,
      "manajemen_wilayah": 31,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 3,
      "sd": 4,
      "smp": 24,
      "sma": 29,
      "universitas": 30,
      "lembaga_pendidikan": 18,
      "laboratorium": 22,
      "observatorium": 34,
      "pusat_penelitian": 32,
      "pusat_pengembangan": 11,
      "literasi": 52,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 26,
      "tempat_tidur_rs": 8574,
      "harapan_hidup": 23,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 35,
      "stadion": 38,
      "stadion_internasional": 21,
      "skor_olimpiade": 5,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 30,
      "pengadilan": 34,
      "kejaksaan": 26,
      "pos_polisi": 12,
      "armada_mobil_polisi": 2351,
      "akademi_polisi": 11,
      "indeks_korupsi": 56,
      "indeks_keamanan": 80
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 114
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 204
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 52
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 99
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 41 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 194
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 2600,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 30,
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
    "pendidikan": 33,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};
