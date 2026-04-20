import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

/**
 * API Route: Propose Embassy Logic
 * Menjalankan script Python kedutaan_besar.py
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { matrix, userCountry, proposedCountry } = body;

    if (!matrix || !proposedCountry) {
      return NextResponse.json({ error: "Missing required data" }, { status: 400 });
    }

    const brainPath = path.join(process.cwd(), "src", "app", "game", "components", "map-system", "ai_diplomacy_engine", "brain", "npc_to_user");
    const scriptPath = path.join(brainPath, "4_kedutaan_besar.py");

    const runScript = (scriptPath: string, inputData: any): Promise<any> => {
      return new Promise((resolve) => {
        const child = spawn("python", [scriptPath]);
        let stdoutData = "";
        child.stdin.write(JSON.stringify(inputData));
        child.stdin.end();
        child.stdout.on("data", (data) => { stdoutData += data.toString(); });
        child.on("close", (code) => {
          if (code !== 0) return resolve({ matrix: inputData.matrix, events: [] });
          try { 
            const trimmed = stdoutData.trim();
            if(!trimmed) return resolve({ matrix: inputData.matrix, events: [] });
            resolve(JSON.parse(trimmed)); 
          } catch { resolve({ matrix: inputData.matrix, events: [] }); }
        });
      });
    };

    const result = await runScript(scriptPath, { matrix, userCountry, proposedCountry });
    
    return NextResponse.json({
      matrix: result.matrix,
      events: result.events
    });
  } catch (error) {
    console.error("Embassy Logic Error:", error);
    return NextResponse.json({ error: "Embassy processing failure" }, { status: 500 });
  }
}
