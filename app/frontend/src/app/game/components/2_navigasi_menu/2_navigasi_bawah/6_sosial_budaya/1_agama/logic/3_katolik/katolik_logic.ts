import { Star } from "lucide-react";
import { katolikPlus } from "./1_plus/plus";
import { katolikMinus } from "./2_minus/minus";

export const katolikLogic = {
  name: "Katolik",
  icon: Star,
  effects: {
    plus: katolikPlus,
    minus: katolikMinus
  }
};
