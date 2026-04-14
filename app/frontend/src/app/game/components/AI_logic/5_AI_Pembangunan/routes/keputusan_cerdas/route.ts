import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ROBUST PATH RESOLUTION: Search in multiple possible project roots
    const possiblePaths = [
      // 1. Direct relative path from this Route Handler (Naik 2 level ke 5_AI_Pembangunan)
      path.resolve(__dirname, "../../../../pusat_keputusan_pembangunan/brain/otak_pembangunan.exe"), // .next structure
      path.resolve(__dirname, "../../pusat_keputusan_pembangunan/brain/otak_pembangunan.exe"), // Source structure
      // 2. Based on Project Root (User workspace c:\fhm\em)
      path.join(process.cwd(), "app/frontend/src/app/game/components/AI_logic/5_AI_Pembangunan/pusat_keputusan_pembangunan/brain/otak_pembangunan.exe"),
      path.join(process.cwd(), "src/app/game/components/AI_logic/5_AI_Pembangunan/pusat_keputusan_pembangunan/brain/otak_pembangunan.exe"),
    ];

    let binaryPath = "";
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        binaryPath = p;
        break;
      }
    }

    if (!binaryPath) {
      console.error("[AI C++] Error: Binary not found in any expected location.", possiblePaths);
      return NextResponse.json({ decision: "SKIP", error: "Binary not found" }, { status: 200 });
    }

    return new Promise((resolve) => {
      console.log(`[AI C++] Executing binary at: ${binaryPath}`);

      const child = exec(`"${binaryPath}"`, { timeout: 10000 }, (error, stdout, stderr) => {
        if (error) {
          console.error(`[AI C++] Execution Error: ${error.message}`);
          return resolve(NextResponse.json({ decision: "SKIP", error: error.message }, { status: 200 }));
        }
        
        try {
          const result = JSON.parse(stdout);
          resolve(NextResponse.json(result));
        } catch (e) {
          console.error("[AI C++] Invalid JSON output:", stdout);
          resolve(NextResponse.json({ decision: "SKIP", error: "Invalid JSON from C++", raw: stdout }, { status: 200 }));
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
