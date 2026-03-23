import { CountryData } from "../../types";

export const slovenia: CountryData = {
  "name_en": "Slovenia",
  "capital": "Ljubljana",
  "name_id": "Slovenia",
  "lon": 14.81666666,
  "lat": 46.11666666,
  "flag": "🇸🇮",
  "pop": "10M",
  "budget": 632,
  "income": "1806",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 5,
    "hydro_plant": 25,
    "solar_plant": 11,
    "thermal_plant": 32,
    "gas_plant": 4,
    "wind_plant": 32,
    "power_grid": 68,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 18,
    "subway": 5,
    "railway": 13,
    "highway": 14,
    "road_quality": 90,
    "sea_port": 11,
    "airport": 26,
    "bus_terminal": 23,
    "helipad": 35,
    "internet_coverage": 58,
    "tech_stack": 66,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 14,
    "uranium": 9,
    "coal": 28,
    "oil": 13,
    "gas": 15,
    "salt": 27,
    "nickel": 3,
    "lithium": 11,
    "aluminum": 7,
    "copper": 15,
    "rare_earth": 7,
    "iron_ore": 17,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 10,
    "car": 26,
    "motorcycle": 40,
    "smelter": 36,
    "concrete_cement": 4,
    "wood": 12,
    "mineral_water": 6,
    "sugar": 14,
    "bread": 23,
    "pharmacy": 28,
    "fertilizer": 16,
    "meat_processing": 40,
    "instant_noodle": 25,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 35,
    "poultry": 15,
    "dairy_cow": 35,
    "beef_cow": 14,
    "sheep_goat": 16,
    "shrimp": 34,
    "fish": 18,
    "shellfish": 39,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 15,
    "wheat": 4,
    "corn": 6,
    "tubers": 31,
    "soy": 21,
    "palm_oil": 1,
    "tea": 2,
    "coffee": 21,
    "cocoa": 23,
    "sugarcane": 10,
    "vegetables": 36,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 19,
    "barracks": 2,
    "armory": 16,
    "tank_hangar": 11,
    "military_academy": 36,
    "budget": 20,
    "personnel": 18503,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 78,
        "apc": 64,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 45,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 68,
        "helikopter_serang": 62,
        "pesawat_pengintai": 2
      },
      "total_unit": 21,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 3,
    "military_air_base": 29,
    "military_naval_base": 18,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 17,
    "cyber_defense": 33,
    "intelligence": 9,
    "strategic_operations": {
      "attack_mission": 23,
      "spy_mission": 28,
      "sabotage_mission": 16,
      "territory_management": 39,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 29,
      "elementary_school": 16,
      "middle_school": 22,
      "high_school": 21,
      "university": 2,
      "education_institute": 36,
      "laboratory": 39,
      "observatory": 8,
      "research_center": 14,
      "development_center": 25,
      "literacy": 69,
      "research_index": 0
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 5,
      "diagnostic_center": 19,
      "hospital_beds": 6003,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 16,
      "racing_circuit": 3,
      "stadium": 27,
      "international_stadium": 29,
      "olympic_score": 1,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 1,
      "court": 16,
      "prosecution_office": 37,
      "police_station": 33,
      "police_car_fleet": 6972,
      "police_academy": 14,
      "corruption_index": 91,
      "security_index": 56,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 14,
          "helikopter_polisi": 16,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 18,
          "kamera_surveillance": 24,
          "pusat_forensik": 1
        },
        "response_time": 17,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 26,
    "tanks": 4,
    "aircraft": 33,
    "naval": 23,
    "air_base": 1,
    "naval_base": 29,
    "military_base": 3,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 3,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 35,
      "satisfaction": 67,
      "revenue": 61
    },
    "corporate": {
      "rate": 32,
      "satisfaction": 52,
      "revenue": 60
    },
    "income": {
      "rate": 27,
      "satisfaction": 61,
      "revenue": 32
    },
    "customs": {
      "rate": 36,
      "satisfaction": 86,
      "revenue": 52
    },
    "environment": {
      "rate": 6,
      "satisfaction": 88,
      "revenue": 11
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 4 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 10 },
    "other": {
      "rate": 13,
      "satisfaction": 93,
      "revenue": 15
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 67,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 1,
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
      "soft_power": 10,
      "hard_power": 31,
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
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 2,
    "education": 6,
    "security": 19,
    "finance": 10,
    "environment": 60
  }
};
