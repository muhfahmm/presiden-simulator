import { gameStorage } from "@/app/game/gamestorage";

export interface InboxItem {
  id: string;
  source: string;
  subject: string;
  time: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  category?: 'finance' | 'trade' | 'pact' | 'alliance' | 'embassy' | 'intelligence' | 'general' | 'defense' | 'diplomacy';
  isProposal?: boolean;
  proposalLabel?: string;
  metadata?: any;
  timestamp: number;
  content?: string;
}

const MAX_INBOX_MESSAGES = 50;

export const inboxStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("em4_inbox_data");
  },
  getStorageKey: () => {
    return "em4_inbox_data";
  },
  
  getMessages: (): InboxItem[] => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  
  addMessage: (msg: Omit<InboxItem, 'id' | 'read' | 'timestamp'>) => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return;
    
    const messages = inboxStorage.getMessages();
    const newMessage: InboxItem = {
      ...msg,
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      read: false,
      timestamp: Date.now()
    };
    
    // Insert at the beginning so newest is first
    messages.unshift(newMessage);
    
    // Limit total messages to prevent QuotaExceededError
    const limitedMessages = messages.slice(0, MAX_INBOX_MESSAGES);
    
    try {
      localStorage.setItem(key, JSON.stringify(limitedMessages));
    } catch (e) {
      console.warn("Inbox storage full, attempting emergency trim", e);
      try {
        // First attempt: keep only latest 20
        localStorage.setItem(key, JSON.stringify(limitedMessages.slice(0, 20)));
      } catch (e2) {
        console.warn("Emergency trim to 20 failed, attempting aggressive cleanup", e2);
        try {
          // Second attempt: clear entire inbox and save new message only
          localStorage.removeItem(key);
          localStorage.setItem(key, JSON.stringify([newMessage]));
        } catch (e3) {
          console.error("Critical: Failed to save inbox - storage completely full", e3);
        }
      }
    }
    
    // Dispatch custom events to notify components
    window.dispatchEvent(new Event('inbox_updated'));
    window.dispatchEvent(new CustomEvent('new_inbox_message', { detail: newMessage }));
  },
  
  markAsRead: (id: string) => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return;
    
    const messages = inboxStorage.getMessages();
    let changed = false;
    
    const updated = messages.map(m => {
      if (m.id === id && !m.read) {
        changed = true;
        return { ...m, read: true };
      }
      return m;
    });
    
    if (changed) {
      try {
        localStorage.setItem(key, JSON.stringify(updated));
        window.dispatchEvent(new Event('inbox_updated'));
      } catch (e) {
        console.error("Failed to update inbox read status", e);
      }
    }
  },
  
  getUnreadCount: (): number => {
    return inboxStorage.getMessages().filter(m => !m.read).length;
  },
  
  deleteMessage: (id: string) => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return;
    
    const messages = inboxStorage.getMessages();
    const updated = messages.filter(m => m.id !== id);
    
    try {
      localStorage.setItem(key, JSON.stringify(updated));
      window.dispatchEvent(new Event('inbox_updated'));
    } catch (e) {
      console.error("Failed to delete inbox message", e);
    }
  },

  /**
   * Weekly Quota check for AI Inbox.
   * Limit: 2 per week per specific category.
   */
  canAddWeekly: (category: string, gameDate: Date): boolean => {
    const WEEKLY_LIMIT = 2;
    const weekId = `IW${Math.floor(gameDate.getTime() / (7 * 24 * 60 * 60 * 1000))}`;
    
    // Use an internal memory counter (resets on reload, which is fine for UI fluff)
    // For persistence, we would need to save this in localStorage too.
    if (!(window as any)._inboxWeeklyCounters) (window as any)._inboxWeeklyCounters = {};
    const counters = (window as any)._inboxWeeklyCounters;
    
    if (!counters[weekId]) counters[weekId] = {};
    if (!counters[weekId][category]) counters[weekId][category] = 0;

    if (counters[weekId][category] < WEEKLY_LIMIT) {
      counters[weekId][category]++;
      return true;
    }
    return false;
  }
};
