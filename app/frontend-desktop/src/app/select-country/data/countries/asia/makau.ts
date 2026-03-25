import { CountryData } from "../../types";

export const makau: CountryData = {
  "name_en": "Macau",
  "capital": "N/A",
  "name_id": "Makau",
  "lon": 113.55,
  "lat": 22.16666666,
  "flag": "🇲🇴",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Buddha",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 24,
    "solar_plant": 39,
    "thermal_plant": 36,
    "gas_plant": 7,
    "wind_plant": 2,
    "power_grid": 66,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 5,
    "subway": 2,
    "railway": 27,
    "highway": 39,
    "road_quality": 59,
    "sea_port": 28,
    "airport": 4,
    "bus_terminal": 22,
    "helipad": 16,
    "internet_coverage": 94,
    "tech_stack": 60,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 31,
    "uranium": 24,
    "coal": 20,
    "oil": 17,
    "gas": 35,
    "salt": 39,
    "nickel": 30,
    "lithium": 10,
    "aluminum": 15,
    "copper": 38,
    "rare_earth": 5,
    "iron_ore": 39,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 33,
    "car": 1,
    "motorcycle": 26,
    "smelter": 15,
    "concrete_cement": 34,
    "wood": 9,
    "mineral_water": 3,
    "sugar": 35,
    "bread": 38,
    "pharmacy": 36,
    "fertilizer": 26,
    "meat_processing": 28,
    "instant_noodle": 4,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 1,
    "poultry": 11,
    "dairy_cow": 29,
    "beef_cow": 22,
    "sheep_goat": 19,
    "shrimp": 13,
    "fish": 14,
    "shellfish": 32,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 12,
    "wheat": 6,
    "corn": 29,
    "tubers": 33,
    "soy": 1,
    "palm_oil": 13,
    "tea": 10,
    "coffee": 22,
    "cocoa": 13,
    "sugarcane": 25,
    "vegetables": 1,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 2,
    "barracks": 12,
    "armory": 38,
    "tank_hangar": 22,
    "military_academy": 37,
    "budget": 27,
    "personnel": 23407,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 109,
        "apc": 93,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 22,
        "kapal_destroyer": 35,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 80,
        "helikopter_serang": 199,
        "pesawat_pengintai": 2
      },
      "total_unit": 6,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 29,
    "military_air_base": 33,
    "military_naval_base": 40,
    "arms_factory": 37,
    "nuclear_status": false,
    "space_program": 9,
    "cyber_defense": 37,
    "intelligence": 37,
    "strategic_operations": {
      "attack_mission": 2,
      "spy_mission": 6,
      "sabotage_mission": 15,
      "territory_management": 20,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 36,
      "elementary_school": 27,
      "middle_school": 31,
      "high_school": 3,
      "university": 38,
      "education_institute": 15,
      "laboratory": 24,
      "observatory": 3,
      "research_center": 24,
      "development_center": 13,
      "literacy": 61,
      "research_index": 0
    },
    "health": {
      "large_hospital": 38,
      "small_hospital": 33,
      "diagnostic_center": 34,
      "hospital_beds": 2590,
      "life_expectancy": 8,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 29,
      "racing_circuit": 11,
      "stadium": 27,
      "international_stadium": 12,
      "olympic_score": 38,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 23,
      "court": 33,
      "prosecution_office": 7,
      "police_station": 36,
      "police_car_fleet": 2272,
      "police_academy": 38,
      "corruption_index": 90,
      "security_index": 50,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 26,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 25,
          "kamera_surveillance": 37,
          "pusat_forensik": 1
        },
        "response_time": 22,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 32,
    "tanks": 34,
    "aircraft": 18,
    "naval": 25,
    "air_base": 15,
    "naval_base": 3,
    "military_base": 31,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 25,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 35,
      "satisfaction": 67,
      "revenue": 7
    },
    "corporate": {
      "rate": 28,
      "satisfaction": 52,
      "revenue": 3
    },
    "income": {
      "rate": 18,
      "satisfaction": 61,
      "revenue": 2
    },
    "customs": {
      "rate": 11,
      "satisfaction": 86,
      "revenue": 1
    },
    "environment": {
      "rate": 28,
      "satisfaction": 88,
      "revenue": 5
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 1,
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
    "salaryAsn": 60,
    "salaryGuru": 70,
    "salaryMedis": 80,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 75,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 56,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 24,
    "commercial": 15,
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
    "health": 17,
    "education": 22,
    "security": 6,
    "finance": 22,
    "environment": 60
  }
};
