import { useEffect } from "react";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { NewsEngine } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/berita/NewsEngine";

/**
 * Hook to run the trade news generation and lifecycle management.
 * It listens to time changes from the Go server via timeStorage.
 */
export function useTradeNewsEngine() {
  useEffect(() => {
    // Subscribe to time changes
    const unsubscribe = timeStorage.subscribe((currentDate, isPaused) => {
      // If the game is paused, we don't necessarily want to stop lifecycle checks 
      // (like deleting old news), but news generation usually happens as time flows.
      if (!isPaused) {
        NewsEngine.updateNewsSystem(currentDate);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
}
