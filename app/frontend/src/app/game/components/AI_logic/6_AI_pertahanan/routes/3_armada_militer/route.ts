import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const possiblePaths = [
      path.resolve(__dirname, "../../../../3_armada_militer/armada_militer.py"),
      path.resolve(__dirname, "../../3_armada_militer/armada_militer.py"),
      path.join(process.cwd(), "src/app/game/components/AI_logic/6_AI_pertahanan/3_armada_militer/armada_militer.py"),
      path.join(process.cwd(), "app/frontend/src/app/game/components/AI_logic/6_AI_pertahanan/3_armada_militer/armada_militer.py"),
    ];

    let scriptPath = "";
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        scriptPath = p;
        break;
      }
    }

    if (!scriptPath) {
      console.error("[AI Armada Militer] Python script not found:", possiblePaths);
      return NextResponse.json({ decision: "SKIP", error: "Script not found" }, { status: 200 });
    }

    return new Promise((resolve) => {
      const child = exec(`python "${scriptPath}"`, { timeout: 15000 }, (error, stdout, stderr) => {
        if (error) {
          console.error(`[AI Armada Militer] Error: ${error.message}`);
          return resolve(NextResponse.json({ decision: "SKIP", error: error.message }, { status: 200 }));
        }

        try {
          const result = JSON.parse(stdout);
          resolve(NextResponse.json(result));
        } catch (e) {
          console.error("[AI Armada Militer] Invalid JSON:", stdout);
          resolve(NextResponse.json({ decision: "SKIP", error: "Invalid JSON", raw: stdout }, { status: 200 }));
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
