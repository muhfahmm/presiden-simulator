/**
 * Hook untuk mengelola state Embargo Senjata
 * Embargo senjata melarang penjualan dan transfer senjata
 */

import { useState, useCallback } from 'react';

export interface EmbargoSenjataState {
  isActive: boolean;
  targetCountry: string;
  startDate: Date | null;
  durationDays: number;
  remainingDays: number;
  canApplyAnytime: boolean;
  effects: {
    militaryProductionReduction: number;
    weaponAccessReduction: number;
    militaryStrengthPenalty: number;
    approvalRatingDailyLoss: number;
  };
}

const initialState: EmbargoSenjataState = {
  isActive: false,
  targetCountry: '',
  startDate: null,
  durationDays: 0,
  remainingDays: 0,
  canApplyAnytime: true,
  effects: {
    militaryProductionReduction: 75,
    weaponAccessReduction: 80,
    militaryStrengthPenalty: 60,
    approvalRatingDailyLoss: 1.5,
  },
};

export function useEmbargoSenjata() {
  const [state, setState] = useState<EmbargoSenjataState>(initialState);

  const applyEmbargo = useCallback(
    (targetCountry: string, durationDays: number) => {
      setState(prev => ({
        ...prev,
        isActive: true,
        targetCountry,
        startDate: new Date(),
        durationDays,
        remainingDays: durationDays,
      }));
    },
    []
  );

  const removeEmbargo = useCallback(() => {
    setState(initialState);
  }, []);

  const updateRemainingDays = useCallback((currentDay: number) => {
    setState(prev => {
      if (!prev.isActive || !prev.startDate) return prev;

      const startDay = Math.floor(prev.startDate.getTime() / (1000 * 60 * 60 * 24));
      const daysElapsed = currentDay - startDay;
      const remaining = Math.max(0, prev.durationDays - daysElapsed);

      return {
        ...prev,
        remainingDays: remaining,
        isActive: remaining > 0,
      };
    });
  }, []);

  return {
    state,
    applyEmbargo,
    removeEmbargo,
    updateRemainingDays,
  };
}
