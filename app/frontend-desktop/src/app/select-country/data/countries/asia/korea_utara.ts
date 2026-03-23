import { CountryData } from "../../types";

export const korea_utara: CountryData = {
  "name_en": "North Korea",
  "capital": "Pyongyang",
  "name_id": "Korea Utara",
  "lon": 127,
  "lat": 40,
  "flag": "🇰🇵",
  "pop": "10M",
  "budget": 226000000000,
  "income": "645.000.000 / 645 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 26,
    "hydro_plant": 10,
    "solar_plant": 33,
    "thermal_plant": 14,
    "gas_plant": 18,
    "wind_plant": 40,
    "power_grid": 60,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 25,
    "subway": 8,
    "railway": 31,
    "highway": 11,
    "road_quality": 56,
    "sea_port": 18,
    "airport": 26,
    "bus_terminal": 7,
    "helipad": 8,
    "internet_coverage": 60,
    "tech_stack": 80,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 17,
    "uranium": 38,
    "coal": 22,
    "oil": 25,
    "gas": 33,
    "salt": 10,
    "nickel": 38,
    "lithium": 17,
    "aluminum": 14,
    "copper": 12,
    "rare_earth": 5,
    "iron_ore": 8,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 37,
    "car": 26,
    "motorcycle": 27,
    "smelter": 11,
    "concrete_cement": 1,
    "wood": 27,
    "mineral_water": 10,
    "sugar": 3,
    "bread": 2,
    "pharmacy": 39,
    "fertilizer": 4,
    "meat_processing": 17,
    "instant_noodle": 40,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 10,
    "poultry": 37,
    "dairy_cow": 24,
    "beef_cow": 38,
    "sheep_goat": 11,
    "shrimp": 28,
    "fish": 31,
    "shellfish": 17,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 40,
    "wheat": 38,
    "corn": 29,
    "tubers": 37,
    "soy": 19,
    "palm_oil": 6,
    "tea": 35,
    "coffee": 13,
    "cocoa": 29,
    "sugarcane": 37,
    "vegetables": 18,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 2,
    "barracks": 27,
    "armory": 40,
    "tank_hangar": 1,
    "military_academy": 6,
    "budget": 6,
    "personnel": 26229,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 24,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 15,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 4,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2
      },
      "total_unit": 28,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 9,
    "military_air_base": 15,
    "military_naval_base": 30,
    "arms_factory": 32,
    "nuclear_status": false,
    "space_program": 38,
    "cyber_defense": 17,
    "intelligence": 19,
    "strategic_operations": {
      "attack_mission": 40,
      "spy_mission": 4,
      "sabotage_mission": 9,
      "territory_management": 10,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 10,
      "radar_network": 20,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 3,
      "elementary_school": 6,
      "middle_school": 26,
      "high_school": 10,
      "university": 14,
      "education_institute": 4,
      "laboratory": 40,
      "observatory": 25,
      "research_center": 23,
      "development_center": 15,
      "literacy": 81,
      "research_index": 0
    },
    "health": {
      "large_hospital": 7,
      "small_hospital": 19,
      "diagnostic_center": 32,
      "hospital_beds": 8478,
      "life_expectancy": 14,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 38,
      "racing_circuit": 4,
      "stadium": 15,
      "international_stadium": 1,
      "olympic_score": 34,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 2,
      "court": 3,
      "prosecution_office": 17,
      "police_station": 29,
      "police_car_fleet": 9672,
      "police_academy": 4,
      "corruption_index": 74,
      "security_index": 65,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 22,
          "sepeda_motor": 34,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 12,
          "kamera_surveillance": 29,
          "pusat_forensik": 1
        },
        "response_time": 21,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 16,
    "tanks": 6,
    "aircraft": 19,
    "naval": 8,
    "air_base": 5,
    "naval_base": 8,
    "military_base": 31,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 2,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 25,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 27,
      "satisfaction": 52
    },
    "income": {
      "rate": 36,
      "satisfaction": 61
    },
    "customs": {
      "rate": 11,
      "satisfaction": 86
    },
    "environment": {
      "rate": 30,
      "satisfaction": 88
    },
    "other": {
      "rate": 16,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 62,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
    "commercial": 27,
    "industrial": 53
  },

  // =============================================================
  // 6. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 7,
      "hard_power": 37,
      "diplomatic_prestige": 57
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member"
      },
      {
        "name": "WHO",
        "role": "Member"
      },
      {
        "name": "WTO",
        "role": "Member"
      }
    ],
    "agreements": [
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 3,
    "education": 1,
    "security": 29,
    "finance": 3,
    "environment": 60
  }
};
