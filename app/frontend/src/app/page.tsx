"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingLayer from "@/components/LoadingLayer";
import MainMenuLayer from "@/components/MainMenuLayer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  if (isLoading) {
    return <LoadingLayer onComplete={() => setIsLoading(false)} />;
  }

  return (
    <MainMenuLayer 
      onStart={() => router.push("/database")} 
    />
  );
}
