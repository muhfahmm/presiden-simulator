import { unMembershipStorage } from "../../../1_organisasi_PBB/logic/unMembershipStorage";
import { OrganizationMembers } from "@/app/pilih_negara/data/database_organisasi_internasional/index";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { RegionalRequirements } from "../python/requirements/RegionalRequirements";

/**
 * RegionalMembershipRouter: Handles regional-specific membership logic.
 * Enforces geographic and cultural restrictions.
 */
class RegionalMembershipRouter {
    private AI_STATE_KEY = "em_dynamic_regional_memberships";
    private requirements: RegionalRequirements;

    constructor() {
        this.requirements = new RegionalRequirements();
    }

    private getAIState(): Record<string, Record<string, boolean>> {
        if (typeof window === "undefined") return {};
        const stored = localStorage.getItem(this.AI_STATE_KEY);
        return stored ? JSON.parse(stored) : {};
    }

    private saveAIState(state: Record<string, Record<string, boolean>>) {
        if (typeof window === "undefined") return;
        localStorage.setItem(this.AI_STATE_KEY, JSON.stringify(state));
        window.dispatchEvent(new Event("regional_membership_updated"));
    }

    /**
     * Check if a country is eligible to join a regional organization.
     */
    public checkEligibility(countryName: string, orgId: string) {
        const nameLower = countryName.toLowerCase();
        const countryData = countries.find(c => 
            c.name_en.toLowerCase() === nameLower || 
            c.name_id.toLowerCase() === nameLower
        );
        if (!countryData) return { eligible: false, reason: `Data negara '${countryName}' tidak ditemukan.` };
        
        return this.requirements.isEligible(countryData, orgId);
    }

    public syncAIMemberships(aiResults: Record<string, any>) {
        const currentState = this.getAIState();
        
        Object.entries(aiResults).forEach(([country, actions]) => {
            if (!currentState[country]) currentState[country] = {};
            (actions as any[]).forEach(item => {
                const wasMember = currentState[country][item.org_id];
                const isMember = (item.action === 'join');
                
                if (wasMember !== isMember) {
                    // Before syncing AI, check eligibility (AI must also follow rules)
                    const eligibility = this.checkEligibility(country, item.org_id);
                    if (eligibility.eligible) {
                        currentState[country][item.org_id] = isMember;
                        this.generateNews(country, item.org_id, item.action);
                    }
                }
            });
        });

        this.saveAIState(currentState);
    }

    private generateNews(countryName: string, orgId: string, action: 'join' | 'leave') {
        const countryData = countries.find(c => c.name_en === countryName || c.name_id === countryName);
        const flag = countryData?.flag || "🌐";
        newsStorage.addNews({
            source: "REGIONAL WATCH",
            category: "organizations",
            priority: "medium",
            subject: `${flag} DINAMIKA REGIONAL: ${countryName.toUpperCase()}`,
            content: `${countryName} telah ${action === 'join' ? 'bergabung dengan' : 'keluar dari'} blok regional ${orgId.toUpperCase()}.`,
            time: ""
        });
    }

    public getConsolidatedMembers(orgId: string): string[] {
        const dbMembers = [...(OrganizationMembers[orgId] || [])];
        const userJoined = unMembershipStorage.getJoinedOrganizations().includes(orgId);
        const userCountry = (localStorage.getItem("selectedCountry") || "indonesia").toLowerCase();
        
        let processedMembers = dbMembers;
        if (!userJoined && dbMembers.includes(userCountry)) {
            processedMembers = dbMembers.filter(m => m !== userCountry);
        } else if (userJoined && !dbMembers.includes(userCountry)) {
            processedMembers.push(userCountry);
        }

        const aiState = this.getAIState();
        const finalMembers = new Set(processedMembers);

        Object.entries(aiState).forEach(([country, orgs]) => {
            const countryLower = country.toLowerCase();
            if (countryLower === userCountry) return;
            if (orgs[orgId] === true) finalMembers.add(countryLower);
            else if (orgs[orgId] === false) finalMembers.delete(countryLower);
        });

        return Array.from(finalMembers);
    }
}

export const regionalMembershipRouter = new RegionalMembershipRouter();
