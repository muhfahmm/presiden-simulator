import { gameStorage } from "@/app/game/gamestorage";
import { OrganizationMembers } from "@/app/pilih_negara/data/database_organisasi_internasional/index";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { formatGameDate, getStoredGameDate } from "../../../../../../1_navbar/5_navigasi_waktu/gameTime";

/**
 * UNMembershipStorage: Tracks organizations the user and AI countries have joined.
 * Persists dynamic changes to memberships and join dates.
 */
class UNMembershipStorage {
  private STORAGE_KEY = "em_user_un_memberships";
  private AI_STATE_KEY = "em_dynamic_un_memberships";
  private JOIN_DATES_KEY = "em_org_join_dates";

  public getJoinedOrganizations(): string[] {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private getAIState(): Record<string, Record<string, boolean>> {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(this.AI_STATE_KEY);
    return stored ? JSON.parse(stored) : {};
  }

  private saveAIState(state: Record<string, Record<string, boolean>>) {
    if (typeof window === "undefined") return;
    localStorage.setItem(this.AI_STATE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("un_membership_updated", { detail: { type: 'ai_sync' } }));
  }

  public getJoinDates(): Record<string, Record<string, string>> {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem(this.JOIN_DATES_KEY);
    return stored ? JSON.parse(stored) : {};
  }

  public recordJoinDate(orgId: string, countryName: string) {
    if (typeof window === "undefined") return;
    const dates = this.getJoinDates();
    if (!dates[orgId]) dates[orgId] = {};
    
    // Only record if not already recorded (to keep the EARLIEST join date)
    const countryKey = countryName.toLowerCase();
    if (!dates[orgId][countryKey]) {
      dates[orgId][countryKey] = formatGameDate(getStoredGameDate());
      localStorage.setItem(this.JOIN_DATES_KEY, JSON.stringify(dates));
    }
  }

  public joinOrganization(orgId: string) {
    const joined = this.getJoinedOrganizations();
    if (!joined.includes(orgId)) {
      joined.push(orgId);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(joined));
      
      const userCountry = localStorage.getItem("selectedCountry") || "Indonesia";
      this.recordJoinDate(orgId, userCountry);
      this.generateNews(userCountry, orgId, "join");
      
      window.dispatchEvent(new CustomEvent("un_membership_updated", { detail: { orgId, action: "join" } }));
    }
  }

  public leaveOrganization(orgId: string) {
    const joined = this.getJoinedOrganizations();
    const filtered = joined.filter(id => id !== orgId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
    
    const userCountry = localStorage.getItem("selectedCountry") || "Indonesia";
    
    // Remove join date when leaving
    const dates = this.getJoinDates();
    if (dates[orgId]) {
      delete dates[orgId][userCountry.toLowerCase()];
      localStorage.setItem(this.JOIN_DATES_KEY, JSON.stringify(dates));
    }

    this.generateNews(userCountry, orgId, "leave");
    
    window.dispatchEvent(new CustomEvent("un_membership_updated", { detail: { orgId, action: "leave" } }));
  }

  public syncAIMemberships(aiResults: Record<string, any>) {
    const currentState = this.getAIState();
    let hasChanges = false;

    Object.entries(aiResults).forEach(([country, actions]) => {
      if (!currentState[country]) currentState[country] = {};
      (actions as any[]).forEach(item => {
        const wasMember = currentState[country][item.org_id];
        const isMember = (item.action === 'join');

        if (wasMember !== isMember) {
          currentState[country][item.org_id] = isMember;
          
          if (isMember) {
            this.recordJoinDate(item.org_id, country);
          } else {
            // Remove join date
            const dates = this.getJoinDates();
            if (dates[item.org_id]) {
              delete dates[item.org_id][country.toLowerCase()];
              localStorage.setItem(this.JOIN_DATES_KEY, JSON.stringify(dates));
            }
          }

          this.generateNews(country, item.org_id, item.action);
          hasChanges = true;
        }
      });
    });

    if (hasChanges) {
      this.saveAIState(currentState);
    }
  }

  private generateNews(countryName: string, orgId: string, action: 'join' | 'leave') {
    const countryData = countries.find(c => 
      c.name_en.toLowerCase() === countryName.toLowerCase() || 
      c.name_id.toLowerCase() === countryName.toLowerCase()
    );
    const flag = countryData?.flag || "🌐";
    
    // Standardize org name for news
    const orgLabels: Record<string, string> = {
      imf: "IMF",
      world_bank: "BANK DUNIA",
      who: "WHO",
      unesco: "UNESCO",
      wto: "WTO",
      interpol: "INTERPOL",
      ilo: "ILO",
      fao: "FAO",
      icao: "ICAO",
      imo: "IMO",
      itu: "ITU",
      wmo: "WMO"
    };

    const orgDisplay = orgLabels[orgId] || orgId.toUpperCase();

    newsStorage.addNews({
      source: "Global Diplomacy News",
      category: "organizations" as any,
      priority: "medium",
      subject: `${countryName} ${action === 'join' ? 'Bergabung ke' : 'Keluar dari'} ${orgDisplay}`,
      content: `${countryName} telah secara resmi ${action === 'join' ? 'bergabung dengan' : 'keluar dari'} organisasi PBB ${orgDisplay}.`,
      time: ""
    });
  }

  /**
   * getConsolidatedMembers: Returns full list of member countries for an organization.
   * Merges database defaults with dynamic AI and user changes.
   */
  public getConsolidatedMembers(orgId: string): string[] {
    const dbMembers = [...(OrganizationMembers[orgId] || [])];
    const userJoined = this.getJoinedOrganizations().includes(orgId);
    const userCountry = (localStorage.getItem("selectedCountry") || "indonesia").toLowerCase();

    let processedMembers = dbMembers;
    
    // Handle user masking
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

  public isMember(orgId: string, countryName: string): boolean {
    const userCountry = localStorage.getItem("selectedCountry") || "";

    if (countryName.toLowerCase() === userCountry.toLowerCase()) {
      return this.getJoinedOrganizations().includes(orgId);
    }

    // Check dynamic AI state first
    const aiState = this.getAIState();
    if (aiState[countryName] && aiState[countryName][orgId] !== undefined) {
      return aiState[countryName][orgId];
    }

    // Fallback to database
    const dbMembers = OrganizationMembers[orgId] || [];
    return dbMembers.includes(countryName.toLowerCase());
  }

  public existsInDefaultDatabase(orgId: string): boolean {
    const userCountry = localStorage.getItem("selectedCountry") || "";
    const dbMembers = OrganizationMembers[orgId] || [];
    return dbMembers.includes(userCountry.toLowerCase());
  }
}

export const unMembershipStorage = new UNMembershipStorage();
