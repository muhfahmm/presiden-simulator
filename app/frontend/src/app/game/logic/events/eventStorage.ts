export interface ActiveEvent {
  id: string;
  type: 'health' | 'security';
  startTime: number; // timestamp
  remainingDays: number;
  penalty: {
    lifeExpectancy?: number;
    securityLevel?: number;
    stabilitiy?: number;
    budget?: number;
  };
}

const STORAGE_KEY = "em4_active_events";

export const eventStorage = {
  getActiveEvents: (): ActiveEvent[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveEvents: (events: ActiveEvent[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  },

  addEvent: (event: ActiveEvent) => {
    const events = eventStorage.getActiveEvents();
    // Prevent same event ID from being active twice
    if (events.find(e => e.id === event.id)) return;
    events.push(event);
    eventStorage.saveEvents(events);
  },

  tickEvents: () => {
    const events = eventStorage.getActiveEvents();
    const updated = events
      .map(e => ({ ...e, remainingDays: e.remainingDays - 1 }))
      .filter(e => e.remainingDays > 0);
    
    eventStorage.saveEvents(updated);
  },

  getActivePenalties: () => {
    const events = eventStorage.getActiveEvents();
    return events.reduce((acc, e) => {
      acc.lifeExpectancy += (e.penalty.lifeExpectancy || 0);
      acc.securityLevel += (e.penalty.securityLevel || 0);
      acc.stability += (e.penalty.stabilitiy || 0);
      acc.budget += (e.penalty.budget || 0);
      return acc;
    }, { lifeExpectancy: 0, securityLevel: 0, stability: 0, budget: 0 });
  }
};
