import { CountryData } from "../../types";

export const irak: CountryData = {
  "name_en": "Iraq",
  "capital": "Baghdad",
  "name_id": "Irak",
  "lon": 44,
  "lat": 33,
  "flag": "🇮🇶",
  "jumlah_penduduk": 38433600,
  "anggaran": 2606,
  "pendapatan_nasional": "7445",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 36,
    "pembangkit_air": 26,
    "pembangkit_surya": 13,
    "pembangkit_termal": 21,
    "pembangkit_gas": 2,
    "pembangkit_angin": 14,
    "jaringan_listrik": 58
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 38,
    "kereta_bawah_tanah": 32,
    "jalur_kereta": 39,
    "jalan_tol": 38,
    "kualitas_jalan": 82,
    "pelabuhan_laut": 22,
    "bandara": 30,
    "terminal_bus": 30,
    "helipad": 24,
    "cakupan_internet": 75,
    "indeks_teknologi": 81,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 4,
    "uranium": 23,
    "batu_bara": 17,
    "minyak_bumi": 40,
    "gas_alam": 40,
    "garam": 34,
    "nikel": 33,
    "litium": 33,
    "aluminium": 29,
    "tembaga": 29,
    "logam_tanah_jarang": 7,
    "bijih_besi": 6,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 26,
    "mobil": 5,
    "sepeda_motor": 5,
    "smelter": 10,
    "semen_beton": 17,
    "kayu": 33,
    "air_mineral": 12,
    "gula": 37,
    "roti": 26,
    "farmasi": 40,
    "pupuk": 32,
    "pengolahan_daging": 5,
    "mie_instan": 30,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 24,
    "unggas": 20,
    "sapi_perah": 8,
    "sapi_potong": 15,
    "domba_kambing": 30,
    "udang": 38,
    "ikan": 7,
    "kerang": 8,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 29,
    "gandum": 1,
    "jagung": 3,
    "umbi_umbian": 26,
    "kedelai": 10,
    "kelapa_sawit": 27,
    "teh": 1,
    "kopi": 7,
    "cokelat": 28,
    "tebu": 7,
    "sayur_sayuran": 12,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 13,
    "gudang_senjata": 9,
    "hangar_tank": 18,
    "akademi_militer": 12,
    "pusat_komando": 35,
    "pangkalan_udara": 18,
    "pangkalan_laut": 8,
    "program_luar_angkasa": 29,
    "pertahanan_siber": 18,
    "anggaran_pertahanan": 744,
    "personel": 28713,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 30,
    "infanteri": 40,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 13,
        "apc": 37,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 17,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 38,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 38,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 25,
          "kamera_pengawas": 27,
          "pusat_forensik": 1
        },
        "waktu_respon": 12,
        "kepercayaan_publik": 50 },
    "intelijen": 23,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 33,
      "misi_sabotase": 16,
      "manajemen_wilayah": 13,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 29,
      "sd": 5,
      "smp": 10,
      "sma": 29,
      "universitas": 1,
      "lembaga_pendidikan": 7,
      "laboratorium": 38,
      "observatorium": 12,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 38,
      "literasi": 66,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 35,
      "tempat_tidur_rs": 2970,
      "harapan_hidup": 29,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 21,
      "stadion": 23,
      "stadion_internasional": 23,
      "skor_olimpiade": 7,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 38,
      "pengadilan": 10,
      "kejaksaan": 15,
      "pos_polisi": 8,
      "armada_mobil_polisi": 7592,
      "akademi_polisi": 14,
      "indeks_korupsi": 87,
      "indeks_keamanan": 64
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 301
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 224
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 40 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 190
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 58,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 19,
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
      "kekuatan_lunak": 22,
      "kekuatan_keras": 7,
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
    "kesehatan": 11,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 5,
    "lingkungan": 60
  }
};
