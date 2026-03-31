import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { countries } = await req.json();

    if (!countries || !Array.isArray(countries)) {
      return NextResponse.json({ error: "Missing or invalid countries array" }, { status: 400 });
    }

    const scriptPath = path.join(
      process.cwd(),
      "src", "app", "game", "components", "map-system", "modals_detail_negara",
      "2_diplomasi_hubungan", "1_kedutaan", "logic", "update_hubungan_per_hari.py"
    );

    return new Promise((resolve) => {
      const child = spawn("python", [scriptPath]);
      let stdoutData = "";
      let stderrData = "";

      // Write data to stdin and end stream
      child.stdin.write(JSON.stringify(countries));
      child.stdin.end();

      child.stdout.on("data", (data) => {
        stdoutData += data.toString();
      });

      child.stderr.on("data", (data) => {
        stderrData += data.toString();
      });

      child.on("close", (code) => {
        if (code !== 0) {
          console.error("Python script exited with code:", code);
          console.error("Stderr:", stderrData);
          return resolve(NextResponse.json({ error: "Gagal memproses drift hubungan" }, { status: 500 }));
        }

        try {
          const result = JSON.parse(stdoutData.trim());
          if (result.error) {
            return resolve(NextResponse.json({ error: result.error }, { status: 400 }));
          }
          resolve(NextResponse.json({ results: result }));
        } catch (err) {
          console.error("Parse error:", err);
          console.error("Stdout was:", stdoutData);
          resolve(NextResponse.json({ error: "Gagal membaca output drift" }, { status: 500 }));
        }
      });

      child.on("error", (err) => {
        console.error("Spawn error:", err);
        resolve(NextResponse.json({ error: "Gagal menjalankan skrip Python" }, { status: 500 }));
      });
    });
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
