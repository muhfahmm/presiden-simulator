import { gameStorage } from "@/app/game/gamestorage";
import { OrganizationMembers } from "@/app/pilih_negara/data/database_organisasi_internasional/index";

/**
 * MembershipStorage: Tracks organizations the user has MANUALLY joined.
 * This overrides the default database membership for the player.
 */
class UNMembershipStorage {
  private STORAGE_KEY = "em_user_un_memberships";

  public getJoinedOrganizations(): string[] {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  public joinOrganization(orgId: string) {
    const joined = this.getJoinedOrganizations();
    if (!joined.includes(orgId)) {
      joined.push(orgId);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(joined));
      window.dispatchEvent(new CustomEvent("un_membership_updated", { detail: { orgId, action: "join" } }));
    }
  }

  public leaveOrganization(orgId: string) {
    const joined = this.getJoinedOrganizations();
    const filtered = joined.filter(id => id !== orgId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
    window.dispatchEvent(new CustomEvent("un_membership_updated", { detail: { orgId, action: "leave" } }));
  }

  /**
   * Core Logic: Check if a country is a member.
   * If it's the USER's country, it MUST be in the joined storage.
   * If it's an AI country, it uses the default database.
   */
  public isMember(orgId: string, countryName: string): boolean {
    const session = gameStorage.getSession();
    const userCountry = session?.country || localStorage.getItem("selectedCountry") || "Indonesia";

    if (countryName.toLowerCase() === userCountry.toLowerCase()) {
      // User must have manually joined
      return this.getJoinedOrganizations().includes(orgId);
    }

    // AI nations use the database
    const dbMembers = OrganizationMembers[orgId] || [];
    return dbMembers.includes(countryName.toLowerCase());
  }

  /**
   * Scanner: Check if the user's country exists in the default database for an org.
   * This is used to "mask" it and force manual join.
   */
  public existsInDefaultDatabase(orgId: string): boolean {
    const session = gameStorage.getSession();
    const userCountry = session?.country || localStorage.getItem("selectedCountry") || "Indonesia";
    const dbMembers = OrganizationMembers[orgId] || [];
    return dbMembers.includes(userCountry.toLowerCase());
  }
}

export const unMembershipStorage = new UNMembershipStorage();
