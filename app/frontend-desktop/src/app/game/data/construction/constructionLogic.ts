export interface ProgressInfo {
  percentage: number;
  colorClass: string;
  isComplete: boolean;
}

export function calculateConstructionProgress(startDate: number, endDate: number, currentDate: number): ProgressInfo {
  if (currentDate >= endDate) {
    return { percentage: 100, colorClass: "bg-emerald-500", isComplete: true };
  }
  
  const totalDuration = endDate - startDate;
  const elapsed = currentDate - startDate;
  const percentage = Math.max(0, Math.min(100, Math.round((elapsed / totalDuration) * 100)));

  let colorClass = "bg-rose-500"; // 0-30 (Red)
  if (percentage >= 70) {
    colorClass = "bg-emerald-500"; // 70-100 (Green)
  } else if (percentage > 30) {
    colorClass = "bg-amber-500"; // 31-69 (Yellow)
  }

  return { percentage, colorClass, isComplete: false };
}

export function getStatusText(percentage: number): string {
  if (percentage >= 100) return "Selesai";
  if (percentage >= 70) return "Finishing...";
  if (percentage >= 40) return "Konstruksi Utama...";
  return "Persiapan Dasar...";
}
