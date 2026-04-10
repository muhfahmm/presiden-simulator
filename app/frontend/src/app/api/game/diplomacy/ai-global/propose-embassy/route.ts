import { NextRequest } from "next/server";
import { POST as handleProposeEmbassy } from "@/app/game/components/map-system/ai_diplomacy_engine/routes/embassy_route";

/**
 * Proxy Route for Embassy Proposal
 */
export async function POST(req: NextRequest) {
  return handleProposeEmbassy(req);
}
