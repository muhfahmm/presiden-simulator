import { saint_vincent_dan_grenadineAgreements } from "@/app/database/data/database_mitra_perdagangan/na/177_saint_vincent_dan_grenadine";

export const saint_vincent_dan_grenadineEmbassyConfig = (playerCountry: string) => {
  const hasTrade = saint_vincent_dan_grenadineAgreements.some(a => a.mitra === playerCountry && a.status === "Aktif");
  return {
  level: hasTrade ? 1 : 0, // 1: Konsulat, 2: Kedubes Utama, 3: Hub Regional
  staffSlots: [
    { id: 1, type: "Atase Militer", active: false },
    { id: 2, type: "Atase Ekonomi", active: false },
    { id: 3, type: "Atase Budaya", active: false }
  ],
  facilities: [
    { name: "Sistem Komunikasi", level: 1 },
    { name: "Ruang Intelijen", level: 0 },
    { name: "Sektor Ekonomi", level: 0 }
  ],
  maintenanceCost: hasTrade ? 50 : 0,
  relationshipBonus: 0.1
};
};
