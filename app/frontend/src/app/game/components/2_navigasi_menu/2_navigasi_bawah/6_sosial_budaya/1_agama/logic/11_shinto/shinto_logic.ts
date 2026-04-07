import { Landmark } from "lucide-react";
import { shintoPlus } from "./1_plus/plus";
import { shintoMinus } from "./2_minus/minus";

export const shintoLogic = {
  name: "Shinto",
  icon: Landmark,
  effects: {
    plus: shintoPlus,
    minus: shintoMinus
  }
};
