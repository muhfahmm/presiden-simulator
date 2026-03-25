import { CountryData } from "../../types";

export const curacao: CountryData = {
  "name_en": "Curaçao",
  "capital": "Willemstad",
  "name_id": "Curacao",
  "lon": -68.933333,
  "lat": 12.116667,
  "flag": "🇨🇼",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 13,
    "pembangkit_air": 4,
    "pembangkit_surya": 16,
    "pembangkit_termal": 23,
    "pembangkit_gas": 5,
    "pembangkit_angin": 35,
    "jaringan_listrik": 84
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 1,
    "kereta_bawah_tanah": 23,
    "jalur_kereta": 13,
    "jalan_tol": 39,
    "kualitas_jalan": 81,
    "pelabuhan_laut": 36,
    "bandara": 24,
    "terminal_bus": 20,
    "helipad": 35,
    "cakupan_internet": 51,
    "indeks_teknologi": 89,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 36,
    "uranium": 33,
    "batu_bara": 23,
    "minyak_bumi": 35,
    "gas_alam": 20,
    "garam": 40,
    "nikel": 37,
    "litium": 19,
    "aluminium": 6,
    "tembaga": 15,
    "logam_tanah_jarang": 16,
    "bijih_besi": 18,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 33,
    "mobil": 5,
    "sepeda_motor": 17,
    "smelter": 22,
    "semen_beton": 12,
    "kayu": 17,
    "air_mineral": 22,
    "gula": 40,
    "roti": 33,
    "farmasi": 31,
    "pupuk": 27,
    "pengolahan_daging": 16,
    "mie_instan": 36,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 26,
    "unggas": 39,
    "sapi_perah": 9,
    "sapi_potong": 14,
    "domba_kambing": 9,
    "udang": 27,
    "ikan": 11,
    "kerang": 11,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 31,
    "gandum": 19,
    "jagung": 35,
    "umbi_umbian": 30,
    "kedelai": 31,
    "kelapa_sawit": 7,
    "teh": 1,
    "kopi": 9,
    "cokelat": 33,
    "tebu": 22,
    "sayur_sayuran": 19,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 29,
    "gudang_senjata": 6,
    "hangar_tank": 35,
    "akademi_militer": 32,
    "pusat_komando": 36,
    "pangkalan_udara": 33,
    "pangkalan_laut": 8,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 18,
    "anggaran_pertahanan": 27,
    "personel": 29923,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 21,
    "infanteri": 4,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 28,
        "apc": 152,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 22,
        "kapal_destroyer": 105,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 27,
        "helikopter_serang": 64,
        "pesawat_pengintai": 2
      },
      "total_unit": 26,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 1,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 36,
          "kamera_pengawas": 19,
          "pusat_forensik": 1
        },
        "waktu_respon": 32,
        "kepercayaan_publik": 50 },
    "intelijen": 27,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 20,
      "misi_mata_mata": 4,
      "misi_sabotase": 40,
      "manajemen_wilayah": 16,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 3,
      "sd": 31,
      "smp": 24,
      "sma": 13,
      "universitas": 17,
      "lembaga_pendidikan": 9,
      "laboratorium": 14,
      "observatorium": 1,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 13,
      "literasi": 78,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 17,
      "tempat_tidur_rs": 8470,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 4,
      "stadion": 17,
      "stadion_internasional": 38,
      "skor_olimpiade": 9,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 1,
      "kejaksaan": 17,
      "pos_polisi": 39,
      "armada_mobil_polisi": 5296,
      "akademi_polisi": 22,
      "indeks_korupsi": 78,
      "indeks_keamanan": 79
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 40,
      "kepuasan": 88,
      "pendapatan": 8
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
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 79,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 26,
    "komersial": 2,
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
      "kekuatan_lunak": 27,
      "kekuatan_keras": 6,
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
    "kesehatan": 37,
    "pendidikan": 17,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};
