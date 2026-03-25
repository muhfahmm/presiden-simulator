import { CountryData } from "../../types/_index";

export const kiribati: CountryData = {
  "name_en": "Kiribati",
  "capital": "South Tarawa",
  "name_id": "Kiribati",
  "lon": 173,
  "lat": 1.41666666,
  "flag": "🇰🇮",
  "jumlah_penduduk": 115847,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 38,
    "pembangkit_air": 5,
    "pembangkit_surya": 19,
    "pembangkit_termal": 34,
    "pembangkit_gas": 32,
    "pembangkit_angin": 15,
    "jaringan_listrik": 76
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 3,
    "kereta_bawah_tanah": 19,
    "jalur_kereta": 33,
    "jalan_tol": 39,
    "kualitas_jalan": 90,
    "pelabuhan_laut": 39,
    "bandara": 3,
    "terminal_bus": 7,
    "helipad": 2,
    "cakupan_internet": 69,
    "indeks_teknologi": 72,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 19,
    "uranium": 21,
    "batu_bara": 25,
    "minyak_bumi": 40,
    "gas_alam": 34,
    "garam": 1,
    "nikel": 38,
    "litium": 34,
    "aluminium": 6,
    "tembaga": 1,
    "logam_tanah_jarang": 25,
    "bijih_besi": 32,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 18,
    "mobil": 8,
    "sepeda_motor": 21,
    "smelter": 36,
    "semen_beton": 21,
    "kayu": 32,
    "air_mineral": 5,
    "gula": 13,
    "roti": 12,
    "farmasi": 2,
    "pupuk": 34,
    "pengolahan_daging": 35,
    "mie_instan": 25,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 16.5,
    "sapi_perah": 29,
    "sapi_potong": 26,
    "domba_kambing": 17,
    "udang_kerang": 13.5,
    "ikan": 26,
    "padi": 14,
    "gandum_jagung": 32.0,
    "sayur_umbi": 18.5,
    "kedelai": 40,
    "kelapa_sawit": 36,
    "kopi_teh_kakao": 17.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 26,
    "gudang_senjata": 6,
    "hangar_tank": 22,
    "akademi_militer": 9,
    "pusat_komando": 12,
    "pangkalan_udara": 19,
    "pangkalan_laut": 28,
    "program_luar_angkasa": 25,
    "pertahanan_siber": 31,
    "anggaran_pertahanan": 1,
    "personel": 11061,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 10,
    "infanteri": 9,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 10,
        "apc": 20,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 16,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 8,
        "helikopter_serang": 21,
        "pesawat_pengintai": 2
      },
      "total_unit": 34,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 8,
      "jaringan_radar": 19,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 19,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 20,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 34,
          "kamera_pengawas": 32,
          "pusat_forensik": 1
        },
        "waktu_respon": 4,
        "kepercayaan_publik": 50 },
    "intelijen": 12,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 6,
      "misi_mata_mata": 21,
      "misi_sabotase": 1,
      "manajemen_wilayah": 37,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 15,
      "sd": 8,
      "smp": 18,
      "sma": 1,
      "universitas": 16,
      "lembaga_pendidikan": 1,
      "laboratorium": 25,
      "observatorium": 2,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 33,
      "literasi": 78,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 6,
      "tempat_tidur_rs": 4018,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 31,
      "sirkuit_balap": 2,
      "stadion": 35,
      "stadion_internasional": 2,
      "skor_olimpiade": 17,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 28,
      "kejaksaan": 34,
      "pos_polisi": 26,
      "armada_mobil_polisi": 3919,
      "akademi_polisi": 13,
      "indeks_korupsi": 55,
      "indeks_keamanan": 87
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_energi": 50,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 18,
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
    "kesehatan": 11,
    "pendidikan": 23,
    "keamanan": 9,
    "keuangan": 16,
    "lingkungan": 60
  }
};
