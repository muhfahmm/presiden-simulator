import { CountryData } from "../../types";

export const eritrea: CountryData = {
  "name_en": "Eritrea",
  "capital": "Asmara",
  "name_id": "Eritrea",
  "lon": 39,
  "lat": 15,
  "flag": "🇪🇷",
  "jumlah_penduduk": 6213972,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Islam",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 35,
    "pembangkit_air": 36,
    "pembangkit_nuklir": 11,
    "jaringan_listrik": 67,
    "pembangkit_surya": 31,
    "pembangkit_termal": 8,
    "pembangkit_angin": 37
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 20,
    "jalur_sepeda": 8,
    "terminal_bus": 28,
    "helipad": 37,
    "jalan_tol": 13,
    "cakupan_internet": 70,
    "jalur_kereta": 3,
    "kualitas_jalan": 75,
    "pelabuhan_laut": 9,
    "kereta_bawah_tanah": 25,
    "indeks_teknologi": 71,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 34,
    "batu_bara": 23,
    "tembaga": 36,
    "gas_alam": 39,
    "emas": 35,
    "bijih_besi": 1,
    "litium": 2,
    "nikel": 13,
    "minyak_bumi": 40,
    "logam_tanah_jarang": 33,
    "garam": 3,
    "kekuatan": 29.660809349923973,
    "uranium": 22
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 39,
    "mobil": 11,
    "semen_beton": 7,
    "pupuk": 1,
    "mie_instan": 23,
    "pengolahan_daging": 18,
    "air_mineral": 30,
    "sepeda_motor": 11,
    "farmasi": 9,
    "semikonduktor": 16,
    "smelter": 32,
    "kekuatan": 3.076011687404966,
    "gula": 9,
    "kayu": 1
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 35,
    "ayam": 17,
    "sapi_perah": 3,
    "ikan": 24,
    "unggas": 39,
    "domba_kambing": 28,
    "kerang": 7,
    "udang": 27,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 16,
    "kopi": 4,
    "jagung": 32,
    "kelapa_sawit": 24,
    "beras": 11,
    "kedelai": 28,
    "kekuatan": 20.660809349923973,
    "tebu": 29,
    "teh": 21,
    "umbi_umbian": 17,
    "sayur_sayuran": 25,
    "gandum": 35
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 13,
    "hangar_tank": 14,
    "akademi_militer": 4,
    "pusat_komando": 25,
    "pangkalan_udara": 6,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 22,
    "pertahanan_siber": 40,
    "anggaran_pertahanan": 6,
    "personel": 16818,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 35,
    "infanteri": 12,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 17,
        "apc": 26,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 4,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2
  },
      "total_unit": 26,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 19,
      "jaringan_radar": 18,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 33,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 5,
          "pusat_forensik": 1
  },
        "waktu_respon": 31,
        "kepercayaan_publik": 50
  },
    "intelijen": 36,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 13,
      "misi_mata_mata": 34,
      "misi_sabotase": 33,
      "manajemen_wilayah": 30,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 35,
      "sd": 35,
      "smp": 38,
      "sma": 22,
      "universitas": 26,
      "lembaga_pendidikan": 37,
      "laboratorium": 14,
      "observatorium": 35,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 11,
      "literasi": 90,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 27,
      "pusat_diagnostik": 37,
      "tempat_tidur_rs": 2855,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 37,
      "stadion": 33,
      "stadion_internasional": 5,
      "skor_olimpiade": 40,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 5,
      "kejaksaan": 1,
      "pos_polisi": 36,
      "armada_mobil_polisi": 2156,
      "akademi_polisi": 4,
      "indeks_korupsi": 57,
      "indeks_keamanan": 78
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 85,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 40,
    "komersial": 27,
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
      "kekuatan_lunak": 27,
      "kekuatan_keras": 6,
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
    "kesehatan": 31,
    "pendidikan": 24,
    "keamanan": 11,
    "keuangan": 18,
    "lingkungan": 60
  }
};
