import { CountryData } from "../../types";

export const tahiti: CountryData = {
  "name_en": "French Polynesia",
  "capital": "Papeetē",
  "name_id": "Tahiti",
  "lon": -140,
  "lat": -15,
  "flag": "🇵🇫",
  "jumlah_penduduk": 277679,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 25,
    "pembangkit_air": 18,
    "pembangkit_surya": 5,
    "pembangkit_termal": 35,
    "pembangkit_gas": 8,
    "pembangkit_angin": 24,
    "jaringan_listrik": 68
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 17,
    "kereta_bawah_tanah": 30,
    "jalur_kereta": 25,
    "jalan_tol": 36,
    "kualitas_jalan": 53,
    "pelabuhan_laut": 13,
    "bandara": 31,
    "terminal_bus": 24,
    "helipad": 16,
    "cakupan_internet": 57,
    "indeks_teknologi": 88,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 13,
    "uranium": 29,
    "batu_bara": 39,
    "minyak_bumi": 23,
    "gas_alam": 12,
    "garam": 9,
    "nikel": 12,
    "litium": 13,
    "aluminium": 2,
    "tembaga": 16,
    "logam_tanah_jarang": 7,
    "bijih_besi": 11,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 2,
    "mobil": 37,
    "sepeda_motor": 17,
    "smelter": 37,
    "semen_beton": 28,
    "kayu": 33,
    "air_mineral": 33,
    "gula": 3,
    "roti": 2,
    "farmasi": 24,
    "pupuk": 12,
    "pengolahan_daging": 2,
    "mie_instan": 34,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 27,
    "unggas": 4,
    "sapi_perah": 37,
    "sapi_potong": 19,
    "domba_kambing": 18,
    "udang": 4,
    "ikan": 14,
    "kerang": 16,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 35,
    "gandum": 6,
    "jagung": 3,
    "umbi_umbian": 16,
    "kedelai": 34,
    "kelapa_sawit": 24,
    "teh": 5,
    "kopi": 9,
    "cokelat": 29,
    "tebu": 20,
    "sayur_sayuran": 10,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 37,
    "gudang_senjata": 33,
    "hangar_tank": 18,
    "akademi_militer": 21,
    "pusat_komando": 5,
    "pangkalan_udara": 31,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 39,
    "pertahanan_siber": 2,
    "anggaran_pertahanan": 27,
    "personel": 15019,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 17,
    "infanteri": 13,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 137,
        "apc": 49,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 166,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 52,
        "helikopter_serang": 191,
        "pesawat_pengintai": 2
      },
      "total_unit": 4,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 4,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 20,
          "kamera_pengawas": 5,
          "pusat_forensik": 1
        },
        "waktu_respon": 14,
        "kepercayaan_publik": 50 },
    "intelijen": 34,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 36,
      "misi_mata_mata": 2,
      "misi_sabotase": 1,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 40,
      "sd": 12,
      "smp": 17,
      "sma": 40,
      "universitas": 33,
      "lembaga_pendidikan": 20,
      "laboratorium": 29,
      "observatorium": 37,
      "pusat_penelitian": 9,
      "pusat_pengembangan": 37,
      "literasi": 56,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 12,
      "tempat_tidur_rs": 3480,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 1,
      "stadion": 22,
      "stadion_internasional": 1,
      "skor_olimpiade": 39,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 11,
      "kejaksaan": 18,
      "pos_polisi": 39,
      "armada_mobil_polisi": 8885,
      "akademi_polisi": 27,
      "indeks_korupsi": 82,
      "indeks_keamanan": 94
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
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
    "gaji_asn": 80,
    "gaji_guru": 80,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 66,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 2,
    "komersial": 27,
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
      "kekuatan_lunak": 14,
      "kekuatan_keras": 37,
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
    "kesehatan": 38,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 37,
    "lingkungan": 60
  }
};
