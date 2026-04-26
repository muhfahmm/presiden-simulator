import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Path to the Python script
    const scriptPath = path.join(process.cwd(), "src/app/game/components/AI_logic/7_AI_Perdagangan_Internasional/python/smart_construction.py");
    const scriptDir = path.dirname(scriptPath);

    if (!fs.existsSync(scriptPath)) {
      return NextResponse.json({ error: "Python Smart Construction script not found at " + scriptPath }, { status: 404 });
    }

    return new Promise<NextResponse>((resolve) => {
      // Execute the Python script
      const child = exec(`python "${scriptPath}"`, { 
        timeout: 20000,
        cwd: scriptDir,
        maxBuffer: 1024 * 1024 * 5 // 5MB buffer
      }, (error, stdout, stderr) => {
        if (error) {
          console.error(`[AI Construction] Execution Error: ${error.message}`);
          return resolve(NextResponse.json({ error: error.message, stderr }, { status: 500 }));
        }
        
        try {
          const result = JSON.parse(stdout);
          resolve(NextResponse.json(result));
        } catch (e) {
          console.error("[AI Construction] Invalid JSON output:", stdout);
          resolve(NextResponse.json({ error: "Invalid JSON from Python brain", raw: stdout }, { status: 500 }));
        }
      });

      if (child.stdin) {
        child.stdin.write(JSON.stringify(body) + "\n");
        child.stdin.end();
      }
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
