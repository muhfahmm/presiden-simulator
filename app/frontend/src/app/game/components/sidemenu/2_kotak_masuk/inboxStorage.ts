import { gameStorage } from "@/app/game/gamestorage";
import { getInitialAgreements } from "@/app/pilih_negara/data/database_mitra_perdagangan/agreementsRegistry";

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

const MAX_INBOX_MESSAGES = 10000; // Increased to effectively unlimited per user request

export const inboxStorage = {
  clear: () => {
    if (typeof window !== "undefined") localStorage.removeItem("em_inbox_data");
  },
  getStorageKey: () => {
    return "em_inbox_data";
  },

  getMessages: (): InboxItem[] => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(key);
      const parsed = data ? JSON.parse(data) : [];

      // Auto-prune non-whitelisted items whenever messages are retrieved
      // only if we are in a trade tab context or just occasionally
      return parsed;
    } catch {
      return [];
    }
  },

  /**
   * Checks if a trade message's source country is in the player's official partner whitelist.
   */
  isTradeWhitelisted: (source: string, subject?: string): boolean => {
    if (typeof window === 'undefined') return true;

    // 1. Get current player's country from localStorage / game_session
    const sessionRaw = localStorage.getItem("game_session");
    let playerCountry = "Indonesia";
    try {
      if (sessionRaw) playerCountry = JSON.parse(sessionRaw).country || playerCountry;
    } catch (e) { }

    // Fallback to selectedCountry if session failed
    if (!playerCountry || playerCountry === "Indonesia") {
      playerCountry = localStorage.getItem("selectedCountry") || localStorage.getItem("selected_country") || "Indonesia";
    }

    // 2. Load official agreements for this country
    const officialPartners = getInitialAgreements(playerCountry, playerCountry);

    if (!officialPartners || officialPartners.length === 0) return true;

    // 3. Extract partner country name from source OR subject
    let identifiedPartner = "";
    const sourceMatch = source.match(/\(([^)]+)\)/);
    if (sourceMatch) {
      identifiedPartner = sourceMatch[1].trim();
    } else if (subject) {
      // Try extracting from subject like "tawaran impor: Beras dari Thailand"
      const subjParts = subject.split(" dari ");
      if (subjParts.length > 1) {
        identifiedPartner = subjParts[subjParts.length - 1].trim();
      }
    }

    if (!identifiedPartner) return true;

    // 4. Check against whitelist
    const isWhitelisted = officialPartners.some(p =>
      p.mitra.toLowerCase() === identifiedPartner.toLowerCase() ||
      identifiedPartner.toLowerCase().includes(p.mitra.toLowerCase())
    );

    return isWhitelisted;
  },

  /**
   * Remove any trade messages that are no longer in the whitelist (e.g. after a restart or country change)
   */
  pruneNonWhitelisted: () => {
    if (typeof window === 'undefined') return;
    const messages = inboxStorage.getMessages();
    const filtered = messages.filter(msg => {
      if (msg.category === 'trade') {
        return inboxStorage.isTradeWhitelisted(msg.source, msg.subject);
      }
      return true;
    });

    if (filtered.length !== messages.length) {
      const key = inboxStorage.getStorageKey();
      localStorage.setItem(key, JSON.stringify(filtered));
      window.dispatchEvent(new Event('inbox_updated'));
    }
  },

  addMessage: (msg: Omit<InboxItem, 'id' | 'read' | 'timestamp'>) => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return;

    const messages = inboxStorage.getMessages();

    // WHITELIST FILTER: If trade, check if source is from a valid partner
    if (msg.category === 'trade') {
      if (!inboxStorage.isTradeWhitelisted(msg.source, msg.subject)) {
        console.log(`[INBOX] Blocked trade message from non-partner: ${msg.source} / ${msg.subject}`);
        return;
      }
    }

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
    const WEEKLY_LIMIT = 5; // Increased to 5 for better trade experience
    const weekId = `IW${Math.floor(gameDate.getTime() / (7 * 24 * 60 * 60 * 1000))}`;

    if (!(window as any)._inboxWeeklyCounters) (window as any)._inboxWeeklyCounters = {};
    const counters = (window as any)._inboxWeeklyCounters;

    if (!counters[weekId]) counters[weekId] = {};
    if (!counters[weekId][category]) counters[weekId][category] = 0;

    return counters[weekId][category] < WEEKLY_LIMIT;
  },

  /**
   * Increment the weekly counter after successful message addition.
   */
  incrementWeekly: (category: string, gameDate: Date) => {
    const weekId = `IW${Math.floor(gameDate.getTime() / (7 * 24 * 60 * 60 * 1000))}`;
    if (!(window as any)._inboxWeeklyCounters) (window as any)._inboxWeeklyCounters = {};
    const counters = (window as any)._inboxWeeklyCounters;

    if (!counters[weekId]) counters[weekId] = {};
    if (!counters[weekId][category]) counters[weekId][category] = 0;

    counters[weekId][category]++;
  },

  /**
   * Sync inbox from Go Server SSE stream.
   */
  syncFromServer: (serverInbox: any[]) => {
    if (typeof window === 'undefined' || !Array.isArray(serverInbox)) return;

    const key = inboxStorage.getStorageKey();
    const current = inboxStorage.getMessages();

    // Map server items to our internal format
    const mapped: InboxItem[] = serverInbox.map(si => ({
      id: si.id || `sv-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      source: si.source || "Pemerintah",
      subject: si.subject || "Pemberitahuan",
      content: si.content || "",
      time: si.time || new Date(si.timestamp * 1000).toLocaleDateString("id-ID"),
      read: si.read || false,
      priority: si.priority || "low",
      category: si.category || "general",
      timestamp: si.timestamp * 1000 || Date.now()
    })).filter(item => {
      // Apply Whitelist filter during sync as well
      if (item.category === 'trade') {
        return inboxStorage.isTradeWhitelisted(item.source, item.subject);
      }
      return true;
    });

    // Merge logic: deduplicate by ID and preserve local 'read' status
    const uniqueMap = new Map();

    // Process local items first
    current.forEach(item => uniqueMap.set(item.id, item));

    // Process server items
    mapped.forEach(serverItem => {
      if (uniqueMap.has(serverItem.id)) {
        // Keep existing item to preserve its 'read' status, but update content if varied
        const existing = uniqueMap.get(serverItem.id);
        existing.content = serverItem.content || existing.content;
      } else {
        uniqueMap.set(serverItem.id, serverItem);
      }
    });

    // Sort by most recent first
    const sorted = Array.from(uniqueMap.values())
      .sort((a: any, b: any) => b.timestamp - a.timestamp);

    // Limit storage
    const limited = sorted.slice(0, MAX_INBOX_MESSAGES);

    try {
      localStorage.setItem(key, JSON.stringify(limited));
      // Dispatch update event so SideMenu red dot appears
      window.dispatchEvent(new Event('inbox_updated'));

      // NEW: Prune any old garbage if the player has changed or whitelist updated
      inboxStorage.pruneNonWhitelisted();
    } catch (e) {
      console.error("Failed to sync inbox from server", e);
    }
  }
};
