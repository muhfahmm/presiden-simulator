"use client";

/**
 * WarStorage.ts
 * Pusat penyimpanan data perang/invasi aktif.
 */

import { InvasiUnit } from "../modals_pilih_negara/logic/InvasiLogic";
import { JalurResult } from "../modals_pilih_negara/logic/visual_dan_jalur/JalurInvasiLogic";

export interface ActiveInvasion {
  id: string;
  source: string; 
  target: string; 
  units: InvasiUnit[];
  path: JalurResult;
  progress: number; 
  arrived: boolean;
  startDate: string;
  isAiVsUser?: boolean;
}

class WarStorage {
  private invasions: ActiveInvasion[] = [];
  private readonly STORAGE_KEY = 'active_invasions';

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.invasions = JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse invasions", e);
      }
    }
  }

  private saveToStorage() {
    if (typeof window === 'undefined') localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.invasions));
    window.dispatchEvent(new CustomEvent('WAR_STORAGE_UPDATED'));
  }

  public getInvasions(): ActiveInvasion[] {
    return this.invasions;
  }

  public addInvasion(invasion: ActiveInvasion) {
    this.invasions.push(invasion);
    this.saveToStorage();
  }

  public updateProgress(id: string, progress: number, arrived: boolean = false) {
    const inv = this.invasions.find(i => i.id === id);
    if (inv) {
      inv.progress = progress;
      inv.arrived = arrived;
      this.saveToStorage();
    }
  }

  public removeInvasion(id: string) {
    this.invasions = this.invasions.filter(i => i.id !== id);
    this.saveToStorage();
    window.dispatchEvent(new CustomEvent('REMOVE_INVASION', { detail: { target: id.split('-')[1] } }));
  }

  public clear() {
    this.invasions = [];
    if (typeof window !== 'undefined') localStorage.removeItem(this.STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('CLEAR_INVASIONS'));
  }
}

export const warStorage = new WarStorage();
