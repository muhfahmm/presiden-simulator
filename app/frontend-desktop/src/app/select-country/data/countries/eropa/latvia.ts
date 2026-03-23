import { CountryData } from "../../types";

export const latvia: CountryData = {
  "name_en": "Latvia",
  "capital": "Riga",
  "name_id": "Latvia",
  "lon": 25,
  "lat": 57,
  "flag": "🇱🇻",
  "pop": "10M",
  "budget": 553000000000000,
  "income": "826.000.000.000.000 / 826 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 12,
    "hydro_plant": 11,
    "solar_plant": 35,
    "thermal_plant": 2,
    "gas_plant": 11,
    "wind_plant": 30,
    "power_grid": 51,
    "bicycle_path": 2,
    "subway": 18,
    "railway": 30,
    "highway": 15,
    "road_quality": 54,
    "sea_port": 6,
    "airport": 22,
    "bus_terminal": 5,
    "helipad": 30,
    "internet_coverage": 65,
    "tech_stack": 86,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 11,
    "uranium": 30,
    "coal": 27,
    "oil": 3,
    "gas": 39,
    "salt": 29,
    "nickel": 32,
    "lithium": 10,
    "aluminum": 9,
    "copper": 1,
    "rare_earth": 2,
    "iron_ore": 28,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 28,
    "car": 17,
    "motorcycle": 29,
    "smelter": 39,
    "concrete_cement": 40,
    "wood": 23,
    "mineral_water": 32,
    "sugar": 38,
    "bread": 39,
    "pharmacy": 20,
    "fertilizer": 29,
    "meat_processing": 20,
    "instant_noodle": 21,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 12,
    "poultry": 17,
    "dairy_cow": 1,
    "beef_cow": 28,
    "sheep_goat": 24,
    "shrimp": 9,
    "fish": 28,
    "shellfish": 32,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 14,
    "wheat": 11,
    "corn": 3,
    "tubers": 21,
    "soy": 21,
    "palm_oil": 10,
    "tea": 37,
    "coffee": 38,
    "cocoa": 18,
    "sugarcane": 27,
    "vegetables": 28,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 13,
    "barracks": 36,
    "armory": 25,
    "tank_hangar": 32,
    "military_academy": 38,
    "budget": 25,
    "personnel": 25559,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 31,
        "apc": 3,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 26,
        "helikopter_serang": 17,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 29,
    "military_air_base": 22,
    "military_naval_base": 1,
    "arms_factory": 18,
    "nuclear_status": false,
    "space_program": 20,
    "cyber_defense": 28,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 13,
      "spy_mission": 16,
      "sabotage_mission": 37,
      "territory_management": 14,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 22,
      "radar_network": 27,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 18,
      "middle_school": 3,
      "high_school": 11,
      "university": 18,
      "education_institute": 40,
      "laboratory": 32,
      "observatory": 18,
      "research_center": 39,
      "development_center": 24,
      "literacy": 70,
      "research_index": 0
    },
    "health": {
      "large_hospital": 27,
      "small_hospital": 24,
      "diagnostic_center": 28,
      "hospital_beds": 4897,
      "life_expectancy": 6,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 7,
      "racing_circuit": 11,
      "stadium": 21,
      "international_stadium": 19,
      "olympic_score": 29,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 20,
      "court": 25,
      "prosecution_office": 33,
      "police_station": 32,
      "police_car_fleet": 1008,
      "police_academy": 29,
      "corruption_index": 56,
      "security_index": 59,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 32,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 11,
          "kamera_surveillance": 4,
          "pusat_forensik": 1
        },
        "response_time": 8,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 35,
    "tanks": 16,
    "aircraft": 26,
    "naval": 33,
    "air_base": 15,
    "naval_base": 37,
    "military_base": 11,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 7,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 39,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 35,
      "satisfaction": 52
    },
    "income": {
      "rate": 14,
      "satisfaction": 61
    },
    "customs": {
      "rate": 36,
      "satisfaction": 86
    },
    "environment": {
      "rate": 36,
      "satisfaction": 88
    },
    "other": {
      "rate": 18,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 63,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
    "commercial": 30,
    "industrial": 53
  },

  // =============================================================
  // 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 37,
      "hard_power": 17,
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
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 16,
    "education": 1,
    "security": 31,
    "finance": 27,
    "environment": 60
  }
};
