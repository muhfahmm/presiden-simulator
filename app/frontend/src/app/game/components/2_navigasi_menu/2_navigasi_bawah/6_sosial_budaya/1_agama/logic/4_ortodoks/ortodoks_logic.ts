import { Book } from "lucide-react";
import { ortodoksPlus } from "./1_plus/plus";
import { ortodoksMinus } from "./2_minus/minus";

export const ortodoksLogic = {
  name: "Kristen Ortodoks",
  icon: Book,
  effects: {
    plus: ortodoksPlus,
    minus: ortodoksMinus
  }
};
