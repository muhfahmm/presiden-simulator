import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

/**
 * API Route: Global AI Diplomacy Engine
 * Menjalankan berbagai modul otak AI secara berurutan.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { matrix, userCountry } = body;

    if (!matrix) {
      return NextResponse.json({ error: "Missing relation matrix" }, { status: 400 });
    }

    const brainPath = path.join(process.cwd(), "src", "app", "game", "logic", "ai", "ai_diplomacy_engine", "brain");
    const scripts = [
        path.join(brainPath, "global_drift.py"),
        path.join(brainPath, "active_actions", "improve_relations.py"),
        path.join(brainPath, "npc_to_user", "tingkatkan_hubungan.py"), // Ganti nama dari grant_initiatives
        path.join(brainPath, "npc_to_user", "1_pakta_non_agresi.py"),
        path.join(brainPath, "npc_to_user", "2_aliansi_pertahanan.py"),
        path.join(brainPath, "npc_to_user", "3_perjanjian_dagang.py"),
        path.join(brainPath, "npc_to_user", "5_tawaran_kedutaan.py"),
        path.join(brainPath, "npc_to_npc", "1_kedutaan_besar.py")
    ];

    const runScript = (scriptPath: string, inputData: any): Promise<any> => {
      return new Promise<any>((resolve) => {
        const child = spawn("python", [scriptPath]);
        let stdoutData = "";
        child.stdin.write(JSON.stringify(inputData));
        child.stdin.end();
        child.stdout.on("data", (data) => { stdoutData += data.toString(); });
        child.on("close", (code) => {
          const defaultValue = { matrix: inputData.matrix, events: [], budgetGain: 0 };
          if (code !== 0) return resolve(defaultValue);
          try { 
            const trimmed = stdoutData.trim();
            if(!trimmed) return resolve(defaultValue);
            const parsed = JSON.parse(trimmed);
            resolve(parsed && typeof parsed === "object" ? parsed : defaultValue);
          } catch { 
            resolve(defaultValue); 
          }
        });
      });
    };

    let currentMatrix = matrix;
    let allEvents: any[] = [];
    let totalBudgetGain = 0;

    // Jalankan semua script secara berurutan
    for (const script of scripts) {
        const result = await runScript(script, { matrix: currentMatrix, userCountry });
        currentMatrix = result.matrix || currentMatrix;
        if (result.events) allEvents = [...allEvents, ...result.events];
        if (result.budgetGain) totalBudgetGain += result.budgetGain;
    }
    
    return NextResponse.json({
      matrix: currentMatrix,
      events: allEvents,
      budgetGain: totalBudgetGain
    });
  } catch (error) {
    console.error("Critical Brain Error:", error);
    return NextResponse.json({ error: "Brain failure" }, { status: 500 });
  }
}
