import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const brainPath = path.join(
      process.cwd(), "src", "app", "game", "components",
      "AI_logic", "5_AI_Pembangunan", "2_produksi_militer", "brain"
    );
    const scriptPath = path.join(brainPath, "military_brain.py");

    const result = await new Promise<any>((resolve) => {
      const child = spawn("python", [scriptPath]);
      let output = "";
      let errorOutput = "";

      child.stdin.write(JSON.stringify(body));
      child.stdin.end();

      child.stdout.on("data", (data) => output += data.toString());
      child.stderr.on("data", (data) => errorOutput += data.toString());

      child.on("close", (code) => {
        if (code !== 0) resolve({ error: `Python error code ${code}`, details: errorOutput });
        else {
          try { resolve(JSON.parse(output)); }
          catch (e) { resolve({ error: "Json parse error", raw: output }); }
        }
      });
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
