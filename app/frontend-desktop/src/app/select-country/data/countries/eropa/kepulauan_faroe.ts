import { CountryData } from "../../types/_index";

export const kepulauan_faroe: CountryData = {
  "name_en": "Faroe Islands",
  "capital": "Tórshavn",
  "name_id": "Kepulauan faroe",
  "lon": -7,
  "lat": 62,
  "flag": "🇫🇴",
  "jumlah_penduduk": 48497,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 25,
    "pembangkit_air": 38,
    "pembangkit_surya": 26,
    "pembangkit_termal": 29,
    "pembangkit_gas": 1,
    "pembangkit_angin": 6,
    "jaringan_listrik": 65
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 20,
    "kereta_bawah_tanah": 26,
    "jalur_kereta": 7,
    "jalan_tol": 33,
    "kualitas_jalan": 81,
    "pelabuhan_laut": 19,
    "bandara": 36,
    "terminal_bus": 35,
    "helipad": 34,
    "cakupan_internet": 79,
    "indeks_teknologi": 66,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 27,
    "uranium": 3,
    "batu_bara": 1,
    "minyak_bumi": 13,
    "gas_alam": 20,
    "garam": 21,
    "nikel": 19,
    "litium": 24,
    "aluminium": 18,
    "tembaga": 4,
    "logam_tanah_jarang": 8,
    "bijih_besi": 29,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 12,
    "mobil": 30,
    "sepeda_motor": 36,
    "smelter": 29,
    "semen_beton": 30,
    "kayu": 16,
    "air_mineral": 11,
    "gula": 6,
    "roti": 3,
    "farmasi": 37,
    "pupuk": 19,
    "pengolahan_daging": 15,
    "mie_instan": 27,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 13.5,
    "sapi_perah": 2,
    "sapi_potong": 13,
    "domba_kambing": 29,
    "udang_kerang": 22.5,
    "ikan": 2,
    "padi": 3,
    "gandum_jagung": 32.0,
    "sayur_umbi": 17.0,
    "kedelai": 27,
    "kelapa_sawit": 31,
    "kopi_teh_kakao": 16.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 7,
    "gudang_senjata": 18,
    "hangar_tank": 38,
    "akademi_militer": 23,
    "pusat_komando": 8,
    "pangkalan_udara": 2,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 3,
    "anggaran_pertahanan": 27,
    "personel": 23620,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 23,
    "infanteri": 17,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 107,
        "apc": 45,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 77,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 104,
        "helikopter_serang": 142,
        "pesawat_pengintai": 2
      },
      "total_unit": 35,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 3,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 20,
          "kamera_pengawas": 21,
          "pusat_forensik": 1
        },
        "waktu_respon": 31,
        "kepercayaan_publik": 50 },
    "intelijen": 18,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 20,
      "misi_mata_mata": 34,
      "misi_sabotase": 26,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 19,
      "sd": 1,
      "smp": 20,
      "sma": 32,
      "universitas": 40,
      "lembaga_pendidikan": 24,
      "laboratorium": 18,
      "observatorium": 39,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 12,
      "literasi": 86,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 23,
      "tempat_tidur_rs": 9763,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 39,
      "stadion": 17,
      "stadion_internasional": 10,
      "skor_olimpiade": 22,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 31,
      "kejaksaan": 17,
      "pos_polisi": 39,
      "armada_mobil_polisi": 5067,
      "akademi_polisi": 6,
      "indeks_korupsi": 94,
      "indeks_keamanan": 68
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 4
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
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 16,
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
    "kesehatan": 30,
    "pendidikan": 32,
    "keamanan": 9,
    "keuangan": 17,
    "lingkungan": 60
  }
};
