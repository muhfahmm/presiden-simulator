import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { relation_score } = body;

    if (relation_score === undefined) {
      return NextResponse.json({ error: "relation_score is required" }, { status: 400 });
    }

    const scriptPath = path.join(
      process.cwd(),
      "src", "app", "game", "components", "map-system", "modals_detail_negara", "2_diplomasi_hubungan", "4_perjanjian_dagang", "logic", "dagang_logic.py"
    );

    return new Promise((resolve) => {
      execFile("python", [scriptPath, relation_score.toString()], (error, stdout, stderr) => {
        if (error) {
          console.error("Exec error (Trade):", error);
          return resolve(NextResponse.json({ error: error.message }, { status: 500 }));
        }
        
        try {
          const result = JSON.parse(stdout.trim());
          resolve(NextResponse.json(result));
        } catch (err) {
          console.error("Parse error (Trade):", err);
          resolve(NextResponse.json({ error: "Invalid output from python script" }, { status: 500 }));
        }
      });
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
