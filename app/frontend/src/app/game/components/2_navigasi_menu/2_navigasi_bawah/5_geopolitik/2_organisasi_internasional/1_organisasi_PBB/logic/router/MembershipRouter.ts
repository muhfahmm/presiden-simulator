import { unMembershipStorage } from "../unMembershipStorage";
import { OrganizationMembers } from "@/app/pilih_negara/data/database_organisasi_internasional/index";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { countries } from "@/app/database/data/negara/benua/index";

/**
 * MembershipRouter: Bridges the Python AI logic results and the TS Frontend state.
 * Handles global membership synchronization for all 207 nations.
 */
class MembershipRouter {
    private AI_STATE_KEY = "em_dynamic_ai_memberships";

    /**
     * Get the dynamic AI membership state from localStorage.
     * Format: { countryName: { orgId: boolean } }
     */
    private getAIState(): Record<string, Record<string, boolean>> {
        if (typeof window === "undefined") return {};
        const stored = localStorage.getItem(this.AI_STATE_KEY);
        return stored ? JSON.parse(stored) : {};
    }

    /**
     * Save AI membership state.
     */
    private saveAIState(state: Record<string, Record<string, boolean>>) {
        if (typeof window === "undefined") return;
        localStorage.setItem(this.AI_STATE_KEY, JSON.stringify(state));
        window.dispatchEvent(new Event("membership_router_updated"));
    }

    /**
     * Synchronize AI memberships from a data source (e.g., Python result).
     */
    public syncAIMemberships(aiResults: Record<string, any>) {
        console.log("[MEMBERSHIP ROUTER] Syncing AI membership changes...", aiResults);
        const currentState = this.getAIState();
        
        // Merge results: aiResults format expected: { countryName: [ {org_id: string, action: 'join'|'leave'} ] }
        Object.entries(aiResults).forEach(([country, actions]) => {
            if (!currentState[country]) currentState[country] = {};
            (actions as any[]).forEach(item => {
                const wasMember = currentState[country][item.org_id];
                const isMember = (item.action === 'join');
                
                if (wasMember !== isMember) {
                    currentState[country][item.org_id] = isMember;
                    
                    // Generate News
                    this.generateMembershipNews(country, item.org_id, item.action);
                }
            });
        });

        this.saveAIState(currentState);
    }

    /**
     * Generate a global news item for membership changes.
     */
    private generateMembershipNews(countryName: string, orgId: string, action: 'join' | 'leave') {
        const countryData = countries.find(c => c.name_en === countryName || c.name_id === countryName);
        const flag = countryData?.flag || "🌐";
        
        const orgName = orgId.toUpperCase(); // Simplified for now
        
        newsStorage.addNews({
            source: "INTEL GLOBAL",
            category: "organizations",
            priority: "medium",
            subject: `${flag} PERUBAHAN GEOPOLITIK: ${countryName.toUpperCase()}`,
            content: `${countryName} secara resmi telah ${action === 'join' ? 'BERGABUNG dengan' : 'KELUAR dari'} organisasi ${orgName}. Hal ini dapat mempengaruhi keseimbangan kekuatan regional.`,
            time: "" // newsStorage handles time
        });
    }

    /**
     * Get the consolidated membership list for an organization.
     * Combines default DB, User's manual status, and AI's dynamic status.
     */
    public getConsolidatedMembers(orgId: string): string[] {
        // 1. Get default members from database
        const dbMembers = [...(OrganizationMembers[orgId] || [])];
        
        // 2. Adjust for USER status (using our unMembershipStorage)
        const userJoined = unMembershipStorage.getJoinedOrganizations().includes(orgId);
        const userCountry = (localStorage.getItem("selectedCountry") || "indonesia").toLowerCase();
        const userInDb = dbMembers.includes(userCountry);
        
        let processedMembers = dbMembers;
        if (!userJoined && userInDb) {
            processedMembers = dbMembers.filter(m => m !== userCountry);
        } else if (userJoined && !userInDb) {
            processedMembers.push(userCountry);
        }

        // 3. Adjust for AI Dynamic Status (from Python simulation)
        const aiState = this.getAIState();
        const finalMembers = new Set(processedMembers);

        Object.entries(aiState).forEach(([country, orgs]) => {
            const countryLower = country.toLowerCase();
            // Skip user since we handled it above
            if (countryLower === userCountry) return;

            if (orgs[orgId] === true) {
                finalMembers.add(countryLower);
            } else if (orgs[orgId] === false) {
                finalMembers.delete(countryLower);
            }
        });

        return Array.from(finalMembers);
    }

    /**
     * Check if a specific country is a member of an organization.
     */
    public isMember(orgId: string, countryName: string): boolean {
        const consolidated = this.getConsolidatedMembers(orgId);
        return consolidated.includes(countryName.toLowerCase());
    }

    /**
     * Trigger a membership check for all AI nations.
     */
    public async triggerAISimulation() {
        console.log("[MEMBERSHIP ROUTER] Calling Python AI Membership Engine...");
        // Protocol handler will call ai_membership_engine.py here
    }
}

export const membershipRouter = new MembershipRouter();
