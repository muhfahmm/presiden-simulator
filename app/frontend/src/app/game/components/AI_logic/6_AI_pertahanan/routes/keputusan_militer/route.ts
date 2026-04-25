import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const scriptPath = path.join(process.cwd(), "src/app/game/components/AI_logic/6_AI_pertahanan/brain/otak_pertahanan.py");
    const scriptDir = path.dirname(scriptPath);

    if (!fs.existsSync(scriptPath)) {
      return NextResponse.json({ decision: "SKIP", error: "Python script not found" }, { status: 200 });
    }

    return new Promise<NextResponse>((resolve) => {
      const child = exec(`python "${scriptPath}"`, { 
        timeout: 10000,
        cwd: scriptDir 
      }, (error, stdout, stderr) => {
        if (error) {
          console.error(`[AI Military] Execution Error: ${error.message}`);
          return resolve(NextResponse.json({ decision: "SKIP", error: error.message }, { status: 200 }));
        }
        
        try {
          const result = JSON.parse(stdout);
          resolve(NextResponse.json(result));
        } catch (e) {
          console.error("[AI Military] Invalid JSON output:", stdout);
          resolve(NextResponse.json({ decision: "SKIP", error: "Invalid JSON from Python", raw: stdout }, { status: 200 }));
        }
      });

      if (child.stdin) {
        child.stdin.write(JSON.stringify(body) + "\n");
        child.stdin.end();
      }
    });
  } catch (err: any) {
    return NextResponse.json({ decision: "SKIP", error: err.message }, { status: 200 });
  }
}
