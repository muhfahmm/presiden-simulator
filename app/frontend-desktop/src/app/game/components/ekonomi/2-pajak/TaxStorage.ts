const TAX_STORAGE_KEY = "game_taxes";

export const taxStorage = {
  saveTaxes: (countryName: string, taxes: any) => {
    if (typeof window === 'undefined') return;
    const allTaxes = taxStorage.getAllTaxes();
    allTaxes[countryName] = taxes;
    localStorage.setItem(TAX_STORAGE_KEY, JSON.stringify(allTaxes));
  },

  getTaxes: (countryName: string): any | null => {
    if (typeof window === 'undefined') return null;
    const allTaxes = taxStorage.getAllTaxes();
    return allTaxes[countryName] || null;
  },

  getAllTaxes: (): Record<string, any> => {
    if (typeof window === 'undefined') return {};
    const data = localStorage.getItem(TAX_STORAGE_KEY);
    if (!data) return {};
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse tax storage", e);
      return {};
    }
  }
};
