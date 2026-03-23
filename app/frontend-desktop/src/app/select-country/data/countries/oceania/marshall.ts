import { CountryData } from "../../types";

export const marshall: CountryData = {
  "name_en": "Marshall Islands",
  "capital": "Majuro",
  "name_id": "Marshall",
  "lon": 168,
  "lat": 9,
  "flag": "🇲🇭",
  "pop": "10M",
  "budget": 5333,
  "income": "5.333 / 5333 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 27,
    "hydro_plant": 37,
    "solar_plant": 1,
    "thermal_plant": 23,
    "gas_plant": 34,
    "wind_plant": 30,
    "power_grid": 91,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 21,
    "subway": 38,
    "railway": 28,
    "highway": 14,
    "road_quality": 53,
    "sea_port": 16,
    "airport": 18,
    "bus_terminal": 40,
    "helipad": 29,
    "internet_coverage": 80,
    "tech_stack": 62,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 30,
    "coal": 30,
    "oil": 9,
    "gas": 25,
    "salt": 17,
    "nickel": 35,
    "lithium": 30,
    "aluminum": 28,
    "copper": 23,
    "rare_earth": 20,
    "iron_ore": 10,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 9,
    "car": 39,
    "motorcycle": 24,
    "smelter": 29,
    "concrete_cement": 38,
    "wood": 19,
    "mineral_water": 9,
    "sugar": 16,
    "bread": 30,
    "pharmacy": 1,
    "fertilizer": 39,
    "meat_processing": 32,
    "instant_noodle": 4,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 37,
    "poultry": 29,
    "dairy_cow": 37,
    "beef_cow": 23,
    "sheep_goat": 6,
    "shrimp": 1,
    "fish": 29,
    "shellfish": 32,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 12,
    "wheat": 17,
    "corn": 5,
    "tubers": 38,
    "soy": 35,
    "palm_oil": 15,
    "tea": 20,
    "coffee": 33,
    "cocoa": 9,
    "sugarcane": 1,
    "vegetables": 22,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 11,
    "barracks": 2,
    "armory": 10,
    "tank_hangar": 31,
    "military_academy": 16,
    "budget": 5333,
    "personnel": 10658,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 179,
        "apc": 27,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 83,
        "helikopter_serang": 131,
        "pesawat_pengintai": 2
      },
      "total_unit": 38,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 27,
    "military_air_base": 34,
    "military_naval_base": 28,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 27,
    "cyber_defense": 15,
    "intelligence": 11,
    "strategic_operations": {
      "attack_mission": 4,
      "spy_mission": 31,
      "sabotage_mission": 28,
      "territory_management": 36,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 31,
      "elementary_school": 10,
      "middle_school": 13,
      "high_school": 26,
      "university": 12,
      "education_institute": 11,
      "laboratory": 24,
      "observatory": 18,
      "research_center": 20,
      "development_center": 27,
      "literacy": 58,
      "research_index": 0
    },
    "health": {
      "large_hospital": 24,
      "small_hospital": 21,
      "diagnostic_center": 27,
      "hospital_beds": 3035,
      "life_expectancy": 37,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 25,
      "racing_circuit": 35,
      "stadium": 40,
      "international_stadium": 20,
      "olympic_score": 20,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 7,
      "court": 10,
      "prosecution_office": 28,
      "police_station": 16,
      "police_car_fleet": 5615,
      "police_academy": 10,
      "corruption_index": 77,
      "security_index": 53,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 4,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 7,
          "kamera_surveillance": 30,
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
    "infantry": 3,
    "tanks": 22,
    "aircraft": 37,
    "naval": 26,
    "air_base": 3,
    "naval_base": 8,
    "military_base": 4,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 23,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 27,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 24,
      "satisfaction": 52
    },
    "income": {
      "rate": 34,
      "satisfaction": 61
    },
    "customs": {
      "rate": 5,
      "satisfaction": 86
    },
    "environment": {
      "rate": 3,
      "satisfaction": 88
    },
    "other": {
      "rate": 30,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 87,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 24,
    "commercial": 28,
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
      "soft_power": 22,
      "hard_power": 2,
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
      { "partner": "Fiji", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Papua Nugini", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Australia", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 22,
    "education": 30,
    "security": 30,
    "finance": 18,
    "environment": 60
  }
};
