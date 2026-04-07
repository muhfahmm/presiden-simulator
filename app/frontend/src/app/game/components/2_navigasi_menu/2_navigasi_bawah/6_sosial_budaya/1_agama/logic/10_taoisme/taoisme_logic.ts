import { Compass } from "lucide-react";
import { taoismePlus } from "./1_plus/plus";
import { taoismeMinus } from "./2_minus/minus";

export const taoismeLogic = {
  name: "Taoisme",
  icon: Compass,
  effects: {
    plus: taoismePlus,
    minus: taoismeMinus
  }
};
