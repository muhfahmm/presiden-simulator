import { CountryData } from "../../types";

export const kirgizstan: CountryData = {
  "name_en": "Kyrgyzstan",
  "capital": "Bishkek",
  "name_id": "Kirgizstan",
  "lon": 75,
  "lat": 41,
  "flag": "🇰🇬",
  "pop": 6322800,
  "budget": 117,
  "income": "333",
  "religion": "Islam",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 17,
    "hydro_plant": 34,
    "solar_plant": 9,
    "thermal_plant": 2,
    "gas_plant": 1,
    "wind_plant": 27,
    "power_grid": 67,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 33,
    "subway": 23,
    "railway": 1,
    "highway": 30,
    "road_quality": 86,
    "sea_port": 7,
    "airport": 23,
    "bus_terminal": 23,
    "helipad": 27,
    "internet_coverage": 53,
    "tech_stack": 91,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 14,
    "uranium": 38,
    "coal": 14,
    "oil": 39,
    "gas": 38,
    "salt": 17,
    "nickel": 19,
    "lithium": 15,
    "aluminum": 24,
    "copper": 32,
    "rare_earth": 18,
    "iron_ore": 11,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 18,
    "car": 30,
    "motorcycle": 14,
    "smelter": 23,
    "concrete_cement": 34,
    "wood": 21,
    "mineral_water": 20,
    "sugar": 14,
    "bread": 36,
    "pharmacy": 34,
    "fertilizer": 8,
    "meat_processing": 38,
    "instant_noodle": 13,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 33,
    "poultry": 17,
    "dairy_cow": 17,
    "beef_cow": 31,
    "sheep_goat": 39,
    "shrimp": 27,
    "fish": 19,
    "shellfish": 26,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 37,
    "wheat": 12,
    "corn": 5,
    "tubers": 9,
    "soy": 36,
    "palm_oil": 2,
    "tea": 28,
    "coffee": 26,
    "cocoa": 31,
    "sugarcane": 38,
    "vegetables": 5,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 34,
    "barracks": 5,
    "armory": 18,
    "tank_hangar": 30,
    "military_academy": 25,
    "budget": 33,
    "personnel": 13635,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 20,
        "apc": 13,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 6,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 19,
        "helikopter_serang": 13,
        "pesawat_pengintai": 2
      },
      "total_unit": 39,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 8,
    "military_air_base": 15,
    "military_naval_base": 9,
    "arms_factory": 32,
    "nuclear_status": false,
    "space_program": 29,
    "cyber_defense": 29,
    "intelligence": 24,
    "strategic_operations": {
      "attack_mission": 29,
      "spy_mission": 28,
      "sabotage_mission": 40,
      "territory_management": 21,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 21,
      "radar_network": 25,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 6,
      "elementary_school": 5,
      "middle_school": 21,
      "high_school": 18,
      "university": 40,
      "education_institute": 28,
      "laboratory": 17,
      "observatory": 20,
      "research_center": 22,
      "development_center": 14,
      "literacy": 69,
      "research_index": 0
    },
    "health": {
      "large_hospital": 22,
      "small_hospital": 22,
      "diagnostic_center": 28,
      "hospital_beds": 6414,
      "life_expectancy": 15,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 16,
      "racing_circuit": 25,
      "stadium": 23,
      "international_stadium": 35,
      "olympic_score": 8,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 38,
      "court": 15,
      "prosecution_office": 37,
      "police_station": 9,
      "police_car_fleet": 5304,
      "police_academy": 33,
      "corruption_index": 90,
      "security_index": 77,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 12,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 9,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 24,
          "kamera_surveillance": 17,
          "pusat_forensik": 1
        },
        "response_time": 36,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 20,
    "aircraft": 6,
    "naval": 39,
    "air_base": 11,
    "naval_base": 1,
    "military_base": 36,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 39,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 34,
      "satisfaction": 67,
      "revenue": 6
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52,
      "revenue": 1
    },
    "income": {
      "rate": 38,
      "satisfaction": 61,
      "revenue": 9
    },
    "customs": {
      "rate": 9,
      "satisfaction": 86,
      "revenue": 2
    },
    "environment": {
      "rate": 19,
      "satisfaction": 88,
      "revenue": 2
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 5,
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
    "salaryGuru": 60,
    "salaryMedis": 80,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 94,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 14,
    "commercial": 1,
    "industrial": 53
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
      "soft_power": 15,
      "hard_power": 2,
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
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 16,
    "education": 1,
    "security": 37,
    "finance": 26,
    "environment": 60
  }
};
