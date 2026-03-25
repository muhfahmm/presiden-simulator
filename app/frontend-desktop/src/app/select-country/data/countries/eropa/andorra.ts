import { CountryData } from "../../types";

export const andorra: CountryData = {
  "name_en": "Andorra",
  "capital": "Andorra la Vella",
  "name_id": "Andorra",
  "lon": 1.52,
  "lat": 42.5,
  "flag": "🇦🇩",
  "jumlah_penduduk": 77006,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 38,
    "pembangkit_air": 10,
    "pembangkit_surya": 30,
    "pembangkit_termal": 8,
    "pembangkit_gas": 19,
    "pembangkit_angin": 36,
    "jaringan_listrik": 69
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 33,
    "kereta_bawah_tanah": 29,
    "jalur_kereta": 9,
    "jalan_tol": 38,
    "kualitas_jalan": 84,
    "pelabuhan_laut": 8,
    "bandara": 18,
    "terminal_bus": 29,
    "helipad": 27,
    "cakupan_internet": 75,
    "indeks_teknologi": 89,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 26,
    "uranium": 33,
    "batu_bara": 40,
    "minyak_bumi": 12,
    "gas_alam": 6,
    "garam": 12,
    "nikel": 28,
    "litium": 6,
    "aluminium": 32,
    "tembaga": 32,
    "logam_tanah_jarang": 28,
    "bijih_besi": 34,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 6,
    "mobil": 1,
    "sepeda_motor": 6,
    "smelter": 10,
    "semen_beton": 9,
    "kayu": 11,
    "air_mineral": 28,
    "gula": 18,
    "roti": 36,
    "farmasi": 23,
    "pupuk": 35,
    "pengolahan_daging": 7,
    "mie_instan": 26,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 5,
    "unggas": 20,
    "sapi_perah": 30,
    "sapi_potong": 32,
    "domba_kambing": 4,
    "udang": 11,
    "ikan": 23,
    "kerang": 5,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 13,
    "gandum": 38,
    "jagung": 37,
    "umbi_umbian": 19,
    "kedelai": 38,
    "kelapa_sawit": 30,
    "teh": 22,
    "kopi": 15,
    "cokelat": 16,
    "tebu": 31,
    "sayur_sayuran": 29,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 30,
    "gudang_senjata": 18,
    "hangar_tank": 31,
    "akademi_militer": 3,
    "pusat_komando": 12,
    "pangkalan_udara": 25,
    "pangkalan_laut": 4,
    "program_luar_angkasa": 27,
    "pertahanan_siber": 31,
    "anggaran_pertahanan": 27,
    "personel": 5837,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 9,
    "infanteri": 27,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 39,
        "apc": 31,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 6,
        "kapal_destroyer": 13,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 32,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2
      },
      "total_unit": 32,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 17,
      "jaringan_radar": 14,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 12,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 39,
          "kamera_pengawas": 19,
          "pusat_forensik": 1
        },
        "waktu_respon": 6,
        "kepercayaan_publik": 50 },
    "intelijen": 31,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 11,
      "misi_sabotase": 6,
      "manajemen_wilayah": 5,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 17,
      "sd": 30,
      "smp": 14,
      "sma": 15,
      "universitas": 17,
      "lembaga_pendidikan": 22,
      "laboratorium": 38,
      "observatorium": 40,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 4,
      "literasi": 50,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 10,
      "pusat_diagnostik": 3,
      "tempat_tidur_rs": 6283,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 32,
      "sirkuit_balap": 24,
      "stadion": 1,
      "stadion_internasional": 22,
      "skor_olimpiade": 30,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 37,
      "kejaksaan": 21,
      "pos_polisi": 2,
      "armada_mobil_polisi": 6456,
      "akademi_polisi": 26,
      "indeks_korupsi": 69,
      "indeks_keamanan": 61
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
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 1
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
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 62,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 31,
    "komersial": 16,
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
      "kekuatan_lunak": 4,
      "kekuatan_keras": 12,
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
    "kesehatan": 4,
    "pendidikan": 20,
    "keamanan": 33,
    "keuangan": 6,
    "lingkungan": 60
  }
};
