import { BahamasRoutes, BahamasWaypoints } from "./bahamas";
import { BelizeRoutes, BelizeWaypoints } from "./belize";
import { ElSalvadorRoutes, ElSalvadorWaypoints } from "./elsalvador";
import { GuatemalaRoutes, GuatemalaWaypoints } from "./guatemala";
import { HaitiRoutes, HaitiWaypoints } from "./haiti";
import { HondurasRoutes, HondurasWaypoints } from "./honduras";
import { JamaicaRoutes, JamaicaWaypoints } from "./jamaika";
import { CostaRicaRoutes, CostaRicaWaypoints } from "./kostarika";
import { NicaraguaRoutes, NicaraguaWaypoints } from "./nikaragua";
import { PanamaRoutes, PanamaWaypoints } from "./panama";
import { DominicanRepublicRoutes, DominicanRepublicWaypoints } from "./republikdominika";
import { amerikaTengahWaypoints, hiddenWaypoints } from "./_steering";

export const amerikaTengahRoutes = {
  "Bahamas": BahamasRoutes,
  "Belize": BelizeRoutes,
  "El Salvador": ElSalvadorRoutes,
  "Guatemala": GuatemalaRoutes,
  "Haiti": HaitiRoutes,
  "Honduras": HondurasRoutes,
  "Jamaica": JamaicaRoutes,
  "Jamaika": JamaicaRoutes,
  "Costa Rica": CostaRicaRoutes,
  "Kosta Rika": CostaRicaRoutes,
  "Nicaragua": NicaraguaRoutes,
  "Nikaragua": NicaraguaRoutes,
  "Panama": PanamaRoutes,
  "Dominican Republic": DominicanRepublicRoutes,
  "Republik Dominika": DominicanRepublicRoutes
};

export const amerikaTengahCoastal = {
  ...BahamasWaypoints,
  ...BelizeWaypoints,
  ...ElSalvadorWaypoints,
  ...GuatemalaWaypoints,
  ...HaitiWaypoints,
  ...HondurasWaypoints,
  ...JamaicaWaypoints,
  ...CostaRicaWaypoints,
  ...NicaraguaWaypoints,
  ...PanamaWaypoints,
  ...DominicanRepublicWaypoints,
  ...amerikaTengahWaypoints
};

export const amerikaTengahHidden = hiddenWaypoints;
