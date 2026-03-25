import { CountryData } from "../../types";

export const kosovo: CountryData = {
  "name_en": "Kosovo",
  "capital": "Pristina",
  "name_id": "Kosovo",
  "lon": 21.166667,
  "lat": 42.666667,
  "flag": "🇽🇰",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 24,
    "pembangkit_air": 27,
    "pembangkit_surya": 16,
    "pembangkit_termal": 5,
    "pembangkit_gas": 22,
    "pembangkit_angin": 37,
    "jaringan_listrik": 83
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 10,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 13,
    "jalan_tol": 30,
    "kualitas_jalan": 75,
    "pelabuhan_laut": 36,
    "bandara": 24,
    "terminal_bus": 38,
    "helipad": 17,
    "cakupan_internet": 76,
    "indeks_teknologi": 78,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 36,
    "uranium": 23,
    "batu_bara": 10,
    "minyak_bumi": 8,
    "gas_alam": 7,
    "garam": 33,
    "nikel": 36,
    "litium": 21,
    "aluminium": 4,
    "tembaga": 13,
    "logam_tanah_jarang": 23,
    "bijih_besi": 28,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 4,
    "mobil": 2,
    "sepeda_motor": 8,
    "smelter": 18,
    "semen_beton": 4,
    "kayu": 40,
    "air_mineral": 38,
    "gula": 35,
    "roti": 23,
    "farmasi": 34,
    "pupuk": 37,
    "pengolahan_daging": 16,
    "mie_instan": 34,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 9,
    "unggas": 22,
    "sapi_perah": 22,
    "sapi_potong": 33,
    "domba_kambing": 7,
    "udang": 34,
    "ikan": 26,
    "kerang": 23,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 26,
    "gandum": 26,
    "jagung": 18,
    "umbi_umbian": 5,
    "kedelai": 33,
    "kelapa_sawit": 1,
    "teh": 34,
    "kopi": 37,
    "cokelat": 23,
    "tebu": 31,
    "sayur_sayuran": 25,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 39,
    "gudang_senjata": 13,
    "hangar_tank": 10,
    "akademi_militer": 30,
    "pusat_komando": 33,
    "pangkalan_udara": 38,
    "pangkalan_laut": 34,
    "program_luar_angkasa": 33,
    "pertahanan_siber": 9,
    "anggaran_pertahanan": 27,
    "personel": 8186,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 37,
    "infanteri": 7,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 44,
        "apc": 63,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 104,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 99,
        "helikopter_serang": 172,
        "pesawat_pengintai": 2
      },
      "total_unit": 16,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 0,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 16,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 35,
          "helikopter_polisi": 8,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 31,
          "pusat_forensik": 1
        },
        "waktu_respon": 11,
        "kepercayaan_publik": 50 },
    "intelijen": 7,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 4,
      "misi_sabotase": 37,
      "manajemen_wilayah": 6,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 4,
      "sd": 38,
      "smp": 37,
      "sma": 39,
      "universitas": 25,
      "lembaga_pendidikan": 2,
      "laboratorium": 9,
      "observatorium": 21,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 39,
      "literasi": 51,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 26,
      "pusat_diagnostik": 39,
      "tempat_tidur_rs": 1646,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 33,
      "stadion": 25,
      "stadion_internasional": 13,
      "skor_olimpiade": 3,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 16,
      "kejaksaan": 25,
      "pos_polisi": 18,
      "armada_mobil_polisi": 9952,
      "akademi_polisi": 26,
      "indeks_korupsi": 50,
      "indeks_keamanan": 93
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 0
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
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 72,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 37,
    "komersial": 3,
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
      "kekuatan_keras": 3,
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
    "kesehatan": 39,
    "pendidikan": 9,
    "keamanan": 33,
    "keuangan": 9,
    "lingkungan": 60
  }
};
