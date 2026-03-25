import { CountryData } from "../../types";

export const mali: CountryData = {
  "name_en": "Mali",
  "capital": "Bamako",
  "name_id": "Mali",
  "lon": -8,
  "lat": 12.39,
  "flag": "🇲🇱",
  "jumlah_penduduk": 19077690,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 13,
    "pembangkit_air": 21,
    "pembangkit_nuklir": 25,
    "jaringan_listrik": 50,
    "pembangkit_surya": 16,
    "pembangkit_termal": 20,
    "pembangkit_angin": 4
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 12,
    "jalur_sepeda": 25,
    "terminal_bus": 39,
    "helipad": 15,
    "jalan_tol": 21,
    "cakupan_internet": 63,
    "jalur_kereta": 22,
    "kualitas_jalan": 70,
    "pelabuhan_laut": 3,
    "kereta_bawah_tanah": 14,
    "indeks_teknologi": 95,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 10,
    "batu_bara": 34,
    "tembaga": 3,
    "gas_alam": 24,
    "emas": 19,
    "bijih_besi": 1,
    "litium": 40,
    "nikel": 23,
    "minyak_bumi": 29,
    "logam_tanah_jarang": 31,
    "garam": 36,
    "kekuatan": 29.660809349923973,
    "uranium": 4
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 24,
    "mobil": 24,
    "semen_beton": 27,
    "pupuk": 10,
    "mie_instan": 12,
    "pengolahan_daging": 5,
    "air_mineral": 29,
    "sepeda_motor": 2,
    "farmasi": 32,
    "semikonduktor": 20,
    "smelter": 1,
    "kekuatan": 3.076011687404966,
    "gula": 16,
    "kayu": 1
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 40,
    "ayam": 19,
    "sapi_perah": 14,
    "ikan": 11,
    "unggas": 19,
    "domba_kambing": 17,
    "kerang": 28,
    "udang": 4,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 39,
    "kopi": 39,
    "jagung": 11,
    "kelapa_sawit": 8,
    "beras": 1,
    "kedelai": 5,
    "kekuatan": 20.660809349923973,
    "tebu": 36,
    "teh": 15,
    "umbi_umbian": 39,
    "sayur_sayuran": 25,
    "gandum": 10
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 17,
    "hangar_tank": 18,
    "akademi_militer": 17,
    "pusat_komando": 4,
    "pangkalan_udara": 2,
    "pangkalan_laut": 37,
    "program_luar_angkasa": 4,
    "pertahanan_siber": 37,
    "anggaran_pertahanan": 50,
    "personel": 6980,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 36,
    "infanteri": 39,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 18,
        "apc": 39,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 40,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 36,
        "helikopter_serang": 28,
        "pesawat_pengintai": 2
  },
      "total_unit": 39,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 25,
      "jaringan_radar": 15,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 8,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 30,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 11,
          "kamera_pengawas": 18,
          "pusat_forensik": 1
  },
        "waktu_respon": 26,
        "kepercayaan_publik": 50
  },
    "intelijen": 14,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 30,
      "misi_sabotase": 1,
      "manajemen_wilayah": 3,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 25,
      "sd": 22,
      "smp": 5,
      "sma": 36,
      "universitas": 15,
      "lembaga_pendidikan": 19,
      "laboratorium": 33,
      "observatorium": 17,
      "pusat_penelitian": 20,
      "pusat_pengembangan": 17,
      "literasi": 80,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 5,
      "tempat_tidur_rs": 6075,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 3,
      "stadion": 7,
      "stadion_internasional": 40,
      "skor_olimpiade": 15,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 13,
      "kejaksaan": 27,
      "pos_polisi": 31,
      "armada_mobil_polisi": 2788,
      "akademi_polisi": 5,
      "indeks_korupsi": 53,
      "indeks_keamanan": 93
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 4
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 21,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 73,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 10,
    "komersial": 36,
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
      "kekuatan_keras": 24,
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
    "kesehatan": 9,
    "pendidikan": 20,
    "keamanan": 21,
    "keuangan": 32,
    "lingkungan": 60
  }
};
