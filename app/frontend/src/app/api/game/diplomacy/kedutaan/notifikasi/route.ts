import { NextRequest, NextResponse } from "next/server";
import { spawnSync } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const { event_type, target_country, extra_info } = await req.json();

        // Path to the python script
        const scriptPath = path.join(
            process.cwd(),
            "src",
            "app",
            "game",
            "components",
            "map-system",
            "modals_detail_negara",
            "2_diplomasi_hubungan",
            "1_kedutaan",
            "logic",
            "notifikasi_kedutaan.py"
        );

        // Execute python script
        const pythonProcess = spawnSync("python", [
            scriptPath,
            event_type,
            target_country,
            extra_info || ""
        ]);

        if (pythonProcess.error) {
            console.error("Python process error:", pythonProcess.error);
            return NextResponse.json({ error: "Gagal menjalankan logika notifikasi" }, { status: 500 });
        }

        const output = pythonProcess.stdout.toString().trim();
        const notificationData = JSON.parse(output);

        return NextResponse.json(notificationData);

    } catch (error) {
        console.error("API Error (Embassy Notification):", error);
        return NextResponse.json({ error: "Terjadi kesalahan sistem" }, { status: 500 });
    }
}
