export { useEmbargo } from './useEmbargo';
export type { EmbargoState } from './useEmbargo';
export { calculateEmbargoEffect, applyEmbargoEffect } from './embargoEffects';
export type { EmbargoEffect } from './embargoEffects';

// Embargo Ekonomi (Total Trade)
export {
  useEmbargoEkonomi,
} from './1_embargo_ekonomi/useEmbargoEkonomi';
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
} from './1_embargo_ekonomi/embargoEkonomiEffects';
export type { EmbargoEkonomiState } from './1_embargo_ekonomi/useEmbargoEkonomi';
export type { EmbargoEkonomiEffect, TradePartnerStatus } from './1_embargo_ekonomi/embargoEkonomiEffects';

// Embargo Teknologi (Technology Transfer)
export {
  useEmbargoTeknologi,
} from './2_embargo_teknologi/useEmbargoTeknologi';
export {
  calculateEmbargoTeknologiEffect,
  applyEmbargoTeknologiEffect,
  checkEmbargoTeknologiActive,
  removeEmbargoTeknologiEffect,
  getEmbargoTeknologiDuration,
  getEmbargoTeknologiRemainingDays,
  embargoTeknologiEffect,
} from './2_embargo_teknologi/embargoTeknologiEffects';
export type { EmbargoTeknologiState } from './2_embargo_teknologi/useEmbargoTeknologi';
export type { EmbargoTeknologiEffect } from './2_embargo_teknologi/embargoTeknologiEffects';

// Embargo Sumber Daya (Resource Embargo)
export {
  useEmbargoSumberDaya,
} from './3_embargo_sumber_daya/useEmbargoSumberDaya';
export {
  calculateEmbargoSumberDayaEffect,
  applyEmbargoSumberDayaEffect,
  checkEmbargoSumberDayaActive,
  removeEmbargoSumberDayaEffect,
  getEmbargoSumberDayaDuration,
  getEmbargoSumberDayaRemainingDays,
  embargoSumberDayaEffect,
} from './3_embargo_sumber_daya/embargoSumberDayaEffects';
export type { EmbargoSumberDayaState } from './3_embargo_sumber_daya/useEmbargoSumberDaya';
export type { EmbargoSumberDayaEffect } from './3_embargo_sumber_daya/embargoSumberDayaEffects';

// Embargo Senjata (Arms Embargo)
export {
  useEmbargoSenjata,
} from './4_embargo_senjata/useEmbargoSenjata';
export {
  calculateEmbargoSenjataEffect,
  applyEmbargoSenjataEffect,
  checkEmbargoSenjataActive,
  removeEmbargoSenjataEffect,
  getEmbargoSenjataDuration,
  getEmbargoSenjataRemainingDays,
  embargoSenjataEffect,
} from './4_embargo_senjata/embargoSenjataEffects';
export type { EmbargoSenjataState } from './4_embargo_senjata/useEmbargoSenjata';
export type { EmbargoSenjataEffect } from './4_embargo_senjata/embargoSenjataEffects';
