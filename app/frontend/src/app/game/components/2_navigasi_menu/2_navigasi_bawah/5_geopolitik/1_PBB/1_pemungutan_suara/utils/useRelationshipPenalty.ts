import { useCallback } from 'react';
import { gameStorage } from '@/app/game/gamestorage';
import {
  applyRelationshipPenalty,
  removeRelationshipPenalty,
  applyRelationshipPenaltyToMultiple,
  getRelationshipStatus,
  getRelationshipColor,
  type RelationshipPenaltyEffect
} from './relationshipPenalty';

export interface UseRelationshipPenaltyState {
  applyPenalty: (targetCountry: string, penaltyType: 'sanction' | 'embargo') => RelationshipPenaltyEffect;
  removePenalty: (targetCountry: string, penaltyType: 'sanction' | 'embargo') => RelationshipPenaltyEffect;
  applyPenaltyToMultiple: (targetCountries: string[], penaltyType: 'sanction' | 'embargo') => RelationshipPenaltyEffect[];
  getStatus: (score: number) => string;
  getColor: (score: number) => string;
}

/**
 * Hook untuk mengelola relationship penalty
 */
export function useRelationshipPenalty(): UseRelationshipPenaltyState {
  const applyPenalty = useCallback((targetCountry: string, penaltyType: 'sanction' | 'embargo') => {
    const gameState = gameStorage.getGameState();
    const result = applyRelationshipPenalty(gameState, targetCountry, penaltyType);
    gameStorage.saveGameState(gameState);
    return result;
  }, []);

  const removePenalty = useCallback((targetCountry: string, penaltyType: 'sanction' | 'embargo') => {
    const gameState = gameStorage.getGameState();
    const result = removeRelationshipPenalty(gameState, targetCountry, penaltyType);
    gameStorage.saveGameState(gameState);
    return result;
  }, []);

  const applyPenaltyToMultiple = useCallback((targetCountries: string[], penaltyType: 'sanction' | 'embargo') => {
    const gameState = gameStorage.getGameState();
    const results = applyRelationshipPenaltyToMultiple(gameState, targetCountries, penaltyType);
    gameStorage.saveGameState(gameState);
    return results;
  }, []);

  return {
    applyPenalty,
    removePenalty,
    applyPenaltyToMultiple,
    getStatus: getRelationshipStatus,
    getColor: getRelationshipColor
  };
}
