"use client"

export interface NewsItem {
  id: string;
  source: string;
  subject: string;
  content: string;
  time: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  category: 'global' | 'diplomacy' | 'conflict' | 'economy' | 'construction';
  timestamp: number;
}

const NEWS_STORAGE_KEY = "em2_global_news_v1";

export const newsStorage = {
  getNews: (): NewsItem[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(NEWS_STORAGE_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored).sort((a: NewsItem, b: NewsItem) => b.timestamp - a.timestamp);
    } catch (e) {
      console.error("Failed to parse news storage", e);
      return [];
    }
  },

  addNews: (news: Omit<NewsItem, "id" | "read" | "timestamp">) => {
    if (typeof window === "undefined") return;
    const current = newsStorage.getNews();
    const newItem: NewsItem = {
      ...news,
      id: Math.random().toString(36).substr(2, 9),
      read: false,
      timestamp: Date.now()
    };
    
    // Keep only last 50 news items
    const updated = [newItem, ...current].slice(0, 50);
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("news_updated"));
  },

  markAsRead: (id: string) => {
    if (typeof window === "undefined") return;
    const current = newsStorage.getNews();
    const updated = current.map(item => item.id === id ? { ...item, read: true } : item);
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("news_updated"));
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(NEWS_STORAGE_KEY);
    window.dispatchEvent(new Event("news_updated"));
  }
};
