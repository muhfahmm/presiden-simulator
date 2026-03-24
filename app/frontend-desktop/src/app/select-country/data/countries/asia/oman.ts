import { CountryData } from "../../types";

export const oman: CountryData = {
  "name_en": "Oman",
  "capital": "Muscat",
  "name_id": "Oman",
  "lon": 57,
  "lat": 21,
  "flag": "🇴🇲",
  "pop": "10M",
  "budget": 1021,
  "income": "2917",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 19,
    "hydro_plant": 1,
    "solar_plant": 22,
    "thermal_plant": 38,
    "gas_plant": 26,
    "wind_plant": 1,
    "power_grid": 85,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 1,
    "subway": 10,
    "railway": 15,
    "highway": 10,
    "road_quality": 77,
    "sea_port": 4,
    "airport": 40,
    "bus_terminal": 9,
    "helipad": 6,
    "internet_coverage": 77,
    "tech_stack": 58,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 30,
    "uranium": 39,
    "coal": 8,
    "oil": 12,
    "gas": 31,
    "salt": 34,
    "nickel": 20,
    "lithium": 2,
    "aluminum": 37,
    "copper": 31,
    "rare_earth": 11,
    "iron_ore": 6,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 11,
    "car": 2,
    "motorcycle": 14,
    "smelter": 21,
    "concrete_cement": 23,
    "wood": 30,
    "mineral_water": 30,
    "sugar": 23,
    "bread": 37,
    "pharmacy": 36,
    "fertilizer": 22,
    "meat_processing": 15,
    "instant_noodle": 15,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 5,
    "poultry": 36,
    "dairy_cow": 35,
    "beef_cow": 24,
    "sheep_goat": 35,
    "shrimp": 1,
    "fish": 21,
    "shellfish": 7,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 38,
    "wheat": 11,
    "corn": 2,
    "tubers": 34,
    "soy": 4,
    "palm_oil": 22,
    "tea": 18,
    "coffee": 16,
    "cocoa": 3,
    "sugarcane": 34,
    "vegetables": 12,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 8,
    "barracks": 15,
    "armory": 24,
    "tank_hangar": 1,
    "military_academy": 30,
    "budget": 40,
    "personnel": 11963,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 91,
        "apc": 144,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 127,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 138,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2
      },
      "total_unit": 10,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 7,
    "military_air_base": 37,
    "military_naval_base": 20,
    "arms_factory": 8,
    "nuclear_status": false,
    "space_program": 4,
    "cyber_defense": 20,
    "intelligence": 8,
    "strategic_operations": {
      "attack_mission": 2,
      "spy_mission": 13,
      "sabotage_mission": 22,
      "territory_management": 26,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 17,
      "middle_school": 17,
      "high_school": 12,
      "university": 1,
      "education_institute": 7,
      "laboratory": 38,
      "observatory": 4,
      "research_center": 16,
      "development_center": 4,
      "literacy": 60,
      "research_index": 0
    },
    "health": {
      "large_hospital": 11,
      "small_hospital": 3,
      "diagnostic_center": 26,
      "hospital_beds": 2738,
      "life_expectancy": 20,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 1,
      "racing_circuit": 11,
      "stadium": 37,
      "international_stadium": 19,
      "olympic_score": 4,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 4,
      "court": 6,
      "prosecution_office": 5,
      "police_station": 3,
      "police_car_fleet": 1122,
      "police_academy": 37,
      "corruption_index": 86,
      "security_index": 50,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 22,
          "sepeda_motor": 18,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 18,
          "kamera_surveillance": 33,
          "pusat_forensik": 1
        },
        "response_time": 6,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 24,
    "tanks": 26,
    "aircraft": 10,
    "naval": 18,
    "air_base": 33,
    "naval_base": 19,
    "military_base": 34,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 10,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 13,
      "satisfaction": 67,
      "revenue": 33
    },
    "corporate": {
      "rate": 1,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 23,
      "satisfaction": 61,
      "revenue": 47
    },
    "customs": {
      "rate": 28,
      "satisfaction": 86,
      "revenue": 31
    },
    "environment": {
      "rate": 18,
      "satisfaction": 88,
      "revenue": 38
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 6 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 16 },
    "other": {
      "rate": 40,
      "satisfaction": 93,
      "revenue": 104
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 86,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 20,
    "commercial": 26,
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
      "soft_power": 32,
      "hard_power": 19,
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
    "health": 26,
    "education": 22,
    "security": 5,
    "finance": 24,
    "environment": 60
  }
};
