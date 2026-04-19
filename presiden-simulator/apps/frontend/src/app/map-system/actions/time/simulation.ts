import { Dispatch, SetStateAction } from 'react';

export interface SimState {
    isPaused: boolean;
    speed: number;
    date: string;
}

/**
 * getNextDate
 * Menghitung tanggal berikutnya berdasarkan string format DD-MM-YYYY.
 */
export const getNextDate = (currentDate: string): string => {
    const [day, month, year] = currentDate.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    // Tambah 1 hari
    date.setDate(date.getDate() + 1);
    
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    
    return `${d}-${m}-${y}`;
};

/**
 * handleTogglePause
 * Memproses logika pause/resume simulasi.
 */
export const handleTogglePause = (setSimState: Dispatch<SetStateAction<SimState>>) => {
    setSimState(prev => ({ ...prev, isPaused: !prev.isPaused }));
};

/**
 * handleSpeedChange
 * Mengubah kecepatan simulasi (1x, 2x, 3x).
 */
export const handleSpeedChange = (speed: number, setSimState: Dispatch<SetStateAction<SimState>>) => {
    setSimState(prev => ({ ...prev, speed }));
};
