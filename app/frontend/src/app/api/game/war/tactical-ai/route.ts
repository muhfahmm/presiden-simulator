import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";

/**
 * Tactical AI Bridge (Next.js Route)
 * =================================
 * Menerima BattlefieldState dari TSX.
 * Menjalankan war_engine.py (AI Strategis).
 * Mengembalikan instruksi pergerakan untuk unit musuh.
 */

export async function POST(req: NextRequest) {
  try {
    const battlefield = await req.json();

    // Resolving paths to AI engine components
    const engineDir = path.join(
      process.cwd(),
      "src/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/modals/war_system/engine"
    );
    
    // Check if python script exists
    const pyScript = path.join(engineDir, "war_engine.py");
    if (!fs.existsSync(pyScript)) {
      return NextResponse.json({ error: "AI Engine (Python) not found", path: pyScript }, { status: 500 });
    }

    // Spawn Python process
    const pythonResult = await new Promise<string>((resolve, reject) => {
      const py = spawn("python", [pyScript]);
      
      let output = "";
      let error = "";

      py.stdout.on("data", (data) => {
        output += data.toString();
      });

      py.stderr.on("data", (data) => {
        error += data.toString();
      });

      py.on("close", (code) => {
        if (code !== 0) {
          reject(new Error(`Python process exited with code ${code}: ${error}`));
        } else {
          resolve(output);
        }
      });

      // Send battlefield data to stdin
      py.stdin.write(JSON.stringify(battlefield));
      py.stdin.end();
    });

    const aiInstructions = JSON.parse(pythonResult);
    return NextResponse.json(aiInstructions);

  } catch (error: any) {
    console.error("[TACTICAL-AI API ERROR]:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to execute Tactical AI",
      status: "error"
    }, { status: 500 });
  }
}
