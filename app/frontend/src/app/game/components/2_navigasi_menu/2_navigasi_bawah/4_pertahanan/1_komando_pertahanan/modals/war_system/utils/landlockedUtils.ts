/**
 * Utility to identify landlocked countries.
 * If a target country is landlocked, naval units cannot be used for the attack.
 */

export const LANDLOCKED_COUNTRIES = [
  // ASIA
  "Afganistan", "Armenia", "Azerbaijan", "Bhutan", "Kazakhstan", "Kirgizstan", "Laos", "Mongolia", "Nepal", "Tajikistan", "Turkmenistan", "Uzbekistan",
  // AFRIKA
  "Botswana", "Burkina Faso", "Burundi", "Chad", "Ethiopia", "Lesotho", "Malawi", "Mali", "Niger", "Republik Afrika Tengah", "Rwanda", "Sudan Selatan", "Eswatini", "Republik Uganda", "Republik Zambia", "Republik Zimbabwe",
  // EROPA
  "Andorra", "Austria", "Belarus", "Ceko", "Hungaria", "Liechtenstein", "Luksemburg", "Moldova", "San Marino", "Republik Serbia", "Slowakia", "Swiss", "Vatikan", "Makedonia Utara", "Kosovo",
  // AMERIKA SELATAN
  "Bolivia", "Paraguay"
];

/**
 * Checks if a country is landlocked based on its ID name or English name.
 * @param country The country data object
 * @returns boolean
 */
export function isLandlocked(country: any): boolean {
  if (!country) return false;
  
  const nameId = country.name_id || "";
  const nameEn = country.name_en || "";
  
  return LANDLOCKED_COUNTRIES.some(name => 
    nameId.toLowerCase() === name.toLowerCase() || 
    nameEn.toLowerCase() === name.toLowerCase()
  );
}
