"use client"

import React from "react";
import { ThumbsUp } from "lucide-react";

interface UNVotesRowProps {
  un_vote: number | undefined;
}

export default function UNVotesRow({ un_vote }: UNVotesRowProps) {
  return (
    <div className="flex items-center gap-1 text-emerald-400">
      <ThumbsUp size={12} /> 
      <span>{(un_vote || 0).toLocaleString('id-ID')}</span>
    </div>
  );
}
