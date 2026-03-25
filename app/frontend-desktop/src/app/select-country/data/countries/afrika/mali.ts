import { CountryData } from "../../types";

export const mali: CountryData = {
  "name_en": "Mali",
  "capital": "Bamako",
  "name_id": "Mali",
  "lon": -8,
  "lat": 12.39,
  "flag": "🇲🇱",
  "pop": "10M",
  "budget": 175,
  "income": "500",
  "religion": "Islam",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 13,
    "hydro_plant": 21,
    "nuclear_plant": 25,
    "power_grid": 50,
    "solar_plant": 16,
    "thermal_plant": 20,
    "wind_plant": 4,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 12,
    "bicycle_path": 25,
    "bus_terminal": 39,
    "helipad": 15,
    "highway": 21,
    "internet_coverage": 63,
    "railway": 22,
    "road_quality": 70,
    "sea_port": 3,
    "subway": 14,
    "tech_stack": 95,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 10,
    "coal": 34,
    "copper": 3,
    "gas": 24,
    "gold": 19,
    "iron_ore": 1,
    "lithium": 40,
    "nickel": 23,
    "oil": 29,
    "rare_earth": 31,
    "salt": 36,
    "strength": 29.660809349923973,
    "uranium": 4,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 24,
    "car": 24,
    "concrete_cement": 27,
    "fertilizer": 10,
    "instant_noodle": 12,
    "meat_processing": 5,
    "mineral_water": 29,
    "motorcycle": 2,
    "pharmacy": 32,
    "semiconductor": 20,
    "smelter": 1,
    "strength": 3.076011687404966,
    "sugar": 16,
    "wood": 1,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 40,
    "chicken": 19,
    "dairy_cow": 14,
    "fish": 11,
    "poultry": 19,
    "sheep_goat": 17,
    "shellfish": 28,
    "shrimp": 4,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 39,
    "coffee": 39,
    "corn": 11,
    "palm_oil": 8,
    "rice": 1,
    "soy": 5,
    "strength": 20.660809349923973,
    "sugarcane": 36,
    "tea": 15,
    "tubers": 39,
    "vegetables": 25,
    "wheat": 10,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 20,
    "barracks": 36,
    "armory": 17,
    "tank_hangar": 18,
    "military_academy": 17,
    "budget": 50,
    "personnel": 6980,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 18,
        "apc": 39,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 40,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 36,
        "helikopter_serang": 28,
        "pesawat_pengintai": 2,
      },
      "total_unit": 39,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 2,
    "military_naval_base": 37,
    "arms_factory": 33,
    "nuclear_status": false,
    "space_program": 4,
    "cyber_defense": 37,
    "intelligence": 14,
    "strategic_operations": {
      "attack_mission": 5,
      "spy_mission": 30,
      "sabotage_mission": 1,
      "territory_management": 3,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 25,
      "radar_network": 15,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 25,
      "elementary_school": 22,
      "middle_school": 5,
      "high_school": 36,
      "university": 15,
      "education_institute": 19,
      "laboratory": 33,
      "observatory": 17,
      "research_center": 20,
      "development_center": 17,
      "literacy": 80,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 9,
      "small_hospital": 11,
      "diagnostic_center": 5,
      "hospital_beds": 6075,
      "life_expectancy": 27,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 21,
      "racing_circuit": 3,
      "stadium": 7,
      "international_stadium": 40,
      "olympic_score": 15,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 34,
      "court": 13,
      "prosecution_office": 27,
      "police_station": 31,
      "police_car_fleet": 2788,
      "police_academy": 5,
      "corruption_index": 53,
      "security_index": 93,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 8,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 30,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 11,
          "kamera_surveillance": 18,
          "pusat_forensik": 1,
        },
        "response_time": 26,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 39,
    "tanks": 9,
    "aircraft": 30,
    "naval": 16,
    "air_base": 32,
    "naval_base": 7,
    "military_base": 22,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 15,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 38,
      "satisfaction": 67,
      "revenue": 10
    },
    "corporate": {
      "rate": 11,
      "satisfaction": 52,
      "revenue": 4
    },
    "income": {
      "rate": 12,
      "satisfaction": 61,
      "revenue": 2
    },
    "customs": {
      "rate": 21,
      "satisfaction": 86,
      "revenue": 10
    },
    "environment": {
      "rate": 14,
      "satisfaction": 88,
      "revenue": 6
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 17,
      "satisfaction": 93,
      "revenue": 7
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
    "salaryMedis": 50,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 25,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 25,
    "subsidyTransport": 25,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 73,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 10,
    "commercial": 36,
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
      "soft_power": 17,
      "hard_power": 24,
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
    "health": 9,
    "education": 20,
    "security": 21,
    "finance": 32,
    "environment": 60,
  }
};
