import { CountryData } from "../../types/_index";

export const bulgaria: CountryData = {
  "name_en": "Bulgaria",
  "capital": "Sofia",
  "name_id": "Bulgaria",
  "lon": 25,
  "lat": 43,
  "flag": "🇧🇬",
  "jumlah_penduduk": 7025037,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 3,
    "pembangkit_air": 32,
    "pembangkit_surya": 5,
    "pembangkit_termal": 16,
    "pembangkit_gas": 26,
    "pembangkit_angin": 32,
    "jaringan_listrik": 76
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 9,
    "kereta_bawah_tanah": 36,
    "jalur_kereta": 39,
    "jalan_tol": 24,
    "kualitas_jalan": 73,
    "pelabuhan_laut": 21,
    "bandara": 37,
    "terminal_bus": 11,
    "helipad": 9,
    "cakupan_internet": 76,
    "indeks_teknologi": 92,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 7,
    "uranium": 18,
    "batu_bara": 12,
    "minyak_bumi": 36,
    "gas_alam": 7,
    "garam": 25,
    "nikel": 26,
    "litium": 23,
    "aluminium": 31,
    "tembaga": 35,
    "logam_tanah_jarang": 17,
    "bijih_besi": 39,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 31,
    "mobil": 5,
    "sepeda_motor": 1,
    "smelter": 40,
    "semen_beton": 29,
    "kayu": 3,
    "air_mineral": 30,
    "gula": 8,
    "roti": 3,
    "farmasi": 15,
    "pupuk": 2,
    "pengolahan_daging": 24,
    "mie_instan": 30,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 14.0,
    "sapi_perah": 6,
    "sapi_potong": 5,
    "domba_kambing": 28,
    "udang_kerang": 5.5,
    "ikan": 37,
    "padi": 35,
    "gandum_jagung": 11.0,
    "sayur_umbi": 12.5,
    "kedelai": 28,
    "kelapa_sawit": 20,
    "kopi_teh_kakao": 39.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 30,
    "gudang_senjata": 21,
    "hangar_tank": 20,
    "akademi_militer": 18,
    "pusat_komando": 15,
    "pangkalan_udara": 31,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 20,
    "pertahanan_siber": 19,
    "anggaran_pertahanan": 291,
    "personel": 21002,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 32,
    "infanteri": 24,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 33,
        "apc": 4,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 13,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 31,
        "helikopter_serang": 17,
        "pesawat_pengintai": 2
      },
      "total_unit": 35,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 35,
      "jaringan_radar": 24,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 26,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 25,
          "kamera_pengawas": 20,
          "pusat_forensik": 1
        },
        "waktu_respon": 35,
        "kepercayaan_publik": 50 },
    "intelijen": 35,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 33,
      "misi_sabotase": 10,
      "manajemen_wilayah": 8,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 33,
      "sd": 29,
      "smp": 15,
      "sma": 12,
      "universitas": 14,
      "lembaga_pendidikan": 19,
      "laboratorium": 25,
      "observatorium": 29,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 35,
      "literasi": 87,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 30,
      "pusat_diagnostik": 35,
      "tempat_tidur_rs": 3911,
      "harapan_hidup": 23,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 8,
      "sirkuit_balap": 9,
      "stadion": 25,
      "stadion_internasional": 10,
      "skor_olimpiade": 38,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 25,
      "pengadilan": 17,
      "kejaksaan": 30,
      "pos_polisi": 13,
      "armada_mobil_polisi": 9399,
      "akademi_polisi": 22,
      "indeks_korupsi": 65,
      "indeks_keamanan": 52
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 4,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 77
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 99
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 47
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 67
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 53
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 11,
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
    "kesehatan": 1,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 23,
    "lingkungan": 60
  }
};
