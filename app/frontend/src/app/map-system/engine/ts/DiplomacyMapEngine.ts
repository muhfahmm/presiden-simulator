import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';
import { relationStorage } from '@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage';
import { unSecurityCouncilStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage';
import { allRelations } from '@/app/database/data/database_hubungan_antar_negara';

export class DiplomacyMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;
  private relationsCache: Map<string, { hex: string; score: number }> = new Map();

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    super(ctx, width, height);
  }

  public updateRelations() {
    if (!this.countries || this.countries.length === 0 || !this.playerCountryName) return;
    
    this.relationsCache.clear();
    const isUNSCMember = unSecurityCouncilStorage.getData()?.members?.some((m: any) =>
      m.name?.toLowerCase() === this.playerCountryName?.toLowerCase()
    );

    const userEntry = this.countries.find(c => 
      c.name_en === this.playerCountryName || c.nama_negara === this.playerCountryName || c.name_id === this.playerCountryName
    );
    const userId = userEntry?.name_id 
      ? userEntry.name_id.toLowerCase().trim() 
      : (this.playerCountryName?.toLowerCase().trim() || '');

    this.countries.forEach(center => {
      if (center.name_id === undefined) return;
      const name = center.name_en || center.nama_negara;

      if (name === this.playerCountryName) {
        this.relationsCache.set(center.name_id.toLowerCase(), { hex: '#10b981', score: 100 });
        return;
      }

      const targetId = relationStorage.normalizeTargetId(name, this.countries);
      const userRelations = (allRelations as any)[userId];
      const relationData = Array.isArray(userRelations)
        ? userRelations.find((item: any) => item.name?.toLowerCase().trim() === targetId)
        : null;
      
      const baseScore = relationData ? relationData.relation : 50;
      const rawScore = relationStorage.getRelationScore(targetId, baseScore, userId);
      const finalScore = relationStorage.calculateFinalScore(rawScore, !!isUNSCMember);
      const meta = relationStorage.getRelationMetadata(finalScore);
      
      if (center.name_id) {
        this.relationsCache.set(center.name_id.toLowerCase(), { hex: meta?.hex || "#475569", score: finalScore });
      }
      if (center.name_en) {
        this.relationsCache.set(center.name_en.toLowerCase(), { hex: meta?.hex || "#475569", score: finalScore });
      }
    });
    
    this.requestRender();
  }

  protected drawBackground(): void {
    // Ocean Background - Tactical Blue (Standardized)
    this.ctx.fillStyle = '#1e3a8a';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  protected drawFeature(feature: GeoJsonFeature): void {
    const name = (feature.properties.NAME || '').toLowerCase();
    const nameLong = (feature.properties.NAME_LONG || '').toLowerCase();
    const nameId = (feature.properties.NAME_ID || '').toLowerCase();

    const continent = feature.properties.CONTINENT || 'Unknown';
    const baseColor = CONTINENT_COLORS[continent] || '#475569';

    const isPlayer = this.playerCountryName && (
      name === this.playerCountryName.toLowerCase() ||
      nameLong === this.playerCountryName.toLowerCase() ||
      nameId === this.playerCountryName.toLowerCase()
    );

    const relData = this.relationsCache.get(nameId) || 
                    this.relationsCache.get(name) || 
                    { hex: baseColor, score: 50 };

    let color = isPlayer ? '#10b981' : relData.hex;
    let borderColor = isPlayer ? '#34d399' : 'rgba(255, 255, 255, 0.6)';
    let lineWidth = isPlayer ? Math.max(2 / this.scale, 1) : Math.max(0.7 / this.scale, 0.4);

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
      
      const isPlayer = center.name_en === this.playerCountryName || center.name_id === this.playerCountryName;
      const isTarget = center.name_en === this.targetCountryName || center.name_id === this.targetCountryName;

      if (!isPlayer && !isTarget) {
        // Small static dot
        this.ctx.beginPath();
        const nameIdKey = center.name_id?.toLowerCase();
        const relData = nameIdKey ? this.relationsCache.get(nameIdKey) : null;
        this.ctx.arc(x, y, 4 / this.scale, 0, Math.PI * 2); 
        this.ctx.fillStyle = relData?.hex || "#475569";
        this.ctx.fill();
        continue;
      }

      this.ctx.beginPath();
      this.ctx.arc(x, y, 6 / this.scale, 0, Math.PI * 2);
      if (isPlayer) {
        this.ctx.fillStyle = "#22d3ee";
        this.ctx.shadowColor = "#22d3ee";
        this.ctx.shadowBlur = 15 / this.scale;
      } else {
        this.ctx.fillStyle = "#f59e0b";
        this.ctx.shadowColor = "#f59e0b";
        this.ctx.shadowBlur = 15 / this.scale;
      }
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }
    this.ctx.restore();
  }
}
