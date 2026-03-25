import { CountryData } from "../../types";

export const angola: CountryData = {
  "name_en": "Angola",
  "capital": "Luanda",
  "name_id": "Angola",
  "lon": 13.23,
  "lat": -8.83,
  "flag": "🇦🇴",
  "pop": 30809762,
  "budget": 826,
  "income": "2361",
  "religion": "Katolik",
  "ideology": "Sosialisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 39,
    "hydro_plant": 27,
    "nuclear_plant": 16,
    "power_grid": 85,
    "solar_plant": 25,
    "thermal_plant": 19,
    "wind_plant": 23,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 25,
    "bicycle_path": 27,
    "bus_terminal": 18,
    "helipad": 10,
    "highway": 40,
    "internet_coverage": 81,
    "railway": 39,
    "road_quality": 83,
    "sea_port": 6,
    "subway": 16,
    "tech_stack": 68,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 8,
    "coal": 13,
    "copper": 28,
    "gas": 11,
    "gold": 8,
    "iron_ore": 22,
    "lithium": 39,
    "nickel": 2,
    "oil": 80,
    "rare_earth": 50,
    "salt": 7,
    "strength": 29.660809349923973,
    "uranium": 21,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 37,
    "car": 2,
    "concrete_cement": 20,
    "fertilizer": 32,
    "instant_noodle": 13,
    "meat_processing": 31,
    "mineral_water": 40,
    "motorcycle": 38,
    "pharmacy": 23,
    "semiconductor": 1,
    "smelter": 4,
    "strength": 3.076011687404966,
    "sugar": 13,
    "wood": 22,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 17,
    "chicken": 10,
    "dairy_cow": 15,
    "fish": 13,
    "poultry": 18,
    "sheep_goat": 39,
    "shellfish": 35,
    "shrimp": 28,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 21,
    "coffee": 32,
    "corn": 35,
    "palm_oil": 39,
    "rice": 20,
    "soy": 5,
    "strength": 20.660809349923973,
    "sugarcane": 16,
    "tea": 14,
    "tubers": 9,
    "vegetables": 33,
    "wheat": 9,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 10,
    "barracks": 23,
    "armory": 38,
    "tank_hangar": 9,
    "military_academy": 4,
    "budget": 236,
    "personnel": 14025,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 19,
        "apc": 39,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 21,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 21,
        "helikopter_serang": 20,
        "pesawat_pengintai": 2,
      },
      "total_unit": 21,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 14,
    "military_air_base": 7,
    "military_naval_base": 32,
    "arms_factory": 15,
    "nuclear_status": false,
    "space_program": 3,
    "cyber_defense": 24,
    "intelligence": 26,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 17,
      "sabotage_mission": 5,
      "territory_management": 5,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 24,
      "radar_network": 30,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 26,
      "elementary_school": 24,
      "middle_school": 27,
      "high_school": 8,
      "university": 40,
      "education_institute": 35,
      "laboratory": 26,
      "observatory": 17,
      "research_center": 36,
      "development_center": 9,
      "literacy": 93,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 20,
      "small_hospital": 7,
      "diagnostic_center": 16,
      "hospital_beds": 5342,
      "life_expectancy": 28,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 30,
      "racing_circuit": 5,
      "stadium": 36,
      "international_stadium": 40,
      "olympic_score": 2,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 5,
      "court": 36,
      "prosecution_office": 24,
      "police_station": 25,
      "police_car_fleet": 4093,
      "police_academy": 18,
      "corruption_index": 74,
      "security_index": 61,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 33,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 21,
          "kamera_surveillance": 21,
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
    "infantry": 24,
    "tanks": 5,
    "aircraft": 25,
    "naval": 11,
    "air_base": 26,
    "naval_base": 35,
    "military_base": 8,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 18,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 26,
      "satisfaction": 67,
      "revenue": 49
    },
    "corporate": {
      "rate": 26,
      "satisfaction": 52,
      "revenue": 47
    },
    "income": {
      "rate": 28,
      "satisfaction": 61,
      "revenue": 56
    },
    "customs": {
      "rate": 16,
      "satisfaction": 86,
      "revenue": 32
    },
    "environment": {
      "rate": 26,
      "satisfaction": 88,
      "revenue": 62
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 5 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 13 },
    "other": {
      "rate": 34,
      "satisfaction": 93,
      "revenue": 69
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 40,
    "salaryGuru": 50,
    "salaryMedis": 40,
    "salaryMiliter": 40
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 25,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 25,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 91,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 39,
    "commercial": 13,
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
      "hard_power": 6,
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
    "health": 35,
    "education": 32,
    "security": 29,
    "finance": 18,
    "environment": 60,
  }
};
