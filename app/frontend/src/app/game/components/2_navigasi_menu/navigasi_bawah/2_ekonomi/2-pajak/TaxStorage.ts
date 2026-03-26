const TAX_STORAGE_KEY = "game_taxes";

export const taxStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("game_taxes");
  },
  saveTaxes: (countryName: string, pajak: any) => {
    if (typeof window === 'undefined') return;
    const allTaxes = taxStorage.getAllTaxes();
    allTaxes[countryName] = pajak;
    localStorage.setItem(TAX_STORAGE_KEY, JSON.stringify(allTaxes));
    window.dispatchEvent(new Event('tax_updated'));
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
