export { useEmbargoEkonomi } from './useEmbargoEkonomi';
export type { EmbargoEkonomiState } from './useEmbargoEkonomi';

export {
  calculateEmbargoEkonomiEffect,
  applyEmbargoEkonomiEffect,
  checkEmbargoEkonomiActive,
  removeEmbargoEkonomiEffect,
  getEmbargoEkonomiDuration,
  getEmbargoEkonomiRemainingDays,
  isCountryIsolated,
  getTradePartnerStatus,
  getTradePartnerColor,
  embargoEkonomiEffect,
} from './embargoEkonomiEffects';
export type { EmbargoEkonomiEffect, TradePartnerStatus } from './embargoEkonomiEffects';
