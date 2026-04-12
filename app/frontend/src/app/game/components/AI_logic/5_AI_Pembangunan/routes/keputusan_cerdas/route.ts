import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const scriptPath = path.join(
      process.cwd(),
      "src/app/game/components/AI_logic/5_AI_Pembangunan/pusat_keputusan_pembangunan/brain/otak_pembangunan.py"
    );

    return new Promise((resolve) => {
      const pyProcess = exec(`python "${scriptPath}"`, { timeout: 10000 }, (error, stdout, stderr) => {
        if (error) {
          console.error(`[Otak Pembangunan] Error: ${error.message}`);
          return resolve(NextResponse.json({ decision: "SKIP", error: error.message }, { status: 200 }));
        }
        try {
          const result = JSON.parse(stdout);
          resolve(NextResponse.json(result));
        } catch (e) {
          console.error("[Otak Pembangunan] Invalid JSON:", stdout);
          resolve(NextResponse.json({ decision: "SKIP", error: "Invalid JSON from Python", raw: stdout }, { status: 200 }));
        }
      });

      if (pyProcess.stdin) {
        pyProcess.stdin.write(JSON.stringify(body));
        pyProcess.stdin.end();
      }
    });
  } catch (err: any) {
    return NextResponse.json({ decision: "SKIP", error: err.message }, { status: 200 });
  }
}
