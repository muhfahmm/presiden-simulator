import { useState, useCallback } from 'react';

export interface EmbargoEkonomiState {
  isActive: boolean;
  duration: string;
  targetCountry: string | null;
  isApplied: boolean;
  canApplyAnytime: boolean;
  isolatedTradePartners: string[]; // Negara yang tidak bisa berdagang dengan target
}

export function useEmbargoEkonomi() {
  const [state, setState] = useState<EmbargoEkonomiState>({
    isActive: false,
    duration: '1 Bulan',
    targetCountry: null,
    isApplied: false,
    canApplyAnytime: true,
    isolatedTradePartners: [],
  });

  const activate = useCallback(() => {
    setState(prev => ({
      ...prev,
      isActive: true,
    }));
  }, []);

  const setDuration = useCallback((duration: string) => {
    setState(prev => ({
      ...prev,
      duration,
    }));
  }, []);

  const setTargetCountry = useCallback((country: string | null) => {
    setState(prev => ({
      ...prev,
      targetCountry: country,
    }));
  }, []);

  const setIsolatedTradePartners = useCallback((partners: string[]) => {
    setState(prev => ({
      ...prev,
      isolatedTradePartners: partners,
    }));
  }, []);

  const apply = useCallback(() => {
    setState(prev => ({
      ...prev,
      isApplied: true,
    }));
  }, []);

  const reset = useCallback(() => {
    setState({
      isActive: false,
      duration: '1 Bulan',
      targetCountry: null,
      isApplied: false,
      canApplyAnytime: true,
      isolatedTradePartners: [],
    });
  }, []);

  const validate = useCallback((): boolean => {
    return (
      state.targetCountry !== null &&
      state.duration !== '' &&
      state.canApplyAnytime &&
      state.isolatedTradePartners.length > 0
    );
  }, [state.targetCountry, state.duration, state.canApplyAnytime, state.isolatedTradePartners]);

  return {
    state,
    activate,
    setDuration,
    setTargetCountry,
    setIsolatedTradePartners,
    apply,
    reset,
    validate,
  };
}
