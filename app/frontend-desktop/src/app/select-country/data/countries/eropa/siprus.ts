import { CountryData } from "../../types/_index";

export const siprus: CountryData = {
  "name_en": "Cyprus",
  "capital": "Nicosia",
  "name_id": "Siprus",
  "lon": 33,
  "lat": 35,
  "flag": "🇨🇾",
  "jumlah_penduduk": 1189265,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 12,
    "pembangkit_air": 4,
    "pembangkit_surya": 38,
    "pembangkit_termal": 35,
    "pembangkit_gas": 19,
    "pembangkit_angin": 24,
    "jaringan_listrik": 54
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 34,
    "kereta_bawah_tanah": 22,
    "jalur_kereta": 23,
    "jalan_tol": 26,
    "kualitas_jalan": 89,
    "pelabuhan_laut": 8,
    "bandara": 24,
    "terminal_bus": 21,
    "helipad": 25,
    "cakupan_internet": 59
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 20,
    "uranium": 1,
    "batu_bara": 7,
    "minyak_bumi": 30,
    "gas_alam": 27,
    "garam": 36,
    "nikel": 25,
    "litium": 8,
    "aluminium": 1,
    "tembaga": 40,
    "logam_tanah_jarang": 31,
    "bijih_besi": 5
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 11,
    "mobil": 2,
    "sepeda_motor": 26,
    "smelter": 3,
    "semen_beton": 1,
    "kayu": 20,
    "air_mineral": 23,
    "gula": 2,
    "roti": 34,
    "farmasi": 5,
    "pupuk": 31,
    "pengolahan_daging": 19,
    "mie_instan": 37
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 34.0,
    "sapi_perah": 7,
    "sapi_potong": 12,
    "domba_kambing": 5,
    "udang_kerang": 33.5,
    "ikan": 17,
    "padi": 8,
    "gandum_jagung": 6.0,
    "sayur_umbi": 19.5,
    "kedelai": 32,
    "kelapa_sawit": 3,
    "kopi_teh_kakao": 11.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 13,
    "gudang_senjata": 24,
    "hangar_tank": 16,
    "akademi_militer": 1,
    "pusat_komando": 32,
    "pangkalan_udara": 19,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 4,
    "pertahanan_siber": 32,
    "anggaran_pertahanan": 83
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 10,
    "darat": {
        "tank_tempur_utama": 121,
        "apc": 125,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 114,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 19,
        "helikopter_serang": 98,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 10,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 10,
          "kamera_pengawas": 22,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 2,
    "intelijen": 25,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 31,
      "misi_mata_mata": 32,
      "misi_sabotase": 35,
      "manajemen_wilayah": 4,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 11,
      "dasar": 33,
      "menengah": 25,
      "lanjutan": 24,
      "universitas": 27,
      "lembaga_pendidikan": 12,
      "laboratorium": 7,
      "observatorium": 6,
      "pusat_penelitian": 33,
      "pusat_pengembangan": 20,
      "literasi": 66
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 22,
      "pusat_diagnostik": 23,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 24,
      "pengadilan": 28,
      "kejaksaan": 11,
      "pos_polisi": 36,
      "armada_mobil_polisi": 9348,
      "akademi_polisi": 2,
      "indeks_korupsi": 61,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 32,
      "sirkuit_balap": 3,
      "stadion": 14,
      "stadion_internasional": 24
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 29
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 2,
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
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 7200,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
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
    "kesehatan": 24,
    "pendidikan": 19,
    "keamanan": 4,
    "keuangan": 13,
    "lingkungan": 60
  }
};



