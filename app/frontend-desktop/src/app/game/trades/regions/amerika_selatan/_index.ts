import { amerikaSelatanWaypoints, hiddenWaypoints } from "./_steering";
import { KolombiaRoutes, KolombiaWaypoints } from "./kolombia";
import { VenezuelaRoutes, VenezuelaWaypoints } from "./venezuela";
import { GuyanaRoutes, GuyanaWaypoints } from "./guyana";
import { SurinameRoutes, SurinameWaypoints } from "./suriname";
import { GuyanaPerancisRoutes, GuyanaPerancisWaypoints } from "./guyana_perancis";
import { BrasilRoutes, BrasilWaypoints } from "./brasil";
import { UruguayRoutes, UruguayWaypoints } from "./uruguay";
import { ArgentinaRoutes, ArgentinaWaypoints } from "./argentina";
import { ChileRoutes, ChileWaypoints } from "./chile";
import { PeruRoutes, PeruWaypoints } from "./peru";
import { EkuadorRoutes, EkuadorWaypoints } from "./ekuador";
import { BoliviaRoutes, BoliviaWaypoints } from "./bolivia";

export const amerikaSelatanRoutes = {
  "Colombia": KolombiaRoutes,
  "Kolombia": KolombiaRoutes,
  "Venezuela": VenezuelaRoutes,
  "Guyana": GuyanaRoutes,
  "Suriname": SurinameRoutes,
  "French Guiana": GuyanaPerancisRoutes,
  "Guyana Perancis": GuyanaPerancisRoutes,
  "Brazil": BrasilRoutes,
  "Brasil": BrasilRoutes,
  "Uruguay": UruguayRoutes,
  "Argentina": ArgentinaRoutes,
  "Chile": ChileRoutes,
  "Peru": PeruRoutes,
  "Ecuador": EkuadorRoutes,
  "Ekuador": EkuadorRoutes,
  "Bolivia": BoliviaRoutes,
};

export const amerikaSelatanCoastal = {
  ...KolombiaWaypoints,
  ...VenezuelaWaypoints,
  ...GuyanaWaypoints,
  ...SurinameWaypoints,
  ...GuyanaPerancisWaypoints,
  ...BrasilWaypoints,
  ...UruguayWaypoints,
  ...ArgentinaWaypoints,
  ...ChileWaypoints,
  ...PeruWaypoints,
  ...EkuadorWaypoints,
  ...BoliviaWaypoints,
  ...amerikaSelatanWaypoints
};

export const amerikaSelatanHidden = hiddenWaypoints;
