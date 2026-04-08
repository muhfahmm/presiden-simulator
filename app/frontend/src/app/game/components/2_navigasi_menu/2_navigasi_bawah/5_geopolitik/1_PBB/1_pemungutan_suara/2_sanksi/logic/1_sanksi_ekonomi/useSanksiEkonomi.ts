import { useState, useCallback } from 'react';

export interface SanksiEkonomiState {
  isActive: boolean;
  duration: string;
  targetCountry: string | null;
  isApplied: boolean;
  canApplyAnytime: boolean;
}

export function useSanksiEkonomi() {
  const [state, setState] = useState<SanksiEkonomiState>({
    isActive: false,
    duration: '1 Bulan',
    targetCountry: null,
    isApplied: false,
    canApplyAnytime: true, // Dapat dilakukan kapan saja
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
    });
  }, []);

  const validate = useCallback((): boolean => {
    return state.targetCountry !== null && state.duration !== '' && state.canApplyAnytime;
  }, [state.targetCountry, state.duration, state.canApplyAnytime]);

  return {
    state,
    activate,
    setDuration,
    setTargetCountry,
    apply,
    reset,
    validate,
  };
}
