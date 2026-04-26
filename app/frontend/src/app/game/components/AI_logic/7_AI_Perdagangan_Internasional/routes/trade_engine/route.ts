import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Path to the C++ executable
    const exePath = path.join(process.cwd(), "src/app/game/components/AI_logic/7_AI_Perdagangan_Internasional/cpp/trade_engine.exe");
    const exeDir = path.dirname(exePath);

    if (!fs.existsSync(exePath)) {
      return NextResponse.json({ error: "C++ Trade Engine executable not found at " + exePath }, { status: 404 });
    }

    return new Promise<NextResponse>((resolve) => {
      // Execute the C++ binary
      const child = exec(`"${exePath}"`, { 
        timeout: 15000,
        cwd: exeDir,
        maxBuffer: 1024 * 1024 * 10 // 10MB buffer for large trade results
      }, (error, stdout, stderr) => {
        if (error) {
          console.error(`[AI Trade Engine] Execution Error: ${error.message}`);
          return resolve(NextResponse.json({ error: error.message, stderr }, { status: 500 }));
        }
        
        try {
          const result = JSON.parse(stdout);
          resolve(NextResponse.json(result));
        } catch (e) {
          console.error("[AI Trade Engine] Invalid JSON output:", stdout);
          resolve(NextResponse.json({ error: "Invalid JSON from C++ engine", raw: stdout }, { status: 500 }));
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
