import { gameStorage } from "../../gamestorage";

export interface InboxItem {
  id: string;
  source: string;
  subject: string;
  time: string; // Stored as a formatted string or game date
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  timestamp: number;
  content?: string;
}

export const inboxStorage = {
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
    localStorage.setItem(key, JSON.stringify(messages));
    
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
      localStorage.setItem(key, JSON.stringify(updated));
      window.dispatchEvent(new Event('inbox_updated'));
    }
  },
  
  getUnreadCount: (): number => {
    return inboxStorage.getMessages().filter(m => !m.read).length;
  }
};
