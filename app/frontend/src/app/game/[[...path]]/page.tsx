// @ts-nocheck
import GamePageClient from "./GamePageClient";

export function generateStaticParams() {
  return [{ path: [] }];
}

export default function Page() {
  return <GamePageClient />;
}
