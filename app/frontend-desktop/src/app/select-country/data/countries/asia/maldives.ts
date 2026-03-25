import { CountryData } from "../../types";

export const maldives: CountryData = {
  "name_en": "Maldives",
  "capital": "Malé",
  "name_id": "Maldives",
  "lon": 73.3,
  "lat": 4.1,
  "flag": "🇲🇻",
  "jumlah_penduduk": 515696,
  "anggaran": 63,
  "pendapatan_nasional": "181",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 31,
    "pembangkit_air": 26,
    "pembangkit_surya": 29,
    "pembangkit_termal": 18,
    "pembangkit_gas": 25,
    "pembangkit_angin": 9,
    "jaringan_listrik": 81
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 39,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 18,
    "jalan_tol": 38,
    "kualitas_jalan": 75,
    "pelabuhan_laut": 27,
    "bandara": 29,
    "terminal_bus": 31,
    "helipad": 18,
    "cakupan_internet": 73,
    "indeks_teknologi": 52,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 34,
    "uranium": 39,
    "batu_bara": 34,
    "minyak_bumi": 26,
    "gas_alam": 22,
    "garam": 1,
    "nikel": 7,
    "litium": 19,
    "aluminium": 21,
    "tembaga": 7,
    "logam_tanah_jarang": 2,
    "bijih_besi": 5,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 39,
    "mobil": 16,
    "sepeda_motor": 27,
    "smelter": 38,
    "semen_beton": 12,
    "kayu": 25,
    "air_mineral": 6,
    "gula": 32,
    "roti": 31,
    "farmasi": 22,
    "pupuk": 35,
    "pengolahan_daging": 32,
    "mie_instan": 29,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 2,
    "unggas": 28,
    "sapi_perah": 26,
    "sapi_potong": 7,
    "domba_kambing": 33,
    "udang": 3,
    "ikan": 12,
    "kerang": 11,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 36,
    "gandum": 29,
    "jagung": 20,
    "umbi_umbian": 6,
    "kedelai": 17,
    "kelapa_sawit": 7,
    "teh": 18,
    "kopi": 3,
    "cokelat": 39,
    "tebu": 11,
    "sayur_sayuran": 32,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 9,
    "gudang_senjata": 2,
    "hangar_tank": 8,
    "akademi_militer": 14,
    "pusat_komando": 37,
    "pangkalan_udara": 19,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 28,
    "pertahanan_siber": 33,
    "anggaran_pertahanan": 18,
    "personel": 8232,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 27,
    "infanteri": 18,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 34,
        "apc": 20,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 12,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 22,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 14,
      "jaringan_radar": 27,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 34,
          "kamera_pengawas": 4,
          "pusat_forensik": 1
        },
        "waktu_respon": 10,
        "kepercayaan_publik": 50 },
    "intelijen": 33,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 6,
      "misi_mata_mata": 7,
      "misi_sabotase": 9,
      "manajemen_wilayah": 36,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 27,
      "sd": 10,
      "smp": 37,
      "sma": 30,
      "universitas": 32,
      "lembaga_pendidikan": 21,
      "laboratorium": 29,
      "observatorium": 37,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 5,
      "literasi": 94,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 20,
      "tempat_tidur_rs": 4116,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 16,
      "stadion": 12,
      "stadion_internasional": 7,
      "skor_olimpiade": 38,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 38,
      "kejaksaan": 8,
      "pos_polisi": 30,
      "armada_mobil_polisi": 8491,
      "akademi_polisi": 9,
      "indeks_korupsi": 85,
      "indeks_keamanan": 80
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
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 3200,
    "harga_air": 2600,
    "harga_obat": 78950,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 94,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 6,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 27,
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
    "kesehatan": 27,
    "pendidikan": 4,
    "keamanan": 34,
    "keuangan": 14,
    "lingkungan": 60
  }
};
