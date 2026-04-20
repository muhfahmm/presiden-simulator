import { buildingStorage } from "../../../../2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { playerMilitaryStorage } from "./playerMilitaryStorage";

const AID_STORAGE_KEY = "em_military_aid_data";

export interface AidData {
  [targetId: string]: Record<string, number>;
}

// Maps building keys to database paths
export const MILITARY_KEY_MAP: Record<string, string> = {
  tank_tempur_utama: "tank",
  apc_ifv: "apc",
  artileri_berat: "artileri",
  sistem_peluncur_roket: "rocket",
  pertahanan_udara_mobile: "sam",
  kendaraan_taktis: "tactical",
  kapal_induk: "carrier",
  kapal_induk_nuklir: "nuclear_carrier",
  kapal_destroyer: "destroyer",
  kapal_korvet: "corvette",
  kapal_selam_nuklir: "submarine",
  kapal_selam_regular: "reg_sub",
  kapal_ranjau: "mine_ship",
  kapal_logistik: "logistics",
  jet_tempur_siluman: "stealth_jet",
  jet_tempur_interceptor: "interceptor",
  pesawat_pengebom: "bomber",
  helikopter_serang: "heli_attack",
  pesawat_pengintai: "recon_plane",
  drone_intai_uav: "uav",
  drone_kamikaze: "kamikaze",
  pesawat_angkut: "transport",
};

export const militaryAidStorage = {
  getAid: (): AidData => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(AID_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  },

  getAidForCountry: (targetId: string): Record<string, number> => {
    const aid = militaryAidStorage.getAid();
    return aid[targetId.toLowerCase()] || {};
  },

  sendAid: (targetId: string, selection: Record<string, number>) => {
    if (typeof window === "undefined") return;
    
    const aid = militaryAidStorage.getAid();
    const countryId = targetId.toLowerCase();
    
    if (!aid[countryId]) aid[countryId] = {};
    
    // 1. Deduct from Player (BuildingStorage)
    const buildingData = buildingStorage.getData();
    
    Object.entries(selection).forEach(([unitKey, count]) => {
      if (count <= 0) return;
      
      // Update Target Aid
      aid[countryId][unitKey] = (aid[countryId][unitKey] || 0) + count;
      
      // Update Player Deduction
      playerMilitaryStorage.addDeduction(unitKey, count);
    });
    
    // Save both
    localStorage.setItem(AID_STORAGE_KEY, JSON.stringify(aid));
    
    // Dispatch events
    window.dispatchEvent(new Event("military_aid_updated"));
    window.dispatchEvent(new Event("building_storage_updated"));
  },

  // Clear all aid data
  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(AID_STORAGE_KEY);
    window.dispatchEvent(new Event("military_aid_updated"));
  }
};
