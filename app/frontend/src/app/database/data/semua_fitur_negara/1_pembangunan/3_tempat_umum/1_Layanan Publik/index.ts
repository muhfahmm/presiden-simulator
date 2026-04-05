export * from "./1_infrastruktur";
export * from "./2_pendidikan";
export * from "./3_kesehatan";
export * from "./4_hukum";
export * from "./5_olahraga";
export * from "./6_komersial";
export * from "./7_hiburan";

export interface SektorSosial {
  pendidikan?: import("./2_pendidikan").PendidikanData;
  kesehatan?: import("./3_kesehatan").KesehatanData;
  olahraga?: import("./5_olahraga").OlahragaData;
  hukum?: import("./4_hukum").HukumData;
  komersial?: import("./6_komersial").SektorKomersial;
  hiburan?: import("./7_hiburan").SektorHiburan;
}

export const sosialRate = {
  ...require("./2_pendidikan").pendidikanRate,
  ...require("./3_kesehatan").kesehatanRate,
  ...require("./4_hukum").hukumRate,
  ...require("./5_olahraga").olahragaRate,
  ...require("./6_komersial").komersialRate,
  ...require("./7_hiburan").hiburanRate
};

export const infrastrukturRate = require("./1_infrastruktur").infrastrukturRate;
