import { CountryData } from "../../types";

export const ghana: CountryData = {
  "name_en": "Ghana",
  "capital": "Accra",
  "name_id": "Ghana",
  "lon": -2,
  "lat": 8,
  "flag": "🇬🇭",
  "jumlah_penduduk": 29767108,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 35,
    "pembangkit_air": 25,
    "pembangkit_nuklir": 7,
    "jaringan_listrik": 77,
    "pembangkit_surya": 2,
    "pembangkit_termal": 17,
    "pembangkit_angin": 36
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 12,
    "jalur_sepeda": 27,
    "terminal_bus": 4,
    "helipad": 5,
    "jalan_tol": 9,
    "cakupan_internet": 65,
    "jalur_kereta": 16,
    "kualitas_jalan": 58,
    "pelabuhan_laut": 26,
    "kereta_bawah_tanah": 14,
    "indeks_teknologi": 60,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 32,
    "batu_bara": 30,
    "tembaga": 3,
    "gas_alam": 26,
    "emas": 65,
    "bijih_besi": 28,
    "litium": 26,
    "nikel": 2,
    "minyak_bumi": 40,
    "logam_tanah_jarang": 8,
    "garam": 8,
    "kekuatan": 29.660809349923973,
    "uranium": 21
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 29,
    "mobil": 36,
    "semen_beton": 13,
    "pupuk": 38,
    "mie_instan": 21,
    "pengolahan_daging": 24,
    "air_mineral": 38,
    "sepeda_motor": 7,
    "farmasi": 6,
    "semikonduktor": 8,
    "smelter": 38,
    "kekuatan": 3.076011687404966,
    "gula": 13,
    "kayu": 40
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 15,
    "ayam": 16,
    "sapi_perah": 33,
    "ikan": 35,
    "unggas": 19,
    "domba_kambing": 4,
    "kerang": 16,
    "udang": 37,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 80,
    "kopi": 39,
    "jagung": 24,
    "kelapa_sawit": 22,
    "beras": 39,
    "kedelai": 11,
    "kekuatan": 20.660809349923973,
    "tebu": 9,
    "teh": 37,
    "umbi_umbian": 29,
    "sayur_sayuran": 27,
    "gandum": 3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 14,
    "hangar_tank": 20,
    "akademi_militer": 18,
    "pusat_komando": 19,
    "pangkalan_udara": 3,
    "pangkalan_laut": 19,
    "program_luar_angkasa": 33,
    "pertahanan_siber": 18,
    "anggaran_pertahanan": 211,
    "personel": 15287,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 27,
    "infanteri": 9,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 8,
        "apc": 7,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 31,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2
  },
      "total_unit": 30,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 36,
      "jaringan_radar": 25,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 9,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 7,
          "helikopter_polisi": 19,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 36,
          "kamera_pengawas": 39,
          "pusat_forensik": 1
  },
        "waktu_respon": 7,
        "kepercayaan_publik": 50
  },
    "intelijen": 3,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 1,
      "misi_sabotase": 28,
      "manajemen_wilayah": 12,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 29,
      "sd": 16,
      "smp": 24,
      "sma": 3,
      "universitas": 37,
      "lembaga_pendidikan": 39,
      "laboratorium": 6,
      "observatorium": 18,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 18,
      "literasi": 56,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 29,
      "tempat_tidur_rs": 5430,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 9,
      "stadion": 13,
      "stadion_internasional": 24,
      "skor_olimpiade": 6,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 25,
      "kejaksaan": 20,
      "pos_polisi": 9,
      "armada_mobil_polisi": 5653,
      "akademi_polisi": 19,
      "indeks_korupsi": 65,
      "indeks_keamanan": 60
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
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 45
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 42
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 29
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 315800,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 63,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 5,
    "komersial": 5,
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
    "kesehatan": 11,
    "pendidikan": 6,
    "keamanan": 22,
    "keuangan": 17,
    "lingkungan": 60
  }
};
