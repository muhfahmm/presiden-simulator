import { CountryData } from "../../types";

export const uzbekistan: CountryData = {
  "name_en": "Uzbekistan",
  "capital": "Tashkent",
  "name_id": "Uzbekistan",
  "lon": 64,
  "lat": 41,
  "flag": "🇺🇿",
  "pop": "10M",
  "budget": "Rp 388 T",
  "income": "Rp 435 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 8,
    "hydro_plant": 24,
    "solar_plant": 1,
    "thermal_plant": 11,
    "gas_plant": 5,
    "wind_plant": 24,
    "power_grid": 83,
    "bicycle_path": 14,
    "subway": 8,
    "railway": 37,
    "highway": 13,
    "road_quality": 57,
    "sea_port": 2,
    "airport": 28,
    "bus_terminal": 34,
    "helipad": 29,
    "internet_coverage": 55,
    "tech_stack": 59,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 22,
    "uranium": 26,
    "coal": 12,
    "oil": 36,
    "gas": 38,
    "salt": 6,
    "nickel": 24,
    "lithium": 40,
    "aluminum": 7,
    "copper": 12,
    "rare_earth": 29,
    "iron_ore": 27,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 25,
    "car": 28,
    "motorcycle": 34,
    "smelter": 3,
    "concrete_cement": 19,
    "wood": 12,
    "mineral_water": 32,
    "sugar": 1,
    "bread": 10,
    "pharmacy": 10,
    "fertilizer": 25,
    "meat_processing": 12,
    "instant_noodle": 40,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 20,
    "poultry": 13,
    "dairy_cow": 8,
    "beef_cow": 20,
    "sheep_goat": 38,
    "shrimp": 16,
    "fish": 13,
    "shellfish": 32,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 3,
    "wheat": 14,
    "corn": 4,
    "tubers": 14,
    "soy": 25,
    "palm_oil": 16,
    "tea": 25,
    "coffee": 21,
    "cocoa": 12,
    "sugarcane": 2,
    "vegetables": 1,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 34,
    "armory": 30,
    "tank_hangar": 14,
    "military_academy": 33,
    "budget": 28,
    "personnel": 20621,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 147,
        "apc": 106,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 155,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 45,
        "helikopter_serang": 48,
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
    "command_center": 37,
    "military_air_base": 11,
    "military_naval_base": 33,
    "arms_factory": 3,
    "nuclear_status": false,
    "space_program": 23,
    "cyber_defense": 12,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 11,
      "spy_mission": 15,
      "sabotage_mission": 23,
      "territory_management": 24,
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
      "kindergarten": 31,
      "elementary_school": 18,
      "middle_school": 36,
      "high_school": 40,
      "university": 25,
      "education_institute": 1,
      "laboratory": 20,
      "observatory": 5,
      "research_center": 26,
      "development_center": 40,
      "literacy": 60,
      "research_index": 0
    },
    "health": {
      "large_hospital": 6,
      "small_hospital": 1,
      "diagnostic_center": 34,
      "hospital_beds": 6333,
      "life_expectancy": 36,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 37,
      "racing_circuit": 3,
      "stadium": 6,
      "international_stadium": 26,
      "olympic_score": 29,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 3,
      "court": 1,
      "prosecution_office": 22,
      "police_station": 3,
      "police_car_fleet": 2015,
      "police_academy": 6,
      "corruption_index": 58,
      "security_index": 63,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 6,
          "sepeda_motor": 25,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 4,
          "kamera_surveillance": 9,
          "pusat_forensik": 1
        },
        "response_time": 18,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 27,
    "tanks": 23,
    "aircraft": 5,
    "naval": 2,
    "air_base": 26,
    "naval_base": 31,
    "military_base": 24,
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
      "rate": 18,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 32,
      "satisfaction": 52
    },
    "income": {
      "rate": 26,
      "satisfaction": 61
    },
    "customs": {
      "rate": 6,
      "satisfaction": 86
    },
    "environment": {
      "rate": 19,
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
    "satisfaction": 65,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 1,
    "commercial": 37,
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
      "soft_power": 18,
      "hard_power": 3,
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
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 34,
    "education": 8,
    "security": 24,
    "finance": 31,
    "environment": 60
  }
};
