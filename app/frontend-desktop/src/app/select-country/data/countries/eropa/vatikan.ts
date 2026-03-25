import { CountryData } from "../../types";

export const vatikan: CountryData = {
  "name_en": "Vatican City",
  "capital": "Vatican City",
  "name_id": "Vatikan",
  "lon": 12.45,
  "lat": 41.9,
  "flag": "🇻🇦",
  "jumlah_penduduk": 825,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 26,
    "pembangkit_air": 31,
    "pembangkit_surya": 33,
    "pembangkit_termal": 2,
    "pembangkit_gas": 11,
    "pembangkit_angin": 7,
    "jaringan_listrik": 54
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 22,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 26,
    "jalan_tol": 34,
    "kualitas_jalan": 51,
    "pelabuhan_laut": 23,
    "bandara": 5,
    "terminal_bus": 16,
    "helipad": 29,
    "cakupan_internet": 91,
    "indeks_teknologi": 61,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 14,
    "uranium": 13,
    "batu_bara": 34,
    "minyak_bumi": 35,
    "gas_alam": 17,
    "garam": 29,
    "nikel": 38,
    "litium": 9,
    "aluminium": 1,
    "tembaga": 36,
    "logam_tanah_jarang": 17,
    "bijih_besi": 13,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 23,
    "mobil": 38,
    "sepeda_motor": 10,
    "smelter": 15,
    "semen_beton": 14,
    "kayu": 8,
    "air_mineral": 3,
    "gula": 23,
    "roti": 18,
    "farmasi": 40,
    "pupuk": 22,
    "pengolahan_daging": 17,
    "mie_instan": 15,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 27,
    "unggas": 3,
    "sapi_perah": 16,
    "sapi_potong": 20,
    "domba_kambing": 27,
    "udang": 23,
    "ikan": 28,
    "kerang": 22,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 4,
    "gandum": 32,
    "jagung": 26,
    "umbi_umbian": 31,
    "kedelai": 4,
    "kelapa_sawit": 3,
    "teh": 30,
    "kopi": 21,
    "cokelat": 26,
    "tebu": 12,
    "sayur_sayuran": 1,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 26,
    "hangar_tank": 2,
    "akademi_militer": 30,
    "pusat_komando": 2,
    "pangkalan_udara": 1,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 2,
    "pertahanan_siber": 6,
    "anggaran_pertahanan": 27,
    "personel": 25857,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 29,
    "infanteri": 26,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 101,
        "apc": 91,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 197,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 131,
        "helikopter_serang": 47,
        "pesawat_pengintai": 2
      },
      "total_unit": 34,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 23,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 30,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 5,
          "kamera_pengawas": 13,
          "pusat_forensik": 1
        },
        "waktu_respon": 37,
        "kepercayaan_publik": 50 },
    "intelijen": 39,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 39,
      "misi_mata_mata": 28,
      "misi_sabotase": 23,
      "manajemen_wilayah": 25,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 11,
      "sd": 10,
      "smp": 4,
      "sma": 33,
      "universitas": 11,
      "lembaga_pendidikan": 20,
      "laboratorium": 33,
      "observatorium": 20,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 18,
      "literasi": 66,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 4,
      "tempat_tidur_rs": 6437,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 12,
      "sirkuit_balap": 13,
      "stadion": 33,
      "stadion_internasional": 23,
      "skor_olimpiade": 16,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 30,
      "kejaksaan": 38,
      "pos_polisi": 29,
      "armada_mobil_polisi": 1565,
      "akademi_polisi": 33,
      "indeks_korupsi": 55,
      "indeks_keamanan": 74
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
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
    "harga_daging_sapi": 52050,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 60,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 39,
    "komersial": 19,
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 24,
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
    "kesehatan": 17,
    "pendidikan": 23,
    "keamanan": 35,
    "keuangan": 17,
    "lingkungan": 60
  }
};
