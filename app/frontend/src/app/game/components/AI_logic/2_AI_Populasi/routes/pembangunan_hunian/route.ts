import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

/**
 * API Route for AI Autonomous Construction Decisions
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Path to the Python script
    const scriptPath = path.join(
      process.cwd(),
      "src/app/game/components/AI_logic/2_AI_Populasi/2_kebutuhan_hunian/brain/ai_pembangunan_hunian.py"
    );

    const result = await new Promise((resolve, reject) => {
      const pythonProcess = spawn("python", [scriptPath]);

      let output = "";
      let errorOutput = "";

      pythonProcess.stdin.write(JSON.stringify(body));
      pythonProcess.stdin.end();

      pythonProcess.stdout.on("data", (data) => {
        output += data.toString();
      });

      pythonProcess.stderr.on("data", (data) => {
        errorOutput += data.toString();
      });

      pythonProcess.on("close", (code) => {
        if (code !== 0) {
          reject(new Error(`Python process exited with code ${code}: ${errorOutput}`));
          return;
        }
        try {
          resolve(JSON.parse(output));
        } catch (e) {
          reject(new Error(`Failed to parse Python output: ${output}`));
        }
      });
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("[API AI Pembangunan] Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
