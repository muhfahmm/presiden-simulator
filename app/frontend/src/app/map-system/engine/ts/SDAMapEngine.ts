import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';

export class SDAMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;
  public onSelectSDA: ((data: any) => void) | null = null;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number, tacticalCtx: CanvasRenderingContext2D) {
    super(ctx, width, height, tacticalCtx);
  }

  protected drawBackground(ctx: CanvasRenderingContext2D): void {
    // Ocean Background - Tactical Blue (Standardized)
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(0, 0, this.width, this.height);
  }

  protected drawFeature(feature: GeoJsonFeature, ctx: CanvasRenderingContext2D): void {
    const continent = feature.properties.CONTINENT || 'Unknown';
    const name = (feature.properties.NAME || '').toLowerCase();
    const nameLong = (feature.properties.NAME_LONG || '').toLowerCase();
    const nameId = (feature.properties.NAME_ID || '').toLowerCase();

    const isPlayer = this.playerCountryName && (
      name === this.playerCountryName.toLowerCase() ||
      nameLong === this.playerCountryName.toLowerCase() ||
      nameId === this.playerCountryName.toLowerCase()
    );

    const isTarget = this.targetCountryName && (
      name === this.targetCountryName.toLowerCase() ||
      nameLong === this.targetCountryName.toLowerCase() ||
      nameId === this.targetCountryName.toLowerCase()
    );

    let baseColor = CONTINENT_COLORS[continent] || '#475569';

    let color = isPlayer ? '#10b981' : 
                isTarget ? '#f59e0b' : 
                baseColor;
    
    let borderColor = isPlayer ? '#34d399' : 
                      isTarget ? '#fbbf24' : 
                      'rgba(255, 255, 255, 0.6)';
    
    let lineWidth = (isPlayer || isTarget) ? Math.max(2 / this.scale, 1) : Math.max(0.7 / this.scale, 0.4);

    const path = this.getPathForFeature(feature);
    if (!path) return;

    ctx.fillStyle = color;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = lineWidth;

    ctx.fill(path);
    ctx.stroke(path);
  }

  protected drawOverlays(): void {
    if (!this.countries || this.countries.length === 0) return;
    const ctx = this.tacticalCtx;

    ctx.save();
    for (const center of this.countries) {
      const lat = center.lat !== undefined ? center.lat : center.latitude;
      const lon = center.lon !== undefined ? center.lon : center.longitude;
      if (lat === undefined || lon === undefined) continue;
      const { x, y } = this.projector.project(Number(lon), Number(lat));

      const resources = center.sektor_ekstraksi || {};
      const activeResources = Object.entries(resources).filter(([_, v]) => (v as number) > 0);
      if (activeResources.length === 0) continue;

      // Draw Resource Indicator (Pickaxe icon replacement)
      this.drawResourceIcon(ctx, x, y);
    }
    ctx.restore();
  }

  private drawResourceIcon(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const size = 14 / this.scale;
    const padding = 2 / this.scale;
    
    // 1. Shadow for contrast
    ctx.save();
    ctx.shadowBlur = 10 / this.scale;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    
    // 2. Background Slate/Slate Box
    const grad = ctx.createLinearGradient(x, y - size/2, x, y + size/2);
    grad.addColorStop(0, '#3f3f46'); // zinc-700
    grad.addColorStop(1, '#18181b'); // zinc-900

    ctx.fillStyle = grad;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1 / this.scale;
    
    ctx.beginPath();
    ctx.roundRect(x - size/2 - padding, y - size/2 - padding, size + padding*2, size + padding*2, 4 / this.scale);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // 3. Hammer (Palu) Drawing
    const s = 1.2 / this.scale; // Scale factor for the icon itself

    // Handle (Wood)
    ctx.fillStyle = '#78350f'; // amber-900
    ctx.beginPath();
    ctx.roundRect(x - 1*s, y - 1*s, 2*s, 6*s, 0.5*s);
    ctx.fill();

    // Head (Polished Steel)
    ctx.fillStyle = '#f8fafc'; // slate-50
    ctx.beginPath();
    ctx.roundRect(x - 5*s, y - 5*s, 10*s, 4.5*s, 1*s);
    ctx.fill();
    
    // Head Secondary (Shadow side)
    ctx.fillStyle = '#cbd5e1'; // slate-300
    ctx.beginPath();
    ctx.roundRect(x - 5*s, y - 2*s, 10*s, 1.5*s, 1*s);
    ctx.fill();
  }
}
