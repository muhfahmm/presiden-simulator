export const INITIAL_GAME_DATE = new Date(Date.UTC(2026, 0, 1)); // 1 Januari 2026 UTC
const DATE_STORAGE_KEY = "em4_game_date";

export function formatGameDate(date: Date): string {
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${day}-${month}-${year}`;
}

export function addDays(date: Date, days: number): Date {
  const newDate = new Date(date);
  newDate.setUTCDate(newDate.getUTCDate() + days);
  return newDate;
}

export function saveGameDate(date: Date) {
  if (typeof window !== "undefined") {
    localStorage.setItem(DATE_STORAGE_KEY, String(date.getTime()));
  }
}

export function getStoredGameDate(): Date {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(DATE_STORAGE_KEY);
    if (stored) {
      const time = Number(stored);
      if (!isNaN(time) && isFinite(time)) {
        const d = new Date(time);
        if (!isNaN(d.getTime())) return d;
      }
    }
  }
  return INITIAL_GAME_DATE;
}



export function getGameWeekIndex(date: Date): number {
  const diffTime = Math.abs(date.getTime() - INITIAL_GAME_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.floor(diffDays / 7);
}

/**
 * Parses a date string in "DD-MM-YYYY" format back into a Date object.
 */
export function parseFormattedDate(dateStr: string): Date {
  const [d, m, y] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

/**
 * Checks if a stored completion date string is within the last 7 days 
 * compared to the current game date.
 */
export function isWithin7Days(compDateStr: string | null | undefined, currentGameDate: Date): boolean {
  if (!compDateStr) return false;
  try {
    const compDate = parseFormattedDate(compDateStr);
    const diffTime = currentGameDate.getTime() - compDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    // Allow indicators to show for 7 full days (0 to 6.99...)
    return diffDays >= 0 && diffDays < 7;
  } catch (e) {
    return false;
  }
}
