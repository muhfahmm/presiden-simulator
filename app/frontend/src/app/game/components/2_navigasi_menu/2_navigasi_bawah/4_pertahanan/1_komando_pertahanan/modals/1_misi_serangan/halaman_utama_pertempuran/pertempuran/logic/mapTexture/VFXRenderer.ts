/**
 * VFXRenderer.ts
 * [TACTICAL VISUAL EFFECTS RENDERER]
 * 
 * High-fidelity rendering of combat feedback (Tracers, Muzzle Flashes, Sparks, Explosions).
 */

export interface VFXSpark {
    vx: number;
    vy: number;
    size: number;
    life: number;
}

export interface VFXObject {
    id: string;
    type: 'TRACER' | 'MUZZLE_FLASH' | 'EXPLOSION';
    x?: number;
    y?: number;
    startX?: number;
    startY?: number;
    endX?: number;
    endY?: number;
    rotation?: number;
    sparks?: VFXSpark[];
    timestamp: number;
    duration?: number;
    unitType?: string;
}

export class VFXRenderer {
    /**
     * Main Entry Point for drawing all active combat VFX.
     */
    static drawVFXList(ctx: CanvasRenderingContext2D, vfxList: VFXObject[], now: number) {
        vfxList.forEach(vfx => {
            const age = now - vfx.timestamp;
            const duration = vfx.duration || 300;
            if (age > duration) return;

            const progress = age / duration; // 0 to 1
            const alpha = 1 - progress;

            ctx.save();
            if (vfx.type === 'TRACER') {
                this.drawTracer(ctx, vfx, alpha);
            } else if (vfx.type === 'MUZZLE_FLASH') {
                this.drawMuzzleFlash(ctx, vfx, progress, alpha);
            } else if (vfx.type === 'EXPLOSION') {
                this.drawExplosion(ctx, vfx, progress, alpha);
            }
            ctx.restore();
        });
    }

    private static drawTracer(ctx: CanvasRenderingContext2D, vfx: VFXObject, alpha: number) {
        if (vfx.startX === undefined || vfx.startY === undefined || vfx.endX === undefined || vfx.endY === undefined) return;
        
        ctx.beginPath();
        ctx.moveTo(vfx.startX, vfx.startY);
        ctx.lineTo(vfx.endX, vfx.endY);
        
        // High-intensity tactical glow
        ctx.strokeStyle = `rgba(252, 211, 77, ${alpha * 0.8})`; // Amber
        ctx.lineWidth = 2;
        ctx.shadowBlur = 8 * alpha;
        ctx.shadowColor = "rgba(252, 211, 77, 1)";
        ctx.stroke();
    }

    private static drawMuzzleFlash(ctx: CanvasRenderingContext2D, vfx: VFXObject, progress: number, alpha: number) {
        if (vfx.x === undefined || vfx.y === undefined) return;
        
        ctx.translate(vfx.x, vfx.y);
        
        // 1. Draw the Flash Core (Muzzle)
        const flashSize = 15 * (1 - progress * 0.5);
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, flashSize);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.3, `rgba(251, 191, 36, ${alpha * 0.8})`); // Amber
        gradient.addColorStop(1, "rgba(251, 191, 36, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, flashSize, 0, Math.PI * 2);
        ctx.fill();

        // 2. Draw Sparks (Percikan Api)
        if (vfx.sparks) {
            vfx.sparks.forEach(spark => {
                const sAge = progress; // Simplified for this data structure
                const sx = spark.vx * sAge * 30; // Move over time
                const sy = spark.vy * sAge * 30;
                const sAlpha = Math.max(0, spark.life - progress);
                
                if (sAlpha > 0) {
                    ctx.fillStyle = `rgba(254, 240, 138, ${sAlpha})`; // Light sparks
                    ctx.beginPath();
                    ctx.arc(sx, sy, spark.size * sAlpha, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Small trail
                    ctx.strokeStyle = `rgba(251, 191, 36, ${sAlpha * 0.5})`;
                    ctx.lineWidth = spark.size * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(sx - spark.vx * 2, sy - spark.vy * 2);
                    ctx.lineTo(sx, sy);
                    ctx.stroke();
                }
            });
        }
    }

    private static drawExplosion(ctx: CanvasRenderingContext2D, vfx: VFXObject, progress: number, alpha: number) {
        if (vfx.x === undefined || vfx.y === undefined) return;
        
        ctx.translate(vfx.x, vfx.y);
        
        // 1. Draw Shockwave (Expanding Ring)
        const ringRadius = 50 + progress * 200;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
        ctx.lineWidth = 5 * alpha;
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        ctx.stroke();

        // 2. Draw Main Fireball (Expanding Core)
        const coreSize = 30 + progress * 100;
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, coreSize);
        grad.addColorStop(0, `rgba(255, 100, 0, ${alpha * 0.8})`);
        grad.addColorStop(0.5, `rgba(255, 50, 0, ${alpha * 0.4})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, coreSize, 0, Math.PI * 2);
        ctx.fill();

        // 3. Draw Debris Sparks (Serpihan Api)
        if (vfx.sparks) {
            vfx.sparks.forEach(spark => {
                const sAge = progress;
                const sx = spark.vx * sAge * 50; 
                const sy = spark.vy * sAge * 50;
                const sAlpha = Math.max(0, spark.life - progress);
                
                if (sAlpha > 0) {
                    ctx.fillStyle = `rgba(255, 150, 50, ${sAlpha})`;
                    ctx.shadowBlur = 10 * sAlpha;
                    ctx.shadowColor = "orange";
                    ctx.beginPath();
                    ctx.arc(sx, sy, spark.size * 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
            ctx.shadowBlur = 0;
        }
    }
}
