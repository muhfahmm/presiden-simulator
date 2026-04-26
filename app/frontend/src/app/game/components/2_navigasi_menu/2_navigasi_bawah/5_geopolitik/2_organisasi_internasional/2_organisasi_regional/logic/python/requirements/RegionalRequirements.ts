import { detectLocation } from "../../location_detector";

/**
 * RegionalRequirements TS Bridge: Matches the logic in regional_requirements.py
 */
export class RegionalRequirements {
    private requirements: Record<string, { type: string, value: any }> = {
        "asean": { type: "region", value: "Southeast Asia" },
        "eu": { type: "continent", value: "Europe" },
        "arab_league": { type: "culture", value: "Arab" },
        "au": { type: "continent", value: "Africa" },
        "gcc": { type: "custom", value: ["arab saudi", "bahrain", "kuwait", "oman", "qatar", "uni emirat arab", "saudi arabia", "united arab emirates"] },
        "mercosur": { type: "continent", value: "South America" },
        "nato": { type: "continent", value: ["Europe", "North America"] },
        "g20": { type: "economic_rank", value: 20 },
        "brics": { type: "status", value: "emerging_power" },
        "oas": { type: "continent", value: ["North America", "South America"] },
        "oic": { type: "religion", value: "Islam" },
        "commonwealth": { type: "custom", value: [
            "afrika selatan", "australia", "bahama", "bangladesh", "barbados",
            "belize", "botswana", "fiji", "ghana", "guyana", "india", "inggris",
            "jamaika", "kamerun", "kanada", "kenya", "malaysia", "malta",
            "mauritius", "mozambik", "namibia", "nigeria", "pakistan",
            "papua nugini", "rwanda", "samoa", "selandia baru", "singapura",
            "sri lanka", "tonga", "trinidad dan tobago", "vanuatu",
            "republik uganda", "republik tanzania", "republik zambia", "eswatini", "sierra leone", "togo", "seychelles",
            "south africa", "bahamas", "cameroon", "canada", "new zealand", "singapore", "united kingdom", "uk"
        ] }
    };

    public isEligible(countryData: any, orgId: string): { eligible: boolean, reason: string } {
        const req = this.requirements[orgId.toLowerCase()];
        
        // Auto-detect location if missing from data
        const location = detectLocation(countryData.name_en || countryData.name_id || "");
        const enhancedData = { ...countryData, ...location };

        if (!req) return { eligible: true, reason: "Open to all nations." };

        const { type, value } = req;
        const nameIdLower = (countryData.name_id || "").toLowerCase();
        const nameEnLower = (countryData.name_en || "").toLowerCase();

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

            case "religion":
                if (countryData.religion === value) return { eligible: true, reason: "Religiously eligible." };
                return { eligible: false, reason: `Requires ${value} majority religion.` };
                
            case "custom":
                const allowedList = value as string[];
                if (allowedList.includes(nameIdLower) || allowedList.includes(nameEnLower)) return { eligible: true, reason: "Historically/Specially eligible." };
                if (orgId === "commonwealth") return { eligible: false, reason: "Requires historical Commonwealth ties." };
                if (orgId === "gcc") return { eligible: false, reason: "Requires being a Gulf Arab state." };
                return { eligible: false, reason: "Does not meet specific membership criteria." };

            default:
                return { eligible: true, reason: "Eligible." };
        }
    }
}
