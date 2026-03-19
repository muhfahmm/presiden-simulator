import { YunaniRoutes, YunaniWaypoints } from "./yunani";
import { ItaliaRoutes, ItaliaWaypoints } from "./italia";
import { SpanyolRoutes, SpanyolWaypoints } from "./spanyol";
import { PortugalRoutes, PortugalWaypoints } from "./portugal";
import { PrancisRoutes, PrancisWaypoints } from "./prancis";
import { InggrisRoutes, InggrisWaypoints } from "./inggris";
import { BelandaRoutes, BelandaWaypoints } from "./belanda";
import { JermanRoutes, JermanWaypoints } from "./jerman";
import { DenmarkRoutes, DenmarkWaypoints } from "./denmark";
import { NorwegiaRoutes, NorwegiaWaypoints } from "./norwegia";
import { SwediaRoutes, SwediaWaypoints } from "./swedia";
import { TurkiRoutes, TurkiWaypoints } from "./turki";
import { KroasiaRoutes, KroasiaWaypoints } from "./kroasia";
import { MontenegroRoutes, MontenegroWaypoints } from "./montenegro";
import { AlbaniaRoutes, AlbaniaWaypoints } from "./albania";
import { SloveniaRoutes, SloveniaWaypoints } from "./slovenia";
import { BosniaRoutes, BosniaWaypoints } from "./bosnia";
import { BulgariaRoutes, BulgariaWaypoints } from "./bulgaria";
import { RumaniaRoutes, RumaniaWaypoints } from "./rumania";
import { UkrainaRoutes, UkrainaWaypoints } from "./ukraina";
import { PolandRoutes, PolandWaypoints } from "./poland";
import { EstoniaRoutes, EstoniaWaypoints } from "./estonia";
import { LatviaRoutes, LatviaWaypoints } from "./latvia";
import { LithuaniaRoutes, LithuaniaWaypoints } from "./lithuania";
import { FinlandiaRoutes, FinlandiaWaypoints } from "./finlandia";
import { BelgiaRoutes, BelgiaWaypoints } from "./belgia";
import { IrlandiaRoutes, IrlandiaWaypoints } from "./irlandia";
import { IslandiaRoutes, IslandiaWaypoints } from "./islandia";
import { steeringWaypoints, hiddenWaypoints as eropaHidden } from "./_steering";

export const eropaRoutes = {
  "Yunani": YunaniRoutes,
  "Italia": ItaliaRoutes,
  "Spanyol": SpanyolRoutes,
  "Portugal": PortugalRoutes,
  "Prancis": PrancisRoutes,
  "Inggris": InggrisRoutes,
  "Belanda": BelandaRoutes,
  "Jerman": JermanRoutes,
  "Denmark": DenmarkRoutes,
  "Norwegia": NorwegiaRoutes,
  "Swedia": SwediaRoutes,
  "Turki": TurkiRoutes,
  "Kroasia": KroasiaRoutes,
  "Montenegro": MontenegroRoutes,
  "Albania": AlbaniaRoutes,
  "Slovenia": SloveniaRoutes,
  "Bosnia": BosniaRoutes,
  "Bulgaria": BulgariaRoutes,
  "Rumania": RumaniaRoutes,
  "Ukraina": UkrainaRoutes,
  "Poland": PolandRoutes,
  "Estonia": EstoniaRoutes,
  "Latvia": LatviaRoutes,
  "Lithuania": LithuaniaRoutes,
  "Finlandia": FinlandiaRoutes,
  "Belgia": BelgiaRoutes,
  "Irlandia": IrlandiaRoutes,
  "Islandia": IslandiaRoutes
};

export const eropaWaypoints = {
  ...YunaniWaypoints,
  ...ItaliaWaypoints,
  ...SpanyolWaypoints,
  ...PortugalWaypoints,
  ...PrancisWaypoints,
  ...InggrisWaypoints,
  ...BelandaWaypoints,
  ...JermanWaypoints,
  ...DenmarkWaypoints,
  ...NorwegiaWaypoints,
  ...SwediaWaypoints,
  ...TurkiWaypoints,
  ...KroasiaWaypoints,
  ...MontenegroWaypoints,
  ...AlbaniaWaypoints,
  ...SloveniaWaypoints,
  ...BosniaWaypoints,
  ...BulgariaWaypoints,
  ...RumaniaWaypoints,
  ...UkrainaWaypoints,
  ...PolandWaypoints,
  ...EstoniaWaypoints,
  ...LatviaWaypoints,
  ...LithuaniaWaypoints,
  ...FinlandiaWaypoints,
  ...BelgiaWaypoints,
  ...IrlandiaWaypoints,
  ...IslandiaWaypoints,
  ...steeringWaypoints
};

export const hiddenWaypoints = [...eropaHidden];
