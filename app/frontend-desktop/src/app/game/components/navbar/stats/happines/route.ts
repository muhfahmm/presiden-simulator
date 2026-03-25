import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Path resolusi file python di dalam struktur engine lokal
    const scriptPath = path.join(process.cwd(), 'src/app/game/components/navbar/stats/happines/engine/inflation_engine.py');
    const inputJson = JSON.stringify(data).replace(/"/g, '\\"');
    
    // Spawn python script targeting the core engine
    const { stdout, stderr } = await execAsync(`python "${scriptPath}" "${inputJson}"`);
    
    if (stderr) {
       console.error("Python Stderr:", stderr);
    }
    
    const lines = stdout.trim().split('\n');
    const lastLine = lines[lines.length - 1]; // Assume the exact JSON is print loaded on the last line
    
    const result = JSON.parse(lastLine.trim());
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("API Inflation Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
