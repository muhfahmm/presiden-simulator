"use client"

/**
 * Rute Militer — reuse dari trade route system.
 * Armada darat/laut mengikuti jalur pelayaran (shipping lanes).
 * Armada udara mengikuti garis lurus (great circle).
 */

import { calculateTradeRoute, getHubForCountry, Point } from "../../../../2_ekonomi/1-perdagangan/jalur_perdagangan/2_rute/tradeRoutes";
import { countries as centersData } from "@/app/database/data/negara/benua/index";

export interface MilitaryRoute {
  type: 'sea' | 'air';
  points: Point[];
}

/**
 * Get the coordinates for a country by name_id or name_en
 */
const getCountryCoords = (countryName: string): { lon: number; lat: number } | null => {
  const entry = centersData.find(
    c => c.name_id?.toLowerCase() === countryName.toLowerCase() ||
         c.name_en?.toLowerCase() === countryName.toLowerCase()
  );
  if (!entry) return null;
  return { lon: entry.lon, lat: entry.lat };
};

/**
 * Calculate military sea route (same as trade route — follows shipping lanes)
 */
export const calculateSeaRoute = (attackerName: string, defenderName: string): Point[] => {
  const sHub = getHubForCountry(attackerName);
  const dHub = getHubForCountry(defenderName);

  if (sHub && dHub) {
    return calculateTradeRoute(
      { lon: sHub.lon, lat: sHub.lat },
      { lon: dHub.lon, lat: dHub.lat }
    );
  }

  // Fallback to direct coordinates
  const a = getCountryCoords(attackerName);
  const d = getCountryCoords(defenderName);
  if (!a || !d) return [];

  return [
    { name: "Start", lon: a.lon, lat: a.lat },
    { name: "End", lon: d.lon, lat: d.lat },
  ];
};

/**
 * Calculate military air route (direct line with slight arc)
 */
export const calculateAirRoute = (attackerName: string, defenderName: string): Point[] => {
  const a = getCountryCoords(attackerName);
  const d = getCountryCoords(defenderName);
  if (!a || !d) return [];

  // Create a slight arc by adding a midpoint offset in latitude
  const midLon = (a.lon + d.lon) / 2;
  const midLat = (a.lat + d.lat) / 2 - 5; // Arc upward

  return [
    { name: "Takeoff", lon: a.lon, lat: a.lat },
    { name: "Cruise", lon: midLon, lat: midLat },
    { name: "Target", lon: d.lon, lat: d.lat },
  ];
};

/**
 * Get all military routes for a war
 */
export const getMilitaryRoutes = (
  attackerName: string,
  defenderName: string
): MilitaryRoute[] => {
  return [
    { type: 'sea', points: calculateSeaRoute(attackerName, defenderName) },
    { type: 'air', points: calculateAirRoute(attackerName, defenderName) },
  ];
};
