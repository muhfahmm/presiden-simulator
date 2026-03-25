import { CountryData } from "../../types";

export const belize: CountryData = {
  "name_en": "Belize",
  "capital": "Belmopan",
  "name_id": "Belize",
  "lon": -88.75,
  "lat": 17.25,
  "flag": "🇧🇿",
  "jumlah_penduduk": 383071,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 25,
    "pembangkit_air": 16,
    "pembangkit_surya": 26,
    "pembangkit_termal": 6,
    "pembangkit_gas": 18,
    "pembangkit_angin": 19,
    "jaringan_listrik": 68
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 20,
    "kereta_bawah_tanah": 20,
    "jalur_kereta": 13,
    "jalan_tol": 20,
    "kualitas_jalan": 95,
    "pelabuhan_laut": 12,
    "bandara": 10,
    "terminal_bus": 12,
    "helipad": 39,
    "cakupan_internet": 77,
    "indeks_teknologi": 77,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 28,
    "uranium": 27,
    "batu_bara": 25,
    "minyak_bumi": 6,
    "gas_alam": 37,
    "garam": 10,
    "nikel": 13,
    "litium": 6,
    "aluminium": 12,
    "tembaga": 34,
    "logam_tanah_jarang": 36,
    "bijih_besi": 14,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 23,
    "mobil": 3,
    "sepeda_motor": 16,
    "smelter": 32,
    "semen_beton": 28,
    "kayu": 21,
    "air_mineral": 28,
    "gula": 7,
    "roti": 37,
    "farmasi": 28,
    "pupuk": 36,
    "pengolahan_daging": 10,
    "mie_instan": 24,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 30,
    "unggas": 17,
    "sapi_perah": 37,
    "sapi_potong": 13,
    "domba_kambing": 9,
    "udang": 39,
    "ikan": 6,
    "kerang": 36,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 18,
    "gandum": 18,
    "jagung": 31,
    "umbi_umbian": 6,
    "kedelai": 32,
    "kelapa_sawit": 4,
    "teh": 8,
    "kopi": 35,
    "cokelat": 23,
    "tebu": 13,
    "sayur_sayuran": 24,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 38,
    "gudang_senjata": 14,
    "hangar_tank": 14,
    "akademi_militer": 24,
    "pusat_komando": 39,
    "pangkalan_udara": 36,
    "pangkalan_laut": 32,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 17,
    "anggaran_pertahanan": 6,
    "personel": 8458,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 4,
    "infanteri": 17,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 40,
        "apc": 5,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 30,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 8,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2
      },
      "total_unit": 40,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 39,
      "jaringan_radar": 16,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 33,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
          "kamera_pengawas": 28,
          "pusat_forensik": 1
        },
        "waktu_respon": 22,
        "kepercayaan_publik": 50 },
    "intelijen": 14,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 10,
      "misi_sabotase": 36,
      "manajemen_wilayah": 36,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 9,
      "sd": 6,
      "smp": 13,
      "sma": 6,
      "universitas": 5,
      "lembaga_pendidikan": 37,
      "laboratorium": 40,
      "observatorium": 14,
      "pusat_penelitian": 19,
      "pusat_pengembangan": 26,
      "literasi": 64,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 8,
      "pusat_diagnostik": 2,
      "tempat_tidur_rs": 9761,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 10,
      "sirkuit_balap": 15,
      "stadion": 32,
      "stadion_internasional": 3,
      "skor_olimpiade": 37,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 30,
      "kejaksaan": 31,
      "pos_polisi": 31,
      "armada_mobil_polisi": 5370,
      "akademi_polisi": 8,
      "indeks_korupsi": 80,
      "indeks_keamanan": 63
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 24,
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
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 56,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 9,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 29,
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
    "kesehatan": 23,
    "pendidikan": 29,
    "keamanan": 34,
    "keuangan": 27,
    "lingkungan": 60
  }
};
