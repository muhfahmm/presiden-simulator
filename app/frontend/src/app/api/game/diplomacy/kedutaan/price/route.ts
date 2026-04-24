import { NextRequest, NextResponse } from 'next/server';
import { spawnSync } from 'child_process';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { 
      user_ideology, target_ideology, 
      user_religion, target_religion, 
      user_continent, target_continent 
    } = await req.json();

    // Path to Python script
    const scriptPath = path.join(
      process.cwd(), 
      'src', 'app', 'game', 'components', '3_hubungan', 'ai_brain', 'kedutaan', 'price_logic.py'
    );

    // Call Python script
    const pythonProcess = spawnSync('python', [
      scriptPath,
      user_ideology || 'Netral',
      target_ideology || 'Netral',
      user_religion || 'Sekuler',
      target_religion || 'Sekuler',
      user_continent || 'Global',
      target_continent || 'Global'
    ]);

    if (pythonProcess.error) {
      console.error('Python execution error:', pythonProcess.error);
      return NextResponse.json({ error: 'Failed to execute price logic' }, { status: 500 });
    }

    const output = pythonProcess.stdout.toString();
    const result = JSON.parse(output);

    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
