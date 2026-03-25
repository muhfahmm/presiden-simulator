import { CountryData } from "../../types/_index";

export const turki: CountryData = {
  "name_en": "Turkiye",
  "capital": "Ankara",
  "name_id": "Turki",
  "lon": 35,
  "lat": 39,
  "flag": "🇹🇷",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 40,
    "pembangkit_air": 13,
    "pembangkit_surya": 33,
    "pembangkit_termal": 37,
    "pembangkit_gas": 16,
    "pembangkit_angin": 11,
    "jaringan_listrik": 77
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 13,
    "kereta_bawah_tanah": 11,
    "jalur_kereta": 20,
    "jalan_tol": 37,
    "kualitas_jalan": 73,
    "pelabuhan_laut": 3,
    "bandara": 24,
    "terminal_bus": 16,
    "helipad": 6,
    "cakupan_internet": 80,
    "indeks_teknologi": 75,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 26,
    "uranium": 16,
    "batu_bara": 19,
    "minyak_bumi": 4,
    "gas_alam": 12,
    "garam": 36,
    "nikel": 7,
    "litium": 4,
    "aluminium": 1,
    "tembaga": 12,
    "logam_tanah_jarang": 32,
    "bijih_besi": 30,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 24,
    "mobil": 27,
    "sepeda_motor": 21,
    "smelter": 23,
    "semen_beton": 20,
    "kayu": 11,
    "air_mineral": 36,
    "gula": 32,
    "roti": 16,
    "farmasi": 40,
    "pupuk": 27,
    "pengolahan_daging": 5,
    "mie_instan": 27,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 11.5,
    "sapi_perah": 33,
    "sapi_potong": 38,
    "domba_kambing": 2,
    "udang_kerang": 23.5,
    "ikan": 18,
    "padi": 27,
    "gandum_jagung": 22.0,
    "sayur_umbi": 6.0,
    "kedelai": 32,
    "kelapa_sawit": 35,
    "kopi_teh_kakao": 21.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 38,
    "gudang_senjata": 5,
    "hangar_tank": 4,
    "akademi_militer": 25,
    "pusat_komando": 19,
    "pangkalan_udara": 16,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 27,
    "pertahanan_siber": 36,
    "anggaran_pertahanan": 27,
    "personel": 5849,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 37,
    "infanteri": 40,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 40,
        "apc": 146,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 199,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 189,
        "helikopter_serang": 175,
        "pesawat_pengintai": 2
      },
      "total_unit": 34,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 5,
      "jaringan_radar": 2,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 19,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 17,
          "kamera_pengawas": 11,
          "pusat_forensik": 1
        },
        "waktu_respon": 33,
        "kepercayaan_publik": 50 },
    "intelijen": 7,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 35,
      "misi_sabotase": 40,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 31,
      "sd": 11,
      "smp": 38,
      "sma": 38,
      "universitas": 1,
      "lembaga_pendidikan": 23,
      "laboratorium": 30,
      "observatorium": 19,
      "pusat_penelitian": 33,
      "pusat_pengembangan": 15,
      "literasi": 93,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 4,
      "pusat_diagnostik": 23,
      "tempat_tidur_rs": 7569,
      "harapan_hidup": 36,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 39,
      "stadion": 37,
      "stadion_internasional": 38,
      "skor_olimpiade": 4,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 13,
      "kejaksaan": 32,
      "pos_polisi": 26,
      "armada_mobil_polisi": 8169,
      "akademi_polisi": 31,
      "indeks_korupsi": 72,
      "indeks_keamanan": 59
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 35,
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
    "kesehatan": 27,
    "pendidikan": 22,
    "keamanan": 26,
    "keuangan": 28,
    "lingkungan": 60
  }
};
