import { CountryData } from "../../types";

export const kroasia: CountryData = {
  "name_en": "Croatia",
  "capital": "Zagreb",
  "name_id": "Kroasia",
  "lon": 15.5,
  "lat": 45.16666666,
  "flag": "🇭🇷",
  "pop": "10M",
  "budget": 758,
  "income": "2167",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 27,
    "hydro_plant": 8,
    "solar_plant": 20,
    "thermal_plant": 9,
    "gas_plant": 36,
    "wind_plant": 19,
    "power_grid": 58,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 22,
    "subway": 5,
    "railway": 20,
    "highway": 28,
    "road_quality": 57,
    "sea_port": 25,
    "airport": 18,
    "bus_terminal": 5,
    "helipad": 33,
    "internet_coverage": 57,
    "tech_stack": 92,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 10,
    "uranium": 20,
    "coal": 13,
    "oil": 28,
    "gas": 22,
    "salt": 15,
    "nickel": 32,
    "lithium": 36,
    "aluminum": 38,
    "copper": 29,
    "rare_earth": 13,
    "iron_ore": 11,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 16,
    "car": 18,
    "motorcycle": 40,
    "smelter": 25,
    "concrete_cement": 17,
    "wood": 9,
    "mineral_water": 20,
    "sugar": 23,
    "bread": 3,
    "pharmacy": 14,
    "fertilizer": 3,
    "meat_processing": 11,
    "instant_noodle": 9,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 24,
    "poultry": 36,
    "dairy_cow": 7,
    "beef_cow": 25,
    "sheep_goat": 10,
    "shrimp": 27,
    "fish": 29,
    "shellfish": 39,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 39,
    "wheat": 6,
    "corn": 25,
    "tubers": 24,
    "soy": 32,
    "palm_oil": 23,
    "tea": 4,
    "coffee": 39,
    "cocoa": 16,
    "sugarcane": 1,
    "vegetables": 29,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 22,
    "barracks": 26,
    "armory": 9,
    "tank_hangar": 18,
    "military_academy": 12,
    "budget": 216,
    "personnel": 7037,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 31,
        "apc": 33,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 25,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 34,
    "military_air_base": 30,
    "military_naval_base": 13,
    "arms_factory": 34,
    "nuclear_status": false,
    "space_program": 16,
    "cyber_defense": 37,
    "intelligence": 11,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 28,
      "sabotage_mission": 39,
      "territory_management": 39,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 7,
      "radar_network": 24,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 28,
      "elementary_school": 13,
      "middle_school": 35,
      "high_school": 19,
      "university": 40,
      "education_institute": 8,
      "laboratory": 22,
      "observatory": 4,
      "research_center": 30,
      "development_center": 20,
      "literacy": 55,
      "research_index": 0
    },
    "health": {
      "large_hospital": 9,
      "small_hospital": 16,
      "diagnostic_center": 26,
      "hospital_beds": 620,
      "life_expectancy": 22,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 37,
      "racing_circuit": 37,
      "stadium": 32,
      "international_stadium": 12,
      "olympic_score": 16,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 11,
      "court": 12,
      "prosecution_office": 21,
      "police_station": 22,
      "police_car_fleet": 6330,
      "police_academy": 9,
      "corruption_index": 62,
      "security_index": 91,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 31,
          "sepeda_motor": 38,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 20,
          "kamera_surveillance": 22,
          "pusat_forensik": 1
        },
        "response_time": 27,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 3,
    "tanks": 1,
    "aircraft": 38,
    "naval": 4,
    "air_base": 22,
    "naval_base": 36,
    "military_base": 9,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 36,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 5,
      "satisfaction": 67,
      "revenue": 9
    },
    "corporate": {
      "rate": 21,
      "satisfaction": 52,
      "revenue": 33
    },
    "income": {
      "rate": 30,
      "satisfaction": 61,
      "revenue": 55
    },
    "customs": {
      "rate": 39,
      "satisfaction": 86,
      "revenue": 63
    },
    "environment": {
      "rate": 20,
      "satisfaction": 88,
      "revenue": 27
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 4 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 12 },
    "other": {
      "rate": 20,
      "satisfaction": 93,
      "revenue": 22
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
    "salaryMedis": 90,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 100,
    "subsidyUmkm": 75,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 63,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
    "commercial": 16,
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
      "soft_power": 35,
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
    "health": 36,
    "education": 8,
    "security": 33,
    "finance": 35,
    "environment": 60
  }
};
