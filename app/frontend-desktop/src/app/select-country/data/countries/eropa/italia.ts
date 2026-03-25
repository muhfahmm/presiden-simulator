import { CountryData } from "../../types/_index";

export const italia: CountryData = {
  "name_en": "Italy",
  "capital": "Rome",
  "name_id": "Italia",
  "lon": 12.83333333,
  "lat": 42.83333333,
  "flag": "🇮🇹",
  "jumlah_penduduk": 60421760,
  "anggaran": 22655,
  "pendapatan_nasional": "64727",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 27,
    "pembangkit_air": 14,
    "pembangkit_surya": 35,
    "pembangkit_termal": 21,
    "pembangkit_gas": 25,
    "pembangkit_angin": 36,
    "jaringan_listrik": 58
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 20,
    "jalur_kereta": 10,
    "jalan_tol": 38,
    "kualitas_jalan": 94,
    "pelabuhan_laut": 20,
    "bandara": 40,
    "terminal_bus": 28,
    "helipad": 2,
    "cakupan_internet": 91,
    "indeks_teknologi": 79,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 8,
    "uranium": 39,
    "batu_bara": 18,
    "minyak_bumi": 40,
    "gas_alam": 36,
    "garam": 35,
    "nikel": 6,
    "litium": 11,
    "aluminium": 4,
    "tembaga": 31,
    "logam_tanah_jarang": 17,
    "bijih_besi": 31,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 12,
    "mobil": 11,
    "sepeda_motor": 1,
    "smelter": 13,
    "semen_beton": 37,
    "kayu": 10,
    "air_mineral": 10,
    "gula": 25,
    "roti": 10,
    "farmasi": 35,
    "pupuk": 1,
    "pengolahan_daging": 34,
    "mie_instan": 4,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 17.5,
    "sapi_perah": 33,
    "sapi_potong": 29,
    "domba_kambing": 32,
    "udang_kerang": 25.0,
    "ikan": 26,
    "padi": 34,
    "gandum_jagung": 14.5,
    "sayur_umbi": 20.0,
    "kedelai": 29,
    "kelapa_sawit": 11,
    "kopi_teh_kakao": 30.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 39,
    "hangar_tank": 18,
    "akademi_militer": 17,
    "pusat_komando": 25,
    "pangkalan_udara": 20,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 10,
    "pertahanan_siber": 9,
    "anggaran_pertahanan": 6472,
    "personel": 10534,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 5,
    "infanteri": 12,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 4,
        "apc": 30,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 39,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 40,
        "helikopter_serang": 29,
        "pesawat_pengintai": 2
      },
      "total_unit": 23,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 40,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 39,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
          "kamera_pengawas": 28,
          "pusat_forensik": 1
        },
        "waktu_respon": 15,
        "kepercayaan_publik": 50 },
    "intelijen": 35,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 19,
      "misi_sabotase": 1,
      "manajemen_wilayah": 6,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 20,
      "sd": 25,
      "smp": 21,
      "sma": 38,
      "universitas": 34,
      "lembaga_pendidikan": 19,
      "laboratorium": 8,
      "observatorium": 2,
      "pusat_penelitian": 33,
      "pusat_pengembangan": 25,
      "literasi": 79,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 18,
      "rumah_sakit_kecil": 30,
      "pusat_diagnostik": 9,
      "tempat_tidur_rs": 6382,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 28,
      "stadion": 3,
      "stadion_internasional": 27,
      "skor_olimpiade": 33,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 25,
      "kejaksaan": 38,
      "pos_polisi": 33,
      "armada_mobil_polisi": 2648,
      "akademi_polisi": 17,
      "indeks_korupsi": 59,
      "indeks_keamanan": 70
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 1599
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 1766
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 2288
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 1840
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 1486
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 114 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 340 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 469
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
    "subsidi_energi": 50,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 800,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 22,
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
    "pendidikan": 28,
    "keamanan": 40,
    "keuangan": 18,
    "lingkungan": 60
  }
};
