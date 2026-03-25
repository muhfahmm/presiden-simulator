import { CountryData } from "../../types";

export const greenland: CountryData = {
  "name_en": "Greenland",
  "capital": "Nuuk",
  "name_id": "Greenland",
  "lon": -40,
  "lat": 72,
  "flag": "🇬🇱",
  "jumlah_penduduk": 56025,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 27,
    "pembangkit_air": 9,
    "pembangkit_surya": 21,
    "pembangkit_termal": 4,
    "pembangkit_gas": 40,
    "pembangkit_angin": 25,
    "jaringan_listrik": 89
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 35,
    "kereta_bawah_tanah": 20,
    "jalur_kereta": 33,
    "jalan_tol": 1,
    "kualitas_jalan": 69,
    "pelabuhan_laut": 6,
    "bandara": 6,
    "terminal_bus": 25,
    "helipad": 27,
    "cakupan_internet": 94,
    "indeks_teknologi": 71,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 24,
    "uranium": 29,
    "batu_bara": 24,
    "minyak_bumi": 39,
    "gas_alam": 16,
    "garam": 25,
    "nikel": 3,
    "litium": 26,
    "aluminium": 32,
    "tembaga": 12,
    "logam_tanah_jarang": 10,
    "bijih_besi": 17,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 21,
    "mobil": 30,
    "sepeda_motor": 20,
    "smelter": 21,
    "semen_beton": 25,
    "kayu": 39,
    "air_mineral": 23,
    "gula": 10,
    "roti": 24,
    "farmasi": 1,
    "pupuk": 7,
    "pengolahan_daging": 24,
    "mie_instan": 11,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 8,
    "unggas": 3,
    "sapi_perah": 29,
    "sapi_potong": 33,
    "domba_kambing": 3,
    "udang": 6,
    "ikan": 14,
    "kerang": 23,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 32,
    "gandum": 17,
    "jagung": 31,
    "umbi_umbian": 28,
    "kedelai": 13,
    "kelapa_sawit": 27,
    "teh": 28,
    "kopi": 29,
    "cokelat": 22,
    "tebu": 4,
    "sayur_sayuran": 31,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 2,
    "gudang_senjata": 6,
    "hangar_tank": 11,
    "akademi_militer": 30,
    "pusat_komando": 23,
    "pangkalan_udara": 40,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 19,
    "anggaran_pertahanan": 27,
    "personel": 5611,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 31,
    "infanteri": 19,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 164,
        "apc": 78,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 11,
        "kapal_destroyer": 195,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 60,
        "helikopter_serang": 48,
        "pesawat_pengintai": 2
      },
      "total_unit": 39,
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
          "mobil_patroli": 35,
          "sepeda_motor": 3,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 37,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 5,
          "kamera_pengawas": 32,
          "pusat_forensik": 1
        },
        "waktu_respon": 18,
        "kepercayaan_publik": 50 },
    "intelijen": 3,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 28,
      "misi_mata_mata": 36,
      "misi_sabotase": 4,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 5,
      "sd": 22,
      "smp": 27,
      "sma": 1,
      "universitas": 29,
      "lembaga_pendidikan": 21,
      "laboratorium": 11,
      "observatorium": 14,
      "pusat_penelitian": 4,
      "pusat_pengembangan": 10,
      "literasi": 81,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 10,
      "pusat_diagnostik": 22,
      "tempat_tidur_rs": 7955,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 16,
      "stadion": 2,
      "stadion_internasional": 17,
      "skor_olimpiade": 4,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 8,
      "kejaksaan": 16,
      "pos_polisi": 32,
      "armada_mobil_polisi": 8496,
      "akademi_polisi": 24,
      "indeks_korupsi": 66,
      "indeks_keamanan": 50
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 5
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 157900,
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
    "perumahan": 16,
    "komersial": 17,
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
      "kekuatan_lunak": 6,
      "kekuatan_keras": 33,
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
    "kesehatan": 40,
    "pendidikan": 18,
    "keamanan": 38,
    "keuangan": 32,
    "lingkungan": 60
  }
};
