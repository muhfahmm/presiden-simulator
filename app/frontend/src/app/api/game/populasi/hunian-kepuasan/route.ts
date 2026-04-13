import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { population, budget, happiness, housing_data, events_list } = body;

    const scriptPath = path.join(
      process.cwd(),
      "src/app/game/components/AI_logic/2_AI_Populasi/2_kebutuhan_hunian/brain/analisis_hunian_kepuasan.py"
    );

    return new Promise((resolve) => {
      const pyProcess = exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
          console.error(`[AI Housing API] Exec error: ${error.message}`);
          return resolve(NextResponse.json({ error: error.message }, { status: 500 }));
        }

        try {
          const result = JSON.parse(stdout);
          resolve(NextResponse.json(result));
        } catch (e) {
          resolve(NextResponse.json({ error: "Invalid JSON from Python", raw: stdout }, { status: 500 }));
        }
      });

      if (pyProcess.stdin) {
        pyProcess.stdin.write(JSON.stringify(body));
        pyProcess.stdin.end();
      }
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
