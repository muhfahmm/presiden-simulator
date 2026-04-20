import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

/**
 * Route Handlers untuk Aliansi Pertahanan
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { relation_score, duration_years, starting_date } = body;

    if (relation_score === undefined || duration_years === undefined) {
      return NextResponse.json({ error: "Parameter tidak lengkap (relation_score, duration_years)" }, { status: 400 });
    }

    // Tentukan path ke script Python
    const scriptPath = path.join(
      process.cwd(),
      "src", "app", "game", "components", "map-system", "modals_detail_negara", "2_diplomasi_hubungan", "3_aliansi_pertahanan", "logic", "aliansi_logic.py"
    );

    return new Promise<NextResponse>((resolve) => {
      const args = [scriptPath, String(relation_score), String(duration_years)];
      if (starting_date) args.push(String(starting_date));

      execFile("python", args, (error, stdout, stderr) => {
        if (error) {
          console.error("Exec error (Aliansi):", error);
          return resolve(NextResponse.json({ 
            error: `Gagal memproses aliansi: ${error.message}`,
            details: stderr 
          }, { status: 500 }));
        }
        
        try {
          const result = JSON.parse(stdout.trim());
          if (result.error) {
             return resolve(NextResponse.json({ error: result.error }, { status: 400 }));
          }
          resolve(NextResponse.json(result));
        } catch (err) {
          console.error("Parse error (Aliansi):", err);
          resolve(NextResponse.json({ error: "Format output aliansi tidak valid" }, { status: 500 }));
        }
      });
    });
  } catch (error: any) {
    console.error("API Route error (Aliansi):", error);
    return NextResponse.json({ error: "Internal Server Error", message: error.message }, { status: 500 });
  }
}
