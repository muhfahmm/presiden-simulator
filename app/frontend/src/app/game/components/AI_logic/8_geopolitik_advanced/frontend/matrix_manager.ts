/**
 * MatrixManager for Geopolitical AI System
 * Manages the 207x207 relation matrix in-memory.
 */

export interface GeopolitikStateResponse {
  status: string;
  relations?: number[];
  message?: string;
}

export class MatrixManager {
  private static instance: MatrixManager;
  private relations: number[] = [];
  private matrixSize: number = 207;
  private apiBaseUrl: string = 'http://127.0.0.1:9090/api';

  private constructor() {}

  public static getInstance(): MatrixManager {
    if (!MatrixManager.instance) {
      MatrixManager.instance = new MatrixManager();
    }
    return MatrixManager.instance;
  }

  /**
   * Fetches the initial relation state from the Go API.
   */
  async fetchRelations(): Promise<number[]> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/relations`);
      const data: GeopolitikStateResponse = await response.json();
      
      if (data.status === 'ok' && data.relations) {
        this.relations = data.relations;
        console.log(`[MatrixManager] Successfully fetched ${this.relations.length} relations.`);
        return this.relations;
      } else {
        console.error('[MatrixManager] Failed to load relations:', data.message);
      }
    } catch (error) {
      console.error('[MatrixManager] Error fetching relations:', error);
    }
    return [];
  }

  /**
   * Triggers a turn update in the Rust core engine via the Go API.
   */
  async runTurn(): Promise<number[]> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/turn`, {
        method: 'POST'
      });
      const data: GeopolitikStateResponse = await response.json();
      
      if (data.status === 'ok' && data.relations) {
        this.relations = data.relations;
        console.log(`[MatrixManager] Turn completed. Updated relations.`);
        return this.relations;
      } else {
        console.error('[MatrixManager] Failed to run turn:', data.message);
      }
    } catch (error) {
      console.error('[MatrixManager] Error running turn:', error);
    }
    return [];
  }

  /**
   * Explictly saves the current state in the Rust core to JSON.
   */
  async saveState(): Promise<void> {
    try {
      await fetch(`${this.apiBaseUrl}/save`, {
        method: 'POST'
      });
      console.log(`[MatrixManager] State successfully saved.`);
    } catch (error) {
      console.error('[MatrixManager] Error saving state:', error);
    }
  }

  /**
   * Gets the relation score between country A and country B.
   * Runs in O(1) time complexity.
   * @param countryAId The 0-indexed ID of the source country.
   * @param countryBId The 0-indexed ID of the target country.
   */
  getRelation(countryAId: number, countryBId: number): number {
    if (this.relations.length === 0) return 50; // Default neutral
    const index = countryAId * this.matrixSize + countryBId;
    return this.relations[index] ?? 50;
  }

  getMatrix(): number[] {
    return this.relations;
  }
}

export const matrixManager = MatrixManager.getInstance();
