import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Path to your python script
    const pythonScriptPath = path.join(
      process.cwd(), 
      'src', 'app', 'game', 'components', '2_navigasi_menu', '2_navigasi_bawah', '7_kementrian', '2_database_undang_undang', 'ai_bot', 'recommendation_engine.py'
    );

    return new Promise((resolve) => {
      // Spawn python process
      // Use 'python' or 'python3' depending on the environment. For Windows it's usually 'python'.
      const pythonProcess = spawn('python', [pythonScriptPath, JSON.stringify(body)]);

      let dataString = '';
      let errorString = '';

      pythonProcess.stdout.on('data', (data) => {
        dataString += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        errorString += data.toString();
      });

      pythonProcess.on('close', (code) => {
        if (code !== 0) {
          console.error(`Python script exited with code ${code}: ${errorString}`);
          resolve(NextResponse.json({ error: 'AI engine failed', details: errorString }, { status: 500 }));
        } else {
          try {
            const result = JSON.parse(dataString);
            resolve(NextResponse.json(result));
          } catch (e) {
            console.error('Failed to parse Python output:', dataString);
            resolve(NextResponse.json({ error: 'Invalid AI response' }, { status: 500 }));
          }
        }
      });
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
