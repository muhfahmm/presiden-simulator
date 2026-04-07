import { Landmark } from "lucide-react";
import { konghucuPlus } from "./1_plus/plus";
import { konghucuMinus } from "./2_minus/minus";

export const konghucuLogic = {
  name: "Konghucu",
  icon: Landmark,
  effects: {
    plus: konghucuPlus,
    minus: konghucuMinus
  }
};
