export interface ExtractionData {
  emas: number;
  uranium: number;
  batu_bara: number;
  minyak_bumi: number;
  gas_alam: number;
  garam: number;
  nikel: number;
  litium: number;
  tembaga: number;
  aluminium: number;
  logam_tanah_jarang: number;
  bijih_besi: number;
}

export const EXTRACTION_DATA: Record<string, ExtractionData> = {
  // Asia
  "indonesia": {
    emas: 140, uranium: 0, batu_bara: 616, minyak_bumi: 612, gas_alam: 59,
    garam: 2, nikel: 1600, litium: 0, tembaga: 920, aluminium: 600,
    logam_tanah_jarang: 1, bijih_besi: 12
  },
  "singapura": {
    emas: 0, uranium: 0, batu_bara: 0, minyak_bumi: 0, gas_alam: 0,
    garam: 0, nikel: 0, litium: 0, tembaga: 0, aluminium: 0,
    logam_tanah_jarang: 0, bijih_besi: 0
  },
  "tiongkok": {
    emas: 380, uranium: 2, batu_bara: 4500, minyak_bumi: 4000, gas_alam: 220,
    garam: 64, nikel: 120, litium: 41, tembaga: 1900, aluminium: 4000,
    logam_tanah_jarang: 170, bijih_besi: 270
  },
  "india": {
    emas: 1, uranium: 1, batu_bara: 1100, minyak_bumi: 600, gas_alam: 33,
    garam: 30, nikel: 0, litium: 0, tembaga: 25, aluminium: 4000,
    logam_tanah_jarang: 3, bijih_besi: 270
  },
  "arab_saudi": {
    emas: 12, uranium: 0, batu_bara: 0, minyak_bumi: 12000, gas_alam: 120,
    garam: 2, nikel: 0, litium: 0, tembaga: 0, aluminium: 900,
    logam_tanah_jarang: 0, bijih_besi: 0
  },
  "uni_emirat_arab": {
    emas: 0, uranium: 0, batu_bara: 0, minyak_bumi: 4000, gas_alam: 60,
    garam: 1, nikel: 0, litium: 0, tembaga: 0, aluminium: 2600,
    logam_tanah_jarang: 0, bijih_besi: 0
  },

  // Eropa
  "rusia": {
    emas: 330, uranium: 3, batu_bara: 450, minyak_bumi: 11000, gas_alam: 630,
    garam: 7, nikel: 210, litium: 0, tembaga: 1000, aluminium: 3700,
    logam_tanah_jarang: 3, bijih_besi: 88
  },
  "monaco": {
    emas: 0, uranium: 0, batu_bara: 0, minyak_bumi: 0, gas_alam: 0,
    garam: 0, nikel: 0, litium: 0, tembaga: 0, aluminium: 0,
    logam_tanah_jarang: 0, bijih_besi: 0
  },

  // Amerika
  "amerika_serikat": {
    emas: 170, uranium: 0, batu_bara: 540, minyak_bumi: 18000, gas_alam: 1000,
    garam: 42, nikel: 18, litium: 1, tembaga: 1000, aluminium: 800,
    logam_tanah_jarang: 43, bijih_besi: 46
  },
  "kanada": {
    emas: 220, uranium: 14, batu_bara: 60, minyak_bumi: 5600, gas_alam: 190,
    garam: 12, nikel: 210, litium: 3, tembaga: 500, aluminium: 3000,
    logam_tanah_jarang: 0, bijih_besi: 70
  },
  "brazil": {
    emas: 95, uranium: 0, batu_bara: 6, minyak_bumi: 3500, gas_alam: 24,
    garam: 7, nikel: 83, litium: 5, tembaga: 1100, aluminium: 1400,
    logam_tanah_jarang: 0, bijih_besi: 440
  },

  // Oseania
  "australia": {
    emas: 320, uranium: 5, batu_bara: 450, minyak_bumi: 400, gas_alam: 150,
    garam: 14, nikel: 110, litium: 88, tembaga: 800, aluminium: 1500,
    logam_tanah_jarang: 18, bijih_besi: 930
  },

  // Afrika
  "afrika_selatan": {
    emas: 110, uranium: 0, batu_bara: 230, minyak_bumi: 0, gas_alam: 0,
    garam: 1, nikel: 40, litium: 0, tembaga: 50, aluminium: 700,
    logam_tanah_jarang: 0, bijih_besi: 70
  },
  "kazakhstan": {
    emas: 70, uranium: 23, batu_bara: 110, minyak_bumi: 1900, gas_alam: 32,
    garam: 1, nikel: 0, litium: 0, tembaga: 400, aluminium: 300,
    logam_tanah_jarang: 0, bijih_besi: 60
  },
  "chile": {
    emas: 35, uranium: 0, batu_bara: 0, minyak_bumi: 0, gas_alam: 0,
    garam: 1, nikel: 0, litium: 49, tembaga: 5000, aluminium: 0,
    logam_tanah_jarang: 0, bijih_besi: 15
  }
};

const DEFAULT_EXTRACTION: ExtractionData = {
  emas: 1, uranium: 0, batu_bara: 5, minyak_bumi: 0, gas_alam: 0,
  garam: 1, nikel: 0, litium: 0, tembaga: 5, aluminium: 0,
  logam_tanah_jarang: 0, bijih_besi: 5
};

export function getExtractionData(countryId: string): ExtractionData {
  return EXTRACTION_DATA[countryId.toLowerCase()] || DEFAULT_EXTRACTION;
}
