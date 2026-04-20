/**
 * Storage to track cumulative imported amounts from specific partners.
 * This ensures that simulated partner stock decreases as we buy from them.
 */
const IMPORT_STOCK_KEY = "em_import_stock_tracking";

export const importStockStorage = {
    getImportedAmount: (partner: string | null, key: string): number => {
        if (typeof window === 'undefined' || !partner) return 0;
        const stored = localStorage.getItem(IMPORT_STOCK_KEY);
        if (!stored) return 0;
        try {
            const data = JSON.parse(stored);
            return data[`${partner}_${key}`] || 0;
        } catch (e) {
            return 0;
        }
    },
    addImport: (partner: string | null, key: string, amount: number) => {
        if (typeof window === 'undefined' || !partner) return;
        const stored = localStorage.getItem(IMPORT_STOCK_KEY);
        let data: Record<string, number> = {};
        if (stored) {
            try {
                data = JSON.parse(stored);
            } catch (e) {}
        }
        const storageKey = `${partner}_${key}`;
        data[storageKey] = (data[storageKey] || 0) + amount;
        localStorage.setItem(IMPORT_STOCK_KEY, JSON.stringify(data));
        window.dispatchEvent(new Event('import_stock_updated'));
    },
    clear: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(IMPORT_STOCK_KEY);
            window.dispatchEvent(new Event('import_stock_updated'));
        }
    }
};
