import { Book } from "lucide-react";
import { protestanPlus } from "./1_plus/plus";
import { protestanMinus } from "./2_minus/minus";

export const protestanLogic = {
  name: "Protestan",
  icon: Book,
  effects: {
    plus: protestanPlus,
    minus: protestanMinus
  }
};
