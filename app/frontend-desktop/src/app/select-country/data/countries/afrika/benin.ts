import { CountryData } from "../../types";

export const benin: CountryData = {
  "name_en": "Benin",
  "capital": "Porto-Novo",
  "name_id": "Benin",
  "lon": 2.25,
  "lat": 9.5,
  "flag": "🇧🇯",
  "pop": "10M",
  "budget": 639000000000000,
  "income": "842.000.000.000.000 / 842 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 38,
    "bicycle_path": 10,
    "bus_terminal": 15,
    "gas_plant": 9,
    "helipad": 6,
    "highway": 1,
    "hydro_plant": 32,
    "internet_coverage": 74,
    "nuclear_plant": 5,
    "power_grid": 79,
    "railway": 29,
    "road_quality": 86,
    "sea_port": 6,
    "solar_plant": 25,
    "subway": 32,
    "tech_stack": 77,
    "thermal_plant": 13,
    "water_access": 74,
    "wind_plant": 16,
  
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 19,
    "coal": 29,
    "copper": 5,
    "gas": 34,
    "gold": 8,
    "iron_ore": 4,
    "lithium": 12,
    "nickel": 19,
    "oil": 5,
    "rare_earth": 4,
    "salt": 23,
    "strength": 29.660809349923973,
    "uranium": 34,
  
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 32,
    "car": 31,
    "concrete_cement": 10,
    "fertilizer": 26,
    "instant_noodle": 5,
    "meat_processing": 21,
    "mineral_water": 32,
    "motorcycle": 2,
    "pharmacy": 1,
    "semiconductor": 23,
    "smelter": 14,
    "strength": 3.076011687404966,
    "sugar": 9,
    "wood": 23,
  
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 31,
    "chicken": 24,
    "dairy_cow": 12,
    "fish": 11,
    "poultry": 12,
    "sheep_goat": 27,
    "shellfish": 31,
    "shrimp": 31,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 12,
    "coffee": 9,
    "corn": 2,
    "palm_oil": 35,
    "rice": 17,
    "soy": 39,
    "strength": 20.660809349923973,
    "sugarcane": 29,
    "tea": 14,
    "tubers": 40,
    "vegetables": 1,
    "wheat": 9,
  
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 30,
    "barracks": 27,
    "armory": 27,
    "tank_hangar": 12,
    "military_academy": 5,
    "budget": 27,
    "personnel": 11853,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 1,
        "apc": 10,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 16,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 6,
        "helikopter_serang": 3,
        "pesawat_pengintai": 2,
      },
      "total_unit": 17,
      "readiness": 98,
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 33,
    "military_air_base": 16,
    "military_naval_base": 5,
    "arms_factory": 27,
    "nuclear_status": false,
    "space_program": 36,
    "cyber_defense": 32,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 30,
      "spy_mission": 20,
      "sabotage_mission": 18,
      "territory_management": 12,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 8,
      "radar_network": 21,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 18,
      "elementary_school": 28,
      "middle_school": 25,
      "high_school": 21,
      "university": 38,
      "education_institute": 27,
      "laboratory": 8,
      "observatory": 33,
      "research_center": 17,
      "development_center": 36,
      "literacy": 87,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 17,
      "small_hospital": 19,
      "diagnostic_center": 17,
      "hospital_beds": 9601,
      "life_expectancy": 6,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 40,
      "racing_circuit": 33,
      "stadium": 9,
      "international_stadium": 13,
      "olympic_score": 32,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 13,
      "court": 20,
      "prosecution_office": 7,
      "police_station": 36,
      "police_car_fleet": 7222,
      "police_academy": 33,
      "corruption_index": 71,
      "security_index": 55,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 8,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 32,
          "kamera_surveillance": 30,
          "pusat_forensik": 1,
        },
        "response_time": 5,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 36,
    "aircraft": 8,
    "naval": 27,
    "air_base": 9,
    "naval_base": 7,
    "military_base": 29,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 18,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 18,
      "satisfaction": 52,
    },
    "income": {
      "rate": 28,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 24,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 22,
      "satisfaction": 88,
    },
    "other": {
      "rate": 29,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 82,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 33,
    "commercial": 20,
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
      "soft_power": 1,
      "hard_power": 31,
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
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 22,
    "education": 32,
    "security": 17,
    "finance": 7,
    "environment": 60,
  }
};
