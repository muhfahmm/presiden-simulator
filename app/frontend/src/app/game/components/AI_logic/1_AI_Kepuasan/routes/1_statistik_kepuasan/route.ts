import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

/**
 * API Route: AI Kepuasan Analysis Bridge
 * Endpoint: POST /api/game/ai/kepuasan/statistik
 * Menjalankan otak AI Python untuk menganalisis statistik kepuasan.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Path ke skrip Python
    const brainPath = path.join(
      process.cwd(), "src", "app", "game", "components",
      "AI_logic", "1_AI_Kepuasan", "1_statistik_kepuasan", "pusat_logika_python", "brain"
    );
    // Switch to the dynamic engine script
    const scriptPath = path.join(brainPath, "happiness_engine.py");

    const result = await new Promise<any>((resolve) => {
      const child = spawn("python", [scriptPath]);
      let stdoutData = "";
      let stderrData = "";

      // Kirim data ke Python melalui stdin
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
          console.error("[AI Kepuasan] Python stderr:", stderrData);
          return resolve({
            status: "error",
            thought: "Gagal memproses data di otak Python.",
            recommendations: []
          });
        }

        try {
          resolve(JSON.parse(stdoutData.trim()));
        } catch {
          console.error("[AI Kepuasan] Failed to parse Python output:", stdoutData);
          resolve({
            status: "error",
            thought: "Kesalahan format output dari otak Python.",
            recommendations: []
          });
        }
      });

      // Timeout 10 detik
      setTimeout(() => {
        child.kill();
        resolve({ status: "timeout", thought: "Proses otak AI terlalu lama." });
      }, 10000);
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("[AI Kepuasan API Error]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
