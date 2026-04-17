
import { detectConstructionDetails } from "./buildingLookupUtility";
import { aiBuildingStorage } from "../../AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";
import { aiDefenseStorage } from "../../AI_logic/6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";

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
const NEWS_EFFECTS_KEY = "em4_news_effects_processed";
const DAILY_LIMIT = 10;
const WEEKLY_AI_LIMIT = 10; // User request: Max 10 AI news per week (excluding construction)
// News limits removed per user request to allow infinite history

const dailyCounters: Record<string, Record<string, number>> = {};
let weeklyCounters: Record<string, number> = {}; // weekId -> count

// SSE connection reference
let sseSource: EventSource | null = null;
let lastNewsCount = 0;
let sseRetryTimeout: NodeJS.Timeout | null = null;

// Trade AI daily trigger — tracks last processed game date to fire once per day
let lastTradeProcessedDate = "";
let tradeProcessTimeout: NodeJS.Timeout | null = null;

export const newsStorage = {
  getNews: (): NewsItem[] => {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem(NEWS_STORAGE_KEY);
    if (!stored) return [];
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) return [];
      
      // Self-healing: Deduplicate by ID to prevent UI crashes from legacy data
      const uniqueMap = new Map();
      parsed.forEach((item: NewsItem) => {
        if (item && item.id) uniqueMap.set(item.id, item);
      });
      
      return Array.from(uniqueMap.values())
        .sort((a: NewsItem, b: NewsItem) => b.timestamp - a.timestamp);
    } catch (e) {
      console.error("Failed to parse news storage", e);
      return [];
    }
  },

  /**
   * Sync news from Go Server SSE stream.
   * This replaces the old fetch-inside-getNews pattern.
   */
  syncFromServer: (serverNews: any[]) => {
    if (typeof window === "undefined" || !Array.isArray(serverNews)) return;

    // Map server news to our format
    const mapped: NewsItem[] = serverNews.map((sn: any) => ({
      id: sn.id || `sv-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      source: sn.source || "Server",
      subject: sn.subject || "",
      content: sn.content || "",
      time: sn.time || new Date(sn.timestamp).toLocaleDateString("id-ID"),
      read: sn.read || false,
      priority: sn.priority || "low",
      category: sn.category || "global",
      timestamp: sn.timestamp || Date.now(),
    }));

    // Get current local news (non-server items only)
    const current = newsStorage.getNews();
    const localOnly = current.filter(cn => !cn.id.startsWith("sv-") && !cn.id.startsWith("INTEL-SV-"));

    // Merge: server news first, then local news
    const rawMerged = [...mapped, ...localOnly];
    
    // Deduplicate the merged list to ensure NO duplicates ever reach storage
    const uniqueMap = new Map();
    rawMerged.forEach(item => {
      if (item && item.id) uniqueMap.set(item.id, item);
    });

    const merged = Array.from(uniqueMap.values())
      .sort((a: any, b: any) => b.timestamp - a.timestamp);

    try {
      localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(merged));
      // Trigger side-effects for AI construction
      newsStorage.processConstructionEffects(merged);
    } catch (e) {
      // Quota exceeded — trim and retry
      const trimmed = merged.slice(0, 10);
      localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(trimmed));
    }
    window.dispatchEvent(new Event("news_updated"));
  },

  /**
   * Start listening to the Go Server SSE stream.
   * Call this ONCE when the game page mounts.
   */
  connectSSE: () => {
    if (typeof window === "undefined") return;
    if (sseSource) return; // Already connected

    const connect = () => {
      try {
        sseSource = new EventSource("http://localhost:8081/api/game/sync");

        sseSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            
            // ALWAYS dispatch player state immediately (lightweight)
            window.dispatchEvent(new CustomEvent("game_state_sync", { detail: data }));

            // Sync news less frequently (only when news count changes)
            if (data.news && Array.isArray(data.news)) {
              const currentCount = data.news.length;
              if (currentCount !== lastNewsCount) {
                lastNewsCount = currentCount;
                newsStorage.syncFromServer(data.news);
              }
            }

            // Sync inbox from server (quarterly updates etc)
            if (data.inbox && Array.isArray(data.inbox)) {
              window.dispatchEvent(new CustomEvent("inbox_sync_from_server", { detail: data.inbox }));
            }

            // Sync relationship matrix from server (weekly updates)
            if (data.relationships && typeof data.relationships === 'object') {
              window.dispatchEvent(new CustomEvent("relation_matrix_sync", { detail: data.relationships }));
            }

            // === NUCLEAR RESET SIGNAL ===
            // If the Go server triggered a deep reset, we MUST clear all local AI caches
            if (data.ResetTriggered === true) {
              console.log("☢☢☢ [SSE] NUCLEAR RESET SIGNAL RECEIVED - WIPING LOCAL STORAGE ☢☢☢");
              try {
                // Hardcoded wipe of all AI and Game storage keys
                // This is a fail-safe against modular import issues
                const keysToRemove = [
                  "em4_ai_budgets", "em4_ai_last_processed",
                  "em4_ai_populations", "em4_ai_pop_last_processed",
                  "em4_ai_happiness", "em4_ai_last_happiness_update",
                  "em4_ai_building_data", "em4_ai_defense_counts",
                  "em4_relation_matrix", "em4_global_news_v1",
                  "em4_fresh_session"
                ];

                keysToRemove.forEach(key => localStorage.removeItem(key));
                
                // Set FRESH SESSION flag to TRUE to force components to re-read baseline
                localStorage.setItem("em4_fresh_session", "true");
                
                // Also notify storages that are currently in memory
                window.dispatchEvent(new Event("news_updated"));
                window.dispatchEvent(new Event("ai_budget_updated"));
                window.dispatchEvent(new Event("ai_population_updated"));
                window.dispatchEvent(new Event("ai_happiness_updated"));
                
                console.log("[SSE] Nuclear Reset: Local caches purged. Components will reload baseline data.");
              } catch (e) {
                console.error("[SSE] Failed to purge some AI caches:", e);
              }
            }

            // === TRADE AI DAILY TRIGGER ===
            // Fire AiTradeService.processDaily() once per game day change
            if (data.gameDate && data.gameDate !== lastTradeProcessedDate && !data.isPaused) {
              lastTradeProcessedDate = data.gameDate;
              
              // Debounce: wait 5s after date change to avoid rapid-fire during speed 3x
              if (tradeProcessTimeout) clearTimeout(tradeProcessTimeout);
              tradeProcessTimeout = setTimeout(async () => {
                try {
                  const { AiTradeService } = await import(
                    '@/app/game/components/AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/services/AiTradeService'
                  );
                  AiTradeService.processDaily();
                } catch (e) {
                  // Silent fail — don't crash SSE loop
                }
              }, 5000);
            }
          } catch (e) {
            // Silent parse error
          }
        };

        sseSource.onerror = () => {
          console.warn("[SSE] Connection lost. Retrying in 3s...");
          sseSource?.close();
          sseSource = null;
          
          // Retry connection
          if (sseRetryTimeout) clearTimeout(sseRetryTimeout);
          sseRetryTimeout = setTimeout(connect, 3000);
        };

        sseSource.onopen = () => {
          console.log("[SSE] Connected to Go Server sync stream.");
        };
      } catch (e) {
        console.warn("[SSE] Failed to connect. Retrying in 3s...");
        if (sseRetryTimeout) clearTimeout(sseRetryTimeout);
        sseRetryTimeout = setTimeout(connect, 3000);
      }
    };

    connect();
  },

  /**
   * Disconnect SSE stream (call on unmount).
   */
  disconnectSSE: () => {
    if (sseSource) {
      sseSource.close();
      sseSource = null;
    }
    if (sseRetryTimeout) {
      clearTimeout(sseRetryTimeout);
      sseRetryTimeout = null;
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
    try {
      localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(updated));
      // Trigger side-effects for AI construction
      newsStorage.processConstructionEffects(updated);
    } catch (e) {
      // Quota exceeded — clear old data and retry
      const trimmed = updated.slice(0, 10);
      localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(trimmed));
    }
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
  },

  /**
   * Process instant construction for AI countries.
   * This bypasses the construction timer for NPCs when news is announced.
   */
  processConstructionEffects: (newsItems: NewsItem[]) => {
    if (typeof window === "undefined") return;

    const storedProcessed = localStorage.getItem(NEWS_EFFECTS_KEY);
    const processedIds: Set<string> = new Set(storedProcessed ? JSON.parse(storedProcessed) : []);
    let changed = false;

    newsItems.forEach(item => {
      if (item.category === 'construction' && !processedIds.has(item.id)) {
        const { country, building, isAI } = detectConstructionDetails(item.subject, item.content, item.source);
        
        if (isAI && country && building) {
          const countryKey = country.name_en;
          
          // Apply effect based on sector
          if (building.sectorPath.includes('armada_militer') || 
              building.sectorPath.includes('armada_kepolisian') || 
              building.sectorPath.includes('sektor_pertahanan') ||
              building.sectorPath.includes('intelijen') ||
              building.sectorPath.includes('militer_strategis') ||
              building.sectorPath.includes('pabrik_militer')) {
            aiDefenseStorage.incrementDefenseCount(countryKey, building.dataKey, 1);
            console.log(`[AI EFFECT] Instant Defense for ${countryKey}: ${building.dataKey}`);
          } else {
            aiBuildingStorage.incrementBuildingCount(countryKey, building.dataKey, 1);
            console.log(`[AI EFFECT] Instant Building for ${countryKey}: ${building.dataKey}`);
          }

          processedIds.add(item.id);
          changed = true;
        }
      }
    });

    if (changed) {
      localStorage.setItem(NEWS_EFFECTS_KEY, JSON.stringify(Array.from(processedIds).slice(-200))); // Keep last 200
    }
  }
};
