import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { relation_score } = await req.json();

    if (relation_score === undefined) {
      return NextResponse.json({ error: "Missing relation_score" }, { status: 400 });
    }

    const scriptPath = path.join(
      process.cwd(),
      "src", "app", "game", "components", "3_hubungan", "ai_brain", "kedutaan", "check_syarat.py"
    );

    return new Promise<NextResponse>((resolve) => {
      execFile("python", [scriptPath, String(relation_score)], (error, stdout, stderr) => {
        if (error) {
          console.error("Exec error:", error);
          console.error("Stderr:", stderr);
          return resolve(NextResponse.json({ error: "Gagal memproses logika syarat" }, { status: 500 }));
        }
        
        try {
          const result = JSON.parse(stdout.trim());
          if (result.error) {
             return resolve(NextResponse.json({ error: result.error }, { status: 400 }));
          }
          resolve(NextResponse.json(result));
        } catch (err) {
          console.error("Parse error:", err);
          resolve(NextResponse.json({ error: "Gagal membaca output logika syarat" }, { status: 500 }));
        }
      });
    });
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
