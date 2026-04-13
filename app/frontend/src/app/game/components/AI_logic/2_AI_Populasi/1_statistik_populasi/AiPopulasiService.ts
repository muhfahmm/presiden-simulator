/**
 * Service to interact with the AI Population API
 */
export class AiPopulasiService {
  /**
   * Request an analysis of the population from the AI
   * @param population Total population count
   * @param budget Current national budget
   * @param metrics Population metrics from calculateDetailedPopulationMetrics
   * @param country_data Raw country data from the database
   */
  static async analyzePopulation(
    population: number,
    budget: number,
    metrics: any,
    country_data: any
  ) {
    try {
      const response = await fetch("/api/game/populasi/statistik", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          population,
          budget,
          metrics,
          country_data,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze population");
      }

      return await response.json();
    } catch (error: any) {
      console.error("[AiPopulasiService] Error:", error.message);
      return {
        status: "ERROR",
        error: error.message,
      };
    }
  }
}
