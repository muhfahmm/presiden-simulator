import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

/**
 * API Route: AI Global Trade Engine
 * Endpoint: POST /api/game/trade/ai-global
 * Menjalankan otak AI perdagangan Python (trade_engine.py).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Debug log untuk membantu investigasi
    console.log("[AI-Global API] Received keys:", Object.keys(body));

    const {
      matrix,
      userCountry,
      countriesData,
      userStock,
      dayTimestamp,
      existingOffers,
      existingRequests,
      existingContracts,
      scriptPath: requestedScriptPath
    } = body;

    if (!matrix) {
      console.error("[AI-Global API] Error: Matrix is missing from request body");
      return NextResponse.json({ error: "Missing relation matrix in request body" }, { status: 400 });
    }

    let scriptPath: string;
    
    if (requestedScriptPath) {
      // Jika ada scriptPath khusus (misal untuk Hutang AI)
      scriptPath = path.normalize(path.join(process.cwd(), "src", requestedScriptPath));
    } else {
      // Default ke Perdagangan AI
      const brainPath = path.join(
        process.cwd(), "src", "app", "game", "components",
        "2_navigasi_menu", "2_navigasi_bawah", "2_ekonomi",
        "1-perdagangan", "sistem_perdagangan_AI", "brain"
      );
      scriptPath = path.join(brainPath, "trade_engine.py");
    }

    const result = await new Promise<any>((resolve) => {
      console.log(`[AI-Global API] Executing Python: ${scriptPath}`);
      const child = spawn("python", [scriptPath]);
      let stdoutData = "";
      let stderrData = "";

      const inputData = {
        matrix,
        userCountry: userCountry || "Indonesia",
        countriesData: countriesData || {},
        userStock: userStock || {},
        dayTimestamp: dayTimestamp || 0,
        existingOffers: existingOffers || [],
        existingRequests: existingRequests || [],
        existingContracts: existingContracts || []
      };

      child.stdin.write(JSON.stringify(inputData));
      child.stdin.end();

      child.stdout.on("data", (data) => {
        stdoutData += data.toString();
      });

      child.stderr.on("data", (data) => {
        stderrData += data.toString();
      });

      child.on("close", (code) => {
        if (code !== 0) {
          console.error("Trade Engine stderr:", stderrData);
          return resolve({
            events: [],
            offers: [],
            requests: [],
            contracts: [],
            npcTransactions: [],
            priceImpacts: [],
            expiredOffers: [],
            expiredRequests: []
          });
        }

        try {
          const trimmed = stdoutData.trim();
          if (!trimmed) {
            return resolve({
              events: [],
              offers: [],
              requests: [],
              contracts: [],
              npcTransactions: [],
              priceImpacts: [],
              expiredOffers: [],
              expiredRequests: []
            });
          }
          resolve(JSON.parse(trimmed));
        } catch {
          console.error("Failed to parse trade engine output:", stdoutData.substring(0, 200));
          resolve({
            events: [],
            offers: [],
            requests: [],
            contracts: [],
            npcTransactions: [],
            priceImpacts: [],
            expiredOffers: [],
            expiredRequests: []
          });
        }
      });

      // Timeout setelah 10 detik
      setTimeout(() => {
        child.kill();
        resolve({
          events: [],
          offers: [],
          requests: [],
          contracts: [],
          npcTransactions: [],
          priceImpacts: [],
          expiredOffers: [],
          expiredRequests: []
        });
      }, 10000);
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Trade API Route Error:", error);
    return NextResponse.json({ error: "Trade engine failure" }, { status: 500 });
  }
}
