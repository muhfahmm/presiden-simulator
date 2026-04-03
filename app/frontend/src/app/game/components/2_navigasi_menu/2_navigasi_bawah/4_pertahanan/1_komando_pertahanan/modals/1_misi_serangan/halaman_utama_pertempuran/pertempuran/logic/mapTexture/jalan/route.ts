/**
 * Route.ts - Penghubung antara TypeScript dengan implementasi Python, C++, dan Rust
 * untuk pembuatan jalan berwarna hitam dengan garis putus-putus putih
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export interface RoadConfig {
    width: number;
    height: number;
    roadWidth: number;
    dashLength: number;
    dashGap: number;
    roadColor: string;
    dashColor: string;
}

export interface RoadResult {
    imageData: Uint8Array;
    width: number;
    height: number;
}

export type ImplementationType = 'python' | 'cpp' | 'rust';

export class RoadTextureGenerator {
    private basePath: string;

    constructor() {
        this.basePath = __dirname;
    }

    /**
     * Generate road texture menggunakan implementasi yang dipilih
     */
    async generate(config: RoadConfig, implementation: ImplementationType = 'python'): Promise<RoadResult> {
        switch (implementation) {
            case 'python':
                return this.generateWithPython(config);
            case 'cpp':
                return this.generateWithCpp(config);
            case 'rust':
                return this.generateWithRust(config);
            default:
                throw new Error(`Unknown implementation: ${implementation}`);
        }
    }

    /**
     * Generate menggunakan Python
     */
    private async generateWithPython(config: RoadConfig): Promise<RoadResult> {
        const scriptPath = path.join(this.basePath, 'python', 'road_generator.py');
        const configJson = JSON.stringify(config);
        
        try {
            const { stdout } = await execAsync(`python "${scriptPath}" '${configJson}'`);
            return JSON.parse(stdout);
        } catch (error) {
            throw new Error(`Python execution failed: ${error}`);
        }
    }

    /**
     * Generate menggunakan C++
     */
    private async generateWithCpp(config: RoadConfig): Promise<RoadResult> {
        const execPath = path.join(this.basePath, 'cpp', 'road_generator');
        const configJson = JSON.stringify(config);
        
        try {
            const { stdout } = await execAsync(`"${execPath}" '${configJson}'`);
            return JSON.parse(stdout);
        } catch (error) {
            throw new Error(`C++ execution failed: ${error}`);
        }
    }

    /**
     * Generate menggunakan Rust
     */
    private async generateWithRust(config: RoadConfig): Promise<RoadResult> {
        const execPath = path.join(this.basePath, 'rust', 'target', 'release', 'road_generator');
        const configJson = JSON.stringify(config);
        
        try {
            const { stdout } = await execAsync(`"${execPath}" '${configJson}'`);
            return JSON.parse(stdout);
        } catch (error) {
            throw new Error(`Rust execution failed: ${error}`);
        }
    }

    /**
     * Benchmark semua implementasi
     */
    async benchmark(config: RoadConfig): Promise<Record<ImplementationType, number>> {
        const results: Record<ImplementationType, number> = {
            python: 0,
            cpp: 0,
            rust: 0
        };

        for (const impl of ['python', 'cpp', 'rust'] as ImplementationType[]) {
            const start = performance.now();
            try {
                await this.generate(config, impl);
                results[impl] = performance.now() - start;
            } catch (error) {
                console.error(`Benchmark failed for ${impl}:`, error);
                results[impl] = -1;
            }
        }

        return results;
    }
}

export default RoadTextureGenerator;
