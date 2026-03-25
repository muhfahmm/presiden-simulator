import { CountryData } from "../../types/_index";

export const sri_lanka: CountryData = {
  "name_en": "Sri Lanka",
  "capital": "Colombo",
  "name_id": "Sri lanka",
  "lon": 81,
  "lat": 7,
  "flag": "🇱🇰",
  "jumlah_penduduk": 21670000,
  "anggaran": 729,
  "pendapatan_nasional": "2084",
  "religion": "Buddha",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 15,
    "pembangkit_air": 8,
    "pembangkit_surya": 7,
    "pembangkit_termal": 3,
    "pembangkit_gas": 3,
    "pembangkit_angin": 2,
    "jaringan_listrik": 67
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 1,
    "kereta_bawah_tanah": 29,
    "jalur_kereta": 37,
    "jalan_tol": 1,
    "kualitas_jalan": 55,
    "pelabuhan_laut": 35,
    "bandara": 31,
    "terminal_bus": 15,
    "helipad": 24,
    "cakupan_internet": 57,
    "indeks_teknologi": 92,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 25,
    "batu_bara": 23,
    "minyak_bumi": 10,
    "gas_alam": 32,
    "garam": 20,
    "nikel": 32,
    "litium": 17,
    "aluminium": 2,
    "tembaga": 37,
    "logam_tanah_jarang": 17,
    "bijih_besi": 2,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 22,
    "mobil": 4,
    "sepeda_motor": 19,
    "smelter": 20,
    "semen_beton": 24,
    "kayu": 13,
    "air_mineral": 34,
    "gula": 17,
    "roti": 17,
    "farmasi": 7,
    "pupuk": 29,
    "pengolahan_daging": 29,
    "mie_instan": 3,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 33.5,
    "sapi_perah": 7,
    "sapi_potong": 6,
    "domba_kambing": 39,
    "udang_kerang": 28.5,
    "ikan": 38,
    "padi": 27,
    "gandum_jagung": 22.5,
    "sayur_umbi": 31.5,
    "kedelai": 2,
    "kelapa_sawit": 30,
    "kopi_teh_kakao": 29.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 18,
    "gudang_senjata": 4,
    "hangar_tank": 37,
    "akademi_militer": 3,
    "pusat_komando": 35,
    "pangkalan_udara": 28,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 35,
    "pertahanan_siber": 13,
    "anggaran_pertahanan": 208,
    "personel": 23226,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 37,
    "infanteri": 11,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 21,
        "apc": 161,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 167,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 58,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 2,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 10,
          "sepeda_motor": 22,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 1,
          "kamera_pengawas": 18,
          "pusat_forensik": 1
        },
        "waktu_respon": 19,
        "kepercayaan_publik": 50 },
    "intelijen": 20,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 24,
      "misi_sabotase": 15,
      "manajemen_wilayah": 29,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 27,
      "sd": 26,
      "smp": 34,
      "sma": 27,
      "universitas": 34,
      "lembaga_pendidikan": 38,
      "laboratorium": 34,
      "observatorium": 38,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 8,
      "literasi": 80,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 35,
      "tempat_tidur_rs": 2367,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 30,
      "stadion": 39,
      "stadion_internasional": 30,
      "skor_olimpiade": 18,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 19,
      "kejaksaan": 36,
      "pos_polisi": 33,
      "armada_mobil_polisi": 7907,
      "akademi_polisi": 38,
      "indeks_korupsi": 89,
      "indeks_keamanan": 67
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 33,
      "kepuasan": 52,
      "pendapatan": 69
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 21
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 26
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 36,
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
    "kesehatan": 7,
    "pendidikan": 13,
    "keamanan": 31,
    "keuangan": 33,
    "lingkungan": 60
  }
};
