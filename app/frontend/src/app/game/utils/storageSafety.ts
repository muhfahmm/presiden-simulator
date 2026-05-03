"use client"

/**
 * Global Storage Safety Utility
 * Handles QuotaExceededError and prevents game crashes by pruning non-essential data.
 */
export const storageSafety = {
    /**
     * Safely set an item in localStorage.
     * If quota is exceeded, it will prune non-essential keys and retry once.
     */
    setItem: (key: string, value: string): boolean => {
        if (typeof window === 'undefined') return false;

        try {
            localStorage.setItem(key, value);
            return true;
        } catch (e: any) {
            if (e.name === 'QuotaExceededError' || e.code === 22 || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                console.warn(`[STORAGE SAFETY] Quota exceeded while saving '${key}'. Initiating emergency cleanup...`);
                
                storageSafety.emergencyPrune();

                // Retry once
                try {
                    localStorage.setItem(key, value);
                    console.log(`[STORAGE SAFETY] Save successful after cleanup for '${key}'`);
                    return true;
                } catch (retryErr) {
                    console.error(`[STORAGE SAFETY] Critical: Storage still full after cleanup. Cannot save '${key}'`);
                    return false;
                }
            }
            return false;
        }
    },

    /**
     * Deletes non-essential data to free up space.
     */
    emergencyPrune: () => {
        console.log("[STORAGE SAFETY] Pruning non-essential data keys...");
        
        // 1. Keys that can be safely deleted or reduced
        const nonEssentialKeys = [
            'em_news_history',       // News history (Can be rebuilt from SSE)
            'em_ai_diagnostics',     // Diagnosis logs
            'em_un_voting_history',  // Old UN votes
            'em_last_processed_date',
            'em_country_data_',      // Individual country caches (Will be re-fetched)
            'em_membership_processed_news',
            'em_news_effects_processed'
        ];

        // 2. Clear exact matches
        nonEssentialKeys.forEach(key => {
            if (!key.endsWith('_')) {
                localStorage.removeItem(key);
            }
        });

        // 3. Clear prefix matches (like country_data_xxx)
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && (k.startsWith('em_country_data_') || k.startsWith('em_ai_happiness_history'))) {
                keysToRemove.push(k);
            }
        }
        
        keysToRemove.forEach(k => localStorage.removeItem(k));
        
        // 4. Aggressive pruning of large arrays in specific keys
        storageSafety.pruneLargeArray('em_inbox_messages', 15); // Keep only last 15
        storageSafety.pruneLargeArray('em_debt_ai_data_offers', 3);
        storageSafety.pruneLargeArray('em_trade_news_data', 30); // Keep only last 30 trade news
        storageSafety.pruneLargeArray('em_global_news_v1', 50); // Keep only last 50 global news
        
        console.log("[STORAGE SAFETY] Cleanup complete.");
    },

    /**
     * Loads a JSON key, slices the array, and saves it back.
     */
    pruneLargeArray: (key: string, keepLast: number) => {
        try {
            const data = localStorage.getItem(key);
            if (data) {
                const parsed = JSON.parse(data);
                if (Array.isArray(parsed) && parsed.length > keepLast) {
                    localStorage.setItem(key, JSON.stringify(parsed.slice(-keepLast)));
                } else if (parsed.offers && Array.isArray(parsed.offers)) {
                    // Handle object-based storages
                    parsed.offers = parsed.offers.slice(-keepLast);
                    localStorage.setItem(key, JSON.stringify(parsed));
                }
            }
        } catch (e) {}
    }
};
