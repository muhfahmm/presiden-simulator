import { Users, Shield, Coins, Heart, Handshake, Flag, Crown, Landmark } from "lucide-react";
import { demokrasiPlus } from "./1_demokrasi/1_plus/plus";
import { demokrasiMinus } from "./1_demokrasi/2_minus/minus";
import { komunismePlus } from "./2_komunisme/1_plus/plus";
import { komunismeMinus } from "./2_komunisme/2_minus/minus";
import { kapitalismePlus } from "./3_kapitalisme/1_plus/plus";
import { kapitalismeMinus } from "./3_kapitalisme/2_minus/minus";
import { sosialismePlus } from "./4_sosialisme/1_plus/plus";
import { sosialismeMinus } from "./4_sosialisme/2_minus/minus";
import { liberalismePlus } from "./5_liberalisme/1_plus/plus";
import { liberalismeMinus } from "./5_liberalisme/2_minus/minus";
import { konservatismePlus } from "./6_konservatisme/1_plus/plus";
import { konservatismeMinus } from "./6_konservatisme/2_minus/minus";
import { nasionalismePlus } from "./7_nasionalisme/1_plus/plus";
import { nasionalismeMinus } from "./7_nasionalisme/2_minus/minus";
import { monarkiPlus } from "./8_monarki/1_plus/plus";
import { monarkiMinus } from "./8_monarki/2_minus/minus";

export const allIdeologyLogic = [
  {
    name: "Demokrasi",
    icon: Users,
    effects: {
      plus: demokrasiPlus,
      minus: demokrasiMinus
    }
  },
  {
    name: "Komunisme",
    icon: Shield,
    effects: {
      plus: komunismePlus,
      minus: komunismeMinus
    }
  },
  {
    name: "Kapitalisme",
    icon: Coins,
    effects: {
      plus: kapitalismePlus,
      minus: kapitalismeMinus
    }
  },
  {
    name: "Sosialisme",
    icon: Heart,
    effects: {
      plus: sosialismePlus,
      minus: sosialismeMinus
    }
  },
  {
    name: "Liberalisme",
    icon: Handshake,
    effects: {
      plus: liberalismePlus,
      minus: liberalismeMinus
    }
  },
  {
    name: "Konservatisme",
    icon: Shield,
    effects: {
      plus: konservatismePlus,
      minus: konservatismeMinus
    }
  },
  {
    name: "Nasionalisme",
    icon: Flag,
    effects: {
      plus: nasionalismePlus,
      minus: nasionalismeMinus
    }
  },
  {
    name: "Monarki",
    icon: Crown,
    effects: {
      plus: monarkiPlus,
      minus: monarkiMinus
    }
  }
];
