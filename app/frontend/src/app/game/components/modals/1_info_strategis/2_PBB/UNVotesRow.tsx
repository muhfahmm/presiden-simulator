"use client"

import React from "react";
import { ThumbsUp } from "lucide-react";

interface UNVotesRowProps {
  un_vote: number | undefined;
}

export default function UNVotesRow({ un_vote }: UNVotesRowProps) {
  const vote = un_vote || 0;
  let colorClass = "text-rose-400";
  if (vote >= 139) colorClass = "text-emerald-400";
  else if (vote >= 70) colorClass = "text-sky-400";

  return (
    <div className={`flex items-center gap-1 ${colorClass}`}>
      <ThumbsUp size={12} /> 
      <span>{vote.toLocaleString('id-ID')}</span>
    </div>
  );
}
