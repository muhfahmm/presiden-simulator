
import { detectConstructionDetails } from "./buildingLookupUtility";
import { aiBuildingStorage } from "../../AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";
import { aiDefenseStorage } from "../../AI_logic/6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";
import { inboxStorage } from "../2_kotak_masuk/inboxStorage";
import { formatGameDate, getStoredGameDate } from "../../1_navbar/5_navigasi_waktu/gameTime";

export interface NewsItem {
  id: string;
  source: string;
  subject: string;
  content: string;
  time: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  category: 'global' | 'diplomacy' | 'conflict' | 'economy' | 'construction' | 'finance' | 'trade';
  timestamp: number;
}

const NEWS_STORAGE_KEY = "em_global_news_v1";
const NEWS_WEEK_KEY = "em_news_week_id";
const NEWS_EFFECTS_KEY = "em_news_effects_processed";
const DAILY_LIMIT = 10;
const WEEKLY_AI_LIMIT = 10; // User request: Max 10 AI news per week (excluding construction)
// News limits removed per user request to allow infinite history

const dailyCounters: Record<string, Record<string, number>> = {};
let weeklyCounters: Record<string, number> = {}; // weekId -> count

// SSE connection reference
let sseSource: EventSource | null = null;
let lastNewsCount = 0;
let lastInboxCount = 0;
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
  syncFromServer: (serverNews: any[], currentGameDate?: string) => {
    if (typeof window === "undefined" || !Array.isArray(serverNews)) return;
    
    // Monthly reset: if server sends empty news, clear local cache
    if (serverNews.length === 0) {
      localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify([]));
      return;
    }

    // Import helper if needed (though it's better to pass it in)
    const fallbackDate = currentGameDate || formatGameDate(getStoredGameDate());

    // Map server news to our format
    const mapped: NewsItem[] = serverNews.map((sn: any) => ({
      id: sn.id || `sv-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      source: sn.source || "Server",
      subject: sn.subject || "",
      content: sn.content || "",
      time: sn.time || fallbackDate || new Date(sn.timestamp || Date.now()).toLocaleDateString("id-ID"),
      read: sn.read || false,
      priority: sn.priority || "low",
      category: sn.category || "global",
      timestamp: sn.timestamp || Date.now(),
    }));

    // Get ALL existing news (Server + Local)
    const current = newsStorage.getNews();
    
    // Merge: incoming server items first, then current history
    const rawMerged = [...mapped, ...current];
    
    // Deduplicate the merged list strictly by ID
    const uniqueMap = new Map();
    rawMerged.forEach(item => {
      if (item && item.id) uniqueMap.set(item.id, item);
    });
    
    // Sort: most recent first
    const merged = Array.from(uniqueMap.values())
      .sort((a: any, b: any) => b.timestamp - a.timestamp);

    try {
      localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(merged));
      // Trigger side-effects for AI construction
      newsStorage.processConstructionEffects(merged);
    } catch (e) {
      // Quota exceeded — only trim if absolutely necessary to prevent crash, but keep a large buffer
      const trimmed = merged.slice(0, 1000); 
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
        sseSource = new EventSource("http://127.0.0.1:8081/api/game/sync");

        sseSource.onmessage = async (event) => {
          try {
            const data = JSON.parse(event.data);
            
            // ALWAYS dispatch player state immediately (lightweight)
            window.dispatchEvent(new CustomEvent("game_state_sync", { detail: data }));

            // Sync news less frequently (only when news count changes)
            if (data.news && Array.isArray(data.news)) {
              const currentCount = data.news.length;
              if (currentCount !== lastNewsCount) {
                lastNewsCount = currentCount;
                newsStorage.syncFromServer(data.news, data.gameDate);
              }
            }

            // Sync NPC building levels from Go server (authoritative)
            if (data.npcBuildingLevels && typeof data.npcBuildingLevels === 'object') {
              try {
                const { aiBuildingStorage } = await import(
                  '@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage'
                );
                // Write each country's building deltas from the Go server
                for (const [countryName, buildings] of Object.entries(data.npcBuildingLevels as Record<string, Record<string, number>>)) {
                  if (buildings && typeof buildings === 'object') {
                    const existing = aiBuildingStorage.getData(countryName);
                    let hasChanges = false;
                    for (const [buildingKey, count] of Object.entries(buildings)) {
                      const prevCount = existing.buildingDeltas[buildingKey] || 0;
                      if (prevCount !== count) {
                        existing.buildingDeltas[buildingKey] = count;
                        if (prevCount < count) {
                          existing.completionDates[buildingKey] = data.gameDate;
                        }
                        hasChanges = true;
                      }
                    }
                    if (hasChanges) {
                      aiBuildingStorage.saveCountryData(
                        countryName,
                        buildings, // Use the authoritative Go server count
                        existing.constructionQueue,
                        existing.completionDates
                      );
                      console.log(`[SSE] Syncing ${countryName}: Progress detected.`);
                    }
                  }
                }
              } catch (e) {
                // Silent — don't break SSE loop
              }
            }

            // Sync inbox from server (quarterly updates etc)
            if (data.inbox && Array.isArray(data.inbox)) {
              const currentInboxCount = data.inbox.length;
              if (currentInboxCount !== lastInboxCount) {
                lastInboxCount = currentInboxCount;
                inboxStorage.syncFromServer(data.inbox);
              }
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
                  "em_ai_budgets", "em_ai_last_processed",
                  "em_ai_populations", "em_ai_pop_last_processed",
                  "em_ai_happiness", "em_ai_last_happiness_update",
                  "em_ai_building_data", "em_ai_defense_counts",
                  "em_relation_matrix", "em_global_news_v1",
                  "em_fresh_session"
                ];

                keysToRemove.forEach(key => localStorage.removeItem(key));
                
                // Set FRESH SESSION flag to TRUE to force components to re-read baseline
                localStorage.setItem("em_fresh_session", "true");
                
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
      time: news.time || formatGameDate(getStoredGameDate()),
      timestamp: Date.now()
    };
    
    const updated = [newItem, ...currentParsed];
    try {
      localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(updated));
      // Trigger side-effects for AI construction
      newsStorage.processConstructionEffects(updated);
    } catch (e) {
      // Quota exceeded — keep up to 1000 items
      const trimmed = updated.slice(0, 1000);
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
          
          // Extract quantity from news text (e.g., "pembangunan 4 unit" or "pengadaan 4 unit")
          const fullText = `${item.subject} ${item.content}`;
          const qtyMatch = fullText.match(/(?:pembangunan|pengadaan|memulai pembangunan|membangun)\s+(\d+)\s+unit/i);
          const quantity = qtyMatch ? parseInt(qtyMatch[1], 10) : 1;

          // Apply effect based on sector
          if (building.sectorPath.includes('armada_militer') || 
              building.sectorPath.includes('armada_kepolisian') || 
              building.sectorPath.includes('sektor_pertahanan') ||
              building.sectorPath.includes('intelijen') ||
              building.sectorPath.includes('militer_strategis') ||
              building.sectorPath.includes('pabrik_militer')) {
            aiDefenseStorage.incrementDefenseCount(countryKey, building.dataKey, quantity);
            console.log(`[AI EFFECT] Instant Defense for ${countryKey}: ${building.dataKey} x${quantity}`);
          } else {
            aiBuildingStorage.incrementBuildingCount(countryKey, building.dataKey, quantity);
            console.log(`[AI EFFECT] Instant Building for ${countryKey}: ${building.dataKey} x${quantity}`);
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
