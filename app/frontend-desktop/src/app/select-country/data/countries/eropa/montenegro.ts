import { CountryData } from "../../types";

export const montenegro: CountryData = {
  "name_en": "Montenegro",
  "capital": "Podgorica",
  "name_id": "Montenegro",
  "lon": 19.3,
  "lat": 42.5,
  "flag": "🇲🇪",
  "jumlah_penduduk": 631219,
  "anggaran": 68,
  "pendapatan_nasional": "194",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 14,
    "pembangkit_air": 32,
    "pembangkit_surya": 37,
    "pembangkit_termal": 10,
    "pembangkit_gas": 32,
    "pembangkit_angin": 5,
    "jaringan_listrik": 73
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 15,
    "kereta_bawah_tanah": 6,
    "jalur_kereta": 26,
    "jalan_tol": 1,
    "kualitas_jalan": 72,
    "pelabuhan_laut": 3,
    "bandara": 8,
    "terminal_bus": 40,
    "helipad": 7,
    "cakupan_internet": 74,
    "indeks_teknologi": 67,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 25,
    "uranium": 13,
    "batu_bara": 6,
    "minyak_bumi": 7,
    "gas_alam": 15,
    "garam": 10,
    "nikel": 13,
    "litium": 15,
    "aluminium": 31,
    "tembaga": 11,
    "logam_tanah_jarang": 33,
    "bijih_besi": 34,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 17,
    "mobil": 9,
    "sepeda_motor": 9,
    "smelter": 19,
    "semen_beton": 27,
    "kayu": 19,
    "air_mineral": 29,
    "gula": 3,
    "roti": 32,
    "farmasi": 12,
    "pupuk": 31,
    "pengolahan_daging": 17,
    "mie_instan": 11,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 37,
    "unggas": 26,
    "sapi_perah": 1,
    "sapi_potong": 25,
    "domba_kambing": 1,
    "udang": 23,
    "ikan": 12,
    "kerang": 31,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 23,
    "gandum": 32,
    "jagung": 12,
    "umbi_umbian": 6,
    "kedelai": 29,
    "kelapa_sawit": 20,
    "teh": 34,
    "kopi": 5,
    "cokelat": 22,
    "tebu": 17,
    "sayur_sayuran": 24,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 4,
    "gudang_senjata": 19,
    "hangar_tank": 30,
    "akademi_militer": 4,
    "pusat_komando": 3,
    "pangkalan_udara": 37,
    "pangkalan_laut": 21,
    "program_luar_angkasa": 38,
    "pertahanan_siber": 12,
    "anggaran_pertahanan": 19,
    "personel": 12867,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 22,
    "infanteri": 33,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 16,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 99,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 35,
        "helikopter_serang": 177,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 4,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 35,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 9,
          "kamera_pengawas": 20,
          "pusat_forensik": 1
        },
        "waktu_respon": 20,
        "kepercayaan_publik": 50 },
    "intelijen": 13,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 1,
      "misi_sabotase": 7,
      "manajemen_wilayah": 15,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 3,
      "sd": 11,
      "smp": 7,
      "sma": 34,
      "universitas": 20,
      "lembaga_pendidikan": 9,
      "laboratorium": 19,
      "observatorium": 38,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 20,
      "literasi": 83,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 2,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 4,
      "tempat_tidur_rs": 3768,
      "harapan_hidup": 4,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 23,
      "sirkuit_balap": 1,
      "stadion": 7,
      "stadion_internasional": 7,
      "skor_olimpiade": 22,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 12,
      "kejaksaan": 37,
      "pos_polisi": 3,
      "armada_mobil_polisi": 5087,
      "akademi_polisi": 14,
      "indeks_korupsi": 95,
      "indeks_keamanan": 72
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 4
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
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
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
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 84,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 34,
    "komersial": 34,
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
      "kekuatan_lunak": 21,
      "kekuatan_keras": 34,
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
    "pendidikan": 39,
    "keamanan": 9,
    "keuangan": 21,
    "lingkungan": 60
  }
};
