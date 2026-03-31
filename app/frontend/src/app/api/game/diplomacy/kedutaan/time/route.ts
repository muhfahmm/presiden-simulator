import { NextRequest, NextResponse } from 'next/server';
import { spawnSync } from 'child_process';
import path from 'path';

/**
 * API untuk menghitung waktu konstruksi berbasis wilayah (Sub-Region)
 * Mendukung parameter: user_region, target_region, user_continent, target_continent
 */
export async function POST(req: NextRequest) {
  try {
    const { 
      user_region, target_region, user_continent, target_continent 
    } = await req.json();

    // Path to Python script
    const scriptPath = path.join(
      process.cwd(), 
      'src', 'app', 'game', 'components', 'map-system', 'modals_detail_negara', 
      '2_diplomasi_hubungan', '1_kedutaan', 'logic', 'time_logic.py'
    );

    // Call Python script: python time_logic.py <user_region> <target_region> <user_continent> <target_continent>
    const pythonProcess = spawnSync('python', [
      scriptPath,
      user_region || 'Global',
      target_region || 'Global',
      user_continent || 'Global',
      target_continent || 'Global'
    ]);

    if (pythonProcess.error) {
      console.error('Python execution error:', pythonProcess.error);
      return NextResponse.json({ error: 'Failed to execute time logic' }, { status: 500 });
    }

    const output = pythonProcess.stdout.toString();
    const result = JSON.parse(output);

    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
