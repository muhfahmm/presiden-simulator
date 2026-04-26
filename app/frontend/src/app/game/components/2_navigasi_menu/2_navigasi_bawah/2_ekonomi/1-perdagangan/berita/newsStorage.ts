import { NewsItem } from "./newsData";

const NEWS_STORAGE_KEY = "em_trade_news_data";

export const newsStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem(NEWS_STORAGE_KEY);
  },
  
  getNews: (): NewsItem[] => {
    if (typeof window === 'undefined') return [];
    
    const stored = localStorage.getItem(NEWS_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse news storage", e);
      }
    }

    // Default to empty array as requested for first time playing
    return [];
  },

  saveNews: (data: NewsItem[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(data));
    
    // Dispatch event for UI updates
    window.dispatchEvent(new Event('news_storage_updated'));
  },

  addNews: (item: NewsItem) => {
    const news = newsStorage.getNews();
    // Add new item at the beginning
    const updated = [item, ...news];
    newsStorage.saveNews(updated);
  }
};
