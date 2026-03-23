import { CountryData } from "../../types";

export const brunei: CountryData = {
  "name_en": "Brunei",
  "capital": "Bandar Seri Begawan",
  "name_id": "Brunei",
  "lon": 114.66666666,
  "lat": 4.5,
  "flag": "🇧🇳",
  "pop": "10M",
  "budget": 146,
  "income": "417",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 36,
    "hydro_plant": 35,
    "solar_plant": 2,
    "thermal_plant": 40,
    "gas_plant": 23,
    "wind_plant": 10,
    "power_grid": 92,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 12,
    "subway": 37,
    "railway": 28,
    "highway": 8,
    "road_quality": 53,
    "sea_port": 22,
    "airport": 9,
    "bus_terminal": 34,
    "helipad": 21,
    "internet_coverage": 87,
    "tech_stack": 55,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 37,
    "uranium": 28,
    "coal": 23,
    "oil": 31,
    "gas": 38,
    "salt": 10,
    "nickel": 37,
    "lithium": 12,
    "aluminum": 6,
    "copper": 35,
    "rare_earth": 36,
    "iron_ore": 6,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 30,
    "car": 20,
    "motorcycle": 19,
    "smelter": 1,
    "concrete_cement": 40,
    "wood": 40,
    "mineral_water": 27,
    "sugar": 16,
    "bread": 30,
    "pharmacy": 13,
    "fertilizer": 5,
    "meat_processing": 9,
    "instant_noodle": 12,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 15,
    "poultry": 32,
    "dairy_cow": 2,
    "beef_cow": 23,
    "sheep_goat": 29,
    "shrimp": 19,
    "fish": 29,
    "shellfish": 11,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 39,
    "wheat": 11,
    "corn": 5,
    "tubers": 5,
    "soy": 23,
    "palm_oil": 36,
    "tea": 30,
    "coffee": 23,
    "cocoa": 8,
    "sugarcane": 32,
    "vegetables": 29,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 3,
    "barracks": 7,
    "armory": 34,
    "tank_hangar": 36,
    "military_academy": 36,
    "budget": 541,
    "personnel": 16977,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 30,
        "apc": 8,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 26,
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
    "command_center": 2,
    "military_air_base": 24,
    "military_naval_base": 27,
    "arms_factory": 32,
    "nuclear_status": false,
    "space_program": 27,
    "cyber_defense": 34,
    "intelligence": 38,
    "strategic_operations": {
      "attack_mission": 16,
      "spy_mission": 7,
      "sabotage_mission": 13,
      "territory_management": 33,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 35,
      "radar_network": 30,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 3,
      "elementary_school": 14,
      "middle_school": 14,
      "high_school": 2,
      "university": 12,
      "education_institute": 2,
      "laboratory": 5,
      "observatory": 13,
      "research_center": 18,
      "development_center": 13,
      "literacy": 61,
      "research_index": 0
    },
    "health": {
      "large_hospital": 32,
      "small_hospital": 1,
      "diagnostic_center": 30,
      "hospital_beds": 6182,
      "life_expectancy": 9,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 23,
      "racing_circuit": 33,
      "stadium": 23,
      "international_stadium": 9,
      "olympic_score": 5,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 29,
      "court": 15,
      "prosecution_office": 6,
      "police_station": 3,
      "police_car_fleet": 3864,
      "police_academy": 39,
      "corruption_index": 76,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 34,
          "sepeda_motor": 11,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 30,
          "kamera_surveillance": 21,
          "pusat_forensik": 1
        },
        "response_time": 11,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 21,
    "tanks": 18,
    "aircraft": 14,
    "naval": 10,
    "air_base": 9,
    "naval_base": 33,
    "military_base": 26,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 15,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 37,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 8,
      "satisfaction": 52
    },
    "income": {
      "rate": 24,
      "satisfaction": 61
    },
    "customs": {
      "rate": 4,
      "satisfaction": 86
    },
    "environment": {
      "rate": 19,
      "satisfaction": 88
    },
    "other": {
      "rate": 20,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 91,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 19,
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
      "soft_power": 33,
      "hard_power": 22,
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
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 9,
    "education": 24,
    "security": 13,
    "finance": 14,
    "environment": 60
  }
};
