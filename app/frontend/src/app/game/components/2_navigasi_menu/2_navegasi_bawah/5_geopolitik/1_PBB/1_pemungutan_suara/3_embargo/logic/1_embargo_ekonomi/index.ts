export { useEmbargoEkonomi } from './useEmbargoEkonomi';
export type { EmbargoEkonomiState } from './useEmbargoEkonomi';
export {
  calculateEmbargoEkonomiEffect,
  applyEmbargoEkonomiEffect,
  checkEmbargoEkonomiActive,
  getTradePartnerStatus,
  getTradePartnerColor,
  removeEmbargoEkonomiEffect,
  getEmbargoEkonomiDuration,
  getEmbargoEkonomiRemainingDays,
  isCountryIsolated,
} from './embargoEkonomiEffects';
export type { EmbargoEkonomiEffect, TradePartnerStatus } from './embargoEkonomiEffects';
