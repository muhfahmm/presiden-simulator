import { Religion } from "./religions";
import { Ideology } from "./ideologies";

export interface CountryData {
  name_en: string;
  name_id: string;
  lon: number;
  lat: number;
  flag: string;
  pop: string;
  budget: string;
  religion: Religion;
  ideology: Ideology;
  
  // New detailed fields
  resources: {
    wood: number;
    stone: number;
    gold: number;
    oil: number;
    meat: number;
  };
  military: {
    infantry: number;
    tanks: number;
    aircraft: number;
    naval: number;
    nuclear: boolean;
    strength: number; // 0-100 score
  };
  un_vote: "Pro" | "Neutral" | "Contra";
  income: string; // GDP or National Income
}
