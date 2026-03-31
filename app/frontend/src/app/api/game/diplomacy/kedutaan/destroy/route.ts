import { NextRequest, NextResponse } from 'next/server';
import { spawnSync } from 'child_process';
import path from 'path';

/**
 * API untuk menghitung penalti diplomatik akibat penghancuran kedubes
 */
export async function POST(req: NextRequest) {
  try {
    const { current_score } = await req.json();

    // Path to Python script
    const scriptPath = path.join(
      process.cwd(), 
      'src', 'app', 'game', 'components', 'map-system', 'modals_detail_negara', 
      '2_diplomasi_hubungan', '1_kedutaan', 'logic', 'efek_penghancuran_kedubes.py'
    );

    // Call Python script: python efek_penghancuran_kedubes.py <current_score>
    const pythonProcess = spawnSync('python', [
      scriptPath,
      current_score.toString() || '50'
    ]);

    if (pythonProcess.error) {
      console.error('Python execution error:', pythonProcess.error);
      return NextResponse.json({ error: 'Failed to execute penalty logic' }, { status: 500 });
    }

    const output = pythonProcess.stdout.toString();
    const result = JSON.parse(output);

    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
