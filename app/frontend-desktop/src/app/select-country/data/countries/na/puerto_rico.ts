import { CountryData } from "../../types/_index";

export const puerto_rico: CountryData = {
  "name_en": "Puerto Rico",
  "capital": "San Juan",
  "name_id": "Puerto rico",
  "lon": -66.5,
  "lat": 18.25,
  "flag": "🇵🇷",
  "jumlah_penduduk": 3195153,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 39,
    "pembangkit_air": 8,
    "pembangkit_surya": 19,
    "pembangkit_termal": 6,
    "pembangkit_gas": 27,
    "pembangkit_angin": 10,
    "jaringan_listrik": 77
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 34,
    "kereta_bawah_tanah": 36,
    "jalur_kereta": 32,
    "jalan_tol": 37,
    "kualitas_jalan": 77,
    "pelabuhan_laut": 31,
    "bandara": 37,
    "terminal_bus": 31,
    "helipad": 8,
    "cakupan_internet": 85,
    "indeks_teknologi": 72,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 9,
    "uranium": 1,
    "batu_bara": 40,
    "minyak_bumi": 7,
    "gas_alam": 23,
    "garam": 12,
    "nikel": 19,
    "litium": 11,
    "aluminium": 12,
    "tembaga": 5,
    "logam_tanah_jarang": 34,
    "bijih_besi": 39,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 1,
    "mobil": 25,
    "sepeda_motor": 35,
    "smelter": 22,
    "semen_beton": 39,
    "kayu": 31,
    "air_mineral": 13,
    "gula": 25,
    "roti": 30,
    "farmasi": 25,
    "pupuk": 39,
    "pengolahan_daging": 6,
    "mie_instan": 9,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 21.5,
    "sapi_perah": 35,
    "sapi_potong": 5,
    "domba_kambing": 2,
    "udang_kerang": 13.5,
    "ikan": 31,
    "padi": 4,
    "gandum_jagung": 31.0,
    "sayur_umbi": 20.5,
    "kedelai": 17,
    "kelapa_sawit": 20,
    "kopi_teh_kakao": 10.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 31,
    "gudang_senjata": 27,
    "hangar_tank": 4,
    "akademi_militer": 37,
    "pusat_komando": 18,
    "pangkalan_udara": 19,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 38,
    "anggaran_pertahanan": 27,
    "personel": 11294,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 13,
    "infanteri": 27,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 27,
        "apc": 16,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 87,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 65,
        "helikopter_serang": 104,
        "pesawat_pengintai": 2
      },
      "total_unit": 34,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 35,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 30,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 8,
          "kamera_pengawas": 19,
          "pusat_forensik": 1
        },
        "waktu_respon": 28,
        "kepercayaan_publik": 50 },
    "intelijen": 25,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 37,
      "misi_sabotase": 37,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 31,
      "sd": 8,
      "smp": 14,
      "sma": 27,
      "universitas": 19,
      "lembaga_pendidikan": 26,
      "laboratorium": 28,
      "observatorium": 40,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 9,
      "literasi": 55,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 19,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 11,
      "tempat_tidur_rs": 4758,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 35,
      "stadion": 6,
      "stadion_internasional": 13,
      "skor_olimpiade": 25,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 15,
      "pengadilan": 36,
      "kejaksaan": 4,
      "pos_polisi": 40,
      "armada_mobil_polisi": 3667,
      "akademi_polisi": 37,
      "indeks_korupsi": 91,
      "indeks_keamanan": 77
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
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
    "gaji_militer": 80
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
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 2600,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
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
    "kesehatan": 6,
    "pendidikan": 13,
    "keamanan": 28,
    "keuangan": 20,
    "lingkungan": 60
  }
};
