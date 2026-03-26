import { happinessStorage } from "./happinessStorage";

export interface HappinessBreakdown {
  global: number;
}

/**
 * Returns the current population happiness index
 */
export const calculatePopulationHappiness = (): HappinessBreakdown => {
  const storedValue = happinessStorage.getStats().value;
  return {
    global: storedValue,
  };
};
