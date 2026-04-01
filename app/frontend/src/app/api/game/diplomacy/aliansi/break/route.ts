import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { target_country } = body;

    if (!target_country) {
      return NextResponse.json({ error: "target_country is required" }, { status: 400 });
    }

    const scriptPath = path.join(
      process.cwd(),
      "src", "app", "game", "components", "map-system", "modals_detail_negara", "2_diplomasi_hubungan", "3_aliansi_pertahanan", "logic", "pemutusan_aliansi_pertahanan.py"
    );

    return new Promise((resolve) => {
      execFile("python", [scriptPath, target_country], (error, stdout, stderr) => {
        if (error) {
          console.error("Exec error (Break Alliance):", error);
          return resolve(NextResponse.json({ error: error.message }, { status: 500 }));
        }
        
        try {
          const result = JSON.parse(stdout.trim());
          resolve(NextResponse.json(result));
        } catch (err) {
          console.error("Parse error (Break Alliance):", err);
          resolve(NextResponse.json({ error: "Invalid output from python script" }, { status: 500 }));
        }
      });
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
