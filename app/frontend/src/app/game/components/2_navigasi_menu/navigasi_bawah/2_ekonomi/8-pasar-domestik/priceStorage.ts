"use client"
import { CountryData } from "@/app/database/data/types/index";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/countries/region/index";

const STORAGE_KEY = "em4_price_data_v3";

export interface PriceData {
  harga_beras: number;
  harga_daging_sapi: number;
  harga_ayam: number;
  harga_minyak_goreng: number;
  harga_gula: number;
  harga_telur: number;
  harga_bbm: number;
  harga_listrik: number;
  harga_air: number;
  harga_obat: number;
  harga_pendidikan: number;
  lastUpdated: number;
}

export const BASE_PRICES = {
  harga_beras: 16000,
  harga_daging_sapi: 104100,
  harga_ayam: 41000,
  harga_minyak_goreng: 15400,
  harga_gula: 14400,
  harga_telur: 31100,
  harga_bbm: 10700,
  harga_listrik: 1600,
  harga_air: 5200,
  harga_obat: 157900,
  harga_pendidikan: 483900
};

export const priceStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("em4_price_data_v3");
  },
  getData: (countryData?: CountryData): PriceData => {
    if (typeof window === 'undefined') return { ...BASE_PRICES, lastUpdated: Date.now() };

    if (!countryData) {
      const session = gameStorage.getSession();
      if (session) {
        countryData = countries.find(c => c.name_en === session.country || c.name_id === session.country);
      }
    }

    const defaultState: PriceData = {
      ...(countryData?.harga ? countryData.harga : BASE_PRICES),
      lastUpdated: Date.now()
    };

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      priceStorage.saveData(defaultState);
      return defaultState;
    }
    
    const parsed = JSON.parse(stored);
    
    // Migration: If the old data used decimals (<= 10 for Rice), clear it and use nominal
    if (parsed.harga_beras && parsed.harga_beras <= 10) {
       priceStorage.saveData(defaultState);
       return defaultState;
    }

    return { ...defaultState, ...parsed };
  },

  saveData: (data: PriceData) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...data,
      lastUpdated: Date.now()
    }));
    window.dispatchEvent(new Event('price_updated'));
  },

  updatePrice: (key: keyof Omit<PriceData, 'lastUpdated'>, value: number) => {
    const data = priceStorage.getData();
    (data as any)[key] = value;
    priceStorage.saveData(data);
  },

  resetPrices: () => {
    const session = gameStorage.getSession();
    const countryData = countries.find(c => c.name_en === session?.country || c.name_id === session?.country);
    priceStorage.saveData({
      ...(countryData?.harga ? countryData.harga : BASE_PRICES),
      lastUpdated: Date.now()
    });
  }
};

