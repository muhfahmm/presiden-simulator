"use client"
import { CountryData } from "../../../../select-country/data/types";
import { gameStorage } from "../../../gamestorage";
import { countries } from "../../../../select-country/data/countries";

const STORAGE_KEY = "em4_price_data_v3";

export interface PriceData {
  priceRice: number;
  priceBeef: number;
  priceChicken: number;
  priceOil: number;
  priceSugar: number;
  priceEgg: number;
  priceFuel: number;
  priceElectric: number;
  priceWater: number;
  priceMedicine: number;
  priceEducation: number;
  lastUpdated: number;
}

export const BASE_PRICES = {
  priceRice: 16000,
  priceBeef: 104100,
  priceChicken: 41000,
  priceOil: 15400,
  priceSugar: 14400,
  priceEgg: 31100,
  priceFuel: 10700,
  priceElectric: 1600,
  priceWater: 5200,
  priceMedicine: 157900,
  priceEducation: 483900
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
      ...(countryData?.prices ? countryData.prices : BASE_PRICES),
      lastUpdated: Date.now()
    };

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      priceStorage.saveData(defaultState);
      return defaultState;
    }
    
    const parsed = JSON.parse(stored);
    
    // Migration: If the old data used decimals (<= 10 for Rice), clear it and use nominal
    if (parsed.priceRice && parsed.priceRice <= 10) {
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
      ...(countryData?.prices ? countryData.prices : BASE_PRICES),
      lastUpdated: Date.now()
    });
  }
};
