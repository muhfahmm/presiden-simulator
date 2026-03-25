import { CountryData } from "../../types";

export const belgia: CountryData = {
  "name_en": "Belgium",
  "capital": "Brussels",
  "name_id": "Belgia",
  "lon": 4,
  "lat": 50.83333333,
  "flag": "🇧🇪",
  "jumlah_penduduk": 11433256,
  "anggaran": 6077,
  "pendapatan_nasional": "17362",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 7,
    "pembangkit_air": 13,
    "pembangkit_surya": 36,
    "pembangkit_termal": 23,
    "pembangkit_gas": 2,
    "pembangkit_angin": 29,
    "jaringan_listrik": 56
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 7,
    "kereta_bawah_tanah": 18,
    "jalur_kereta": 35,
    "jalan_tol": 5,
    "kualitas_jalan": 78,
    "pelabuhan_laut": 36,
    "bandara": 33,
    "terminal_bus": 40,
    "helipad": 11,
    "cakupan_internet": 91,
    "indeks_teknologi": 84,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 24,
    "uranium": 39,
    "batu_bara": 23,
    "minyak_bumi": 11,
    "gas_alam": 38,
    "garam": 11,
    "nikel": 26,
    "litium": 8,
    "aluminium": 9,
    "tembaga": 16,
    "logam_tanah_jarang": 32,
    "bijih_besi": 27,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 18,
    "mobil": 15,
    "sepeda_motor": 12,
    "smelter": 28,
    "semen_beton": 32,
    "kayu": 34,
    "air_mineral": 26,
    "gula": 33,
    "roti": 37,
    "farmasi": 39,
    "pupuk": 38,
    "pengolahan_daging": 2,
    "mie_instan": 15,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 10,
    "unggas": 10,
    "sapi_perah": 31,
    "sapi_potong": 10,
    "domba_kambing": 24,
    "udang": 20,
    "ikan": 39,
    "kerang": 33,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 23,
    "gandum": 33,
    "jagung": 23,
    "umbi_umbian": 28,
    "kedelai": 14,
    "kelapa_sawit": 27,
    "teh": 8,
    "kopi": 19,
    "cokelat": 9,
    "tebu": 30,
    "sayur_sayuran": 31,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 2,
    "hangar_tank": 22,
    "akademi_militer": 20,
    "pusat_komando": 23,
    "pangkalan_udara": 6,
    "pangkalan_laut": 28,
    "program_luar_angkasa": 31,
    "pertahanan_siber": 6,
    "anggaran_pertahanan": 1736,
    "personel": 17011,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 27,
    "infanteri": 30,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 8,
        "apc": 4,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 37,
        "helikopter_serang": 7,
        "pesawat_pengintai": 2
      },
      "total_unit": 8,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 27,
      "jaringan_radar": 15,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 13,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 7,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 19,
          "kamera_pengawas": 6,
          "pusat_forensik": 1
        },
        "waktu_respon": 7,
        "kepercayaan_publik": 50 },
    "intelijen": 36,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 34,
      "misi_mata_mata": 27,
      "misi_sabotase": 1,
      "manajemen_wilayah": 23,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 7,
      "sd": 30,
      "smp": 12,
      "sma": 21,
      "universitas": 34,
      "lembaga_pendidikan": 2,
      "laboratorium": 32,
      "observatorium": 17,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 38,
      "literasi": 82,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 36,
      "tempat_tidur_rs": 6128,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 36,
      "stadion": 34,
      "stadion_internasional": 11,
      "skor_olimpiade": 8,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 13,
      "kejaksaan": 24,
      "pos_polisi": 7,
      "armada_mobil_polisi": 1272,
      "akademi_polisi": 18,
      "indeks_korupsi": 77,
      "indeks_keamanan": 76
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
      "pendapatan": 101
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 194
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 83
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 555
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 31 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 92 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 146
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
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
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
    "perumahan": 29,
    "komersial": 10,
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
      "kekuatan_keras": 2,
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
    "pendidikan": 26,
    "keamanan": 34,
    "keuangan": 20,
    "lingkungan": 60
  }
};
