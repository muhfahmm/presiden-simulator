import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
  try {
    const { countryName, buildings } = await request.json();

    const scriptPath = path.join(
      process.cwd(),
      'src/app/game/components/AI_logic/5_AI_Pembangunan/sistem_tindakan_respon/pusat_produksi.py'
    );

    return new Promise<NextResponse>((resolve) => {
      const pythonProcess = exec(
        `python "${scriptPath}"`,
        (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing python: ${error}`);
            resolve(
              NextResponse.json(
                { status: 'error', message: stderr || error.message },
                { status: 500 }
              )
            );
            return;
          }

          try {
            const results = JSON.parse(stdout);
            resolve(NextResponse.json(results));
          } catch (parseError) {
            resolve(
              NextResponse.json(
                { status: 'error', message: 'Failed to parse python output' },
                { status: 500 }
              )
            );
          }
        }
      );

      // Send input to python
      pythonProcess.stdin?.write(JSON.stringify({ buildings }));
      pythonProcess.stdin?.end();
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: 500 }
    );
  }
}
