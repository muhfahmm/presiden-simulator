/**
 * Helper to parse income strings.
 */
export function parseIncomeString(pendapatan_nasional: string): number {
  if (!pendapatan_nasional) return 100;
  const cleaned = pendapatan_nasional.replace(/[.,\s]/g, '');
  const plainNum = parseFloat(cleaned);
  if (!isNaN(plainNum) && plainNum > 0) return plainNum;
  const match = pendapatan_nasional.match(/(\d+[\d.,]*)\s*([TMK])/);
  if (match) return parseFloat(match[1].replace(/[.,]/g, ''));
  return 100;
}
