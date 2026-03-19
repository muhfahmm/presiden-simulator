import { BahrainRoutes, BahrainWaypoints } from "./bahrain";
import { BangladeshRoutes, BangladeshWaypoints } from "./bangladesh";
import { BruneiRoutes, BruneiWaypoints } from "./brunei";
import { ChinaRoutes, ChinaWaypoints } from "./china";
import { FilipinaRoutes, FilipinaWaypoints } from "./filipina";
import { IndiaRoutes, IndiaWaypoints } from "./india";
import { IndonesiaRoutes, IndonesiaWaypoints } from "./indonesia";
import { IranRoutes, IranWaypoints } from "./iran";
import { JapanRoutes, JapanWaypoints } from "./japan";
import { KambojaRoutes, KambojaWaypoints } from "./kamboja";
import { KuwaitRoutes, KuwaitWaypoints } from "./kuwait";
import { MalaysiaRoutes, MalaysiaWaypoints } from "./malaysia";
import { MyanmarRoutes, MyanmarWaypoints } from "./myanmar";
import { NorthKoreaRoutes, NorthKoreaWaypoints } from "./northkorea";
import { OmanRoutes, OmanWaypoints } from "./oman";
import { PakistanRoutes, PakistanWaypoints } from "./pakistan";
import { QatarRoutes, QatarWaypoints } from "./qatar";
import { SaudiArabiaRoutes, SaudiArabiaWaypoints } from "./saudiarabia";
import { SingaporeRoutes, SingaporeWaypoints } from "./singapore";
import { SouthKoreaRoutes, SouthKoreaWaypoints } from "./southkorea";
import { SriLankaRoutes, SriLankaWaypoints } from "./srilanka";
import { steeringWaypoints, hiddenWaypoints } from "./steering";
import { TaiwanRoutes, TaiwanWaypoints } from "./taiwan";
import { ThailandRoutes, ThailandWaypoints } from "./thailand";
import { UnitedArabEmiratesRoutes, UnitedArabEmiratesWaypoints } from "./unitedarabemirates";
import { VietnamRoutes, VietnamWaypoints } from "./vietnam";
import { YemenRoutes, YemenWaypoints } from "./yemen";

export const asiaRoutes = {
  "Bahrain": BahrainRoutes,
  "Bangladesh": BangladeshRoutes,
  "Brunei": BruneiRoutes,
  "China": ChinaRoutes,
  "Filipina": FilipinaRoutes,
  "India": IndiaRoutes,
  "Indonesia": IndonesiaRoutes,
  "Iran": IranRoutes,
  "Japan": JapanRoutes,
  "Kamboja": KambojaRoutes,
  "Kuwait": KuwaitRoutes,
  "Malaysia": MalaysiaRoutes,
  "Myanmar": MyanmarRoutes,
  "North Korea": NorthKoreaRoutes,
  "Oman": OmanRoutes,
  "Pakistan": PakistanRoutes,
  "Qatar": QatarRoutes,
  "Saudi Arabia": SaudiArabiaRoutes,
  "Singapore": SingaporeRoutes,
  "South Korea": SouthKoreaRoutes,
  "Sri Lanka": SriLankaRoutes,
  "Taiwan": TaiwanRoutes,
  "Thailand": ThailandRoutes,
  "United Arab Emirates": UnitedArabEmiratesRoutes,
  "Vietnam": VietnamRoutes,
  "Yemen": YemenRoutes
};

export const asiaWaypoints = {
  ...BahrainWaypoints,
  ...BangladeshWaypoints,
  ...BruneiWaypoints,
  ...ChinaWaypoints,
  ...FilipinaWaypoints,
  ...IndiaWaypoints,
  ...IndonesiaWaypoints,
  ...IranWaypoints,
  ...JapanWaypoints,
  ...KambojaWaypoints,
  ...KuwaitWaypoints,
  ...MalaysiaWaypoints,
  ...MyanmarWaypoints,
  ...NorthKoreaWaypoints,
  ...OmanWaypoints,
  ...PakistanWaypoints,
  ...QatarWaypoints,
  ...SaudiArabiaWaypoints,
  ...SingaporeWaypoints,
  ...SouthKoreaWaypoints,
  ...SriLankaWaypoints,
  ...TaiwanWaypoints,
  ...ThailandWaypoints,
  ...UnitedArabEmiratesWaypoints,
  ...VietnamWaypoints,
  ...YemenWaypoints,
  ...steeringWaypoints
};

export { hiddenWaypoints };
