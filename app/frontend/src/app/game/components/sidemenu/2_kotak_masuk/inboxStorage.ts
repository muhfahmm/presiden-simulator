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
  timestamp: number;
  content?: string;
  metadata?: {
    type: string;
    id: string;
  };
}

const MAX_INBOX_MESSAGES = 200;

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
      if (!data) return [];
      const parsed = JSON.parse(data);
      if (!Array.isArray(parsed)) return [];

      // SELF-HEALING: Filter out stale/legacy trade messages that don't match the new simple format
      // This solves the user's frustration by removing "trash" messages automatically.
      const legacyKeywords = [
        'framework agreement', 'koridor ekonomi', 'pelabuhan bebas', 'jalur dagang baru', 
        'perjanjian pembelian terjadwal', 'pra-order batu bara', 'mou perdagangan',
        'lelang komoditas', 'inisiasi hubungan dagang', 'misi dagang resmi', 'digitalisasi rantai pasok'
      ];

      const filtered = parsed.filter((item: InboxItem) => {
        if (!item || !item.subject) return false;
        if (item.category === 'trade' || item.category === 'diplomacy') {
          const lowerSubj = item.subject.toLowerCase();
          // If it contains legacy complex keywords, drop it
          if (legacyKeywords.some(kw => lowerSubj.includes(kw))) return false;
        }
        return true;
      });

      // Deduplicate by ID to prevent UI crashes
      const uniqueMap = new Map();
      filtered.forEach((item: InboxItem) => {
        if (item && item.id) uniqueMap.set(item.id, item);
      });

      return Array.from(uniqueMap.values())
        .sort((a, b) => b.timestamp - a.timestamp);
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
   * Limit: 15 per week per specific category.
   */
  canAddWeekly: (category: string, gameDate: Date): boolean => {
    const WEEKLY_LIMIT = 15;
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
  },

  syncFromServer: (serverInbox: any[]) => {
    if (typeof window === "undefined" || !Array.isArray(serverInbox)) return;

    // Map server items to our format
    const mapped: InboxItem[] = serverInbox.map((si: any) => ({
      id: si.id || `isv-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      sender: si.sender || "System",
      source: si.sender || "System", // Compatibility
      subject: si.subject || "",
      content: si.content || "",
      time: si.time || new Date(si.timestamp).toLocaleDateString("id-ID"),
      read: si.read || false,
      priority: si.priority || "low",
      category: si.category || "general",
      isProposal: si.isProposal || false,
      proposalLabel: si.proposalLabel || "",
      timestamp: si.timestamp || Date.now(),
    }));

    // Get current local inbox (non-server items only)
    const current = inboxStorage.getMessages();
    const localOnly = current.filter(ci => !ci.id.startsWith("sv-") && !ci.id.startsWith("INTEL-SV-") && !ci.id.startsWith("isv-"));

    // Merge: server first, then local
    const rawMerged = [...mapped, ...localOnly];
    
    // Aggressive deduplication
    const uniqueMap = new Map();
    rawMerged.forEach(item => {
      if (item && item.id) uniqueMap.set(item.id, item);
    });

    const merged = Array.from(uniqueMap.values())
      .sort((a: any, b: any) => b.timestamp - a.timestamp)
      .slice(0, MAX_INBOX_MESSAGES);

    localStorage.setItem("em4_inbox_data", JSON.stringify(merged));
    window.dispatchEvent(new Event("inbox_updated"));
  }
};

// Listen for server sync events (dispatched from newsStorage SSE)
if (typeof window !== "undefined") {
  window.addEventListener("inbox_sync_from_server", (e: any) => {
    if (e.detail) inboxStorage.syncFromServer(e.detail);
  });
}
