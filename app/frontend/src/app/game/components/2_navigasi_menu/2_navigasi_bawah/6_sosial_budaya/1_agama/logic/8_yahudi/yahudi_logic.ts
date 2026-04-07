import { Star } from "lucide-react";
import { yahudiPlus } from "./1_plus/plus";
import { yahudiMinus } from "./2_minus/minus";

export const yahudiLogic = {
  name: "Yahudi",
  icon: Star,
  effects: {
    plus: yahudiPlus,
    minus: yahudiMinus
  }
};
