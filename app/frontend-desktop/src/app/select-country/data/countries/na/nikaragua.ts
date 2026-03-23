import { CountryData } from "../../types";

export const nikaragua: CountryData = {
  "name_en": "Nicaragua",
  "capital": "Managua",
  "name_id": "Nikaragua",
  "lon": -85,
  "lat": 13,
  "flag": "🇳🇮",
  "pop": "10M",
  "budget": 165,
  "income": "472",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 33,
    "hydro_plant": 29,
    "solar_plant": 32,
    "thermal_plant": 10,
    "gas_plant": 23,
    "wind_plant": 11,
    "power_grid": 63,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 3,
    "subway": 18,
    "railway": 5,
    "highway": 20,
    "road_quality": 51,
    "sea_port": 17,
    "airport": 5,
    "bus_terminal": 27,
    "helipad": 11,
    "internet_coverage": 68,
    "tech_stack": 78,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 38,
    "uranium": 28,
    "coal": 35,
    "oil": 19,
    "gas": 15,
    "salt": 18,
    "nickel": 36,
    "lithium": 19,
    "aluminum": 1,
    "copper": 36,
    "rare_earth": 28,
    "iron_ore": 26,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 9,
    "car": 1,
    "motorcycle": 32,
    "smelter": 18,
    "concrete_cement": 39,
    "wood": 36,
    "mineral_water": 1,
    "sugar": 39,
    "bread": 6,
    "pharmacy": 2,
    "fertilizer": 25,
    "meat_processing": 10,
    "instant_noodle": 33,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 39,
    "poultry": 36,
    "dairy_cow": 33,
    "beef_cow": 12,
    "sheep_goat": 40,
    "shrimp": 13,
    "fish": 13,
    "shellfish": 14,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 2,
    "wheat": 15,
    "corn": 36,
    "tubers": 19,
    "soy": 22,
    "palm_oil": 13,
    "tea": 19,
    "coffee": 18,
    "cocoa": 36,
    "sugarcane": 20,
    "vegetables": 22,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 32,
    "barracks": 37,
    "armory": 27,
    "tank_hangar": 20,
    "military_academy": 5,
    "budget": 659,
    "personnel": 26563,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 92,
        "apc": 40,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 69,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 63,
        "helikopter_serang": 92,
        "pesawat_pengintai": 2
      },
      "total_unit": 24,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 25,
    "military_air_base": 10,
    "military_naval_base": 5,
    "arms_factory": 1,
    "nuclear_status": false,
    "space_program": 33,
    "cyber_defense": 14,
    "intelligence": 24,
    "strategic_operations": {
      "attack_mission": 4,
      "spy_mission": 26,
      "sabotage_mission": 15,
      "territory_management": 40,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 25,
      "elementary_school": 21,
      "middle_school": 22,
      "high_school": 19,
      "university": 9,
      "education_institute": 9,
      "laboratory": 26,
      "observatory": 34,
      "research_center": 9,
      "development_center": 27,
      "literacy": 75,
      "research_index": 0
    },
    "health": {
      "large_hospital": 40,
      "small_hospital": 2,
      "diagnostic_center": 16,
      "hospital_beds": 4276,
      "life_expectancy": 29,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 37,
      "racing_circuit": 7,
      "stadium": 13,
      "international_stadium": 31,
      "olympic_score": 35,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 13,
      "court": 39,
      "prosecution_office": 11,
      "police_station": 32,
      "police_car_fleet": 2804,
      "police_academy": 12,
      "corruption_index": 88,
      "security_index": 85,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 7,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 36,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 19,
          "kamera_surveillance": 22,
          "pusat_forensik": 1
        },
        "response_time": 36,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 22,
    "tanks": 19,
    "aircraft": 15,
    "naval": 21,
    "air_base": 38,
    "naval_base": 6,
    "military_base": 14,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 27,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 16,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 20,
      "satisfaction": 52
    },
    "income": {
      "rate": 31,
      "satisfaction": 61
    },
    "customs": {
      "rate": 29,
      "satisfaction": 86
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88
    },
    "other": {
      "rate": 11,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 54,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
    "commercial": 14,
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
      "soft_power": 38,
      "hard_power": 19,
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
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 39,
    "education": 37,
    "security": 9,
    "finance": 30,
    "environment": 60
  }
};
