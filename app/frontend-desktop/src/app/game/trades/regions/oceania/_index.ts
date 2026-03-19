import { AustraliaRoutes, AustraliaWaypoints } from "./australia";
import { PapuaNuginiRoutes, PapuaNuginiWaypoints } from "./papuanugini";

export const oceaniaRoutes = {
  "Australia": AustraliaRoutes,
  "Papua Nugini": PapuaNuginiRoutes
};

export const oceaniaWaypoints = {
  ...AustraliaWaypoints,
  ...PapuaNuginiWaypoints
};

export const hiddenWaypoints = [];
