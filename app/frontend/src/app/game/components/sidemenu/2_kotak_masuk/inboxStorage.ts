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
  status?: 'pending' | 'accepted' | 'rejected';
  metadata?: any;
  timestamp: number;
  content?: string;
}

const MAX_INBOX_MESSAGES = 500; // Increased but capped at a safe limit to prevent QuotaExceededError
const CONTENT_TRIM_THRESHOLD = 50; // Trim content for messages older than this to save space

export const inboxStorage = {
  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("em_inbox_data");
      window.dispatchEvent(new Event('inbox_updated'));
    }
  },
  getStorageKey: () => {
    return "em_inbox_data";
  },

  getMessages: (): InboxItem[] => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(key);
      const parsed: InboxItem[] = data ? JSON.parse(data) : [];

      // Auto-filter redundant or non-whitelisted items whenever messages are retrieved
      return parsed.filter(msg => {
        // 1. Whitelist filter for trade
        if (msg.category === 'trade' || msg.category === 'embassy') {
          if (!inboxStorage.isTradeWhitelisted(msg.source, msg.subject)) return false;
        }

        // AGGRESSIVE COUNTRY EXTRACTION for redundancy checks
        let country = msg.metadata?.id || msg.metadata?.country;
        if (!country) {
          const subjectMatch = msg.subject.match(/\(([^)]+)\)$/);
          if (subjectMatch) country = subjectMatch[1];
        }
        if (!country) {
          const sourceMatch = msg.source.match(/\(([^)]+)\)/);
          if (sourceMatch) country = sourceMatch[1];
        }

        // 2. Redundancy filter for Embassy Proposals
        if (msg.category === 'embassy' && msg.isProposal && country && !msg.status) {
          try {
            const { embassyStorage } = require("@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage");
            if (embassyStorage.getEmbassyStatus(country) === 'completed') {
              // console.log(`[INBOX] Filtering redundant embassy proposal from ${country}`);
              return false;
            }
          } catch (e) { }
        }

        // 3. Embassy requirement filter for advanced proposals (Pacts/Alliances)
        const isAdvancedProposal = msg.isProposal && ['trade', 'pact', 'alliance', 'defense', 'diplomacy'].includes(msg.category || '');
        if (isAdvancedProposal && country) {
          try {
            const { embassyStorage } = require("@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage");
            const status = embassyStorage.getEmbassyStatus(country);
            if (status !== 'completed') return false;
          } catch (e) { }
        }

        return true;
      }).map(msg => {
        // FORCE TITLE REMASTRY: Ensure all embassy proposals have the exact title requested
        if (msg.category === 'embassy' && msg.isProposal) {
          // 1. Try Metadata
          let rawCountry = msg.metadata?.id || msg.metadata?.country;

          // 2. Try Source Regex
          if (!rawCountry || rawCountry === 'Negara') {
            const countryMatch = msg.source.match(/\(([^)]+)\)/);
            if (countryMatch) rawCountry = countryMatch[1];
          }

          // 3. EMERGENCY RECOVERY: Try Content (if already overwritten by previous bug)
          if (!rawCountry || rawCountry === 'Negara') {
            const contentMatch = msg.content?.match(/dengan\s+([A-Z\s]{3,20})/i);
            if (contentMatch) rawCountry = contentMatch[1].trim();
          }

          // 4. LAST RESORT: Try current subject (it might contain the name if not yet overwritten)
          if (!rawCountry || rawCountry === 'Negara') {
            const subjMatch = msg.subject.match(/\(([^)]+)\)/);
            if (subjMatch && subjMatch[1] !== 'Negara') rawCountry = subjMatch[1];
          }

          // Format name to Title Case
          const country = String(rawCountry || "Negara").toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

          // AUTO-HEAL: If already accepted, ensure embassy storage is synced
          if (msg.status === 'accepted' && rawCountry && rawCountry !== 'Negara') {
            try {
              const { embassyStorage } = require("@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage");
              if (embassyStorage.getEmbassyStatus(rawCountry) !== 'completed') {
                console.log(`[INBOX] Auto-healing embassy status for ${rawCountry}`);
                embassyStorage.updateEmbassyStatus(rawCountry, 'completed');
              }
            } catch (e) { }
          }

          return { ...msg, subject: `tawaran pembangunan kedubes (${country})` };
        }

        // TITLE REMASTERY: Pact proposals
        if (msg.category === 'pact' && msg.isProposal) {
          let rawCountry = msg.metadata?.id || msg.metadata?.country;
          if (!rawCountry) { const m = msg.subject.match(/\(([^)]+)\)$/); if (m) rawCountry = m[1]; }
          if (!rawCountry) { const m = msg.source.match(/\(([^)]+)\)/); if (m) rawCountry = m[1]; }
          const country = String(rawCountry || "Negara").toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          const dur = msg.metadata?.durationYears || 5;
          // Auto-heal content if duration not mentioned (case-insensitive)
          let content = msg.content || "";
          if (!content.toLowerCase().includes('tahun')) {
            content = `📋 Durasi Pakta: ${dur} Tahun\n\n${content}`;
          }
          return { ...msg, subject: `tawaran pakta non agresi ${dur} tahun (${country})`, content };
        }

        // TITLE REMASTERY: Alliance proposals
        if (msg.category === 'alliance' && msg.isProposal) {
          let rawCountry = msg.metadata?.id || msg.metadata?.country;
          if (!rawCountry) { const m = msg.subject.match(/\(([^)]+)\)$/); if (m) rawCountry = m[1]; }
          if (!rawCountry) { const m = msg.source.match(/\(([^)]+)\)/); if (m) rawCountry = m[1]; }
          const country = String(rawCountry || "Negara").toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          const dur = msg.metadata?.durationYears || 5;
          // Auto-heal content if duration not mentioned (case-insensitive)
          let content = msg.content || "";
          if (!content.toLowerCase().includes('tahun')) {
            content = `🛡️ Durasi Aliansi: ${dur} Tahun\n\n${content}`;
          }
          return { ...msg, subject: `tawaran aliansi pertahanan ${dur} tahun (${country})`, content };
        }

        return msg;
      });
    } catch {
      return [];
    }
  },

  /**
   * Checks if a trade message's source country is in the player's official partner whitelist.
   * Also handles redundancy filtering: if already a partner, don't show "Partnership" proposals.
   */
  isTradeWhitelisted: (source: string, subject?: string): boolean => {
    if (typeof window === 'undefined') return true;

    // 1. Get current player's country
    const sessionRaw = localStorage.getItem("game_session");
    let playerCountry = "Indonesia";
    try {
      if (sessionRaw) playerCountry = JSON.parse(sessionRaw).country || playerCountry;
    } catch (e) { }

    if (!playerCountry || playerCountry === "Indonesia") {
      playerCountry = localStorage.getItem("selectedCountry") || localStorage.getItem("selected_country") || "Indonesia";
    }

    // 2. Load official agreements
    const officialPartners = getInitialAgreements(playerCountry, playerCountry);
    const isActuallyPartner = (partnerName: string) => {
      return officialPartners.some(p =>
        p.mitra.toLowerCase() === partnerName.toLowerCase() ||
        partnerName.toLowerCase().includes(p.mitra.toLowerCase())
      );
    };

    // 3. Identify partner from source/subject
    let identifiedPartner = "";
    const sourceMatch = source.match(/\(([^)]+)\)/);
    if (sourceMatch) {
      identifiedPartner = sourceMatch[1].trim();
    } else if (subject) {
      const subjParts = subject.split(" dari ");
      if (subjParts.length > 1) identifiedPartner = subjParts[subjParts.length - 1].trim();
    }

    if (!identifiedPartner) return true;

    // 4. Redundancy Logic: If it's a partnership/embassy proposal
    const lowerSubj = (subject || "").toLowerCase();
    const isProposal = lowerSubj.includes("kemitraan") || lowerSubj.includes("kedutaan") || lowerSubj.includes("perjanjian");

    const isWhitelisted = isActuallyPartner(identifiedPartner);

    if (isProposal) {
      // If ALREADY a partner, REJECT the proposal (redundant)
      if (isWhitelisted) {
        console.log(`[INBOX] Filtering redundant proposal from existing partner: ${identifiedPartner}`);
        return false;
      }
      // Allow proposals from NEW potential partners
      return true;
    }

    // 5. For regular trade (buy/sell), ONLY allow if whitelisted
    return isWhitelisted;
  },

  /**
   * More aggressive cleanup for absolute emergencies
   */
  emergencyCleanup: () => {
    if (typeof window === 'undefined') return;
    const messages = inboxStorage.getMessages();
    // Keep only the 20 most recent messages and clear the rest
    const emergencyList = messages.slice(0, 20);
    const key = inboxStorage.getStorageKey();
    localStorage.setItem(key, JSON.stringify(emergencyList));
    window.dispatchEvent(new Event('inbox_updated'));
    console.warn("[INBOX] Emergency cleanup performed due to storage pressure.");
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

  /**
   * Trims the body content of older messages to save space
   */
  trimOldMessages: (msgs: InboxItem[]): InboxItem[] => {
    return msgs.map((m, index) => {
      if (index >= CONTENT_TRIM_THRESHOLD && m.content && m.content.length > 100) {
        return { ...m, content: (m.content.substring(0, 50) + "... [Isi pesan lama dihapus otomatis untuk menghemat ruang]") };
      }
      return m;
    });
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

    // EMBASSY REQUIREMENT: Trade, Pacts, and Alliances require an active embassy
    const needsEmbassy = msg.isProposal && ['trade', 'pact', 'alliance', 'defense', 'diplomacy'].includes(msg.category || '');
    if (needsEmbassy) {
      // AGGRESSIVE COUNTRY EXTRACTION
      let country = msg.metadata?.id || msg.metadata?.country;

      // Try Subject Regex (e.g. "DEKLARASI ZONA PERDAMAIAN (KAMBOJA)")
      if (!country) {
        const subjectMatch = msg.subject.match(/\(([^)]+)\)$/);
        if (subjectMatch) country = subjectMatch[1];
      }

      // Try Source Regex
      if (!country) {
        const sourceMatch = msg.source.match(/\(([^)]+)\)/);
        if (sourceMatch) country = sourceMatch[1];
      }

      if (country) {
        try {
          const { embassyStorage } = require("@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage");
          const hasEmbassy = embassyStorage.getEmbassyStatus(country) === 'completed';
          if (!hasEmbassy) {
            console.log(`[INBOX] BLOCKED: ${msg.category} proposal from ${country} requires an embassy first!`);
            return; // REJECT THE MESSAGE
          }
        } catch (e) {
          console.error("[INBOX] Embassy check failed", e);
        }
      }
    }

    // REDUNDANCY FILTER: Embassy proposals from existing partners
    if (msg.category === 'embassy' && msg.isProposal) {
      let country = msg.metadata?.id || msg.metadata?.country;
      if (!country) {
        const subjectMatch = msg.subject.match(/\(([^)]+)\)$/);
        if (subjectMatch) country = subjectMatch[1];
      }
      if (!country) {
        const sourceMatch = msg.source.match(/\(([^)]+)\)/);
        if (sourceMatch) country = sourceMatch[1];
      }

      if (country) {
        try {
          const { embassyStorage } = require("@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage");
          if (embassyStorage.getEmbassyStatus(country) === 'completed') {
            console.log(`[INBOX] Blocked redundant embassy proposal from ${country}`);
            return;
          }
        } catch (e) { }
      }
    }

    const newMessage: InboxItem = {
      ...msg,
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      read: false,
      timestamp: Date.now()
    };

    // Trim content for very old messages to save space
    const trimmedMessages = inboxStorage.trimOldMessages(messages);

    // Insert at the beginning so newest is first
    trimmedMessages.unshift(newMessage);

    // Limit total messages to prevent QuotaExceededError
    const limitedMessages = trimmedMessages.slice(0, MAX_INBOX_MESSAGES);

    try {
      localStorage.setItem(key, JSON.stringify(limitedMessages));
    } catch (e) {
      console.warn("Inbox storage full, attempting emergency trim", e);
      try {
        // First attempt: keep only latest 50 and trim them
        const emergency = trimmedMessages.slice(0, 50);
        localStorage.setItem(key, JSON.stringify(emergency));
      } catch (e2) {
        console.warn("Emergency trim to 50 failed, attempting aggressive cleanup", e2);
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

  updateMessageStatus: (id: string, status: 'accepted' | 'rejected') => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return;
    // READ RAW DATA from localStorage, NOT getMessages() which applies transforms
    const stored = localStorage.getItem(key);
    if (!stored) return;
    try {
      const rawMessages = JSON.parse(stored);
      const updated = rawMessages.map((m: any) => m.id === id ? { ...m, status, read: true } : m);
      localStorage.setItem(key, JSON.stringify(updated));
      window.dispatchEvent(new Event('inbox_updated'));
    } catch (e) {
      console.error('Failed to update message status', e);
    }
  },

  getUnreadCount: (): number => {
    return inboxStorage.getMessages().filter(m => !m.read).length;
  },

  deleteMessage: (id: string) => {
    const key = inboxStorage.getStorageKey();
    if (typeof window === 'undefined') return;

    // READ RAW DATA from localStorage, NOT getMessages() which applies transforms
    const stored = localStorage.getItem(key);
    if (!stored) return;

    try {
      const rawMessages = JSON.parse(stored);
      const updated = rawMessages.filter((m: any) => m.id !== id);
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
      isProposal: si.is_proposal || si.isProposal || (si.category === 'trade' && (si.subject.toLowerCase().includes('tawaran') || si.subject.toLowerCase().includes('permintaan'))),
      proposalLabel: si.proposal_label || si.proposalLabel || (si.category === 'trade' ? 'PROPOSAL' : undefined),
      metadata: si.metadata || undefined,
      timestamp: si.timestamp * 1000 || Date.now()
    })).filter(item => {
      // Apply Whitelist filter during sync as well
      if (item.category === 'trade') {
        if (!inboxStorage.isTradeWhitelisted(item.source, item.subject)) return false;
      }

      // Embassy requirement for server-synced proposals
      const isEmbassyCategory = item.category === 'embassy' || (item.category === 'diplomacy' && item.subject.toLowerCase().includes('kedutaan'));
      const needsEmbassyCheck = item.isProposal && !isEmbassyCategory && ['trade', 'pact', 'alliance', 'defense', 'diplomacy'].includes(item.category || '');
      
      if (needsEmbassyCheck) {
        let country = item.metadata?.id || item.metadata?.country;
        if (!country) {
          const subjectMatch = item.subject.match(/\(([^)]+)\)$/);
          if (subjectMatch) country = subjectMatch[1];
        }
        if (!country) {
          const sourceMatch = item.source.match(/\(([^)]+)\)/);
          if (sourceMatch) country = sourceMatch[1];
        }
        if (country) {
          try {
            const { embassyStorage } = require("@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage");
            if (embassyStorage.getEmbassyStatus(country) !== 'completed') return false;
          } catch (e) {}
        }
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
