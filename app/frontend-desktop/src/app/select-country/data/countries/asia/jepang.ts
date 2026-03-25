import { CountryData } from "../../types/_index";

export const jepang: CountryData = {
  "name_en": "Japan",
  "capital": "Tokyo",
  "name_id": "Jepang",
  "lon": 138,
  "lat": 36,
  "flag": "🇯🇵",
  "jumlah_penduduk": 126529100,
  "anggaran": 39962,
  "pendapatan_nasional": "114176",
  "religion": "Shinto",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 10,
    "pembangkit_air": 35,
    "pembangkit_surya": 9,
    "pembangkit_termal": 2,
    "pembangkit_gas": 35,
    "pembangkit_angin": 28,
    "jaringan_listrik": 66
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 38,
    "kereta_bawah_tanah": 19,
    "jalur_kereta": 19,
    "jalan_tol": 14,
    "kualitas_jalan": 91,
    "pelabuhan_laut": 1,
    "bandara": 36,
    "terminal_bus": 9,
    "helipad": 7,
    "cakupan_internet": 93
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 31,
    "uranium": 29,
    "batu_bara": 39,
    "minyak_bumi": 16,
    "gas_alam": 24,
    "garam": 6,
    "nikel": 5,
    "litium": 11,
    "aluminium": 17,
    "tembaga": 27,
    "logam_tanah_jarang": 9,
    "bijih_besi": 39
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 28,
    "mobil": 13,
    "sepeda_motor": 31,
    "smelter": 28,
    "semen_beton": 39,
    "kayu": 17,
    "air_mineral": 27,
    "gula": 16,
    "roti": 16,
    "farmasi": 13,
    "pupuk": 1,
    "pengolahan_daging": 1,
    "mie_instan": 23
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 21.0,
    "sapi_perah": 24,
    "sapi_potong": 13,
    "domba_kambing": 10,
    "udang_kerang": 25.5,
    "ikan": 38,
    "padi": 17,
    "gandum_jagung": 11.0,
    "sayur_umbi": 15.5,
    "kedelai": 23,
    "kelapa_sawit": 29,
    "kopi_teh_kakao": 33.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 18,
    "gudang_senjata": 36,
    "hangar_tank": 13,
    "akademi_militer": 12,
    "pusat_komando": 33,
    "pangkalan_udara": 15,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 19,
    "anggaran_pertahanan": 11417
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 32,
    "darat": {
        "tank_tempur_utama": 8,
        "apc": 1,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 3,
        "helikopter_serang": 31,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 31,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 36,
          "kamera_pengawas": 28,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 15,
    "intelijen": 3,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 33,
      "misi_mata_mata": 19,
      "misi_sabotase": 17,
      "manajemen_wilayah": 40,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 28,
      "dasar": 7,
      "menengah": 22,
      "lanjutan": 10,
      "universitas": 23,
      "lembaga_pendidikan": 17,
      "laboratorium": 17,
      "observatorium": 9,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 5,
      "literasi": 86
    },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 35,
      "pusat_diagnostik": 9,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 13,
      "kejaksaan": 14,
      "pos_polisi": 28,
      "armada_mobil_polisi": 6450,
      "akademi_polisi": 33,
      "indeks_korupsi": 90,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 39,
      "stadion": 39,
      "stadion_internasional": 12
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 3,
      "kepuasan": 67,
      "pendapatan": 209
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 245
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 1899
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 568
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 433
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 200 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 600 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 1182
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 7200,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 2600,
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
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 19,
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
    "pendidikan": 40,
    "keamanan": 10,
    "keuangan": 22,
    "lingkungan": 60
  }
};



