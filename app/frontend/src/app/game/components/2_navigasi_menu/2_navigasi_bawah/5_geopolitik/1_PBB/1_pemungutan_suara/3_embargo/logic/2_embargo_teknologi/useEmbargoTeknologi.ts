/**
 * Hook untuk mengelola state Embargo Teknologi
 * Embargo teknologi melarang transfer teknologi dan akses ke inovasi
 */

import { useState, useCallback } from 'react';

export interface EmbargoTeknologiState {
  isActive: boolean;
  targetCountry: string;
  startDate: Date | null;
  durationDays: number;
  remainingDays: number;
  canApplyAnytime: boolean;
  effects: {
    techProgressReduction: number;
    researchSpeedReduction: number;
    innovationPenalty: number;
    approvalRatingDailyLoss: number;
  };
}

const initialState: EmbargoTeknologiState = {
  isActive: false,
  targetCountry: '',
  startDate: null,
  durationDays: 0,
  remainingDays: 0,
  canApplyAnytime: true,
  effects: {
    techProgressReduction: 60,
    researchSpeedReduction: 50,
    innovationPenalty: 40,
    approvalRatingDailyLoss: 1.5,
  },
};

export function useEmbargoTeknologi() {
  const [state, setState] = useState<EmbargoTeknologiState>(initialState);

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
