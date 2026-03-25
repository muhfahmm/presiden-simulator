import { CountryData } from "../../types";

export const jerman: CountryData = {
  "name_en": "Germany",
  "capital": "Berlin",
  "name_id": "Jerman",
  "lon": 9,
  "lat": 51,
  "flag": "🇩🇪",
  "jumlah_penduduk": 82905782,
  "anggaran": 44629,
  "pendapatan_nasional": "127510",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 30,
    "pembangkit_air": 38,
    "pembangkit_surya": 17,
    "pembangkit_termal": 20,
    "pembangkit_gas": 37,
    "pembangkit_angin": 36,
    "jaringan_listrik": 51
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 28,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 4,
    "jalan_tol": 1,
    "kualitas_jalan": 63,
    "pelabuhan_laut": 13,
    "bandara": 4,
    "terminal_bus": 38,
    "helipad": 19,
    "cakupan_internet": 63,
    "indeks_teknologi": 55,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 14,
    "uranium": 14,
    "batu_bara": 1,
    "minyak_bumi": 7,
    "gas_alam": 24,
    "garam": 28,
    "nikel": 3,
    "litium": 14,
    "aluminium": 36,
    "tembaga": 20,
    "logam_tanah_jarang": 8,
    "bijih_besi": 27,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 33,
    "mobil": 31,
    "sepeda_motor": 16,
    "smelter": 34,
    "semen_beton": 31,
    "kayu": 20,
    "air_mineral": 38,
    "gula": 5,
    "roti": 10,
    "farmasi": 23,
    "pupuk": 31,
    "pengolahan_daging": 34,
    "mie_instan": 12,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 26,
    "unggas": 11,
    "sapi_perah": 35,
    "sapi_potong": 16,
    "domba_kambing": 17,
    "udang": 39,
    "ikan": 15,
    "kerang": 21,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 33,
    "gandum": 31,
    "jagung": 3,
    "umbi_umbian": 15,
    "kedelai": 9,
    "kelapa_sawit": 28,
    "teh": 30,
    "kopi": 7,
    "cokelat": 5,
    "tebu": 6,
    "sayur_sayuran": 25,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 32,
    "gudang_senjata": 17,
    "hangar_tank": 40,
    "akademi_militer": 34,
    "pusat_komando": 37,
    "pangkalan_udara": 9,
    "pangkalan_laut": 7,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 29,
    "anggaran_pertahanan": 12751,
    "personel": 24955,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 27,
    "infanteri": 12,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 10,
        "apc": 27,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 10,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 14,
        "helikopter_serang": 31,
        "pesawat_pengintai": 2
      },
      "total_unit": 23,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 18,
      "jaringan_radar": 12,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 20,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 40,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 19,
          "pusat_forensik": 1
        },
        "waktu_respon": 25,
        "kepercayaan_publik": 50 },
    "intelijen": 10,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 1,
      "misi_sabotase": 6,
      "manajemen_wilayah": 33,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 11,
      "sd": 25,
      "smp": 18,
      "sma": 15,
      "universitas": 1,
      "lembaga_pendidikan": 10,
      "laboratorium": 6,
      "observatorium": 15,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 28,
      "literasi": 84,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 31,
      "rumah_sakit_kecil": 25,
      "pusat_diagnostik": 28,
      "tempat_tidur_rs": 6995,
      "harapan_hidup": 4,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 18,
      "sirkuit_balap": 2,
      "stadion": 40,
      "stadion_internasional": 35,
      "skor_olimpiade": 12,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 8,
      "kejaksaan": 7,
      "pos_polisi": 33,
      "armada_mobil_polisi": 542,
      "akademi_polisi": 10,
      "indeks_korupsi": 69,
      "indeks_keamanan": 87
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1299
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 283
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1963
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 775
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1581
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 224 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 670 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 931
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
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
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
    "perumahan": 9,
    "komersial": 6,
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
      "kekuatan_lunak": 30,
      "kekuatan_keras": 18,
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
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 17,
    "lingkungan": 60
  }
};
