import { CountryData } from "../../types";

export const republik_dominika: CountryData = {
  "name_en": "Dominican Republic",
  "capital": "Santo Domingo",
  "name_id": "Republik dominika",
  "lon": -70.66666666,
  "lat": 19,
  "flag": "🇩🇴",
  "jumlah_penduduk": 10627165,
  "anggaran": 1070,
  "pendapatan_nasional": "3056",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 10,
    "pembangkit_air": 29,
    "pembangkit_surya": 38,
    "pembangkit_termal": 9,
    "pembangkit_gas": 28,
    "pembangkit_angin": 15,
    "jaringan_listrik": 73
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 9,
    "kereta_bawah_tanah": 21,
    "jalur_kereta": 33,
    "jalan_tol": 23,
    "kualitas_jalan": 70,
    "pelabuhan_laut": 6,
    "bandara": 34,
    "terminal_bus": 11,
    "helipad": 36,
    "cakupan_internet": 92,
    "indeks_teknologi": 93,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 9,
    "uranium": 33,
    "batu_bara": 4,
    "minyak_bumi": 13,
    "gas_alam": 38,
    "garam": 30,
    "nikel": 21,
    "litium": 28,
    "aluminium": 3,
    "tembaga": 1,
    "logam_tanah_jarang": 16,
    "bijih_besi": 2,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 6,
    "mobil": 36,
    "sepeda_motor": 1,
    "smelter": 32,
    "semen_beton": 3,
    "kayu": 9,
    "air_mineral": 1,
    "gula": 15,
    "roti": 24,
    "farmasi": 13,
    "pupuk": 7,
    "pengolahan_daging": 4,
    "mie_instan": 9,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 36,
    "unggas": 34,
    "sapi_perah": 22,
    "sapi_potong": 15,
    "domba_kambing": 27,
    "udang": 16,
    "ikan": 14,
    "kerang": 39,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 20,
    "gandum": 40,
    "jagung": 28,
    "umbi_umbian": 2,
    "kedelai": 26,
    "kelapa_sawit": 37,
    "teh": 20,
    "kopi": 30,
    "cokelat": 37,
    "tebu": 27,
    "sayur_sayuran": 26,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 21,
    "gudang_senjata": 32,
    "hangar_tank": 5,
    "akademi_militer": 10,
    "pusat_komando": 7,
    "pangkalan_udara": 18,
    "pangkalan_laut": 8,
    "program_luar_angkasa": 14,
    "pertahanan_siber": 7,
    "anggaran_pertahanan": 305,
    "personel": 27397,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 9,
    "infanteri": 25,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 57,
        "apc": 159,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 169,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 150,
        "helikopter_serang": 184,
        "pesawat_pengintai": 2
      },
      "total_unit": 20,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 26,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 15,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 11,
          "kamera_pengawas": 6,
          "pusat_forensik": 1
        },
        "waktu_respon": 31,
        "kepercayaan_publik": 50 },
    "intelijen": 35,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 17,
      "misi_sabotase": 30,
      "manajemen_wilayah": 5,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 10,
      "sd": 13,
      "smp": 20,
      "sma": 3,
      "universitas": 28,
      "lembaga_pendidikan": 20,
      "laboratorium": 7,
      "observatorium": 19,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 14,
      "literasi": 62,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 4,
      "tempat_tidur_rs": 6147,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 28,
      "sirkuit_balap": 35,
      "stadion": 7,
      "stadion_internasional": 31,
      "skor_olimpiade": 6,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 28,
      "pengadilan": 4,
      "kejaksaan": 6,
      "pos_polisi": 12,
      "armada_mobil_polisi": 3984,
      "akademi_polisi": 4,
      "indeks_korupsi": 85,
      "indeks_keamanan": 84
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 64
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 34
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 28
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 44
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 69,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 13,
    "komersial": 3,
    "industri": 53
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
      "kekuatan_lunak": 8,
      "kekuatan_keras": 7,
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
    "pendidikan": 20,
    "keamanan": 9,
    "keuangan": 25,
    "lingkungan": 60
  }
};
