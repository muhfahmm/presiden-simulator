import { useState, useCallback } from 'react';

export interface LaranganPerangState {
  isActive: boolean;
  duration: string;
  targetCountry: string | null;
  isApplied: boolean;
}

export function useLaranganPerang() {
  const [state, setState] = useState<LaranganPerangState>({
    isActive: false,
    duration: '1 Bulan',
    targetCountry: null,
    isApplied: false,
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
    });
  }, []);

  const validate = useCallback((): boolean => {
    return state.targetCountry !== null && state.duration !== '';
  }, [state.targetCountry, state.duration]);

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
