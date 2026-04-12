import React from "react";
import { Smile, Meh, Frown } from "lucide-react";

interface SatisfactionRowProps {
  value: number;
}

const SatisfactionRow: React.FC<SatisfactionRowProps> = ({ value }) => {
  let colorClass = "text-green-400";
  let Icon = Smile;

  if (value < 40) {
    colorClass = "text-red-400";
    Icon = Frown;
  } else if (value < 60) {
    colorClass = "text-amber-400";
    Icon = Meh;
  }

  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-4 w-4 ${colorClass}`} />
      <span className={`font-bold ${colorClass}`}>{value.toFixed(1)}%</span>
    </div>
  );
};

export default SatisfactionRow;
