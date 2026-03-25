import { CountryData } from "../../types";

export const samoa_amerika: CountryData = {
  "name_en": "American Samoa",
  "capital": "Pago Pago",
  "name_id": "Samoa amerika",
  "lon": -170,
  "lat": -14.33333333,
  "flag": "🇦🇸",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 21,
    "hydro_plant": 10,
    "solar_plant": 17,
    "thermal_plant": 25,
    "gas_plant": 32,
    "wind_plant": 6,
    "power_grid": 86,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 21,
    "subway": 24,
    "railway": 20,
    "highway": 18,
    "road_quality": 79,
    "sea_port": 35,
    "airport": 8,
    "bus_terminal": 8,
    "helipad": 10,
    "internet_coverage": 84,
    "tech_stack": 58,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 1,
    "coal": 6,
    "oil": 39,
    "gas": 18,
    "salt": 38,
    "nickel": 21,
    "lithium": 38,
    "aluminum": 35,
    "copper": 25,
    "rare_earth": 35,
    "iron_ore": 15,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 19,
    "car": 5,
    "motorcycle": 30,
    "smelter": 10,
    "concrete_cement": 24,
    "wood": 37,
    "mineral_water": 14,
    "sugar": 4,
    "bread": 15,
    "pharmacy": 33,
    "fertilizer": 36,
    "meat_processing": 35,
    "instant_noodle": 36,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 18,
    "poultry": 9,
    "dairy_cow": 5,
    "beef_cow": 26,
    "sheep_goat": 10,
    "shrimp": 38,
    "fish": 5,
    "shellfish": 7,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 27,
    "wheat": 1,
    "corn": 27,
    "tubers": 34,
    "soy": 22,
    "palm_oil": 12,
    "tea": 29,
    "coffee": 26,
    "cocoa": 20,
    "sugarcane": 1,
    "vegetables": 35,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 19,
    "barracks": 30,
    "armory": 31,
    "tank_hangar": 12,
    "military_academy": 37,
    "budget": 27,
    "personnel": 20895,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 67,
        "apc": 125,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 25,
        "kapal_destroyer": 174,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 171,
        "helikopter_serang": 182,
        "pesawat_pengintai": 2
      },
      "total_unit": 4,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 34,
    "military_air_base": 18,
    "military_naval_base": 30,
    "arms_factory": 16,
    "nuclear_status": false,
    "space_program": 9,
    "cyber_defense": 10,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 13,
      "spy_mission": 11,
      "sabotage_mission": 37,
      "territory_management": 32,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 28,
      "middle_school": 19,
      "high_school": 37,
      "university": 19,
      "education_institute": 16,
      "laboratory": 2,
      "observatory": 12,
      "research_center": 8,
      "development_center": 15,
      "literacy": 51,
      "research_index": 0
    },
    "health": {
      "large_hospital": 22,
      "small_hospital": 33,
      "diagnostic_center": 40,
      "hospital_beds": 8340,
      "life_expectancy": 29,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 21,
      "racing_circuit": 9,
      "stadium": 24,
      "international_stadium": 30,
      "olympic_score": 2,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 16,
      "court": 28,
      "prosecution_office": 14,
      "police_station": 29,
      "police_car_fleet": 3317,
      "police_academy": 20,
      "corruption_index": 69,
      "security_index": 79,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 4,
          "sepeda_motor": 33,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 7,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 25,
          "kamera_surveillance": 11,
          "pusat_forensik": 1
        },
        "response_time": 7,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 21,
    "tanks": 9,
    "aircraft": 20,
    "naval": 8,
    "air_base": 21,
    "naval_base": 7,
    "military_base": 12,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 29,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 38,
      "satisfaction": 67,
      "revenue": 9
    },
    "corporate": {
      "rate": 31,
      "satisfaction": 52,
      "revenue": 8
    },
    "income": {
      "rate": 36,
      "satisfaction": 61,
      "revenue": 10
    },
    "customs": {
      "rate": 4,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 2,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 8,
      "satisfaction": 93,
      "revenue": 2
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 80,
    "salaryGuru": 90,
    "salaryMedis": 80,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 75
  },

  "demand": {
    "satisfaction": 86,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
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
      "soft_power": 21,
      "hard_power": 3,
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
    "health": 37,
    "education": 27,
    "security": 18,
    "finance": 40,
    "environment": 60
  }
};
