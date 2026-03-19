import { UsaRoutes, UsaWaypoints } from "./usa";
import { KanadaRoutes, KanadaWaypoints } from "./kanada";
import { MeksikoRoutes, MeksikoWaypoints } from "./meksiko";
import { KubaRoutes, KubaWaypoints } from "./kuba";
import { GreenlandRoutes, GreenlandWaypoints } from "./greenland";
import { amerikaUtaraWaypoints, hiddenWaypoints } from "./_steering";

export const amerikaUtaraRoutes = {
  "United States": UsaRoutes,
  "Amerika Serikat": UsaRoutes,
  "Canada": KanadaRoutes,
  "Kanada": KanadaRoutes,
  "Mexico": MeksikoRoutes,
  "Meksiko": MeksikoRoutes,
  "Cuba": KubaRoutes,
  "Kuba": KubaRoutes,
  "Greenland": GreenlandRoutes,
  "Greenlandia": GreenlandRoutes
};

export const amerikaUtaraCoastal = {
  ...UsaWaypoints,
  ...KanadaWaypoints,
  ...MeksikoWaypoints,
  ...KubaWaypoints,
  ...GreenlandWaypoints,
  ...amerikaUtaraWaypoints
};

export const amerikaUtaraHidden = hiddenWaypoints;
