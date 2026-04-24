/**
 * RelationEvents.ts
 * Centralized event constants for the diplomatic relationship system.
 */

export const RELATION_EVENTS = {
    // Fired when the whole matrix is updated or synced
    MATRIX_UPDATED: "relation_storage_updated",
    
    // Fired when a specific relation status changes
    STATUS_UPDATED: "relation_status_updated",
    
    // Fired when the matrix is cleared (reset)
    MATRIX_CLEARED: "relation_storage_cleared"
};

/**
 * Helper to dispatch relationship events
 */
export const dispatchRelationUpdate = (detail?: any) => {
    if (typeof window === 'undefined') return;
    
    if (detail) {
        window.dispatchEvent(new CustomEvent(RELATION_EVENTS.STATUS_UPDATED, { detail }));
    }
    window.dispatchEvent(new Event(RELATION_EVENTS.MATRIX_UPDATED));
};
