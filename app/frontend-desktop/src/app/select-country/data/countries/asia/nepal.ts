import { CountryData } from "../../types";

export const nepal: CountryData = {
  "name_en": "Nepal",
  "capital": "Kathmandu",
  "name_id": "Nepal",
  "lon": 84,
  "lat": 28,
  "flag": "🇳🇵",
  "jumlah_penduduk": 28087871,
  "anggaran": 389,
  "pendapatan_nasional": "1111",
  "religion": "Hindu",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 6,
    "pembangkit_air": 30,
    "pembangkit_surya": 29,
    "pembangkit_termal": 34,
    "pembangkit_gas": 32,
    "pembangkit_angin": 33,
    "jaringan_listrik": 80
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 15,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 32,
    "jalan_tol": 17,
    "kualitas_jalan": 89,
    "pelabuhan_laut": 8,
    "bandara": 39,
    "terminal_bus": 21,
    "helipad": 33,
    "cakupan_internet": 91,
    "indeks_teknologi": 89,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 29,
    "uranium": 12,
    "batu_bara": 1,
    "minyak_bumi": 6,
    "gas_alam": 36,
    "garam": 16,
    "nikel": 21,
    "litium": 3,
    "aluminium": 31,
    "tembaga": 4,
    "logam_tanah_jarang": 17,
    "bijih_besi": 30,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 11,
    "mobil": 36,
    "sepeda_motor": 18,
    "smelter": 19,
    "semen_beton": 2,
    "kayu": 14,
    "air_mineral": 4,
    "gula": 10,
    "roti": 9,
    "farmasi": 16,
    "pupuk": 29,
    "pengolahan_daging": 11,
    "mie_instan": 26,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 13,
    "unggas": 27,
    "sapi_perah": 29,
    "sapi_potong": 8,
    "domba_kambing": 14,
    "udang": 26,
    "ikan": 7,
    "kerang": 30,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 22,
    "gandum": 24,
    "jagung": 12,
    "umbi_umbian": 13,
    "kedelai": 24,
    "kelapa_sawit": 27,
    "teh": 36,
    "kopi": 10,
    "cokelat": 7,
    "tebu": 2,
    "sayur_sayuran": 11,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 2,
    "hangar_tank": 5,
    "akademi_militer": 31,
    "pusat_komando": 2,
    "pangkalan_udara": 15,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 35,
    "anggaran_pertahanan": 111,
    "personel": 17021,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 26,
    "infanteri": 29,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 160,
        "apc": 23,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 24,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 81,
        "helikopter_serang": 168,
        "pesawat_pengintai": 2
      },
      "total_unit": 3,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 1,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 40,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 37,
          "kamera_pengawas": 22,
          "pusat_forensik": 1
        },
        "waktu_respon": 23,
        "kepercayaan_publik": 50 },
    "intelijen": 38,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 17,
      "misi_sabotase": 31,
      "manajemen_wilayah": 40,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 16,
      "sd": 36,
      "smp": 18,
      "sma": 21,
      "universitas": 6,
      "lembaga_pendidikan": 35,
      "laboratorium": 22,
      "observatorium": 14,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 17,
      "literasi": 94,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 8,
      "pusat_diagnostik": 19,
      "tempat_tidur_rs": 2596,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 19,
      "stadion": 17,
      "stadion_internasional": 14,
      "skor_olimpiade": 9,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 29,
      "pengadilan": 34,
      "kejaksaan": 15,
      "pos_polisi": 16,
      "armada_mobil_polisi": 6669,
      "akademi_polisi": 20,
      "indeks_korupsi": 89,
      "indeks_keamanan": 78
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 16
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 6 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 967800
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 61,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 30,
    "komersial": 35,
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
      "kekuatan_keras": 14,
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
    "kesehatan": 30,
    "pendidikan": 32,
    "keamanan": 40,
    "keuangan": 25,
    "lingkungan": 60
  }
};
