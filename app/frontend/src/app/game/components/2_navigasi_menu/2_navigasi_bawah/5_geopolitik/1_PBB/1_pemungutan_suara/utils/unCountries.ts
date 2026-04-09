import { countries as allCountries } from "@/app/database/data/negara/benua/index";

/**
 * List of 207 countries for the UN Voting System.
 * This consolidates the global database for use in PBB resolutions.
 */
export const unCountries = allCountries;

/**
 * Helper to get a country by name
 */
export function getCountryByName(name: string) {
  return unCountries.find(c => 
    c.name_id === name || 
    c.name_en === name
  );
}

/**
 * Get UN member count
 */
export const UN_MEMBER_COUNT = unCountries.length;
