import { CountryData } from "../../types";

export const libya: CountryData = {
  "name_en": "Libya",
  "capital": "Tripoli",
  "name_id": "Libya",
  "lon": 13.1,
  "lat": 32.53,
  "flag": "🇱🇾",
  "pop": "10M",
  "budget": "Rp 528 T",
  "income": "Rp 530 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 30,
    "bicycle_path": 33,
    "bus_terminal": 20,
    "gas_plant": 11,
    "helipad": 11,
    "highway": 8,
    "hydro_plant": 8,
    "internet_coverage": 73,
    "nuclear_plant": 27,
    "power_grid": 63,
    "railway": 9,
    "road_quality": 86,
    "sea_port": 29,
    "solar_plant": 31,
    "subway": 28,
    "tech_stack": 95,
    "thermal_plant": 4,
    "water_access": 74,
    "wind_plant": 14,
  
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 2,
    "coal": 15,
    "copper": 15,
    "gas": 3,
    "gold": 25,
    "iron_ore": 33,
    "lithium": 36,
    "nickel": 3,
    "oil": 2,
    "rare_earth": 2,
    "salt": 7,
    "strength": 29.660809349923973,
    "uranium": 26,
  
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 26,
    "car": 40,
    "concrete_cement": 38,
    "fertilizer": 21,
    "instant_noodle": 24,
    "meat_processing": 10,
    "mineral_water": 14,
    "motorcycle": 37,
    "pharmacy": 7,
    "semiconductor": 20,
    "smelter": 25,
    "strength": 3.076011687404966,
    "sugar": 32,
    "wood": 22,
  
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 35,
    "chicken": 14,
    "dairy_cow": 23,
    "fish": 25,
    "poultry": 29,
    "sheep_goat": 20,
    "shellfish": 16,
    "shrimp": 19,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 5,
    "coffee": 38,
    "corn": 28,
    "palm_oil": 15,
    "rice": 17,
    "soy": 25,
    "strength": 20.660809349923973,
    "sugarcane": 23,
    "tea": 17,
    "tubers": 39,
    "vegetables": 39,
    "wheat": 28,
  
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 11,
    "barracks": 24,
    "armory": 32,
    "tank_hangar": 25,
    "military_academy": 17,
    "budget": 28,
    "personnel": 23085,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 8,
        "apc": 2,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 15,
        "kapal_destroyer": 28,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 25,
        "helikopter_serang": 1,
        "pesawat_pengintai": 2,
      },
      "total_unit": 36,
      "readiness": 98,
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 2,
    "military_air_base": 26,
    "military_naval_base": 30,
    "arms_factory": 8,
    "nuclear_status": false,
    "space_program": 33,
    "cyber_defense": 2,
    "intelligence": 31,
    "strategic_operations": {
      "attack_mission": 38,
      "spy_mission": 27,
      "sabotage_mission": 37,
      "territory_management": 11,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 39,
      "radar_network": 10,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 24,
      "middle_school": 10,
      "high_school": 25,
      "university": 11,
      "education_institute": 9,
      "laboratory": 34,
      "observatory": 14,
      "research_center": 3,
      "development_center": 18,
      "literacy": 88,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 30,
      "small_hospital": 19,
      "diagnostic_center": 12,
      "hospital_beds": 6470,
      "life_expectancy": 21,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 18,
      "stadium": 26,
      "international_stadium": 33,
      "olympic_score": 18,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 18,
      "court": 27,
      "prosecution_office": 30,
      "police_station": 31,
      "police_car_fleet": 3278,
      "police_academy": 37,
      "corruption_index": 94,
      "security_index": 89,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 17,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 33,
          "kamera_surveillance": 38,
          "pusat_forensik": 1,
        },
        "response_time": 21,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 15,
    "tanks": 1,
    "aircraft": 2,
    "naval": 18,
    "air_base": 33,
    "naval_base": 6,
    "military_base": 23,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 17,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 8,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 7,
      "satisfaction": 52,
    },
    "income": {
      "rate": 18,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 22,
      "satisfaction": 88,
    },
    "other": {
      "rate": 36,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 95,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 25,
    "commercial": 30,
    "industrial": 53,
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
      "soft_power": 17,
      "hard_power": 23,
      "diplomatic_prestige": 57,
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member",
      },
      {
        "name": "WHO",
        "role": "Member",
      },
      {
        "name": "WTO",
        "role": "Member",
      }
    ],
    "agreements": [
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 37,
    "education": 6,
    "security": 38,
    "finance": 22,
    "environment": 60,
  }
};
