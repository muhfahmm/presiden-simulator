import { CountryData } from "../../types";

export const malawi: CountryData = {
  "name_en": "Malawi",
  "capital": "Lilongwe",
  "name_id": "Malawi",
  "lon": 33.47,
  "lat": -13.59,
  "flag": "🇲🇼",
  "pop": 18143315,
  "budget": 117,
  "income": "333",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 29,
    "hydro_plant": 30,
    "nuclear_plant": 40,
    "power_grid": 93,
    "solar_plant": 39,
    "thermal_plant": 34,
    "wind_plant": 17,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 11,
    "bicycle_path": 2,
    "bus_terminal": 35,
    "helipad": 25,
    "highway": 24,
    "internet_coverage": 75,
    "railway": 12,
    "road_quality": 78,
    "sea_port": 14,
    "subway": 27,
    "tech_stack": 64,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 40,
    "coal": 31,
    "copper": 21,
    "gas": 27,
    "gold": 5,
    "iron_ore": 15,
    "lithium": 38,
    "nickel": 16,
    "oil": 27,
    "rare_earth": 17,
    "salt": 4,
    "strength": 29.660809349923973,
    "uranium": 5,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 22,
    "car": 29,
    "concrete_cement": 2,
    "fertilizer": 23,
    "instant_noodle": 30,
    "meat_processing": 9,
    "mineral_water": 12,
    "motorcycle": 39,
    "pharmacy": 7,
    "semiconductor": 4,
    "smelter": 34,
    "strength": 3.076011687404966,
    "sugar": 16,
    "wood": 18,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 18,
    "chicken": 20,
    "dairy_cow": 27,
    "fish": 39,
    "poultry": 24,
    "sheep_goat": 29,
    "shellfish": 1,
    "shrimp": 18,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 7,
    "coffee": 7,
    "corn": 21,
    "palm_oil": 38,
    "rice": 19,
    "soy": 37,
    "strength": 20.660809349923973,
    "sugarcane": 9,
    "tea": 24,
    "tubers": 37,
    "vegetables": 11,
    "wheat": 5,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 34,
    "armory": 1,
    "tank_hangar": 9,
    "military_academy": 38,
    "budget": 33,
    "personnel": 8841,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 36,
        "apc": 20,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 22,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 1,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2,
      },
      "total_unit": 16,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 5,
    "military_air_base": 39,
    "military_naval_base": 34,
    "arms_factory": 19,
    "nuclear_status": false,
    "space_program": 40,
    "cyber_defense": 10,
    "intelligence": 14,
    "strategic_operations": {
      "attack_mission": 20,
      "spy_mission": 1,
      "sabotage_mission": 21,
      "territory_management": 1,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 25,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 38,
      "middle_school": 16,
      "high_school": 5,
      "university": 35,
      "education_institute": 39,
      "laboratory": 6,
      "observatory": 28,
      "research_center": 19,
      "development_center": 32,
      "literacy": 95,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 1,
      "small_hospital": 23,
      "diagnostic_center": 40,
      "hospital_beds": 9033,
      "life_expectancy": 18,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 9,
      "racing_circuit": 33,
      "stadium": 38,
      "international_stadium": 13,
      "olympic_score": 17,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 29,
      "court": 18,
      "prosecution_office": 40,
      "police_station": 4,
      "police_car_fleet": 5954,
      "police_academy": 12,
      "corruption_index": 82,
      "security_index": 90,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 19,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 13,
          "kamera_surveillance": 4,
          "pusat_forensik": 1,
        },
        "response_time": 17,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 28,
    "tanks": 24,
    "aircraft": 30,
    "naval": 28,
    "air_base": 10,
    "naval_base": 35,
    "military_base": 7,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 10,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 6,
      "satisfaction": 67,
      "revenue": 1
    },
    "corporate": {
      "rate": 28,
      "satisfaction": 52,
      "revenue": 7
    },
    "income": {
      "rate": 16,
      "satisfaction": 61,
      "revenue": 2
    },
    "customs": {
      "rate": 37,
      "satisfaction": 86,
      "revenue": 7
    },
    "environment": {
      "rate": 29,
      "satisfaction": 88,
      "revenue": 8
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 30,
      "satisfaction": 93,
      "revenue": 10
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 30,
    "salaryGuru": 50,
    "salaryMedis": 50,
    "salaryMiliter": 40
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 25,
    "subsidyTransport": 25,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 55,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 3,
    "commercial": 21,
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
      "soft_power": 3,
      "hard_power": 20,
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
    "health": 40,
    "education": 27,
    "security": 5,
    "finance": 2,
    "environment": 60,
  }
};
