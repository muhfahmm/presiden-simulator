import { NextRequest, NextResponse } from 'next/server';
import { spawnSync } from 'child_process';
import path from 'path';

/**
 * API Route to process the embassy destruction penalty.
 * Executes the destruction_logic.py algorithm.
 */
export async function POST(req: NextRequest) {
  try {
    const { 
      current_relation, 
      user_ideology, target_ideology, 
      user_religion, target_religion 
    } = await req.json();

    // Path to the Python script
    const scriptPath = path.join(
      process.cwd(), 
      'src', 'app', 'game', 'components', 'map-system', 'modals_detail_negara', 
      '2_diplomasi_hubungan', '1_kedutaan', 'logic', 'destruction_logic.py'
    );

    // Call Python script with arguments
    const pythonProcess = spawnSync('python', [
      scriptPath,
      String(current_relation || 50),
      user_ideology || 'Netral',
      target_ideology || 'Netral',
      user_religion || 'Sekuler',
      target_religion || 'Sekuler'
    ]);

    // Error handling for process execution
    if (pythonProcess.error) {
      console.error('Python execution error:', pythonProcess.error);
      return NextResponse.json({ error: 'Failed to execute destruction logic' }, { status: 500 });
    }

    const output = pythonProcess.stdout.toString();
    
    // Validate output is valid JSON
    try {
        const result = JSON.parse(output);
        return NextResponse.json(result);
    } catch (parseError) {
        console.error('Failed to parse Python output:', output);
        return NextResponse.json({ error: 'Invalid logic output' }, { status: 500 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
