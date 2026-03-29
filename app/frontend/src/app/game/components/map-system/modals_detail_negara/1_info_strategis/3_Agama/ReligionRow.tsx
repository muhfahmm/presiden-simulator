"use client"

import React from "react";
import { BookOpen } from "lucide-react";

interface ReligionRowProps {
  religion: string | undefined;
}

export default function ReligionRow({ religion }: ReligionRowProps) {
  return (
    <div className="flex items-center gap-1">
      <BookOpen size={12} className="text-blue-400" /> 
      <span>{religion || "Netral"}</span>
    </div>
  );
}
