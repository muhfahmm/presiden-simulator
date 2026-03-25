import { CountryData } from "../../types";

export const estonia: CountryData = {
  "name_en": "Estonia",
  "capital": "Tallinn",
  "name_id": "Estonia",
  "lon": 26,
  "lat": 59,
  "flag": "🇪🇪",
  "jumlah_penduduk": 1321977,
  "anggaran": 389,
  "pendapatan_nasional": "1111",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 40,
    "pembangkit_surya": 2,
    "pembangkit_termal": 27,
    "pembangkit_gas": 8,
    "pembangkit_angin": 35,
    "jaringan_listrik": 91
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 26,
    "kereta_bawah_tanah": 32,
    "jalur_kereta": 39,
    "jalan_tol": 35,
    "kualitas_jalan": 51,
    "pelabuhan_laut": 18,
    "bandara": 14,
    "terminal_bus": 2,
    "helipad": 19,
    "cakupan_internet": 59,
    "indeks_teknologi": 78,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 35,
    "uranium": 9,
    "batu_bara": 7,
    "minyak_bumi": 13,
    "gas_alam": 8,
    "garam": 30,
    "nikel": 21,
    "litium": 15,
    "aluminium": 33,
    "tembaga": 40,
    "logam_tanah_jarang": 27,
    "bijih_besi": 14,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 9,
    "mobil": 15,
    "sepeda_motor": 6,
    "smelter": 23,
    "semen_beton": 18,
    "kayu": 19,
    "air_mineral": 14,
    "gula": 3,
    "roti": 25,
    "farmasi": 12,
    "pupuk": 11,
    "pengolahan_daging": 27,
    "mie_instan": 27,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 29,
    "unggas": 26,
    "sapi_perah": 34,
    "sapi_potong": 5,
    "domba_kambing": 28,
    "udang": 14,
    "ikan": 1,
    "kerang": 9,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 40,
    "gandum": 38,
    "jagung": 38,
    "umbi_umbian": 34,
    "kedelai": 14,
    "kelapa_sawit": 29,
    "teh": 19,
    "kopi": 26,
    "cokelat": 1,
    "tebu": 34,
    "sayur_sayuran": 23,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 40,
    "gudang_senjata": 8,
    "hangar_tank": 11,
    "akademi_militer": 33,
    "pusat_komando": 33,
    "pangkalan_udara": 18,
    "pangkalan_laut": 23,
    "program_luar_angkasa": 27,
    "pertahanan_siber": 7,
    "anggaran_pertahanan": 111,
    "personel": 21911,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 31,
    "infanteri": 16,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 22,
        "apc": 13,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 36,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 4,
        "helikopter_serang": 37,
        "pesawat_pengintai": 2
      },
      "total_unit": 5,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 9,
      "jaringan_radar": 8,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 25,
          "pusat_forensik": 1
        },
        "waktu_respon": 17,
        "kepercayaan_publik": 50 },
    "intelijen": 16,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 7,
      "misi_mata_mata": 19,
      "misi_sabotase": 8,
      "manajemen_wilayah": 1,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 20,
      "sd": 1,
      "smp": 8,
      "sma": 19,
      "universitas": 27,
      "lembaga_pendidikan": 12,
      "laboratorium": 8,
      "observatorium": 9,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 20,
      "literasi": 88,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 8,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 10,
      "tempat_tidur_rs": 7708,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 21,
      "stadion": 20,
      "stadion_internasional": 30,
      "skor_olimpiade": 10,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 12,
      "kejaksaan": 36,
      "pos_polisi": 22,
      "armada_mobil_polisi": 2522,
      "akademi_polisi": 4,
      "indeks_korupsi": 57,
      "indeks_keamanan": 95
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
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 23
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 6 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 19
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 7200,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 67,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 24,
    "komersial": 18,
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
      "kekuatan_lunak": 38,
      "kekuatan_keras": 21,
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
    "kesehatan": 2,
    "pendidikan": 23,
    "keamanan": 14,
    "keuangan": 12,
    "lingkungan": 60
  }
};
