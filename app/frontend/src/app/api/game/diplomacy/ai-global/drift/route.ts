import { NextRequest } from "next/server";
import { POST as handleGlobalAiDrift } from "@/app/game/components/map-system/ai_diplomacy_engine/routes/route";

/**
 * Proxy Route for Global AI Diplomacy
 * Merujuk ke logika pusat di ai_diplomacy_engine/routes/route.ts
 */
export async function POST(req: NextRequest) {
  return handleGlobalAiDrift(req);
}
