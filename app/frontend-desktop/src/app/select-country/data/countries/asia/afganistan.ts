import { CountryData } from "../../types";

export const afganistan: CountryData = {
  "name_en": "Afghanistan",
  "capital": "Kabul",
  "name_id": "Afganistan",
  "lon": 69.16,
  "lat": 34.54,
  "flag": "🇦🇫",
  "jumlah_penduduk": 37172386,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Islam",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 29,
    "pembangkit_air": 27,
    "pembangkit_surya": 33,
    "pembangkit_termal": 1,
    "pembangkit_gas": 5,
    "pembangkit_angin": 27,
    "jaringan_listrik": 82
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 9,
    "kereta_bawah_tanah": 28,
    "jalur_kereta": 19,
    "jalan_tol": 17,
    "kualitas_jalan": 58,
    "pelabuhan_laut": 36,
    "bandara": 38,
    "terminal_bus": 30,
    "helipad": 17,
    "cakupan_internet": 53,
    "indeks_teknologi": 91,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 27,
    "uranium": 32,
    "batu_bara": 28,
    "minyak_bumi": 9,
    "gas_alam": 12,
    "garam": 26,
    "nikel": 18,
    "litium": 13,
    "aluminium": 12,
    "tembaga": 34,
    "logam_tanah_jarang": 38,
    "bijih_besi": 11,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 19,
    "mobil": 18,
    "sepeda_motor": 16,
    "smelter": 24,
    "semen_beton": 13,
    "kayu": 2,
    "air_mineral": 35,
    "gula": 6,
    "roti": 4,
    "farmasi": 9,
    "pupuk": 9,
    "pengolahan_daging": 31,
    "mie_instan": 12,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 30,
    "unggas": 1,
    "sapi_perah": 32,
    "sapi_potong": 24,
    "domba_kambing": 4,
    "udang": 3,
    "ikan": 35,
    "kerang": 5,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 26,
    "gandum": 2,
    "jagung": 1,
    "umbi_umbian": 7,
    "kedelai": 34,
    "kelapa_sawit": 21,
    "teh": 14,
    "kopi": 33,
    "cokelat": 29,
    "tebu": 23,
    "sayur_sayuran": 10,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 16,
    "gudang_senjata": 17,
    "hangar_tank": 7,
    "akademi_militer": 9,
    "pusat_komando": 34,
    "pangkalan_udara": 28,
    "pangkalan_laut": 14,
    "program_luar_angkasa": 38,
    "pertahanan_siber": 22,
    "anggaran_pertahanan": 41,
    "personel": 20991,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 25,
    "infanteri": 15,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 36,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 29,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 7,
        "helikopter_serang": 16,
        "pesawat_pengintai": 2
      },
      "total_unit": 16,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 8,
      "jaringan_radar": 25,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 9,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 16,
          "kamera_pengawas": 38,
          "pusat_forensik": 1
        },
        "waktu_respon": 24,
        "kepercayaan_publik": 50 },
    "intelijen": 16,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 33,
      "misi_mata_mata": 3,
      "misi_sabotase": 9,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 30,
      "sd": 21,
      "smp": 33,
      "sma": 11,
      "universitas": 30,
      "lembaga_pendidikan": 9,
      "laboratorium": 28,
      "observatorium": 25,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 13,
      "literasi": 70,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 16,
      "pusat_diagnostik": 25,
      "tempat_tidur_rs": 6565,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 32,
      "stadion": 11,
      "stadion_internasional": 33,
      "skor_olimpiade": 27,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 25,
      "pengadilan": 33,
      "kejaksaan": 14,
      "pos_polisi": 40,
      "armada_mobil_polisi": 7082,
      "akademi_polisi": 33,
      "indeks_korupsi": 91,
      "indeks_keamanan": 57
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
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 76,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 4,
    "komersial": 11,
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
      "kekuatan_lunak": 25,
      "kekuatan_keras": 22,
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
    "kesehatan": 33,
    "pendidikan": 28,
    "keamanan": 19,
    "keuangan": 39,
    "lingkungan": 60
  }
};
