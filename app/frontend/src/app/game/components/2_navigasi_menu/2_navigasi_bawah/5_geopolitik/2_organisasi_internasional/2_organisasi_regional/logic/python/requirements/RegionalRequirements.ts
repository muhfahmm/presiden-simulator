import { detectLocation } from "../../location_detector";

/**
 * RegionalRequirements TS Bridge: Matches the logic in regional_requirements.py
 */
export class RegionalRequirements {
    private requirements: Record<string, { type: string, value: any }> = {
        "asean": { type: "region", value: "Southeast Asia" },
        "uni_eropa": { type: "continent", value: "Europe" },
        "liga_arab": { type: "culture", value: "Arab" },
        "uni_afrika": { type: "continent", value: "Africa" },
        "gcc": { type: "region", value: "Persian Gulf" },
        "mercosur": { type: "continent", value: "South America" },
        "nato": { type: "continent", value: ["Europe", "North America"] },
        "g20": { type: "economic_rank", value: 20 },
        "brics": { type: "status", value: "emerging_power" }
    };

    public isEligible(countryData: any, orgId: string): { eligible: boolean, reason: string } {
        const req = this.requirements[orgId.toLowerCase()];
        
        // Auto-detect location if missing from data
        const location = detectLocation(countryData.name_en || countryData.name || "");
        const enhancedData = { ...countryData, ...location };

        if (!req) return { eligible: true, reason: "Open to all nations." };

        const { type, value } = req;

        switch (type) {
            case "region":
                if (enhancedData.region === value) return { eligible: true, reason: "Geographically eligible." };
                return { eligible: false, reason: `Requires being in the ${value} region.` };

            case "continent":
                const allowed = Array.isArray(value) ? value : [value];
                if (allowed.includes(enhancedData.continent)) return { eligible: true, reason: "Geographically eligible." };
                return { eligible: false, reason: `Requires being in ${allowed.join(", ")}.` };

            case "culture":
                if (countryData.culture === value) return { eligible: true, reason: "Culturally eligible." };
                return { eligible: false, reason: `Requires ${value} cultural alignment.` };

            default:
                return { eligible: true, reason: "Eligible." };
        }
    }
}
