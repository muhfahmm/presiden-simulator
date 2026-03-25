import { CountryData } from "../../types";

export const sao_tome_dan_principe: CountryData = {
  "name_en": "Sao Tome and Principe",
  "capital": "São Tomé",
  "name_id": "Sao tome dan principe",
  "lon": 7,
  "lat": 1,
  "flag": "🇸🇹",
  "pop": 211028,
  "budget": 10,
  "income": "17",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 38,
    "hydro_plant": 20,
    "nuclear_plant": 5,
    "power_grid": 56,
    "solar_plant": 35,
    "thermal_plant": 10,
    "wind_plant": 10,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 37,
    "bicycle_path": 31,
    "bus_terminal": 23,
    "helipad": 15,
    "highway": 3,
    "internet_coverage": 63,
    "railway": 22,
    "road_quality": 86,
    "sea_port": 23,
    "subway": 36,
    "tech_stack": 58,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 29,
    "coal": 25,
    "copper": 30,
    "gas": 28,
    "gold": 6,
    "iron_ore": 4,
    "lithium": 32,
    "nickel": 40,
    "oil": 16,
    "rare_earth": 3,
    "salt": 16,
    "strength": 29.660809349923973,
    "uranium": 38,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 1,
    "car": 14,
    "concrete_cement": 3,
    "fertilizer": 20,
    "instant_noodle": 33,
    "meat_processing": 25,
    "mineral_water": 5,
    "motorcycle": 33,
    "pharmacy": 9,
    "semiconductor": 31,
    "smelter": 10,
    "strength": 3.076011687404966,
    "sugar": 23,
    "wood": 8,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 20,
    "chicken": 19,
    "dairy_cow": 12,
    "fish": 10,
    "poultry": 20,
    "sheep_goat": 37,
    "shellfish": 5,
    "shrimp": 25,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 23,
    "coffee": 39,
    "corn": 13,
    "palm_oil": 36,
    "rice": 37,
    "soy": 26,
    "strength": 20.660809349923973,
    "sugarcane": 25,
    "tea": 21,
    "tubers": 16,
    "vegetables": 6,
    "wheat": 39,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 34,
    "barracks": 1,
    "armory": 12,
    "tank_hangar": 7,
    "military_academy": 21,
    "budget": 1,
    "personnel": 7538,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 54,
        "apc": 110,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 90,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 39,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2,
      },
      "total_unit": 35,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 22,
    "military_air_base": 28,
    "military_naval_base": 20,
    "arms_factory": 10,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 6,
    "intelligence": 8,
    "strategic_operations": {
      "attack_mission": 36,
      "spy_mission": 14,
      "sabotage_mission": 18,
      "territory_management": 2,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 1,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 29,
      "middle_school": 31,
      "high_school": 12,
      "university": 32,
      "education_institute": 22,
      "laboratory": 39,
      "observatory": 30,
      "research_center": 21,
      "development_center": 26,
      "literacy": 81,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 21,
      "small_hospital": 27,
      "diagnostic_center": 2,
      "hospital_beds": 7023,
      "life_expectancy": 15,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 19,
      "racing_circuit": 10,
      "stadium": 18,
      "international_stadium": 30,
      "olympic_score": 26,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 6,
      "court": 38,
      "prosecution_office": 3,
      "police_station": 27,
      "police_car_fleet": 8625,
      "police_academy": 19,
      "corruption_index": 62,
      "security_index": 57,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 34,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 8,
          "kamera_surveillance": 24,
          "pusat_forensik": 1,
        },
        "response_time": 39,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 25,
    "tanks": 10,
    "aircraft": 10,
    "naval": 9,
    "air_base": 33,
    "naval_base": 19,
    "military_base": 31,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 14,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 8,
      "satisfaction": 67,
      "revenue": 0
    },
    "corporate": {
      "rate": 32,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 35,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 32,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 6,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 10,
      "satisfaction": 93,
      "revenue": 0
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 50,
    "salaryGuru": 40,
    "salaryMedis": 40,
    "salaryMiliter": 40
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 25,
    "subsidyTransport": 25,
    "subsidyRumah": 0
  },

  "demand": {
    "satisfaction": 56,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 26,
    "commercial": 27,
    "industrial": 53,
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
      "soft_power": 37,
      "hard_power": 38,
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
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 3,
    "education": 23,
    "security": 22,
    "finance": 22,
    "environment": 60,
  }
};
