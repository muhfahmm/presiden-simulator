import { Moon } from "lucide-react";
import { islamPlus } from "./1_plus/plus";
import { islamMinus } from "./2_minus/minus";

export const islamLogic = {
  name: "Islam",
  icon: Moon,
  effects: {
    plus: islamPlus,
    minus: islamMinus
  }
};
