import { CountryData } from "../../types";

export const papua_nugini: CountryData = {
  "name_en": "Papua New Guinea",
  "capital": "Port Moresby",
  "name_id": "Papua nugini",
  "lon": 147,
  "lat": -6,
  "flag": "🇵🇬",
  "pop": "10M",
  "budget": 292,
  "income": "833",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 4,
    "hydro_plant": 10,
    "solar_plant": 15,
    "thermal_plant": 28,
    "gas_plant": 15,
    "wind_plant": 26,
    "power_grid": 68,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 20,
    "subway": 1,
    "railway": 4,
    "highway": 17,
    "road_quality": 67,
    "sea_port": 13,
    "airport": 13,
    "bus_terminal": 30,
    "helipad": 13,
    "internet_coverage": 85,
    "tech_stack": 70,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 24,
    "uranium": 19,
    "coal": 17,
    "oil": 11,
    "gas": 16,
    "salt": 21,
    "nickel": 25,
    "lithium": 34,
    "aluminum": 9,
    "copper": 22,
    "rare_earth": 2,
    "iron_ore": 39,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 16,
    "car": 11,
    "motorcycle": 23,
    "smelter": 25,
    "concrete_cement": 22,
    "wood": 4,
    "mineral_water": 10,
    "sugar": 24,
    "bread": 3,
    "pharmacy": 39,
    "fertilizer": 8,
    "meat_processing": 2,
    "instant_noodle": 23,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 15,
    "poultry": 26,
    "dairy_cow": 34,
    "beef_cow": 3,
    "sheep_goat": 22,
    "shrimp": 3,
    "fish": 1,
    "shellfish": 25,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 12,
    "wheat": 36,
    "corn": 7,
    "tubers": 34,
    "soy": 9,
    "palm_oil": 23,
    "tea": 7,
    "coffee": 25,
    "cocoa": 2,
    "sugarcane": 32,
    "vegetables": 38,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 25,
    "barracks": 39,
    "armory": 30,
    "tank_hangar": 13,
    "military_academy": 19,
    "budget": 83,
    "personnel": 17167,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 174,
        "apc": 109,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 38,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 38,
        "helikopter_serang": 17,
        "pesawat_pengintai": 2
      },
      "total_unit": 19,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 35,
    "military_air_base": 33,
    "military_naval_base": 21,
    "arms_factory": 23,
    "nuclear_status": false,
    "space_program": 13,
    "cyber_defense": 34,
    "intelligence": 5,
    "strategic_operations": {
      "attack_mission": 29,
      "spy_mission": 37,
      "sabotage_mission": 28,
      "territory_management": 39,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 30,
      "elementary_school": 29,
      "middle_school": 17,
      "high_school": 1,
      "university": 20,
      "education_institute": 24,
      "laboratory": 29,
      "observatory": 22,
      "research_center": 7,
      "development_center": 15,
      "literacy": 74,
      "research_index": 0
    },
    "health": {
      "large_hospital": 32,
      "small_hospital": 40,
      "diagnostic_center": 5,
      "hospital_beds": 3576,
      "life_expectancy": 35,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 24,
      "stadium": 29,
      "international_stadium": 11,
      "olympic_score": 40,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 20,
      "court": 16,
      "prosecution_office": 6,
      "police_station": 34,
      "police_car_fleet": 2579,
      "police_academy": 36,
      "corruption_index": 87,
      "security_index": 88,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 12,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 20,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 7,
          "kamera_surveillance": 21,
          "pusat_forensik": 1
        },
        "response_time": 8,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 23,
    "tanks": 13,
    "aircraft": 38,
    "naval": 22,
    "air_base": 37,
    "naval_base": 17,
    "military_base": 37,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 9,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 5,
      "satisfaction": 67,
      "revenue": 3
    },
    "corporate": {
      "rate": 5,
      "satisfaction": 52,
      "revenue": 3
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
      "revenue": 9
    },
    "customs": {
      "rate": 3,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 16,
      "satisfaction": 88,
      "revenue": 13
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 5 },
    "other": {
      "rate": 31,
      "satisfaction": 93,
      "revenue": 23
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 90,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 90
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 90,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 2,
    "commercial": 9,
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
      "soft_power": 36,
      "hard_power": 6,
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
    "health": 10,
    "education": 21,
    "security": 37,
    "finance": 23,
    "environment": 60
  }
};
