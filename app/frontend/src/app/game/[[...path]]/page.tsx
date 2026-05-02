// @ts-nocheck
import GamePageClient from "./GamePageClient";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { path: [] },
    { path: ["pertahanan"] },
    { path: ["pertahanan", "komando-pertahanan"] },
    { path: ["pertahanan", "intelijen"] },
    { path: ["ekonomi"] },
    { path: ["ekonomi", "pajak"] },
    { path: ["ekonomi", "perdagangan"] },
    { path: ["pembangunan"] },
    { path: ["geopolitik"] }
  ];
}

export default function Page() {
  return <GamePageClient />;
}
