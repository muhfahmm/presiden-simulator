/**
 * regionalMembershipStorage: Manages manual membership status for regional organizations.
 * Persists which regional organizations the player has joined.
 */
const STORAGE_KEY = "em_manual_regional_memberships";

export const regionalMembershipStorage = {
    /**
     * Get list of organization IDs the user has joined manually.
     */
    getJoinedOrganizations: (): string[] => {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    },

    /**
     * Join a new regional organization.
     */
    joinOrganization: (orgId: string) => {
        if (typeof window === "undefined") return;
        const joined = regionalMembershipStorage.getJoinedOrganizations();
        if (!joined.includes(orgId)) {
            const updated = [...joined, orgId];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            window.dispatchEvent(new Event("regional_membership_updated"));
        }
    },

    /**
     * Leave a regional organization.
     */
    leaveOrganization: (orgId: string) => {
        if (typeof window === "undefined") return;
        const joined = regionalMembershipStorage.getJoinedOrganizations();
        const updated = joined.filter(id => id !== orgId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        window.dispatchEvent(new Event("regional_membership_updated"));
    },

    /**
     * Clear all manual regional memberships (e.g., on game reset).
     */
    clear: () => {
        if (typeof window === "undefined") return;
        localStorage.removeItem(STORAGE_KEY);
        window.dispatchEvent(new Event("regional_membership_updated"));
    }
};
