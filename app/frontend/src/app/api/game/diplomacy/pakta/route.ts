import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

/**
 * Route Handlers untuk Pakta Non-Agresi (Relocated to standard API)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { relation_score, duration_years, starting_date } = body;

    if (relation_score === undefined || duration_years === undefined) {
      return NextResponse.json({ error: "Parameter tidak lengkap (relation_score, duration_years)" }, { status: 400 });
    }

    // Tentukan path ke script Python (tetap di folder logic komponen)
    const scriptPath = path.join(
      process.cwd(),
      "src", "app", "game", "components", "map-system", "modals_detail_negara", "2_diplomasi_hubungan", "2_pakta_non_agresi", "logic", "pakta_logic.py"
    );

    console.log("Executing Pact Logic Python:", scriptPath);

    return new Promise<NextResponse>((resolve) => {
      // Build args
      const args = [scriptPath, String(relation_score), String(duration_years)];
      if (starting_date) args.push(String(starting_date));

      execFile("python", args, (error, stdout, stderr) => {
        if (error) {
          console.error("Exec error (Non-Agresi):", error);
          console.error("Stderr (Non-Agresi):", stderr);
          return resolve(NextResponse.json({ 
            error: `Gagal memproses logika pakta di backend: ${error.message}`,
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
          console.error("Parse error (Non-Agresi):", err);
          console.log("Raw Python Output:", stdout);
          resolve(NextResponse.json({ error: "Format output logika backend tidak valid", raw: stdout }, { status: 500 }));
        }
      });
    });
  } catch (error: any) {
    console.error("API Route error (Non-Agresi):", error);
    return NextResponse.json({ error: "Internal Server Error", message: error.message }, { status: 500 });
  }
}
