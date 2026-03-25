import { CountryData } from "../../types";

export const somalia: CountryData = {
  "name_en": "Somalia",
  "capital": "Mogadishu",
  "name_id": "Somalia",
  "lon": 49,
  "lat": 10,
  "flag": "🇸🇴",
  "pop": "10M",
  "budget": 78,
  "income": "222",
  "religion": "Islam",
  "ideology": "Konservatisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 22,
    "hydro_plant": 17,
    "nuclear_plant": 35,
    "power_grid": 84,
    "solar_plant": 33,
    "thermal_plant": 9,
    "wind_plant": 2,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 36,
    "bicycle_path": 22,
    "bus_terminal": 34,
    "helipad": 40,
    "highway": 39,
    "internet_coverage": 93,
    "railway": 28,
    "road_quality": 66,
    "sea_port": 2,
    "subway": 17,
    "tech_stack": 80,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 23,
    "coal": 23,
    "copper": 6,
    "gas": 28,
    "gold": 2,
    "iron_ore": 39,
    "lithium": 13,
    "nickel": 6,
    "oil": 25,
    "rare_earth": 20,
    "salt": 10,
    "strength": 29.660809349923973,
    "uranium": 27,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 9,
    "car": 5,
    "concrete_cement": 12,
    "fertilizer": 8,
    "instant_noodle": 8,
    "meat_processing": 34,
    "mineral_water": 9,
    "motorcycle": 13,
    "pharmacy": 36,
    "semiconductor": 16,
    "smelter": 39,
    "strength": 3.076011687404966,
    "sugar": 28,
    "wood": 33,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 9,
    "chicken": 11,
    "dairy_cow": 24,
    "fish": 39,
    "poultry": 38,
    "sheep_goat": 23,
    "shellfish": 22,
    "shrimp": 12,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 33,
    "coffee": 15,
    "corn": 28,
    "palm_oil": 22,
    "rice": 31,
    "soy": 15,
    "strength": 20.660809349923973,
    "sugarcane": 16,
    "tea": 21,
    "tubers": 36,
    "vegetables": 12,
    "wheat": 24,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 8,
    "barracks": 8,
    "armory": 25,
    "tank_hangar": 11,
    "military_academy": 13,
    "budget": 22,
    "personnel": 26203,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 72,
        "apc": 147,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 99,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 166,
        "helikopter_serang": 198,
        "pesawat_pengintai": 2,
      },
      "total_unit": 25,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 33,
    "military_air_base": 30,
    "military_naval_base": 13,
    "arms_factory": 22,
    "nuclear_status": false,
    "space_program": 31,
    "cyber_defense": 18,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 3,
      "spy_mission": 4,
      "sabotage_mission": 17,
      "territory_management": 34,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 0,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 38,
      "elementary_school": 19,
      "middle_school": 20,
      "high_school": 24,
      "university": 21,
      "education_institute": 35,
      "laboratory": 1,
      "observatory": 1,
      "research_center": 38,
      "development_center": 3,
      "literacy": 74,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 40,
      "small_hospital": 23,
      "diagnostic_center": 22,
      "hospital_beds": 7592,
      "life_expectancy": 40,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 22,
      "racing_circuit": 40,
      "stadium": 37,
      "international_stadium": 34,
      "olympic_score": 38,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 11,
      "court": 3,
      "prosecution_office": 22,
      "police_station": 27,
      "police_car_fleet": 9421,
      "police_academy": 17,
      "corruption_index": 78,
      "security_index": 74,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 17,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 22,
          "helikopter_polisi": 8,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 10,
          "kamera_surveillance": 38,
          "pusat_forensik": 1,
        },
        "response_time": 35,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 4,
    "tanks": 33,
    "aircraft": 1,
    "naval": 19,
    "air_base": 30,
    "naval_base": 33,
    "military_base": 37,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 2,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 12,
      "satisfaction": 67,
      "revenue": 1
    },
    "corporate": {
      "rate": 12,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 39,
      "satisfaction": 61,
      "revenue": 5
    },
    "customs": {
      "rate": 11,
      "satisfaction": 86,
      "revenue": 2
    },
    "environment": {
      "rate": 6,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 40,
      "satisfaction": 93,
      "revenue": 5
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
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 25,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 25,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 67,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 14,
    "commercial": 20,
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
      "soft_power": 35,
      "hard_power": 10,
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
    "health": 8,
    "education": 11,
    "security": 24,
    "finance": 13,
    "environment": 60,
  }
};
