import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';

export class MainMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;

  protected drawBackground(): void {
    // Ocean Background - Tactical Blue
    this.ctx.fillStyle = '#1e3a8a';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  protected drawFeature(feature: GeoJsonFeature): void {
    const continent = feature.properties.CONTINENT || 'Unknown';
    const name = (feature.properties.NAME || 'Unknown').toLowerCase();
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

    let color = CONTINENT_COLORS[continent] || '#475569';
    let borderColor = 'rgba(255, 255, 255, 0.6)';
    let lineWidth = Math.max(0.7 / this.scale, 0.4);

    if (isPlayer) {
      color = '#10b981'; // Emerald-500
      borderColor = '#34d399';
      lineWidth = Math.max(2 / this.scale, 1);
    } else if (isTarget) {
      color = '#f59e0b'; // Amber-500
      borderColor = '#fbbf24';
      lineWidth = Math.max(2 / this.scale, 1);
    }

    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = borderColor;
    this.ctx.lineWidth = lineWidth;

    const { type, coordinates } = feature.geometry;
    if (type === 'Polygon') this.drawPolygon(coordinates);
    else if (type === 'MultiPolygon') {
      for (const polygon of coordinates) this.drawPolygon(polygon);
    }

    this.ctx.fill();
    this.ctx.stroke();

    // Pulse microstates
    const isTiny = feature.properties.TINY > 0 || feature.properties.LABELRANK > 5;
    if (isTiny && this.scale < 3) this.drawMicrostatePulse(feature);
  }

  public activeInvasions: any[] = [];

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    super(ctx, width, height);
    if (typeof window !== 'undefined') {
      window.addEventListener('SPAWN_INVASION_UNITS', (e: any) => {
        if (e.detail && e.detail.path) {
          this.activeInvasions.push(e.detail.path);
          this.requestRender();
        }
      });
    }
  }

  protected drawOverlays(): void {
    this.drawInvasionPaths();
    this.drawCapitals();
  }

  private drawInvasionPaths(): void {
    if (!this.activeInvasions || this.activeInvasions.length === 0) return;

    this.ctx.save();
    for (const path of this.activeInvasions) {
        if (!path.pathCoordinates || path.pathCoordinates.length === 0) continue;

        this.ctx.beginPath();
        if (path.style && path.style.isDashed) {
            this.ctx.setLineDash(path.style.dashArray.map((d: number) => d / this.scale));
        } else {
            this.ctx.setLineDash([]);
        }

        const strokeColor = path.style ? path.style.color : '#ef4444';
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = path.style ? path.style.lineWidth / this.scale : 3 / this.scale;
        
        // Glow effect
        this.ctx.shadowBlur = 10 / this.scale;
        this.ctx.shadowColor = strokeColor;

        const p0 = this.projector.project(path.pathCoordinates[0].lon, path.pathCoordinates[0].lat);
        this.ctx.moveTo(p0.x, p0.y);

        for (let i = 1; i < path.pathCoordinates.length; i++) {
            const p = this.projector.project(path.pathCoordinates[i].lon, path.pathCoordinates[i].lat);
            this.ctx.lineTo(p.x, p.y);
        }

        this.ctx.stroke();
    }
    this.ctx.restore();
  }

  private drawCapitals() {
    if (!this.countries || this.countries.length === 0) return;
    this.ctx.save();
    this.ctx.shadowBlur = 4 / this.scale;
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';

    for (const country of this.countries) {
      const lat = country.lat !== undefined ? country.lat : country.latitude;
      const lon = country.lon !== undefined ? country.lon : country.longitude;
      const capitalName = country.capital || country.ibukota;
      
      if (lat === undefined || lon === undefined) continue;
      const { x, y } = this.projector.project(Number(lon), Number(lat));

      // Draw Capital Star
      const outerRadius = Math.max(3.5 / this.scale, 0.8);
      const innerRadius = outerRadius / 2.5;
      this.drawStar(x, y, 5, outerRadius, innerRadius);
      this.ctx.fillStyle = '#22d3ee';
      this.ctx.fill();

      // Labels at high zoom
      if (this.scale > 4.5 && capitalName) {
        this.ctx.font = `bold ${10 / this.scale}px "Cascadia Code", monospace`;
        this.ctx.fillStyle = '#22d3ee';
        this.ctx.textAlign = 'center';
        this.ctx.shadowBlur = 2 / this.scale;
        this.ctx.fillText(capitalName.toUpperCase(), x, y - (6 / this.scale));
      }
    }
    this.ctx.restore();
  }
}
