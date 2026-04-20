import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';

export class SDAMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;
  public onSelectSDA: ((data: any) => void) | null = null;

  protected drawBackground(): void {
    // Ocean Background - Tactical Blue (Standardized)
    this.ctx.fillStyle = '#1e3a8a';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  protected drawFeature(feature: GeoJsonFeature): void {
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
  }

  protected drawOverlays(): void {
    if (!this.countries || this.countries.length === 0) return;

    this.ctx.save();
    for (const center of this.countries) {
      if (!center.latitude || !center.longitude) continue;
      const { x, y } = this.projector.project(Number(center.longitude), Number(center.latitude));

      const resources = center.sektor_ekstraksi || {};
      const activeResources = Object.entries(resources).filter(([_, v]) => (v as number) > 0);
      if (activeResources.length === 0) continue;

      // Draw Resource Indicator (Pickaxe icon replacement)
      this.drawResourceIcon(x, y);
    }
    this.ctx.restore();
  }

  private drawResourceIcon(x: number, y: number) {
    const size = 12 / this.scale;
    const padding = 2 / this.scale;
    
    // Background Box
    this.ctx.fillStyle = 'rgba(24, 24, 27, 0.8)'; // zinc-900 shadow
    this.ctx.strokeStyle = 'rgba(63, 63, 70, 0.8)'; // zinc-700
    this.ctx.lineWidth = 1 / this.scale;
    
    this.ctx.beginPath();
    this.ctx.roundRect(x - size/2 - padding, y - size/2 - padding, size + padding*2, size + padding*2, 2 / this.scale);
    this.ctx.fill();
    this.ctx.stroke();

    // Simplified Pickaxe Icon
    this.ctx.fillStyle = '#fb923c'; // orange-400
    this.ctx.beginPath();
    // Handle
    this.ctx.rect(x - 1/this.scale, y - 4/this.scale, 2/this.scale, 8/this.scale);
    // Head
    this.ctx.moveTo(x - 5/this.scale, y - 4/this.scale);
    this.ctx.lineTo(x + 5/this.scale, y - 4/this.scale);
    this.ctx.lineTo(x, y - 2/this.scale);
    this.ctx.closePath();
    this.ctx.fill();
  }
}
