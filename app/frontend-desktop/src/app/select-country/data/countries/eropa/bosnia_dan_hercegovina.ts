import { CountryData } from "../../types";

export const bosnia_dan_hercegovina: CountryData = {
  "name_en": "Bosnia and Herzegovina",
  "capital": "Sarajevo",
  "name_id": "Bosnia dan hercegovina",
  "lon": 18,
  "lat": 44,
  "flag": "🇧🇦",
  "jumlah_penduduk": 3323929,
  "anggaran": 233,
  "pendapatan_nasional": "667",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 26,
    "pembangkit_air": 38,
    "pembangkit_surya": 5,
    "pembangkit_termal": 13,
    "pembangkit_gas": 29,
    "pembangkit_angin": 23,
    "jaringan_listrik": 50
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 39,
    "kereta_bawah_tanah": 9,
    "jalur_kereta": 12,
    "jalan_tol": 12,
    "kualitas_jalan": 71,
    "pelabuhan_laut": 33,
    "bandara": 14,
    "terminal_bus": 35,
    "helipad": 29,
    "cakupan_internet": 65,
    "indeks_teknologi": 82,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 19,
    "uranium": 1,
    "batu_bara": 15,
    "minyak_bumi": 12,
    "gas_alam": 29,
    "garam": 38,
    "nikel": 7,
    "litium": 6,
    "aluminium": 2,
    "tembaga": 19,
    "logam_tanah_jarang": 16,
    "bijih_besi": 30,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 2,
    "mobil": 13,
    "sepeda_motor": 28,
    "smelter": 37,
    "semen_beton": 26,
    "kayu": 28,
    "air_mineral": 2,
    "gula": 23,
    "roti": 12,
    "farmasi": 5,
    "pupuk": 33,
    "pengolahan_daging": 30,
    "mie_instan": 22,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 4,
    "unggas": 21,
    "sapi_perah": 10,
    "sapi_potong": 19,
    "domba_kambing": 34,
    "udang": 5,
    "ikan": 35,
    "kerang": 33,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 39,
    "gandum": 36,
    "jagung": 33,
    "umbi_umbian": 8,
    "kedelai": 5,
    "kelapa_sawit": 25,
    "teh": 19,
    "kopi": 36,
    "cokelat": 14,
    "tebu": 37,
    "sayur_sayuran": 4,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 30,
    "gudang_senjata": 9,
    "hangar_tank": 37,
    "akademi_militer": 30,
    "pusat_komando": 35,
    "pangkalan_udara": 16,
    "pangkalan_laut": 22,
    "program_luar_angkasa": 24,
    "pertahanan_siber": 40,
    "anggaran_pertahanan": 66,
    "personel": 21185,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 6,
    "infanteri": 17,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 37,
        "apc": 33,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 11,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 28,
        "helikopter_serang": 20,
        "pesawat_pengintai": 2
      },
      "total_unit": 38,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 29,
      "jaringan_radar": 19,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 18,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 7,
          "pusat_forensik": 1
        },
        "waktu_respon": 29,
        "kepercayaan_publik": 50 },
    "intelijen": 9,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 22,
      "misi_sabotase": 11,
      "manajemen_wilayah": 15,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 40,
      "sd": 35,
      "smp": 34,
      "sma": 5,
      "universitas": 25,
      "lembaga_pendidikan": 37,
      "laboratorium": 5,
      "observatorium": 6,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 40,
      "literasi": 81,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 7,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 18,
      "tempat_tidur_rs": 7434,
      "harapan_hidup": 34,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 16,
      "stadion": 27,
      "stadion_internasional": 34,
      "skor_olimpiade": 18,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 4,
      "kejaksaan": 28,
      "pos_polisi": 19,
      "armada_mobil_polisi": 6801,
      "akademi_polisi": 2,
      "indeks_korupsi": 94,
      "indeks_keamanan": 70
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 59,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 9,
    "komersial": 4,
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
      "kekuatan_lunak": 39,
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
    "kesehatan": 15,
    "pendidikan": 19,
    "keamanan": 36,
    "keuangan": 24,
    "lingkungan": 60
  }
};
