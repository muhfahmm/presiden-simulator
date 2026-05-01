"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingLayer from "@/components/LoadingLayer";
import MainMenuLayer from "@/components/MainMenuLayer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("app_loaded")) {
      setIsLoading(false);
    }
  }, []);
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
