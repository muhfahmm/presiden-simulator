import { Wind } from "lucide-react";
import { buddhaPlus } from "./1_plus/plus";
import { buddhaMinus } from "./2_minus/minus";

export const buddhaLogic = {
  name: "Buddha",
  icon: Wind,
  effects: {
    plus: buddhaPlus,
    minus: buddhaMinus
  }
};
