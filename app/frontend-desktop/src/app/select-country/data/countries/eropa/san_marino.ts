import { CountryData } from "../../types";

export const san_marino: CountryData = {
  "name_en": "San Marino",
  "capital": "City of San Marino",
  "name_id": "San marino",
  "lon": 12.41666666,
  "lat": 43.76666666,
  "flag": "🇸🇲",
  "pop": "10M",
  "budget": 244000000000000,
  "income": "122.000.000.000.000 / 122 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 1,
    "hydro_plant": 35,
    "solar_plant": 5,
    "thermal_plant": 24,
    "gas_plant": 36,
    "wind_plant": 2,
    "power_grid": 61,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 22,
    "subway": 36,
    "railway": 7,
    "highway": 2,
    "road_quality": 65,
    "sea_port": 31,
    "airport": 36,
    "bus_terminal": 26,
    "helipad": 20,
    "internet_coverage": 74,
    "tech_stack": 91,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 36,
    "uranium": 22,
    "coal": 39,
    "oil": 39,
    "gas": 24,
    "salt": 20,
    "nickel": 2,
    "lithium": 20,
    "aluminum": 39,
    "copper": 40,
    "rare_earth": 5,
    "iron_ore": 9,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 37,
    "car": 24,
    "motorcycle": 16,
    "smelter": 31,
    "concrete_cement": 40,
    "wood": 6,
    "mineral_water": 13,
    "sugar": 33,
    "bread": 10,
    "pharmacy": 29,
    "fertilizer": 25,
    "meat_processing": 35,
    "instant_noodle": 36,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 8,
    "poultry": 23,
    "dairy_cow": 29,
    "beef_cow": 19,
    "sheep_goat": 24,
    "shrimp": 1,
    "fish": 25,
    "shellfish": 19,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 1,
    "wheat": 38,
    "corn": 10,
    "tubers": 14,
    "soy": 15,
    "palm_oil": 21,
    "tea": 28,
    "coffee": 20,
    "cocoa": 5,
    "sugarcane": 31,
    "vegetables": 28,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 34,
    "barracks": 22,
    "armory": 27,
    "tank_hangar": 19,
    "military_academy": 3,
    "budget": 7,
    "personnel": 16893,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 87,
        "apc": 114,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 25,
        "kapal_destroyer": 119,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 70,
        "helikopter_serang": 185,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 7,
    "military_air_base": 7,
    "military_naval_base": 35,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 22,
    "cyber_defense": 39,
    "intelligence": 8,
    "strategic_operations": {
      "attack_mission": 2,
      "spy_mission": 2,
      "sabotage_mission": 4,
      "territory_management": 19,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 15,
      "elementary_school": 39,
      "middle_school": 25,
      "high_school": 10,
      "university": 18,
      "education_institute": 19,
      "laboratory": 6,
      "observatory": 18,
      "research_center": 30,
      "development_center": 11,
      "literacy": 50,
      "research_index": 0
    },
    "health": {
      "large_hospital": 7,
      "small_hospital": 28,
      "diagnostic_center": 32,
      "hospital_beds": 9839,
      "life_expectancy": 9,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 27,
      "racing_circuit": 20,
      "stadium": 19,
      "international_stadium": 32,
      "olympic_score": 14,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 4,
      "court": 36,
      "prosecution_office": 21,
      "police_station": 33,
      "police_car_fleet": 9208,
      "police_academy": 22,
      "corruption_index": 86,
      "security_index": 73,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 3,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 40,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 35,
          "kamera_surveillance": 7,
          "pusat_forensik": 1
        },
        "response_time": 28,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 1,
    "tanks": 21,
    "aircraft": 2,
    "naval": 11,
    "air_base": 3,
    "naval_base": 30,
    "military_base": 35,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 14,
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
      "rate": 6,
      "satisfaction": 52
    },
    "income": {
      "rate": 27,
      "satisfaction": 61
    },
    "customs": {
      "rate": 15,
      "satisfaction": 86
    },
    "environment": {
      "rate": 2,
      "satisfaction": 88
    },
    "other": {
      "rate": 8,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 78,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 39,
    "commercial": 37,
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
      "soft_power": 6,
      "hard_power": 30,
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
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 8,
    "education": 5,
    "security": 34,
    "finance": 11,
    "environment": 60
  }
};
