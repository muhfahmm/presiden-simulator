import { CountryData } from "../../types";

export const slowakia: CountryData = {
  "name_en": "Slovakia",
  "capital": "Bratislava",
  "name_id": "Slowakia",
  "lon": 19.5,
  "lat": 48.66666666,
  "flag": "🇸🇰",
  "pop": "10M",
  "budget": 1264,
  "income": "3611",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 14,
    "hydro_plant": 22,
    "solar_plant": 8,
    "thermal_plant": 30,
    "gas_plant": 8,
    "wind_plant": 39,
    "power_grid": 93,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 24,
    "subway": 3,
    "railway": 1,
    "highway": 40,
    "road_quality": 74,
    "sea_port": 4,
    "airport": 39,
    "bus_terminal": 8,
    "helipad": 33,
    "internet_coverage": 56,
    "tech_stack": 89,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 7,
    "uranium": 38,
    "coal": 27,
    "oil": 30,
    "gas": 4,
    "salt": 23,
    "nickel": 5,
    "lithium": 38,
    "aluminum": 22,
    "copper": 1,
    "rare_earth": 21,
    "iron_ore": 7,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 7,
    "car": 33,
    "motorcycle": 18,
    "smelter": 1,
    "concrete_cement": 11,
    "wood": 20,
    "mineral_water": 33,
    "sugar": 26,
    "bread": 15,
    "pharmacy": 34,
    "fertilizer": 6,
    "meat_processing": 12,
    "instant_noodle": 38,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 13,
    "poultry": 20,
    "dairy_cow": 14,
    "beef_cow": 33,
    "sheep_goat": 14,
    "shrimp": 34,
    "fish": 5,
    "shellfish": 14,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 7,
    "wheat": 36,
    "corn": 18,
    "tubers": 28,
    "soy": 16,
    "palm_oil": 39,
    "tea": 12,
    "coffee": 32,
    "cocoa": 36,
    "sugarcane": 25,
    "vegetables": 20,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 12,
    "barracks": 10,
    "armory": 19,
    "tank_hangar": 36,
    "military_academy": 19,
    "budget": 30,
    "personnel": 9966,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 11,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 23,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 72,
        "helikopter_serang": 59,
        "pesawat_pengintai": 2
      },
      "total_unit": 36,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 15,
    "military_air_base": 5,
    "military_naval_base": 27,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 24,
    "cyber_defense": 34,
    "intelligence": 39,
    "strategic_operations": {
      "attack_mission": 23,
      "spy_mission": 38,
      "sabotage_mission": 26,
      "territory_management": 23,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 24,
      "elementary_school": 26,
      "middle_school": 4,
      "high_school": 23,
      "university": 30,
      "education_institute": 18,
      "laboratory": 1,
      "observatory": 20,
      "research_center": 36,
      "development_center": 4,
      "literacy": 56,
      "research_index": 0
    },
    "health": {
      "large_hospital": 6,
      "small_hospital": 18,
      "diagnostic_center": 21,
      "hospital_beds": 5409,
      "life_expectancy": 15,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 24,
      "racing_circuit": 22,
      "stadium": 20,
      "international_stadium": 20,
      "olympic_score": 33,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 22,
      "court": 25,
      "prosecution_office": 14,
      "police_station": 3,
      "police_car_fleet": 1466,
      "police_academy": 18,
      "corruption_index": 65,
      "security_index": 68,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 1,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 30,
          "kamera_surveillance": 36,
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
    "infantry": 40,
    "tanks": 38,
    "aircraft": 32,
    "naval": 13,
    "air_base": 39,
    "naval_base": 34,
    "military_base": 20,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 19,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 13,
      "satisfaction": 67,
      "revenue": 25
    },
    "corporate": {
      "rate": 13,
      "satisfaction": 52,
      "revenue": 39
    },
    "income": {
      "rate": 38,
      "satisfaction": 61,
      "revenue": 89
    },
    "customs": {
      "rate": 27,
      "satisfaction": 86,
      "revenue": 56
    },
    "environment": {
      "rate": 1,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 7 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 19 },
    "other": {
      "rate": 32,
      "satisfaction": 93,
      "revenue": 94
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 77,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 6,
    "commercial": 29,
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
      "soft_power": 13,
      "hard_power": 38,
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
    "agreements": [
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 22,
    "education": 30,
    "security": 14,
    "finance": 28,
    "environment": 60
  }
};
