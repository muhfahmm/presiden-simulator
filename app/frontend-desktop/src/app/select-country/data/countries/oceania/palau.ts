import { CountryData } from "../../types/_index";

export const palau: CountryData = {
  "name_en": "Palau",
  "capital": "Ngerulmud",
  "name_id": "Palau",
  "lon": 134.5,
  "lat": 7.5,
  "flag": "🇵🇼",
  "jumlah_penduduk": 17907,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 8,
    "pembangkit_air": 1,
    "pembangkit_surya": 1,
    "pembangkit_termal": 27,
    "pembangkit_gas": 27,
    "pembangkit_angin": 21,
    "jaringan_listrik": 50
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 1,
    "kereta_bawah_tanah": 39,
    "jalur_kereta": 27,
    "jalan_tol": 16,
    "kualitas_jalan": 55,
    "pelabuhan_laut": 19,
    "bandara": 23,
    "terminal_bus": 5,
    "helipad": 15,
    "cakupan_internet": 92,
    "indeks_teknologi": 77,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 18,
    "uranium": 35,
    "batu_bara": 1,
    "minyak_bumi": 30,
    "gas_alam": 15,
    "garam": 7,
    "nikel": 20,
    "litium": 26,
    "aluminium": 40,
    "tembaga": 35,
    "logam_tanah_jarang": 18,
    "bijih_besi": 11,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 38,
    "mobil": 12,
    "sepeda_motor": 36,
    "smelter": 40,
    "semen_beton": 13,
    "kayu": 16,
    "air_mineral": 38,
    "gula": 21,
    "roti": 28,
    "farmasi": 4,
    "pupuk": 21,
    "pengolahan_daging": 9,
    "mie_instan": 15,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 17.0,
    "sapi_perah": 11,
    "sapi_potong": 33,
    "domba_kambing": 36,
    "udang_kerang": 17.0,
    "ikan": 2,
    "padi": 12,
    "gandum_jagung": 22.5,
    "sayur_umbi": 13.5,
    "kedelai": 39,
    "kelapa_sawit": 23,
    "kopi_teh_kakao": 16.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 13,
    "gudang_senjata": 16,
    "hangar_tank": 34,
    "akademi_militer": 29,
    "pusat_komando": 4,
    "pangkalan_udara": 5,
    "pangkalan_laut": 13,
    "program_luar_angkasa": 14,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 1,
    "personel": 28926,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 16,
    "infanteri": 24,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 152,
        "apc": 63,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 4,
        "kapal_destroyer": 84,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 190,
        "helikopter_serang": 63,
        "pesawat_pengintai": 2
      },
      "total_unit": 24,
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
          "mobil_patroli": 33,
          "sepeda_motor": 36,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 8,
          "kamera_pengawas": 30,
          "pusat_forensik": 1
        },
        "waktu_respon": 14,
        "kepercayaan_publik": 50 },
    "intelijen": 14,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 4,
      "misi_sabotase": 1,
      "manajemen_wilayah": 1,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 34,
      "sd": 30,
      "smp": 29,
      "sma": 9,
      "universitas": 4,
      "lembaga_pendidikan": 17,
      "laboratorium": 24,
      "observatorium": 14,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 21,
      "literasi": 88,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 13,
      "tempat_tidur_rs": 9889,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 18,
      "sirkuit_balap": 4,
      "stadion": 19,
      "stadion_internasional": 24,
      "skor_olimpiade": 11,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 10,
      "kejaksaan": 14,
      "pos_polisi": 3,
      "armada_mobil_polisi": 9244,
      "akademi_polisi": 23,
      "indeks_korupsi": 69,
      "indeks_keamanan": 58
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 34,
      "kekuatan_keras": 21,
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
    "kesehatan": 35,
    "pendidikan": 27,
    "keamanan": 34,
    "keuangan": 8,
    "lingkungan": 60
  }
};
