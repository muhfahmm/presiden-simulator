import { CountryData } from "../../types";

export const togo: CountryData = {
  "name_en": "Togo",
  "capital": "Lomé",
  "name_id": "Togo",
  "lon": 1.16666666,
  "lat": 8,
  "flag": "🇹🇬",
  "jumlah_penduduk": 7889094,
  "anggaran": 88,
  "pendapatan_nasional": "250",
  "religion": "Katolik",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 34,
    "pembangkit_air": 4,
    "pembangkit_nuklir": 37,
    "jaringan_listrik": 78,
    "pembangkit_surya": 21,
    "pembangkit_termal": 30,
    "pembangkit_angin": 27
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 36,
    "jalur_sepeda": 22,
    "terminal_bus": 9,
    "helipad": 27,
    "jalan_tol": 31,
    "cakupan_internet": 90,
    "jalur_kereta": 20,
    "kualitas_jalan": 67,
    "pelabuhan_laut": 23,
    "kereta_bawah_tanah": 3,
    "indeks_teknologi": 74,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 27,
    "batu_bara": 18,
    "tembaga": 31,
    "gas_alam": 14,
    "emas": 6,
    "bijih_besi": 26,
    "litium": 38,
    "nikel": 30,
    "minyak_bumi": 2,
    "logam_tanah_jarang": 19,
    "garam": 10,
    "kekuatan": 29.660809349923973,
    "uranium": 10
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 35,
    "mobil": 16,
    "semen_beton": 4,
    "pupuk": 30,
    "mie_instan": 2,
    "pengolahan_daging": 5,
    "air_mineral": 10,
    "sepeda_motor": 16,
    "farmasi": 38,
    "semikonduktor": 12,
    "smelter": 16,
    "kekuatan": 3.076011687404966,
    "gula": 38,
    "kayu": 4
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 18,
    "ayam": 4,
    "sapi_perah": 7,
    "ikan": 28,
    "unggas": 39,
    "domba_kambing": 2,
    "kerang": 5,
    "udang": 21,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 4,
    "kopi": 28,
    "jagung": 2,
    "kelapa_sawit": 27,
    "beras": 35,
    "kedelai": 32,
    "kekuatan": 20.660809349923973,
    "tebu": 40,
    "teh": 9,
    "umbi_umbian": 17,
    "sayur_sayuran": 5,
    "gandum": 18
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 16,
    "hangar_tank": 40,
    "akademi_militer": 25,
    "pusat_komando": 9,
    "pangkalan_udara": 34,
    "pangkalan_laut": 39,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 39,
    "anggaran_pertahanan": 25,
    "personel": 16018,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 12,
    "infanteri": 9,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 21,
        "apc": 155,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 122,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 117,
        "helikopter_serang": 129,
        "pesawat_pengintai": 2
  },
      "total_unit": 3,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 4,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 36,
          "sepeda_motor": 16,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 28,
          "kamera_pengawas": 18,
          "pusat_forensik": 1
  },
        "waktu_respon": 11,
        "kepercayaan_publik": 50
  },
    "intelijen": 32,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 19,
      "misi_mata_mata": 23,
      "misi_sabotase": 18,
      "manajemen_wilayah": 35,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 3,
      "sd": 19,
      "smp": 11,
      "sma": 39,
      "universitas": 13,
      "lembaga_pendidikan": 14,
      "laboratorium": 1,
      "observatorium": 5,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 1,
      "literasi": 54,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 17,
      "tempat_tidur_rs": 911,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 19,
      "stadion": 38,
      "stadion_internasional": 2,
      "skor_olimpiade": 26,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 27,
      "kejaksaan": 39,
      "pos_polisi": 8,
      "armada_mobil_polisi": 4480,
      "akademi_polisi": 4,
      "indeks_korupsi": 80,
      "indeks_keamanan": 81
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
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 78950,
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
    "perumahan": 17,
    "komersial": 37,
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
      "kekuatan_lunak": 35,
      "kekuatan_keras": 17,
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
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 2,
    "keuangan": 11,
    "lingkungan": 60
  }
};
