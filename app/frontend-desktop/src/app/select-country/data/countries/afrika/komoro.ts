import { CountryData } from "../../types/_index";

export const komoro: CountryData = {
  "name_en": "Comoros",
  "capital": "Moroni",
  "name_id": "Komoro",
  "lon": 44.25,
  "lat": -12.16666666,
  "flag": "🇰🇲",
  "jumlah_penduduk": 832322,
  "anggaran": 13,
  "pendapatan_nasional": "36",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 4,
    "pembangkit_air": 26,
    "pembangkit_nuklir": 1,
    "jaringan_listrik": 59,
    "pembangkit_surya": 24,
    "pembangkit_termal": 30,
    "pembangkit_angin": 29
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 23,
    "jalur_sepeda": 36,
    "terminal_bus": 4,
    "helipad": 19,
    "jalan_tol": 27,
    "cakupan_internet": 93,
    "jalur_kereta": 8,
    "kualitas_jalan": 68,
    "pelabuhan_laut": 5,
    "kereta_bawah_tanah": 39,
    "indeks_teknologi": 72,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 18,
    "batu_bara": 15,
    "tembaga": 1,
    "gas_alam": 29,
    "emas": 19,
    "bijih_besi": 3,
    "litium": 15,
    "nikel": 4,
    "minyak_bumi": 17,
    "logam_tanah_jarang": 38,
    "garam": 6,
    "kekuatan": 29.660809349923973,
    "uranium": 6
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 14,
    "mobil": 3,
    "semen_beton": 2,
    "pupuk": 2,
    "mie_instan": 17,
    "pengolahan_daging": 29,
    "air_mineral": 30,
    "sepeda_motor": 20,
    "farmasi": 36,
    "semikonduktor": 17,
    "smelter": 3,
    "kekuatan": 3.076011687404966,
    "gula": 9,
    "kayu": 19
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 28.0,
    "sapi_perah": 21,
    "sapi_potong": 10,
    "domba_kambing": 12,
    "udang_kerang": 11.0,
    "ikan": 32,
    "padi": 17,
    "gandum_jagung": 10.5,
    "sayur_umbi": 18.0,
    "kedelai": 35,
    "kelapa_sawit": 20,
    "kopi_teh_kakao": 27.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 14,
    "gudang_senjata": 39,
    "hangar_tank": 27,
    "akademi_militer": 9,
    "pusat_komando": 38,
    "pangkalan_udara": 32,
    "pangkalan_laut": 6,
    "program_luar_angkasa": 25,
    "pertahanan_siber": 25,
    "anggaran_pertahanan": 3,
    "personel": 27240,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 15,
    "infanteri": 12,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 14,
        "apc": 31,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 8,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 16,
        "helikopter_serang": 16,
        "pesawat_pengintai": 2
  },
      "total_unit": 30,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 37,
      "jaringan_radar": 40,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 9,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 38,
          "pusat_forensik": 1
  },
        "waktu_respon": 27,
        "kepercayaan_publik": 50
  },
    "intelijen": 9,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 4,
      "misi_mata_mata": 16,
      "misi_sabotase": 30,
      "manajemen_wilayah": 4,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 14,
      "sd": 36,
      "smp": 35,
      "sma": 30,
      "universitas": 4,
      "lembaga_pendidikan": 2,
      "laboratorium": 23,
      "observatorium": 10,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 13,
      "literasi": 56,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 33,
      "tempat_tidur_rs": 7311,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 35,
      "stadion": 20,
      "stadion_internasional": 1,
      "skor_olimpiade": 24,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 5,
      "kejaksaan": 25,
      "pos_polisi": 4,
      "armada_mobil_polisi": 3539,
      "akademi_polisi": 1,
      "indeks_korupsi": 71,
      "indeks_keamanan": 64
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 60,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 24,
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
    "kesehatan": 7,
    "pendidikan": 6,
    "keamanan": 31,
    "keuangan": 37,
    "lingkungan": 60
  }
};
