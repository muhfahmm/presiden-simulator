import { CountryData } from "../../types/_index";

export const palestina: CountryData = {
  "name_en": "Palestine",
  "capital": "Ramallah",
  "name_id": "Palestina",
  "lon": 35.2,
  "lat": 31.9,
  "flag": "🇵🇸",
  "jumlah_penduduk": 4569087,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 28,
    "pembangkit_air": 38,
    "pembangkit_surya": 4,
    "pembangkit_termal": 20,
    "pembangkit_gas": 22,
    "pembangkit_angin": 9,
    "jaringan_listrik": 72
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 6,
    "kereta_bawah_tanah": 3,
    "jalur_kereta": 30,
    "jalan_tol": 36,
    "kualitas_jalan": 62,
    "pelabuhan_laut": 30,
    "bandara": 7,
    "terminal_bus": 11,
    "helipad": 26,
    "cakupan_internet": 91
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 28,
    "uranium": 22,
    "batu_bara": 37,
    "minyak_bumi": 7,
    "gas_alam": 10,
    "garam": 6,
    "nikel": 11,
    "litium": 2,
    "aluminium": 12,
    "tembaga": 8,
    "logam_tanah_jarang": 6,
    "bijih_besi": 18
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 6,
    "mobil": 40,
    "sepeda_motor": 30,
    "smelter": 12,
    "semen_beton": 35,
    "kayu": 21,
    "air_mineral": 5,
    "gula": 37,
    "roti": 34,
    "farmasi": 29,
    "pupuk": 16,
    "pengolahan_daging": 9,
    "mie_instan": 2
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 21.5,
    "sapi_perah": 4,
    "sapi_potong": 10,
    "domba_kambing": 35,
    "udang_kerang": 5.5,
    "ikan": 14,
    "padi": 21,
    "gandum_jagung": 9.0,
    "sayur_umbi": 15.5,
    "kedelai": 15,
    "kelapa_sawit": 25,
    "kopi_teh_kakao": 15.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 25,
    "gudang_senjata": 32,
    "hangar_tank": 35,
    "akademi_militer": 5,
    "pusat_komando": 36,
    "pangkalan_udara": 19,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 14,
    "pertahanan_siber": 23,
    "anggaran_pertahanan": 55
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 1,
    "darat": {
        "tank_tempur_utama": 81,
        "apc": 119,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 186,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 177,
        "helikopter_serang": 148,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 6,
          "sepeda_motor": 21,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 25,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 26,
          "kamera_pengawas": 7,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 26,
    "intelijen": 16,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 5,
      "misi_sabotase": 25,
      "manajemen_wilayah": 38,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 35,
      "dasar": 21,
      "menengah": 33,
      "lanjutan": 28,
      "universitas": 5,
      "lembaga_pendidikan": 33,
      "laboratorium": 36,
      "observatorium": 1,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 28,
      "literasi": 64
    },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 39,
      "pusat_diagnostik": 38,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 39,
      "pengadilan": 34,
      "kejaksaan": 35,
      "pos_polisi": 19,
      "armada_mobil_polisi": 1999,
      "akademi_polisi": 6,
      "indeks_korupsi": 72,
      "indeks_keamanan": 90
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 20,
      "stadion": 29,
      "stadion_internasional": 9
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 35,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 315800,
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
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 22,
      "kekuatan_keras": 9,
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
    "pendidikan": 15,
    "keamanan": 33,
    "keuangan": 7,
    "lingkungan": 60
  }
};



