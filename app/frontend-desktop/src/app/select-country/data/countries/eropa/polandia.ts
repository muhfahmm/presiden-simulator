import { CountryData } from "../../types";

export const polandia: CountryData = {
  "name_en": "Poland",
  "capital": "Warsaw",
  "name_id": "Polandia",
  "lon": 20,
  "lat": 52,
  "flag": "🇵🇱",
  "pop": "10M",
  "budget": 600000000000000,
  "income": "471.000.000.000.000 / 471 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 32,
    "hydro_plant": 29,
    "solar_plant": 28,
    "thermal_plant": 33,
    "gas_plant": 7,
    "wind_plant": 4,
    "power_grid": 84,
    "bicycle_path": 14,
    "subway": 35,
    "railway": 21,
    "highway": 11,
    "road_quality": 81,
    "sea_port": 32,
    "airport": 23,
    "bus_terminal": 28,
    "helipad": 20,
    "internet_coverage": 76,
    "tech_stack": 64,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 9,
    "uranium": 6,
    "coal": 25,
    "oil": 9,
    "gas": 25,
    "salt": 34,
    "nickel": 12,
    "lithium": 27,
    "aluminum": 32,
    "copper": 31,
    "rare_earth": 36,
    "iron_ore": 1,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 36,
    "car": 39,
    "motorcycle": 35,
    "smelter": 11,
    "concrete_cement": 13,
    "wood": 22,
    "mineral_water": 7,
    "sugar": 32,
    "bread": 40,
    "pharmacy": 37,
    "fertilizer": 5,
    "meat_processing": 15,
    "instant_noodle": 3,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 31,
    "poultry": 14,
    "dairy_cow": 6,
    "beef_cow": 14,
    "sheep_goat": 10,
    "shrimp": 37,
    "fish": 29,
    "shellfish": 12,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 5,
    "wheat": 13,
    "corn": 18,
    "tubers": 22,
    "soy": 6,
    "palm_oil": 7,
    "tea": 3,
    "coffee": 24,
    "cocoa": 6,
    "sugarcane": 16,
    "vegetables": 22,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 16,
    "barracks": 30,
    "armory": 9,
    "tank_hangar": 29,
    "military_academy": 28,
    "budget": 24,
    "personnel": 26707,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 184,
        "apc": 163,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 4,
        "kapal_destroyer": 197,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 121,
        "helikopter_serang": 34,
        "pesawat_pengintai": 2
      },
      "total_unit": 26,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 13,
    "military_air_base": 26,
    "military_naval_base": 36,
    "arms_factory": 1,
    "nuclear_status": false,
    "space_program": 25,
    "cyber_defense": 16,
    "intelligence": 15,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 24,
      "sabotage_mission": 36,
      "territory_management": 13,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 22,
      "elementary_school": 29,
      "middle_school": 10,
      "high_school": 11,
      "university": 10,
      "education_institute": 5,
      "laboratory": 33,
      "observatory": 31,
      "research_center": 6,
      "development_center": 34,
      "literacy": 60,
      "research_index": 0
    },
    "health": {
      "large_hospital": 31,
      "small_hospital": 30,
      "diagnostic_center": 34,
      "hospital_beds": 1830,
      "life_expectancy": 32,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 33,
      "racing_circuit": 34,
      "stadium": 4,
      "international_stadium": 33,
      "olympic_score": 5,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 4,
      "court": 36,
      "prosecution_office": 3,
      "police_station": 18,
      "police_car_fleet": 3804,
      "police_academy": 20,
      "corruption_index": 72,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 39,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 23,
          "kamera_surveillance": 30,
          "pusat_forensik": 1
        },
        "response_time": 3,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 13,
    "tanks": 13,
    "aircraft": 5,
    "naval": 24,
    "air_base": 25,
    "naval_base": 10,
    "military_base": 6,
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
      "rate": 12,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 26,
      "satisfaction": 52
    },
    "income": {
      "rate": 6,
      "satisfaction": 61
    },
    "customs": {
      "rate": 34,
      "satisfaction": 86
    },
    "environment": {
      "rate": 24,
      "satisfaction": 88
    },
    "other": {
      "rate": 25,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 72,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 11,
    "commercial": 18,
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
      "soft_power": 39,
      "hard_power": 23,
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
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 11,
    "education": 32,
    "security": 17,
    "finance": 39,
    "environment": 60
  }
};
