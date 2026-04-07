import { Globe } from "lucide-react";
import { ateismePlus } from "./1_plus/plus";
import { ateismeMinus } from "./2_minus/minus";

export const ateismeLogic = {
  name: "Ateisme",
  icon: Globe,
  effects: {
    plus: ateismePlus,
    minus: ateismeMinus
  }
};
