"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingLayer from "@/components/LoadingLayer";
import MainMenuLayer from "@/components/MainMenuLayer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("app_loaded");
    }
    return true;
  });
  const router = useRouter();

  const handleComplete = () => {
    sessionStorage.setItem("app_loaded", "true");
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingLayer onComplete={handleComplete} />;
  }

  return (
    <MainMenuLayer 
      onStart={() => router.push("/pilih_negara")} 
      onLoad={() => router.push("/load-game")}
    />
  );
}
