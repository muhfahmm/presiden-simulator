/**
 * Hook untuk mengelola state Embargo Sumber Daya
 * Embargo sumber daya melarang akses ke bahan baku dan sumber daya alam
 */

import { useState, useCallback } from 'react';

export interface EmbargoSumberDayaState {
  isActive: boolean;
  targetCountry: string;
  startDate: Date | null;
  durationDays: number;
  remainingDays: number;
  canApplyAnytime: boolean;
  effects: {
    resourceProductionReduction: number;
    rawMaterialAccessReduction: number;
    manufacturingPenalty: number;
    approvalRatingDailyLoss: number;
  };
}

const initialState: EmbargoSumberDayaState = {
  isActive: false,
  targetCountry: '',
  startDate: null,
  durationDays: 0,
  remainingDays: 0,
  canApplyAnytime: true,
  effects: {
    resourceProductionReduction: 70,
    rawMaterialAccessReduction: 65,
    manufacturingPenalty: 50,
    approvalRatingDailyLoss: 2,
  },
};

export function useEmbargoSumberDaya() {
  const [state, setState] = useState<EmbargoSumberDayaState>(initialState);

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
