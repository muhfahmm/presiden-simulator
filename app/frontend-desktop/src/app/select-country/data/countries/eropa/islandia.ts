import { CountryData } from "../../types/_index";

export const islandia: CountryData = {
  "name_en": "Iceland",
  "capital": "Reykjavik",
  "name_id": "Islandia",
  "lon": -18,
  "lat": 65,
  "flag": "🇮🇸",
  "jumlah_penduduk": 352721,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 6,
    "pembangkit_air": 22,
    "pembangkit_surya": 20,
    "pembangkit_termal": 17,
    "pembangkit_gas": 30,
    "pembangkit_angin": 8,
    "jaringan_listrik": 71
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 8,
    "jalur_kereta": 21,
    "jalan_tol": 18,
    "kualitas_jalan": 72,
    "pelabuhan_laut": 22,
    "bandara": 16,
    "terminal_bus": 34,
    "helipad": 23,
    "cakupan_internet": 80,
    "indeks_teknologi": 86,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 9,
    "uranium": 31,
    "batu_bara": 21,
    "minyak_bumi": 17,
    "gas_alam": 4,
    "garam": 4,
    "nikel": 5,
    "litium": 14,
    "aluminium": 15,
    "tembaga": 12,
    "logam_tanah_jarang": 23,
    "bijih_besi": 7,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 18,
    "mobil": 39,
    "sepeda_motor": 38,
    "smelter": 18,
    "semen_beton": 32,
    "kayu": 5,
    "air_mineral": 2,
    "gula": 37,
    "roti": 25,
    "farmasi": 24,
    "pupuk": 16,
    "pengolahan_daging": 12,
    "mie_instan": 25,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 23.5,
    "sapi_perah": 22,
    "sapi_potong": 9,
    "domba_kambing": 16,
    "udang_kerang": 23.5,
    "ikan": 14,
    "padi": 27,
    "gandum_jagung": 28.5,
    "sayur_umbi": 30.5,
    "kedelai": 23,
    "kelapa_sawit": 14,
    "kopi_teh_kakao": 25.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 35,
    "gudang_senjata": 12,
    "hangar_tank": 15,
    "akademi_militer": 19,
    "pusat_komando": 19,
    "pangkalan_udara": 19,
    "pangkalan_laut": 22,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 6,
    "anggaran_pertahanan": 83,
    "personel": 11762,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 7,
    "infanteri": 37,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 19,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 11,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 10,
        "helikopter_serang": 6,
        "pesawat_pengintai": 2
      },
      "total_unit": 5,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 40,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 36,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 37,
          "kamera_pengawas": 2,
          "pusat_forensik": 1
        },
        "waktu_respon": 37,
        "kepercayaan_publik": 50 },
    "intelijen": 28,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 34,
      "misi_sabotase": 31,
      "manajemen_wilayah": 13,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 11,
      "sd": 25,
      "smp": 3,
      "sma": 29,
      "universitas": 37,
      "lembaga_pendidikan": 34,
      "laboratorium": 11,
      "observatorium": 16,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 18,
      "literasi": 57,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 12,
      "pusat_diagnostik": 5,
      "tempat_tidur_rs": 1340,
      "harapan_hidup": 33,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 7,
      "stadion": 3,
      "stadion_internasional": 27,
      "skor_olimpiade": 19,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 1,
      "pengadilan": 9,
      "kejaksaan": 8,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1677,
      "akademi_polisi": 14,
      "indeks_korupsi": 59,
      "indeks_keamanan": 83
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
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 22
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 6
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
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
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
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
      "kekuatan_lunak": 29,
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
    "kesehatan": 32,
    "pendidikan": 28,
    "keamanan": 9,
    "keuangan": 22,
    "lingkungan": 60
  }
};
