import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

/**
 * Logika Utama API: Global AI Diplomacy Drift
 * Dipindahkan ke folder engine agar terpusat.
 */
export async function handleGlobalAiDrift(req: NextRequest) {
  try {
    const body = await req.json();
    const { matrix } = body;

    if (!matrix) {
      return NextResponse.json({ error: "Missing relation matrix" }, { status: 400 });
    }

    const scriptPath = path.join(
      process.cwd(),
      "src", "app", "game", "components", "map-system", "ai_diplomacy_engine", "brain", "global_drift.py"
    );

    return new Promise((resolve) => {
      const child = spawn("python", [scriptPath]);
      let stdoutData = "";
      let stderrData = "";

      child.stdin.write(JSON.stringify(body));
      child.stdin.end();

      child.stdout.on("data", (data) => {
        stdoutData += data.toString();
      });

      child.stderr.on("data", (data) => {
        stderrData += data.toString();
      });

      child.on("close", (code) => {
        if (code !== 0) {
          console.error("Python AI-Global script exited with code:", code);
          return resolve(NextResponse.json({ error: "Gagal memproses AI Global drift" }, { status: 500 }));
        }

        try {
          const result = JSON.parse(stdoutData.trim());
          resolve(NextResponse.json(result));
        } catch (err) {
          console.error("Parse error global drift:", err);
          resolve(NextResponse.json({ error: "Gagal membaca output AI Global" }, { status: 500 }));
        }
      });
    });
  } catch (error) {
    console.error("Route error global drift:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
