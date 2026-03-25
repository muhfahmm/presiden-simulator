import { CountryData } from "../../types/_index";

export const trinidad_dan_tobago: CountryData = {
  "name_en": "Trinidad and Tobago",
  "capital": "Port of Spain",
  "name_id": "Trinidad dan tobago",
  "lon": -61,
  "lat": 11,
  "flag": "🇹🇹",
  "jumlah_penduduk": 1389858,
  "anggaran": 243,
  "pendapatan_nasional": "694",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 3,
    "pembangkit_air": 27,
    "pembangkit_surya": 16,
    "pembangkit_termal": 22,
    "pembangkit_gas": 2,
    "pembangkit_angin": 19,
    "jaringan_listrik": 91
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 18,
    "jalur_kereta": 8,
    "jalan_tol": 35,
    "kualitas_jalan": 85,
    "pelabuhan_laut": 15,
    "bandara": 14,
    "terminal_bus": 33,
    "helipad": 39,
    "cakupan_internet": 57,
    "indeks_teknologi": 52,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 20,
    "uranium": 27,
    "batu_bara": 28,
    "minyak_bumi": 20,
    "gas_alam": 36,
    "garam": 26,
    "nikel": 34,
    "litium": 11,
    "aluminium": 26,
    "tembaga": 33,
    "logam_tanah_jarang": 38,
    "bijih_besi": 37,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 40,
    "mobil": 14,
    "sepeda_motor": 24,
    "smelter": 24,
    "semen_beton": 28,
    "kayu": 27,
    "air_mineral": 36,
    "gula": 8,
    "roti": 18,
    "farmasi": 23,
    "pupuk": 40,
    "pengolahan_daging": 29,
    "mie_instan": 28,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 14.0,
    "sapi_perah": 20,
    "sapi_potong": 15,
    "domba_kambing": 31,
    "udang_kerang": 12.0,
    "ikan": 28,
    "padi": 35,
    "gandum_jagung": 19.0,
    "sayur_umbi": 25.0,
    "kedelai": 8,
    "kelapa_sawit": 34,
    "kopi_teh_kakao": 27.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 37,
    "gudang_senjata": 38,
    "hangar_tank": 34,
    "akademi_militer": 24,
    "pusat_komando": 32,
    "pangkalan_udara": 7,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 69,
    "personel": 22968,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 29,
    "infanteri": 2,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 190,
        "apc": 112,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 188,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 138,
        "helikopter_serang": 96,
        "pesawat_pengintai": 2
      },
      "total_unit": 3,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 3,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 39,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 33,
          "pusat_forensik": 1
        },
        "waktu_respon": 9,
        "kepercayaan_publik": 50 },
    "intelijen": 35,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 19,
      "misi_sabotase": 8,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 26,
      "sd": 5,
      "smp": 22,
      "sma": 32,
      "universitas": 2,
      "lembaga_pendidikan": 14,
      "laboratorium": 39,
      "observatorium": 40,
      "pusat_penelitian": 32,
      "pusat_pengembangan": 3,
      "literasi": 74,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 22,
      "tempat_tidur_rs": 3922,
      "harapan_hidup": 16,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 8,
      "sirkuit_balap": 34,
      "stadion": 8,
      "stadion_internasional": 20,
      "skor_olimpiade": 6,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 40,
      "kejaksaan": 25,
      "pos_polisi": 18,
      "armada_mobil_polisi": 9719,
      "akademi_polisi": 15,
      "indeks_korupsi": 62,
      "indeks_keamanan": 54
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 23
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
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
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 22,
      "kekuatan_keras": 28,
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
    "pendidikan": 26,
    "keamanan": 14,
    "keuangan": 24,
    "lingkungan": 60
  }
};
