import { CountryData } from "../../types";

export const panama: CountryData = {
  "name_en": "Panama",
  "capital": "Panama City",
  "name_id": "Panama",
  "lon": -80,
  "lat": 9,
  "flag": "🇵🇦",
  "pop": "10M",
  "budget": 739,
  "income": "2111",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 7,
    "hydro_plant": 1,
    "solar_plant": 38,
    "thermal_plant": 21,
    "gas_plant": 6,
    "wind_plant": 21,
    "power_grid": 54,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 32,
    "subway": 24,
    "railway": 17,
    "highway": 33,
    "road_quality": 62,
    "sea_port": 26,
    "airport": 29,
    "bus_terminal": 9,
    "helipad": 13,
    "internet_coverage": 50,
    "tech_stack": 70,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 29,
    "uranium": 24,
    "coal": 25,
    "oil": 6,
    "gas": 19,
    "salt": 8,
    "nickel": 6,
    "lithium": 22,
    "aluminum": 13,
    "copper": 11,
    "rare_earth": 13,
    "iron_ore": 29,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 34,
    "car": 36,
    "motorcycle": 6,
    "smelter": 33,
    "concrete_cement": 40,
    "wood": 11,
    "mineral_water": 15,
    "sugar": 24,
    "bread": 14,
    "pharmacy": 33,
    "fertilizer": 31,
    "meat_processing": 29,
    "instant_noodle": 17,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 5,
    "poultry": 33,
    "dairy_cow": 24,
    "beef_cow": 40,
    "sheep_goat": 4,
    "shrimp": 5,
    "fish": 14,
    "shellfish": 34,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 8,
    "wheat": 37,
    "corn": 25,
    "tubers": 4,
    "soy": 39,
    "palm_oil": 18,
    "tea": 28,
    "coffee": 28,
    "cocoa": 8,
    "sugarcane": 3,
    "vegetables": 25,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 31,
    "barracks": 2,
    "armory": 13,
    "tank_hangar": 12,
    "military_academy": 18,
    "budget": 3057,
    "personnel": 24498,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 51,
        "apc": 173,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 25,
        "kapal_destroyer": 43,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 187,
        "helikopter_serang": 102,
        "pesawat_pengintai": 2
      },
      "total_unit": 25,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 33,
    "military_air_base": 8,
    "military_naval_base": 3,
    "arms_factory": 37,
    "nuclear_status": false,
    "space_program": 17,
    "cyber_defense": 40,
    "intelligence": 4,
    "strategic_operations": {
      "attack_mission": 19,
      "spy_mission": 2,
      "sabotage_mission": 35,
      "territory_management": 10,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 19,
      "middle_school": 19,
      "high_school": 2,
      "university": 11,
      "education_institute": 40,
      "laboratory": 2,
      "observatory": 9,
      "research_center": 34,
      "development_center": 36,
      "literacy": 78,
      "research_index": 0
    },
    "health": {
      "large_hospital": 11,
      "small_hospital": 31,
      "diagnostic_center": 15,
      "hospital_beds": 4641,
      "life_expectancy": 37,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 34,
      "stadium": 22,
      "international_stadium": 31,
      "olympic_score": 30,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 18,
      "court": 4,
      "prosecution_office": 33,
      "police_station": 8,
      "police_car_fleet": 748,
      "police_academy": 18,
      "corruption_index": 59,
      "security_index": 50,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 37,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 6,
          "kamera_surveillance": 2,
          "pusat_forensik": 1
        },
        "response_time": 2,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 10,
    "tanks": 7,
    "aircraft": 6,
    "naval": 2,
    "air_base": 34,
    "naval_base": 16,
    "military_base": 11,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 11,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 29,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52
    },
    "income": {
      "rate": 11,
      "satisfaction": 61
    },
    "customs": {
      "rate": 36,
      "satisfaction": 86
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88
    },
    "other": {
      "rate": 39,
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
    "residential": 33,
    "commercial": 9,
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
      "soft_power": 30,
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
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 32,
    "education": 25,
    "security": 15,
    "finance": 7,
    "environment": 60
  }
};
