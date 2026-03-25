import { CountryData } from "../../types";

export const kamerun: CountryData = {
  "name_en": "Cameroon",
  "capital": "Yaoundé",
  "name_id": "Kamerun",
  "lon": 12,
  "lat": 6,
  "flag": "🇨🇲",
  "pop": "10M",
  "budget": 438,
  "income": "1250",
  "religion": "Katolik",
  "ideology": "Konservatisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 36,
    "hydro_plant": 34,
    "nuclear_plant": 23,
    "power_grid": 83,
    "solar_plant": 29,
    "thermal_plant": 5,
    "wind_plant": 32,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 5,
    "bicycle_path": 36,
    "bus_terminal": 29,
    "helipad": 17,
    "highway": 39,
    "internet_coverage": 65,
    "railway": 36,
    "road_quality": 86,
    "sea_port": 27,
    "subway": 35,
    "tech_stack": 50,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 32,
    "coal": 10,
    "copper": 7,
    "gas": 17,
    "gold": 33,
    "iron_ore": 14,
    "lithium": 6,
    "nickel": 39,
    "oil": 22,
    "rare_earth": 30,
    "salt": 22,
    "strength": 29.660809349923973,
    "uranium": 8,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 32,
    "car": 5,
    "concrete_cement": 33,
    "fertilizer": 12,
    "instant_noodle": 38,
    "meat_processing": 16,
    "mineral_water": 3,
    "motorcycle": 1,
    "pharmacy": 3,
    "semiconductor": 22,
    "smelter": 23,
    "strength": 3.076011687404966,
    "sugar": 39,
    "wood": 34,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 21,
    "chicken": 15,
    "dairy_cow": 7,
    "fish": 6,
    "poultry": 23,
    "sheep_goat": 40,
    "shellfish": 10,
    "shrimp": 39,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 27,
    "coffee": 19,
    "corn": 19,
    "palm_oil": 26,
    "rice": 25,
    "soy": 4,
    "strength": 20.660809349923973,
    "sugarcane": 33,
    "tea": 32,
    "tubers": 1,
    "vegetables": 38,
    "wheat": 24,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 13,
    "armory": 5,
    "tank_hangar": 13,
    "military_academy": 21,
    "budget": 125,
    "personnel": 11152,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 3,
        "apc": 20,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 5,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 16,
        "helikopter_serang": 18,
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
    "command_center": 5,
    "military_air_base": 12,
    "military_naval_base": 27,
    "arms_factory": 21,
    "nuclear_status": false,
    "space_program": 37,
    "cyber_defense": 18,
    "intelligence": 1,
    "strategic_operations": {
      "attack_mission": 21,
      "spy_mission": 18,
      "sabotage_mission": 37,
      "territory_management": 15,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 40,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 31,
      "elementary_school": 32,
      "middle_school": 23,
      "high_school": 34,
      "university": 38,
      "education_institute": 2,
      "laboratory": 9,
      "observatory": 10,
      "research_center": 37,
      "development_center": 40,
      "literacy": 50,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 37,
      "diagnostic_center": 3,
      "hospital_beds": 5653,
      "life_expectancy": 32,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 30,
      "racing_circuit": 32,
      "stadium": 6,
      "international_stadium": 3,
      "olympic_score": 17,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 19,
      "court": 2,
      "prosecution_office": 2,
      "police_station": 4,
      "police_car_fleet": 886,
      "police_academy": 25,
      "corruption_index": 65,
      "security_index": 75,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 36,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 40,
          "helikopter_polisi": 38,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 11,
          "kamera_surveillance": 8,
          "pusat_forensik": 1,
        },
        "response_time": 29,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 29,
    "tanks": 35,
    "aircraft": 36,
    "naval": 10,
    "air_base": 15,
    "naval_base": 15,
    "military_base": 1,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 32,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 7,
      "satisfaction": 67,
      "revenue": 5
    },
    "corporate": {
      "rate": 8,
      "satisfaction": 52,
      "revenue": 9
    },
    "income": {
      "rate": 11,
      "satisfaction": 61,
      "revenue": 8
    },
    "customs": {
      "rate": 33,
      "satisfaction": 86,
      "revenue": 29
    },
    "environment": {
      "rate": 27,
      "satisfaction": 88,
      "revenue": 30
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 3 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 7 },
    "other": {
      "rate": 3,
      "satisfaction": 93,
      "revenue": 3
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
    "salaryGuru": 50,
    "salaryMedis": 50,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 25,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 25,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 0
  },

  "demand": {
    "satisfaction": 78,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 35,
    "commercial": 16,
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
      "soft_power": 26,
      "hard_power": 19,
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
    "health": 15,
    "education": 38,
    "security": 9,
    "finance": 3,
    "environment": 60,
  }
};
