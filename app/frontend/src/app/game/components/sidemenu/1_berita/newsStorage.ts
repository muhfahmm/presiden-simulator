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
const NEWS_WEEK_KEY = "em2_news_week_id";
const DAILY_LIMIT = 10;
const WEEKLY_AI_LIMIT = 10; // User request: Max 10 AI news per week (excluding construction)
const MAX_TOTAL_NEWS = 10; // User request: "hanya memunculkan 10 berita saja"

const dailyCounters: Record<string, Record<string, number>> = {};
let weeklyCounters: Record<string, number> = {}; // weekId -> count

export const newsStorage = {
  getNews: (): NewsItem[] => {
    if (typeof window === "undefined") return [];
    
    // Background sync from Go Server
    fetch("http://localhost:8080/api/berita")
      .then(res => res.json())
      .then(serverNews => {
        if (Array.isArray(serverNews) && serverNews.length > 0) {
          const current = localStorage.getItem(NEWS_STORAGE_KEY);
          const currentParsed = current ? JSON.parse(current) : [];
          
          // Merge logic: Add server news if not already present
          const newItems = serverNews.filter(sn => !currentParsed.some((cn: any) => cn.id === sn.id));
          if (newItems.length > 0) {
            const updated = [...newItems, ...currentParsed].slice(0, MAX_TOTAL_NEWS);
            localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(updated));
            window.dispatchEvent(new Event("news_updated"));
          }
        }
      })
      .catch(() => { /* Server might be offline, fallback to local */ });

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
    const current = localStorage.getItem(NEWS_STORAGE_KEY);
    const currentParsed = current ? JSON.parse(current) : [];
    
    const newItem: NewsItem = {
      ...news,
      id: Math.random().toString(36).substr(2, 9),
      read: false,
      timestamp: Date.now()
    };
    
    const updated = [newItem, ...currentParsed].slice(0, MAX_TOTAL_NEWS);
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
  },

  /**
   * Cek apakah notifikasi untuk kategori ini masih boleh ditambah hari ini (Limit: 10).
   */
  canAddNews: (category: string, dateStr: string): boolean => {
    if (!dailyCounters[dateStr]) dailyCounters[dateStr] = {};
    if (!dailyCounters[dateStr][category]) dailyCounters[dateStr][category] = 0;

    if (dailyCounters[dateStr][category] < DAILY_LIMIT) {
      dailyCounters[dateStr][category]++;
      return true;
    }
    return false;
  },

  /**
   * Limit AI News to 10 per week (excluding construction).
   * Also handles "Weekly Update" (Clears news if week changes).
   */
  canAddWeekly: (category: string, gameDate: Date): boolean => {
    const weekId = `W${Math.floor(gameDate.getTime() / (7 * 24 * 60 * 60 * 1000))}`;
    
    // Check for Weekly Rotation
    const lastWeekId = localStorage.getItem(NEWS_WEEK_KEY);
    if (lastWeekId && lastWeekId !== weekId) {
      // User request: "jika sudah seminggu maka akan terupdate" -> clear news
      newsStorage.clear();
      // Reset counters for the new week
      weeklyCounters = {};
      console.log(`[News Storage] Weekly update detected (${lastWeekId} -> ${weekId}). Clearing list.`);
    }
    localStorage.setItem(NEWS_WEEK_KEY, weekId);

    if (category === 'construction') return true; // Pembangunan dikecualikan

    if (!weeklyCounters[weekId]) weeklyCounters[weekId] = 0;

    if (weeklyCounters[weekId] < WEEKLY_AI_LIMIT) {
      weeklyCounters[weekId]++;
      return true;
    }
    return false;
  }
};
