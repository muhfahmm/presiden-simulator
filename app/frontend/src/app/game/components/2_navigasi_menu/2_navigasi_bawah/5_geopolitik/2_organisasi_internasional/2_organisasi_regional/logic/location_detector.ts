import { 
    asiaCountries, 
    afrikaCountries, 
    eropaCountries, 
    naCountries, 
    saCountries, 
    oceaniaCountries 
} from "@/app/database/data/negara/index";

/**
 * Utility to automatically detect a country's continent and region.
 * Uses the pre-defined country lists from the database.
 */
export const detectLocation = (countryName: string) => {
    const name = countryName.toLowerCase();
    
    const findInList = (list: any[]) => 
        list.some(c => c.name_en.toLowerCase() === name || c.name_id.toLowerCase() === name);

    if (findInList(eropaCountries)) return { continent: "Europe", region: "Europe" };
    if (findInList(afrikaCountries)) return { continent: "Africa", region: "Africa" };
    if (findInList(naCountries)) return { continent: "North America", region: "North America" };
    if (findInList(saCountries)) return { continent: "South America", region: "South America" };
    if (findInList(oceaniaCountries)) return { continent: "Oceania", region: "Oceania" };
    
    if (findInList(asiaCountries)) {
        // Sub-region detection for Asia
        const southeastAsia = [
            "indonesia", "malaysia", "singapore", "thailand", "philippines", 
            "vietnam", "brunei", "laos", "cambodia", "myanmar", "timor-leste", "republik timor leste"
        ];
        const middleEast = [
            "saudi arabia", "uae", "qatar", "kuwait", "oman", "bahrain", "iran", "iraq", "jordan", "lebanon", "israel", "palestine", "syria", "yemen"
        ];
        
        if (southeastAsia.includes(name)) return { continent: "Asia", region: "Southeast Asia" };
        if (middleEast.includes(name)) return { continent: "Asia", region: "Middle East" };
        
        return { continent: "Asia", region: "Asia" };
    }

    return { continent: "Unknown", region: "Unknown" };
};

