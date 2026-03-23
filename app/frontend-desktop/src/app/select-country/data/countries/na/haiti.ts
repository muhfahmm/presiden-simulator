import { CountryData } from "../../types";

export const haiti: CountryData = {
  "name_en": "Haiti",
  "capital": "Port-au-Prince",
  "name_id": "Haiti",
  "lon": -72.41666666,
  "lat": 19,
  "flag": "🇭🇹",
  "pop": "10M",
  "budget": 573000000000000,
  "income": "998.000.000.000.000 / 998 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 38,
    "hydro_plant": 20,
    "solar_plant": 17,
    "thermal_plant": 14,
    "gas_plant": 10,
    "wind_plant": 4,
    "power_grid": 82,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 37,
    "subway": 38,
    "railway": 25,
    "highway": 21,
    "road_quality": 70,
    "sea_port": 28,
    "airport": 18,
    "bus_terminal": 23,
    "helipad": 36,
    "internet_coverage": 63,
    "tech_stack": 53,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 20,
    "uranium": 22,
    "coal": 13,
    "oil": 35,
    "gas": 15,
    "salt": 29,
    "nickel": 23,
    "lithium": 8,
    "aluminum": 20,
    "copper": 4,
    "rare_earth": 22,
    "iron_ore": 3,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 7,
    "car": 29,
    "motorcycle": 4,
    "smelter": 21,
    "concrete_cement": 31,
    "wood": 4,
    "mineral_water": 7,
    "sugar": 31,
    "bread": 17,
    "pharmacy": 38,
    "fertilizer": 37,
    "meat_processing": 12,
    "instant_noodle": 37,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 15,
    "poultry": 40,
    "dairy_cow": 6,
    "beef_cow": 13,
    "sheep_goat": 15,
    "shrimp": 24,
    "fish": 5,
    "shellfish": 17,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 33,
    "wheat": 10,
    "corn": 6,
    "tubers": 11,
    "soy": 19,
    "palm_oil": 19,
    "tea": 33,
    "coffee": 30,
    "cocoa": 16,
    "sugarcane": 18,
    "vegetables": 32,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 21,
    "barracks": 7,
    "armory": 35,
    "tank_hangar": 10,
    "military_academy": 15,
    "budget": 21,
    "personnel": 29300,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 6,
        "apc": 18,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 38,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 30,
        "helikopter_serang": 19,
        "pesawat_pengintai": 2
      },
      "total_unit": 4,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 18,
    "military_air_base": 25,
    "military_naval_base": 35,
    "arms_factory": 23,
    "nuclear_status": false,
    "space_program": 3,
    "cyber_defense": 8,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 24,
      "spy_mission": 38,
      "sabotage_mission": 4,
      "territory_management": 24,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 2,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 37,
      "elementary_school": 32,
      "middle_school": 5,
      "high_school": 25,
      "university": 40,
      "education_institute": 18,
      "laboratory": 16,
      "observatory": 21,
      "research_center": 11,
      "development_center": 5,
      "literacy": 80,
      "research_index": 0
    },
    "health": {
      "large_hospital": 12,
      "small_hospital": 36,
      "diagnostic_center": 13,
      "hospital_beds": 8268,
      "life_expectancy": 38,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 11,
      "racing_circuit": 33,
      "stadium": 7,
      "international_stadium": 40,
      "olympic_score": 22,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 17,
      "court": 27,
      "prosecution_office": 21,
      "police_station": 11,
      "police_car_fleet": 7356,
      "police_academy": 13,
      "corruption_index": 50,
      "security_index": 59,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 3,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 14,
          "kamera_surveillance": 2,
          "pusat_forensik": 1
        },
        "response_time": 33,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 8,
    "tanks": 34,
    "aircraft": 37,
    "naval": 18,
    "air_base": 20,
    "naval_base": 1,
    "military_base": 11,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 10,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 1,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52
    },
    "income": {
      "rate": 35,
      "satisfaction": 61
    },
    "customs": {
      "rate": 24,
      "satisfaction": 86
    },
    "environment": {
      "rate": 7,
      "satisfaction": 88
    },
    "other": {
      "rate": 7,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 69,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 31,
    "commercial": 33,
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
      "soft_power": 32,
      "hard_power": 15,
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
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 32,
    "education": 16,
    "security": 15,
    "finance": 7,
    "environment": 60
  }
};
