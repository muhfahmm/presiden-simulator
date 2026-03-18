export interface Perdagangan {
  ekspor: string[];
  impor: string[];
  status: "Surplus" | "Defisit";
}

export const perdagangan: Perdagangan = {
  ekspor: ["Emas", "Nikel", "Minyak", "Mobil", "Elektronik"],
  impor: ["Gandum", "Alutsista"],
  status: "Surplus"
};
