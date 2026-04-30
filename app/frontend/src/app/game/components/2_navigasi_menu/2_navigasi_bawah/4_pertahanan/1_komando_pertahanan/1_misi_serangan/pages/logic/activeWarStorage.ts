// PERSISTENT STORAGE UNTUK PERANG AKTIF
// Memastikan data pertempuran tidak reset saat keluar/masuk halaman.

export interface WarState {
    target: string;
    phase: 'intro' | 'fighting' | 'result';
    playerUnits: any[];
    enemyUnits: any[];
    initialPlayerPower: number;
    initialEnemyPower: number;
    isCeasefire: boolean;
    playerLogs: string[];
    enemyLogs: string[];
    hasOfferedAt: number[];
}

class ActiveWarStorage {
    private state: WarState | null = null;
    private listeners: ((state: WarState | null) => void)[] = [];

    getState() {
        return this.state;
    }

    saveState(newState: WarState) {
        this.state = newState;
        this.notify();
    }

    clearState() {
        this.state = null;
        this.notify();
    }

    subscribe(listener: (state: WarState | null) => void) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    private notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
}

export const activeWarStorage = new ActiveWarStorage();
