import { CountryData } from "../../types";

export const malaysia: CountryData = {
  "name_en": "Malaysia",
  "capital": "Kuala Lumpur",
  "name_id": "Malaysia",
  "lon": 101.42,
  "lat": 3.1,
  "flag": "🇲🇾",
  "pop": "10M",
  "budget": 15593,
  "income": "15.593 / 15593 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 14,
    "solar_plant": 16,
    "thermal_plant": 35,
    "gas_plant": 2,
    "wind_plant": 22,
    "power_grid": 93,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 18,
    "subway": 37,
    "railway": 37,
    "highway": 37,
    "road_quality": 70,
    "sea_port": 37,
    "airport": 32,
    "bus_terminal": 6,
    "helipad": 14,
    "internet_coverage": 63,
    "tech_stack": 65,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 40,
    "uranium": 33,
    "coal": 8,
    "oil": 40,
    "gas": 1,
    "salt": 39,
    "nickel": 9,
    "lithium": 32,
    "aluminum": 21,
    "copper": 23,
    "rare_earth": 9,
    "iron_ore": 2,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 24,
    "car": 23,
    "motorcycle": 9,
    "smelter": 29,
    "concrete_cement": 12,
    "wood": 3,
    "mineral_water": 23,
    "sugar": 36,
    "bread": 3,
    "pharmacy": 18,
    "fertilizer": 17,
    "meat_processing": 33,
    "instant_noodle": 4,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 5,
    "poultry": 29,
    "dairy_cow": 4,
    "beef_cow": 14,
    "sheep_goat": 23,
    "shrimp": 7,
    "fish": 24,
    "shellfish": 30,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 2,
    "wheat": 13,
    "corn": 9,
    "tubers": 36,
    "soy": 16,
    "palm_oil": 37,
    "tea": 40,
    "coffee": 30,
    "cocoa": 19,
    "sugarcane": 25,
    "vegetables": 8,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 35,
    "barracks": 35,
    "armory": 9,
    "tank_hangar": 33,
    "military_academy": 18,
    "budget": 15593,
    "personnel": 5130,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 34,
        "apc": 30,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 12,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 10,
        "helikopter_serang": 31,
        "pesawat_pengintai": 2
      },
      "total_unit": 10,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 6,
    "military_air_base": 18,
    "military_naval_base": 31,
    "arms_factory": 25,
    "nuclear_status": false,
    "space_program": 40,
    "cyber_defense": 25,
    "intelligence": 1,
    "strategic_operations": {
      "attack_mission": 3,
      "spy_mission": 34,
      "sabotage_mission": 36,
      "territory_management": 21,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 36,
      "radar_network": 16,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 34,
      "elementary_school": 29,
      "middle_school": 31,
      "high_school": 1,
      "university": 35,
      "education_institute": 36,
      "laboratory": 12,
      "observatory": 11,
      "research_center": 8,
      "development_center": 6,
      "literacy": 75,
      "research_index": 0
    },
    "health": {
      "large_hospital": 6,
      "small_hospital": 30,
      "diagnostic_center": 25,
      "hospital_beds": 2301,
      "life_expectancy": 1,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 33,
      "racing_circuit": 32,
      "stadium": 37,
      "international_stadium": 17,
      "olympic_score": 39,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 22,
      "court": 17,
      "prosecution_office": 21,
      "police_station": 18,
      "police_car_fleet": 2455,
      "police_academy": 16,
      "corruption_index": 52,
      "security_index": 87,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 7,
          "sepeda_motor": 34,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 25,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 32,
          "kamera_surveillance": 23,
          "pusat_forensik": 1
        },
        "response_time": 16,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 5,
    "aircraft": 12,
    "naval": 3,
    "air_base": 4,
    "naval_base": 19,
    "military_base": 26,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 39,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 21,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 26,
      "satisfaction": 52
    },
    "income": {
      "rate": 29,
      "satisfaction": 61
    },
    "customs": {
      "rate": 8,
      "satisfaction": 86
    },
    "environment": {
      "rate": 12,
      "satisfaction": 88
    },
    "other": {
      "rate": 22,
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
    "residential": 25,
    "commercial": 16,
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
      "hard_power": 27,
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
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 2,
    "education": 39,
    "security": 5,
    "finance": 39,
    "environment": 60
  }
};
