import { CountryData } from "../../types/_index";

export const kanada: CountryData = {
  "name_en": "Canada",
  "capital": "Ottawa",
  "name_id": "Kanada",
  "lon": -95,
  "lat": 60,
  "flag": "🇨🇦",
  "jumlah_penduduk": 37057765,
  "anggaran": 21780,
  "pendapatan_nasional": "62227",
  "religion": "Protestan",
  "ideology": "Liberalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 27,
    "pembangkit_air": 34,
    "pembangkit_surya": 2,
    "pembangkit_termal": 5,
    "pembangkit_gas": 7,
    "pembangkit_angin": 6,
    "jaringan_listrik": 58
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 13,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 6,
    "jalan_tol": 25,
    "kualitas_jalan": 74,
    "pelabuhan_laut": 32,
    "bandara": 16,
    "terminal_bus": 15,
    "helipad": 18,
    "cakupan_internet": 73
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 34,
    "uranium": 10,
    "batu_bara": 15,
    "minyak_bumi": 33,
    "gas_alam": 38,
    "garam": 29,
    "nikel": 25,
    "litium": 13,
    "aluminium": 40,
    "tembaga": 18,
    "logam_tanah_jarang": 34,
    "bijih_besi": 31
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 6,
    "mobil": 32,
    "sepeda_motor": 14,
    "smelter": 17,
    "semen_beton": 32,
    "kayu": 19,
    "air_mineral": 34,
    "gula": 33,
    "roti": 1,
    "farmasi": 20,
    "pupuk": 4,
    "pengolahan_daging": 15,
    "mie_instan": 33
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 18.0,
    "sapi_perah": 17,
    "sapi_potong": 32,
    "domba_kambing": 22,
    "udang_kerang": 35.5,
    "ikan": 38,
    "padi": 2,
    "gandum_jagung": 40.0,
    "sayur_umbi": 21.5,
    "kedelai": 30,
    "kelapa_sawit": 33,
    "kopi_teh_kakao": 28.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 21,
    "gudang_senjata": 4,
    "hangar_tank": 6,
    "akademi_militer": 7,
    "pusat_komando": 6,
    "pangkalan_udara": 13,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 37,
    "pertahanan_siber": 33,
    "anggaran_pertahanan": 6222
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 23,
    "darat": {
        "tank_tempur_utama": 5,
        "apc": 33,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 37,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 22,
        "helikopter_serang": 17,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 12,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 7,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 18,
    "intelijen": 30,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 23,
      "misi_sabotase": 37,
      "manajemen_wilayah": 2,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 5,
      "dasar": 25,
      "menengah": 27,
      "lanjutan": 32,
      "universitas": 5,
      "lembaga_pendidikan": 1,
      "laboratorium": 35,
      "observatorium": 19,
      "pusat_penelitian": 37,
      "pusat_pengembangan": 6,
      "literasi": 89
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 19,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 31,
      "kejaksaan": 24,
      "pos_polisi": 23,
      "armada_mobil_polisi": 4735,
      "akademi_polisi": 36,
      "indeks_korupsi": 53,
      "indeks_keamanan": 63
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 14,
      "stadion": 17,
      "stadion_internasional": 39
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 586
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 749
    },
    "penghasilan": {
      "tarif": 9,
      "kepuasan": 61,
      "pendapatan": 273
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 304
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 1479
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 109 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 327 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 193
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
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 10400,
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
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
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
    "kesehatan": 5,
    "pendidikan": 5,
    "keamanan": 9,
    "keuangan": 18,
    "lingkungan": 60
  }
};



