import { CountryData } from "../../types";

export const kiribati: CountryData = {
  "name_en": "Kiribati",
  "capital": "South Tarawa",
  "name_id": "Kiribati",
  "lon": 173,
  "lat": 1.41666666,
  "flag": "🇰🇮",
  "pop": "10M",
  "budget": 10,
  "income": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 38,
    "hydro_plant": 5,
    "solar_plant": 19,
    "thermal_plant": 34,
    "gas_plant": 32,
    "wind_plant": 15,
    "power_grid": 76,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 3,
    "subway": 19,
    "railway": 33,
    "highway": 39,
    "road_quality": 90,
    "sea_port": 39,
    "airport": 3,
    "bus_terminal": 7,
    "helipad": 2,
    "internet_coverage": 69,
    "tech_stack": 72,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 19,
    "uranium": 21,
    "coal": 25,
    "oil": 40,
    "gas": 34,
    "salt": 1,
    "nickel": 38,
    "lithium": 34,
    "aluminum": 6,
    "copper": 1,
    "rare_earth": 25,
    "iron_ore": 32,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 18,
    "car": 8,
    "motorcycle": 21,
    "smelter": 36,
    "concrete_cement": 21,
    "wood": 32,
    "mineral_water": 5,
    "sugar": 13,
    "bread": 12,
    "pharmacy": 2,
    "fertilizer": 34,
    "meat_processing": 35,
    "instant_noodle": 25,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 20,
    "poultry": 13,
    "dairy_cow": 29,
    "beef_cow": 26,
    "sheep_goat": 17,
    "shrimp": 26,
    "fish": 26,
    "shellfish": 1,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 14,
    "wheat": 28,
    "corn": 36,
    "tubers": 34,
    "soy": 40,
    "palm_oil": 36,
    "tea": 27,
    "coffee": 7,
    "cocoa": 19,
    "sugarcane": 6,
    "vegetables": 3,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 26,
    "barracks": 10,
    "armory": 6,
    "tank_hangar": 22,
    "military_academy": 9,
    "budget": 1,
    "personnel": 11061,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 10,
        "apc": 20,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 16,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 8,
        "helikopter_serang": 21,
        "pesawat_pengintai": 2
      },
      "total_unit": 34,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 12,
    "military_air_base": 19,
    "military_naval_base": 28,
    "arms_factory": 35,
    "nuclear_status": false,
    "space_program": 25,
    "cyber_defense": 31,
    "intelligence": 12,
    "strategic_operations": {
      "attack_mission": 6,
      "spy_mission": 21,
      "sabotage_mission": 1,
      "territory_management": 37,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 8,
      "radar_network": 19,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 15,
      "elementary_school": 8,
      "middle_school": 18,
      "high_school": 1,
      "university": 16,
      "education_institute": 1,
      "laboratory": 25,
      "observatory": 2,
      "research_center": 13,
      "development_center": 33,
      "literacy": 78,
      "research_index": 0
    },
    "health": {
      "large_hospital": 1,
      "small_hospital": 14,
      "diagnostic_center": 6,
      "hospital_beds": 4018,
      "life_expectancy": 7,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 31,
      "racing_circuit": 2,
      "stadium": 35,
      "international_stadium": 2,
      "olympic_score": 17,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 2,
      "court": 28,
      "prosecution_office": 34,
      "police_station": 26,
      "police_car_fleet": 3919,
      "police_academy": 13,
      "corruption_index": 55,
      "security_index": 87,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 19,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 20,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 34,
          "kamera_surveillance": 32,
          "pusat_forensik": 1
        },
        "response_time": 4,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 7,
    "aircraft": 1,
    "naval": 12,
    "air_base": 40,
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
    "buy_commodity": 34,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 11,
      "satisfaction": 67,
      "revenue": 0
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 33,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 25,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 36,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 9,
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
    "salaryAsn": 80,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 89,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 38,
    "commercial": 36,
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
      "soft_power": 3,
      "hard_power": 18,
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
    "health": 11,
    "education": 23,
    "security": 9,
    "finance": 16,
    "environment": 60
  }
};
