export const INITIAL_GAME_DATE = new Date(2026, 0, 1); // 1 Januari 2026
const DATE_STORAGE_KEY = "em4_game_date";

export function formatGameDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export function addDays(date: Date, days: number): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
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
