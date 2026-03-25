import { CountryData } from "../../types/_index";

export const pakistan: CountryData = {
  "name_en": "Pakistan",
  "capital": "Islamabad",
  "name_id": "Pakistan",
  "lon": 70,
  "lat": 30,
  "flag": "🇵🇰",
  "jumlah_penduduk": 212215030,
  "anggaran": 3306,
  "pendapatan_nasional": "9445",
  "religion": "Islam",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 8,
    "pembangkit_air": 37,
    "pembangkit_surya": 32,
    "pembangkit_termal": 29,
    "pembangkit_gas": 36,
    "pembangkit_angin": 33,
    "jaringan_listrik": 95
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 40,
    "kereta_bawah_tanah": 39,
    "jalur_kereta": 29,
    "jalan_tol": 17,
    "kualitas_jalan": 76,
    "pelabuhan_laut": 15,
    "bandara": 36,
    "terminal_bus": 38,
    "helipad": 26,
    "cakupan_internet": 79,
    "indeks_teknologi": 50,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 13,
    "uranium": 27,
    "batu_bara": 30,
    "minyak_bumi": 36,
    "gas_alam": 25,
    "garam": 4,
    "nikel": 23,
    "litium": 4,
    "aluminium": 33,
    "tembaga": 29,
    "logam_tanah_jarang": 38,
    "bijih_besi": 8,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 2,
    "mobil": 36,
    "sepeda_motor": 13,
    "smelter": 8,
    "semen_beton": 2,
    "kayu": 35,
    "air_mineral": 17,
    "gula": 3,
    "roti": 33,
    "farmasi": 35,
    "pupuk": 5,
    "pengolahan_daging": 32,
    "mie_instan": 25,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 14.0,
    "sapi_perah": 20,
    "sapi_potong": 37,
    "domba_kambing": 11,
    "udang_kerang": 6.5,
    "ikan": 29,
    "padi": 30,
    "gandum_jagung": 10.5,
    "sayur_umbi": 20.5,
    "kedelai": 37,
    "kelapa_sawit": 10,
    "kopi_teh_kakao": 22.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 21,
    "gudang_senjata": 25,
    "hangar_tank": 19,
    "akademi_militer": 14,
    "pusat_komando": 11,
    "pangkalan_udara": 28,
    "pangkalan_laut": 21,
    "program_luar_angkasa": 2,
    "pertahanan_siber": 18,
    "anggaran_pertahanan": 944,
    "personel": 10292,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 10,
    "infanteri": 30,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 133,
        "apc": 109,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 95,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 137,
        "helikopter_serang": 200,
        "pesawat_pengintai": 2
      },
      "total_unit": 33,
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
          "mobil_patroli": 12,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 22,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 40,
          "kamera_pengawas": 27,
          "pusat_forensik": 1
        },
        "waktu_respon": 33,
        "kepercayaan_publik": 50 },
    "intelijen": 10,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 4,
      "misi_mata_mata": 8,
      "misi_sabotase": 4,
      "manajemen_wilayah": 5,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 10,
      "sd": 21,
      "smp": 40,
      "sma": 3,
      "universitas": 22,
      "lembaga_pendidikan": 17,
      "laboratorium": 11,
      "observatorium": 8,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 31,
      "literasi": 71,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 5,
      "tempat_tidur_rs": 5308,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 13,
      "stadion": 8,
      "stadion_internasional": 23,
      "skor_olimpiade": 9,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 32,
      "kejaksaan": 23,
      "pos_polisi": 12,
      "armada_mobil_polisi": 6016,
      "akademi_polisi": 27,
      "indeks_korupsi": 61,
      "indeks_keamanan": 59
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 126
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 205
    },
    "penghasilan": {
      "tarif": 14,
      "kepuasan": 61,
      "pendapatan": 59
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 300
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 100
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 50 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 124
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 30,
      "kekuatan_keras": 4,
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
    "pendidikan": 1,
    "keamanan": 8,
    "keuangan": 38,
    "lingkungan": 60
  }
};
