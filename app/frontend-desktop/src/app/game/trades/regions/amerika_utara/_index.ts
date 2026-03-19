import { UsaRoutes, UsaWaypoints } from "./usa";
import { CanadaRoutes, CanadaWaypoints } from "./kanada";
import { MexicoRoutes, MexicoWaypoints } from "./meksiko";
import { CubaRoutes, CubaWaypoints } from "./kuba";
import { GreenlandRoutes, GreenlandWaypoints } from "./greenland";
import { amerikaUtaraWaypoints, hiddenWaypoints } from "./_steering";

export const amerikaUtaraRoutes = {
  "United States": UsaRoutes,
  "Amerika Serikat": UsaRoutes,
  "Canada": CanadaRoutes,
  "Kanada": CanadaRoutes,
  "Mexico": MexicoRoutes,
  "Meksiko": MexicoRoutes,
  "Cuba": CubaRoutes,
  "Kuba": CubaRoutes,
  "Greenland": GreenlandRoutes,
  "Greenlandia": GreenlandRoutes
};

export const amerikaUtaraCoastal = {
  ...UsaWaypoints,
  ...CanadaWaypoints,
  ...MexicoWaypoints,
  ...CubaWaypoints,
  ...GreenlandWaypoints,
  ...amerikaUtaraWaypoints
};

export const amerikaUtaraHidden = hiddenWaypoints;
