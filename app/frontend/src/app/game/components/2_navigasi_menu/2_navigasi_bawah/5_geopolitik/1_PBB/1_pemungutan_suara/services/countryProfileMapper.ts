/**
 * Mapper untuk mengkonversi data game ke CountryProfile untuk AI
 */

import { CountryProfile } from './aiVotingService';

/**
 * Konversi data negara dari game storage ke CountryProfile
 */
export function mapCountryToProfile(
  countryData: any,
  diplomaticRelations?: Record<string, number>,
  tradeData?: Record<string, number>
): CountryProfile {
  // Determine political ideology based on continent and other factors
  const ideology = determinePoliticalIdeology(countryData);
  
  // Calculate stability based on various factors
  const stability = calculateStability(countryData);
  
  // Map economic dependencies from trade data
  const economicDependency: Record<string, number> = {};
  if (tradeData) {
    Object.entries(tradeData).forEach(([country, value]) => {
      // Normalize trade value to 0-1 scale
      economicDependency[country] = Math.min(value / 1000000000, 1.0);
    });
  }

  return {
    name: countryData.name || countryData.country || 'Unknown',
    continent: countryData.continent || 'Unknown',
    gdp: countryData.gdp || countryData.ekonomi?.gdp || 0,
    military_power: countryData.military_power || countryData.militer?.kekuatan || 50,
    diplomatic_standing: diplomaticRelations?.[countryData.name] || 0,
    alliance_bloc: countryData.alliance || undefined,
    economic_dependency: economicDependency,
    political_ideology: ideology,
    stability: stability,
  };
}

/**
 * Tentukan ideologi politik negara
 */
function determinePoliticalIdeology(
  countryData: any
): 'western' | 'eastern' | 'neutral' | 'non_aligned' {
  const name = countryData.name || countryData.country || '';
  const continent = countryData.continent || '';

  // Western bloc
  const westernCountries = [
    'Amerika Serikat', 'United States', 'Inggris', 'United Kingdom', 
    'Prancis', 'France', 'Jerman', 'Germany', 'Kanada', 'Canada',
    'Australia', 'Jepang', 'Japan', 'Korea Selatan', 'South Korea'
  ];

  // Eastern bloc
  const easternCountries = [
    'Rusia', 'Russia', 'China', 'Tiongkok', 'Korea Utara', 'North Korea',
    'Belarus', 'Iran'
  ];

  // Non-aligned movement
  const nonAlignedCountries = [
    'Indonesia', 'India', 'Brazil', 'Afrika Selatan', 'South Africa',
    'Mesir', 'Egypt', 'Serbia', 'Cuba'
  ];

  if (westernCountries.some(c => name.includes(c))) {
    return 'western';
  }

  if (easternCountries.some(c => name.includes(c))) {
    return 'eastern';
  }

  if (nonAlignedCountries.some(c => name.includes(c))) {
    return 'non_aligned';
  }

  // Default based on continent
  if (continent === 'Europe' || continent === 'Amerika Utara') {
    return 'western';
  }

  return 'neutral';
}

/**
 * Hitung stabilitas negara
 */
function calculateStability(countryData: any): number {
  let stability = 0.7; // Default

  // Adjust based on GDP
  const gdp = countryData.gdp || countryData.ekonomi?.gdp || 0;
  if (gdp > 1000000000000) { // > 1 trillion
    stability += 0.1;
  } else if (gdp < 100000000000) { // < 100 billion
    stability -= 0.1;
  }

  // Adjust based on military power
  const militaryPower = countryData.military_power || countryData.militer?.kekuatan || 50;
  if (militaryPower > 80) {
    stability += 0.05;
  } else if (militaryPower < 30) {
    stability -= 0.05;
  }

  // Adjust based on happiness/approval if available
  if (countryData.happiness) {
    stability += (countryData.happiness - 50) / 100;
  }

  // Clamp between 0 and 1
  return Math.max(0, Math.min(1, stability));
}

/**
 * Batch convert multiple countries
 */
export function mapCountriesToProfiles(
  countries: any[],
  diplomaticRelationsMap?: Record<string, Record<string, number>>,
  tradeDataMap?: Record<string, Record<string, number>>
): CountryProfile[] {
  return countries.map(country => {
    const countryName = country.name || country.country;
    return mapCountryToProfile(
      country,
      diplomaticRelationsMap?.[countryName],
      tradeDataMap?.[countryName]
    );
  });
}

/**
 * Get player reputation score (0-1)
 */
export function calculatePlayerReputation(playerData: any): number {
  let reputation = 0.5; // Neutral start

  // Based on diplomatic standing
  if (playerData.diplomatic_standing) {
    reputation = (playerData.diplomatic_standing + 100) / 200; // Normalize -100 to 100 -> 0 to 1
  }

  // Adjust based on treaty violations
  if (playerData.treaty_violations) {
    reputation -= playerData.treaty_violations * 0.1;
  }

  // Adjust based on humanitarian actions
  if (playerData.humanitarian_score) {
    reputation += playerData.humanitarian_score * 0.05;
  }

  // Clamp between 0 and 1
  return Math.max(0, Math.min(1, reputation));
}

/**
 * Calculate global tension (0-1)
 */
export function calculateGlobalTension(gameState: any): number {
  let tension = 0.5; // Default moderate tension

  // Based on active wars
  if (gameState.active_wars) {
    tension += gameState.active_wars.length * 0.1;
  }

  // Based on sanctions
  if (gameState.active_sanctions) {
    tension += gameState.active_sanctions.length * 0.05;
  }

  // Based on nuclear threats
  if (gameState.nuclear_threats) {
    tension += 0.3;
  }

  // Clamp between 0 and 1
  return Math.max(0, Math.min(1, tension));
}
