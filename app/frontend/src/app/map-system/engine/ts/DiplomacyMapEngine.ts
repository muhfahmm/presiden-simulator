import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';
import { relationStorage } from '@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage';
import { unSecurityCouncilStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage';
import { allRelations } from '@/app/database/data/database_hubungan_antar_negara';

export class DiplomacyMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;
  private relationsCache: Map<string, { hex: string; score: number }> = new Map();

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number, tacticalCtx: CanvasRenderingContext2D) {
    super(ctx, width, height, tacticalCtx);
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

      const targetId = relationStorage.normalizeTargetId(name);
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
    
    this.invalidateCache();
  }

  protected drawBackground(ctx: CanvasRenderingContext2D): void {
    // Ocean Background - Tactical Blue (Standardized)
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(0, 0, this.width, this.height);
  }

  protected drawFeature(feature: GeoJsonFeature, ctx: CanvasRenderingContext2D): void {
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
      
      const isPlayer = center.name_en === this.playerCountryName || center.name_id === this.playerCountryName;
      const isTarget = center.name_en === this.targetCountryName || center.name_id === this.targetCountryName;

      if (!isPlayer && !isTarget) {
        // Small static dot
        ctx.beginPath();
        const nameIdKey = center.name_id?.toLowerCase();
        const relData = nameIdKey ? this.relationsCache.get(nameIdKey) : null;
        ctx.arc(x, y, 4 / this.scale, 0, Math.PI * 2); 
        ctx.fillStyle = relData?.hex || "#475569";
        ctx.fill();
        continue;
      }

      ctx.beginPath();
      ctx.arc(x, y, 6 / this.scale, 0, Math.PI * 2);
      if (isPlayer) {
        ctx.fillStyle = "#22d3ee";
        ctx.shadowColor = "#22d3ee";
        ctx.shadowBlur = 15 / this.scale;
      } else {
        ctx.fillStyle = "#f59e0b";
        ctx.shadowColor = "#f59e0b";
        ctx.shadowBlur = 15 / this.scale;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    ctx.restore();
  }
}
