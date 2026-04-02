import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.attacker || !data.defender) {
      return NextResponse.json({ error: "Missing attacker or defender" }, { status: 400 });
    }

    const scriptPath = path.join(
      process.cwd(),
      "src", "app", "game", "components", "2_navigasi_menu", "2_navigasi_bawah",
      "4_pertahanan", "1_komando_pertahanan", "modals", "war_system", "engine", "war_engine.py"
    );

    return new Promise((resolve) => {
      const child = spawn("python", [scriptPath]);
      let stdoutData = "";
      let stderrData = "";

      // Send war data to Python via stdin
      child.stdin.write(JSON.stringify(data));
      child.stdin.end();

      child.stdout.on("data", (chunk) => {
        stdoutData += chunk.toString();
      });

      child.stderr.on("data", (chunk) => {
        stderrData += chunk.toString();
      });

      child.on("close", (code) => {
        if (code !== 0) {
          console.error("War engine exited with code:", code);
          console.error("Stderr:", stderrData);
          return resolve(
            NextResponse.json({ error: "War engine gagal dijalankan" }, { status: 500 })
          );
        }

        try {
          const result = JSON.parse(stdoutData.trim());
          if (result.error) {
            return resolve(NextResponse.json({ error: result.error }, { status: 400 }));
          }
          resolve(NextResponse.json({ result }));
        } catch (err) {
          console.error("Parse error:", err);
          console.error("Stdout was:", stdoutData);
          resolve(
            NextResponse.json({ error: "Gagal membaca output war engine" }, { status: 500 })
          );
        }
      });

      child.on("error", (err) => {
        console.error("Spawn error:", err);
        resolve(
          NextResponse.json({ error: "Gagal menjalankan Python war engine" }, { status: 500 })
        );
      });
    });
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
